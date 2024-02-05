import { useLoggedInspectionContext } from '../../../contexts/LoggedInspection'
import { FirstStepDialog } from '../components/FirstStepDialog'
import { SecondStepDialog } from '../components/SecondStepDialog'
import { ThirdStepDialog } from '../components/ThirdStepDialog'

export interface ButtonProps {
  id: string
  label: string
  showButton?: boolean
  variant?: 'primary' | 'secondary'
  action: (id?: string) => void
  disabled?: boolean
}

export interface DialogConfig {
  [key: string]: {
    title?: string | JSX.Element
    component: string | JSX.Element
    description?: string | JSX.Element
    buttonConfig?: ButtonProps[]
    hideCloseButton?: boolean
    marginTopWrapperButton?: string | number
    width?: string | number
  }
}

interface DialogItemToRenderProps {
  handleUpdateDialogControlled: (open: boolean) => void
}

export function useDialogItemToRender({
  handleUpdateDialogControlled,
}: DialogItemToRenderProps) {
  const { dialogInspectionStep, setDialogInspectionStep } =
    useLoggedInspectionContext()

  const dialogConfig: DialogConfig = {
    first_step: {
      title: 'Criar inspeção',
      description: 'Selecione o template de lista de verificação.',
      component: <FirstStepDialog />,
      width: '32rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => handleUpdateDialogControlled(false),
        },
        {
          id: 'continue',
          label: 'Avançar',
          variant: 'primary',
          action: () => setDialogInspectionStep('second_step'),
        },
      ],
    },
    second_step: {
      title: 'Criar inspeção',
      component: <SecondStepDialog />,
      width: '32rem',
    },
    third_step: {
      title: 'Criar inspeção',
      description:
        'Anexe os seus documentos para fazer marcações de rastreabilidade, você também poderá adicionar em outro momento.',
      component: <ThirdStepDialog />,
      width: '32rem',
    },
  }

  const dialogItemToRender = dialogConfig[dialogInspectionStep]

  return {
    dialogItemToRender,
  }
}
