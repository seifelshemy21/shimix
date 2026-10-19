import { useState } from 'react';
import shimixLogo from '../../assets/shimix-logo.jpeg';
import { BRAND, NAV_LINKS } from '../../constants/index.ts';

/**
 * Shimix Navbar Component
 * Fixed glassmorphic navigation header adhering to DESIGN.md specifications.
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#03040a]/80 backdrop-blur-xl border-b border-[#0096ff]/20">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        {/* Brand Lockup */}
        <div className="flex items-center gap-space-md">
          <a
            href="#"
            className="flex items-center gap-space-sm group focus:outline-none"
            aria-label={`${BRAND.name} Home`}
          >
            <img
              src={shimixLogo}
              alt="Shimix Tech Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors">
              {BRAND.name}
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-space-lg"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
              className={
                link.active
                  ? 'transition-colors text-primary font-semibold font-label-md text-label-md'
                  : 'font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-space-md">
          {/* Explore Entriva CTA */}
          <a
            href="#flagship"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm rounded-lg font-label-md text-label-md font-semibold text-[#f5f7fa] bg-gradient-to-r from-[#0096ff] to-[#7020ff] hover:shadow-[0_0_16px_rgba(0,200,255,0.5)] hover:brightness-110 transition-all duration-300"
          >
            Explore Entriva
          </a>

          {/* User Profile Avatar */}
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-tertiary"
            aria-label="User Account"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface focus:outline-none focus:ring-2 focus:ring-tertiary"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#03040a]/95 backdrop-blur-2xl border-b border-[#0096ff]/20 px-margin-mobile py-space-lg flex flex-col gap-space-md animate-fadeIn">
          <nav className="flex flex-col gap-space-sm" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={link.active ? 'page' : undefined}
                className={`py-2 px-3 rounded-lg font-label-md text-label-md transition-colors ${
                  link.active
                    ? 'bg-surface-container text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-space-sm border-t border-outline-variant/30 flex flex-col gap-space-sm">
            <a
              href="#flagship"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex sm:hidden items-center justify-center px-space-md py-3 rounded-lg font-label-md text-label-md font-semibold text-[#f5f7fa] bg-gradient-to-r from-[#0096ff] to-[#7020ff] shadow-lg text-center"
            >
              Explore Entriva
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
