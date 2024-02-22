import styled from 'styled-components'
import { Skeleton } from '../../../../../components/Skeleton'

export const Container = styled.div`
  padding: 0 1rem;
  overflow-y: auto;
  margin-bottom: 1rem;
`

export const Highlight = styled(Skeleton)`
  height: 150px;
  margin-top: 1rem;
  width: 100%;
  border-radius: 8px;
`

export const HighlightStyled = styled(Skeleton)`
  height: 150px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 8px;
`
