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
      'Sala Rotativa/Coworking por R$25/hora',
      'Wi-fi disponivel sem custo adicional',
    ],
    value: 80,
    text: [
      'Oferecemos endereço de credibilidade para ESCRITORIO VIRTUAL/ENDEREÇO FISCAL E COMERCIAL para quem não pretende utilizar fisicamente nossa estrutura, mas precisa de um endereço fiscal a fim de registrar sua razão social, dados do cartao de visita, redes sociais e endereço para correspondência',
      'Muito utilizado por representantes comerciais ou por matrizes de empresas que precisam de um endereço em suas filiais.',
      'Serviços adicionais como recados, recebimento de correspondencias e encomendas – valores a conferir; pacotes e valores diferenciados para locação de sala rotativa por hora para os contratantes do plano básico',
      'Oferecemos sala mobiliada e decorada em ambiente climatizado. Wi-fi disponivel sem custo adicional, sala com acesso a  portaria eletrônica, comporta ate 05 pessoas',
      'Recepção com água mineral a vontade, banheiros PNE masculino e feminino',
      'R$ 25/h entre 07h30m e 17h30m',
      'R$ 40/h entre 17h30m e 22h30m',
      'DESCONTOS PARA PACOTES ACIMA DE 5HS CONTRATADAS – VALORES A CONFERIR',
    ],
  },
  {
    name: 'Essencial',
    description: `
      cadeira exclusiva em ambiente compartilhado 4 horas diárias
    `,
    title: 'Incluso:',
    list: [
      'Segunda a Sexta das 07:30 as 11:30 ou 11:30 as 15:30 exceto feriados',
      'Wi-fi disponivel sem custo adicional',
    ],
    value: 300,
    text: [
      'CADEIRA EXCLUSIVA EM AMBIENTE COMPARTILHADO / 4hs diárias',
      'Você pode utiliza-la de segunda a sexta-feira, das 07:30 as 11:30 ou das 11:30 as 15:30',
      'Exceto feriados. Disponilbilizamos   Wi-fi sem custo adicional e agua mineral',
      'ESSENCIAL+',
      'CADEIRA EXCLUSIVA EM AMBIENTE COMPARTILHADO  4h/diárias',
      'Você pode utiliza-la de segunda a sexta-feira, das 15:30 as 19:30 ou das 19:30 as 22:30 Ao sabados das 9hs às 13hs. Exceto feriados. Wi-fi disponivel sem custo adicional',
    ],
  },
  {
    name: 'Executivo',
    description: `
      cadeira exclusiva em ambiente compartilhado 8 horas diárias
    `,
    title: 'Incluso:',
    list: [
      'Segunda a sexta das 07:30 as 17:30',
      'Sábado as 09:00 as 12h',
      'Wi-fi disponivel sem custo adicional',
    ],
    value: 500,
    text: [
      'Para você que precisa de um ambiente organizado e aconchegante para estudo ou trabalho, temos neste plano uma cadeira exclusiva  em ambiente compartilhado que Você poderá utiliza-la por 8hs diárias de segunda a sexta-feira, das 07:30 as 17:30, e sábado as 09:00 as 12h. Exceto em dias de feriados.',
      'Disponibilizamos   Wi-fi sem custo adicional e água mineral',
    ],
  },
];
