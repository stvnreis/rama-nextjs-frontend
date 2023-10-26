import { Link, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Social = () => {
  return (
    <>
      <ul className="flex gap-3 opacity-70">
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
    </>
  );
};
