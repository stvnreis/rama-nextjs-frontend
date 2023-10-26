import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react';

export const OurClientsCard = () => {
  return (
    <div className="flex gap-4">
      <Link href="/">
        <Card shadow="lg" className="h-[16.5rem]">
          <CardBody className="flex justify-center items-center">
            <Image
              width={150}
              height={150}
              src="/logojup.png"
              alt="logo Studio de Tatuagem Fernando Reis"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center text-center">
            JottaUp <br />
            Marketing Digital
          </CardFooter>
        </Card>
      </Link>
      <Link href="/">
        <Card shadow="lg" className="h-[16.5rem]">
          <CardBody className="flex justify-center items-center">
            <Image
              width={150}
              height={150}
              src="/logo-fr-studio.png"
              alt="logo Studio de Tatuagem Fernando Reis"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center">
            Fernando Reis <br />
            Studio Tattoo
          </CardFooter>
        </Card>
      </Link>
    </div>

    // <div className="flex flex-col items-center justify-center gap-2">
    //   <Image
    //     width={200}
    //     height={200}
    //     src="/logo-fr-studio.png"
    //     alt="logo Studio de Tatuagem Fernando Reis"
    //   />
    //   <span>Studio Tattoo Fernando Reis</span>
    // </div>
  );
};
