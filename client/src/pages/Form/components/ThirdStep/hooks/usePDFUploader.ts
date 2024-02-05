import { useState } from 'react'

// import { uploadFile } from 'NovaEstrutura/App/Entities/Upload'
import { useFileUpload } from '../../../../../components/FileUploader/hooks/useFileUpload'

type VariantFile = 'valid' | 'invalid'

export const usePDFUploader = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { getInputProps, getRootProps, isDragAccept, onClearFile } =
    useFileUpload({
      accept: {
        'application/pdf': ['.pdf'],
      },
      maxFiles: 5,
    })

  const uploadImage = async (file: File) => {
    try {
      setIsLoading(true)
      // const imageData = (await uploadFile(
      //   file,
      // )) as unknown as FileUploaderResponse

      // setFileSource(imageData.file.url)
    } catch (error) {
      console.log('Houve um erro ao realizar o upload da imagem')
    } finally {
      setIsLoading(false)
    }
  }

  const variantFile: VariantFile = isDragAccept ? 'valid' : 'invalid'

  return {
    getInputProps,
    getRootProps,
    isDragAccept,
    variantFile,
    onClearFile,
    isLoading,
  }
}
