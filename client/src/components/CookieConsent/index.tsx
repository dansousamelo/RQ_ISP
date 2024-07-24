import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Cookies from 'js-cookie'
import * as S from './styles'

const COOKIE_CONSENT_NAME = 'cookie_consent'

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const consent = Cookies.get(COOKIE_CONSENT_NAME)
    if (!consent) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set(COOKIE_CONSENT_NAME, 'true', { expires: 365 })
    setIsOpen(false)
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.Wrapper>
            <h1>Política de Cookies</h1>
            <span>
              Usamos cookies para garantir que você obtenha a melhor experiência
              em nosso site. Consulte nossa{' '}
              <a
                href="https://dansousamelo.github.io/RQ_ISP/#/politicas/politicas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>
              .
            </span>
          </S.Wrapper>
          <S.ButtonStyled onClick={handleAccept}>Aceitar</S.ButtonStyled>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
