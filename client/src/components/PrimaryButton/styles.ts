import { styled } from 'styled-components'

export const StyledButton = styled.button`
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
`
