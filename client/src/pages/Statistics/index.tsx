import { useCallback, useRef, useState } from 'react'
import {
  DialogControlled,
  useDialogControlled,
} from '../../components/DialogControlled'
import { Footer } from '../../components/Footer'
import { isNotUndefined } from '../../interfaces/typeGuards'
import { BarChart } from './components/BarChar'
import { Header } from './components/Header'
import { SelectSubTypes } from './components/SelectSubTypes'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import {
  LABELS,
  MOCK_ITENS_EXPORT,
  MOCK_SUBTYPES_DATA,
  SUBTYPES_OPTIONS,
  VALUES,
} from './mocks'
import * as S from './styles'
import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import { useNavigate, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { GraphicsPDF } from './components/GraphicsPDF'
import { createGlobalStyle } from 'styled-components'
import { ItemsExport, ItensPDF } from './components/ItensPDF'

export type DialogStep = '' | 'export_files'

export function Statistics() {
  const GlobalStyle = createGlobalStyle`
  * {
    overflow-y: hidden;
  }

  
`

  const isLoading = false

  const { name, type, accessCode } = useParams()
  const navigate = useNavigate()
  const graphicsRef = useRef<HTMLDivElement | null>(null)
  const itensRef = useRef<HTMLDivElement | null>(null)

  const handleGraphicPrint = useReactToPrint({
    content: () => graphicsRef.current,
  })

  const handleItensPrint = useReactToPrint({
    content: () => itensRef.current,
  })

  const [title, setTitle] = useState('general')
  const [dialogStep, setDialogStep] = useState<DialogStep>('')

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const hasSubtypes = type !== 'userStory'

  const { dialogItemToRender } = useDialogItemToRender({
    dialogStep,
    handleGraphicPrint,
    handleItensPrint,
    handleUpdateDialogControlled,
  })

  const titleFormatted = SUBTYPES_OPTIONS.find(
    (item) => item.value === title,
  )?.label

  const onValueChange = useCallback((value: string) => {
    setTitle(value)
  }, [])

  const BREADCRUMBS: BreadcrumbItem[] = [
    {
      label: 'Inspeções',
      action: () => navigate(`/inspection/list/${accessCode}`),
    },
    {
      label: name as string,
      activate: true,
    },
  ]

  return (
    <>
      <S.Container>
        <Header
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          setDialogStep={setDialogStep}
          isLoading={isLoading}
        />
        <Breadcrumb items={BREADCRUMBS} />
        <S.Title>{name}</S.Title>
        <S.Subtitle>
          Abaixo, você encontrará as estatísticas da inspeção. Se desejar
          examiná-las com mais detalhes, você pode optar por exportá-las para
          uma visualização mais aprofundada.
        </S.Subtitle>

        {hasSubtypes ? (
          <S.WrapperSelectAndGraphics>
            {isLoading ? (
              <S.SelectSkeleton />
            ) : (
              <SelectSubTypes
                defaultValue={'general'}
                items={SUBTYPES_OPTIONS}
                handleValueChange={onValueChange}
              />
            )}

            <div
              style={{
                display: 'flex',
                flex: 1,
                margin: '16px 0',
              }}
            >
              {isLoading ? (
                <S.BarSkeleton />
              ) : (
                <BarChart
                  labels={LABELS}
                  values={VALUES}
                  title={titleFormatted as string}
                />
              )}
            </div>
          </S.WrapperSelectAndGraphics>
        ) : (
          <S.WrapperChartBar>
            {isLoading ? (
              <S.BarSkeleton />
            ) : (
              <BarChart
                labels={LABELS}
                values={VALUES}
                title={name as string}
              />
            )}
          </S.WrapperChartBar>
        )}

        <Footer />
      </S.Container>

      <GlobalStyle />

      <S.PrintComponent>
        <GraphicsPDF
          componentRef={graphicsRef}
          labels={LABELS}
          subtypesData={MOCK_SUBTYPES_DATA}
          valuesGeneral={VALUES}
          hasSubtypes={hasSubtypes}
          nameInspection={name as string}
          finalDate="20/01/2024"
          initialDate="15/01/2024"
        />
      </S.PrintComponent>

      <S.PrintComponent>
        <ItensPDF
          data={MOCK_ITENS_EXPORT as ItemsExport}
          inspectionName={name as string}
          componentRef={itensRef}
        />
      </S.PrintComponent>

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
