import { ReactNode } from 'react';

export type LoginCardProps = {
  children: ReactNode;
};

export const LoginCard = ({ children }: LoginCardProps) => {
  return (
    <div className="w-1/2 p-10 bg-zinc-900 rounded-xl shadow-lg">
      {children}
    </div>
  );
};
