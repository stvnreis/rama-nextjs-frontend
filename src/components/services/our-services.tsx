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
    <div className="services-container">
      <div className="services-block">
        <div className="services-items-container">
          <Card className="service-card">
            <CardBody className="service-card-body">
              <Accessibility size={30} />
              <span className="service-card-body-text">Acessibilidade</span>
            </CardBody>
          </Card>
          <Card className="service-card">
            <CardBody className="service-card-body">
              <Wifi size={30} />
              <span className="service-card-body-text">Wifi gratuito</span>
            </CardBody>
          </Card>
        </div>
        <div className="services-items-container">
          <Card className="service-card">
            <CardBody className="service-card-body">
              <Armchair size={30} />
              <span className="service-card-body-text">Recepção Mobiliada</span>
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
      </div>
      <div className="services-block">
        <div className="services-items-container">
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
        </div>
        <div className="services-items-container">
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
    </div>
  );
}
