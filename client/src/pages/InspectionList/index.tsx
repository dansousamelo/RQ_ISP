import { useNavigate, useParams } from 'react-router-dom'
import { DialogControlled } from '../../components/DialogControlled'
import { Footer } from '../../components/Footer'
import { useLoggedInspectionContext } from '../../contexts/LoggedInspection'
import { isArrayNotEmpty, isNotUndefined } from '../../interfaces/typeGuards'
import { Header } from './components/Header'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import * as S from './styles'
import { useCallback, useState } from 'react'
import { ErrorToast, SuccessToast } from '../../components/Toast'
import { TableSkeleton } from './components/TableSkeleton'
import { getInspectionListRepository } from './repository/getInspectionListRepository'
import {
  getAccessToken,
  removeAccessToken,
  removeRefreshToken,
} from '../../utils/cookies'
import { TitleUpdater } from '../../components/TitleUpdater'
import { Empty } from '../../components/Empty'
import { deleteInspection } from './services'
import { useInitialInspectionContext } from '../../contexts/InitialInspectionContext'
import { queryClient } from '../../App'

export function InpectionList() {
  const [isDeleting, setIsDeleting] = useState(false)
  const navigate = useNavigate()

  const { userId } = useParams()
  const token = getAccessToken() as string

  const { inspections, isInspectionListLoading, setInspections } =
    getInspectionListRepository({
      userId: userId as string,
      token,
    })

  const [idInspectionToDelete, setIdInspectionToDelete] = useState('')

  const {
    handleUpdateDialogControlled,
    setDialogInspectionStep,
    isDialogControlledOpen,
    clearLoggedInspectionContext,
  } = useLoggedInspectionContext()

  const { clearInitialInspectionContext } = useInitialInspectionContext()

  const handleLogout = useCallback(() => {
    removeAccessToken()
    removeRefreshToken()
    navigate('/')
    clearInitialInspectionContext()
    clearLoggedInspectionContext()
    queryClient.resetQueries()
  }, [clearInitialInspectionContext, clearLoggedInspectionContext, navigate])

  const deleteInspectionDialog = useCallback(() => {
    setIsDeleting(true)
    try {
      setIdInspectionToDelete(idInspectionToDelete)
      deleteInspection({
        userId: userId as string,
        inspectionId: idInspectionToDelete,
        token,
      })

      setInspections((inspections) =>
        inspections.filter((item) => item.id !== idInspectionToDelete),
      )
      handleUpdateDialogControlled(false)
      SuccessToast('Inspeção excluída com sucesso!')
    } catch (e) {
      ErrorToast(
        'Não foi possível excluir a inspeção, tente novamente mais tarde.',
      )
    } finally {
      setIsDeleting(false)
    }
  }, [
    userId,
    handleUpdateDialogControlled,
    idInspectionToDelete,
    setInspections,
    token,
  ])

  const { dialogItemToRender } = useDialogItemToRender({
    handleUpdateDialogControlled,
    deleteInspectionDialog,
    handleLogout,
  })

  const handleDeleteInspection = useCallback(
    (id: string) => {
      handleUpdateDialogControlled(true)
      setDialogInspectionStep('delete_inspection')
      setIdInspectionToDelete(id)
    },
    [handleUpdateDialogControlled, setDialogInspectionStep],
  )

  const STATUS_ACTION_OPTIONS = {
    uninitiated: [
      {
        label: 'Inspecionar',
        action: (id: string) => navigate(`/inspection/${id}/${userId}`),
      },
      {
        label: 'Excluir',
        action: (id: string) => handleDeleteInspection(id),
      },
    ],
    initiated: [
      {
        label: 'Continuar',
        action: (id: string) => navigate(`/inspection/${id}/${userId}`),
      },
      { label: 'Excluir', action: (id: string) => handleDeleteInspection(id) },
    ],
    concluded: [
      {
        label: 'Revisar',
        action: (id: string) => navigate(`/inspection/${id}/${userId}`),
      },
      {
        label: 'Relatório',
        action: (id: string, name: string, type: string) =>
          navigate(`/inspection/${id}/${name}/${type}/${userId}/statistics`),
      },
      {
        label: 'Excluir',
        action: (id: string) => handleDeleteInspection(id),
      },
    ],
  }

  const STATUS_OPTIONS = {
    uninitiated: 'Não iniciada',
    initiated: 'Em andamento',
    concluded: 'Concluída',
  }

  const hasInspections = isArrayNotEmpty(inspections)

  return (
    <>
      <TitleUpdater title="Inspeções" />
      <S.Container>
        <Header />
        <S.Title>Inspeções</S.Title>
        <S.Subtitle>Realize suas inspeções de forma eficiente.</S.Subtitle>

        {isInspectionListLoading ? (
          <TableSkeleton />
        ) : (
          <>
            {hasInspections ? (
              <>
                <S.TableContainer>
                  <S.TableHeader>Título</S.TableHeader>
                  <S.TableHeader>Data de criação</S.TableHeader>
                  <S.TableHeader>Status</S.TableHeader>
                  <S.TableHeader />
                </S.TableContainer>

                <S.TableContentContainer>
                  {inspections.map((item) => {
                    const status = STATUS_OPTIONS[item.status]
                    return (
                      <>
                        <S.TableTitleCell title={item.name} key={item.id}>
                          {item.name}
                        </S.TableTitleCell>

                        <S.TableCell>{item.createdAt}</S.TableCell>
                        <S.TableCell>
                          <S.WrapperStatusIndicator>
                            <S.StatusIndicator status={item.status} />
                            {status}
                          </S.WrapperStatusIndicator>
                        </S.TableCell>
                        <S.TableCell hasGap={true}>
                          {STATUS_ACTION_OPTIONS[item.status].map((action) => (
                            <S.ButtonStyled
                              onClick={() =>
                                action.action(item.id, item.name, item.type)
                              }
                              label={action.label}
                              key={action.label}
                            >
                              {action.label}
                            </S.ButtonStyled>
                          ))}
                        </S.TableCell>
                      </>
                    )
                  })}
                </S.TableContentContainer>
              </>
            ) : (
              <Empty text={`Ainda não há inspeções criadas.`} />
            )}
          </>
        )}

        <Footer />
      </S.Container>
      {isDialogControlledOpen && isNotUndefined(dialogItemToRender) && (
        <DialogControlled
          isDialogControlledOpen={isDialogControlledOpen}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          dialogItemToRender={dialogItemToRender}
          isLoadingRequisition={isDeleting}
          onClose={() => setDialogInspectionStep('')}
        />
      )}
    </>
  )
}
