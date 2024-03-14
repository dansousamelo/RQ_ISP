import { styled } from 'styled-components'
import { Skeleton } from '../../components/Skeleton'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 140px;
  height: 100vh;
  overflow: hidden;
`

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.875rem;
`

export const WrapperSelectAndGraphics = styled.div`
  display: flex;
  flex: 1;
  gap: 12rem;
`

export const WrapperChartBar = styled.div`
  height: 55%;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  margin: 1rem 0;
`

export const PrintComponent = styled.div`
  visibility: hidden;

  @page {
    size: A4;
    margin: 0;
  }
`

export const SelectSkeleton = styled(Skeleton)`
  height: 32px;
  width: 80px;
  border-radius: 8px;
`

export const BarSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
