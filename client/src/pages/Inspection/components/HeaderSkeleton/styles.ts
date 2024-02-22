import { styled } from 'styled-components'
import { Skeleton } from '../../../../components/Skeleton'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`

export const Title = styled(Skeleton)`
  height: 32.5px;
  border-radius: 8px;
  width: 142px;
`

export const WrapperTitleAndManagerdocument = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[5]};
  margin: 12px 0;
`

export const EditInfoButton = styled(Skeleton)`
  height: 37px;
  width: 152px;
  border-radius: 8px;
`

export const WrapperInformation = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`

export const InfoLabel = styled(Skeleton)`
  height: 21.5px;
  border-radius: 8px;
  width: 200px;
`

export const RecordLink = styled(Skeleton)`
  border-radius: 8px;
  height: 21.5px;
  width: 400px;
`

export const WrapperTitleAndInfo = styled.div``

export const WrapperManagerAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
`

export const LastUpdate = styled(Skeleton)`
  border-radius: 8px;
  height: 17px;
  width: 240px;
`

export const Status = styled(Skeleton)`
  border-radius: 8px;
  height: 22px;
  width: 123px;
`

export const ManagerButton = styled(Skeleton)`
  border-radius: 8px;
  height: 37px;
  width: 178px;
`
