import { Card, CardBody, CardFooter, Link } from '@nextui-org/react';
import Image from 'next/image';
import { ReactNode } from 'react';

type OurClientsCardProps = {
  redirectUrl: string;
  imageUrl: string;
  imageAlt: string;
  children: ReactNode;
};

export const OurClientsCard = ({
  redirectUrl,
  imageUrl,
  imageAlt,
  children,
}: OurClientsCardProps) => {
  return (
    <Link href={redirectUrl} target="_blank">
      <Card shadow="md" className="h-[16.5rem] w-[15rem] hover:-translate-y-4">
        <CardBody className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={imageUrl}
            alt={imageAlt}
            style={{ objectFit: 'cover' }}
          />
        </CardBody>
        <CardFooter className="flex items-center justify-center text-center font-semibold">
          {children}
        </CardFooter>
      </Card>
    </Link>
  );
};
