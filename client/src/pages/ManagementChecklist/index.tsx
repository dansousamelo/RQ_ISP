import { useState } from 'react'
import { useForm, useFormState, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { AxiosError } from 'axios'
import managerListPicture from '../../assets/managerList.png'
import { Info } from 'phosphor-react'
import * as S from './styles'

import { useNavigate } from 'react-router-dom'
import {
  createCookieWithExpiration,
  setAccessToken,
  setRefreshToken,
} from '../../utils/cookies'
import { HeaderWithoutAuth } from '../../components/HeaderWithoutAuth'
import { MainContent } from '../../components/MainContent/components'
import { Input } from '../../components/Input'
import { Spinner } from '../../components/Spinner'
import { Footer } from '../../components/Footer'
import { api } from '../../lib/axios'
import { TitleUpdater } from '../../components/TitleUpdater'

const formSchema = z.object({
  accessCode: z.string().min(1, 'Campo obrigatório'),
})

type FormData = z.infer<typeof formSchema>

export function ManagementChecklist() {
  const { register, handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [errorInRequest, setErrorInRequest] = useState('')
  const navigate = useNavigate()

  const { errors } = useFormState({ control })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoading(true)
      const response = await api.get(`find-user`, {
        params: {
          accessCode: data.accessCode,
        },
      })

      const { token, refreshToken, user } = response.data.data

      setAccessToken(token)
      setRefreshToken(refreshToken)
      createCookieWithExpiration()
      navigate(`/inspection/list/${user}`)
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setErrorInRequest(error.response?.data.message)
      } else {
        throw error
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = () => {
    setErrorInRequest('')
  }

  return (
    <>
      <TitleUpdater title="Acessar inspeções" />
      <S.HomePageContainer>
        <HeaderWithoutAuth />
        <S.MainContainer
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          <MainContent.Root>
            <MainContent.Image
              src={managerListPicture}
              alt="Management Checklist Picture"
            />
            <S.ContentWrapper>
              <MainContent.Heading>
                Acessar lista de inspeções
              </MainContent.Heading>
              <MainContent.Paragraph>
                Gerencie suas inspeções de forma eficiente, permitindo um
                controle mais refinado e otimizado das suas tarefas e objetivos.
              </MainContent.Paragraph>
              <Input.Root>
                <Input.Label>
                  Código de acesso
                  <Input.RequiredText
                    variant={errors.accessCode || errorInRequest ? 'error' : ''}
                  >
                    *
                  </Input.RequiredText>
                </Input.Label>
                <Input.Input
                  hasError={
                    Boolean(errors.accessCode?.message) ||
                    Boolean(errorInRequest)
                  }
                  type="text"
                  {...register('accessCode')}
                  placeholder={'Digite o seu código de acesso'}
                  onChange={handleInputChange}
                />
                {errors.accessCode && (
                  <Input.ErrorMessageRoot>
                    <Info color="#FF0000" />
                    <Input.ErrorMessage>
                      {errors.accessCode.message}
                    </Input.ErrorMessage>
                  </Input.ErrorMessageRoot>
                )}

                {errorInRequest && (
                  <Input.ErrorMessageRoot>
                    <Info color="#FF0000" />
                    <Input.ErrorMessage>{errorInRequest}</Input.ErrorMessage>
                  </Input.ErrorMessageRoot>
                )}
              </Input.Root>
              <S.ButtonStyled
                isLoading={isLoading}
                onClick={handleSubmit(onSubmit)}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                    Carregando
                  </>
                ) : (
                  'Entrar'
                )}
              </S.ButtonStyled>
            </S.ContentWrapper>
          </MainContent.Root>
        </S.MainContainer>
        <Footer />
      </S.HomePageContainer>
    </>
  )
}
