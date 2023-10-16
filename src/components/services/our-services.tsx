import { Card, CardBody } from '@nextui-org/react'
import { Accessibility, Wifi } from 'lucide-react'

export default function OurServices() {
  return (
    <div className="flex gap-5">
      <Card className="service-card">
        <CardBody className="items-center">
          <Accessibility size={50} />
          Acessibilidade
        </CardBody>
      </Card>
      <Card className="service-card">
        <CardBody className="items-center">
          <Wifi size={50} />
          Wifi de alta velocidade
        </CardBody>
      </Card>
    </div>
  )
}
