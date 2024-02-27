import { useQuery } from 'react-query'
import { useState } from 'react'
import { getInspectionHeader } from '../services'

export type DocumentHeader = {
  name: string
  url: string
}
export interface HeaderInspectionProps {
  name: string
  responsible: string
  type: string
  recording_url: string
  participants: string
  responsible_email: string
  documents: DocumentHeader[]
  status: string
  updated_at: string
}

export function getInspectionHeaderRepository({
  accessCode,
  token,
  inspectionId,
}: {
  accessCode: string
  token: string
  inspectionId: string
}) {
  const [headerData, setHeaderData] = useState<HeaderInspectionProps>(
    {} as HeaderInspectionProps,
  )

  async function fetchHeaderInspection(): Promise<void> {
    const response = await getInspectionHeader({
      accessCode,
      token,
      inspectionId,
    })

    setHeaderData(response.data.data.inspection)
  }

  const { isFetching: isInspectionHeaderLoading } = useQuery(
    [`inspection-header-${accessCode}-${inspectionId}`],
    fetchHeaderInspection,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isInspectionHeaderLoading, headerData, setHeaderData }
}
