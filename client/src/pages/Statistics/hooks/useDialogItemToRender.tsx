import { DialogStep } from '..'
import { DialogConfig } from '../../InspectionList/hooks/useDialogItemToRender'

interface DialogItemToRenderProps {
  dialogStep: DialogStep
  handleGraphicPrint: any
  handleUpdateDialogControlled: (open: boolean) => void
  handleItensPrint: any
}

export function useDialogItemToRender({
  dialogStep,
  handleGraphicPrint,
  handleUpdateDialogControlled,
  handleItensPrint,
}: DialogItemToRenderProps) {
  const dialogConfig: DialogConfig = {
    export_files: {
      title: 'Exportar dados',
      description:
        'Escolha a opção de exportação desejada. O resultado será um arquivo PDF, a exportação pode demorar um pouco.',
      width: '31rem',
      buttonConfig: [
        {
          id: 'export_graphic',
          label: 'Exportar gráfico',
          variant: 'primary',
          action: async () => {
            await handleGraphicPrint()
            handleUpdateDialogControlled(false)
          },
        },
        {
          id: 'export_items',
          label: 'Exportar itens',
          variant: 'primary',
          action: async () => {
            await handleItensPrint()
            handleUpdateDialogControlled(false)
          },
        },
      ],
    },
  }

  const dialogItemToRender = dialogConfig[dialogStep]

  return {
    dialogItemToRender,
  }
}
