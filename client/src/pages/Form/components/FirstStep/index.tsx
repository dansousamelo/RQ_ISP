import { useNavigate } from 'react-router-dom'
import createChecklistPicture from '../../../../assets/createImage.png'
import { RadioGroup } from '../../../../components/RadioGroup'
import { StatusIndicator } from '../StatusIndicator'
import * as S from './styles'
import { MainContent } from '../../../../components/MainContent/components'

export function FirstStep() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <S.MainContainer>
      <MainContent.Root>
        <MainContent.Image
          src={createChecklistPicture}
          alt="Create checklist picture"
        />
        <S.ContentWrapper>
          <StatusIndicator currentStep={1} />
          <MainContent.Heading>Começar uma inspeção</MainContent.Heading>
          <MainContent.Paragraph>
            Selecione o template de lista de verificação.
          </MainContent.Paragraph>
          <S.RadioGroupWrapper>
            <RadioGroup />
          </S.RadioGroupWrapper>
          <S.WrapperButton>
            <S.BackButtonStyled onClick={goBack}>Voltar</S.BackButtonStyled>
            <S.ButtonStyled>Avançar</S.ButtonStyled>
          </S.WrapperButton>
        </S.ContentWrapper>
      </MainContent.Root>
    </S.MainContainer>
  )
}
