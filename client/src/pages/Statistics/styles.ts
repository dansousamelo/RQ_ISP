import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 140px;
  height: 100vh;
  overflow: hidden;
`

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.875rem;
`

export const WrapperSelectAndGraphics = styled.div`
  display: flex;
  gap: 12rem;
`

export const WrapperChartBar = styled.div`
  height: 55%;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  margin: 1rem 0;
`

export const PrintComponent = styled.div`
  visibility: hidden;
`
