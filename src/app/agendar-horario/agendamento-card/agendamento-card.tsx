'use client';

import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';

import { Input } from '@/components/input/input';

import { TAgendamentoForm } from '@/types';
import { money } from '@/utils/format';
import { toast } from 'sonner';

const agendamentoVazio = {
  nomeCliente: '',
  telefone: '',
  duracao: 1,
};

export function AgendamentoCard() {
  const [agendamento, setAgendamento] =
    useState<TAgendamentoForm>(agendamentoVazio);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    if (key === 'duracao' && parseInt(e.target.value) <= 0) return;

    setAgendamento({ ...agendamento, [key]: e.target.value });
  };

  const handleSave = async () => {
    const response = await fetch(
      'http://localhost:3000/api/solicitacao-agendamento',
      {
        method: 'POST',
        body: JSON.stringify(agendamento),
      },
    );

    const responseBody = await response.json();
    // toast({
    //   description: responseBody.message,
    //   variant: response.status > 400 ? 'destructive' : 'default',
    // });
    toast(responseBody.message);

    if (response.status === 200) {
      setAgendamento(agendamentoVazio);
    }
  };

  return (
    <Card className="w-[20rem] h-fit" radius="none">
      <CardBody className="gap-2">
        <div>
          <label>Nome completo</label>
          <Input
            value={agendamento.nomeCliente}
            handleChange={handleChange}
            property="nomeCliente"
          />
        </div>

        <div>
          <label>Celular</label>
          <Input
            value={agendamento.telefone}
            handleChange={handleChange}
            property="telefone"
            type="tel"
          />
        </div>

        <div>
          <label>Escolha o dia do agendamento</label>
          <Input
            value={agendamento.dtAgendamento ?? ''}
            handleChange={handleChange}
            property="dtAgendamento"
            type="date"
          />
        </div>

        <div>
          <label>Escolha o dia do agendamento</label>
          <Input
            value={agendamento.hrInicio ?? ''}
            handleChange={handleChange}
            property="hrInicio"
            type="time"
          />
        </div>

        <div>
          <label>Duração (horas)</label>
          <Input
            value={agendamento.duracao?.toString()}
            handleChange={handleChange}
            property="duracao"
            type="number"
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <div>
          Valor do agendamento:{' '}
          <span className="font-bold">{money(agendamento.duracao * 30)}</span>
        </div>
        <Button
          color="primary"
          className="w-full"
          radius="sm"
          onPress={() => handleSave()}
        >
          Solicitar agendamento
        </Button>
      </CardFooter>
    </Card>
  );
}
