import { useLoggedInspectionContext } from '../../../../contexts/LoggedInspection'
import { CreateInspectionIcon } from '../../assets/CreateInspectionIcon'
import * as S from './styles'

export function Header() {
  const {
    setDialogInspectionStep,
    dialogInspectionStep,
    handleUpdateDialogControlled,
  } = useLoggedInspectionContext()

  function handleCreateInspection() {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep(dialogInspectionStep || 'first_step')
  }

  return (
    <S.StyledHeader>
      <S.Title>RQ_ISP</S.Title>
      <S.PrimaryButtonStyled onClick={handleCreateInspection}>
        <CreateInspectionIcon />
        Criar inspeção
      </S.PrimaryButtonStyled>
    </S.StyledHeader>
  )
}
