import { Tab, Tabs } from '@nextui-org/react';

import { LoginCard } from '@/components/authentication/login/login-card';

import { RegisterCard } from './register-card';

export const AuthContainer = () => {
  return (
    <section className="border-1 border-zinc-900 px-10 pt-5 pb-10 rounded-md w-[25rem] md:w-[40rem] shadow-xl bg-zinc-900">
      <Tabs className="mb-10 flex items-center justify-center">
        <Tab title="Fazer login">
          <LoginCard redirectUrl='/minha-conta'/>
        </Tab>
        <Tab title="Registrar-se">
          <RegisterCard />
        </Tab>
      </Tabs>
    </section>
  );
};
