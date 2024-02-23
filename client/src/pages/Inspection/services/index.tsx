import { api } from '../../../lib/axios'

export async function getInspectionItemList({
  accessCode,
  token,
  inspectionId,
}: {
  accessCode: string
  token: string
  inspectionId: string
}) {
  const params = { accessCode, inspectionId }

  return await api.get('/find-inspection', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}
