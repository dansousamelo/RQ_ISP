import styled from 'styled-components'
import { CloseIcon } from '../../../../assets/icons/Close'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  max-height: 12rem;
  overflow-y: auto;
`

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-right: 4px;
`

export const DocumentUploaderContainer = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  width: 100%;
`

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral};
`

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`
