import React, { useCallback } from 'react'
import * as S from './styles'
import { SITUATION_OPTIONS, isAvailableToTrail } from '../constants/mocks'
import { SelectSituation } from '../SelectSituation'
import { InspectionDialog } from '../..'
import { isArray, isDocumetType } from '../../../../interfaces/typeGuards'
import { TableDataProps } from '../../repository/getInspectionItemsRepository'

interface TableRowProps {
  item: TableDataProps
  index: number
  setDialogInspectionStep: React.Dispatch<
    React.SetStateAction<InspectionDialog>
  >
  handleUpdateDialogControlled: (open: boolean) => void
  setTableData: React.Dispatch<React.SetStateAction<TableDataProps[]>>
  tableData: TableDataProps[]
  setEditorData: React.Dispatch<React.SetStateAction<string>>
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  setIdDialogOpen: React.Dispatch<React.SetStateAction<string>>
  setObservationsData: React.Dispatch<React.SetStateAction<string>>
}

const TableRow: React.FC<TableRowProps> = ({
  item,
  index,
  setIsEditing,
  setDialogInspectionStep,
  handleUpdateDialogControlled,
  setIdDialogOpen,
  setTableData,
  tableData,
  setEditorData,
  setObservationsData,
}) => {
  const typeTrail = item.trail
    ? isArray(item.trail)
      ? 'document'
      : 'mark'
    : null

  function formatMessageWhenDocumentType(trail: any[]) {
    return `Existe ${trail.length} rastro(s) para esse item.`
  }

  function handleClickOpenMarksDocument() {
    handleUpdateDialogControlled(true)
    setIdDialogOpen(item.itemIndex)
    setDialogInspectionStep('document_trail_marks')
  }

  function handleChooseTrail(id: string) {
    setIsEditing(false)
    setDialogInspectionStep('choose_trail')
    handleUpdateDialogControlled(true)
    setIdDialogOpen(id)
  }

  function handleObservations() {
    setDialogInspectionStep('add_observation')
    handleUpdateDialogControlled(true)
    setIdDialogOpen(item.itemIndex)
  }

  const handleValueChange = useCallback(
    (value: string, id: string, situation: string | null) => {
      const newData = tableData.map((item) => {
        if (item.itemIndex === id) {
          return {
            ...item,
            situation: value,
            trail: isAvailableToTrail(situation) ? item.trail : null,
          }
        }
        return item
      }) as TableDataProps[]

      setTableData(newData)
    },

    [setTableData, tableData],
  )

  const openDeleteTrailDialog = (id: string) => {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('delete_mark')
    setIdDialogOpen(id)
  }

  const openDeleteObservationsDialog = (id: string) => {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('delete_observation')
    setIdDialogOpen(id)
  }

  return (
    <tr key={item.itemIndex}>
      <S.ItemTd status={item.situation}>{index + 1}</S.ItemTd>
      <td
        style={{
          width: '170px',
          textAlign: `-webkit-center` as unknown as undefined,
        }}
      >
        <SelectSituation
          defaultValue={item.situation}
          items={SITUATION_OPTIONS}
          handleValueChange={(value) =>
            handleValueChange(value, item.itemIndex, item.situation)
          }
        />
      </td>
      <td
        style={{
          maxWidth: '600px',
        }}
      >
        <S.Description>{item.description}</S.Description>
      </td>
      <td>
        {!item.observations ? (
          <S.NonObservationText
            onClick={() => {
              handleObservations()
            }}
          >
            Insira aqui observações, justificativas ou ações corretivas
            referentes ao item inspecionado
          </S.NonObservationText>
        ) : (
          <S.ObservationTextAndIconWrapper>
            <S.ObservationText
              onClick={() => {
                handleObservations()
                setObservationsData(item.observations as string)
              }}
            >
              {item.observations}
            </S.ObservationText>
            <S.CloseRouded
              onClick={() => {
                openDeleteObservationsDialog(item.itemIndex)
              }}
            />
          </S.ObservationTextAndIconWrapper>
        )}
      </td>
      <S.TrailTd>
        {isAvailableToTrail(item.situation) && !item.trail && (
          <S.AddTrailButton onClick={() => handleChooseTrail(item.itemIndex)}>
            Adicionar rastro
          </S.AddTrailButton>
        )}

        {isAvailableToTrail(item.situation) &&
          item.trail &&
          !isDocumetType(typeTrail) && (
            <S.TrailTextAndIconWrapper>
              <S.TrailText
                onClick={() => {
                  handleUpdateDialogControlled(true)
                  setEditorData(item.trail ?? '')
                  setDialogInspectionStep('text_editor_trail')
                  setIdDialogOpen(item.itemIndex)
                  setIsEditing(true)
                }}
                dangerouslySetInnerHTML={{ __html: item.trail }}
              />
              <S.CloseRouded
                onClick={() => {
                  openDeleteTrailDialog(item.itemIndex)
                }}
              />
            </S.TrailTextAndIconWrapper>
          )}

        {isAvailableToTrail(item.situation) &&
          item.trail &&
          isDocumetType(typeTrail) && (
            <S.WrapperDocument>
              <S.DocumentTypeText onClick={handleClickOpenMarksDocument}>
                {formatMessageWhenDocumentType(item.trail)}
              </S.DocumentTypeText>
              <S.CloseRouded
                onClick={() => {
                  openDeleteTrailDialog(item.itemIndex)
                }}
              />
              <S.ClickToSeeText onClick={handleClickOpenMarksDocument}>
                Clique para visualizar
              </S.ClickToSeeText>
            </S.WrapperDocument>
          )}
      </S.TrailTd>
    </tr>
  )
}

export default React.memo(TableRow)
