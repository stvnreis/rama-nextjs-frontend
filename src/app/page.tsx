'use client';

import { Divider } from '@nextui-org/react';
import Image from 'next/image';

import AboutUs from '../components/about-us';
import AditionalInformation from '../components/aditional-information';
import Carousel from '../components/carousel/carousel';
import { PlansCards } from '../components/plans-cards';
import OurServices from '../components/services/our-services';
import { plans } from '../components/texts/plans';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-10 flex flex-col gap-2 items-center justify-center text-center before:ease-in">
        <label className="text-xl md:text-3xl">
          Infraestrutura moderna e elegante
        </label>
        <p className="text-sm max-w-xs">
          Recepção, elevador, salas de reunião, salas de atendimento e sala
          clínica.
        </p>
        <Carousel />
        <AboutUs />
        <div className="max-w-xs md:max-w-xl flex items-center justify-center pt-20">
          <h2 className="text-md md:text-3xl font-semibold text-center md:w-full">
            O local perfeito para sua empresa você encontra
            <span className="text-primary"> aqui</span>
          </h2>
        </div>
        <Divider className="w-52 md:max-w-lg md:w-96 flex items-center justify-center bg-black" />
        <div className="container flex flex-col px-8 xl:flex-row items-center justify-center pt-16 gap-6">
          {plans.map((plan, index) => {
            return (
              <PlansCards
                key={index}
                plan={plan}
                isMiddleCard={index === Math.floor(plans.length / 2)}
              />
            );
          })}
        </div>
        <AditionalInformation />
      </div>
      <div className="py-10w-full flex items-center justify-center">
        <OurServices />
      </div>
    </div>
  );
}
