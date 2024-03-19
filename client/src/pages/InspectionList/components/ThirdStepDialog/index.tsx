import { useCallback, useState } from 'react'
import { FileUploader } from '../../../../components/FileUploader'
import { UploadedDocumentList } from '../../../../components/FileUploader/components/UploadedDocumentList'
import { SettingsTabs } from '../../../../components/SettingsTabs'
import {
  ActiveUploadTab,
  SecondStepData,
  useLoggedInspectionContext,
} from '../../../../contexts/LoggedInspection'
import { SeeIcon } from '../../../Form/components/ThirdStep/icons/SeeIcon'
import * as S from './styles'
import { usePDFLoggedUploader } from './hooks/usePDFLoggedUploader'
import { LoadingBars } from '../../../../components/LoadingBars'
import { useNavigate, useParams } from 'react-router-dom'
import { convertToCustomFormat } from '../../../Form/components/FourthStep/utils'
import { postInspectionLoggedData } from '../../../Form/components/FourthStep/services'
import { ErrorToast, SuccessToast } from '../../../../components/Toast'
import { AxiosError } from 'axios'
import { getAccessToken } from '../../../../utils/cookies'
import { Spinner } from '../../../../components/Spinner'

export function ThirdStepDialog() {
  const [isCreatingInspection, setIsCreatingInspection] = useState(false)

  const { userId } = useParams()

  const navigate = useNavigate()

  const {
    updateActiveTabOnUpload,
    activeTab,
    filesUploaded,
    setDialogInspectionStep,
    inspectionChecklistType,
    secondStepData,
    handleUpdateDialogControlled,
    setSecondStepData,
    setFilesUploaded,
  } = useLoggedInspectionContext()

  const { getInputProps, getRootProps, loadingFiles, onClearFile } =
    usePDFLoggedUploader()

  const handleTabChange = (tab: ActiveUploadTab) => {
    updateActiveTabOnUpload(tab)
  }

  const token = getAccessToken()

  const dataToSend = {
    inspectionType: inspectionChecklistType,
    name: secondStepData.name,
    responsible: secondStepData.responsable,
    responsibleEmail: secondStepData.email,
    participants: secondStepData.participants,
    recordingUrl: secondStepData.record_link,
    documents: convertToCustomFormat(filesUploaded),
    userId,
  }

  async function handleCreateInspection(dataToSend: any) {
    try {
      setIsCreatingInspection(true)
      const response = await postInspectionLoggedData({
        data: dataToSend,
        token,
      })

      const { inspection } = response.data.data

      navigate(`/inspection/${inspection}/${userId}`)

      SuccessToast('Inspeção criada com sucesso')
      setSecondStepData({} as SecondStepData)
    } catch (error: unknown) {
      if (error instanceof AxiosError) ErrorToast(error.response?.data.message)
    } finally {
      setIsCreatingInspection(false)
      handleUpdateDialogControlled(false)
      setDialogInspectionStep('')
      setFilesUploaded([])
    }
  }

  const onDeleteFile = useCallback(
    (name: string, documentInCloud: string) => {
      onClearFile(name, documentInCloud)
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

            <FileUploader.MessageUploadDescriptionVariant>
              Apenas arquivos no formato pdf são permitidos.
            </FileUploader.MessageUploadDescriptionVariant>
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
        <S.ButtonStyled
          disabled={isCreatingInspection || loadingFiles}
          onClick={() => handleCreateInspection(dataToSend)}
        >
          {!isCreatingInspection
            ? filesUploaded.length > 0
              ? 'Criar inspeção'
              : 'Pular e criar inspeção'
            : null}

          {isCreatingInspection && (
            <div>
              <Spinner />
            </div>
          )}
          {isCreatingInspection && 'Carregando'}
        </S.ButtonStyled>
      </S.WrapperButton>
    </S.ContentWrapper>
  )
}
