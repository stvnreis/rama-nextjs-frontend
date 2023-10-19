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
} from '@nextui-org/react';

import { money } from '../utils/format';
import { PlansProps } from './texts/plans';

import { CheckCircle2 } from 'lucide-react';

export interface CardProps {
  isMiddleCard: boolean;
  plan: PlansProps;
}

export function PlansCards({ plan, isMiddleCard }: CardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      className={`flex flex-col gap-1 min-w-full h-[350px] xl:min-w-min xl:w-1/2 xl:h-[400px] ${
        isMiddleCard
          ? 'border-primary border-solid border-2 w-72 xl:h-[430px]'
          : ''
      }`}
      isHoverable
      shadow="lg"
    >
      <CardHeader className="flex flex-col items-start">
        <label className="text-sm font-semibold">{plan.name}</label>
        <div className="text-2xl font-bold">
          {money(plan.value)}
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
                      <CheckCircle2 />
                    </div>
                    <span className="pl-4 dark:text-zinc-400 text-zinc-600">
                      {item}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-center">
        <Button
          color="primary"
          variant="ghost"
          radius="full"
          onPress={onOpen}
          className="hover:text-black"
        >
          Saiba Mais
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          size="xl"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Plano {plan.name}
                </ModalHeader>
                <ModalBody>
                  {plan.text.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
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
  );
}
