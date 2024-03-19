export const SUBTYPES_OPTIONS = [
  { value: 'general', label: 'Geral' },
  { value: 'suitability', label: 'Adequação' },
  { value: 'necessity', label: 'Necessidade' },
]

export const LABELS = [
  'Conforme',
  'Incompleto',
  'Não conforme',
  'Não se aplica',
]

export const PAGE_PRINT_STYLE = `
@media print {
  body {
    -webkit-print-color-adjust: exact;
  }
  @page {
    size: A4;
    margin: 200mm !important;
  }
}
`

export const VALUES = [12, 19, 3, 5]

export const MOCK_SUBTYPES_DATA = [
  {
    name: 'Adequação',
    values: VALUES,
  },
  {
    name: 'Necessidade',
    values: VALUES,
  },
  {
    name: 'Necessidade 2',
    values: VALUES,
  },
  {
    name: 'Necessidade 3',
    values: VALUES,
  },
]

export const MOCK_ITENS_EXPORT = {
  information: {
    final_date: '20/01/2022',
    start_date: '20/02/2022',
    responsable: 'Daniel Veras',
    email: 'daniel@email.com',
    record_link: 'www.site.com',
    participants: 'Daniel Veras e Paulo Almeida',
  },
  itens: [
    {
      id: '1',
      situation: 'incomplete',
      category: 'Adequação',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo eu tortor luctus venenatis.',
      documents: `MedicinaAtualizada.pdf, MedicinaAtualizada.pdf`,
      observations:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo eu tortor luctus venenatis.',

      trail: [
        {
          text: 'uage facilitates fast prototyping of ideas via dynamic typing. The runtime provides the meansfor fast iteration on those ideas via dynamic compilation. This fuels a fast edit-refresh cycle, whichpromises an immersive coding experience that is quite appealing to creative developers.However, evolving',
          pageNumber: 1,
          id: 'abc1',
        },
        {
          text: 'ugs in code and provide code intelligence to editors without requiring significant rewriting or annotations fromthe developer. We formalize an important fragment of Flow’s analysis and prove its soundness. Furthermore,Flow uses aggre',
          pageNumber: 10,
          id: 'abc2',
        },
      ],
    },
    {
      id: '2',
      situation: 'as_per',
      category: 'Adequação',
      description:
        'Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo eu tortor luctus venenatis.',
      documents: null,
      observations: null,
      trail:
        'uage facilitates fast prototyping of ideas via dynamic typing. The runtime provides the meansfor fast iteration on those ideas via dynamic compilation. This fuels a fast edit-refresh cycle, whichpromises an immersive coding experience that is quite appealing to creative developers.However, evolving',
    },
    {
      id: '3',
      situation: 'non_compilant',
      category: 'Adequação',
      trail: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo eu tortor luctus venenatis.',
      observations:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo eu tortor luctus venenatis.',
    },
    {
      id: '4',
      situation: 'not_applicable',
      category: 'Adequação',
      trail: null,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo eu tortor luctus venenatis.',
    },
  ],
}
