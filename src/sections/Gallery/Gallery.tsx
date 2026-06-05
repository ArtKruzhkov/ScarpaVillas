import { VillaGallery } from './VillaGallery';
import './gallery.css';

// type Villa = {
//   name: string;
//   href: string;
//   position: {
//     top: string;
//     left: string;
//     height: string;
//   };
// };

// const villas: Villa[] = [
//   {
//     name: 'TETTIMORA',
//     href: '#',
//     position: {
//       top: '41%',
//       left: '23%',
//       height: '150px',
//     },
//   },
//   {
//     name: 'I BRICCHI',
//     href: '#',
//     position: {
//       top: '27%',
//       left: '38.5%',
//       height: '140px',
//     },
//   },
//   {
//     name: 'LA BOGLIONA',
//     href: '#',
//     position: {
//       top: '34.5%',
//       left: '51.5%',
//       height: '150px',
//     },
//   },
//   {
//     name: 'TETTINEIVE',
//     href: '#',
//     position: {
//       top: '48.5%',
//       left: '67%',
//       height: '140px',
//     },
//   },
// ];

type Villa = {
  name: string;
  href: string;
  className: string;
  lineHeight: string;
};

const villas: Villa[] = [
  {
    name: 'TETTIMORA',
    href: '#',
    className: 'villa-tettimora',
    lineHeight: 'h-[150px]',
  },
  {
    name: 'I BRICCHI',
    href: '#',
    className: 'villa-bricchi',
    lineHeight: 'h-[140px]',
  },
  {
    name: 'LA BOGLIONA',
    href: '#',
    className: 'villa-bogliona',
    lineHeight: 'h-[150px]',
  },
  {
    name: 'TETTINEIVE',
    href: '#',
    className: 'villa-tettineive',
    lineHeight: 'h-[140px]',
  },
];

export function Gallery() {
  return (
    <section id="villas" className="scroll-mt-[86px] relative overflow-hidden bg-[#f5f3ee]">
      <div className="mx-auto w-full max-w-8xl px-0">
        <div className="relative section-height-gallery">
          {/* IMAGE */}
          <img
            src={`${process.env.PUBLIC_URL}/images/gallery/gallery-hero.png`}
            alt="Scarpa Villas"
            className="h-full w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />

          {/* TITLE */}
          <div className="absolute left-1/2 top-4 sm:top-12 z-20 -translate-x-1/2 text-center w-full px-8 md:w-max md:px-0">
            <p className="font-serif font-medium text-[22px] sm:text-[34px] md:text-[42px] xl:text-[50px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
              Four Villas
            </p>

            <h2 className="mt-1 sm:mt-2 font-serif font-medium text-[18px] sm:text-[34px] md:text-[42px] xl:text-[50px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
              Four Ways To Live Barolo
            </h2>
          </div>

          {villas.map((villa) => (
            <div
              key={villa.name}
              className={`hidden min-[1025px]:block absolute z-20 ${villa.className}`}>
              <div className="flex flex-col items-center">
                <a href={villa.href} className="villa-label">
                  {villa.name}
                </a>

                <div className={`w-px bg-[#e7e2d7] ${villa.lineHeight}`} />

                <div className="h-3 w-3 rounded-full bg-[#f4f1ea]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <VillaGallery />
    </section>
  );
}
