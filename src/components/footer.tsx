import Link from 'next/link';

import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="flex flex-col py-10 w-full">
      <div>Entrar em contato</div>
      <div className="flex justify-center gap-3 items-center">
        <div>
          Desenvolvido por <span className="italic">Steven Reis</span>
        </div>
        <div className="flex gap-2">
          <Link href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <LinkedinIcon />
          </Link>
          <Link href="https://github.com/stvnreis" target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
