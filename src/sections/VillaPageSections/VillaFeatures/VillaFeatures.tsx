import { motion } from 'framer-motion';

const features = [
  {
    icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/guests.svg`,
    label: (
      <>
        Up to <span className="text-[#C09A60]">12 guests</span>
      </>
    ),
    alt: 'Up to 12 guests',
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/bedrooms.svg`,
    label: '5 bedrooms',
    alt: '5 bedrooms',
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/garden.svg`,
    label: <span className="text-[#C09A60]">Private garden</span>,
    alt: 'Private garden',
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/VillaPage/villa_features/panoramic_views.svg`,
    label: 'Panoramic views',
    alt: 'Panoramic views',
  },
];

export function VillaFeatures() {
  return (
    <section className="bg-white">
      {/* FEATURES */}
      <div className="bg-[#2C3654]">
        <div className="mx-auto max-w-8xl px-4 py-12 lg:px-5 lg:py-16">
          <motion.div
            viewport={{ once: true, amount: 0.35 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.alt} className="flex flex-col items-center text-center">
                <img
                  src={feature.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[48px] w-[48px] object-contain lg:h-[58px] lg:w-[58px]"
                />

                <p className="mt-5 font-sans text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-white lg:text-[15px]">
                  {feature.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* IMAGE + TEXT */}
      <div className="mx-auto max-w-8xl">
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <motion.div
              viewport={{ once: true, amount: 0.25 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-h-[360px] overflow-hidden lg:min-h-[520px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_features/dinner.png`}
                alt="Guests dining in the garden at Villa Tettineive"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.25 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center px-6 py-6 lg:py-12 lg:pl-10 lg:pr-12">
              <div className="max-w-[800px] font-sans text-[#2C3654] text-[15px] leading-[20px] sm:text-[16px] sm:leading-[22px] lg:text-[18px] lg:leading-[25px] 2xl:text-[20px] 2xl:leading-[28px]">
                <p>At Tettineive, space becomes part of the experience.</p>

                <p className="mt-5">
                  Mornings begin in the{' '}
                  <strong className="font-semibold">quiet of the garden</strong>, with light
                  stretching across the hills. Afternoons unfold slowly — between{' '}
                  <strong className="font-semibold">conversation, rest, and time outdoors.</strong>
                </p>

                <p className="mt-5">
                  In the evening, the{' '}
                  <strong className="font-semibold">villa gathers everyone together</strong> again —
                  around the table, in the open air, or simply watching the landscape change with
                  the light.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* LARGE IMAGE */}
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="p-0 lg:p-6">
          <div className="overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/VillaPage/villa_features/interior.png`}
              alt="Dining room interior at Villa Tettineive"
              className="h-full w-full object-cover object-[97%_center] lg:object-center min-h-[360px] lg:max-h-[720px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
