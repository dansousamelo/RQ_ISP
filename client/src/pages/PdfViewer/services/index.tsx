import { api } from '../../../lib/axios'

interface RequestPostTrail {
  trailData: any
  accessCode: string
  token: string
  inspectionId: string
}

export function postTrail({
  accessCode,
  inspectionId,
  token,
  trailData,
}: RequestPostTrail) {
  return api.post(
    '/create-trail',
    {
      accessCode,
      inspectionId,
      trailData,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
}
