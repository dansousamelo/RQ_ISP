import styled from 'styled-components'
import { InspectionMarkDialog, SidebarLiContent } from '..'
import { defaultTheme } from '../../../../../styles/themes/default'
import { DialogConfig } from '../../../../InspectionList/hooks/useDialogItemToRender'
import { HighlightProps } from '../../../interfaces'
import { deleteDocumentsMark } from '../../../services'

interface DialogItemToRenderProps {
  handleUpdateDialogControlled: (open: boolean) => void
  dialogInspectionStep: InspectionMarkDialog
  deleteConfirmHighlight: () => void
  hightlightToDelete: HighlightProps
  resetHighlights: () => void
  backToInspection(): void
  token: string
  documentId: string
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid white;
  padding: 16px;
  border-radius: 8px;
  margin-top: 1rem;
`

export function useDialogItemToRender({
  handleUpdateDialogControlled,
  dialogInspectionStep,
  deleteConfirmHighlight,
  hightlightToDelete,
  resetHighlights,
  backToInspection,
  token,
  documentId,
}: DialogItemToRenderProps) {
  const dialogConfig: DialogConfig = {
    delete_highlight: {
      title: 'Excluir marcação',
      component: (
        <>
          <span>Deseja realmente excluir a marcação?</span>
          <Container>
            <SidebarLiContent highlight={hightlightToDelete} />
          </Container>
        </>
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
          id: 'delete',
          label: 'Excluir',
          variant: 'primary',
          action: () => deleteConfirmHighlight(),
          backgroundColor: defaultTheme.colors.error700,
          color: defaultTheme.colors.neutral,
        },
      ],
    },
    clean_highlights: {
      title: 'Limpar marcações do documento',
      description:
        'Gostaria de remover as marcações? Ao optar por limpar, todas as marcações feitas no documento serão perdidas.',
      width: '27rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Cancelar',
          variant: 'secondary',
          action: () => handleUpdateDialogControlled(false),
        },
        {
          id: 'delete',
          label: 'Limpar',
          variant: 'primary',
          action: () => {
            resetHighlights()
            deleteDocumentsMark({
              documentId: documentId as string,
              token,
            })
            handleUpdateDialogControlled(false)
          },
          backgroundColor: defaultTheme.colors.error700,
          color: defaultTheme.colors.neutral,
        },
      ],
    },
    cancel_mark: {
      title: 'Cancelar',
      description:
        'Você deseja cancelar o processo? Se houve alterações, essas serão perdidas.',
      width: '25rem',
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
            backToInspection()
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
