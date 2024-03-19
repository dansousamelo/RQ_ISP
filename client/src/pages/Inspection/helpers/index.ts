import { TableDataProps } from '../repository/getInspectionItemsRepository'

export const calculateSituationPercentage = (
  data: TableDataProps[],
): string => {
  const totalItems = data.length
  const nonNullSituationCount = data.filter(
    (item) => item.situation !== null,
  ).length
  const percentage = Math.round((nonNullSituationCount / totalItems) * 100)
  return percentage.toString()
}
