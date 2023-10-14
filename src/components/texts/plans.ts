export interface PlansProps {
  name: string
  description: string
  title: string
  list: string[]
  value: number
}

export const plans: PlansProps[] = [
  {
    name: 'Básico',
    description: `
      Escritório Virtual/Endereço Fiscal
    `,
    title: '',
    list: [],
    value: 80,
  },
  {
    name: 'Essencial',
    description: `
      cadeira exclusiva em ambiente compartilhado
    `,
    title: 'Incluso:',
    list: [
      '4 horas diárias',
      'Segunda a Sexta das 07:30 as 11:30 ou 11:30 as 15:30',
    ],
    value: 300,
  },
  {
    name: 'Executivo',
    description: `
      cadeira exclusiva em ambiente compartilhado
    `,
    title: 'Incluso:',
    list: [
      '8 horas diárias',
      'Segunda a sexta das 07:30 as 17:30',
      'Sábado as 09:00 as 12h',
    ],
    value: 500,
  },
]
