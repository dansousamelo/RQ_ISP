import { styled } from 'styled-components'
import { lightenColor } from '../../../../utils/colors'
import { PrimaryButton } from '../../../../components/PrimaryButton'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 1rem;
  justify-content: center;
  flex-direction: column;
`

export const WrapperButton = styled.div`
  margin-top: ${({ theme }) => theme.space[4]};
  display: flex;
  gap: ${({ theme }) => theme.space[4]};

  button {
    width: 100%;
  }
`

export const ButtonStyled = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.neutral} !important;
  color: ${({ theme }) => theme.colors.neutral900}!important;
  &:hover {
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.blue500, 0.2)} !important;
    color: ${({ theme }) => theme.colors.neutral}!important;
    font-weight: ${({ theme }) => theme.fontWeights.medium} !important;
  }
`

export const BackButtonStyled = styled(PrimaryButton)`
  background-color: inherit;
  text-align: center !important;
  color: ${({ theme }) => theme.colors.neutral} !important;
  border: 1px solid ${({ theme }) => theme.colors.neutral} !important;
  font-weight: ${({ theme }) => theme.fontWeights.medium} !important;

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.neutral} !important;
    font-weight: ${({ theme }) => theme.fontWeights.medium} !important;
    border: 1px solid ${({ theme }) => lightenColor(theme.colors.neutral, 0.2)} !important;
  }
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error700};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-top: 4px;
`
