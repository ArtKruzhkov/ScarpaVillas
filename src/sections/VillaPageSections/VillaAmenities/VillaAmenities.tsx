import { motion } from 'framer-motion';

const villaIncludes = [
  'Two master bedrooms with ensuite bathrooms',
  'Two double bedrooms with king-size beds',
  'One room with twin beds',
  'Additional sleeping options for flexible arrangements',
];

const amenities = [
  'Free WiFi',
  'Air conditioning',
  'Bathrobe, towels and linens',
  'Courtesy set (shampoo, shower gel, hand soap, slippers)',
  'Private washing machine',
  'Professional kitchen',
  'Dining area with BBQ',
];

export function VillaAmenities() {
  return (
    <section className="bg-white">
      {/* TOP */}
      <div className="overflow-hidden">
        <div className="grid lg:grid-cols-2 bg-[#2C3654]">
          {/* LEFT */}
          <motion.div
            viewport={{ once: true, amount: 0.25 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center bg-[#2C3654] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16 xl:px-20">
            <div className="w-full">
              {/* Villa includes */}
              <h3 className="font-sans font-semibold uppercase text-[15px] tracking-[0.15em] lg:text-[20px] lg:leading-[26px] 2xl:text-[22px] 2xl:leading-[28px]">
                The Villa Includes:
              </h3>

              <div className="mt-5 2xl:mt-8 space-y-4">
                {villaIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-4 font-sans">
                    <div className="relative w-40 shrink-0">
                      <div className="h-[2px] bg-white/50 w-[95%]" />

                      <div className="absolute right-0 top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-white/50" />
                    </div>

                    <p className="text-[16px] xl:text-[18px] leading-[1.5] text-white/85">{item}</p>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h3 className="mt-10 2xl:mt-16 font-sans font-semibold uppercase text-[15px] tracking-[0.15em] lg:text-[20px] lg:leading-[26px] 2xl:text-[22px] 2xl:leading-[28px]">
                Amenities:
              </h3>

              <div className="mt-5 2xl:mt-8 space-y-4">
                {amenities.map((item) => (
                  <div key={item} className="flex items-center gap-4 font-sans">
                    <div className="relative w-40 shrink-0">
                      <div className="h-[2px] bg-white/50 w-[95%]" />
                      <div className="absolute right-0 top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-white/50" />
                    </div>

                    <p className="text-[16px] xl:text-[18px] leading-[1.5] text-white/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            viewport={{ once: true, amount: 0.25 }}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettineive-side.png`}
              alt="Villa interior"
              className="h-full w-full object-cover max-h-[812px]"
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <motion.div
        viewport={{ once: true, amount: 0.25 }}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative">
        <img
          src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_amenities/tettineive-bottom.png`}
          alt="Outdoor dining"
          className="w-full object-cover max-h-[850px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-10 2xl:bottom-12 left-1/2 w-full max-w-[950px] -translate-x-1/2 px-6 text-center text-white">
          <h3 className="font-sans text-[18px] font-semibold uppercase leading-[1.5] tracking-[0.16em]">
            Outside, <span className="text-[#C09A60]">a large private garden</span> opens towards
            the vineyards, offering <span className="text-[#C09A60]">space to relax,</span> gather,
            or simply take in the landscape.
          </h3>

          <p className="mt-3 2xl:mt-6 font-sans text-[16px] leading-[1.35] 2xl:leading-[1.5] text-white/90">
            Whether for breakfast in the morning light
            <br />
            or a quiet moment at sunset, the outdoors becomes an essential part of the stay.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
