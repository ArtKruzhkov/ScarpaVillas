import { motion } from 'framer-motion';
import './planstay.css';

export function PlanStay() {
  return (
    <section id="plan" className="relative section-height w-full overflow-hidden">
      {/* IMAGE */}
      {/* <img
        src={`${process.env.PUBLIC_URL}/images/plan/plan-stay.png`}
        alt="Scarpa Villas at night"
        className="absolute inset-0 h-full w-full object-cover object-[center_5%]"
      /> */}

      <motion.img
        src={`${process.env.PUBLIC_URL}/images/plan/plan-stay.png`}
        alt="Scarpa Villas at night"
        className="absolute inset-0 h-full w-full object-cover object-[center_5%]"
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.4,
          ease: 'easeOut',
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

      {/* CONTENT */}
      {/* <div className="relative z-10 flex h-full flex-col items-center justify-center lg:justify-end px-4 sm:px-6 pb-10 md:pb-14 xl:pb-[9.5rem] text-center text-white">
        <h2 className="font-serif uppercase tracking-[0.08em] text-[28px] leading-[36px] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[56px] xl:text-[52px] xl:leading-[68px]">
          Your Place In Barolo Awaits
        </h2>

        <p className="mt-4 lg:mt-6 tracking-[-0.03em] max-w-[920px] font-serif text-[18px] leading-[28px] sm:text-[24px] sm:leading-[34px] lg:text-[32px] lg:leading-[44px] xl:text-[34px] xl:leading-[50px]">
          Plan your stay <span className="italic">at Scarpa Villas </span>
          <br className="hidden lg:block" />
          and experience the Langhe in your own way.
        </p>

        <a href={process.env.PUBLIC_URL || '/'} className="plan-stay-btn">
          Plan Your Stay
        </a>
      </div> */}

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center lg:justify-end px-4 sm:px-6 pb-10 md:pb-14 xl:pb-[9.5rem] text-center text-white"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
          delay: 0.45,
          ease: 'easeOut',
        }}>
        <h2 className="font-serif uppercase tracking-[0.08em] text-[28px] leading-[36px] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[56px] xl:text-[52px] xl:leading-[68px]">
          Your Place In Barolo Awaits
        </h2>

        <p className="mt-4 lg:mt-6 tracking-[-0.03em] max-w-[920px] font-serif text-[18px] leading-[28px] sm:text-[24px] sm:leading-[34px] lg:text-[32px] lg:leading-[44px] xl:text-[34px] xl:leading-[50px]">
          Plan your stay <span className="italic">at Scarpa Villas </span>
          <br className="hidden lg:block" />
          and experience the Langhe in your own way.
        </p>

        <a href={process.env.PUBLIC_URL || '/'} className="plan-stay-btn">
          Plan Your Stay
        </a>
      </motion.div>
    </section>
  );
}
