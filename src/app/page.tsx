'use client';

import { Divider } from '@nextui-org/react';

import AboutUs from '../components/about-us';
import AditionalInformation from '../components/aditional-information';
import Carousel from '../components/carousel/carousel';
import { PlansCards } from '../components/plans-cards';
import OurServices from '../components/services/our-services';
import { plans } from '../components/texts/plans';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-10 flex flex-col gap-2 items-center justify-center text-center before:ease-in w-full">
        <div className="max-w-xs md:max-w-xl flex items-center justify-center">
          <h2 className="text-xl md:text-3xl font-semibold text-center w-full">
            O local perfeito para sua empresa você encontra
            <span className="text-primary"> aqui</span>
          </h2>
        </div>
        <Divider className="w-72 md:max-w-lg md:w-96 flex items-center justify-center bg-black" />
        <Carousel />
        <AboutUs />
        <div className="flex flex-col justify-center items-center gap-14">
          <label className="text-lg text-primary opacity-90 text-semibold">
            Nossas Vantagens
          </label>
          <OurServices />
        </div>
        <label className="text-xl md:text-3xl mt-10">
          Infraestrutura moderna e elegante
        </label>
        <p className="text-sm max-w-xs text-zinc-500">
          Recepção, elevador, salas de reunião, salas de atendimento e sala
          clínica.
        </p>
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
    </div>
  );
}
