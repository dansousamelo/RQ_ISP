interface Data {
  id: string
  situation: string | null
  description: string
  observations: string
  trail: string | null
}

export const calculateSituationPercentage = (data: Data[]): string => {
  const totalItems = data.length
  const nonNullSituationCount = data.filter(
    (item) => item.situation !== null,
  ).length
  const percentage = Math.round((nonNullSituationCount / totalItems) * 100) // Arredonda para o número inteiro mais próximo
  return percentage.toString()
}
