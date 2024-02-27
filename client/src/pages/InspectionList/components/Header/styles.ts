import { styled } from 'styled-components'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { lightenColor } from '../../../../utils/colors'

export const StyledHeader = styled.header`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #4b5563;
  padding-bottom: 1.5rem;
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

export const WrrapperButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
`

export const PrimaryButtonStyled = styled(PrimaryButton)`
  display: flex;
  gap: ${({ theme }) => theme.space[1]};
`

export const LogoutButtonStyled = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.neutral} !important;
  background-color: ${({ theme }) => theme.colors.error700} !important;
  text-align: center !important;
  font-weight: ${({ theme }) => theme.fontWeights.bold} !important;

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.neutral} !important;
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.error700, 0.2)} !important;
  }
`
