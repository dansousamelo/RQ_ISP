import { api } from '../../../lib/axios'

export async function getInspectionList({
  userId,
  token,
}: {
  userId: string
  token: string
}) {
  const params = { userId }
  return await api.get('/find-user-inspections', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

export async function deleteInspection({
  userId,
  token,
  inspectionId,
}: {
  userId: string
  token: string
  inspectionId: string
}) {
  const params = { userId, inspectionId }

  return await api.delete('/delete-inspection', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}
