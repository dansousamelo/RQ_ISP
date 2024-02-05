import { Input } from '../../../../components/Input'
import { useLoggedInspectionContext } from '../../../../contexts/LoggedInspection'
import * as S from './styles'
import * as z from 'zod'
import { Info } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const secondStepSchema = z.object({
  name: z.string().min(3, 'Por favor informe um nome válido'),
  responsable: z
    .string()
    .min(3, 'Por favor insira um nome válido para o resposável'),
  email: z.string().email('Por favor informe um endereço de email válido'),
  participants: z
    .string()
    .min(3, 'Por favor insira nome(s) válido(s) para o(s) participante(s)')
    .optional()
    .or(z.literal('')),
  record_link: z
    .string()
    .url('Por favor informe uma url válida')
    .optional()
    .or(z.literal('')),
})

interface SecondStepSchemaProps {
  [key: string]: string
}

export function SecondStepDialog() {
  const { updateSecondStepData, secondStepData, setDialogInspectionStep } =
    useLoggedInspectionContext()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SecondStepSchemaProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(secondStepSchema),
    defaultValues: {
      name: secondStepData.name || '',
      responsable: secondStepData.responsable || '',
      email: secondStepData.email || '',
      participants: secondStepData.participants || '',
      record_link: secondStepData.record_link || '',
    },
  })

  const handleSubmitForm = (data: any) => {
    updateSecondStepData(data)
    setDialogInspectionStep('third_step')
  }

  const INPUT_OPTIONS = [
    {
      value: 'name',
      label: 'Nomear',
      description: 'Escolha um nome para a sua inspeção.',
      placeholder: 'Histórias de Usuário - Ministério da Agricultura',
      required: true,
    },
    {
      value: 'responsable',
      label: 'Responsável',
      description: 'Informe o nome do responsável pela inspeção.',
      placeholder: 'João da Silva',
      required: true,
    },
    {
      value: 'email',
      label: 'E-mail',
      description: 'Forneça o e-mail do responsável pela inspeção.',
      placeholder: 'example@email.com',
      required: true,
    },
    {
      value: 'participants',
      label: 'Participantes',
      description: 'Informe, se houverem, os participantes da inspeção.',
      placeholder: 'Daniel Veras e Paulo Almeida',
      required: false,
    },
    {
      value: 'record_link',
      label: 'Link de gravação',
      description:
        'Informe, se houver, um link para a gravação da inspeção, se preferir adicione em outro momento.',
      placeholder: 'www.example.com',
      required: false,
    },
  ]

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <S.InputWrapper>
        {INPUT_OPTIONS.map((element) => {
          const errorValue = errors[element.value]
          return (
            <S.InputWithErrorWrapper key={element.value}>
              <Input.Root>
                <Input.Label>
                  {element.label}
                  {element.required && (
                    <Input.RequiredText variant={errorValue ? 'error' : ''}>
                      *
                    </Input.RequiredText>
                  )}
                </Input.Label>
                <Input.Description>{element.description}</Input.Description>
                <Input.Input
                  {...register(element.value)}
                  hasError={Boolean(errorValue)}
                  type="text"
                  placeholder={element.placeholder}
                />
              </Input.Root>
              {!!errorValue && (
                <Input.ErrorMessageRoot>
                  <Info color="#FF0000" />
                  <Input.ErrorMessage>{errorValue.message}</Input.ErrorMessage>
                </Input.ErrorMessageRoot>
              )}
            </S.InputWithErrorWrapper>
          )
        })}
      </S.InputWrapper>

      <S.WrapperButton>
        <S.BackButtonStyled
          onClick={() => setDialogInspectionStep('first_step')}
        >
          Voltar
        </S.BackButtonStyled>
        <S.ButtonStyled type="submit">Avançar</S.ButtonStyled>
      </S.WrapperButton>
    </form>
  )
}
