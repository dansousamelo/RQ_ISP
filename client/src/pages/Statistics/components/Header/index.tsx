import { DialogStep } from '../..'
import { CreateInspectionIcon } from '../../assets/CreateInspectionIcon'
import * as S from './styles'

interface HeaderProps {
  setDialogStep: React.Dispatch<React.SetStateAction<DialogStep>>
  handleUpdateDialogControlled: (open: boolean) => void
  isLoading: boolean
}

export function Header({
  setDialogStep,
  handleUpdateDialogControlled,
  isLoading,
}: HeaderProps) {
  function handleCreateInspection() {
    handleUpdateDialogControlled(true)
    setDialogStep('export_files')
  }

  return (
    <S.StyledHeader>
      <S.Title>RQ_ISP</S.Title>
      {isLoading ? (
        <S.ButtonSkeleton />
      ) : (
        <S.PrimaryButtonStyled onClick={handleCreateInspection}>
          <CreateInspectionIcon />
          Exportar
        </S.PrimaryButtonStyled>
      )}
    </S.StyledHeader>
  )
}
