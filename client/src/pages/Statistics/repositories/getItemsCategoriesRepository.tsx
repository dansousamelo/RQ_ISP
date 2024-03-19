import { useQuery } from 'react-query'
import { useState } from 'react'
import { getItemsCategories } from '../services'

export interface CategoryItem {
  value: string
  label: string
}

export function getItemsCategoriesRepository({
  inspectionId,
  token,
}: {
  inspectionId: string
  token: string
}) {
  const [itemsCategories, setItemsCategories] = useState<CategoryItem[]>([])

  async function fetchItemsCategories(): Promise<void> {
    const response = await getItemsCategories({ inspectionId, token })

    setItemsCategories(response.data.data.categories)
  }

  const { isFetching: isItemsCategoriesLoading } = useQuery(
    [`inspection-categories-items-${inspectionId}`],
    fetchItemsCategories,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isItemsCategoriesLoading, itemsCategories, setItemsCategories }
}
