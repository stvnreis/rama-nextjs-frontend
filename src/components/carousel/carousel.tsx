import { CircularProgress } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import CarouselIndicator from './carousel-indicator';
import CarouselItem from './carousel-item';

import { DriveFile } from '@/types/drive-files';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type CarouselProps = {
  width?: number;
  height?: number;
};

type Data = {
  files: DriveFile[];
};

export default function Carousel({ width, height }: CarouselProps) {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await axios.get('/api/drive-images');

      return data;
    },
  });

  const length = data?.files.length ?? 0;
  const startingIndex = Math.floor(length / 2);

  const [activeIndex, setActiveIndex] = React.useState<number>(startingIndex);

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

  if (isLoading) return <CircularProgress aria-label="Carregando Imagens" />;
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
              className="w-full h-full border-r-medium"
              src={`https://drive.google.com/uc?export=view&id=${file.id}`}
              alt="card-1"
              loading="lazy"
              // radius="none"
              fill
              sizes="100vw"
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
