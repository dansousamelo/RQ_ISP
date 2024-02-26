export type InspectionItemType = 'privacyRequirement' | 'userStory'
interface InspectionItem {
  id: string
  title: string
  type: InspectionItemType
  inspection_started: string
  status: 'uninitiated' | 'initiated' | 'concluded'
}

export const MOCK_DATA: InspectionItem[] = [
  {
    id: '1',
    title: 'ConecteSUS',
    inspection_started: '01/10/2023',
    status: 'uninitiated',
    type: 'userStory',
  },
  {
    id: '2',
    title: 'Sabin',
    inspection_started: '01/10/2023',
    status: 'initiated',
    type: 'privacyRequirement',
  },
  {
    id: '3',
    title: 'Exame',
    inspection_started: '01/10/2023',
    status: 'concluded',
    type: 'userStory',
  },
  {
    id: '4',
    title: 'Anatel',
    inspection_started: '01/10/2023',
    status: 'concluded',
    type: 'privacyRequirement',
  },
  {
    id: '5',
    title: 'Avaliação do encamento do Distrito Federal',
    inspection_started: '01/10/2023',
    status: 'concluded',
    type: 'userStory',
  },
  {
    id: '6',
    title: 'Avaliação do encamento do Distrito Federal',
    inspection_started: '01/10/2023',
    status: 'concluded',
    type: 'userStory',
  },
  {
    id: '7',
    title: 'Avaliação do encamento do Distrito Federal',
    inspection_started: '01/10/2023',
    status: 'concluded',
    type: 'userStory',
  },
]
