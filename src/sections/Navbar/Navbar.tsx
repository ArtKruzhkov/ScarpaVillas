import React from 'react';
import { Container } from '../../components/layout/Container';
import { LinkButton } from '../../components/ui/LinkButton';
// import { ReactComponent as ScarpaLogo } from '../../../images/hero/logo_hero.svg';
import './navbar.css';

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: 'Villas', href: '#villas' },
  { label: 'The Borgo', href: '#borgo' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'The Story', href: '#story' },
  { label: 'Stays', href: '#stays' },
  { label: 'Discover', href: '#discover' },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('villas');

  return (
    <header className="sticky top-0 z-50 relative bg-white backdrop-blur">
      <Container className="py-4 2xl:max-w-[1920px] border-b border-[#2c3654]/70">
        <div className="flex items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* LEFT NAV */}
          <nav
            className="hidden items-center justify-between gap-4 lg:flex"
            aria-label="Primary Left">
            {nav.slice(0, 4).map((item) => {
              const sectionId = item.href.replace('#', '');

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* LOGO */}
          <div className="flex justify-center lg:px-8 xl:px-20">
            <a
              href={process.env.PUBLIC_URL || '/'}
              className="flex flex-col items-center justify-center text-center leading-none">
              <img
                src={`${process.env.PUBLIC_URL}/images/nav/logo.png`}
                alt="Scarpa Villas"
                className="w-[120px] sm:w-[140px] shrink-0"
              />
            </a>
          </div>

          {/* RIGHT NAV */}
          <div className="hidden items-center justify-between gap-8 xl:gap-10 lg:flex">
            {nav.slice(4).map((item) => {
              const sectionId = item.href.replace('#', '');

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}>
                  {item.label}
                </a>
              );
            })}

            <LinkButton href="#" variant="outline" size="nav" className="stay_header_link">
              Plan Your Stay
            </LinkButton>

            <span className="language-switcher">EN</span>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 bg-sand-50 text-ink-900 transition-colors hover:bg-sand-100 lg:hidden"
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
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-sans uppercase rounded-xl px-3 py-3 text-sm font-[600] text-[#2c3654] transition-colors hover:bg-ink-900/5"
                    onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}

                <div className="mt-3 grid gap-3">
                  <div className="flex flex-col items-center">
                    <LinkButton
                      href="/"
                      variant="primary"
                      size="md"
                      className="w-[50%] uppercase bg-[#2c3654]">
                      Plan Your Stay
                    </LinkButton>
                  </div>

                  <span className="language-switcher">EN</span>
                </div>
              </nav>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
