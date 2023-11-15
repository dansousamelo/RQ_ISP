import * as S from './styles'

const radioItems = [
  {
    value: 'privacyRequirement',
    id: 'r1',
    label:
      'Taxonomia de Requisitos de Privacidade Baseada na LGPD e ISO/IEC 29100',
  },
  {
    value: 'userStory',
    id: 'r2',
    label: 'Verificação de artefato - Estória de Usuário',
  },
]

export const RadioGroup = () => (
  <form>
    <S.RadioGroupRoot
      defaultValue="privacyRequirement"
      aria-label="View density"
    >
      {radioItems.map(({ value, id, label }) => (
        <S.WrapperContent key={id}>
          <S.RadioGroupItem value={value} id={id}>
            <S.RadioGroupIndicator />
          </S.RadioGroupItem>
          <S.Label htmlFor={id}>{label}</S.Label>
        </S.WrapperContent>
      ))}
    </S.RadioGroupRoot>
  </form>
)
