import { useQuery } from 'react-query'
import { useState } from 'react'
import { getExportItems } from '../services'

interface ExportItemsRepositoryProps {
  inspectionId: string
  token: string
}

type TrailItem = {
  id: string
  text: string
  documentName: string
  pageNumber: number
}

type ItemSituation =
  | 'incomplete'
  | 'as_per'
  | 'non_compilant'
  | 'not_applicable'

export type InspectionItem = {
  itemIndex: string
  situation: ItemSituation
  category: string
  description: string
  observations?: string | null
  trail: TrailItem[] | string
}

export function getExportItemsRepository({
  inspectionId,
  token,
}: ExportItemsRepositoryProps) {
  const [items, setItems] = useState<InspectionItem[]>([])

  async function fetchExportItems(): Promise<void> {
    const response = await getExportItems({
      inspectionId,
      token,
    })

    const { items } = response.data.data as unknown as any

    setItems(items)
  }

  const { isFetching: isExportingItems } = useQuery(
    [`exeport-items-${inspectionId}`],
    fetchExportItems,
    {
      refetchOnWindowFocus: false,
    },
  )

  return {
    isExportingItems,
    items,
  }
}
