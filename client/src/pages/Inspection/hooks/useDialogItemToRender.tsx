import { InspectionDialog } from '..'
import { useCallback, useState } from 'react'

import { TextEditorTrailDialog } from '../components/TextEditorTrailDialog'
import { ManagerDocumentsDialog } from '../components/ManagerDocumentsDialog'
import { EditInformationsDialog } from '../components/EditInformationsDialog'
import { DocumentMarkDialog } from '../components/DocumentMarkDialog'
import { ChooseDocumentMarkDialog } from '../components/ChooseDocumentMarkDialog'
import { defaultTheme } from '../../../styles/themes/default'
import { DialogConfig } from '../../InspectionList/hooks/useDialogItemToRender'
import { ChooseTrailDialog } from '../components/ChooseTrailDialog'
import { isArray, isArrayNotEmpty } from '../../../interfaces/typeGuards'
import { TableDataProps } from '../repository/getInspectionItemsRepository'
import { HeaderInspectionProps } from '../repository/getInspectionHeaderRepository'
import { ObservationsDialog } from '../components/ObservationsDialog'
import { getAccessToken } from '../../../utils/cookies'
import { DialogStatus } from '../../../components/DialogStatus'
import { useTitleDialogStatus } from '../../../components/DialogStatus/hooks/useTitleDialogStatus'
import { calculateSituationPercentage } from '../helpers'

export interface DocumentUploadedProps {
  id: string
  label: string
  value: string
}

export interface ButtonProps {
  id: string
  label: string
  showButton?: boolean
  variant?: 'primary' | 'secondary'
  action: (id?: string) => void
  disabled?: boolean
}

export type TrailType = 'text_editor' | 'mark_document'

interface DialogItemToRenderProps {
  handleUpdateDialogControlled: (open: boolean) => void
  dialogInspectionStep: InspectionDialog
  setDialogInspectionStep: React.Dispatch<
    React.SetStateAction<InspectionDialog>
  >
  idDialogOpen: string
  tableData: TableDataProps[]
  setTableData: React.Dispatch<React.SetStateAction<TableDataProps[]>>
  observationsData: string
  setObservationsData: React.Dispatch<React.SetStateAction<string>>
  editorData: string
  setEditorData: React.Dispatch<React.SetStateAction<string>>
  idEditing: boolean
  id: string
  handleDeleteTrail: (id: string) => void
  documentsUploaded: DocumentUploadedProps[]
  userId: string
  headerData: HeaderInspectionProps
  setHeaderData: React.Dispatch<React.SetStateAction<HeaderInspectionProps>>
  backToInpsectionList: () => void
  handleDeleteObservation: (id: string) => void
  isUpdating: boolean
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>
  handleSaveAll: () => Promise<void>
  reloadItems: () => void
  isSubmitingForMarkTrail: boolean
  setIsSubmitingForMarkTrail: React.Dispatch<React.SetStateAction<boolean>>
}

export function useDialogItemToRender({
  handleUpdateDialogControlled,
  dialogInspectionStep,
  setDialogInspectionStep,
  idDialogOpen,
  tableData,
  setTableData,
  editorData,
  setEditorData,
  idEditing,
  id,
  handleDeleteTrail,
  documentsUploaded,
  userId,
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
}: DialogItemToRenderProps) {
  const [trailType, setTrailType] = useState<TrailType>('text_editor')

  const isInspectionCompleted =
    calculateSituationPercentage(tableData) === '100'

  const token = getAccessToken()

  const itemSelected = tableData.find(
    (item) => item.itemIndex === idDialogOpen,
  )?.trail

  const updateTrailType = useCallback((value: TrailType) => {
    setTrailType(value)
  }, [])

  function handleWithTypeTrailChoosed() {
    if (trailType === 'text_editor') {
      setDialogInspectionStep('text_editor_trail')
    } else {
      setDialogInspectionStep('choose_document_mark')
    }
  }

  const handleObservationsChange = useCallback(() => {
    const newData = tableData.map((item) => {
      if (item.itemIndex === idDialogOpen) {
        return { ...item, observations: observationsData }
      }
      return item
    })
    setTableData(newData)
  }, [idDialogOpen, observationsData, setTableData, tableData])

  function saveTextEditorTrail() {
    const newData = tableData.map((item) => {
      if (item.itemIndex === idDialogOpen) {
        return { ...item, trail: editorData }
      }
      return item
    })
    setTableData(newData)
    setEditorData('')
    handleUpdateDialogControlled(false)
  }

  const titleFormatted = useTitleDialogStatus({
    fullString: 'Inspeção salva com sucesso!',
    substring: 'sucesso!',
  })

  const dialogConfig: DialogConfig = {
    choose_trail: {
      title: 'Escolher opção de rastro',
      component: (
        <ChooseTrailDialog
          trailType={trailType}
          updateTrailType={updateTrailType}
          hasDocuments={isArrayNotEmpty(documentsUploaded)}
          setDialogInspectionStep={setDialogInspectionStep}
        />
      ),
      width: '27rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Cancelar',
          variant: 'secondary',
          action: () => handleUpdateDialogControlled(false),
        },
        {
          id: 'continue',
          label: 'Avançar',
          variant: 'primary',
          action: () => handleWithTypeTrailChoosed(),
        },
      ],
    },
    text_editor_trail: {
      title: 'Editor de texto',
      component: (
        <TextEditorTrailDialog
          editorData={editorData}
          setEditorData={setEditorData}
        />
      ),
      width: '27rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: idEditing
            ? () => {
                setEditorData('')
                handleUpdateDialogControlled(false)
              }
            : () => {
                setEditorData('')
                setDialogInspectionStep('choose_trail')
              },
        },
        {
          id: 'continue',
          label: idEditing ? 'Editar' : 'Adicionar',
          variant: 'primary',
          action: () => saveTextEditorTrail(),
        },
      ],
    },
    edit_informations: {
      title: 'Editar informações',
      component: (
        <EditInformationsDialog
          inspectionId={id}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          headerData={headerData}
          setHeaderData={setHeaderData}
        />
      ),
      width: '32rem',
    },
    manager_documents: {
      title: 'Gerenciar documentos',
      component: (
        <ManagerDocumentsDialog
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          headerData={headerData}
          setHeaderData={setHeaderData}
          userId={userId}
          inspectionId={id}
          token={token as string}
          reloadItems={reloadItems}
          updateTrailType={updateTrailType}
        />
      ),
      width: '32rem',
    },
    document_trail_marks: {
      title: 'Rastros',
      component: <DocumentMarkDialog items={itemSelected} />,
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => handleUpdateDialogControlled(false),
        },
        {
          id: 'continue',
          label: 'Gerenciar marcação',
          variant: 'primary',
          action: () => {
            setDialogInspectionStep('choose_document_mark')
          },
        },
      ],
    },
    choose_document_mark: {
      title: 'Documentos disponíveis',
      description: 'Selecione um documento para começar a marcação.',
      component: (
        <ChooseDocumentMarkDialog
          setDialogInspectionStep={setDialogInspectionStep}
          items={documentsUploaded}
          id={id}
          hasTrailFilled={
            isArray(itemSelected) && isArrayNotEmpty(itemSelected)
          }
          amountOfItens={tableData.length}
          idMark={idDialogOpen}
          userId={userId}
          inspectionId={id}
          handleSaveAll={handleSaveAll}
          isSubmitingForMarkTrail={isSubmitingForMarkTrail}
          setIsSubmitingForMarkTrail={setIsSubmitingForMarkTrail}
        />
      ),
      width: '28rem',
    },
    delete_mark: {
      title: 'Excluir marcação',
      description:
        'Tem certeza de que deseja excluir esta marcação? Esta ação é irreversível e não será possível desfazê-la.',
      width: '28rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => handleUpdateDialogControlled(false),
        },
        {
          id: 'delete',
          label: 'Excluir',
          variant: 'primary',
          action: () => {
            handleDeleteTrail(idDialogOpen)
            handleUpdateDialogControlled(false)
          },
          backgroundColor: defaultTheme.colors.error700,
          color: defaultTheme.colors.neutral,
        },
      ],
    },
    delete_observation: {
      title: 'Excluir observação',
      description:
        'Tem certeza de que deseja excluir esta observação? Esta ação é irreversível e não será possível desfazê-la.',
      width: '28rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => handleUpdateDialogControlled(false),
        },
        {
          id: 'delete',
          label: 'Excluir',
          variant: 'primary',
          action: () => {
            handleDeleteObservation(idDialogOpen)
            handleUpdateDialogControlled(false)
          },
          backgroundColor: defaultTheme.colors.error700,
          color: defaultTheme.colors.neutral,
        },
      ],
    },
    cancel_inspection: {
      title: 'Cancelar',
      description:
        'Tem certeza de que quer cancelar? Se você fez alguma alteração, ela será perdida.',
      width: '23rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => handleUpdateDialogControlled(false),
        },
        {
          id: 'delete',
          label: 'Cancelar',
          variant: 'primary',
          action: () => {
            handleUpdateDialogControlled(false)
            backToInpsectionList()
          },
          backgroundColor: defaultTheme.colors.error700,
          color: defaultTheme.colors.neutral,
        },
      ],
    },
    save_inspection: {
      component: (
        <DialogStatus.Root>
          <DialogStatus.AnimatedCheckIcon />
          <DialogStatus.Title>
            <div dangerouslySetInnerHTML={{ __html: titleFormatted }} />
          </DialogStatus.Title>
          <DialogStatus.Description>
            {isInspectionCompleted
              ? 'Parabéns! Você concluiu a inspeção. Para visualizar os relatórios, retorne à lista de inspeções e acesse a seção de relatório.'
              : `Você ainda não terminou sua inspeção. Sinta-se à vontade para retornar e concluir o processo.`}
          </DialogStatus.Description>
        </DialogStatus.Root>
      ),
      hideCloseButton: true,
      width: 'inherit',
      marginTopWrapperButton: '24px',
      buttonConfig: [
        {
          id: 'understand',
          label: 'Ok',
          variant: 'primary',
          action: () => {
            handleUpdateDialogControlled(false)
            backToInpsectionList()
          },
        },
      ],
    },
    add_observation: {
      title: 'Adicionar observação',
      width: '32rem',
      component: (
        <ObservationsDialog
          observationsData={observationsData}
          setObservationsData={setObservationsData}
        />
      ),
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => {
            handleUpdateDialogControlled(false)
            setObservationsData('')
          },
        },
        {
          id: 'continue',
          label: 'Salvar',
          variant: 'primary',
          action: () => {
            handleObservationsChange()
            handleUpdateDialogControlled(false)
            setObservationsData('')
          },
        },
      ],
    },
  }

  const dialogItemToRender = dialogConfig[dialogInspectionStep]

  return {
    dialogItemToRender,
  }
}
