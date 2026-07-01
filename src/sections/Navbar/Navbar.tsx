import React from 'react';
import { Container } from '../../components/layout/Container';
import { LinkButton } from '../../components/ui/LinkButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

type NavItem = { id: string; label: string; href: string; isRoute?: boolean; routeId?: string };

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  // const [activeSection, setActiveSection] = React.useState('villas');
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const location = useLocation();

  const homeUrl =
    i18n.language === 'en'
      ? `${process.env.PUBLIC_URL}`
      : `${process.env.PUBLIC_URL}/${i18n.language}`;

  const storyUrl = i18n.language === 'en' ? '/story' : `/${i18n.language}/story`;

  const nav: NavItem[] = [
    { id: 'villas', label: t('nav.villas'), href: '#villas' },
    { id: 'borgo', label: t('nav.borgo'), href: '#borgo' },
    { id: 'experiences', label: t('nav.experiences'), href: '#experiences' },
    { id: 'story', label: t('nav.story'), href: storyUrl, isRoute: true, routeId: 'story' },
    { id: 'stays', label: t('nav.stays'), href: '#stays' },
    { id: 'discover', label: t('nav.discover'), href: '#discover' },
  ];

  return (
    <header className="sticky top-0 z-50 relative bg-white backdrop-blur">
      <Container className="py-4 2xl:max-w-[1920px] border-b border-[#2c3654]/70">
        <div className="flex items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* LEFT NAV */}
          <nav className="hidden items-center justify-between lg:flex" aria-label="Primary Left">
            {nav.slice(0, 4).map((item) => {
              const sectionId = item.href.replace('#', '');

              const label = (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}>
                    {item.label}
                  </motion.span>
                </AnimatePresence>
              );

              if (item.isRoute) {
                const isActiveRoute =
                  item.routeId && location.pathname.includes(`/${item.routeId}`);

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`nav-link ${isActiveRoute ? 'active' : ''}`}>
                    {label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}>
                  {label}
                </a>
              );
            })}
          </nav>

          {/* LOGO */}
          <div className="flex justify-center lg:px-8 xl:px-20">
            <a
              href={homeUrl}
              className="flex flex-col items-center justify-center text-center leading-none">
              <img
                src={`${process.env.PUBLIC_URL}/images/nav/logo.png`}
                alt="Scarpa Villas"
                className="w-[120px] sm:w-[140px] shrink-0"
              />
            </a>
          </div>

          {/* RIGHT NAV */}
          <div className="hidden items-center justify-between lg:flex">
            {nav.slice(4).map((item) => {
              const sectionId = item.href.replace('#', '');

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={item.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}>
                      {item.label}
                    </motion.span>
                  </AnimatePresence>
                </a>
              );
            })}

            <LinkButton
              href="https://www.simplebooking.it/ibe2/hotel/9131"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="nav"
              className="stay_header_link">
              <AnimatePresence mode="wait">
                <motion.span
                  key={t('nav.planStay')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}>
                  {t('nav.planStay')}
                </motion.span>
              </AnimatePresence>
            </LinkButton>

            <LanguageSwitcher />
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2c3654] text-ink-900 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="absolute left-0 top-full z-50 w-full px-4 lg:hidden">
            <div className="mt-2 rounded-2xl border border-ink-900/10 bg-sand-50 p-4 shadow-soft">
              <nav className="grid gap-2" aria-label="Mobile">
                {nav.map((item) => {
                  const label = (
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={item.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}>
                        {item.label}
                      </motion.span>
                    </AnimatePresence>
                  );

                  if (item.isRoute) {
                    return (
                      <Link
                        key={item.id}
                        to={item.href}
                        className="font-sans uppercase rounded-xl px-3 py-3 text-sm font-[600] text-[#2c3654] transition-colors hover:bg-ink-900/5"
                        onClick={() => setOpen(false)}>
                        {label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="font-sans uppercase rounded-xl px-3 py-3 text-sm font-[600] text-[#2c3654] transition-colors hover:bg-ink-900/5"
                      onClick={() => setOpen(false)}>
                      {label}
                    </a>
                  );
                })}

                <div className="mt-3 grid gap-3">
                  <div className="flex flex-col items-center">
                    <LinkButton
                      href="https://www.simplebooking.it/ibe2/hotel/9131"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      className="w-[80%] uppercase bg-[#2c3654]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={t('nav.planStay')}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}>
                          {t('nav.planStay')}
                        </motion.span>
                      </AnimatePresence>
                    </LinkButton>
                  </div>

                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
