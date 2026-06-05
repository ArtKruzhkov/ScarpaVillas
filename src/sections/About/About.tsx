import React from 'react';
import { Container } from '../../components/layout/Container';

export function About() {
  return (
    <section
      id="story"
      className="scroll-mt-[86px] relative overflow-hidden section-height flex items-end">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/about/about-hero.png`}
          alt="Scarpa Villas Landscape"
          className="h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-black/0" />
      </div>

      {/* CONTENT */}
      <Container className="relative z-10 pb-14">
        <div className="xl:max-w-[1164px] ml-auto xl:mr-[5rem] px-6 xl:px-0">
          {/* TITLE */}
          <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[60px] font-normal uppercase leading-[1] tracking-[0.08em] text-white">
            A Different Rhythm of Living
          </h2>

          {/* TEXT */}
          <div className="mt-3 lg:mt-6">
            <p className="font-serif text-white/90 text-[16px] sm:text-[18px] leading-[1.5] lg:text-[22px] lg:leading-[32px] xl:text-[27px] xl:leading-[48px]">
              In the hills of Verduno, within the vineyards of Monvigliero, Scarpa Villas offers a
              rare way to experience Barolo. Inspired by the philosophy of Scarpa, it goes beyond a
              place to stay – it is shaped by wine, time, and the land itself. Here, days unfold
              slowly, between the silence of the vines, the warmth of the sun, and the rituals of
              Piedmontese life.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
