import styled from 'styled-components'
import { CopyIcon } from './icons/CopyIcon'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.neutral600};
  border-radius: ${({ theme }) => theme.radii.xs};
  width: 66%;
`

export const TitleAndIconWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-right: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.neutral};
`

export const Code = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.neutral};
`

export const Copy = styled(CopyIcon)`
  cursor: pointer;
`
