import { api } from '../../../lib/axios'

export function uploadFile(pdfFiles: FileList | File[]) {
  const formData = new FormData()

  const filesArray = Array.from(pdfFiles)

  filesArray.forEach((file: File) => {
    formData.append(`files`, file)
  })

  return api.post('/upload-file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
