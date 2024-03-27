import { useCallback, useRef, useState } from 'react'
import {
  DialogControlled,
  useDialogControlled,
} from '../../components/DialogControlled'
import { Footer } from '../../components/Footer'
import { isArrayNotEmpty, isNotUndefined } from '../../interfaces/typeGuards'
import { BarChart } from './components/BarChar'
import { Header } from './components/Header'
import { SelectSubTypes } from './components/SelectSubTypes'
import { useDialogItemToRender } from './hooks/useDialogItemToRender'
import { LABELS, PAGE_PRINT_STYLE } from './mocks'
import * as S from './styles'
import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import { useNavigate, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { GraphicsPDF } from './components/GraphicsPDF'
import { createGlobalStyle } from 'styled-components'
import { ItensPDF } from './components/ItensPDF'
import { TitleUpdater } from '../../components/TitleUpdater'
import { getItemsCategoriesRepository } from './repositories/getItemsCategoriesRepository'
import { getAccessToken } from '../../utils/cookies'
import { getGraphicValuesRepository } from './repositories/getGraphicValuesRepository'
import { getExportGraphicsRepository } from './repositories/getExportGraphicsRepository'
import { getExportItemsRepository } from './repositories/getExportItemsRepository'
import { AllExportPDF } from './components/AllExportPDF'

export type DialogStep = '' | 'export_files'
export type OptionToPrint =
  | 'export_graphic'
  | 'export_items'
  | 'export_all'
  | ''

export function Statistics() {
  const GlobalStyle = createGlobalStyle`
  * {
    overflow-y: hidden;
  }
`

  const { name, type, userId, id } = useParams()
  const navigate = useNavigate()
  const graphicsRef = useRef<HTMLDivElement | null>(null)
  const itensRef = useRef<HTMLDivElement | null>(null)
  const allRef = useRef<HTMLDivElement | null>(null)

  const token = getAccessToken()

  const { itemsCategories, isItemsCategoriesLoading } =
    getItemsCategoriesRepository({
      token: token as string,
      inspectionId: id as string,
    })

  const [title, setTitle] = useState('general')
  const [optionToPrint, setOptionToPrint] = useState<OptionToPrint>('')

  const handleGraphicPrint = useReactToPrint({
    content: () => graphicsRef.current,
    pageStyle: PAGE_PRINT_STYLE,
    documentTitle: 'graficos_exportados',
  })

  const { handleUpdateDialogControlled, isDialogControlledOpen } =
    useDialogControlled()

  const {
    graphicLabels,
    categoriesValues,
    inspectionInformation,
    isExportingGraphic,
  } = getExportGraphicsRepository({
    inspectionId: id as string,
    token: token as string,
  })

  const { isExportingItems, items } = getExportItemsRepository({
    inspectionId: id as string,
    token: token as string,
  })

  const { graphicValue, isGraphicValueLoading, category } =
    getGraphicValuesRepository({
      token: token as string,
      inspectionId: id as string,
      category: title,
    })

  const isStatisticsLoading =
    isExportingItems ||
    isExportingGraphic ||
    isItemsCategoriesLoading ||
    isGraphicValueLoading

  const handleItensPrint = useReactToPrint({
    content: () => itensRef.current,
    pageStyle: PAGE_PRINT_STYLE,
    documentTitle: 'itens_exportados',
  })

  const handleAllPrint = useReactToPrint({
    content: () => allRef.current,
    pageStyle: PAGE_PRINT_STYLE,
    documentTitle: 'itens_grafico_exportados',
  })

  const [dialogStep, setDialogStep] = useState<DialogStep>('')

  const hasSubtypes = type !== 'userStory'

  const { dialogItemToRender } = useDialogItemToRender({
    dialogStep,
    handleItensPrint,
    handleUpdateDialogControlled,
    handleGraphicPrint,
    hasSubtypes,
    handleAllPrint,
    optionToPrint,
    setOptionToPrint,
  })

  const onValueChange = useCallback((value: string) => {
    setTitle(value)
  }, [])

  const BREADCRUMBS: BreadcrumbItem[] = [
    {
      label: 'Inspeções',
      action: () => navigate(`/inspection/list/${userId}`),
    },
    {
      label: name as string,
      activate: true,
    },
  ]

  return (
    <>
      <TitleUpdater title="Relatório" />
      <S.Container>
        <Header
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          setDialogStep={setDialogStep}
          isLoading={isStatisticsLoading}
        />
        <Breadcrumb items={BREADCRUMBS} />
        <S.Title>{name}</S.Title>
        <S.Subtitle>
          Abaixo, você encontrará as estatísticas da inspeção em forma de
          gráfico. Se desejar examiná-las com mais detalhes por meio de
          relatórios, você pode optar por exportá-las para uma visualização mais
          aprofundada.
        </S.Subtitle>

        {hasSubtypes ? (
          <S.WrapperSelectAndGraphics>
            {isStatisticsLoading ? (
              <S.SelectSkeleton />
            ) : (
              <SelectSubTypes
                defaultValue={category}
                items={itemsCategories}
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
              {isStatisticsLoading ? (
                <S.BarSkeleton />
              ) : (
                <BarChart
                  labels={LABELS}
                  values={graphicValue}
                  title={name as string}
                />
              )}
            </div>
          </S.WrapperSelectAndGraphics>
        ) : (
          <S.WrapperChartBar>
            {isStatisticsLoading ? (
              <S.BarSkeleton />
            ) : (
              <BarChart
                labels={LABELS}
                values={graphicValue}
                title={name as string}
              />
            )}
          </S.WrapperChartBar>
        )}

        <Footer />
      </S.Container>

      <GlobalStyle />

      {isArrayNotEmpty(graphicLabels) && (
        <S.PrintComponent>
          <GraphicsPDF
            componentRef={graphicsRef}
            labels={graphicLabels}
            subtypesData={categoriesValues}
            hasSubtypes={hasSubtypes}
            inspectionInformation={inspectionInformation}
          />
        </S.PrintComponent>
      )}

      {isArrayNotEmpty(items) && (
        <S.PrintComponent>
          <ItensPDF
            items={items}
            componentRef={itensRef}
            inspectionInformation={inspectionInformation}
          />
        </S.PrintComponent>
      )}

      {isArrayNotEmpty(items) && isArrayNotEmpty(graphicLabels) && (
        <S.PrintComponent>
          <AllExportPDF
            labels={graphicLabels}
            componentRef={allRef}
            subtypesData={categoriesValues}
            items={items}
            hasSubtypes={hasSubtypes}
            inspectionInformation={inspectionInformation}
          />
        </S.PrintComponent>
      )}

      {isDialogControlledOpen && isNotUndefined(dialogItemToRender) && (
        <DialogControlled
          isDialogControlledOpen={isDialogControlledOpen}
          handleUpdateDialogControlled={handleUpdateDialogControlled}
          dialogItemToRender={dialogItemToRender}
          isLoadingRequisition={isExportingGraphic}
          onClose={() => setOptionToPrint('')}
        />
      )}
    </>
  )
}
