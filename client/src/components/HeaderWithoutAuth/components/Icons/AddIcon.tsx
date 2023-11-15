import { useState } from 'react'
import { ChecklistType } from '../../interfaces'

interface AddIconProps {
  id: ChecklistType
  width?: number
  height?: number
  fill?: string
  isActive: boolean
  onClick: (id: ChecklistType) => void
}

export function AddIcon({
  width = 32,
  height = 32,
  fill = '#fff',
  isActive,
  id,
  onClick,
}: AddIconProps) {
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
    width: '112%',
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
        viewBox="0 0 36 36"
        style={svgStyle}
      >
        <path
          d="M36 20.571H20.571V36H15.43V20.571H0V15.43h15.429V0h5.142v15.429H36v5.142z"
          fill={hovered || isActive ? '#22D3EE' : fill}
          style={pathStyle}
        />
      </svg>

      <div style={barStyle}></div>
    </div>
  )
}
