import { styled } from 'styled-components'
import { Skeleton } from '../../../../components/Skeleton'

export const Container = styled.div``

export const HeaderTableSkeleton = styled(Skeleton)`
  height: 36px;
  width: 100%;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const RowTableSkeleton = styled(Skeleton)`
  height: 149px;
  width: 100%;
  margin-top: 1px;
`
