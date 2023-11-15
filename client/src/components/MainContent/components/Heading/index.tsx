import * as S from './styles'

interface HeadingProps {
  children: JSX.Element | string
}

export function Heading({ children }: HeadingProps) {
  return <S.Heading>{children}</S.Heading>
}
