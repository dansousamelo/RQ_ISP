import { useQuery } from 'react-query'
import { useState } from 'react'
import { getInspectionItemList } from '../services'

type Situation = 'as_per' | 'incomplete' | 'non_compilant' | 'not_applicable'

interface Mark {
  text: string
  pageNumber: number
  id: string
}

export interface InspectionItem {
  item_index: string
  situation: Situation | null
  description: string | null
  observations: string | null
  trail: string | null | Mark[]
}

export function getInspectionItemsRepository({
  accessCode,
  token,
  inspectionId,
}: {
  accessCode: string
  token: string
  inspectionId: string
}) {
  const [inspectionsItems, setInspectionsItems] = useState<InspectionItem[]>([])
  async function fetchInspectionItems(): Promise<void> {
    const response = await getInspectionItemList({
      accessCode,
      token,
      inspectionId,
    })

    setInspectionsItems(response.data.data.items)
  }

  const { isFetching: isInspectionItemsLoading } = useQuery(
    [`inspectionItem-${accessCode}-${inspectionId}`],
    fetchInspectionItems,
    {
      staleTime: Infinity,
    },
  )

  return { isInspectionItemsLoading, inspectionsItems, setInspectionsItems }
}
