import { CircularProgress } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import CarouselIndicator from './carousel-indicator';
import CarouselItem from './carousel-item';

import { DriveFile } from '@/types/drive-files';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Data = {
  files: DriveFile[];
};

export default function Carousel() {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await axios.get('/api/drive-images');

      return data;
    },
  });

  const length = data?.files.length ?? 0;

  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  // function handleNextItemBtn() {
  //   setActiveIndex((prev) => {
  //     return prev + 1 < items.length ? prev + 1 : prev
  //   })
  // }

  // function handlePreviousItemBtn() {
  //   setActiveIndex((prev) => {
  //     return prev - 1 >= 0 ? prev - 1 : prev
  //   })
  // }

  if (isLoading)
    return (
      <div className="carousel-container">
        <CarouselItem index={0} activeIndex={0} onChange={() => null}>
          <CircularProgress
            aria-label="Carregando Imagens"
            size="lg"
            style={{
              position: 'relative',
              justifyContent: 'center',
              justifySelf: 'center',
            }}
          />
        </CarouselItem>
      </div>
    );
  if (isError) return <div>Error</div>;

  return (
    <div className="carousel-container">
      {/* {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePreviousItemBtn}
        >
          <ChevronRight className="rotate-180 text-white" />
        </button>
      )} */}
      {data?.files.map((file, index) => {
        return (
          <CarouselItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            onChange={(index) => setActiveIndex(index)}
          >
            <Image
              className="w-full h-full"
              src={`https://drive.google.com/uc?export=view&id=${file.id}`}
              alt={file.name}
              loading="eager"
              // radius="none"
              fill
              sizes="400vw"
              style={{
                objectFit: 'cover',
                borderRadius: '5px',
              }}
              key={index}
            />
          </CarouselItem>
        );
      })}
      {/* {activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <ChevronRight className="text-white" />
        </button>
      )} */}
      <CarouselIndicator
        activeIndex={activeIndex}
        length={length}
        onChange={(index) => setActiveIndex(index)}
      />
    </div>
  );
}
