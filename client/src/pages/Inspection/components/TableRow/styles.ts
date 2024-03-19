import { css, styled } from 'styled-components'
import { lightenColor } from '../../../../utils/colors'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { CloseRoundedIcon } from '../../assets/CloseRoundedIcon'

const asPerStyle = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.success400};
  }
`

const nonCompilantStyle = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.error700};
  }
`

const incompleteStyle = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: #ffea2e;
  }
`

const notApplicableStyle = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.neutral};
  }
`

const STATUS_ROW = {
  as_per: asPerStyle,
  incomplete: incompleteStyle,
  non_compilant: nonCompilantStyle,
  not_applicable: notApplicableStyle,
}

function chooseOptionStatusRow(
  status: 'as_per' | 'incomplete' | 'non_compilant' | 'not_applicable',
) {
  return STATUS_ROW[status] || null
}

interface ItemTdProps {
  status?: 'as_per' | 'incomplete' | 'non_compilant' | 'not_applicable' | any
}

export const ItemTd = styled.td<ItemTdProps>`
  width: 66px;
  text-align: center !important;

  ${({ status }) => chooseOptionStatusRow(status)}
`
export const Description = styled.div`
  max-height: 139px !important;
  overflow-y: auto !important;
  text-align: left !important;
`

export const TrailTd = styled.td`
  width: 400px;
  text-align: center !important;
`

export const AddTrailButton = styled(PrimaryButton)`
  position: relative;
  background-color: inherit;
  text-align: center !important;
  color: ${({ theme }) => theme.colors.blue500} !important;
  border: 1px solid ${({ theme }) => theme.colors.blue500} !important;
  font-weight: ${({ theme }) => theme.fontWeights.medium} !important;

  &:hover {
    background-color: inherit !important;
    color: ${({ theme }) => theme.colors.blue500} !important;
    font-weight: ${({ theme }) => theme.fontWeights.medium} !important;
    border: 1px solid ${({ theme }) => lightenColor(theme.colors.blue500, 0.2)} !important;
  }
`

export const TrailTextAndIconWrapper = styled.div`
  .media {
    width: 100%;
    height: 100% !important;
  }

  .table {
    tr {
      border: 1px solid white;
    }

    td {
      border: 1px solid white;
    }
  }
`

export const TrailText = styled.div`
  cursor: pointer;
  padding-top: 2px;

  max-height: 139px;
  overflow-y: auto !important;

  text-align: left !important;
`
export const CloseRouded = styled(CloseRoundedIcon)`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 4px;
`

export const WrapperDocument = styled.div`
  cursor: pointer;
`

export const DocumentTypeText = styled.div`
  color: ${({ theme }) => theme.colors.neutral};
  text-align: left !important;
`

export const ClickToSeeText = styled.div`
  color: ${({ theme }) => theme.colors.neutral};
  text-align: left !important;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.neutral400};
`

export const NonObservationText = styled.div`
  font-style: italic;
  color: ${({ theme }) => theme.colors.neutral400};
  cursor: pointer;
`

export const ObservationText = styled.div`
  cursor: pointer;
  padding-top: 2px;

  max-height: 139px;
  overflow-y: auto !important;

  text-align: left !important;
`

export const ObservationTextAndIconWrapper = styled.div``
