import { api } from '../../../../../lib/axios'

export async function getAccessCode() {
  return await api.get('generate-access_code')
}
