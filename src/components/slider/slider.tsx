import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

import Image from 'next/image';

import { Navigation, Pagination } from 'swiper/modules';

import { DriveFile } from '@/types/drive-files';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Data = {
  files: DriveFile[];
};

export const Slider = () => {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await axios.get('/api/drive-images');

      return data;
    },
  });

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      pagination={{ clickable: true, type: 'bullets' }}
      loop
      navigation
      className="w-full h-[43rem] mySwiper"
    >
      {data?.files.map((file, index) => {
        return (
          <div key={index} className="image relative">
            <SwiperSlide>
              <Image
                src={`https://drive.google.com/uc?export=view&id=${file.id}`}
                alt={file.name}
                loading="eager"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
            <div className="title-content absolute top-[25%] left-[3rem]">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
          </div>
        );
      })}
    </Swiper>
  );
};
