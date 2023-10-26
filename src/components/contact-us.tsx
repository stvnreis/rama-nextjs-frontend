'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';

const message =
  'Olá, gostaria de saber mais sobre os planos de aluguel do Ramá Business.';

export interface ContactUsProps {
  className?: string;
}

export function ContactUs({ className }: ContactUsProps) {
  return (
    <div>
      <Link
        href={`https://wa.me/18997413773?text=${encodeURI(message)}`}
        target="_blank"
      >
        <Button
          color="primary"
          variant="solid"
          radius="md"
          className={`${className ?? 'text-black hidden sm:flex'}`}
        >
          {/* <Smartphone /> */}
          <span className="sm:flex sm:text-sm">Entrar em Contato</span>
        </Button>
      </Link>
    </div>
  );
}
