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
  const villasUrl = i18n.language === 'en' ? '/villas' : `/${i18n.language}/villas`;

  const nav: NavItem[] = [
    { id: 'villas', label: t('nav.villas'), href: villasUrl, isRoute: true, routeId: 'villas' },
    { id: 'borgo', label: t('nav.borgo'), href: '#borgo' },
    { id: 'experiences', label: t('nav.experiences'), href: '#experiences' },
    { id: 'story', label: t('nav.story'), href: storyUrl, isRoute: true, routeId: 'story' },
    { id: 'stays', label: t('nav.stays'), href: '#stays' },
    { id: 'discover', label: t('nav.discover'), href: '#discover' },
  ];

  return (
    <header className="sticky top-0 z-50 relative bg-white backdrop-blur">
      <Container className="py-4 2xl:max-w-[1920px] border-b border-[#2c3654]/70">
        {/* Desktop */}
        <div className="hidden items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
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
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden">
          {/* Menu */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-[#2c3654]">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <a href={homeUrl} className="absolute left-1/2 -translate-x-1/2">
            <img
              src={`${process.env.PUBLIC_URL}/images/nav/logo.png`}
              alt="Scarpa Villas"
              className="w-[120px]"
            />
          </a>

          {/* Plan Stay */}
          <LinkButton
            href="https://www.simplebooking.it/ibe2/hotel/9131"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="uppercase">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('nav.planStay')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {t('nav.planStayMob')}
              </motion.span>
            </AnimatePresence>
          </LinkButton>
        </div>

        {open && (
          <div className="absolute left-0 top-full z-50 w-full px-4 lg:hidden">
            <div className="relative bg-white p-8 pt-10 shadow-soft">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute right-7 top-5 text-[#2c3654] transition-opacity hover:opacity-60">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <nav className="grid" aria-label="Mobile">
                {/* {nav.map((item) => {
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
                        className="font-sans uppercase rounded-xl px-3 py-3 text-[15px] font-[600] text-[#2c3654] transition-colors hover:bg-ink-900/5"
                        onClick={() => setOpen(false)}>
                        {label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="font-sans uppercase rounded-xl px-3 py-3 text-[15px] font-[600] text-[#2c3654] transition-colors hover:bg-ink-900/5"
                      onClick={() => setOpen(false)}>
                      {label}
                    </a>
                  );
                })} */}

                {nav.map((item, index) => {
                  const isLast = index === nav.length - 1;

                  const itemClassName = `font-sans uppercase px-0 py-3 text-[14px] font-[600] tracking-[0.04em] text-[#2c3654] transition-colors hover:text-[#C09A60] ${!isLast ? 'border-b border-[#2c3654]/25' : ''}`;

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
                        className={itemClassName}
                        onClick={() => setOpen(false)}>
                        {label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className={itemClassName}
                      onClick={() => setOpen(false)}>
                      {label}
                    </a>
                  );
                })}

                <div className="mt-8 flex justify-between">
                  <LanguageSwitcher />

                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://www.instagram.com/scarpavillas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity duration-300 hover:opacity-60"
                      aria-label="Instagram">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nav/insta_logo.svg`}
                        alt="Instagram"
                        className="h-6 w-6"
                      />
                    </a>

                    <a
                      href="https://www.facebook.com/ScarpaVillas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity duration-300 hover:opacity-60"
                      aria-label="Facebook">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nav/fb_logo.svg`}
                        alt="Facebook"
                        className="h-5 w-5"
                      />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
