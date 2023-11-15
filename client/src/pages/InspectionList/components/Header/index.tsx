import { CreateInspectionIcon } from '../../assets/CreateInspectionIcon'
import * as S from './styles'

export function Header() {
  return (
    <S.StyledHeader>
      <S.Title>RQ_ISP</S.Title>
      <S.PrimaryButtonStyled>
        <CreateInspectionIcon />
        Criar inspeção
      </S.PrimaryButtonStyled>
    </S.StyledHeader>
  )
}
