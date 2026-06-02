import { VillaGallery } from './VillaGallery';

type Villa = {
  name: string;
  href: string;
  position: {
    top: string;
    left: string;
    height: string;
  };
};

const villas: Villa[] = [
  {
    name: 'TETTIMORA',
    href: '#',
    position: {
      top: '44.5%',
      left: '11%',
      height: '270px',
    },
  },
  {
    name: 'I BRICCHI',
    href: '#',
    position: {
      top: '30.5%',
      left: '33.5%',
      height: '270px',
    },
  },
  {
    name: 'LA BOGLIONA',
    href: '#',
    position: {
      top: '39%',
      left: '54.5%',
      height: '270px',
    },
  },
  {
    name: 'TETTINEIVE',
    href: '#',
    position: {
      top: '50.5%',
      left: '77%',
      height: '270px',
    },
  },
];

export function Gallery() {
  return (
    <section id="villas" className="scroll-mt-[86px] relative overflow-hidden bg-[#f5f3ee]">
      <div className="mx-auto w-full max-w-8xl px-0">
        <div className="relative">
          {/* IMAGE */}
          <img
            src="images/gallery/gallery-hero.png"
            alt="Scarpa Villas"
            className="h-auto w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />

          {/* TITLE */}
          <div className="absolute left-1/2 top-24 z-20 -translate-x-1/2 text-center w-max">
            <p className="font-serif font-semibold text-[63px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
              Four Villas
            </p>

            <h2 className="mt-1 font-serif font-semibold text-[63px] leading-[1.1] tracking-[0.08em] text-[#2f3b63] uppercase">
              Four Ways To Live Barolo
            </h2>
          </div>

          {/* VILLA LABELS */}
          {villas.map((villa) => (
            <div
              key={villa.name}
              className="absolute z-20"
              style={{
                top: villa.position.top,
                left: villa.position.left,
              }}>
              <div className="flex flex-col items-center">
                {/* LABEL */}
                <a
                  href={villa.href}
                  className="bg-[#f4f1ea] px-8 py-1 text-[20px] font-bold tracking-[0.25em] text-[#2f3b63] uppercase shadow-md transition-all duration-300 hover:bg-white">
                  {villa.name}
                </a>

                {/* LINE */}
                <div
                  className="w-px bg-[#e7e2d7]"
                  style={{
                    height: villa.position.height,
                  }}
                />

                {/* DOT */}
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
