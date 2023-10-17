import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalHeader,
} from '@nextui-org/react';
import React, { ReactNode } from 'react';

export type ItemProps = {
  children?: ReactNode;
  index: number;
  activeIndex: number;
  onChange: (index: number) => void;
};

export default function CarouselItem({
  children,
  index,
  activeIndex,
  onChange,
}: ItemProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProps = `
    rotateY(calc(   ${offset}    * 55deg))
    scaleY(calc(1 + ${absOffset} * -0.5))
    translateX(calc(${direction} * -3.5rem))
    translateZ(calc(${absOffset} * -35rem))
  `;

  const cssOpacity = `
    ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}
  `;

  const cssDisplay = `
    ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}
  `;

  function handle(index: number, activeIndex: number) {
    index === activeIndex ? onOpen() : onChange(index);
  }

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProps,
        opacity: cssOpacity,
        display: cssDisplay,
      }}
      onClick={() => handle(index, activeIndex)}
    >
      {children}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        size="2xl"
        placement="center"
        className="bg-black bg-opacity-95"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader />
              <ModalBody>
                <div
                  style={{
                    position: 'relative',
                    height: '400px',
                  }}
                >
                  {children}
                </div>
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
    </div>
  );
}
