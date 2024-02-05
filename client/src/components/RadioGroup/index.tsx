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

interface RadioGroupProps {
  handleChange: any
  value: any
}

export const RadioGroup = ({ handleChange, value }: RadioGroupProps) => (
  <S.RadioGroupRoot
    value={value}
    onValueChange={(value) => handleChange(value)}
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
)
