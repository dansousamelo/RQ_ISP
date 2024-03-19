import styled from 'styled-components'
import { AnimatedCheckIcon } from './components/AnimatedCheckIcon'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 268px;
  align-items: center;
  justify-content: center;

  svg {
    g {
      path {
        transform: scale(1.6);
      }
    }
  }
`

const Title = styled.h2`
  position: relative;
  bottom: 10px;
  color: white;
  font-size: 2rem;
  text-align: center;
  font-weight: normal;
  margin: 0;
`

const Description = styled.span`
  color: white;
  position: relative;
  font-size: 0.875rem;
  text-align: center;
`

export const DialogStatus = {
  Root,
  Title,
  Description,
  AnimatedCheckIcon,
}
