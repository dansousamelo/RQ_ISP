import * as S from './styles'

export function InspectionTableSkeleton() {
  const numberOfRows = 5

  return (
    <S.Container>
      <S.HeaderTableSkeleton />

      {Array.from({ length: numberOfRows }, (_, index) => (
        <S.RowTableSkeleton key={index} />
      ))}
    </S.Container>
  )
}
