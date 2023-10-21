'use client';

import AboutUs from '../components/about-us/about-us';
import { GaleryContainer } from '@/components/galery/galery-container';
import { PlansContainer } from '@/components/plans/plans-container';
import { Reveal } from '@/components/reveal';
import { Slider } from '@/components/slider/slider';
import { WhatWeOffer } from '@/components/what-we-offer';

export default function Home() {
  return (
    <section>
      <Slider />
      <Reveal width="100%">
        <AboutUs />
      </Reveal>
      <Reveal width="100%">
        <WhatWeOffer />
      </Reveal>
      <Reveal width="100%">
        <PlansContainer />
      </Reveal>
      <GaleryContainer />
    </section>
  );
}

// <div className="flex flex-col items-center justify-center gap-2 mt-10 text-center">
//   <label className="text-xl md:text-3xl">
//     Infraestrutura moderna e elegante
//   </label>
//   <p className="text-sm max-w-xs text-zinc-500">
//     Recepção, elevador, salas de reunião, salas de atendimento e sala
//     clínica.
//   </p>
// </div>
