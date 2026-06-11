import React from 'react';
import './hero.css';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex section-height items-end justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero/hero-section.png`}
          alt="Scarpa Villas"
          className="h-full w-full object-cover object-[20%_center] sm:object-[center_center]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-overlay" />

        {/* BOTTOM GRADIENT */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" /> */}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6 pb-20 sm:pb-14">
        <div className="flex max-w-[900px] flex-col items-center text-center">
          {/* ICON */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero/logo_hero.svg`}
            alt="Scarpa Villas"
            className="hero-logo"
          />

          {/* HERO TEXT */}
          <div className="mt-4 sm:mt-6 xl:mt-10 max-w-[900px]">
            <h2 className="hero-title">
              Stay among the
              <span className="italic"> vineyards of Monvigliero</span>,
              <span className="mt-2 lg:mt-4 block">in your own private villa</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    // <section
    //   id="top"
    //   className="relative flex hero-section items-end justify-center overflow-hidden">
    //   {/* BACKGROUND */}
    //   <div className="absolute inset-0 hidden lg:block">
    //     <img
    //       src={`${process.env.PUBLIC_URL}/images/hero/hero-section1.png`}
    //       alt="Scarpa Villas"
    //       className="h-full w-full object-cover"
    //     />

    //     <div className="absolute inset-0 hero-overlay" />
    //   </div>

    //   {/* MOBILE/TABLET IMAGE */}
    //   <div className="relative w-full lg:hidden">
    //     <img
    //       src={`${process.env.PUBLIC_URL}/images/hero/hero-section1.png`}
    //       alt="Scarpa Villas"
    //       className="w-full h-auto"
    //     />

    //     <div className="absolute inset-0 hero-overlay" />
    //   </div>

    //   {/* CONTENT */}
    //   <div className="absolute inset-0 z-10 flex w-full items-end justify-center px-6 pb-20 sm:pb-14">
    //     <div className="flex max-w-[900px] flex-col items-center text-center">
    //       <img
    //         src={`${process.env.PUBLIC_URL}/images/hero/logo_hero.svg`}
    //         alt="Scarpa Villas"
    //         className="hero-logo"
    //       />

    //       <div className="mt-4 sm:mt-6 xl:mt-10 max-w-[900px]">
    //         <h2 className="hero-title">
    //           Stay among the
    //           <span className="italic"> vineyards of Monvigliero</span>,
    //           <span className="mt-2 lg:mt-4 block">in your own private villa</span>
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
