import { styled } from 'styled-components'
import { DialogConfig } from '../../InspectionList/hooks/useDialogItemToRender'
import { HighlightProps } from '../interfaces'

export type InspectionPDFMarkDialog = 'confirm_highlight' | ''

interface DialogItemToRenderProps {
  handleUpdateDialogControlled: (open: boolean) => void
  dialogInspectionStep: InspectionPDFMarkDialog
  hightlightToCreate: Omit<HighlightProps, 'id'>
  createHighlight: () => Promise<void>
}

const Container = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  border: 1px solid white;
  padding: 8px;
  border-radius: 8px;
  max-height: 400px;
  overflow-y: auto;
`

const HighlightLocation = styled.div`
  margin-top: 0.5rem;
  text-align: right;
  font-size: 12px;
`

export function useDialogItemToRender({
  handleUpdateDialogControlled,
  dialogInspectionStep,
  hightlightToCreate,
  createHighlight,
}: DialogItemToRenderProps) {
  const dialogConfig: DialogConfig = {
    confirm_highlight: {
      title: 'Revisar marcação',
      description: `Esta é a sua marcação para o item ${hightlightToCreate?.comment?.text}. Por favor, revise-a e salve-a, ou se preferir, também pode cancelá-la.`,
      component: (
        <Container>
          <blockquote style={{ marginTop: '0.5rem' }}>
            {hightlightToCreate?.content?.text}
          </blockquote>
          <HighlightLocation>
            Página {hightlightToCreate?.position?.pageNumber}
          </HighlightLocation>
        </Container>
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
          id: 'save',
          label: 'Salvar',
          variant: 'primary',
          action: async () => {
            await createHighlight()
            handleUpdateDialogControlled(false)
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
