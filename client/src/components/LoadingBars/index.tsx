import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0% {
    height: 10px;
  }
  50% {
    height: 80px;
  }
  100% {
    height: 10px;
  }
`

export const LoadingBars = () => {
  return (
    <LoadingBarsContainer>
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
    </LoadingBarsContainer>
  )
}

const LoadingBarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const LoadingBar = styled.div`
  width: 20px;
  max-height: 40px !important;
  background-color: ${({ theme }) => theme.colors.blue500};
  margin: 0 5px;
  animation: ${loadingAnimation} 1.5s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    animation-delay: 0.7s;
  }
`
