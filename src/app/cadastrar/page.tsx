'use client';

import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';

import { EyeFilledIcon } from '../../components/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../../components/EyeSlashedFilledIcon';
import { LoginCard } from '@/components/LoginCard/LoginCard';

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleFormEdit = (event: any, name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = (event: any) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div className="flex justify-center p-20">
      <LoginCard>
        <form
          className="flex flex-col items-center gap-5"
          onSubmit={(e) => handleForm(e)}
        >
          <Input
            type="name"
            label="Nome"
            isRequired
            radius="sm"
            className="w-1/2"
            value={formData.name}
            onChange={(e) => handleFormEdit(e, 'name')}
          />
          <Input
            type="email"
            label="E-mail"
            isRequired
            radius="sm"
            className="w-1/2"
            value={formData.email}
            onChange={(e) => handleFormEdit(e, 'email')}
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
            value={formData.password}
            onChange={(e) => handleFormEdit(e, 'password')}
          />
          <div className="text-zinc-50">
            Já possui cadastro? <Link href="/login">Fazer login</Link>
          </div>
          <Button
            color="primary"
            variant="ghost"
            className="hover:text-zinc-900"
          >
            Cadastrar
          </Button>
        </form>
      </LoginCard>
    </div>
  );
}
