import Image from 'next/image';
import Link from 'next/link';

import { Copyright, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 bg-zinc-900 items-center justify-center p-10 text-white">
      <div className="text-xs md:w-1/3 md:justify-start">
        {/* RAMÁ BUSINESS - Todos os direitos reservados. */}
        <Image
          src="/logo-redondo-rama.png"
          alt="logo redondo rama"
          width={50}
          height={50}
        />
      </div>
      <div className="flex md:w-1/3 items-center justify-center text-xs gap-1">
        Copyright
        <Copyright size={10} />
        2023 | by{' '}
        <Link href="https://www.github.com/stvnreis" target="_blank">
          <span className="italic">Steven Reis</span>
        </Link>
      </div>
      <div className="md:w-1/3 flex md:justify-end">
        <ul className="flex gap-5 font-thin">
          <li>
            <Link
              href="https://www.facebook.com/ramaa.business?mibextid=ZbWKwL"
              target="_blank"
            >
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href="" target="_blank">
              <Linkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
