import { styled } from 'styled-components'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { lightenColor } from '../../../../utils/colors'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`

export const Title = styled.span`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const WrapperTitleAndManagerdocument = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[5]};
  margin: 12px 0;
`

export const EditInfoButton = styled(PrimaryButton)`
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

interface WrapperInformationProps {
  hasRecordLing: boolean
}

export const WrapperInformation = styled.div<WrapperInformationProps>`
  display: flex;
  gap: 12px;
  margin-bottom: ${({ hasRecordLing }) => (hasRecordLing ? '12px' : '0px')};
`

export const InfoLabel = styled.time`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const InfoValue = styled.span``

export const RecordLink = styled.time`
  cursor: pointer;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    transition: color 0.5s ease-in-out;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      color: ${({ theme }) => theme.colors.blue500} !important;
    }
  }
`

export const WrapperTitleAndInfo = styled.div``

export const WrapperManagerAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
`

export const LastUpdate = styled.i`
  color: ${({ theme }) => theme.colors.neutral400};
  font-size: 12px;
`

export const Status = styled.span`
  color: ${({ theme }) => theme.colors.neutral};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

export const ManagerButton = styled(PrimaryButton)`
  width: 74% !important;
`
