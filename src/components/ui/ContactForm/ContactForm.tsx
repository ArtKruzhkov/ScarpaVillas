import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const interests = [
  'villaRental',
  'borgoExperience',
  'eventsCelebrations',
  'longTermStays',
  'other',
];

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const { t, i18n } = useTranslation();
  const prevLanguage = useRef(i18n.language);

  const isLanguageChanged = prevLanguage.current !== i18n.language;

  useEffect(() => {
    prevLanguage.current = i18n.language;
  }, [i18n.language]);

  return (
    <form className="w-full h-full lg:h-auto max-w-[1120px] bg-white px-4 py-6 lg:px-12 lg:py-12">
      {/* Header */}
      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 h-px w-[40%] md:w-[45%] bg-[#2C3654]" />

        <img
          src={`${process.env.PUBLIC_URL}/images/contactModal/logo_modal.svg`}
          alt="Scarpa"
          className="h-12"
        />

        <div className="absolute right-0 h-px w-[40%] md:w-[45%] bg-[#2C3654]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-0 top-[-10px] text-[48px] font-semibold leading-none text-[#2C3654] transition-opacity hover:opacity-60"
          aria-label="Close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C3654"
            strokeWidth="1.5"
            strokeLinecap="round">
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={`contact-title-${i18n.language}`}
          className="mx-auto mt-4 max-w-[760px] text-center font-serif text-[17px] leading-[20px] sm:text-[20px] sm:leading-[24px] md:text-[24px] md:leading-[28px] lg:text-[36px] lg:leading-[42px] text-[#2C3654]"
          initial={isLanguageChanged ? { opacity: 0, y: 8 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}>
          {t('contact.title1')}
          <br />
          {t('contact.title2')}
        </motion.h2>
      </AnimatePresence>

      {/* Interests */}
      <div className="mt-6 lg:mt-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={`contact-interest-${i18n.language}`}
            className="mb-4 font-sans text-[12px] md:text-[14px] lg:text-[15px] font-semibold uppercase tracking-[0.13em] lg:tracking-[0.18em] text-[#2C3654]"
            initial={isLanguageChanged ? { opacity: 0, y: 8 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}>
            {t('contact.interests')}
          </motion.p>
        </AnimatePresence>

        <div className="flex flex-wrap gap-x-6 lg:gap-x-10  gap-y-4 font-sans">
          {interests.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-[13px] sm:text-[14px] text-[#2C3654]">
              <input
                type="checkbox"
                className="h-[12px] w-[12px] sm:h-[16px] sm:w-[16px] border border-[#2C3654]"
              />

              {t(`contact.interestsList.${item}`)}
            </label>
          ))}
        </div>

        <div className="mt-3 h-px bg-[#2C3654]" />
      </div>

      {/* Details */}
      <div className="mt-4 lg:mt-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={`contact-interest-${i18n.language}`}
            className="mb-4 font-sans text-[12px] md:text-[14px] lg:text-[15px] font-semibold uppercase tracking-[0.13em] lg:tracking-[0.18em] text-[#2C3654]"
            initial={isLanguageChanged ? { opacity: 0, y: 8 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}>
            {t('contact.details')}
          </motion.p>
        </AnimatePresence>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 font-sans text-[#2C3654]">
          <input
            type="text"
            placeholder={t('contact.name')}
            className="h-[42px] md:h-[48px] lg:h-[54px] text-[14px] md:text-[15px] lg:text-[16px] border border-[#2C3654] bg-transparent px-5 text-center placeholder:text-[#BFBFBF] focus:outline-none"
          />

          <input
            type="email"
            placeholder={t('contact.email')}
            className="h-[42px] md:h-[48px] lg:h-[54px] text-[14px] md:text-[15px] lg:text-[16px] border border-[#2C3654] bg-transparent px-5 text-center placeholder:text-[#BFBFBF] focus:outline-none"
          />

          <input
            type="tel"
            placeholder={t('contact.phone')}
            className="h-[42px] md:h-[48px] lg:h-[54px] text-[14px] md:text-[15px] lg:text-[16px] border border-[#2C3654] bg-transparent px-5 text-center placeholder:text-[#BFBFBF] focus:outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-4 lg:mt-6 font-sans">
        <AnimatePresence mode="wait">
          <motion.p
            key={`contact-interest-${i18n.language}`}
            className="mb-4 font-sans text-[12px] md:text-[14px] lg:text-[15px] font-semibold uppercase tracking-[0.13em] lg:tracking-[0.18em] text-[#2C3654]"
            initial={isLanguageChanged ? { opacity: 0, y: 8 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}>
            {t('contact.message')}
          </motion.p>
        </AnimatePresence>

        <textarea
          rows={2}
          placeholder={t('contact.messagePlaceholder')}
          className="text-[#2C3654] text-[14px] md:text-[15px] lg:text-[16px] w-full resize-none border border-[#2C3654] bg-transparent p-3 lg:p-5 placeholder:text-center placeholder:text-[#BFBFBF] focus:outline-none"
        />
      </div>

      {/* Submit */}
      <div className="mt-12 lg:mt-6 flex justify-center">
        <button
          type="submit"
          className="min-w-full lg:min-w-[440px] bg-[#2C3654] px-10 py-3 lg:py-4 font-sans text-[14px] lg:text-[16px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#404B73]">
          <AnimatePresence mode="wait">
            <motion.span
              key={`contact-submit-${i18n.language}`}
              className="block"
              initial={isLanguageChanged ? { opacity: 0, y: 8 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('contact.submit')}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </form>
  );
}
