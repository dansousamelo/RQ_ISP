import { api } from '../../../lib/axios'

export async function getItemsCategories({
  inspectionId,
  token,
}: {
  inspectionId: string
  token: string
}) {
  const params = { inspectionId }

  return await api.get('/inspection-items-categories', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

type RequestGraphicValues = {
  inspectionId: string
  token: string
  category?: string
}

export async function getGraphicValues({
  inspectionId,
  category,
  token,
}: RequestGraphicValues) {
  let params = { inspectionId } as RequestGraphicValues

  if (category) {
    params = { ...params, category }
  }

  return await api.get('/inspection-items-statistics', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

export type CategoryValue = {
  name: string
  values: number[]
}

export type InspectionInformation = {
  id: string
  name: string
  createdAt: string
  finishedAt: string
  type: string
  status: string
  participants: string
  recordingUrl: string | null
  responsibleEmail: string
  resposible: string
}

export async function getExportGraphics({
  inspectionId,
  token,
}: {
  inspectionId: string
  token: string
}) {
  const params = { inspectionId }

  return await api.get('/export-chart', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}

export async function getExportItems({
  inspectionId,
  token,
}: {
  inspectionId: string
  token: string
}) {
  const params = { inspectionId }

  return await api.get('/export-inspection', {
    params,
    headers: { Authorization: `Bearer ${token}` },
  })
}
