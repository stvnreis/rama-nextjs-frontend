import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { CheckCircle2 } from 'lucide-react'
import { PlansProps } from './texts/plans'

export interface CardProps {
  message: string
  isMiddleCard: boolean
  plan: PlansProps
}

export function PlansCards({ plan, message, isMiddleCard }: CardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <Card
      className={`flex flex-col min-w-full h-[500px] xl:min-w-min xl:w-1/2 xl:h-[500px] ${
        isMiddleCard
          ? 'border-yellow-400 border-solid border-2 h-auto w-72 xl:h-[550px]'
          : ''
      }`}
      isHoverable
      shadow="lg"
    >
      <CardHeader className="flex flex-col items-start">
        <label className="text-sm font-semibold">{plan.name}</label>
        <div className="text-2xl font-bold">
          R${plan.value}
          <span className="text-primary">/mês</span>
        </div>
        <span className="text-sm italic dark:text-zinc-400 text-zinc-600">
          {plan.description}
        </span>
      </CardHeader>
      <CardBody className="flex flex-col gap-3">
        <span
          className={`text-sm font-semibold ${
            plan.title === '' ? 'hidden' : ''
          }`}
        >
          {plan.title}
        </span>
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
        <Button color="primary" variant="ghost" radius="full" onPress={onOpen}>
          Saiba Mais
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Plano {plan.name}
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Fechar
                  </Button>
                  {/* <Button color="primary" onPress={onClose}>
                    Action
                  </Button> */}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardFooter>
    </Card>
  )
}
