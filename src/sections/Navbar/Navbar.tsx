import React from 'react';
import { Container } from '../../components/layout/Container';
import { LinkButton } from '../../components/ui/LinkButton';
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
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-sand-100/85 backdrop-blur">
      <Container className="py-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6">
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
          <div className="flex justify-center px-20">
            <a
              href={process.env.PUBLIC_URL || '/'}
              className="flex flex-col items-center justify-center text-center leading-none">
              <img
                src="images/nav/logo.png"
                alt="Scarpa Villas"
                className="w-[120px] sm:w-[140px]"
              />
            </a>
          </div>

          {/* RIGHT NAV */}
          <div className="hidden items-center justify-between gap-8 xl:gap-10 lg:flex">
            {/* {nav.slice(4).map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))} */}

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

            <LinkButton href="#" variant="outline" size="nav">
              Plan Your Stay
            </LinkButton>

            <span className="cursor-pointer font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-[#2C3654]">
              EN
            </span>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 bg-sand-50 text-ink-900 transition-colors hover:bg-sand-100 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}>
            <span className="sr-only">Menu</span>

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

        {open ? (
          <div className="mt-4 rounded-2xl border border-ink-900/10 bg-sand-50 p-4 shadow-soft lg:hidden">
            <nav className="grid gap-2" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-ink-800 transition-colors hover:bg-ink-900/5"
                  onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}

              <div className="mt-3 grid gap-3">
                <LinkButton href="#plan" variant="primary" size="md">
                  Plan Your Stay
                </LinkButton>

                <span className="rounded-xl px-3 py-2 text-center text-xs font-medium uppercase tracking-[0.3em] text-ink-700">
                  EN
                </span>
              </div>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
