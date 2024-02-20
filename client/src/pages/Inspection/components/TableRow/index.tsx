import React, { useCallback } from 'react'
import * as S from './styles'
import { SITUATION_OPTIONS, isAvailableToTrail } from '../constants/mocks'
import { SelectSituation } from '../SelectSituation'
import { InspectionDialog } from '../..'
import { TableDataProps } from '../../hooks/useDialogItemToRender'
import { isArray, isDocumetType } from '../../../../interfaces/typeGuards'

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
    setIdDialogOpen(item.id)
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
        if (item.id === id) {
          return {
            ...item,
            situation: value,
            trail: isAvailableToTrail(situation) ? item.trail : null,
          }
        }
        return item
      })
      setTableData(newData)
    },

    [setTableData, tableData],
  )

  const handleObservationsChange = (id: string, value: string) => {
    const newData = tableData.map((item) => {
      if (item.id === id) {
        return { ...item, observations: value }
      }
      return item
    })
    setTableData(newData)
  }

  const openDeleteTrailDialog = (id: string) => {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('delete_mark')
    setIdDialogOpen(id)
  }

  return (
    <tr key={item.id}>
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
            handleValueChange(value, item.id, item.situation)
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
        <textarea
          placeholder="Insira aqui observações, justificativas ou ações corretivas referentes ao item inspecionado"
          rows={5}
          cols={20}
          value={item.observations}
          onChange={(e) => handleObservationsChange(item.id, e.target.value)}
        />
      </td>
      <S.TrailTd>
        {isAvailableToTrail(item.situation) && !item.trail && (
          <S.AddTrailButton onClick={() => handleChooseTrail(item.id)}>
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
                  setIdDialogOpen(item.id)
                  setIsEditing(true)
                }}
                dangerouslySetInnerHTML={{ __html: item.trail }}
              />
              <S.CloseRouded
                onClick={() => {
                  openDeleteTrailDialog(item.id)
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
                  openDeleteTrailDialog(item.id)
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
