// import { useParams } from 'react-router-dom'
import * as S from './styles'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Header } from './components/Header'
import { useCallback, useState } from 'react'
import {
  DialogControlled,
  useDialogControlled,
} from '../../components/DialogControlled'
import { isNotUndefined } from '../../interfaces/typeGuards'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import TableRow from './components/TableRow'
import { useParams, useNavigate } from 'react-router-dom'
import { InspectionTableSkeleton } from './components/InspectionTableSkeleton'
import { HeaderSkeleton } from './components/HeaderSkeleton'
import { getInspectionItemsRepository } from './repository/getInspectionItemsRepository'
import { getAccessToken } from '../../utils/cookies'
import {
  DocumentHeader,
  getInspectionHeaderRepository,
} from './repository/getInspectionHeaderRepository'
import { BreadcrumbsSkeleton } from '../../components/Breadcrumb/skeleton'
import { TitleUpdater } from '../../components/TitleUpdater'

interface BreadcrumbItem {
  label: string
  action?: () => void
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
  | 'cancel_inspection'
  | 'add_observation'
  | 'delete_observation'
  | ''

export function Inspection() {
  const { id, accessCode } = useParams()
  const navigate = useNavigate()

  const token = getAccessToken()

  const paramsToFetch = {
    accessCode: accessCode as string,
    inspectionId: id as string,
    token: token as string,
  }

  const { tableData, isInspectionItemsLoading, setTableData } =
    getInspectionItemsRepository(paramsToFetch)

  const { headerData, isInspectionHeaderLoading, setHeaderData } =
    getInspectionHeaderRepository(paramsToFetch)

  const isLoadingInformations =
    isInspectionHeaderLoading || isInspectionItemsLoading

  const [dialogInspectionStep, setDialogInspectionStep] =
    useState<InspectionDialog>('')
  const [idDialogOpen, setIdDialogOpen] = useState('')
  const [editorData, setEditorData] = useState<string>('')
  const [observationsData, setObservationsData] = useState<string>('')
  const [idEditing, setIsEditing] = useState(false)

  const BREADCRUMBS: BreadcrumbItem[] = [
    {
      label: 'Inspeções',
      action: () => navigate(`/inspection/list/${accessCode}`),
    },
    {
      label: headerData.name,
      activate: true,
    },
  ]

  const backToInpsectionList = useCallback(() => {
    navigate(`/inspection/list/${accessCode}`)
  }, [accessCode, navigate])

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const handleDeleteTrail = (id: string) => {
    const newData = tableData.map((item) => {
      if (item.item_index === id) {
        return { ...item, trail: null }
      }
      return item
    })
    setTableData(newData)
  }

  const handleDeleteObservation = (id: string) => {
    const newData = tableData.map((item) => {
      if (item.item_index === id) {
        return { ...item, observations: null }
      }
      return item
    })
    setTableData(newData)
  }

  function formattedDocumentHeader(documents: DocumentHeader[]) {
    return documents.map((document) => {
      return {
        id: document.id,
        label: document.name,
        value: document.url,
      }
    })
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
    documentsUploaded: headerData?.documents
      ? formattedDocumentHeader(headerData.documents)
      : [],
    accessCode: accessCode as string,
    headerData,
    setHeaderData,
    backToInpsectionList,
    observationsData,
    setObservationsData,
    handleDeleteObservation,
  })

  const handleSaveAll = () => {
    console.log('Informações da tabela:', tableData)
  }

  return (
    <>
      <TitleUpdater title="Inspecionar" />
      <S.Container>
        {isLoadingInformations ? (
          <BreadcrumbsSkeleton />
        ) : (
          <Breadcrumb items={BREADCRUMBS} />
        )}

        {isLoadingInformations ? (
          <HeaderSkeleton />
        ) : (
          <Header
            headerData={headerData}
            tableData={tableData}
            handleUpdateDialogControlled={handleUpdateDialogControlled}
            setDialogInspectionStep={setDialogInspectionStep}
          />
        )}

        {isLoadingInformations ? (
          <InspectionTableSkeleton />
        ) : (
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
                  key={item.item_index}
                  index={index}
                  setIsEditing={setIsEditing}
                  setDialogInspectionStep={setDialogInspectionStep}
                  handleUpdateDialogControlled={handleUpdateDialogControlled}
                  setIdDialogOpen={setIdDialogOpen}
                  setTableData={setTableData}
                  tableData={tableData}
                  setEditorData={setEditorData}
                  setObservationsData={setObservationsData}
                />
              ))}
            </tbody>
          </S.TableStyled>
        )}

        <S.WrapperSaveAndCancel>
          <S.CancelInspectionButton
            onClick={() => {
              handleUpdateDialogControlled(true)
              setDialogInspectionStep('cancel_inspection')
            }}
          >
            Cancelar
          </S.CancelInspectionButton>
          <S.SaveInspectionButton
            disabled={isLoadingInformations}
            onClick={handleSaveAll}
          >
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
          onClose={() => {
            setEditorData('')
            setObservationsData('')
          }}
        />
      )}
    </>
  )
}
