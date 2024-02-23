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
