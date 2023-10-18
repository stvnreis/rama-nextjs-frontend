import { Card, CardBody } from '@nextui-org/react';

import {
  Accessibility,
  Printer,
  Wifi,
  Coffee,
  Clock,
  Armchair,
  Bike,
  CarFront,
} from 'lucide-react';

export default function OurServices() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4 mx-5 md:mx-10 2xl:mx-0 w-fit">
      <div className="flex gap-3 w-fit">
        <Card className="service-card">
          <CardBody className="service-card-body">
            <Accessibility size={30} />
            <span className="service-card-body-text">Acessibilidade</span>
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="service-card-body">
            <Wifi size={30} />
            <span className="service-card-body-text">
              Wifi de alta velocidade
            </span>
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="service-card-body">
            <Armchair size={30} />
            <span className="service-card-body-text">Recepção</span>
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="service-card-body">
            <Printer size={30} />
            <span className="service-card-body-text">
              Impressoras, Scanner e Copiadoras
            </span>
          </CardBody>
        </Card>
      </div>
      <div className="flex gap-3 w-full">
        <Card className="service-card">
          <CardBody className="service-card-body">
            <CarFront size={30} />
            <span className="service-card-body-text">
              Estacionamento Rotativo
            </span>
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="service-card-body">
            <Clock size={30} />
            <span className="service-card-body-text">Horários flexiveis</span>
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="service-card-body">
            <Coffee size={30} />
            <span className="service-card-body-text">Café e Água</span>
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="service-card-body">
            <Bike size={30} />
            <span className="service-card-body-text">Bicicletário</span>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
