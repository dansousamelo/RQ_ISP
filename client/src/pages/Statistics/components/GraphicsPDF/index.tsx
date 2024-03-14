import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import * as S from './styles'
import { defaultTheme } from '../../../../styles/themes/default'
import { lightenColor } from '../../../../utils/colors'
import { InspectionInformation } from '../../services'

interface SubtypesData {
  name: string
  values: number[]
}

interface GraphicsPDFProps {
  componentRef: React.MutableRefObject<HTMLDivElement | null>
  labels: string[]
  subtypesData: SubtypesData[]
  hasSubtypes: boolean
  inspectionInformation: InspectionInformation
}

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
)

export function GraphicsPDF({
  componentRef,
  labels,
  subtypesData,
  hasSubtypes,
  inspectionInformation,
}: GraphicsPDFProps) {
  const backgroundColors = [
    defaultTheme.colors.success400,
    '#ffea2e',
    defaultTheme.colors.error700,
    defaultTheme.colors.neutral400,
  ]

  function generateData(title: string, values: number[]) {
    const data = {
      labels,
      datasets: [
        {
          label: title,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors.map((color) =>
            lightenColor(color, 0.5),
          ),
          borderWidth: 1,
          data: values,
        },
      ],
    }

    return data
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Geral',
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) => lightenColor(color, 0.5)),
        borderWidth: 1,
        data: subtypesData[0].values,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'black',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'black',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
          boxHeight: 0,
          boxWidth: 0,
        },
      },
    },
  }

  const textFormatted = `Abaixo, você pode visualizar a análise gráfica Geral dos itens
    do artefato ${inspectionInformation.name}, classificados como Conforme, Incompleto, Não Conforme e Não se aplica.`

  const textForCategories = `A seguir encontram-se os gráficos de acordo com as categorias da inspeção.`

  const textTitle = hasSubtypes ? `Gráficos da Inspeção` : `Gráfico da Inspeção`

  return (
    <S.Content ref={componentRef}>
      <S.WrapperTitle>
        <S.TitleInspection>
          {textTitle} - {inspectionInformation.name}
        </S.TitleInspection>
        <S.LabelText>
          <b>Início da Inspeção:</b> {inspectionInformation.createdAt}
        </S.LabelText>
        <S.LabelText>
          <b>Término da inspeção:</b> {inspectionInformation.finishedAt}
        </S.LabelText>
        <S.LabelText>
          <b>Responsável:</b> {inspectionInformation.resposible}
        </S.LabelText>
        <S.LabelText>
          <b>Contato:</b> {inspectionInformation.responsibleEmail}
        </S.LabelText>

        {!!inspectionInformation.recordingUrl && (
          <S.LabelText>
            <b>Gravação disponível em:</b> {inspectionInformation.recordingUrl}
          </S.LabelText>
        )}

        {!!inspectionInformation.participants && (
          <S.LabelText>
            <b>Participantes:</b> {inspectionInformation.participants}
          </S.LabelText>
        )}
      </S.WrapperTitle>
      <S.Description>{textFormatted}</S.Description>
      <Bar data={data} options={options} />

      {hasSubtypes && (
        <S.DescriptionWithCategory>
          {textForCategories}
        </S.DescriptionWithCategory>
      )}

      <div
        style={{
          display: 'flex',
          flex: 1,
          gap: '2rem',
          flexDirection: 'column',
        }}
      >
        {hasSubtypes &&
          subtypesData.map((subtype) => {
            return (
              <S.WrapperSubTypes key={subtype.name}>
                <S.SubType>Categoria: {subtype.name}</S.SubType>

                <Bar
                  data={generateData(subtype.name, subtype.values)}
                  options={options}
                />
              </S.WrapperSubTypes>
            )
          })}
      </div>
    </S.Content>
  )
}
