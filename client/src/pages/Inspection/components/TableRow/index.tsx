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
    setIdDialogOpen(item.item_index)
    setDialogInspectionStep('document_trail_marks')
  }

  function handleChooseTrail(id: string) {
    setIsEditing(false)
    setDialogInspectionStep('choose_trail')
    handleUpdateDialogControlled(true)
    setIdDialogOpen(id)
  }

  const handleValueChange = useCallback(
    (value: string, id: string, situation: string | null) => {
      const newData = tableData.map((item) => {
        if (item.item_index === id) {
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

  return (
    <tr key={item.item_index}>
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
            handleValueChange(value, item.item_index, item.situation)
          }
        />
      </td>
      <td
        style={{
          maxWidth: '400px',
        }}
      >
        <S.Description>{item.description}</S.Description>
      </td>
      <td>
        <S.ObservationText
          onClick={() => {
            setDialogInspectionStep('add_observation')
            handleUpdateDialogControlled(true)
            setIdDialogOpen(item.item_index)
          }}
        >
          Insira aqui observações, justificativas ou ações corretivas referentes
          ao item inspecionado
        </S.ObservationText>
      </td>
      <S.TrailTd>
        {isAvailableToTrail(item.situation) && !item.trail && (
          <S.AddTrailButton onClick={() => handleChooseTrail(item.item_index)}>
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
                  setIdDialogOpen(item.item_index)
                  setIsEditing(true)
                }}
                dangerouslySetInnerHTML={{ __html: item.trail }}
              />
              <S.CloseRouded
                onClick={() => {
                  openDeleteTrailDialog(item.item_index)
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
                  openDeleteTrailDialog(item.item_index)
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
