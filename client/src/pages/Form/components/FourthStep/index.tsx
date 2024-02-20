import createChecklistPicture from '../../../../assets/createImage.png'
import { StatusIndicator } from '../StatusIndicator'
import * as S from './styles'
import { MainContent } from '../../../../components/MainContent/components'
import { useInitialInspectionContext } from '../../../../contexts/InitialInspectionContext'
import { AccessCode } from './components/AccessCode'
import { getAccessCodeRepository } from './repositories/getAccessCodeRepository'
import { convertToCustomFormat } from './utils'

export function FourthStep() {
  const {
    updatePreviousActiveStep,
    inspectionChecklistType,
    secondStepData,
    filesUploaded,
  } = useInitialInspectionContext()

  const downloadTxtFile = (codeAccess: string) => {
    const code = codeAccess
    const element = document.createElement('a')
    const file = new Blob([code], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'access_code.txt'
    document.body.appendChild(element)
    element.click()
  }

  const { accessCode, isAccessCodeFetching } = getAccessCodeRepository()

  const dataToSend = {
    inspection_type: inspectionChecklistType,
    responsible: secondStepData.responsable,
    recording_url: secondStepData.record_link,
    participants: secondStepData.participants,
    name: secondStepData.name,
    responsible_email: secondStepData.email,
    documents: convertToCustomFormat(filesUploaded),
    accessCode,
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

          <AccessCode
            code={accessCode as string}
            isAccessCodeFetching={isAccessCodeFetching}
          />

          <S.MessageToDownload>
            Ou se preferir clique{' '}
            <b
              style={{ cursor: 'pointer' }}
              onClick={() => downloadTxtFile(accessCode as string)}
            >
              aqui
            </b>{' '}
            para fazer o download
          </S.MessageToDownload>

          <S.WrapperButton>
            <S.BackButtonStyled onClick={updatePreviousActiveStep}>
              Voltar
            </S.BackButtonStyled>
            <S.ButtonStyled
              disabled={isAccessCodeFetching}
              onClick={() => console.log('dataToSend: ', dataToSend)}
            >
              Iniciar inspeção
            </S.ButtonStyled>
          </S.WrapperButton>
        </S.ContentWrapper>
      </MainContent.Root>
    </S.MainContainer>
  )
}
