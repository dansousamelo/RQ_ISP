import { useCallback, useState } from 'react'
import { FileUploader } from '../../../../components/FileUploader'
import { UploadedDocumentList } from '../../../../components/FileUploader/components/UploadedDocumentList'
import { SettingsTabs } from '../../../../components/SettingsTabs'
import { ActiveUploadTab } from '../../../../contexts/LoggedInspection'
import { SeeIcon } from '../../../Form/components/ThirdStep/icons/SeeIcon'
import * as S from './styles'
import { LoadingBars } from '../../../../components/LoadingBars'
import { useFileUpload } from './hooks/useFileUpload'
import { HeaderInspectionProps } from '../../repository/getInspectionHeaderRepository'
import { Files } from '../../../../contexts/InitialInspectionContext'

interface ManagerDocumentsDialogProps {
  accessCode: string
  inspectionId: string
  token: string
  handleUpdateDialogControlled: (open: boolean) => void
  headerData: HeaderInspectionProps
  setHeaderData: React.Dispatch<React.SetStateAction<HeaderInspectionProps>>
}

export function ManagerDocumentsDialog({
  handleUpdateDialogControlled,
  headerData,
  setHeaderData,
  accessCode,
  inspectionId,
  token,
}: ManagerDocumentsDialogProps) {
  const [filesUploaded, setFilesUploaded] = useState<Files>(
    headerData.documents,
  )
  const [activeTab, setActiveTab] =
    useState<ActiveUploadTab>('upload_documents')

  const updateActiveTabOnUpload = useCallback((value: ActiveUploadTab) => {
    setActiveTab(value)
  }, [])

  console.log('headerData: ', headerData)
  const { getInputProps, loadingFiles, getRootProps, onClearFile } =
    useFileUpload({
      filesUploaded: headerData.documents,
      setHeaderData,
      updateActiveTabOnUpload,
      accessCode,
      inspectionId,
      token,
      setFilesUploaded,
    })

  const handleTabChange = (tab: ActiveUploadTab) => {
    updateActiveTabOnUpload(tab)
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
        <S.BackButtonStyled onClick={() => handleUpdateDialogControlled(false)}>
          Voltar
        </S.BackButtonStyled>
        <S.ButtonStyled onClick={() => handleUpdateDialogControlled(false)}>
          Concluir
        </S.ButtonStyled>
      </S.WrapperButton>
    </S.ContentWrapper>
  )
}
