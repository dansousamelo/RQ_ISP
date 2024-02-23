import { useQuery } from 'react-query'
import { getInspectionList } from '../services'
import { useState } from 'react'

export type InspectionItemType = 'privacyRequirement' | 'userStory'
export interface InspectionItem {
  id: string
  name: string
  type: InspectionItemType
  created_at: string
  status: 'uninitiated' | 'initiated' | 'concluded'
}

export function getInspectionListRepository({
  accessCode,
  token,
}: {
  accessCode: string
  token: string
}) {
  const [inspections, setInspections] = useState<InspectionItem[]>([])
  async function fetchInspectionList(): Promise<void> {
    const response = await getInspectionList({ accessCode, token })

    setInspections(response.data.data.inspections)
  }

  const { isFetching: isInspectionListLoading } = useQuery(
    [`inspectionList-${accessCode}`],
    fetchInspectionList,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isInspectionListLoading, inspections, setInspections }
}
