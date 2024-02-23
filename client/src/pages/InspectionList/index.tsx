import { useNavigate, useParams } from 'react-router-dom'
import { DialogControlled } from '../../components/DialogControlled'
import { Footer } from '../../components/Footer'
import { useLoggedInspectionContext } from '../../contexts/LoggedInspection'
import { isNotUndefined } from '../../interfaces/typeGuards'
import { Header } from './components/Header'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import * as S from './styles'
import { MOCK_DATA } from './mocks'
import { useCallback, useState } from 'react'
import { SuccessToast } from '../../components/Toast'
import { TableSkeleton } from './components/TableSkeleton'
import { getInspectionListRepository } from './respostory/getInspectionListRepository'
import { getAccessToken } from '../../utils/cookies'

export function InpectionList() {
  const navigate = useNavigate()

  const { accessCode } = useParams()
  const token = getAccessToken() as string

  const { inspectionList, isInspectionListLoading } =
    getInspectionListRepository({
      accessCode: accessCode as string,
      token,
    })

  console.log('inspectionList: ', inspectionList)

  const [inspections, setInspections] = useState(MOCK_DATA)
  const [idInspectionToDelete, setIdInspectionToDelete] = useState('')

  const {
    handleUpdateDialogControlled,
    setDialogInspectionStep,
    isDialogControlledOpen,
  } = useLoggedInspectionContext()

  const deleteInspectionDialog = useCallback(() => {
    setInspections((inspections) =>
      inspections.filter((item) => item.id !== idInspectionToDelete),
    )
    handleUpdateDialogControlled(false)
    SuccessToast('Inspeção excluída com sucesso!')
  }, [handleUpdateDialogControlled, idInspectionToDelete])

  const { dialogItemToRender } = useDialogItemToRender({
    handleUpdateDialogControlled,
    deleteInspectionDialog,
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
        action: (id: string) => navigate(`/inspection/${id}/${accessCode}`),
      },
      {
        label: 'Excluir',
        action: (id: string) => handleDeleteInspection(id),
      },
    ],
    initiated: [
      {
        label: 'Continuar',
        action: (id: string) => navigate(`/inspection/${id}/${accessCode}`),
      },
      { label: 'Excluir', action: (id: string) => handleDeleteInspection(id) },
    ],
    concluded: [
      {
        label: 'Visualizar',
        action: (id: string) => navigate(`/inspection/${id}/${accessCode}`),
      },
      {
        label: 'Estatísticas',
        action: (id: string, name: string, type: string) =>
          navigate(
            `/inspection/${id}/${name}/${type}/${accessCode}/statistics`,
          ),
      },
      {
        label: 'Excluir',
        action: (id: string) => handleDeleteInspection(id),
      },
    ],
  }

  const STATUS_OPTIONS = {
    uninitiated: 'Não iniciado',
    initiated: 'Em andamento',
    concluded: 'Concluído',
  }

  return (
    <>
      <S.Container>
        <Header />
        <S.Title>Inspeções</S.Title>
        <S.Subtitle>Realize suas inspeções de forma eficiente.</S.Subtitle>

        {isInspectionListLoading ? (
          <TableSkeleton />
        ) : (
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
                    <S.TableTitleCell title={item.title} key={item.id}>
                      {item.title}
                    </S.TableTitleCell>

                    <S.TableCell>{item.inspection_started}</S.TableCell>
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
                            action.action(item.id, item.title, item.type)
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
        )}

        <Footer />
      </S.Container>
      {isDialogControlledOpen && isNotUndefined(dialogItemToRender) && (
        <DialogControlled
          isDialogControlledOpen={isDialogControlledOpen}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          dialogItemToRender={dialogItemToRender}
          isLoadingRequisition={false}
          onClose={() => setDialogInspectionStep('')}
        />
      )}
    </>
  )
}
