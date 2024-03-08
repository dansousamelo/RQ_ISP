import { api } from '../../../lib/axios'

export async function getInspectionItemList({
  userId,
  token,
  inspectionId,
}: {
  userId: string
  token: string
  inspectionId: string
}) {
  const params = { userId, inspectionId }

  return await api.get('/find-inspection-items', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

type InpesctionProps = {
  id: string
  name: string
  responsible: string
  recordingUrl: string
  participants: string
  responsibleEmail: string
}

export async function putInspectionHeader({
  token,
  inspection,
}: {
  token: string
  inspection: InpesctionProps
}) {
  return await api.put(
    '/update-inspection-attributes',
    {
      inspection,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
}

export async function getInspectionHeader({
  userId,
  token,
  inspectionId,
}: {
  userId: string
  token: string
  inspectionId: string
}) {
  const params = { userId, inspectionId }

  return await api.get('/find-inspection-attributes', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

export async function postInspection<T>({
  inspectionStatus,
  token,
  inspectionId,
  items,
}: {
  inspectionStatus: string
  token: string
  inspectionId: string
  items: T
}) {
  return await api.put(
    '/save-inspection',
    {
      inspectionStatus,
      inspectionId,
      items,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
}

export async function deleteDocument({
  documentId,
  token,
}: {
  documentId: string
  token: string
}) {
  const params = { documentId }

  return await api.delete('/delete-document', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}
