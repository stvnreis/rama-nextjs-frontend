import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import { Pagination } from 'swiper/modules';

import { DriveFile } from '@/types/drive-files';
import { money } from '@/utils/format';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Data = {
  files: DriveFile[];
};

export const Slider = () => {
  const { data } = useQuery<Data>({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await axios.get('/api/drive-images');

      return data;
    },
  });

  const slideText: ReactNode[] = [
    <>
      <h2 className="secondary-text-color font-black text-lg md:text-3xl">
        REDUZA SEUS CUSTOS COM O ENDEREÇO VIRTUAL
      </h2>
      <span className="text-medium md:text-lg font-normal text-center w-[25rem] md:w-[45rem]">
        Endereço Comercial e Fiscal + Gestão de Correspondências. Escritórios e
        salas de reunião à disposição sob demanda
      </span>
      <span className="text-zinc-100 text-medium md:text-3xl">
        A partir de <span className="font-bold">{money(80)}</span> /mês
      </span>
    </>,
    <>
      <h2 className="secondary-text-color font-black text-lg md:text-3xl">
        AMBIENTE PARA MEDIAÇÃO E CONCILIAÇÃO
      </h2>
      <span className="text-medium md:text-lg font-normal text-center w-[25rem] md:w-[45rem]">
        Ambiente moderno, capaz de despertar sensação de acolhimento, aconchego
        e bem estar
      </span>
    </>,
    <>
      <h2 className="secondary-text-color font-black text-lg md:text-3xl">
        RECEPÇÃO MOBILIADA
      </h2>
      <span className="text-medium md:text-lg font-normal text-center w-[25rem] md:w-[45rem]">
        Mini recepção localizada no segundo pavimento para uso de assinantes das
        salas corporativas
      </span>
    </>,
    <>
      <h2 className="secondary-text-color font-black text-lg md:text-3xl">
        SALA COMPARTILHADA
      </h2>
      <span className="text-medium md:text-lg font-normal text-center w-[25rem] md:w-[45rem]">
        Sala para atendimento compartilhado, comporta até 05 pessoas. Ambiente
        climatizado, moderno e arrojado
      </span>
      <span className="text-zinc-100 text-medium md:text-3xl">
        A partir de <span className="font-bold">{money(25)}</span> /hora
      </span>
    </>,
    <>
      <h2 className="secondary-text-color font-black">
        SIGA NOSSAS REDES SOCIAIS
      </h2>
      <p className="text-medium">e fique por dentro de todas as novidades</p>
      <ul className="flex gap-4 opacity-70">
        <li>
          <Link href="/" target="_blank">
            <Instagram />
          </Link>
        </li>
        <li>
          <Link href="/" target="_blank">
            <Linkedin />
          </Link>
        </li>
        <li>
          <Link href="/" target="_blank">
            <Facebook />
          </Link>
        </li>
      </ul>
    </>,
  ];

  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true, type: 'bullets' }}
      navigation
      className="w-full h-[33rem] cursor-grab"
    >
      {data?.files.map((file, index) => {
        return (
          <div key={`${index} - ${index}`}>
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
              <div className="absolute bg-black bg-opacity-70 text-zinc-300 w-full h-full">
                <div className="px-5 md:px-0 flex flex-col items-center text-center text-3xl gap-7 mt-[20%] md:mt-[10%]">
                  {slideText[index]}
                </div>
              </div>
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
};

// https://drive.google.com/uc?export=view&id=1mqluxl7HgaFdFQkvi0c5gViZvUHvb1Uh
// https://drive.google.com/uc?export=view&id=1emD08Y28WHJfh9h7d6XjuDG8bXQ5Wr1q
// https://drive.google.com/uc?export=view&id=1wIkX_5BwIQ0DZS6-gnvUlj46XkQtQxxm
// https://drive.google.com/uc?export=view&id=1Owt8TeGtF7OJP1RlRndrF4UAENARS6ou
// https://drive.google.com/uc?export=view&id=1VmNkU4iRbiENDI9_mAW7gFxa2xolxwxQ
