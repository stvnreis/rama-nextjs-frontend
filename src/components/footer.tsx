import Link from 'next/link';

import {
  Copyright,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  Phone,
} from 'lucide-react';

export const Footer = () => {
  return (
    <div className="flex flex-col p-5 mt-20 w-full bg-zinc-900 text-white gap-10">
      <div className="flex justify-between">
        <div>
          <label>Fale conosco</label>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex items-center justify-start gap-2 md:pr-20 text-sm">
            <Mail size={20} />
            contato@ramabusiness.com.br
          </div>
          <div className="flex gap-2 md:pr-20 text-sm">
            <Phone size={20} />
            (18) 99746-8004
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-xs gap-1">
        <Copyright size={10} />
        RAMÁ BUSINESS - Todos os direitos reservados.
      </div>
      {/* <div className="flex justify-center gap-3 items-center">
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
      </div> */}
    </div>
  );
};

// https://www.facebook.com/ramaa.business?mibextid=ZbWKwL
