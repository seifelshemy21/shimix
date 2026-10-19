import { BRAND } from '../../constants/index.ts';
import { HeroTelemetry } from './HeroTelemetry.tsx';
import { HeroHud } from './HeroHud.tsx';

/**
 * Hero Section Component
 * Faithful implementation of the Shimix Tech Hero section adhering to DESIGN.md.
 */
export function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-margin-mobile md:px-margin pt-space-xl pb-32">
      {/* Ambient Atmospheric Glows */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#00C8FF]/15 via-[#0096FF]/10 to-transparent blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-[#7020FF]/15 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -left-20 w-[380px] h-[380px] bg-[#4030F0]/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          {/* Live System Operational Pill */}
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container/80 backdrop-blur-md shadow-sm border border-white/5 select-none">
            <span
              className="w-2 h-2 rounded-full bg-tertiary animate-ping motion-reduce:animate-none"
              aria-hidden="true"
            />
            <span
              className="w-2 h-2 rounded-full bg-tertiary -ml-2.5"
              aria-hidden="true"
            />
            <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">
              {BRAND.protocol}
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero font-bold tracking-tight uppercase">
            BUILDING TECHNOLOGY <br />
            <span className="bg-gradient-to-r from-tertiary via-primary-container to-secondary text-transparent bg-clip-text">
              FOR WHAT&apos;S NEXT.
            </span>
          </h1>

          {/* Hero Lead Narrative */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Shimix Tech is a technology company building modern digital products
            and intelligent solutions that simplify complex experiences through
            engineered elegance.
          </p>

          {/* Call-To-Action Row */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <a
              href="#flagship"
              className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-xl font-label-md text-label-md font-semibold text-[#f5f7fa] bg-gradient-to-r from-primary-container via-[#4030f0] to-[#7020ff] shadow-xl hover:shadow-[0_0_28px_rgba(0,200,255,0.45)] hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explore Our Products</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
            <a
              href="#contact-flow"
              className="inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-xl font-label-md text-label-md font-semibold text-on-surface bg-surface-container/70 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-300 shadow-md border border-white/5"
            >
              <span>Work With Us</span>
              <span className="material-symbols-outlined text-[18px] text-tertiary">
                code
              </span>
            </a>
          </div>

          {/* Telemetry Metrics */}
          <HeroTelemetry />
        </div>

        {/* Right HUD Centerpiece Column */}
        <HeroHud />
      </div>
    </section>
  );
}

export default Hero;
