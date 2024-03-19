import * as S from './styles'

export function HeaderSkeleton() {
  return (
    <S.Container>
      <S.WrapperTitleAndInfo>
        <S.WrapperTitleAndManagerdocument>
          <S.Title />
          <S.EditInfoButton />
        </S.WrapperTitleAndManagerdocument>

        <S.WrapperInformation>
          <S.InfoLabel />
          <S.InfoLabel />
          <S.InfoLabel />
        </S.WrapperInformation>

        <S.RecordLink />
      </S.WrapperTitleAndInfo>

      <S.WrapperManagerAndStatus>
        <S.LastUpdate />
        <S.ManagerButton />
        <S.Status />
      </S.WrapperManagerAndStatus>
    </S.Container>
  )
}
