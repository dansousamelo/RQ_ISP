import { SuccessToast } from '../../../../../../components/Toast'
import * as S from './styles'

interface AccessCodeProps {
  code: string
}

export function AccessCode({ code }: AccessCodeProps) {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => SuccessToast('Código copiado com sucesso!'))
      .catch(() =>
        alert('Erro ao copiar o código. Por favor, tente novamente.'),
      )
  }

  return (
    <S.Container>
      <S.TitleAndIconWrapper>
        <S.Title>Código de acesso</S.Title>
        <S.Copy onClick={handleCopy} />
      </S.TitleAndIconWrapper>
      <S.Code>{code}</S.Code>
    </S.Container>
  )
}
