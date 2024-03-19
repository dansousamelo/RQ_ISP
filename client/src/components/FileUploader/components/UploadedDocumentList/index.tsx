import * as S from './styles'

type DocumetProps = {
  name: string
  url: string
  s3Name: string
}

interface UploadedDocumentListProps {
  documents: DocumetProps[]
  onDeleteFile: (name: string, documentInCloud: string) => void
}

export function UploadedDocumentList({
  documents,
  onDeleteFile,
}: UploadedDocumentListProps) {
  return (
    <S.Wrapper>
      {documents.map((document) => {
        return (
          <S.Container key={document.name}>
            <S.DocumentUploaderContainer>
              <S.Label>{document.name}</S.Label>
            </S.DocumentUploaderContainer>
            <S.CloseButton
              onClick={() => onDeleteFile(document.name, document.s3Name)}
            />
          </S.Container>
        )
      })}
    </S.Wrapper>
  )
}
