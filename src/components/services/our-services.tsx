import { Card, CardBody } from '@nextui-org/react'
import { Accessibility, Printer, Wifi } from 'lucide-react'

export default function OurServices() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex gap-5">
        <Card className="service-card">
          <CardBody className="items-center text-center">
            <Accessibility size={50} />
            Acessibilidade
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="items-center text-center">
            <Wifi size={50} />
            Wifi de alta velocidade
          </CardBody>
        </Card>
        <Card className="service-card">
          <CardBody className="items-center text-center">
            <Printer size={50} />
            Impressoras, Scanner e Copiadoras
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
