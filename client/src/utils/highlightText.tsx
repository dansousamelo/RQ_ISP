import styled from 'styled-components'
import { lightenColor } from './colors'

const HighlightedText = styled.span<{ highlightColor: string }>`
  color: ${(props) => props.highlightColor};
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => lightenColor(props.highlightColor, 0.3)};
  }
`

interface HighlightTextProps {
  fullText: string
  textToHighlight: string
  color: string
  onTextToHighlightClick: () => void
}

export function highlightText({
  color,
  fullText,
  onTextToHighlightClick,
  textToHighlight,
}: HighlightTextProps): JSX.Element {
  const parts = fullText.split(new RegExp(`(${textToHighlight})`, 'gi'))

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === textToHighlight.toLowerCase() ? (
          <HighlightedText
            highlightColor={color}
            onClick={onTextToHighlightClick}
            key={index}
          >
            {part}
          </HighlightedText>
        ) : (
          part
        ),
      )}
    </>
  )
}
