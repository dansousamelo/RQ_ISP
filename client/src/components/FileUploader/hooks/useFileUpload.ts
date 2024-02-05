/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useRef } from 'react'
import { Accept, useDropzone } from 'react-dropzone'
import { useInitialInspectionContext } from '../../../contexts/InitialInspectionContext'
import { ErrorToast } from '../../Toast'

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

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Verifica se algum dos arquivos a serem adicionados já está na lista
      const duplicateNames = acceptedFiles.filter((file) =>
        filesUploaded.some((existingFile) => existingFile.name === file.name),
      )

      // Se houver arquivos com nomes duplicados, exibe o toast e não adiciona os arquivos duplicados
      if (duplicateNames.length > 0) {
        ErrorToast(
          'Nome duplicado, não é possível subir arquivos com o mesmo nome',
        )
        updateActiveTabOnUpload('documents')
        return
      }

      // Adiciona os arquivos à lista
      setFilesUploaded((prevFiles) =>
        prevFiles.concat(
          acceptedFiles.map((file) => ({
            name: file.name,
            url: 'www.example.com',
          })),
        ),
      )
      updateActiveTabOnUpload('documents')
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
