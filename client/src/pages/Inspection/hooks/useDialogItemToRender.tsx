import { InspectionDialog } from '..'
import { useCallback, useState } from 'react'

import { TextEditorTrailDialog } from '../components/TextEditorTrailDialog'
import { ManagerDocumentsDialog } from '../components/ManagerDocumentsDialog'
import { EditInformationsDialog } from '../components/EditInformationsDialog'
import { MOCK_INFORMATIONS } from '../components/constants/mocks'
import { DocumentMarkDialog } from '../components/DocumentMarkDialog'
import { ChooseDocumentMarkDialog } from '../components/ChooseDocumentMarkDialog'
import { defaultTheme } from '../../../styles/themes/default'
import { DialogConfig } from '../../InspectionList/hooks/useDialogItemToRender'
import { ChooseTrailDialog } from '../components/ChooseTrailDialog'
import { isArray, isArrayNotEmpty } from '../../../interfaces/typeGuards'

export interface DocumentUploadedProps {
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

export interface TableDataProps {
  id: string
  situation: string | null
  description: string
  observations: string
  trail: any
}

interface DialogItemToRenderProps {
  handleUpdateDialogControlled: (open: boolean) => void
  dialogInspectionStep: InspectionDialog
  setDialogInspectionStep: React.Dispatch<
    React.SetStateAction<InspectionDialog>
  >
  idDialogOpen: string
  tableData: TableDataProps[]
  setTableData: React.Dispatch<React.SetStateAction<TableDataProps[]>>
  editorData: string
  setEditorData: React.Dispatch<React.SetStateAction<string>>
  idEditing: boolean
  id: string
  handleDeleteTrail: (id: string) => void
  documentsUploaded: DocumentUploadedProps[]
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
}: DialogItemToRenderProps) {
  const [trailType, setTrailType] = useState<TrailType>('text_editor')

  const itemSelected = tableData.find((item) => item.id === idDialogOpen)?.trail

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

  function saveTextEditorTrail() {
    const newData = tableData.map((item) => {
      if (item.id === idDialogOpen) {
        return { ...item, trail: editorData }
      }
      return item
    })
    setTableData(newData)
    setEditorData('')
    handleUpdateDialogControlled(false)
  }

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
          label: idEditing ? 'Editar' : 'Salvar',
          variant: 'primary',
          action: () => saveTextEditorTrail(),
        },
      ],
    },
    edit_informations: {
      title: 'Editar informações',
      component: (
        <EditInformationsDialog
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          informations={MOCK_INFORMATIONS}
        />
      ),
      width: '32rem',
    },
    manager_documents: {
      title: 'Gerenciar documentos',
      component: <ManagerDocumentsDialog />,
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
          label: 'Adicionar marcação',
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
  }

  const dialogItemToRender = dialogConfig[dialogInspectionStep]

  return {
    dialogItemToRender,
  }
}
