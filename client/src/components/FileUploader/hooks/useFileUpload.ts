/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useRef } from 'react'
import { Accept, useDropzone } from 'react-dropzone'
import { useInitialInspectionContext } from '../../../contexts/InitialInspectionContext'
import { ErrorToast } from '../../Toast'
import { uploadFile } from '../services'

interface ValidatorProps {
  message: string
  code: string
}

export interface useFileUploadProps {
  accept: Accept
  maxFiles?: number
  validator?: (file: File) => ValidatorProps | null
}

export function useFileUpload({
  accept,
  maxFiles = 5,
  validator,
}: useFileUploadProps) {
  const firstRender = useRef(true)

  const { updateActiveTabOnUpload, setFilesUploaded, filesUploaded } =
    useInitialInspectionContext()

  const uploadImage = async (file: File[]) => {
    try {
      const response = await uploadFile(file)
      return response
    } catch (error) {
      ErrorToast(
        'Não foi possível enviar o arquivo. Tente novamente mais tarde',
      )
    }
  }

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
        setFilesUploaded((prevFiles) =>
          prevFiles.concat(
            acceptedFiles.map((file) => ({
              name: file.name,
              url: response.data.data.find(
                (item: any) => item.fileName === file.name,
              ).fileUrl,
            })),
          ),
        )
        updateActiveTabOnUpload('documents')
      } else {
        ErrorToast(
          'Não foi possível adicionar o arquivo, tente novamente mais tarde',
        )
      }
    },
    [filesUploaded, setFilesUploaded, updateActiveTabOnUpload],
  )

  const { getRootProps, getInputProps, isDragAccept, acceptedFiles } =
    useDropzone({
      onDrop,
      accept,
      maxFiles,
      validator,
    })

  const onClearFile = (name: string) => {
    setFilesUploaded((prevFiles) =>
      prevFiles.filter((file) => file.name !== name),
    )
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
  }
}
