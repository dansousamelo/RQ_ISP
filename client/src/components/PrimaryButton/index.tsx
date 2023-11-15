import React from 'react'
import * as S from './styles'

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const PrimaryButton: React.FC<CustomButtonProps> = ({
  children,
  ...props
}) => {
  return <S.StyledButton {...props}>{children}</S.StyledButton>
}
