import { api } from '../../../../../lib/axios'

export async function getAccessCode() {
  return await api.get('generate-access_code')
}

export async function postInspectionData(data: any) {
  return await api.post('create-first-inspection', data)
}

export async function postInspectionLoggedData({ data, token }: any) {
  return await api.post('create-inspection', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
