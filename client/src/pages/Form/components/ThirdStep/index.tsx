import createChecklistPicture from '../../../../assets/createImage.png'
import { StatusIndicator } from '../StatusIndicator'
import * as S from './styles'
import { MainContent } from '../../../../components/MainContent/components'
import {
  ActiveUploadTab,
  useInitialInspectionContext,
} from '../../../../contexts/InitialInspectionContext'
import { FileUploader } from '../../../../components/FileUploader'
import { usePDFUploader } from './hooks/usePDFUploader'
import { SettingsTabs } from '../../../../components/SettingsTabs'
import { useCallback } from 'react'
import { UploadedDocumentList } from '../../../../components/FileUploader/components/UploadedDocumentList'
import { SeeIcon } from './icons/SeeIcon'
import { LoadingBars } from '../../../../components/LoadingBars'

export function ThirdStep() {
  const {
    updateNextActiveStep,
    updateActiveTabOnUpload,
    updatePreviousActiveStep,
    activeTab,
    filesUploaded,
  } = useInitialInspectionContext()

  const { getInputProps, loadingFiles, getRootProps, onClearFile } =
    usePDFUploader()

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

  const handleTabChange = (tab: ActiveUploadTab) => {
    updateActiveTabOnUpload(tab)
  }

  return (
    <S.MainContainer>
      <MainContent.Root>
        <MainContent.Image
          src={createChecklistPicture}
          alt="Create checklist picture"
        />
        <S.ContentWrapper>
          <StatusIndicator currentStep={3} />
          <MainContent.Heading>Começar uma inspeção</MainContent.Heading>
          <MainContent.Paragraph>
            Anexe os seus documentos para fazer marcações de rastreabilidade,
            você também poderá adicionar em outro momento.
          </MainContent.Paragraph>

          <SettingsTabs
            activeTab={activeTab}
            onTabChange={handleTabChange}
            tabItems={tabs}
          />

          <S.WrapperButton>
            <S.BackButtonStyled onClick={updatePreviousActiveStep}>
              Voltar
            </S.BackButtonStyled>
            <S.ButtonStyled onClick={updateNextActiveStep}>
              {filesUploaded.length > 0 ? 'Avançar' : 'Pular e avançar'}
            </S.ButtonStyled>
          </S.WrapperButton>
        </S.ContentWrapper>
      </MainContent.Root>
    </S.MainContainer>
  )
}
