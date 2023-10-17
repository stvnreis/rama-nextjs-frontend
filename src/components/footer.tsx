import Link from 'next/link';

import { InstagramIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <span className="justify-start">Desenvolvido por Steven Reis</span>
      <div className="flex items-center justify-end hover:text-primary">
        <Link href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
};
