import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react'
import { CheckCircle2 } from 'lucide-react'
import { PlansProps } from './texts/plans'

export interface CardProps {
  message: string
  isMiddleCard: boolean
  plan: PlansProps
}

export function PlansCards({ plan, message, isMiddleCard }: CardProps) {
  return (
    <Card
      className={`flex flex-col min-w-full md:min-w-min md:w-10/12 min-h-[400px] h-auto border-yellow ${
        isMiddleCard
          ? 'border-yellow-400 border-solid border-2 h-auto w-72'
          : ''
      }`}
      isHoverable
      shadow="lg"
    >
      <CardHeader className="flex flex-col gap-1 items-start">
        <label className="text-sm font-semibold">{plan.name}</label>
        <div className="text-2xl font-bold">
          R${plan.value}
          <span className="text-primary">/mês</span>
        </div>
        <span className="text-sm italic dark:text-zinc-400 text-zinc-600">
          {plan.description}
        </span>
      </CardHeader>
      <CardBody className="flex gap-5">
        <span className="text-sm font-semibold">{plan.title}</span>
        <div>
          <ul>
            {plan.list.map((item, index) => {
              return (
                <li key={index} className="flex flex-col text-sm mt-1">
                  <div className="flex justify-start items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center">
                      <CheckCircle2 size={30} />
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
