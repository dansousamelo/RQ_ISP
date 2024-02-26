import { css, styled } from 'styled-components'
import { PrimaryButton } from '../../components/PrimaryButton'
import { lightenColor } from '../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 150px;
  padding-top: 40px;
`

export const TableStyled = styled.table`
  overflow: auto;
  width: -webkit-fill-available;

  thead {
    background-color: ${({ theme }) => theme.colors.neutral600};
    padding: 12px;

    tr {
      th {
        padding: 12px;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        text-align: left;
      }
    }
  }

  tbody {
    overflow-y: scroll;
    height: 28rem;
    width: 28rem;

    background-color: ${({ theme }) => theme.colors.neutral700};
    tr {
      td {
        padding: 12px;
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        text-align: left;
        position: relative;

        word-wrap: break-word;
      }
    }
  }
`

export const WrapperSaveAndCancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`

export const SaveInspectionButton = styled(PrimaryButton)`
  position: relative;
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

export const CancelInspectionButton = styled(PrimaryButton)`
  position: relative;
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
