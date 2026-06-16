import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-[#2C3654] text-white max-w-8xl 2xl:max-w-[1920px] mx-auto">
      <div className="px-4 sm:px-6 xl:px-8 pt-10 lg:pt-14 pb-2">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1fr_auto_1fr] xl:gap-0 items-start">
          {/* LEFT */}
          <div className="flex flex-col items-center md:block">
            <AnimatePresence mode="wait">
              <motion.h3
                key={`footer-title-${i18n.language}`}
                className="font-serif text-center md:text-left text-[28px] leading-[36px] sm:text-[32px] sm:leading-[44px] xl:text-[38px] xl:leading-[58px] tracking-[0.02em]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('footer.title')}
              </motion.h3>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`footer-description-${i18n.language}`}
                className="mt-3 text-center md:text-left font-sans text-[15px] leading-[24px] sm:text-[17px] sm:leading-[28px] xl:text-[17px] xl:leading-[32px] text-white"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('footer.description')}
              </motion.p>
            </AnimatePresence>

            <form className="mt-6 sm:mt-10 max-w-[520px]">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="h-[50px] placeholder:text-center border border-white bg-transparent px-6 text-white font-sans placeholder:text-white/50"
                />

                <button
                  type="submit"
                  className="h-[50px] border border-white bg-white px-4 lg:px-10 font-sans text-[12px] font-bold uppercase tracking-[0.05em] text-[#2C3654] hover:bg-[#2C3654] hover:text-white transition-all duration-300">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`footer-button-${i18n.language}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t('footer.button')}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>

              <label className="mt-3 md:mt-6 font-sans flex items-center justify-center md:justify-start gap-3 text-[13px] tracking-[0.05em] leading-[20px] text-white">
                <input type="checkbox" />

                <AnimatePresence mode="wait">
                  <motion.span
                    key={`footer-privacy-${i18n.language}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}>
                    {t('footer.privacyAgree')}
                  </motion.span>
                </AnimatePresence>
              </label>
            </form>
          </div>

          {/* CENTER */}
          <div className="order-3 md:col-span-2 xl:order-2 xl:col-span-1 mx-auto flex flex-col items-center text-center">
            <a href={process.env.PUBLIC_URL || '/'} className="block">
              <img
                src={`${process.env.PUBLIC_URL}/images/footer/logo_footer.svg`}
                alt="Scarpa Villas"
                className="w-[120px] sm:w-[150px] xl:w-[192px] h-auto"
              />
            </a>

            <AnimatePresence mode="wait">
              <motion.p
                key={`footer-logo-text-${i18n.language}`}
                className="mt-6 xl:mt-8 font-serif text-[15px] leading-[24px] sm:text-[18px] sm:leading-[30px] xl:text-[17px] xl:leading-[32px] tracking-[0.05em]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('footer.logoText1')} <span className="italic">{t('footer.logoTextItalic')}</span>
                <br />
                {t('footer.logoText2')}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* RIGHT */}
          <div className="order-2 xl:order-3 text-center md:text-right">
            <AnimatePresence mode="wait">
              <motion.h3
                key={`footer-contact-${i18n.language}`}
                className="font-serif text-[28px] leading-[36px] sm:text-[32px] sm:leading-[44px] xl:text-[38px] xl:leading-[58px] tracking-[0.02em]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('footer.contact')}
              </motion.h3>
            </AnimatePresence>

            <div className="mt-3 lg:mt-6 flex flex-col items-center md:items-end font-sans font-sans text-[15px] leading-[24px] sm:text-[17px] sm:leading-[28px] xl:text-[17px] xl:leading-[32px] text-white">
              <p>Cascina Monvigliero 28,</p>
              <p>12060 Verduno (CN) Italy</p>

              <a
                href="tel:+393484765176"
                className="block w-full md:w-[50%] transition-opacity hover:opacity-50 duration-300">
                +39 348 476 5176
              </a>

              <a
                href="mailto:info@scarpa-villas.com"
                className="block w-full md:w-[50%] transition-opacity hover:opacity-50 duration-300">
                info@scarpa-villas.com
              </a>
            </div>

            <div className="mt-4 mb-4 md:mt-8 md:mb-0 flex justify-center md:justify-end gap-10">
              <a
                href="https://www.instagram.com/scarpavillas/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-50">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.6064 21.556C11.6416 24.2387 12.7206 26.7389 14.6528 28.614C16.585 30.4892 19.1378 31.4934 21.8176 31.4583C27.2969 31.3881 31.7608 26.8864 31.7608 21.4225C31.7467 18.7327 30.6748 16.1974 28.7426 14.3012C26.8315 12.4191 24.2999 11.3867 21.6131 11.3867H21.5496C18.8558 11.4218 16.3382 12.4963 14.4624 14.4206C12.5866 16.3379 11.5711 18.8732 11.6064 21.556ZM21.7612 13.3251C26.1686 13.3883 29.751 17.0121 29.751 21.4014C29.7157 25.868 26.0558 29.4778 21.5849 29.4778H21.5214C17.0505 29.4076 13.4681 25.7346 13.5315 21.2821C13.5668 19.126 14.4412 17.1104 15.9927 15.6075C17.5441 14.1046 19.6033 13.304 21.7612 13.3251Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M1 12.307V30.693C1.00705 36.9224 6.09856 41.993 12.3536 42H30.6464C36.9014 42 41.9929 36.9224 42 30.693V12.307C41.9859 6.08462 36.8944 1.01405 30.6464 1H12.3536C6.09856 1 1 6.0776 1 12.307ZM12.3536 2.98047H30.6464C35.8013 2.9875 40.0043 7.17318 40.0114 12.307V30.693C39.9972 35.8268 35.8013 40.0055 30.6464 40.0125H12.3536C7.19866 40.0125 2.9957 35.8268 2.98865 30.693V12.307C2.9957 7.17318 7.19866 2.9875 12.3536 2.98047Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M34.582 9.87625C34.582 8.99838 33.8698 8.28906 32.9883 8.28906C32.1068 8.28906 31.3945 8.99838 31.3945 9.87625C31.3945 10.7541 32.1068 11.4634 32.9883 11.4634C33.8698 11.4634 34.582 10.7541 34.582 9.87625Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/ScarpaVillas"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-50">
                <svg
                  width="16"
                  height="38"
                  viewBox="0 0 19 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.23185 2.11186C7.82243 0.62481 10.084 0.0749771 12.2214 0H19V7.19156H14.6508C13.6753 7.14157 12.8054 7.79762 12.5818 8.74733V13.5584H19C18.8447 15.8764 18.5526 18.1882 18.2171 20.4813H12.5445V41H4.11315C4.06344 34.1271 4.11315 27.3167 4.11315 20.475H0V13.6021H4.11315C4.15042 11.3715 4.06965 9.12847 4.15042 6.8979C4.23741 5.09845 4.97678 3.39896 6.23185 2.11186Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-[35px] flex flex-col gap-2 items-center sm:flex-row sm:justify-between border-t-[1.7px] border-white/50 pt-2">
          <p className="font-sans text-center sm:text-left text-white/50 text-[13px] leading-[20px] lg:text-[16px] lg:leading-[30px]">
            Antica Casa Vinicola Scarpa - P.IVA 00070140058
          </p>

          <div className="flex gap-2 font-sans text-white/50 text-[13px] leading-[20px] lg:text-[16px] lg:leading-[30px]">
            <a
              href={process.env.PUBLIC_URL || '/'}
              className="hover:text-white transition-colors duration-300">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`cookie-${i18n.language}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t('footer.cookiePolicy')}
                </motion.span>
              </AnimatePresence>
            </a>
            <span>|</span>
            <a
              href={process.env.PUBLIC_URL || '/'}
              className="hover:text-white transition-colors duration-300">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`privacy-${i18n.language}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t('footer.privacyPolicy')}
                </motion.span>
              </AnimatePresence>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
