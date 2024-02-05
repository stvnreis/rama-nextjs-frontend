import { ReactNode } from 'react';

export const AuthCard = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-2 h-[20rem]">{children}</div>;
};
