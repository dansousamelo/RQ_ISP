import { styled } from 'styled-components'

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.blue500};
  line-height: ${({ theme }) => theme.lineHeights.shorter};
`
