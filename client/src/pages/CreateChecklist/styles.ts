import { motion } from 'framer-motion'
import { styled } from 'styled-components'
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

export const ButtonStyled = styled(PrimaryButton)`
  width: 100%;
`
