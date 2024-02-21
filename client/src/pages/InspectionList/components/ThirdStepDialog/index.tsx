import { useCallback, useState } from 'react'
import { FileUploader } from '../../../../components/FileUploader'
import { UploadedDocumentList } from '../../../../components/FileUploader/components/UploadedDocumentList'
import { SettingsTabs } from '../../../../components/SettingsTabs'
import {
  ActiveUploadTab,
  useLoggedInspectionContext,
} from '../../../../contexts/LoggedInspection'
import { SeeIcon } from '../../../Form/components/ThirdStep/icons/SeeIcon'
import * as S from './styles'
import { usePDFLoggedUploader } from './hooks/usePDFLoggedUploader'
import { LoadingBars } from '../../../../components/LoadingBars'
import { useParams } from 'react-router-dom'
import { convertToCustomFormat } from '../../../Form/components/FourthStep/utils'
import { postInspectionData } from '../../../Form/components/FourthStep/services'
import { ErrorToast, SuccessToast } from '../../../../components/Toast'
import { AxiosError } from 'axios'
import { getAccessToken } from '../../../../utils/cookies'
import { Spinner } from '../../../../components/Spinner'

export function ThirdStepDialog() {
  const [isCreatingInspection, setIsCreatingInspection] = useState(false)

  const { accessCode } = useParams()

  const {
    updateActiveTabOnUpload,
    activeTab,
    filesUploaded,
    setDialogInspectionStep,
    inspectionChecklistType,
    secondStepData,
  } = useLoggedInspectionContext()

  const { getInputProps, getRootProps, loadingFiles, onClearFile } =
    usePDFLoggedUploader()

  const handleTabChange = (tab: ActiveUploadTab) => {
    updateActiveTabOnUpload(tab)
  }

  const token = getAccessToken()

  console.log('token: ', token)

  const dataToSend = {
    inspection_type: inspectionChecklistType,
    responsible: secondStepData.responsable,
    recording_url: secondStepData.record_link,
    participants: secondStepData.participants,
    name: secondStepData.name,
    responsible_email: secondStepData.email,
    documents: convertToCustomFormat(filesUploaded),
    accessCode,
    token,
  }

  async function handleCreateInspection(dataToSend: any) {
    try {
      setIsCreatingInspection(true)
      const response = await postInspectionData(dataToSend)

      console.log('response: ', response)

      SuccessToast('Inspeção criada com sucesso')
    } catch (error: unknown) {
      if (error instanceof AxiosError) ErrorToast(error.response?.data.message)
    } finally {
      setIsCreatingInspection(false)
    }
  }

  const onDeleteFile = useCallback(
    (name: string) => {
      onClearFile(name)
    },
    [onClearFile],
  )

  const tabs = [
    {
      title: 'Anexar',
      content: () =>
        loadingFiles ? (
          <LoadingBars />
        ) : (
          <FileUploader.FileUploader {...getRootProps()} variant={'valid'}>
            <FileUploader.WrapperIconAndMessageUpload>
              <FileUploader.UploadIcon />
              <FileUploader.MessageUpload>
                Arraste seu(s) arquivo(s) pdf(s) aqui ou{' '}
                <FileUploader.MessageUploadBold>
                  clique para buscar
                </FileUploader.MessageUploadBold>{' '}
                em seu computador.
              </FileUploader.MessageUpload>
            </FileUploader.WrapperIconAndMessageUpload>

            <FileUploader.MessageUploadDescription>
              Apenas arquivos no formato pdf são permitidos.
            </FileUploader.MessageUploadDescription>
            <input
              name="dropzone-file"
              {...getInputProps()}
              data-testid="thumbnail-fille"
            />
          </FileUploader.FileUploader>
        ),
      value: 'upload_documents',
    },
    {
      title: 'Documentos',
      content: () => (
        <>
          {filesUploaded.length === 0 ? (
            <S.WrapperSeeIconAndText>
              <SeeIcon />
              <FileUploader.MessageUpload>
                Adicione seu(s) pdf(s) e visualize aqui.
              </FileUploader.MessageUpload>
            </S.WrapperSeeIconAndText>
          ) : (
            <UploadedDocumentList
              onDeleteFile={onDeleteFile}
              documents={filesUploaded}
            />
          )}
        </>
      ),
      value: 'documents',
    },
  ]

  return (
    <S.ContentWrapper>
      <SettingsTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        tabItems={tabs}
      />

      <S.WrapperButton>
        <S.BackButtonStyled
          onClick={() => setDialogInspectionStep('second_step')}
        >
          Voltar
        </S.BackButtonStyled>
        <S.ButtonStyled onClick={() => handleCreateInspection(dataToSend)}>
          {filesUploaded.length > 0 && !isCreatingInspection
            ? 'Criar inspeção'
            : 'Pular e criar inspeção'}
          {isCreatingInspection && (
            <div>
              <Spinner />
            </div>
          )}
          {isCreatingInspection ? 'Carregando' : 'Iniciar inspeção'}
        </S.ButtonStyled>
      </S.WrapperButton>
    </S.ContentWrapper>
  )
}
