interface plansProps {
  name: string
  description: string
  title: string
  list: string[]
  value: number
}

export const plans: plansProps[] = [
  {
    name: 'Básico',
    description: `
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Vestibulum ac venenatis nisi. 
      Nulla nec sapien facilisis, mattis mauris vitae, semper.
    `,
    title: 'Includes:',
    list: [
      'Escritório Virtual',
      'R$25/h das 07:30 as 17:30',
      'R$40/h das 17:30 as 22:30',
    ],
    value: 200,
  },
  {
    name: 'Essencial',
    description: `
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Vestibulum ac venenatis nisi. 
      Nulla nec sapien facilisis, mattis mauris vitae, semper.
    `,
    title: '',
    list: [
      'Direito a 4 horas diárias',
      'Cadeira exclusiva em ambiente compartilhado',
    ],
    value: 400,
  },
  {
    name: 'Executivo',
    description: '',
    title: '',
    list: [
      'Direito a 8 horas diárias',
      'Cadeira exclusiva em ambiente compartilhado',
    ],
    value: 500,
  },
]
