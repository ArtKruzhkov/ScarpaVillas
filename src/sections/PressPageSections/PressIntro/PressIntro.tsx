import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function PressIntro() {
  const baseUrl = process.env.PUBLIC_URL;

  const { t } = useTranslation();

  return (
    <section className="bg-white py-6 lg:p-6 overflow-hidden">
      <div className="mx-auto grid max-w-8xl lg:grid-cols-3 gap-6 lg:gap-10">
        {/* LEFT IMAGE */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden order-2 lg:order-1">
          <motion.img
            src={`${baseUrl}/images/PressPage/press_intro/left.png`}
            alt="Wine glass"
            className="h-full w-full object-cover md:max-h-[620px] lg:max-h-full"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>

        {/* CENTER */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center px-6 lg:px-0 order-1 lg:order-2">
          <div className="relative flex flex-col items-center text-center w-full">
            {/* Logo + decorative lines */}
            <div className="mb-5 lg:mb-10 flex w-full items-center justify-center gap-4">
              <div className="h-[2px] flex-1 bg-[#2C3654]" />

              <img
                src={`${baseUrl}/images/PressPage/press_intro/logo.svg`}
                alt="Scarpa Villas"
                className="h-[74px] w-auto shrink-0"
              />

              <div className="h-[2px] flex-1 bg-[#2C3654]" />
            </div>

            {/* Text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={t('pressIntro.textLine2')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[22px] leading-[28px] lg:text-[28px] lg:leading-[36px] 2xl:text-[32px] 2xl:leading-[40px] text-[#2C3654]">
                {t('pressIntro.textLine1')}
                <br />
                <em>{t('pressIntro.textItalic')}</em> {t('pressIntro.textLine2')}
                <br />
                {t('pressIntro.textLine3')}
                <br />
                {t('pressIntro.textLine4')}
                <br />
                {t('pressIntro.textLine5')}
                <br />
                {t('pressIntro.textLine6')}
              </motion.p>
            </AnimatePresence>

            <div className="mt-8 lg:mt-14 h-[2px] w-full bg-[#2C3654]" />
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden hidden lg:block order-3">
          <motion.img
            src={`${baseUrl}/images/PressPage/press_intro/right.png`}
            alt="Scarpa Villas"
            className="h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
