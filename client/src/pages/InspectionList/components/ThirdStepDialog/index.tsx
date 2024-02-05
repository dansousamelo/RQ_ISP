import { useCallback } from 'react'
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

export function ThirdStepDialog() {
  const {
    updateActiveTabOnUpload,
    activeTab,
    filesUploaded,
    setDialogInspectionStep,
  } = useLoggedInspectionContext()

  const { getInputProps, getRootProps, onClearFile } = usePDFLoggedUploader()

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
      content: () => (
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
        <S.ButtonStyled onClick={() => console.log('criou inspeção')}>
          {filesUploaded.length > 0 ? 'Avançar' : 'Pular e avançar'}
        </S.ButtonStyled>
      </S.WrapperButton>
    </S.ContentWrapper>
  )
}
