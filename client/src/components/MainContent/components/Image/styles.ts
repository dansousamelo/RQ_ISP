import { styled } from 'styled-components'
import { Skeleton } from '../../../Skeleton'

export const Image = styled.img`
  height: 442.8px;
  width: 442.8px;
  object-fit: contain;
  max-width: 100%;
`

export const ImageSkeleton = styled(Skeleton)`
  height: 442.8px;
  width: 442.8px;
  max-width: 100%;
  border-radius: 8px;
`
