import { styled } from 'styled-components'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { lightenColor } from '../../../../utils/colors'
import { CloseIcon } from '../../../../assets/icons/Close'
import { GoBackIcon } from './assets/goBackIcon'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  background: black;
  color: white;
`

export const Title = styled.h1`
  font-family: 'Poiret One', cursive;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 2.5rem;
  margin: 1rem 0;
  color: #22d3ee;
  cursor: pointer;
`

export const Divider = styled.div`
  background-color: white;
  height: 1px;
  width: 100%;
`

export const MarkTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 1rem;
`

export const Description = styled.p`
  color: white;
  margin: 8px 1rem 1rem 1rem;
  font-size: 14px;
`

export const SaveButton = styled(PrimaryButton)`
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral} !important;
  background-color: ${({ theme }) => theme.colors.blue500} !important;
  text-align: center !important;
  font-weight: ${({ theme }) => theme.fontWeights.bold} !important;

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.neutral} !important;
    background-color: ${({ theme }) =>
      lightenColor(theme.colors.blue500, 0.2)} !important;
  }
`

export const CancelButton = styled(PrimaryButton)`
  position: relative;
  cursor: pointer;
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

export const ResetButton = styled(PrimaryButton)`
  position: relative;
  margin-top: 1rem;

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

export const WrapperButtons = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-direction: column;
  padding: 0 1rem;

  button {
    width: 100% !important;
  }
`

export const MarkList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 1rem;
  overflow-y: auto;

  li {
    border: 1px solid white !important;
    border-radius: 8px;
    margin-top: 1rem;
  }
`

export const HighlightLocation = styled.div`
  margin-top: 0.5rem;
  text-align: right;
  font-size: 12px;
`
export const Close = styled(CloseIcon)`
  path {
    fill: ${({ theme }) => theme.colors.error700} !important;
  }
`

export const WrapperTitleCloe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WrapperIconAndTitle = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 20px;
`

export const BackIcon = styled(GoBackIcon)`
  cursor: pointer;
`
