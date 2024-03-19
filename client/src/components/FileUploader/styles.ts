import styled, { keyframes } from 'styled-components'
import { CloudUploadIcon } from './assets/CloudUploadIcon'
import { DocumentIcon } from './assets/DocumentIcon'

const moveUpDownAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px 0px;
  border-radius: ${(props) => props.theme.sm};
  padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[4]};
  width: 100%;
  height: auto;
`

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FileName = styled.h3`
  font-family: ${(props) => props.theme.primary};
  font-weight: ${(props) => props.theme.regular};
  font-size: ${(props) => props.theme.md};
`

export const FileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
`

export const ContentButtonExclude = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[1]};
`

interface FileUploaderProps {
  variant: 'invalid' | 'valid'
}

export const FileUploader = styled.div<FileUploaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-spacing: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[5]};
  background-image: url('data:image/svg+xml,%3csvg width="100%25" height="100%25" xmlns="http://www.w3.org/2000/svg"%3e%3crect width="100%25" height="100%25" fill="none" stroke="grey" stroke-width="4" stroke-dasharray="8" stroke-dashoffset="0" stroke-linecap="round"/%3e%3c/svg%3e');
  cursor: grab;

  ${(props) =>
    props.variant === 'invalid' &&
    `
    background-image: url('data:image/svg+xml,%3csvg width="100%25" height="100%25" xmlns="http://www.w3.org/2000/svg"%3e%3crect width="100%25" height="100%25" fill="none" stroke="red" stroke-width="4" stroke-dasharray="8" stroke-dashoffset="0" stroke-linecap="round"/%3e%3c/svg%3e');
  `}
`

export const WrapperIconAndMessageUpload = styled.div`
  display: flex;
  align-items: center;
`

export const UploadIcon = styled(CloudUploadIcon)`
  color: ${(props) => props.theme.gray500};
  margin-right: ${(props) => props.theme.space[4]};
  animation: ${moveUpDownAnimation} 2s ease infinite;
`

export const DocumentFileIcon = styled(DocumentIcon)`
  height: 16px;
`

export const MessageUpload = styled.span`
  font-family: ${(props) => props.theme.primary};
  font-weight: normal;
  font-size: ${(props) => props.theme.md};
`

export const MessageUploadBold = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.primary};
`

export const MessageUploadError = styled.span`
  font-size: ${(props) => props.theme.xs};
  font-family: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.error700};
`

export const MessageUploadDescription = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-left: ${(props) => props.theme.space[4]};
`

export const MessageUploadDescriptionVariant = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-left: -3rem;
`
