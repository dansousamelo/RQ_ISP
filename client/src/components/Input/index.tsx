import styled, { css } from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.space[1]};
`
interface InputProps {
  hasError?: boolean
}

const InputComponent = styled.input<InputProps>`
  height: 35px;
  background-color: inherit;
  width: 100%;

  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.neutral};

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.neutral400};

  padding: 0 ${({ theme }) => theme.space[4]};
  transition: all 0.3s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue500};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral400};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: 1px solid ${theme.colors.error700};
    `}
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutral};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const Description = styled.span`
  color: ${({ theme }) => theme.colors.neutral};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: ${({ theme }) => theme.space[1]};
`

interface RequiredTextProps {
  variant?: string
}

const RequiredText = styled.span<RequiredTextProps>`
  color: ${({ theme }) => theme.colors.neutral};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${({ variant }) =>
    variant === 'error' &&
    css`
      color: ${({ theme }) => theme.colors.error700};
      &:hover {
        color: ${({ theme }) => theme.colors.error700};
      }
    `}
`

const ErrorMessageRoot = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error700};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`

export const Input = {
  Root,
  Input: InputComponent,
  Label,
  RequiredText,
  ErrorMessage,
  ErrorMessageRoot,
  Description,
}
