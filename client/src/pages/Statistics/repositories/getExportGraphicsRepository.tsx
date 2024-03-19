import { useQuery } from 'react-query'
import { useState } from 'react'
import {
  CategoryValue,
  InspectionInformation,
  getExportGraphics,
} from '../services'

interface ExportGraphicsRepositoryProps {
  inspectionId: string
  token: string
}

export function getExportGraphicsRepository({
  inspectionId,
  token,
}: ExportGraphicsRepositoryProps) {
  const [graphicLabels, setGraphicLabels] = useState<string[]>([])
  const [inspectionInformation, setInspectionInformation] =
    useState<InspectionInformation>({} as InspectionInformation)
  const [categoriesValues, setCategoryValues] = useState<CategoryValue[]>([])

  async function fetchExportGraphics(): Promise<void> {
    const response = await getExportGraphics({
      inspectionId,
      token,
    })

    const { inspectionAttributes, labels, categories } = response.data
      .data as unknown as any

    setGraphicLabels(labels)
    setInspectionInformation(inspectionAttributes)
    setCategoryValues(categories)
  }

  const { isFetching: isExportingGraphic } = useQuery(
    [`exeport-graphics-${inspectionId}`],
    fetchExportGraphics,
    {
      refetchOnWindowFocus: false,
    },
  )

  return {
    isExportingGraphic,
    graphicLabels,
    inspectionInformation,
    categoriesValues,
  }
}
