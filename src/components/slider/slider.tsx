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
import { Instagram, Facebook } from 'lucide-react';
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
      <h2 className="secondary-text-color font-black text-lg md:text-3xl">
        AMBIENTE PARA EVENTOS
      </h2>
      <span className="text-medium md:text-lg font-normal text-center w-[25rem] md:w-[45rem]">
        Locação para eventos corporativos, palestras, workshops e
        confraternizações de até 70 pessoas
      </span>
      <span className="text-zinc-100 text-medium md:text-3xl">
        A partir de <span className="font-bold">{money(150)}</span> /hora
      </span>
    </>,
    <>
      <h2 className="secondary-text-color font-black">
        SIGA NOSSAS REDES SOCIAIS
      </h2>
      <p className="text-medium">e fique por dentro de todas as novidades</p>
      <ul className="flex gap-4 opacity-70">
        <li>
          <Link
            href="https://www.instagram.com/ramaa.business/"
            target="_blank"
            className="hover:text-primary"
          >
            <Instagram />
          </Link>
        </li>
        {/* <li>
          <Link href="/" target="_blank" className="hover:text-primary">
            <Linkedin />
          </Link>
        </li> */}
        <li>
          <Link
            href="https://www.facebook.com/ramaa.business?mibextid=ZbWKwL"
            target="_blank"
            className="hover:text-primary"
          >
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
      pagination={{ clickable: true, type: 'bullets', dynamicBullets: true }}
      navigation
      grabCursor
      className="w-full h-[34.5rem]"
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
                <div className="px-5 md:px-0 w-full h-full flex flex-col justify-center items-center text-center text-3xl gap-7">
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
