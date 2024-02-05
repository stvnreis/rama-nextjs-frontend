'use client';

import { getCookie, setCookie } from 'cookies-next';
import {redirect, useRouter} from 'next/navigation'
import { Button, Input } from '@nextui-org/react';
import { useState, MouseEvent } from 'react';

import { useSnackbar } from 'notistack';

import { Api } from '@/app/lib/api';

import { AuthCard } from '../auth-card';
import axios, { AxiosError } from 'axios';

export interface LoginCardProps {
  redirectUrl: string
}

export const LoginCard = ({redirectUrl}: LoginCardProps) => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false)

  const {enqueueSnackbar} = useSnackbar()

  const handleLogin = async (e: MouseEvent) => {
    setIsLoading(true)

    e.preventDefault();

    try {
      const {data} = await Api.post('/auth', {
        data: {
          email, password
        },
      })

      enqueueSnackbar(data.message, {variant: 'success', autoHideDuration: 2000})

      setCookie('auth', data.auth)

      router.push(redirectUrl)
    } catch (err) {
      if(err instanceof AxiosError) enqueueSnackbar(err.response!.data.message, {variant: 'error', autoHideDuration: 2000})
    } finally {
        setIsLoading(false)
    }
  };

  return (
    <AuthCard>
      <Input
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired
      >
        E-mail
      </Input>
      <Input
        label="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isRequired
      >
        Senha
      </Input>
      <Button color="primary" onClick={(e) => handleLogin(e)} isLoading={isLoading}>
        Entrar
      </Button>
    </AuthCard>
  );
};
