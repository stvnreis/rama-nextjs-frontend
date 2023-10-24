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
    </section>
  );
}