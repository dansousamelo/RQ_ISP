import { styled } from 'styled-components'

export const StyledHeader = styled.header`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #4b5563;
  padding-bottom: 2rem;
`

export const Title = styled.h1`
  font-family: 'Poiret One', cursive;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 2.5rem;
  color: #22d3ee;
`

export const IconContainer = styled.div`
  display: flex;
  gap: 3rem;
`

export const ClickableIcon = styled.div`
  cursor: pointer;
`
