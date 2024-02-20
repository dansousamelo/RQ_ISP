// import { useParams } from 'react-router-dom'
import * as S from './styles'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Header } from './components/Header'
import { useState } from 'react'
import {
  MOCK_DATA,
  MOCK_DOCUMENTS_UPLOADED,
} from './components/constants/mocks'
import {
  DialogControlled,
  useDialogControlled,
} from '../../components/DialogControlled'
import { isNotUndefined } from '../../interfaces/typeGuards'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import TableRow from './components/TableRow'
import { useParams, useNavigate } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  action: () => void
  activate?: boolean
}

export type InspectionDialog =
  | 'text_editor_trail'
  | 'choose_trail'
  | 'edit_informations'
  | 'delete_mark'
  | 'manager_documents'
  | 'document_trail_marks'
  | 'choose_document_mark'
  | ''

export function Inspection() {
  const { id } = useParams()
  const navigate = useNavigate()

  const BREADCRUMBS: BreadcrumbItem[] = [
    {
      label: 'Inspeções',
      action: () => navigate('/inspection/list'),
    },
    {
      label: 'ConecteSUS',
      action: () => console.log('ConecteSUS'),
      activate: true,
    },
  ]

  const [tableData, setTableData] = useState(MOCK_DATA)
  const [dialogInspectionStep, setDialogInspectionStep] =
    useState<InspectionDialog>('')
  const [idDialogOpen, setIdDialogOpen] = useState('')
  const [editorData, setEditorData] = useState<string>('')
  const [idEditing, setIsEditing] = useState(false)

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const handleDeleteTrail = (id: string) => {
    const newData = tableData.map((item) => {
      if (item.id === id) {
        return { ...item, trail: null }
      }
      return item
    })
    setTableData(newData)
  }

  const { dialogItemToRender } = useDialogItemToRender({
    handleUpdateDialogControlled,
    dialogInspectionStep,
    setDialogInspectionStep,
    idDialogOpen,
    tableData,
    setTableData,
    editorData,
    setEditorData,
    idEditing,
    id: id as string,
    handleDeleteTrail,
    documentsUploaded: MOCK_DOCUMENTS_UPLOADED,
  })

  const handleSaveAll = () => {
    console.log('Informações da tabela:', tableData)
  }

  return (
    <>
      <S.Container>
        <Breadcrumb items={BREADCRUMBS} />
        <Header
          tableData={tableData}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          setDialogInspectionStep={setDialogInspectionStep}
        />

        <S.TableStyled>
          <thead>
            <tr>
              <th
                style={{
                  borderTopLeftRadius: '8px',
                }}
              >
                Item
              </th>
              <th>Situação</th>
              <th>Descrição</th>
              <th>Observações</th>
              <th
                style={{
                  borderTopRightRadius: '8px',
                }}
              >
                Rastro
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <TableRow
                item={item}
                key={item.id}
                index={index}
                setIsEditing={setIsEditing}
                setDialogInspectionStep={setDialogInspectionStep}
                handleUpdateDialogControlled={handleUpdateDialogControlled}
                setIdDialogOpen={setIdDialogOpen}
                setTableData={setTableData}
                tableData={tableData}
                setEditorData={setEditorData}
              />
            ))}
          </tbody>
        </S.TableStyled>
        <S.WrapperSaveAndCancel>
          <S.CancelInspectionButton onClick={handleSaveAll}>
            Cancelar
          </S.CancelInspectionButton>
          <S.SaveInspectionButton onClick={handleSaveAll}>
            Salvar
          </S.SaveInspectionButton>
        </S.WrapperSaveAndCancel>
      </S.Container>
      {isDialogControlledOpen && isNotUndefined(dialogItemToRender) && (
        <DialogControlled
          isDialogControlledOpen={isDialogControlledOpen}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          dialogItemToRender={dialogItemToRender}
          isLoadingRequisition={false}
          onClose={() => setEditorData('')}
        />
      )}
    </>
  )
}
