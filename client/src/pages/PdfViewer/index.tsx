import { useState, useEffect, useRef, useCallback } from 'react'

import {
  PdfLoader,
  PdfHighlighter,
  Highlight,
  Popup,
  AreaHighlight,
} from 'react-pdf-highlighter'
import { useParams } from 'react-router-dom'

import { Spinner } from './Spinner'

import './style.css'
import {
  CommentProps,
  ContentProps,
  HighlightProps,
  PositionProps,
} from './interfaces'
import { Sidebar } from './components/Sidebar'
import Tip from './components/Tip'
import { ErrorToast } from '../../components/Toast'

const getNextId = () => String(Math.random()).slice(2)
const parseIdFromHash = () => document.location.hash.slice('#highlight-'.length)
const resetHash = () => {
  document.location.hash = ''
}

interface HighlightPopUp {
  comment: CommentProps
}

const HighlightPopup = ({ comment }: HighlightPopUp) =>
  comment.text ? (
    <div className="Highlight__popup">
      {comment.emoji} {comment.text}
    </div>
  ) : null

const PdfViewer = () => {
  const { pdf, amountOfItens, idMark } = useParams()

  const selectedValueDecoded = decodeURIComponent(pdf as string)

  const [highlights, setHighlights] = useState<HighlightProps[]>([])
  const scrollViewerToRef = useRef<any>(null)

  const resetHighlights = () => {
    setHighlights([])
  }

  const deleteHighlight = useCallback((id: string) => {
    setHighlights((prevHighlights) =>
      prevHighlights.filter((highlight) => highlight.id !== id),
    )
  }, [])

  const getHighlightById = (id: string) => {
    return highlights.find((highlight) => highlight.id === id)
  }

  const addHighlight = (highlight: Omit<HighlightProps, 'id'>) => {
    setHighlights([{ ...highlight, id: getNextId() }, ...highlights])
  }

  const updateHighlight = (
    highlightId: string,
    position: PositionProps,
    content: ContentProps,
  ) => {
    setHighlights(
      highlights.map((h) => {
        const {
          id,
          position: originalPosition,
          content: originalContent,
          ...rest
        } = h
        return id === highlightId
          ? {
              id,
              position: { ...originalPosition, ...position },
              content: { ...originalContent, ...content },
              ...rest,
            }
          : h
      }),
    )
  }

  const scrollToHighlightFromHash = () => {
    const highlight = getHighlightById(parseIdFromHash())
    if (highlight && scrollViewerToRef.current) {
      scrollViewerToRef.current(highlight)
    }
  }
  function verifyIfItemWasFilled(comment: CommentProps) {
    return Number(comment.text) < Number(amountOfItens)
  }

  useEffect(() => {
    window.addEventListener('hashchange', scrollToHighlightFromHash, false)
    return () => {
      window.removeEventListener('hashchange', scrollToHighlightFromHash, false)
    }
  }, [highlights])

  return (
    <div className="App" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar
        highlights={highlights}
        resetHighlights={resetHighlights}
        deleteHighlight={deleteHighlight}
      />
      <div style={{ height: '100vh', width: '75vw', position: 'relative' }}>
        <PdfLoader url={selectedValueDecoded} beforeLoad={<Spinner />}>
          {(pdfDocument) => (
            <PdfHighlighter
              pdfDocument={pdfDocument}
              enableAreaSelection={() => false}
              onScrollChange={resetHash}
              scrollRef={(scrollTo) => {
                scrollViewerToRef.current = scrollTo
                scrollToHighlightFromHash()
              }}
              onSelectionFinished={(
                position,
                content,
                hideTipAndSelection,
                transformSelection,
              ) => (
                <Tip
                  idMark={idMark as string}
                  onOpen={() => {
                    transformSelection()
                  }}
                  onConfirm={(comment) => {
                    if (verifyIfItemWasFilled(comment)) {
                      addHighlight({ content, position, comment })
                      hideTipAndSelection()
                    } else {
                      ErrorToast(
                        'Não é possível atribuir o número digitado a esta marcação. O limite máximo é 20.',
                      )
                    }
                  }}
                />
              )}
              highlightTransform={(
                highlight,
                index,
                setTip,
                hideTip,
                viewportToScaled,
                screenshot,
                isScrolledTo,
              ) => {
                const isTextHighlight = !(
                  highlight.content && highlight.content.image
                )
                const component = isTextHighlight ? (
                  <Highlight
                    isScrolledTo={isScrolledTo}
                    position={highlight.position}
                    comment={highlight.comment}
                  />
                ) : (
                  <AreaHighlight
                    isScrolledTo={isScrolledTo}
                    highlight={highlight}
                    onChange={(boundingRect) => {
                      updateHighlight(
                        highlight.id,
                        { boundingRect: viewportToScaled(boundingRect) },
                        { image: screenshot(boundingRect) },
                      )
                    }}
                  />
                )
                return (
                  <Popup
                    popupContent={<HighlightPopup {...highlight} />}
                    onMouseOver={(popupContent) =>
                      setTip(highlight, () => popupContent)
                    }
                    onMouseOut={hideTip}
                    key={index}
                  >
                    {component}
                  </Popup>
                )
              }}
              highlights={highlights}
            />
          )}
        </PdfLoader>
      </div>
    </div>
  )
}

export default PdfViewer
