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
import { defaultTheme } from '../../../../styles/themes/default'
import { lightenColor } from '../../../../utils/colors'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
)

interface BarChartProps {
  labels: string[]
  values: number[]
  title: string
}

export const BarChart = ({ labels, values, title }: BarChartProps) => {
  const backgroundColors = [
    defaultTheme.colors.success400,
    '#ffea2e',
    defaultTheme.colors.error700,
    defaultTheme.colors.neutral,
  ]

  const data = {
    labels,
    datasets: [
      {
        label: title,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((color) => lightenColor(color, 0.5)),
        borderWidth: 1,
        data: values,
        borderRadius: 8,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: defaultTheme.colors.neutral900,
          boxHeight: 0,
          boxWidth: 0,
        },
      },
    },
  }

  return <Bar data={data} options={options} />
}
