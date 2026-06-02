import React from 'react';

export function Borgo() {
  return (
    <section
      id="borgo"
      className="scroll-mt-[86px] relative w-full overflow-hidden bg-[#1f2f63] py-10 px-10">
      {/* FULL IMAGE SECTION */}
      <div className="relative  w-full">
        {/* IMAGE */}
        <img
          src="/images/borgo/borgo-hero.png"
          alt="The Borgo"
          className=" h-auto w-full object-cover"
        />

        {/* LIGHT OVERLAY */}
        {/* <div className="absolute inset-0 bg-white/10" /> */}

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex flex-col items-center px-6 pt-20 text-center">
          {/* SUBTITLE */}
          <p className="font-serif font-semibold text-[63px] leading-[1.1] tracking-[0.02em] text-[#2f3b63] uppercase">
            The Borgo
          </p>

          {/* TITLE */}
          <h2 className="mt-1 font-serif font-semibold text-[63px] leading-[1.1] tracking-[0.02em] text-[#2f3b63] uppercase">
            A Hilltop Village, All Yours
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[1140px] text-[21px] leading-[1.8] text-[#44527a]">
            The Borgo can be reserved in its entirety - four villas, a panoramic pool, and the
            surrounding estate, all exclusively yours. A setting designed for meaningful gatherings,
            from private celebrations and intimate weddings to corporate retreats, where privacy,
            space, and the rhythm of Barolo come together.
          </p>

          {/* BUTTON */}
          <a
            href="/"
            className="mt-12 border-[3px] border-[#2C3654] px-[48px] py-[18px] font-sans text-[32px] font-bold uppercase tracking-[0.1em] text-[#2C3654] transition-all duration-300 hover:bg-[#2C3654] hover:text-white">
            Discover The Entire Borgo
          </a>
        </div>
      </div>
    </section>
  );
}
