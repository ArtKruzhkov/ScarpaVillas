// import React from 'react';
// import { Container } from '../../components/layout/Container';
// import { LinkButton } from '../../components/ui/LinkButton';

// export function Hero() {
//   return (
//     <section id="top" className="relative overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(89,102,75,0.20),transparent_55%),radial-gradient(900px_circle_at_85%_40%,rgba(122,46,46,0.18),transparent_52%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(246,241,232,0.6),rgba(246,241,232,1))]" />
//       </div>

//       <Container className="py-16 sm:py-20 lg:py-24">
//         <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
//           <div className="lg:col-span-7">
//             <p className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//               A Different Rhythm of Living
//             </p>
//             <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
//               Stay among the vineyards of Monvigliero,
//               <span className="block text-balance text-ink-800">
//                 in your own private villa
//               </span>
//             </h1>
//             <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
//               In the hills of Verduno, Scarpa Villas offers a rare way to
//               experience Barolo — shaped by wine, time, and the land itself.
//               Days unfold slowly, between the silence of the vines and the
//               rituals of Piedmontese life.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
//               <LinkButton href="#plan" variant="primary" size="md">
//                 Plan Your Stay
//               </LinkButton>
//               <LinkButton href="#villas" variant="secondary" size="md">
//                 Discover the Villas
//               </LinkButton>
//             </div>

//             <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 rounded-2xl border border-ink-900/10 bg-sand-50/70 p-6 backdrop-blur sm:grid-cols-4">
//               <div>
//                 <dt className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                   Location
//                 </dt>
//                 <dd className="mt-1 font-medium text-ink-900">Verduno</dd>
//               </div>
//               <div>
//                 <dt className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                   Setting
//                 </dt>
//                 <dd className="mt-1 font-medium text-ink-900">Monvigliero</dd>
//               </div>
//               <div>
//                 <dt className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                   Stays
//                 </dt>
//                 <dd className="mt-1 font-medium text-ink-900">4 Villas</dd>
//               </div>
//               <div>
//                 <dt className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                   Experiences
//                 </dt>
//                 <dd className="mt-1 font-medium text-ink-900">Curated</dd>
//               </div>
//             </dl>
//           </div>

//           <div className="lg:col-span-5">
//             <div className="relative overflow-hidden rounded-3xl border border-ink-900/10 bg-sand-50 shadow-soft">
//               <div className="aspect-[4/5] w-full bg-[linear-gradient(135deg,rgba(18,18,18,0.06),rgba(18,18,18,0)),radial-gradient(900px_circle_at_30%_25%,rgba(89,102,75,0.22),transparent_55%),radial-gradient(800px_circle_at_70%_65%,rgba(122,46,46,0.18),transparent_60%)]" />
//               <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
//                 <p className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                   Where time becomes part of the experience
//                 </p>
//                 <p className="mt-2 text-sm leading-relaxed text-ink-700">
//                   Inspired by Scarpa’s century-long philosophy: great wine is
//                   shaped by time — and so are the days you spend here.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import React from 'react';

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
          className="h-full w-full object-cover object-[center_29%]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-overlay" />

        {/* BOTTOM GRADIENT */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" /> */}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6 pb-14">
        <div className="flex max-w-[900px] flex-col items-center text-center">
          {/* ICON */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero/logo-hero.png`}
            alt="Scarpa Villas"
            className="w-[72px] sm:w-[358px]"
          />

          {/* HERO TEXT */}
          <div className="mt-10 max-w-[900px]">
            <h2 className="font-serif text-xl font-medium leading-[1.2] text-white sm:text-2xl lg:text-4xl">
              Stay among the
              <span className="italic"> vineyards of Monvigliero</span>,
              <span className="mt-4 block">in your own private villa</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
