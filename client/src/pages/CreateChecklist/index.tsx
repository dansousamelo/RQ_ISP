import { Link, useNavigate } from 'react-router-dom'
import createChecklistPicture from '../../assets/createImage.png'
import * as S from './styles'
import { HeaderWithoutAuth } from '../../components/HeaderWithoutAuth'
import { MainContent } from '../../components/MainContent/components'
import { Footer } from '../../components/Footer'
import { highlightText } from '../../utils/highlightText'
import { useHeaderContext } from '../../contexts/HeaderContext'
import { TitleUpdater } from '../../components/TitleUpdater'

export function CreateCheklist() {
  const navigate = useNavigate()
  const { handleIconClick, hasAddAnimation } = useHeaderContext()

  const paragraphText = `Utilize um template de lista de verificação e garanta que nenhum
  detalhe seja deixado para trás durante suas inspeções. Se já possui um
  código acesso acesse sua lista de inspeção.`

  const highlightButtonText = highlightText({
    fullText: paragraphText,
    textToHighlight: 'lista de inspeção',
    color: '#34CDFF',
    onTextToHighlightClick: () => {
      handleIconClick('list')
      navigate('/list')
    },
  })

  return (
    <>
      <TitleUpdater title="Começar inspeção" />

      <S.HomePageContainer>
        <HeaderWithoutAuth />
        <S.MainContainer
          initial={hasAddAnimation ? { x: '100%' } : false}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          <MainContent.Root>
            <MainContent.Image
              src={createChecklistPicture}
              alt="Create checklist picture"
            />
            <S.ContentWrapper>
              <MainContent.Heading>Começar uma inspeção</MainContent.Heading>
              <MainContent.Paragraph>
                {highlightButtonText}
              </MainContent.Paragraph>
              <Link to="/form">
                <S.ButtonStyled>Iniciar inspeção</S.ButtonStyled>
              </Link>
            </S.ContentWrapper>
          </MainContent.Root>
        </S.MainContainer>
        <Footer />
      </S.HomePageContainer>
    </>
  )
}
