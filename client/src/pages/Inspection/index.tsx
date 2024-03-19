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
import {
  TableDataProps,
  getInspectionItemsRepository,
} from './repository/getInspectionItemsRepository'
import { getAccessToken } from '../../utils/cookies'
import {
  DocumentHeader,
  getInspectionHeaderRepository,
} from './repository/getInspectionHeaderRepository'
import { BreadcrumbsSkeleton } from '../../components/Breadcrumb/skeleton'
import { TitleUpdater } from '../../components/TitleUpdater'
import { ErrorToast } from '../../components/Toast'
import { postInspection } from './services'
import { calculateSituationPercentage } from './helpers'
import { Spinner } from '../../components/Spinner'

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
  | 'save_inspection'
  | ''

export function Inspection() {
  const [isUpdating, setIsUpdating] = useState(false)
  const { id, userId } = useParams()
  const navigate = useNavigate()

  const token = getAccessToken()

  const paramsToFetch = {
    userId: userId as string,
    inspectionId: id as string,
    token: token as string,
  }

  const { tableData, isInspectionItemsLoading, setTableData, refetchItems } =
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
  const [isSubmitingForMarkTrail, setIsSubmitingForMarkTrail] = useState(false)

  const BREADCRUMBS: BreadcrumbItem[] = [
    {
      label: 'Inspeções',
      action: () => navigate(`/inspection/list/${userId}`),
    },
    {
      label: headerData.name,
      activate: true,
    },
  ]

  const backToInpsectionList = useCallback(() => {
    navigate(`/inspection/list/${userId}`)
  }, [userId, navigate])

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const handleDeleteTrail = (id: string) => {
    const newData = tableData.map((item) => {
      if (item.itemIndex === id) {
        return { ...item, trail: null }
      }
      return item
    })
    setTableData(newData)
  }

  const handleDeleteObservation = (id: string) => {
    const newData = tableData.map((item) => {
      if (item.itemIndex === id) {
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

  const handleSaveAll = useCallback(async () => {
    try {
      await postInspection<TableDataProps[]>({
        inspectionId: id as string,
        inspectionStatus: calculateSituationPercentage(tableData),
        token: token as string,
        items: tableData,
      })
    } catch (e) {
      ErrorToast(
        'Não foi possível salvar os itens, tente novamente mais tarde!',
      )
    }
  }, [id, tableData, token])

  const handleSaveItems = useCallback(async () => {
    setIsSaveItems(true)
    try {
      await postInspection<TableDataProps[]>({
        inspectionId: id as string,
        inspectionStatus: calculateSituationPercentage(tableData),
        token: token as string,
        items: tableData,
      })
      handleUpdateDialogControlled(true)
      setDialogInspectionStep('save_inspection')
    } catch (e) {
      ErrorToast(
        'Não foi possível salvar os itens, tente novamente mais tarde!',
      )
    } finally {
      setIsSaveItems(false)
    }
  }, [handleUpdateDialogControlled, id, tableData, token])

  const reloadItems = useCallback(() => {
    refetchItems()
  }, [refetchItems])

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
    userId: userId as string,
    headerData,
    setHeaderData,
    backToInpsectionList,
    observationsData,
    setObservationsData,
    handleDeleteObservation,
    isUpdating,
    setIsUpdating,
    handleSaveAll,
    reloadItems,
    isSubmitingForMarkTrail,
    setIsSubmitingForMarkTrail,
  })

  const [isSavingItems, setIsSaveItems] = useState(false)

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
                  key={item.itemIndex}
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
            disabled={isLoadingInformations || isSavingItems}
            onClick={handleSaveItems}
          >
            {isSavingItems ? (
              <div
                style={{
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Salvando
                <Spinner />
              </div>
            ) : (
              'Salvar'
            )}
          </S.SaveInspectionButton>
        </S.WrapperSaveAndCancel>
      </S.Container>
      {isDialogControlledOpen && isNotUndefined(dialogItemToRender) && (
        <DialogControlled
          isDialogControlledOpen={isDialogControlledOpen}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          dialogItemToRender={dialogItemToRender}
          isLoadingRequisition={isUpdating || isSubmitingForMarkTrail}
          onClose={() => {
            setEditorData('')
            setObservationsData('')
          }}
        />
      )}
    </>
  )
}
