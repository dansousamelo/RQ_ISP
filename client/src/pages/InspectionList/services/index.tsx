import { api } from '../../../lib/axios'

export async function getInspectionList({
  accessCode,
  token,
}: {
  accessCode: string
  token: string
}) {
  const params = { accessCode }
  return await api.get('/list-inspections', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

export async function deleteInspection({
  accessCode,
  token,
  inspectionId,
}: {
  accessCode: string
  token: string
  inspectionId: string
}) {
  const params = { accessCode, inspectionId }

  return await api.delete('/delete-inspection', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}
