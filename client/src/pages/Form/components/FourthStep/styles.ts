import { motion } from 'framer-motion'
import { css, styled } from 'styled-components'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { lightenColor } from '../../../../utils/colors'

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const MainContainer = styled(motion.main)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ContentWrapper = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  animate: 'visible',
  variants: fadeInVariants,
  transition: { duration: 1 },
}))`
  width: 387px;
`

export const RadioGroupWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral400};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space[6]};
`

export const WrapperButton = styled.div`
  margin-top: ${({ theme }) => theme.space[4]};
  display: flex;
  gap: ${({ theme }) => theme.space[4]};

  button {
    width: 100%;
  }
`

export const ButtonStyled = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.success400} !important;
  color: ${({ theme }) => theme.colors.neutral}!important;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  &:hover {
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.success400, 0.2)} !important;
  }

  div {
    position: relative;
    top: 1px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;

      background-color: ${({ theme }) => theme.colors.neutral400} !important;
      color: ${({ theme }) => theme.colors.neutral}!important;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      &:hover {
        background-color: ${({ theme }) =>
          lightenColor(theme.colors.neutral400, 0.2)} !important;
      }
    `}
`

export const BackButtonStyled = styled(PrimaryButton)`
  background-color: inherit;
  text-align: center !important;
  color: ${({ theme }) => theme.colors.error700} !important;
  border: 1px solid ${({ theme }) => theme.colors.error700} !important;
  font-weight: ${({ theme }) => theme.fontWeights.medium} !important;

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.error700} !important;
    font-weight: ${({ theme }) => theme.fontWeights.medium} !important;
    border: 1px solid ${({ theme }) => lightenColor(theme.colors.error700, 0.2)} !important;
  }
`

export const Subtitle = styled.span`
  margin-bottom: 0px !important;
  margin-top: 0px !important;
`

export const WrapperSeeIconAndText = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const MessageToDownload = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 12px !important;
`
