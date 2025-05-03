import Image from 'next/image';

import { AgendamentoCard } from './agendamento-card/agendamento-card';

export default async function AgendarHorarioPage() {
  return (
    <section className="h-full flex flex-col gap-5 items-center justify-center top-1/2 left-1/2">
      <div className="flex flex-col">
        <h1 className="text-3xl">Sala compartilhada</h1>
        <p>A partir de 30R$ a hora</p>
      </div>
      <AgendamentoCard />
    </section>
  );
}
