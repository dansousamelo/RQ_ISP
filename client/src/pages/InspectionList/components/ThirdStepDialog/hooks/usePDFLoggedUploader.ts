import { useFileUploaderLogged } from '../../../../../components/FileUploader/hooks/useFileUploaderLogged'

type VariantFile = 'valid' | 'invalid'

export const usePDFLoggedUploader = () => {
  const {
    getInputProps,
    loadingFiles,
    getRootProps,
    isDragAccept,
    onClearFile,
  } = useFileUploaderLogged({
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
