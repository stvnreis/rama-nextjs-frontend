'use client'

import { Button } from "@nextui-org/react";
import { Smartphone } from "lucide-react";

export function ContactUs() {
  return (
    <div>
      <Button color="primary" variant="solid" radius="full" className="text-black">
        <Smartphone />
        <span>Entrar em Contato</span>
      </Button>
    </div>
  )
}