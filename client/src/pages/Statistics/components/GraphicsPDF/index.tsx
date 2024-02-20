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

interface SubtypesData {
  name: string
  values: number[]
  labels: string[]
}

interface GraphicsPDFProps {
  componentRef: React.MutableRefObject<HTMLDivElement | null>
  labels: string[]
  valuesGeneral: number[]
  subtypesData: SubtypesData[]
  hasSubtypes: boolean
  nameInspection: string
  initialDate: string
  finalDate: string
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
  valuesGeneral,
  subtypesData,
  hasSubtypes,
  nameInspection,
  finalDate,
  initialDate,
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
        data: valuesGeneral,
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

  const textFormatted = hasSubtypes
    ? `Abaixo, você pode visualizar a análise geral e por categorias dos itens
  do artefato ${nameInspection}, classificados como Conforme, Incompleto, Não Conforme e Não se aplica.`
    : `Abaixo, você pode visualizar a análise geral dos itens
    do artefato ${nameInspection}, classificados como Conforme, Incompleto, Não Conforme e Não se aplica.`

  return (
    <S.Content ref={componentRef}>
      <S.WrapperTitle>
        <S.Title>Gráfico de Inspeção</S.Title>
        <S.DateText>
          <b>Início da Inspeção:</b> {initialDate}
        </S.DateText>
        <S.DateText>
          <b>Término da inspeção:</b> {finalDate}
        </S.DateText>
      </S.WrapperTitle>
      <S.Description>{textFormatted}</S.Description>
      <Bar data={data} options={options} />

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
