import { useCallback, useState } from 'react'
import {
  DialogControlled,
  useDialogControlled,
} from '../../../../components/DialogControlled'
import {
  isArrayNotEmpty,
  isNotUndefined,
} from '../../../../interfaces/typeGuards'
import { HighlightProps } from '../../interfaces'
import * as S from './styles'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import { useNavigate, useParams } from 'react-router-dom'
import { HighlightSkeleton } from './components/HighlightSkeleton'
import { Empty } from '../../../../components/Empty'
import { getAccessToken } from '../../../../utils/cookies'

const updateHash = (highlight: HighlightProps) => {
  document.location.hash = `highlight-${highlight.id}`
}

interface SidebarProps {
  deleteHighlight: (id: string) => void
  highlights: HighlightProps[]
  resetHighlights: () => void
  isLoadingTrail: boolean
}

export type InspectionMarkDialog =
  | 'delete_highlight'
  | 'clean_highlights'
  | 'cancel_mark'
  | ''

interface SidebarLiContent {
  highlight: HighlightProps
  onDeleteHighlight?(highlight: HighlightProps): void
}

export function SidebarLiContent({
  onDeleteHighlight,
  highlight,
}: SidebarLiContent) {
  return (
    <>
      <div>
        <S.WrapperTitleCloe>
          <strong>{highlight.comment.text}</strong>
          {!!onDeleteHighlight && (
            <S.Close onClick={() => onDeleteHighlight(highlight)} />
          )}
        </S.WrapperTitleCloe>

        {highlight.content.text && (
          <blockquote style={{ marginTop: '0.5rem' }}>
            {`${highlight.content.text.slice(0, 90).trim()}…`}
          </blockquote>
        )}
      </div>
      <S.HighlightLocation>
        Página {highlight.position.pageNumber}
      </S.HighlightLocation>
    </>
  )
}

export function Sidebar({
  highlights,
  resetHighlights,
  deleteHighlight,
  isLoadingTrail,
}: SidebarProps) {
  const [dialogInspectionStep, setDialogInspectionStep] =
    useState<InspectionMarkDialog>('')

  const [hightlightToDelete, setHightlightToDelete] = useState(
    {} as HighlightProps,
  )

  const navigate = useNavigate()

  const { id, userId, documentId } = useParams()
  const token = getAccessToken() as string

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const deleteConfirmHighlight = useCallback(() => {
    deleteHighlight(hightlightToDelete.id)
    handleUpdateDialogControlled(false)
  }, [deleteHighlight, hightlightToDelete.id, handleUpdateDialogControlled])

  const onDeleteHighlight = useCallback(
    (highlight: HighlightProps) => {
      handleUpdateDialogControlled(true)
      setDialogInspectionStep('delete_highlight')
      setHightlightToDelete(highlight)
    },
    [handleUpdateDialogControlled],
  )

  const onCleanHighlights = useCallback(() => {
    handleUpdateDialogControlled(true)
    setDialogInspectionStep('clean_highlights')
  }, [handleUpdateDialogControlled])

  function backToInspection() {
    navigate(`/inspection/${id}/${userId}`)
  }

  const { dialogItemToRender } = useDialogItemToRender({
    dialogInspectionStep,
    handleUpdateDialogControlled,
    deleteConfirmHighlight,
    hightlightToDelete,
    resetHighlights,
    backToInspection,
    documentId: documentId as string,
    token,
  })

  function backToInspectionList() {
    navigate(`/inspection/list/${userId}`)
  }

  const hasHighlights = isArrayNotEmpty(highlights)

  return (
    <>
      <S.Container>
        <S.WrapperIconAndTitle>
          <S.BackIcon onClick={backToInspection} />
          <S.Title onClick={backToInspectionList}>RQ_ISP</S.Title>
        </S.WrapperIconAndTitle>
        <S.Divider />

        <S.MarkTitle>Marcações</S.MarkTitle>
        <S.Description>
          Crie marcações selecionando o pdf ao lado. Ao criar as marcações, você
          poderá gerenciá-las e, ao finalizar, salve suas alterações.
        </S.Description>

        {isLoadingTrail ? (
          <HighlightSkeleton />
        ) : (
          <>
            {hasHighlights ? (
              <S.MarkList>
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="sidebar__highlight"
                    onClick={() => {
                      updateHash(highlight)
                    }}
                  >
                    <SidebarLiContent
                      highlight={highlight}
                      onDeleteHighlight={onDeleteHighlight}
                    />
                  </li>
                ))}
              </S.MarkList>
            ) : (
              <Empty hasFullHeight text="Ainda não existem marcações." />
            )}
          </>
        )}

        <S.WrapperButtons>
          {hasHighlights && (
            <S.ResetButton onClick={onCleanHighlights}>
              Limpar marcações do documento
            </S.ResetButton>
          )}

          <S.SaveButton onClick={backToInspection}>Concluir</S.SaveButton>
        </S.WrapperButtons>
      </S.Container>

      {isDialogControlledOpen && isNotUndefined(dialogItemToRender) && (
        <DialogControlled
          isDialogControlledOpen={isDialogControlledOpen}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          dialogItemToRender={dialogItemToRender}
          isLoadingRequisition={false}
        />
      )}
    </>
  )
}
