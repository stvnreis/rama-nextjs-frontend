'use client';

import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useState, MouseEvent } from 'react';
import { AxiosError } from 'axios';

import { AuthCard } from '@/components/authentication/auth-card';
import { useSnackbar } from 'notistack';
import { Api } from '@/app/lib/api';

export const RegisterCard = () => {
  const personTypes = {
    PESSOA_FISICA: 'PESSOA_FISICA',
    PESSOA_JURIDICA: 'PESSOA_JURIDICA'
  } as const

  const documentTypes = {
    CPF: 'CPF',
    CNPJ: 'CNPJ'
  } as const

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [personType, setPersonType] = useState(personTypes.PESSOA_FISICA as string)
  const [document, setDocument] = useState({
    type: documentTypes.CPF as string,
    description: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  const {enqueueSnackbar} = useSnackbar()

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault()

    try {
      setIsLoading(true)

      const {data} = await Api.post('/persons', {
        data: {
          name, 
          email, 
          password,
          personType,
        }
      })
      
      enqueueSnackbar(data.message, {autoHideDuration: 1500, variant: 'success'})
      
    } catch (err) {
      if(err instanceof AxiosError)
      enqueueSnackbar(err.response!.data.message, {autoHideDuration: 1500, variant: 'error'})
    }finally {
      setIsLoading(false)
    }
  }

  const changePersonType = () => {
    if(personType === personTypes.PESSOA_FISICA) {
      setPersonType(personTypes.PESSOA_JURIDICA)
      setDocument({...document, type: documentTypes.CNPJ})
    }else {
      setPersonType(personTypes.PESSOA_FISICA)
      setDocument({...document, type: documentTypes.CPF})
    }
  }

  return (
    <AuthCard>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Nome"
        isRequired
      >
        Nome
      </Input>
      <div className='flex gap-2'>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="E-mail"
        isRequired
      >
        E-mail
      </Input>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Senha"
        isRequired
      >
        Senha
      </Input>
      </div>
      
      <Select defaultSelectedKeys={[personType]} disallowEmptySelection>
        <SelectItem key={"PESSOA_FISICA"} value={personType} onClick={() => changePersonType()}>Pessoa Física</SelectItem>
        <SelectItem key={"PESSOA_JURIDICA"} value={personType} onClick={() => changePersonType()}>Pessoa Jurídica</SelectItem>
      </Select>
      <Input isRequired label={document.type} value={document.description} onChange={(e) => setDocument({...document, description: e.target.value})} maxLength={document.type === documentTypes.CPF ? 11 : 14}></Input>
      <Button color="primary" onClick={(e) => handleSubmit(e)} isLoading={isLoading}>Concluir</Button>
    </AuthCard>
  );
};
