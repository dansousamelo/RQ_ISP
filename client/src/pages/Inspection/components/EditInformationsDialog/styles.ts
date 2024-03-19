import { styled } from 'styled-components'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { lightenColor } from '../../../../utils/colors'

export const InputWrapper = styled.div`
  display: grid;
  max-height: 550px;
  overflow-y: auto;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: 1%;
`

export const InputWithErrorWrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[2]};
`

export const WrapperButton = styled.div`
  margin-top: ${({ theme }) => theme.space[4]};
  display: flex;
  gap: ${({ theme }) => theme.space[4]};

  button {
    width: 100%;
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

export const ButtonStyled = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.blue500} !important;
  color: ${({ theme }) => theme.colors.neutral}!important;
  &:hover {
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.blue500, 0.2)} !important;
  }
`
