import { useLoggedInspectionContext } from '../../../../contexts/LoggedInspection'
import { CreateInspectionIcon } from '../../assets/CreateInspectionIcon'
import { LogoutIcon } from '../../assets/LogoutIcon'
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

  function handleLogout() {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('logout')
  }

  return (
    <S.StyledHeader>
      <S.Title>RQ_ISP</S.Title>

      <S.WrrapperButtons>
        <S.PrimaryButtonStyled onClick={handleCreateInspection}>
          <CreateInspectionIcon />
          Criar inspeção
        </S.PrimaryButtonStyled>

        <S.LogoutButtonStyled onClick={handleLogout}>
          <LogoutIcon />
          Sair
        </S.LogoutButtonStyled>
      </S.WrrapperButtons>
    </S.StyledHeader>
  )
}
