import { useState } from 'react'
import * as S from './styles'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
  customColor?: string
  size?: 'sm'
}

export function TabItem({
  value,
  title,
  isSelected = false,
  customColor,
  size,
}: TabItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseStyle = {
    padding: size === 'sm' ? '0 12px 16px' : '0 64px 16px',
  }
  const hoverStyle = {
    color: customColor,
  }
  const activeStyle = isSelected
    ? {
        color: customColor,
      }
    : {}

  return (
    <S.StyledTrigger
      value={value}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered
          ? { ...baseStyle, ...hoverStyle }
          : isSelected
          ? { ...baseStyle, ...activeStyle }
          : baseStyle
      }
    >
      <span>{title}</span>
      {isSelected && (
        <S.SelectedIndicator
          layoutId="activeTab"
          style={{ backgroundColor: customColor }}
        />
      )}
    </S.StyledTrigger>
  )
}
