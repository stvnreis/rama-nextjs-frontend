'use client';

import { Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

import { EyeFilledIcon } from '../../components/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../../components/EyeSlashedFilledIcon';
import { LoginCard } from '@/components/LoginCard/LoginCard';

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex justify-center p-20">
      <LoginCard>
        <Input
          type="email"
          label="E-mail"
          isRequired
          radius="sm"
          className="w-1/2"
        />
        <Input
          label="Senha"
          isRequired
          radius="sm"
          className="w-1/2"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
        />
        <div className="text-zinc-50">
          Ainda não é registrado? <Link href="/cadastrar">Cadastre-se</Link>
        </div>
      </LoginCard>
    </div>
  );
}
