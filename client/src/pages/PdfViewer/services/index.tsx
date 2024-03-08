import { api } from '../../../lib/axios'

interface RequestPostTrail {
  trailData: any
  userId: string
  token: string
  inspectionId: string
  documentId: string
}

export function postTrail({
  userId,
  inspectionId,
  token,
  trailData,
  documentId,
}: RequestPostTrail) {
  return api.post(
    '/create-document-trail',
    {
      userId,
      inspectionId,
      trailData,
      documentId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
}

export async function getListTrails({
  documentId,
  token,
}: {
  documentId: string
  token: string
}) {
  const params = { documentId }

  return await api.get('/find-document-trails', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

export async function deleteTrail({
  trailId,
  token,
}: {
  trailId: string
  token: string
}) {
  const params = { trailId }

  return await api.delete('/delete-document-trail', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

export async function deleteDocumentsMark({
  documentId,
  token,
}: {
  documentId: string
  token: string
}) {
  const params = { documentId }

  return await api.delete('/delete-all-document-trails', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}
