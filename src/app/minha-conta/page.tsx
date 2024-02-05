'use client'

import { Tab, Tabs } from "@nextui-org/react";
import { MeusDadosTab } from "./tabs/meus-dados-tab";
import {MeusPlanosTab} from './tabs/meus-planos-tab'

export default function MinhaContaPage() {
  return <main className="flex flex-col items-center">
    <Tabs>
      <Tab title="Meus dados">
        <MeusDadosTab />
      </Tab>
      <Tab title="Meus planos">
        <MeusPlanosTab />
      </Tab>
    </Tabs>
  </main>
}