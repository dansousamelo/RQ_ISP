/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useRef, useState } from 'react'
import { Accept, useDropzone } from 'react-dropzone'
import { uploadFileLogged } from '../../../../../components/FileUploader/services'
import { ErrorToast } from '../../../../../components/Toast'
import {
  ActiveUploadTab,
  Files,
} from '../../../../../contexts/InitialInspectionContext'
import { HeaderInspectionProps } from '../../../repository/getInspectionHeaderRepository'
import { deleteDocument } from '../../../services'

interface ValidatorProps {
  message: string
  code: string
}

export interface useFileUploadProps {
  accept?: Accept
  maxFiles?: number
  validator?: (file: File) => ValidatorProps | null
  updateActiveTabOnUpload: (value: ActiveUploadTab) => void
  setHeaderData: React.Dispatch<React.SetStateAction<HeaderInspectionProps>>
  filesUploaded: Files
  userId: string
  inspectionId: string
  token: string
  setFilesUploaded: React.Dispatch<React.SetStateAction<Files>>
}

export function useFileUpload({
  accept = {
    'application/pdf': ['.pdf'],
  },
  maxFiles = 5,
  validator,
  filesUploaded,
  setHeaderData,
  updateActiveTabOnUpload,
  userId,
  inspectionId,
  token,
  setFilesUploaded,
}: useFileUploadProps) {
  const [loadingFiles, setLoadingFiles] = useState(false)
  const firstRender = useRef(true)

  const uploadImage = useCallback(
    async (file: File[]) => {
      try {
        setLoadingFiles(true)
        const response = await uploadFileLogged({
          pdfFiles: file,
          userId,
          inspectionId,
          token,
        })
        return response
      } catch (error) {
        ErrorToast(
          'Não foi possível enviar o arquivo. Tente novamente mais tarde',
        )
      } finally {
        setLoadingFiles(false)
      }
    },
    [userId, inspectionId, token],
  )

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const duplicateNames = acceptedFiles.filter((file) =>
        filesUploaded.some((existingFile) => existingFile.name === file.name),
      )

      if (duplicateNames.length > 0) {
        ErrorToast(
          'Nome duplicado, não é possível subir arquivos com o mesmo nome',
        )
        updateActiveTabOnUpload('documents')
        return
      }

      const response = await uploadImage(acceptedFiles)

      if (response?.status === 200) {
        const filesFormatted = filesUploaded.concat(
          acceptedFiles.map((file) => ({
            name: file.name,
            url: response.data.data.documents.find(
              (item: any) => item.name === file.name,
            ).url,
            id: response.data.data.documents.find(
              (item: any) => item.name === file.name,
            ).id,
            s3Name: response.data.data.documents.find(
              (item: any) => item.name === file.name,
            ).s3Name,
          })),
        ) as any

        setFilesUploaded(filesFormatted)
        setHeaderData((prev) => ({ ...prev, documents: filesFormatted }))

        updateActiveTabOnUpload('documents')
      } else {
        ErrorToast(
          'Não foi possível adicionar o arquivo, tente novamente mais tarde',
        )
      }
    },
    [
      filesUploaded,
      setFilesUploaded,
      setHeaderData,
      updateActiveTabOnUpload,
      uploadImage,
    ],
  )

  const { getRootProps, getInputProps, isDragAccept, acceptedFiles } =
    useDropzone({
      onDrop,
      accept,
      maxFiles,
      validator,
    })

  const onClearFile = (name: string) => {
    const filesFormatted = filesUploaded.filter(
      (file) => file.name !== name,
    ) as any

    const documentToDelete = filesUploaded.find(
      (file) => file.name === name,
    ) as any

    deleteDocument({ documentId: documentToDelete?.id, token })

    setFilesUploaded((prevFiles) =>
      prevFiles.filter((file) => file.name !== name),
    )

    setHeaderData((prev) => ({ ...prev, documents: filesFormatted }))
  }
  useEffect(() => {
    firstRender.current = false
  }, [])

  return {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    onDrop,
    onClearFile,
    loadingFiles,
  }
}
