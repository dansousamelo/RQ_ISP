import { useLoggedInspectionContext } from '../../../contexts/LoggedInspection'
import { defaultTheme } from '../../../styles/themes/default'
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
  color?: string
  backgroundColor?: string
  borderColor?: string
}

export interface DialogConfig {
  [key: string]: {
    title?: string | JSX.Element
    component?: string | JSX.Element
    description?: string | JSX.Element
    buttonConfig?: ButtonProps[]
    hideCloseButton?: boolean
    marginTopWrapperButton?: string | number
    width?: string | number
  }
}

interface DialogItemToRenderProps {
  handleUpdateDialogControlled: (open: boolean) => void
  deleteInspectionDialog: () => void
  handleLogout: () => void
}

export function useDialogItemToRender({
  handleUpdateDialogControlled,
  deleteInspectionDialog,
  handleLogout,
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
          action: () => {
            handleUpdateDialogControlled(false)
            setDialogInspectionStep('')
          },
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
    delete_inspection: {
      title: 'Excluir inspeção',
      description:
        'Tem certeza de que deseja excluir esta inspeção? Esta ação é irreversível e não será possível desfazê-la.',
      width: '28rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => {
            handleUpdateDialogControlled(false)
            setDialogInspectionStep('')
          },
        },
        {
          id: 'delete',
          label: 'Excluir',
          variant: 'primary',
          action: () => {
            deleteInspectionDialog()
            setDialogInspectionStep('')
          },
          backgroundColor: defaultTheme.colors.error700,
          color: defaultTheme.colors.neutral,
        },
      ],
    },
    logout: {
      title: 'Confirmar saída',
      description: 'Tem certeza de que deseja encerrar a sessão na plataforma?',
      width: '20rem',
      buttonConfig: [
        {
          id: 'back',
          label: 'Voltar',
          variant: 'secondary',
          action: () => {
            handleUpdateDialogControlled(false)
            setDialogInspectionStep('')
          },
        },
        {
          id: 'delete',
          label: 'Sair',
          variant: 'primary',
          action: () => {
            handleLogout()
            handleUpdateDialogControlled(false)
            setDialogInspectionStep('')
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
