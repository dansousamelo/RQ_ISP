import { DialogControlled } from '../../components/DialogControlled'
import { Footer } from '../../components/Footer'
import { useLoggedInspectionContext } from '../../contexts/LoggedInspection'
import { isNotUndefined } from '../../interfaces/typeGuards'
import { Header } from './components/Header'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import * as S from './styles'

interface InspectionItem {
  id: number
  title: string
  inspection_started: string
  status: 'uninitiated' | 'initiated' | 'concluded'
}

export function InpectionList() {
  const STATUS_ACTION_OPTIONS = {
    uninitiated: [
      { label: 'Inspecionar', action: () => console.log('Inspecionar') },
      { label: 'Excluir', action: () => console.log('Excluir') },
    ],
    initiated: [
      { label: 'Continuar', action: () => console.log('Continuar') },
      { label: 'Refazer', action: () => console.log('Refazer') },
      { label: 'Excluir', action: () => console.log('Excluir') },
    ],
    concluded: [
      { label: 'Visualizar', action: () => console.log('Continuar') },
      { label: 'Refazer', action: () => console.log('Refazer') },
      { label: 'Estatísticas', action: () => console.log('Estatísticas') },
      { label: 'Excluir', action: () => console.log('Excluir') },
    ],
  }

  const STATUS_OPTIONS = {
    uninitiated: 'Não iniciado',
    initiated: 'Em andamento',
    concluded: 'Concluído',
  }

  const MOCK_DATA: InspectionItem[] = [
    {
      id: 1,
      title: 'ConecteSUS',
      inspection_started: '01/10/2023',
      status: 'uninitiated',
    },
    {
      id: 2,
      title: 'Sabin',
      inspection_started: '01/10/2023',
      status: 'initiated',
    },
    {
      id: 3,
      title: 'Avaliação do encamento do Distrito Federal',
      inspection_started: '01/10/2023',
      status: 'concluded',
    },
    {
      id: 4,
      title: 'Avaliação do encamento do Distrito Federal',
      inspection_started: '01/10/2023',
      status: 'concluded',
    },
    {
      id: 5,
      title: 'Avaliação do encamento do Distrito Federal',
      inspection_started: '01/10/2023',
      status: 'concluded',
    },
    {
      id: 6,
      title: 'Avaliação do encamento do Distrito Federal',
      inspection_started: '01/10/2023',
      status: 'concluded',
    },
    {
      id: 7,
      title: 'Avaliação do encamento do Distrito Federal',
      inspection_started: '01/10/2023',
      status: 'concluded',
    },
  ]

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useLoggedInspectionContext()

  const { dialogItemToRender } = useDialogItemToRender({
    handleUpdateDialogControlled,
  })

  return (
    <>
      <S.Container>
        <Header />
        <S.Title>Inspeções</S.Title>
        <S.Subtitle>Realize suas inspeções de forma eficiente.</S.Subtitle>
        <S.TableContainer>
          <S.TableHeader>Título</S.TableHeader>
          <S.TableHeader>Data de criação</S.TableHeader>
          <S.TableHeader>Status</S.TableHeader>
          <S.TableHeader />

          {MOCK_DATA.map((item) => {
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
                      onClick={action.action}
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
        </S.TableContainer>

        <Footer />
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
