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
      sala rotativa/coworking com ambiente climatizado, comporta até 05 pessoas
    `,
    title: 'Está Incluso:',
    list: [
      'R$25/h das 07:30 as 17:30',
      'R$40/h das 17:30 as 22:30',
      'Descontos acima de 5hrs contratadas - valores a conferir',
    ],
    value: 200,
  },
  {
    name: 'Essencial',
    description: `
      cadeira exclusiva em ambiente compartilhado
    `,
    title: 'Está Incluso:',
    list: [
      'Direito a 4 horas diárias',
      'Cadeira exclusiva em ambiente compartilhado',
      'Segunda a Sexta das 07:30 as 11:30 ou das 11:30 as 15:30',
    ],
    value: 300,
  },
  {
    name: 'Executivo',
    description: `
      cadeira exclusiva em ambiente compartilhado
    `,
    title: 'Está Incluso:',
    list: [
      'Direito a 8 horas diárias',
      'Cadeira exclusiva em ambiente compartilhado',
      'Segunda a sexta das 07:30 as 17:30 e sábado as 09:00 as 12h',
    ],
    value: 500,
  },
]
