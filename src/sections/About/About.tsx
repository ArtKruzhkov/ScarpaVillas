// import React from 'react';
// import { Container } from '../../components/layout/Container';
// import { SectionHeading } from '../../components/ui/SectionHeading';

// export function About() {
//   return (
//     <section id="story" className="border-t border-ink-900/10 bg-sand-100">
//       <Container className="py-16 sm:py-20">
//         <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
//           <div className="lg:col-span-5">
//             <SectionHeading
//               eyebrow="The Story"
//               title="Where Time Becomes Part of the Experience"
//               description="For over a century, Scarpa has been guided by a simple belief — that great wine is shaped by time."
//             />
//           </div>

//           <div className="lg:col-span-7">
//             <div className="grid gap-8 rounded-3xl border border-ink-900/10 bg-sand-50 p-8 sm:p-10">
//               <p className="text-base leading-relaxed text-ink-700">
//                 Scarpa Villas were created as a natural extension of this
//                 philosophy — a place where the culture of wine can be lived, not
//                 just tasted, by those who choose to stay here.
//               </p>
//               <p className="text-base leading-relaxed text-ink-700">
//                 Founded in 1900, the winery has built its legacy on patience,
//                 respect for the land, and a deep connection to Piedmont’s
//                 terroirs. Here, among the vineyards of Monvigliero, time slows,
//                 deepens, and becomes part of the experience itself.
//               </p>

//               <div className="grid gap-6 sm:grid-cols-3">
//                 <div className="rounded-2xl border border-ink-900/10 bg-sand-100 p-5">
//                   <p className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                     Founded
//                   </p>
//                   <p className="mt-2 font-serif text-2xl font-semibold text-ink-900">
//                     1900
//                   </p>
//                 </div>
//                 <div className="rounded-2xl border border-ink-900/10 bg-sand-100 p-5">
//                   <p className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                     Philosophy
//                   </p>
//                   <p className="mt-2 font-medium text-ink-900">Time &amp; Land</p>
//                 </div>
//                 <div className="rounded-2xl border border-ink-900/10 bg-sand-100 p-5">
//                   <p className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
//                     Terroir
//                   </p>
//                   <p className="mt-2 font-medium text-ink-900">Piedmont</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import React from 'react';
import { Container } from '../../components/layout/Container';

export function About() {
  return (
    <section
      id="story"
      className="scroll-mt-[86px] relative overflow-hidden min-h-[112vh] flex items-end">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="images/about/about-hero.png"
          alt="Scarpa Villas Landscape"
          className="h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-black/0" />
      </div>

      {/* CONTENT */}
      <Container className="relative z-10 pb-16">
        <div className="max-w-[1164px] ml-auto mr-[5rem]">
          {/* TITLE */}
          <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[60px] font-normal uppercase leading-[1] tracking-[0.08em] text-white">
            A Different Rhythm of Living
          </h2>

          {/* TEXT */}
          <div className="mt-6 max-w-[1164px]">
            <p className="font-serif text-white/90 text-[27px] leading-[48px]">
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
