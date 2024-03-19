import styled from 'styled-components'
import { PrimaryButton } from '../../components/PrimaryButton'
import { lightenColor } from '../../utils/colors'
import { GoBackIcon } from './assets/goBackIcon'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Animation = styled.div`
  transform: scale(0.4);
  height: 80vh;
  filter: brightness(1.2) saturate(100%) hue-rotate(330deg);
`
export const GoBackButton = styled(PrimaryButton)`
  color: ${({ theme }) => theme.colors.neutral} !important;
  background-color: ${({ theme }) => theme.colors.blue500} !important;
  text-align: center !important;
  font-weight: ${({ theme }) => theme.fontWeights.bold} !important;
  position: relative;
  bottom: 160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.neutral} !important;
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.blue500, 0.2)} !important;
  }
`

export const BackIcon = styled(GoBackIcon)`
  position: relative;
  top: 2px;
  svg {
    path {
      fill: white !important;
    }
  }
`
