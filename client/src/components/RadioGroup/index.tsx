import * as S from './styles'

interface RadioItem {
  value: string
  id: string
  label: string
  description?: string
}

interface RadioGroupProps {
  handleChange: any
  value: any
  radioItems: RadioItem[]
  hasDescription?: boolean
}

export const RadioGroup = ({
  handleChange,
  value,
  radioItems,
  hasDescription = false,
}: RadioGroupProps) => (
  <S.RadioGroupRoot
    value={value}
    onValueChange={(value) => handleChange(value)}
    aria-label="View density"
  >
    {radioItems.map(({ value, id, label, description }) => (
      <>
        <S.WrapperContent key={id}>
          <S.RadioGroupItem value={value} id={id}>
            <S.RadioGroupIndicator />
          </S.RadioGroupItem>
          <S.Label hasDescription={hasDescription} htmlFor={id}>
            {label}
          </S.Label>
        </S.WrapperContent>

        {hasDescription && <S.Description>{description}</S.Description>}
      </>
    ))}
  </S.RadioGroupRoot>
)
