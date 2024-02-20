import { Select } from '../../../../components/Select'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { InspectionDialog } from '../..'

interface ChooseDocumentMark {
  value: string
  label: string
}

interface FormValues {
  selectedValue: string
}

const schema = z.object({
  selectedValue: z.string({ required_error: 'Selecione uma opção válida' }),
})

interface ChooseDocumentMarkDialogProps {
  items: ChooseDocumentMark[]
  setDialogInspectionStep: React.Dispatch<
    React.SetStateAction<InspectionDialog>
  >
  hasTrailFilled: boolean
  id: string
  amountOfItens: number
  idMark: string
}

export function ChooseDocumentMarkDialog({
  items,
  setDialogInspectionStep,
  id,
  hasTrailFilled,
  idMark,
  amountOfItens,
}: ChooseDocumentMarkDialogProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const selectedValueEncoded = data.selectedValue.replace(/\//g, '%2F')
    navigate(
      `/inspection/${id}/${selectedValueEncoded}/${amountOfItens}/${idMark}/mark`,
    )
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <Controller
          name="selectedValue"
          control={control}
          render={({ field }) => (
            <Select.Root onValueChange={field.onChange} {...field}>
              <Select.Trigger className="SelectTrigger">
                <Select.Value placeholder="Selecione..." />
                <Select.Icon
                  style={{ marginTop: '4px' }}
                  className="SelectIcon"
                >
                  <Select.ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="SelectContent"
                  position="popper"
                  align="end"
                  sideOffset={2}
                >
                  <Select.Viewport className="SelectViewport">
                    <Select.Group>
                      {items.map((option) => (
                        <Select.Item key={option.value} value={option.value}>
                          <Select.ItemText>{option.label}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          )}
        />
        {errors.selectedValue && (
          <S.ErrorMessage>{errors.selectedValue.message}</S.ErrorMessage>
        )}
      </S.Container>
      <S.WrapperButton>
        <S.BackButtonStyled
          type="button"
          onClick={
            hasTrailFilled
              ? () => setDialogInspectionStep('document_trail_marks')
              : () => setDialogInspectionStep('choose_trail')
          }
        >
          Voltar
        </S.BackButtonStyled>
        <S.ButtonStyled type="submit">Marcar</S.ButtonStyled>
      </S.WrapperButton>
    </form>
  )
}
