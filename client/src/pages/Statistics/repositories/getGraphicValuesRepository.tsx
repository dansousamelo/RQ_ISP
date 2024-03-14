import { useQuery } from 'react-query'
import { useState } from 'react'
import { getGraphicValues } from '../services'

export interface GraphicValue {
  value: number
  label: string
}

export function getGraphicValuesRepository({
  inspectionId,
  category,
  token,
}: {
  inspectionId: string
  category?: string
  token: string
}) {
  const [graphicValue, setGraphicValue] = useState<number[]>([])

  async function fetchGraphicValues(): Promise<void> {
    const response = await getGraphicValues({ inspectionId, token, category })

    const formattedGraphicValues = response.data.data.statistics.map(
      (item: GraphicValue) => item.value,
    )
    setGraphicValue(formattedGraphicValues)
  }

  const { isFetching: isGraphicValueLoading } = useQuery(
    [`inspection-graphic-value-${inspectionId}-${category ?? 'general'}`],
    fetchGraphicValues,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isGraphicValueLoading, graphicValue, setGraphicValue, category }
}
