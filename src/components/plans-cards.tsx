import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react'
import { CheckCircle2 } from 'lucide-react'

export interface PlansCardProps {
  middleCard?: boolean
  title: string
  name: string
  description: string
  message: string
  list: string[]
  value: number
}

export function PlansCards({
  middleCard,
  name,
  description,
  list,
  title,
  message,
  value,
}: PlansCardProps) {
  return (
    <Card
      className={`flex flex-col min-w-full lg:min-w-min lg:w-64 h-80 border-yellow ${
        middleCard
          ? 'border-yellow-400 border-solid border-2 h-[350px] w-72'
          : ''
      }`}
      isHoverable
    >
      <CardHeader className="flex flex-col gap-1 items-start">
        <label className="text-sm font-semibold">{name}</label>
        <div className="text-2xl font-bold">
          R${value}
          <span className="text-primary">/mês</span>
        </div>
        <span className="text-sm italic dark:text-zinc-400 text-zinc-600">
          Alugm texto aqui
        </span>
      </CardHeader>
      <CardBody className="flex gap-2">
        <span className="text-sm font-semibold">{title}</span>
        <div>
          <ul>
            {list.map((item, index) => {
              return (
                <li key={index} className="flex flex-col text-sm mt-1">
                  <div className="flex justify-start items-center">
                    <div className="w-3 h-3 flex items-center">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="pl-4 dark:text-zinc-400 text-zinc-600">
                      {item}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-center">
        <a
          href={`https://wa.me/18997468004?text=${encodeURI(message)}`}
          target="_blank"
        >
          <Button color="primary" variant="ghost" radius="full">
            Saiba Mais
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
