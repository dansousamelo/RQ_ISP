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
import { api } from '../../lib/axios'

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

export async function regenerateToken(): Promise<boolean> {
  const refreshToken = Cookies.get(REFRESH_TOKEN_COOKIE_NAME)

  if (refreshToken) {
    try {
      const response = await api.post(
        'refresh-token',
        {
          refreshToken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (response.status === 200) {
        const data: TokenData = response.data.data
        const { token } = data

        Cookies.set(ACCESS_TOKEN_COOKIE_NAME, token)
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
  const refreshToken = getRefreshToken()

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      navigate('*')
      return
    }

    if (isTokenExpired()) {
      regenerateToken().then((regenerated) => {
        if (!regenerated) {
          navigate('/')
        }
      })
    }
  }, [accessToken, refreshToken, navigate])

  return <>{element}</>
}
