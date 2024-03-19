import createChecklistPicture from '../../../../assets/createImage.png'
import { StatusIndicator } from '../StatusIndicator'
import * as S from './styles'
import { MainContent } from '../../../../components/MainContent/components'
import { useInitialInspectionContext } from '../../../../contexts/InitialInspectionContext'
import { AccessCode } from './components/AccessCode'
import { getAccessCodeRepository } from './repositories/getAccessCodeRepository'
import { convertToCustomFormat } from './utils'
import { postInspectionData } from './services'
import { ErrorToast, SuccessToast } from '../../../../components/Toast'
import { useState } from 'react'
import { Spinner } from '../../../../components/Spinner'
import {
  createCookieWithExpiration,
  setAccessToken,
  setRefreshToken,
} from '../../../../utils/cookies'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

export function FourthStep() {
  const [isCreatingInspection, setIsCreatingInspection] = useState(false)
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
    inspectionType: inspectionChecklistType,
    name: secondStepData.name,
    responsible: secondStepData.responsable,
    responsibleEmail: secondStepData.email,
    recordingUrl: secondStepData.record_link,
    participants: secondStepData.participants,
    documents: convertToCustomFormat(filesUploaded),
    accessCode,
  }

  const navigate = useNavigate()

  async function handleCreateInspection(dataToSend: any) {
    try {
      setIsCreatingInspection(true)
      const response = await postInspectionData(dataToSend)

      const { token, refreshToken, inspection, user } = response.data.data

      setAccessToken(token)
      setRefreshToken(refreshToken)
      createCookieWithExpiration()
      navigate(`/inspection/${inspection}/${user}`)

      SuccessToast('Inspeção criada com sucesso')
    } catch (error: unknown) {
      if (error instanceof AxiosError) ErrorToast(error.response?.data.message)
    } finally {
      setIsCreatingInspection(false)
    }
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
            Guarde o código de acesso para futuras inspeções. O código só será
            efetivado ao iniciar essa inspeção.
          </MainContent.Paragraph>

          <AccessCode
            code={accessCode as string}
            isAccessCodeFetching={isAccessCodeFetching}
          />

          <S.MessageToDownload>
            Se preferir clique{' '}
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
              disabled={isAccessCodeFetching || isCreatingInspection}
              onClick={() => handleCreateInspection(dataToSend)}
            >
              {isCreatingInspection && (
                <div>
                  <Spinner />
                </div>
              )}
              {isCreatingInspection ? 'Carregando' : 'Iniciar inspeção'}
            </S.ButtonStyled>
          </S.WrapperButton>
        </S.ContentWrapper>
      </MainContent.Root>
    </S.MainContainer>
  )
}
