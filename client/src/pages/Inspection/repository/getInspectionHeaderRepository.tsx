import { useQuery } from 'react-query'
import { useState } from 'react'
import { getInspectionHeader } from '../services'

export type DocumentHeader = {
  id: string
  name: string
  url: string
  s3Name: string
}
export interface HeaderInspectionProps {
  name: string
  responsible: string
  type: string
  recordingUrl: string
  participants: string
  responsibleEmail: string
  documents: DocumentHeader[]
  status: string
  updatedAt: string
}

export function getInspectionHeaderRepository({
  userId,
  token,
  inspectionId,
}: {
  userId: string
  token: string
  inspectionId: string
}) {
  const [headerData, setHeaderData] = useState<HeaderInspectionProps>(
    {} as HeaderInspectionProps,
  )

  async function fetchHeaderInspection(): Promise<void> {
    const response = await getInspectionHeader({
      userId,
      token,
      inspectionId,
    })

    setHeaderData(response.data.data.inspection)
  }

  const { isFetching: isInspectionHeaderLoading } = useQuery(
    [`inspection-header-${userId}-${inspectionId}`],
    fetchHeaderInspection,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isInspectionHeaderLoading, headerData, setHeaderData }
}
