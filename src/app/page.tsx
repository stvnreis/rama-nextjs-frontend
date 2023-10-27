'use client';

import AboutUs from '../components/about-us/about-us';
import { OurClientsContainer } from '../components/ourClients/ourClientsContainer';
import { WhereToFindUs } from '../components/where-to-find-us/where-to-find-us';
import { OurSpace } from '@/components/ourSpace';
import { PlansContainer } from '@/components/plans/plansContainer';
import { Reveal } from '@/components/reveal';
import { Slider } from '@/components/slider/slider';

export default function Home() {
  return (
    <section>
      <Slider />
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
  );
}
