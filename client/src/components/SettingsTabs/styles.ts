import styled from 'styled-components'
import { Root as TabsRoot, List as TabsList } from '@radix-ui/react-tabs'

export const TabRoot = styled(TabsRoot)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TabList = styled(TabsList)`
  display: flex;
  width: 100%;
  gap: 0.25rem;
  border-bottom: 1px solid #d1d5db;
`

export const WrapperContent = styled.div`
  margin-top: 12px;
`
