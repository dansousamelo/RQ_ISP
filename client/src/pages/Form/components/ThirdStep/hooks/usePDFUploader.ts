import { useFileUpload } from '../../../../../components/FileUploader/hooks/useFileUpload'

type VariantFile = 'valid' | 'invalid'

export const usePDFUploader = () => {
  const {
    getInputProps,
    loadingFiles,
    getRootProps,
    isDragAccept,
    onClearFile,
  } = useFileUpload({
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 5,
  })

  const variantFile: VariantFile = isDragAccept ? 'valid' : 'invalid'

  return {
    getInputProps,
    getRootProps,
    isDragAccept,
    variantFile,
    onClearFile,
    loadingFiles,
  }
}
