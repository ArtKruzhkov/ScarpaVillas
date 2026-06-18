import React from 'react';
// import { Navbar } from '../../sections/Navbar/Navbar';
import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { Gallery } from '../../sections/Gallery/Gallery';
// import { Footer } from '../../sections/Footer/Footer';
import { Experience } from '../../sections/Experience/Experience';
import { Borgo } from '../../sections/Borgo/Borgo';
import { Experiences } from '../../sections/Experiences/Experiences';
import { SignatureStays } from '../../sections/SignaturesStays/SignatureStays';
import { DiscoverLanghe } from '../../sections/Discover/Discover';
import { PlanStay } from '../../sections/Plan/PlanStay';

// export function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
//         <Hero />
//         <About />
//         <Experience />
//         <Gallery />
//         <Borgo />
//         <Experiences />
//         <SignatureStays />
//         <DiscoverLanghe />
//         <PlanStay />
//       </main>
//       <Footer />
//     </>
//   );
// }

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
    </>
  );
}
