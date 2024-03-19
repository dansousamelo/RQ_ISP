import { styled } from 'styled-components'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { Skeleton } from '../../../../components/Skeleton'

export const StyledHeader = styled.header`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #4b5563;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`

export const Title = styled.h1`
  font-family: 'Poiret One', cursive;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2rem;
  color: #22d3ee;
`

export const IconContainer = styled.div`
  display: flex;
  gap: 3rem;
`

export const ClickableIcon = styled.div`
  cursor: pointer;
`

export const PrimaryButtonStyled = styled(PrimaryButton)`
  display: flex;
  gap: ${({ theme }) => theme.space[1]};
`

export const ButtonSkeleton = styled(Skeleton)`
  height: 37px;
  width: 101px;
  border-radius: 8px;
`
