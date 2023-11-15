import * as S from './styles'

interface RootProps {
  children: React.ReactNode
}

export function Root({ children }: RootProps) {
  return <S.ImageAndContent>{children}</S.ImageAndContent>
}
