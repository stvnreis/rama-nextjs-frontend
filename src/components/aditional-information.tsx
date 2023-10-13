import { Card, CardBody } from '@nextui-org/react'

export default function AditionalInformation() {
  return (
    <Card
      className="mt-10 w-full lg:w-[800px] border-[0.5px] border-primary"
      radius="lg"
    >
      <CardBody className="dark:text-zinc-400 text-zinc-600">
        <p className="text-center italic font-semibold">
          Planos Essencial e Executivo plus possuem valores adicionais{' '}
          <span className="text-primary">a conferir</span>
        </p>
      </CardBody>
    </Card>
  )
}
