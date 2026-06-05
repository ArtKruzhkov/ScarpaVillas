import React from 'react';
import './borgo.css';

export function Borgo() {
  return (
    <section
      id="borgo"
      className="scroll-mt-[86px] relative w-full section-height overflow-hidden bg-[#1f2f63] py-6 px-6 sm:px-10 sm:py-10">
      {/* FULL IMAGE SECTION */}
      <div className="relative  w-full h-full">
        {/* IMAGE */}
        <img
          src={`${process.env.PUBLIC_URL}/images/borgo/borgo-hero.png`}
          alt="The Borgo"
          className=" h-full w-full object-cover"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/11 to-black/14" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex flex-col items-center px-6 pt-10 text-center">
          {/* SUBTITLE */}
          <p className="font-serif font-semibold text-[24px] leading-[1.1] tracking-[0.02em] text-[#2C3654] uppercase sm:text-[42px] lg:text-[52px] xl:text-[63px]">
            The Borgo
          </p>

          {/* TITLE */}
          <h2 className="mt-1 font-serif font-semibold text-[24px] leading-[1.1] tracking-[0.02em] text-[#2C3654] uppercase sm:text-[42px] lg:text-[52px] xl:text-[63px]">
            A Hilltop Village, All Yours
          </h2>

          {/* DESCRIPTION */}
          <p className="hidden sm:block mt-4 max-w-[1140px] text-[15px] leading-[1.6] sm:text-[17px] lg:text-[19px] xl:text-[21px] xl:leading-[1.8] text-[#2C3654]">
            The Borgo can be reserved in its entirety — four villas, a panoramic pool, and the
            surrounding estate, all exclusively yours. A setting designed for meaningful gatherings,
            from private celebrations and intimate weddings to corporate retreats, where privacy,
            space, and the rhythm of Barolo come together.
          </p>

          <p className="mt-4 text-[15px] leading-[1.6] text-[#2C3654] sm:hidden">
            The Borgo can be reserved in its entirety — four villas, a panoramic pool, and the
            surrounding estate, all exclusively yours.
          </p>

          {/* BUTTON */}
          <a href={process.env.PUBLIC_URL || '/'} className="borgo-btn">
            Discover The Entire Borgo
          </a>
        </div>
      </div>
    </section>
  );
}
