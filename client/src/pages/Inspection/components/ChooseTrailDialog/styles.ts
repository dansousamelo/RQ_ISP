import styled, { css } from 'styled-components'

import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral400};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[6]};
  margin-top: ${({ theme }) => theme.space[4]};

  label {
    width: 100% !important;
  }
`

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:focus {
    outline: none;
  }
`

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: inherit;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.colors.blue500};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      border: 1px solid ${({ theme }) => theme.colors.neutral400};
    `}

  &:focus {
    outline: none;
  }
`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blue500};
  }
`

interface LabelProps {
  hasDescription: boolean
  isDisabled: boolean
}

export const Label = styled.label<LabelProps>`
  color: white;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding-left: 15px;
  width: 18rem;
  ${({ hasDescription }) =>
    hasDescription &&
    css`
      font-weight: bold;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${({ theme }) => theme.colors.neutral400};
      cursor: not-allowed;
    `}
`

interface DescriptionProps {
  isDisabled: boolean
}

export const Description = styled.span<DescriptionProps>`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding-left: 27px;
  cursor: pointer;

  &:first-of-type {
    margin-bottom: 12px;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${({ theme }) => theme.colors.neutral400};
      cursor: not-allowed;
    `}
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error700};
  font-style: italic;
  font-size: 12px;
  padding-left: 27px;
`
