import React from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { Gallery } from '../../sections/Gallery/Gallery';
import { Experience } from '../../sections/Experience/Experience';
import { Borgo } from '../../sections/Borgo/Borgo';
import { Experiences } from '../../sections/Experiences/Experiences';
import { SignatureStays } from '../../sections/SignaturesStays/SignatureStays';
import { DiscoverLanghe } from '../../sections/Discover/Discover';
import { PlanStay } from '../../sections/Plan/PlanStay';
import { WhatsAppButton } from '../../components/ui/WhatsAppBtn';
// import { ContactModal } from '../../components/ui/ContactModal/ContactModal';

export function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Borgo />
        <Experiences />
        <SignatureStays />
        <DiscoverLanghe />
        <PlanStay />
      </main>

      <WhatsAppButton phone="34620165833" className="fixed bottom-10 right-1 z-50" />
      {/* <ContactModal className="fixed bottom-8 left-8" /> */}
    </>
  );
}
