'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

import { getCookie, deleteCookie } from 'cookies-next';

export const User = () => {
  const router = useRouter();

  const handleLoginButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(getCookie('auth'))
    if(getCookie('auth')) {
      router.push('/minha-conta')
    } else {
      router.push('/auth');
    }
  };

  return (
    <Button onClick={(e) => handleLoginButton(e)}>
      {'Minha Conta'}
    </Button>
  );
};
