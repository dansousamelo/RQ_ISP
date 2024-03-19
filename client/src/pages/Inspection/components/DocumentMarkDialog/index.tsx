import * as S from './styles'

interface DocumentMark {
  text: string
  pageNumber: number
  id: string
  documentName: string
}

interface DocumentMarkDialogProps {
  items: DocumentMark[]
}

export function DocumentMarkDialog({ items }: DocumentMarkDialogProps) {
  return (
    <S.Container>
      {items.map((item) => (
        <S.ItemContainer key={item.id}>
          <blockquote style={{ marginTop: '0.5rem' }}>{item.text}</blockquote>
          <S.HighlightLocation>
            {item.documentName} • Página {item.pageNumber}
          </S.HighlightLocation>
        </S.ItemContainer>
      ))}
    </S.Container>
  )
}
