import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import { Navigation, Pagination, A11y } from 'swiper/modules';

import { money } from '@/utils/format';
import { Instagram, Facebook } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider = () => {
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
        A partir de <span className="font-bold">{money(150)}</span> /mês
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
        SALA COMPARTILHADA
      </h2>
      <span className="text-medium md:text-lg font-normal text-center w-[25rem] md:w-[45rem]">
        Sala para atendimento compartilhado, comporta até 05 pessoas. Ambiente
        climatizado, moderno e arrojado
      </span>
      <span className="text-zinc-100 text-medium md:text-3xl">
        A partir de <span className="font-bold">{money(30)}</span> /hora
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
      modules={[Pagination, Navigation, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true, type: 'bullets', dynamicBullets: true }}
      navigation
      grabCursor
      className="w-full h-[34.5rem]"
    >
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <div key={`${index} - ${index}`}>
            <SwiperSlide>
              <Image
                src={`/galeria/imagem-${index + 1}.jpeg`}
                alt={`imagem-${index + 1}.jpeg`}
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
