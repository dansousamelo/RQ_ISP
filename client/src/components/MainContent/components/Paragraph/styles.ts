import { styled } from 'styled-components'

export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.neutral};
`
