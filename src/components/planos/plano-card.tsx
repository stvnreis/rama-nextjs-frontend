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

import { money } from '../../utils/format';
import { PlansProps } from '../texts/plans';

import { CheckCircle2 } from 'lucide-react';

export interface PlanoCardProps {
  isMiddleCard: boolean;
  plano: PlansProps;
}

export function PlanoCard({ plano, isMiddleCard }: PlanoCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      className={`flex flex-col gap-1 min-w-full h-[20rem] md:min-w-min md:w-1/2 md:h-[20rem] ${
        isMiddleCard
          ? 'border-primary border-solid border-2 w-72 md:h-[21rem]'
          : ''
      }`}
      isHoverable={false}
      shadow="md"
    >
      <CardHeader className="flex flex-col items-start">
        <label className="text-sm font-semibold">{plano.name}</label>
        <div className="text-2xl font-bold">
          {money(plano.value)}
          <span className="text-primary">/mês</span>
        </div>
        <span className="text-sm italic dark:text-zinc-400 text-zinc-600 text-left">
          {plano.description}
        </span>
      </CardHeader>
      <CardBody className="flex flex-col gap-3">
        <span
          className={`text-sm font-semibold ${
            plano.title === '' ? 'hidden' : ''
          }`}
        >
          {plano.title}
        </span>
        <ul>
          {plano.list.map((item, index) => {
            return (
              <li
                key={`${item} - ${index}`}
                className="flex flex-col text-xs lg:text-sm mt-2"
              >
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
                  Plano {plano.name}
                </ModalHeader>
                <ModalBody>
                  {plano.text.map((text, index) => (
                    <p key={`${text} - ${index}`}>{text}</p>
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
