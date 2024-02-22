import { css, styled } from 'styled-components'
import { lightenColor } from '../../utils/colors'
import { PrimaryButton } from '../../components/PrimaryButton'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  margin: 0 140px;
  height: 100vh;
`

export const Title = styled.h1`
  margin: 1rem 0;
`

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
`

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) 3fr;
  margin-top: 24px;
`

export const TableContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) 3fr;
  overflow-y: auto;
  margin: 24px 0;
  margin-top: 0px;
`

export const WrapperStatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

interface StatusIndicatorProps {
  status: 'uninitiated' | 'initiated' | 'concluded'
}

const concludedStatusStyled = css`
  background-color: ${({ theme }) => theme.colors.success400};
`

const initiatedStatusStyled = css`
  background-color: #ffe500;
`

const uninitiatedStatusStyled = css`
  background-color: ${({ theme }) => theme.colors.neutral};
`

const STATUS_COLOR_OPTIONS = {
  uninitiated: uninitiatedStatusStyled,
  initiated: initiatedStatusStyled,
  concluded: concludedStatusStyled,
}

function chooseStatusColorOption(
  status: 'uninitiated' | 'initiated' | 'concluded',
) {
  return STATUS_COLOR_OPTIONS[status]
}

export const StatusIndicator = styled.div<StatusIndicatorProps>`
  border-radius: ${({ theme }) => theme.radii.full};
  height: 8px;
  width: 8px;

  ${({ status }) => chooseStatusColorOption(status)}
`

export const WrapperTable = styled.div``

interface TableCellProps {
  hasGap?: boolean
}

export const TableTitleCell = styled.time<TableCellProps>`
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.neutral700};
  padding: 24px 0px;
  line-height: 2.4;

  padding-left: ${({ hasGap }) => (hasGap ? '0px' : '40px')};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const TableCell = styled.tr<TableCellProps>`
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.neutral700};
  padding: 24px 0px;
  line-height: 2.4;

  padding-left: ${({ hasGap }) => (hasGap ? '0px' : '40px')};

  ${({ hasGap }) =>
    hasGap &&
    css`
      display: flex;
      gap: 8px;
    `}
`

export const TableHeader = styled.thead`
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.neutral600};
  padding: 24px 0px;
  padding-left: 40px;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:nth-child(4) {
    border-top-right-radius: 8px;
  }
`

interface ButtonStyledProps {
  label?: string
}

export const ButtonStyled = styled(PrimaryButton)<ButtonStyledProps>`
  background-color: inherit;
  text-align: center !important;
  color: ${({ theme }) => theme.colors.blue500} !important;
  border: 1px solid ${({ theme }) => theme.colors.blue500} !important;
  font-weight: ${({ theme }) => theme.fontWeights.bold} !important;

  ${({ label }) =>
    label === 'Excluir' &&
    css`
      color: ${({ theme }) => theme.colors.error700} !important;
      border: 1px solid ${({ theme }) => theme.colors.error700} !important;
    `}

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.blue500} !important;
    font-weight: ${({ theme }) => theme.fontWeights.bold} !important;
    border: 1px solid ${({ theme }) => lightenColor(theme.colors.blue500, 0.2)} !important;
    ${({ label }) =>
      label === 'Excluir' &&
      css`
        color: ${({ theme }) => theme.colors.error700} !important;
        border: 1px solid
          ${({ theme }) => lightenColor(theme.colors.error700, 0.2)} !important;
      `}
  }
`
