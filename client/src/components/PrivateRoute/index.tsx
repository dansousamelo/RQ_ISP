import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
  createCookieWithExpiration,
  getAccessToken,
  getRefreshToken,
} from '../../utils/cookies'

interface TokenData {
  token: string
  refreshToken: string
  expiresIn: number
}

function isTokenExpired(): boolean {
  const currentTime = Math.floor(Date.now() / 1000)
  const tokenExpiration = Cookies.get('tokenExpiration')

  const expirationTimestamp = parseInt(String(tokenExpiration), 10)

  if (isNaN(expirationTimestamp)) {
    return true
  }

  return currentTime > expirationTimestamp
}

async function regenerateToken(): Promise<boolean> {
  const refreshToken = Cookies.get(REFRESH_TOKEN_COOKIE_NAME)

  if (refreshToken) {
    try {
      const response = await fetch('http://localhost:8000/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      })

      if (response.ok) {
        const data: TokenData = await response.json()
        const { token, refreshToken } = data

        Cookies.set(ACCESS_TOKEN_COOKIE_NAME, token)
        Cookies.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken)
        createCookieWithExpiration()

        return true
      }
    } catch (error) {
      console.error('Erro ao regenerar o token:', error)
    }
  }

  return false
}

interface PrivateRouteProps {
  element: React.ReactNode
}

export function PrivateRoute({
  element,
}: PrivateRouteProps): JSX.Element | null {
  const navigate = useNavigate()
  const accessToken = getAccessToken()
  console.log('accessToken: ', accessToken)
  const refreshToken = getRefreshToken()

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      console.log('caiu aqui')
      navigate('/')
      return
    }

    if (isTokenExpired()) {
      regenerateToken().then((regenerated) => {
        console.log('caiu aqui 2')
        if (!regenerated) {
          console.log('caiu aqui 3')
          navigate('/')
        }
      })
    }
  }, [accessToken, refreshToken, navigate])

  return <>{element}</>
}
