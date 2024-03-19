import { useQuery } from 'react-query'
import { getInspectionList } from '../services'
import { useState } from 'react'

export type InspectionItemType = 'privacyRequirement' | 'userStory'
export interface InspectionItem {
  id: string
  name: string
  type: InspectionItemType
  createdAt: string
  status: 'uninitiated' | 'initiated' | 'concluded'
}

export function getInspectionListRepository({
  userId,
  token,
}: {
  userId: string
  token: string
}) {
  const [inspections, setInspections] = useState<InspectionItem[]>([])
  async function fetchInspectionList(): Promise<void> {
    const response = await getInspectionList({ userId, token })

    setInspections(response.data.data.inspections)
  }

  const { isFetching: isInspectionListLoading } = useQuery(
    [`inspectionList-${userId}`],
    fetchInspectionList,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isInspectionListLoading, inspections, setInspections }
}
