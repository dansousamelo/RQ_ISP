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

interface RequestUploadFileLogged {
  pdfFiles: FileList | File[]
  userId: string
  inspectionId: string
  token: string
}

export function uploadFileLogged({
  userId,
  inspectionId,
  pdfFiles,
  token,
}: RequestUploadFileLogged) {
  const formData = new FormData()
  const filesArray = Array.from(pdfFiles)

  formData.append('userId', userId)
  formData.append('inspectionId', inspectionId)

  filesArray.forEach((file: File) => {
    formData.append('files', file)
  })

  return api.post('/logged-upload-file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })
}
