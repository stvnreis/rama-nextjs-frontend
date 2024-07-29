export interface PlansProps {
  name: string;
  description: string;
  title: string;
  list: string[];
  value: number;
  text: string[];
}

export const plans: PlansProps[] = [
  {
    name: 'Básico',
    description: `
      Escritório Virtual/Endereço Fiscal e Comercial
    `,
    title: '',
    list: [
      'Sala Rotativa/Coworking por R$30/hora',
      'Sala para reunião por R$50/hora',
      'Wi-fi disponivel sem custo adicional',
    ],
    value: 150,
    text: [
      'Oferecemos endereço de credibilidade para ESCRITORIO VIRTUAL/ENDEREÇO FISCAL E COMERCIAL para quem não pretende utilizar fisicamente nossa estrutura, mas precisa de um endereço fiscal a fim de registrar sua razão social, dados do cartão de visita, redes sociais e endereço para correspondência',
      'Muito utilizado por representantes comerciais ou por matrizes de empresas que precisam de um endereço em suas filiais.',
      'Serviços adicionais como recados, recebimento de correspondencias e encomendas – valores a conferir; pacotes e valores diferenciados para locação de sala rotativa por hora para os contratantes do plano básico',
      'Oferecemos sala mobiliada e decorada em ambiente climatizado. Wi-fi disponivel sem custo adicional, sala com acesso a  portaria eletrônica, comporta ate 05 pessoas',
      'Recepção com água mineral a vontade, banheiros PNE masculino e feminino',
      'R$ 30/h entre 07h30m e 17h30m',
      'R$ 40/h entre 17h30m e 22h30m',
      'Sala de reunião a partir de R$ 50/h. 3 a 8 pessoas.',
      'DESCONTOS PARA PACOTES ACIMA DE 5HS CONTRATADAS – VALORES A CONFERIR',
    ],
  },
  // {
  //   name: 'Essencial',
  //   description: `
  //     mesa exclusiva em ambiente compartilhado
  //   `,
  //   title: 'Incluso:',
  //   list: [
  //     'Segunda a Sexta das 07:30 as 11:30 ou 11:30 as 15:30 exceto feriados',
  //     'Wi-fi disponivel sem custo adicional',
  //     'Direito à 4 horas de uso diárias',
  //   ],
  //   value: 300,
  //   text: [
  //     'MESA EXCLUSIVA EM AMBIENTE COMPARTILHADO / 4hs diárias',
  //     'Você pode utilizá-la de segunda a sexta-feira, das 07:30 as 11:30 ou das 11:30 as 15:30',
  //     'Exceto feriados. Disponilbilizamos   Wi-fi sem custo adicional e agua mineral',
  //     'ESSENCIAL+',
  //     'MESA EXCLUSIVA EM AMBIENTE COMPARTILHADO  4h/diárias',
  //     'Você pode utilizá-la de segunda a sexta-feira, das 15:30 as 19:30 ou das 19:30 as 22:30 Ao sabados das 9hs às 13hs. Exceto feriados. Wi-fi disponivel sem custo adicional',
  //   ],
  // },
  // {
  //   name: 'Executivo',
  //   description: `
  //     mesa exclusiva em ambiente compartilhado
  //   `,
  //   title: 'Incluso:',
  //   list: [
  //     'Segunda a sexta das 07:30 as 17:30',
  //     'Sábado as 09:00 as 12h',
  //     'Wi-fi disponivel sem custo adicional',
  //     'Direito à 8 horas de uso diárias',
  //   ],
  //   value: 500,
  //   text: [
  //     'Para você que precisa de um ambiente organizado e aconchegante para estudo ou trabalho, temos neste plano uma mesa exclusiva em ambiente compartilhado que Você poderá utilizá-la por 8hs diárias de segunda a sexta-feira, das 07:30 as 17:30, e sábado as 09:00 as 12h. Exceto em dias de feriados.',
  //     'Disponibilizamos Wi-fi sem custo adicional e água mineral',
  //   ],
  // },
];
