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

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const [mobileVillasOpen, setMobileVillasOpen] = React.useState(false);

  const openDropdown = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 520);
  };

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

  const villasItem = nav.find((item) => item.id === 'villas');
  const storyItem = nav.find((item) => item.id === 'story');

  const isVillasActiveRoute =
    villasItem?.routeId && location.pathname.includes(`/${villasItem.routeId}`);

  const isStoryActiveRoute =
    storyItem?.routeId && location.pathname.includes(`/${storyItem.routeId}`);

  const villas = [
    {
      id: 'tettineive',
      name: 'Tettineive',
      image: `${process.env.PUBLIC_URL}/images/nav/Tettineive.png`,
    },
    {
      id: 'bogliona',
      name: 'Bogliona',
      image: `${process.env.PUBLIC_URL}/images/nav/Bogliona.png`,
    },
    {
      id: 'bricchi',
      name: 'Bricchi',
      image: `${process.env.PUBLIC_URL}/images/nav/Bricchi.png`,
    },
    {
      id: 'tettimorra',
      name: 'Tettimorra',
      image: `${process.env.PUBLIC_URL}/images/nav/Tettimorra.png`,
    },
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

              /* VILLAS WITH DROPDOWN */
              if (item.id === 'villas') {
                const isActiveRoute = location.pathname.includes('/villas');

                return (
                  <div
                    key={item.id}
                    // className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}>
                    {/* MAIN VILLAS LINK */}
                    <Link
                      to={item.href}
                      className={`nav-link flex items-center gap-2 ${
                        isActiveRoute || dropdownOpen ? 'active' : ''
                      }`}>
                      {label}

                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          dropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {/* DROPDOWN */}
                    <div
                      className={`absolute left-0 top-full w-full border-t border-[#2C3654]/10 bg-white shadow-[0_15px_30px_rgba(44,54,84,0.12)] transition-all duration-300 ${dropdownOpen ? 'visible opacity-100 translate-y-0 pointer-events-auto' : 'invisible opacity-0 -translate-y-2 pointer-events-none'}`}>
                      <div className="mx-auto max-w-[1920px] px-6 py-8">
                        <div className="mx-auto grid max-w-[1550px] grid-cols-4 gap-5">
                          {villas.map((villa) => (
                            <a
                              key={villa.id}
                              href="/"
                              onClick={(event) => event.preventDefault()}
                              className="group/villa relative block overflow-hidden">
                              <div className="relative aspect-[1.6/1] overflow-hidden">
                                <img
                                  src={villa.image}
                                  alt={villa.name}
                                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/villa:scale-105"
                                />

                                {/* IMAGE OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                                {/* VILLA NAME */}
                                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[24px] text-white">
                                  {villa.name}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* OTHER ROUTES */
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

              /* ANCHOR LINKS */
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
                // onClick={() => setOpen(false)}
                onClick={() => {
                  setOpen(false);
                  setMobileVillasOpen(false);
                }}
                className="absolute right-7 top-4 text-[#2c3654]/35 transition-opacity hover:opacity-60">
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

              {/* <nav className="grid" aria-label="Mobile">
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
              </nav> */}

              <nav className="flex flex-col" aria-label="Mobile">
                {/* VILLAS */}
                <div className="border-b border-[#2c3654]">
                  <div className="flex items-center">
                    <Link
                      to={villasUrl}
                      onClick={() => {
                        setOpen(false);
                        setMobileVillasOpen(false);
                      }}
                      className={`nav-link_mob flex-1 py-3 ${
                        isVillasActiveRoute || mobileVillasOpen ? 'active' : ''
                      }`}>
                      {t('nav.villas')}
                    </Link>

                    <button
                      type="button"
                      onClick={() => setMobileVillasOpen((prev) => !prev)}
                      className={`flex h-11 w-11 items-center justify-end ${
                        isVillasActiveRoute || mobileVillasOpen
                          ? 'text-[#C09A60]'
                          : 'text-[#2c3654]'
                      }`}>
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          mobileVillasOpen ? 'rotate-180' : ''
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileVillasOpen ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex gap-2 overflow-x-auto pb-3 pt-2 scrollbar-hide">
                      {villas.map((villa) => (
                        <a
                          key={villa.id}
                          href="/"
                          onClick={(e) => e.preventDefault()}
                          className="w-[44%] shrink-0">
                          <div className="relative aspect-[1.55/1] overflow-hidden">
                            <img
                              src={villa.image}
                              alt={villa.name}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[16px] text-white">
                              {villa.name}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BORGO */}
                <a href="#borgo" className="border-b border-[#2c3654] py-3 nav-link_mob">
                  {t('nav.borgo')}
                </a>

                {/* EXPERIENCES */}
                <a href="#experiences" className="border-b border-[#2c3654] py-3 nav-link_mob">
                  {t('nav.experiences')}
                </a>

                {/* STORY */}
                <Link
                  to={storyUrl}
                  onClick={() => setOpen(false)}
                  className={`nav-link_mob border-b border-[#2c3654] py-3 ${
                    isStoryActiveRoute ? 'active' : ''
                  }`}>
                  {t('nav.story')}
                </Link>

                {/* STAYS */}
                <a href="#stays" className="border-b border-[#2c3654] py-3 nav-link_mob">
                  {t('nav.stays')}
                </a>

                {/* DISCOVER */}
                <a href="#discover" className="py-3 nav-link_mob">
                  {t('nav.discover')}
                </a>

                <div className="mt-8 flex justify-between">
                  <LanguageSwitcher />

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/scarpavillas/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nav/insta_logo.svg`}
                        className="h-6 w-6"
                        alt="Instagram"
                      />
                    </a>

                    <a
                      href="https://www.facebook.com/ScarpaVillas"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nav/fb_logo.svg`}
                        className="h-5 w-5"
                        alt="Facebook"
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
