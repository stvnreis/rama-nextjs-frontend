'use client';

import Image from 'next/image';

import AboutUs from '../components/about-us/about-us';
import { OurClientsContainer } from '../components/ourClients/our-clients-container';
import { WhereToFindUs } from '../components/where-to-find-us/where-to-find-us';
import { OurSpace } from '@/components/our-space';
import { PlansContainer } from '@/components/plans/plan-container';
import { Reveal } from '@/components/reveal';
import { Slider } from '@/components/slider/slider';

export default function Home() {
  return (
    <>
      <Slider />
      <section className="px-10 md:px-12">
        <Reveal width="100%">
          <AboutUs />
        </Reveal>
        <Reveal width="100%">
          <OurSpace />
        </Reveal>
        <Reveal width="100%">
          <PlansContainer />
        </Reveal>
        <Reveal width="100%">
          <OurClientsContainer />
        </Reveal>
        <WhereToFindUs />
      </section>
    </>
  );
}
