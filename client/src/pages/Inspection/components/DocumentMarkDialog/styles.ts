import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 25rem;
  overflow-y: auto;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 8px;
  padding: 1rem;
`

export const WrapperTitleCloe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HighlightLocation = styled.div`
  margin-top: 0.5rem;
  text-align: right;
  font-size: 12px;
`
