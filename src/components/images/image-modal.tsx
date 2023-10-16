import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

import { ReactNode } from 'react'

export interface ImageModalProps {
  child: ReactNode
}

export default function ImageModal({ child }: ImageModalProps) {
  const { isOpen, onOpenChange } = useDisclosure()
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            {/* <ModalHeader className="flex flex-col gap-1">
              Plano {plan.name}
            </ModalHeader> */}
            <ModalBody>{child}</ModalBody>
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
  )
}
