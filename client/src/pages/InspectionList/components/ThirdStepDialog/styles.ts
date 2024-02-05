import { motion } from 'framer-motion'
import { styled } from 'styled-components'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { lightenColor } from '../../../../utils/colors'

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const ContentWrapper = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  animate: 'visible',
  variants: fadeInVariants,
  transition: { duration: 1 },
}))``

export const WrapperButton = styled.div`
  margin-top: ${({ theme }) => theme.space[4]};
  display: flex;
  gap: ${({ theme }) => theme.space[4]};

  button {
    width: 100%;
  }
`

export const ButtonStyled = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.blue500} !important;
  color: ${({ theme }) => theme.colors.neutral}!important;
  &:hover {
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.blue500, 0.2)} !important;
  }
`

export const BackButtonStyled = styled(PrimaryButton)`
  background-color: inherit;
  text-align: center !important;
  color: ${({ theme }) => theme.colors.neutral} !important;
  border: 1px solid ${({ theme }) => theme.colors.neutral} !important;
  font-weight: ${({ theme }) => theme.fontWeights.medium} !important;

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.neutral} !important;
    font-weight: ${({ theme }) => theme.fontWeights.medium} !important;
    border: 1px solid ${({ theme }) => lightenColor(theme.colors.neutral, 0.2)} !important;
  }
`

export const WrapperSeeIconAndText = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
