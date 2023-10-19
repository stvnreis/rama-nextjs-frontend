import Image from 'next/image';

import { DriveFile } from '../../types/drive-files';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';

type Data = {
  files: DriveFile[];
};

export const Swiper = () => {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await axios.get('/api/drive-images');

      return data;
    },
  });

  return (
    <div className="container">
      <h2>Slider</h2>
      <SwiperReact
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        navigation
        className="w-full h-[500px]"
      >
        {data?.files.map((file, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={`https://drive.google.com/uc?export=view&id=${file.id}`}
                alt={file.name}
                loading="eager"
                // radius="none"
                fill
                // width={200}
                // height={200}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
            </SwiperSlide>
          );
        })}
      </SwiperReact>
    </div>
  );
};
