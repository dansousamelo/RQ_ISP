import { useQuery } from 'react-query'
import { useState } from 'react'
import { getInspectionItemList } from '../services'

type Situation = 'as_per' | 'incomplete' | 'non_compilant' | 'not_applicable'

interface Mark {
  text: string
  pageNumber: number
  id: string
}

export interface TableDataProps {
  itemIndex: string
  situation: Situation | null
  description: string | null
  observations: string | null
  trail: string | null | Mark[] | any
}

export function getInspectionItemsRepository({
  userId,
  token,
  inspectionId,
}: {
  userId: string
  token: string
  inspectionId: string
}) {
  const [tableData, setTableData] = useState<TableDataProps[]>([])

  async function fetchInspectionItems(): Promise<void> {
    const response = await getInspectionItemList({
      userId,
      token,
      inspectionId,
    })

    setTableData(response.data.data.items)
  }

  const { isFetching: isInspectionItemsLoading, refetch: refetchItems } =
    useQuery(
      [`inspection-item-${userId}-${inspectionId}`],
      fetchInspectionItems,
      {
        refetchOnWindowFocus: false,
      },
    )

  return { isInspectionItemsLoading, tableData, setTableData, refetchItems }
}
