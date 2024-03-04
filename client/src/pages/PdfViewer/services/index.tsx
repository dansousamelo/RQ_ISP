import { api } from '../../../lib/axios'

interface RequestPostTrail {
  trailData: any
  userId: string
  token: string
  inspectionId: string
}

export function postTrail({
  userId,
  inspectionId,
  token,
  trailData,
}: RequestPostTrail) {
  return api.post(
    '/create-trail',
    {
      userId,
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
