import { motion } from 'framer-motion'
import { css, styled } from 'styled-components'
import { PrimaryButton } from '../../components/PrimaryButton'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  overflow: hidden;
  margin: 0 140px;
  height: 100vh;
`

export const MainContainer = styled(motion.main)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ContentWrapper = styled.div`
  width: 387px;
`

interface ButtonStyledProps {
  isLoading: boolean
}

const buttonStyledPressed = css`
  background-color: ${({ theme }) => theme.colors.blue500};
  color: ${({ theme }) => theme.colors.neutral};
`

export const ButtonStyled = styled(PrimaryButton)<ButtonStyledProps>`
  width: 100%;
  margin-top: ${({ theme }) => theme.space[4]};

  svg {
    margin-right: ${({ theme }) => theme.space[1]};
    position: relative;
    top: 1px;
  }

  ${({ isLoading }) => isLoading && buttonStyledPressed}
`
