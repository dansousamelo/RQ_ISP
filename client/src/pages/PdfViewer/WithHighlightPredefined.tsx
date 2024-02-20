import { useState, useEffect, useRef } from 'react'

import {
  PdfLoader,
  PdfHighlighter,
  Tip,
  Highlight,
  Popup,
  AreaHighlight,
} from 'react-pdf-highlighter'

import { testHighlights as _testHighlights } from './test-highlights'
import { Spinner } from './Spinner'
import { Sidebar } from './Sidebar'

import './style.css'
import {
  CommentProps,
  ContentProps,
  HighlightProps,
  PositionProps,
} from './interfaces'

const testHighlights = _testHighlights
const PRIMARY_PDF_URL = 'https://arxiv.org/pdf/1708.08021.pdf'
const SECONDARY_PDF_URL = 'https://arxiv.org/pdf/1604.02480.pdf'
const searchParams = new URLSearchParams(document.location.search)
const initialUrl = searchParams.get('url') || PRIMARY_PDF_URL

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
  const [url, setUrl] = useState(initialUrl)
  const [highlights, setHighlights] = useState(
    testHighlights[initialUrl] ? [...testHighlights[initialUrl]] : [],
  )
  const scrollViewerToRef = useRef<any>(null)

  const resetHighlights = () => {
    setHighlights([])
  }

  const toggleDocument = () => {
    const newUrl = url === PRIMARY_PDF_URL ? SECONDARY_PDF_URL : PRIMARY_PDF_URL
    setUrl(newUrl)
    setHighlights(testHighlights[newUrl] ? [...testHighlights[newUrl]] : [])
  }

  const getHighlightById = (id: string) => {
    return highlights.find((highlight) => highlight.id === id)
  }

  const addHighlight = (highlight: HighlightProps) => {
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
        toggleDocument={toggleDocument}
      />
      <div style={{ height: '100vh', width: '75vw', position: 'relative' }}>
        <PdfLoader url={url} beforeLoad={<Spinner />}>
          {(pdfDocument) => (
            <PdfHighlighter
              pdfDocument={pdfDocument}
              enableAreaSelection={(event) => event.altKey}
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
                  onOpen={transformSelection}
                  onConfirm={(comment) => {
                    addHighlight({ content, position, comment })
                    hideTipAndSelection()
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
