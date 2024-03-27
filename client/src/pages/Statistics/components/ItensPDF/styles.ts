import styled, { css } from 'styled-components'
import { darkenColor } from '../../../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1cm 2cm;
  position: absolute;
`

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleInspection = styled.span`
  color: black;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 1rem;
`

export const LabelText = styled.span`
  font-size: 12px;
  color: black;

  .table {
    tr {
      border: 1px solid black;
    }

    td {
      border: 1px solid black;
    }
  }
`
export const TitleItem = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const Description = styled.span`
  font-size: 12px;
  color: black;
  padding: 12px 0;
  border-top: 1px solid black;
  margin-top: 12px;
`

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  padding: 12px 0;
  gap: 4px;
`

export const WrapperTitleAndSituation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const asPerStyle = css`
  border: 2px solid ${({ theme }) => darkenColor(theme.colors.success400, 0.3)};
  color: ${({ theme }) => darkenColor(theme.colors.success400, 0.3)};
`

const nonCompilantStyle = css`
  border: 2px solid ${({ theme }) => darkenColor(theme.colors.error700, 0.2)};
  color: ${({ theme }) => darkenColor(theme.colors.error700, 0.2)};
`

const incompleteStyle = css`
  border: 2px solid #d1bd08;
  color: #d1bd08;
`

const notApplicableStyle = css`
  border: 2px solid ${({ theme }) => theme.colors.neutral700};
  color: ${({ theme }) => theme.colors.neutral700};
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

interface SituationProps {
  status: 'as_per' | 'incomplete' | 'non_compilant' | 'not_applicable' | any
}

export const Situation = styled.span<SituationProps>`
  padding: 4px 6px;
  font-weight: bold;
  border-radius: 8px;
  font-size: 12px;

  ${({ status }) => chooseOptionStatusRow(status)}
`
