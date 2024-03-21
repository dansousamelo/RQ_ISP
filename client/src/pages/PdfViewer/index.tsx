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
import { TitleUpdater } from '../../components/TitleUpdater'
import { deleteTrail, postTrail } from './services'
import { getAccessToken } from '../../utils/cookies'
import {
  InspectionPDFMarkDialog,
  useDialogItemToRender,
} from './hooks/useDialogItemToRender'
import {
  DialogControlled,
  useDialogControlled,
} from '../../components/DialogControlled'
import { isNotUndefined } from '../../interfaces/typeGuards'
import { getHighlightsRepository } from './repositories/getHighlightsRepository'
import { AxiosError } from 'axios'

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
  const { pdf, amountOfItens, idMark, userId, inspectionId, documentId } =
    useParams()

  const [isCreatingHighlight, setIsCreatingHighlight] = useState(false)

  const [dialogInspectionStep, setDialogInspectionStep] =
    useState<InspectionPDFMarkDialog>('')

  const selectedValueDecoded = decodeURIComponent(pdf as string)
  const token = getAccessToken() as string

  const { highlights, setHighlights, isHighlightListLoading } =
    getHighlightsRepository({
      documentId: documentId as string,
      token,
    })

  const [hightlightToCreate, setHightlightToCreate] = useState(
    {} as Omit<HighlightProps, 'id'>,
  )

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const scrollViewerToRef = useRef<any>(null)

  const resetHighlights = () => {
    setHighlights([])
  }

  const deleteHighlight = useCallback(
    (id: string) => {
      deleteTrail({ token, trailId: id })

      setHighlights((prevHighlights) =>
        prevHighlights.filter((highlight) => highlight.id !== id),
      )
    },
    [setHighlights, token],
  )

  const getHighlightById = (id: string) => {
    return highlights.find((highlight) => highlight.id === id)
  }

  const createHighlight = useCallback(async () => {
    try {
      setIsCreatingHighlight(true)
      const response = await postTrail({
        userId: userId as string,
        inspectionId: inspectionId as string,
        token,
        trailData: { ...hightlightToCreate },
        documentId: documentId as string,
      })
      setHighlights([
        { ...hightlightToCreate, id: response.data.data.trail },
        ...highlights,
      ])
    } catch (error: unknown) {
      if (error instanceof AxiosError) ErrorToast(error.response?.data.message)
    } finally {
      setIsCreatingHighlight(false)
    }
  }, [
    userId,
    inspectionId,
    token,
    hightlightToCreate,
    documentId,
    setHighlights,
    highlights,
  ])

  const { dialogItemToRender } = useDialogItemToRender({
    dialogInspectionStep,
    handleUpdateDialogControlled,
    createHighlight,
    hightlightToCreate,
  })

  const addHighlight = async (highlight: Omit<HighlightProps, 'id'>) => {
    setHightlightToCreate(highlight)
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('confirm_highlight')
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
    return Number(comment.text) <= Number(amountOfItens)
  }

  useEffect(() => {
    window.addEventListener('hashchange', scrollToHighlightFromHash, false)
    return () => {
      window.removeEventListener('hashchange', scrollToHighlightFromHash, false)
    }
  }, [highlights])

  return (
    <>
      <TitleUpdater title="Marcação" />
      <div className="App" style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          highlights={highlights}
          resetHighlights={resetHighlights}
          deleteHighlight={deleteHighlight}
          isLoadingTrail={isHighlightListLoading}
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
                        const highlightFormatted: Omit<HighlightProps, 'id'> = {
                          content,
                          comment,
                          position,
                        }
                        addHighlight(highlightFormatted)
                        hideTipAndSelection()
                      } else {
                        ErrorToast(
                          `Não é possível atribuir o número digitado a esta marcação. O limite máximo é ${amountOfItens}.`,
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
                highlights={highlights as any}
              />
            )}
          </PdfLoader>
        </div>
      </div>
      {isDialogControlledOpen && isNotUndefined(dialogItemToRender) && (
        <DialogControlled
          isDialogControlledOpen={isDialogControlledOpen}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          dialogItemToRender={dialogItemToRender}
          isLoadingRequisition={isCreatingHighlight || isHighlightListLoading}
          onClose={() => {
            setHightlightToCreate({} as any)
            setDialogInspectionStep('')
          }}
        />
      )}
    </>
  )
}

export default PdfViewer
