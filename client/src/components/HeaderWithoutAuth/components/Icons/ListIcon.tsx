import { useState } from 'react'
import { ChecklistType } from '../../interfaces'

interface ListIconProps {
  id: ChecklistType
  width?: number
  height?: number
  fill?: string
  isActive: boolean
  onClick: (id: ChecklistType) => void
}

export function ListIcon({
  width = 40,
  height = 32,
  fill = '#fff',
  isActive,
  id,
  onClick,
}: ListIconProps) {
  const [hovered, setHovered] = useState(false)

  const pathStyle: React.CSSProperties = {
    transition: `fill 0.3s ease-in-out`,
  }

  const svgStyle: React.CSSProperties = {
    cursor: 'pointer',
  }

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: `${width}px`,
    height: `${height + 4}px`,
    marginBottom: '4px',
  }

  const barStyle: React.CSSProperties = {
    width: '104%',
    height: '4px',
    backgroundColor: '#22D3EE',
    position: 'absolute',
    bottom: '-12px',
    left: '0',
    transform: `scaleX(${hovered || isActive ? 1 : 0})`,
    transformOrigin: 'left',
    transition: 'transform 0.3s ease-in-out',
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={containerStyle}
      onClick={() => onClick(id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 48 36"
        fill="none"
        style={svgStyle}
      >
        <path
          d="M0 21.6H5.33333V14.4H0V21.6ZM0 36H5.33333V28.8H0V36ZM0 7.2H5.33333V0H0V7.2ZM10.6667 21.6H48V14.4H10.6667V21.6ZM10.6667 36H48V28.8H10.6667V36ZM10.6667 0V7.2H48V0H10.6667Z"
          fill={hovered || isActive ? '#22D3EE' : fill}
          style={pathStyle}
        />
      </svg>

      <div style={barStyle}></div>
    </div>
  )
}
