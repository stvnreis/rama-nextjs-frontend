'use client';
import { Divider } from '@nextui-org/react';

import AboutUs from '../components/about-us';
import AditionalInformation from '../components/aditional-information';
import Carousel from '../components/carousel/carousel';
import { PlansCards } from '../components/plans-cards';
import { Reveal } from '../components/reveal';
import OurServices from '../components/services/our-services';
import { plans } from '../components/texts/plans';
import { Slider } from '@/components/slider/slider';

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center">
      <Slider />
      <div className="py-10 flex flex-col gap-2 items-center justify-center text-center before:ease-in w-full">
        {/* <Reveal>
          <div className="flex flex-col max-w-xs md:max-w-xl items-center justify-center">
            <h2 className="text-xl md:text-3xl font-semibold text-center w-full">
              O local perfeito para sua empresa você encontra
              <span className="text-primary"> aqui</span>
            </h2>
            <Divider className="w-72 md:max-w-lg md:w-96 flex items-center justify-center bg-black" />
          </div>
        </Reveal> */}
        {/* <Carousel /> */}
        <AboutUs />
        {/* <Reveal> */}
        {/* </Reveal> */}
        {/* <Reveal> */}

        {/* </Reveal> */}
        {/* <Reveal> */}
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
        {/* </Reveal> */}
        <AditionalInformation />
        <div className="flex flex-col items-center justify-center gap-2 mt-10 text-center">
          <label className="text-xl md:text-3xl">
            Infraestrutura moderna e elegante
          </label>
          <p className="text-sm max-w-xs text-zinc-500">
            Recepção, elevador, salas de reunião, salas de atendimento e sala
            clínica.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-14">
          <label className="text-lg text-primary opacity-90 text-semibold">
            Nossas Vantagens
          </label>
          <OurServices />
        </div>
      </div>
    </section>
  );
}
