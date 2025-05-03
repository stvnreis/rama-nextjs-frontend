import { NextRequest, NextResponse } from 'next/server';

import { Prisma } from '@/app/generated/prisma';
import prisma from '@/lib/prisma';
import { TAgendamentoForm } from '@/types';
import moment from 'moment-timezone';

export async function POST(req: NextRequest) {
  const agendamentoForm = (await req.json()) as TAgendamentoForm;
  const data = parseFormToModel(agendamentoForm);

  const agendamentoMesmoHorarioExistente =
    await prisma.solicitacaoAgendamento.findFirst({
      where: {
        AND: [
          { dhAgendamentoInicial: { lte: data.dhAgendamentoInicial } },
          { dhAgendamentoFinal: { gte: data.dhAgendamentoInicial } },
          { pago: true },
        ],
      },
    });

  if (agendamentoMesmoHorarioExistente)
    return NextResponse.json(
      { message: 'Sala indisponível para horário solicitado' },
      { status: 400 },
    );

  await prisma.solicitacaoAgendamento.create({
    data,
  });

  return NextResponse.json({ message: 'agendamento solicitado com sucesso' });
}

function parseFormToModel(
  formData: TAgendamentoForm,
): Prisma.SolicitacaoAgendamentoUncheckedCreateInput {
  const dhInicial = moment.tz(
    `${formData.dtAgendamento} ${formData.hrInicio}`,
    'Brazil/Sao_Paulo',
  );

  return {
    telefone: formData.telefone,
    nomeCliente: formData.nomeCliente,
    dhAgendamentoInicial: dhInicial.toISOString(),
    dhAgendamentoFinal: dhInicial.add(formData.duracao, 'hours').toISOString(),
  };
}
