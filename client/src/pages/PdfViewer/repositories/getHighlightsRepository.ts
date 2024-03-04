import { useQuery } from 'react-query'
import { useState } from 'react'
import { getListTrails } from '../services'
import { HighlightProps } from '../interfaces'

export function getHighlightsRepository({
  documentId,
  token,
}: {
  documentId: string
  token: string
}) {
  const [highlights, setHighlights] = useState<HighlightProps[]>([])

  async function fetchHeaderInspection(): Promise<void> {
    const response = await getListTrails({
      documentId,
      token,
    })

    setHighlights(response.data.data.trails || [])
  }

  const { isFetching: isHighlightListLoading } = useQuery(
    [`document-highlight-${documentId}`],
    fetchHeaderInspection,
    {
      refetchOnWindowFocus: false,
    },
  )

  return { isHighlightListLoading, highlights, setHighlights }
}
