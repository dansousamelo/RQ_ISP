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

  const { accessCode } = useParams()

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
    inspection_type: inspectionChecklistType,
    responsible: secondStepData.responsable,
    recording_url: secondStepData.record_link,
    participants: secondStepData.participants,
    name: secondStepData.name,
    responsible_email: secondStepData.email,
    documents: convertToCustomFormat(filesUploaded),
    accessCode,
  }
  const a = {
    error: false,
    status: 200,
    message: 'Inspeção criada com sucesso!',
    data: {
      inspection: {
        id: 'b2932e97-6811-4289-97a3-d0f80ec71500',
        user_id: 'f886c348-f409-47db-8ad6-1296c7ed8179',
        name: 'Inspeção Sabin',
        responsible: 'daniel',
        type: 'privacyRequirement',
        recording_url: '',
        participants: '',
        responsible_email: '[b@mail.com](mailto:b@mail.com)',
      },
      documents: [
        {
          id: '2b345dd2-e388-4370-ba7f-e80516b5acac',
          inspection_id: 'b2932e97-6811-4289-97a3-d0f80ec71500',
          name: 'EDITAL CNU TI.pdf',
          type: 'application/pdf',
          url: 'https://rqs-bucket-test.s3.amazonaws.com/0406f093-f693-415d-9410-4240d84f9103_EDITAL CNU TI.pdf',
        },
        {
          id: 'bdd5a2e8-8749-4e73-9250-b12ce1d054a5',
          inspection_id: 'b2932e97-6811-4289-97a3-d0f80ec71500',
          name: 'JORNADA-2.png',
          type: 'image/png',
          url: 'https://rqs-bucket-test.s3.amazonaws.com/fd319a7f-c399-4a65-b4fb-e516768bc0e5_JORNADA-2.png',
        },
      ],
    },
  }

  async function handleCreateInspection(dataToSend: any) {
    try {
      setIsCreatingInspection(true)
      const response = await postInspectionLoggedData({
        data: dataToSend,
        token,
      })

      const { inspection } = response.data.data

      navigate(`/inspection/${inspection}/${accessCode}`)

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
        <S.ButtonStyled
          disabled={isCreatingInspection}
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
