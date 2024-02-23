import { useQuery } from 'react-query'
import { useState } from 'react'
import { getInspectionHeader } from '../services'

type Situation = 'as_per' | 'incomplete' | 'non_compilant' | 'not_applicable'

interface Mark {
  text: string
  pageNumber: number
  id: string
}

export interface TableDataProps {
  item_index: string
  situation: Situation | null
  description: string | null
  observations: string | null
  trail: string | null | Mark[] | any
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
  const [headerData, setHeaderData] = useState<TableDataProps[]>([])

  async function fetchHeaderInspection(): Promise<void> {
    const response = await getInspectionHeader({
      accessCode,
      token,
      inspectionId,
    })

    setHeaderData(response.data.data.inspection)
  }

  const { isFetching: isInspectionItemsLoading } = useQuery(
    [`inspection-header-${accessCode}-${inspectionId}`],
    fetchHeaderInspection,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isInspectionItemsLoading, headerData, setHeaderData }
}
