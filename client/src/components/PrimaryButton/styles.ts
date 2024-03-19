import { css, styled } from 'styled-components'
import { lightenColor } from '../../utils/colors'

interface ButtonProps {
  variant?: 'secondary' | 'primary'
}

const secondaryButtonStyle = css`
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

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.md};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.neutral900};
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  text-decoration: none;
  align-items: center;
  gap: 2px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.neutral};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral};
      }
    }
  }

  svg {
    path {
      transition: fill 300ms ease-in-out;
    }
  }

  ${({ variant }) => variant === 'secondary' && secondaryButtonStyle}

  ${({ disabled, variant }) =>
    disabled &&
    variant === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral400};
      cursor: not-allowed;
      color: white;

      &:hover {
        background-color: ${({ theme }) => theme.colors.neutral400};
        color: white;
        svg {
          path {
            fill: ${({ theme }) => theme.colors.neutral};
          }
        }
      }
    `}
`
