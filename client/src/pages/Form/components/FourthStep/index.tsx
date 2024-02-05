import createChecklistPicture from '../../../../assets/createImage.png'
import { StatusIndicator } from '../StatusIndicator'
import * as S from './styles'
import { MainContent } from '../../../../components/MainContent/components'
import { useInitialInspectionContext } from '../../../../contexts/InitialInspectionContext'
import { AccessCode } from './components/AccessCode'

export function FourthStep() {
  const { updatePreviousActiveStep } = useInitialInspectionContext()

  const downloadTxtFile = () => {
    const code = '64d3b286805f520032d26599'
    const element = document.createElement('a')
    const file = new Blob([code], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'access_code.txt'
    document.body.appendChild(element)
    element.click()
  }

  return (
    <S.MainContainer>
      <MainContent.Root>
        <MainContent.Image
          src={createChecklistPicture}
          alt="Create checklist picture"
        />
        <S.ContentWrapper>
          <StatusIndicator currentStep={4} />
          <MainContent.Heading>
            Tudo certo para iniciar a sua inspeção!
          </MainContent.Heading>
          <MainContent.Paragraph>
            Guarde o código de acesso gerado, ele será necessário sempre que
            você quiser gerenciar ou realizar inspeções no futuro. Copie ou, se
            preferir, faça download.
          </MainContent.Paragraph>

          <AccessCode code={'64d3b286805f520032d26599'} />

          <S.MessageToDownload>
            Ou se preferir clique{' '}
            <b style={{ cursor: 'pointer' }} onClick={downloadTxtFile}>
              aqui
            </b>{' '}
            para fazer o download
          </S.MessageToDownload>

          <S.WrapperButton>
            <S.BackButtonStyled onClick={updatePreviousActiveStep}>
              Voltar
            </S.BackButtonStyled>
            <S.ButtonStyled onClick={() => console.log('iniciar inspeção')}>
              Iniciar inspeção
            </S.ButtonStyled>
          </S.WrapperButton>
        </S.ContentWrapper>
      </MainContent.Root>
    </S.MainContainer>
  )
}
