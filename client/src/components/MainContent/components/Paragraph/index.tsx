import * as S from './styles'

interface ParagraphProps {
  children: JSX.Element | string
}

export function Paragraph({ children }: ParagraphProps) {
  return <S.Paragraph>{children}</S.Paragraph>
}
