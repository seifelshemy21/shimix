import { useState } from 'react';
import { EntrivaModuleList } from './EntrivaModuleList.tsx';
import { EntrivaVerificationConsole } from './EntrivaVerificationConsole.tsx';

/**
 * FlagshipEntriva Section Component
 * "ENTRIVA — Event Experience & Invitation Platform"
 * Showcases the Shimix flagship product architecture with interactive capability modules
 * and an operational live verification tablet console.
 */
export function FlagshipEntriva() {
  const [activeModule, setActiveModule] = useState<number>(0);

  return (
    <section
      id="flagship"
      className="w-full px-margin-mobile md:px-margin py-24 bg-surface-container-lowest relative overflow-hidden"
    >
      {/* Ambient Backdrop Gradient */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1 rounded-full bg-primary-container/15 text-tertiary select-none">
            <span className="material-symbols-outlined text-[14px]">stars</span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider">
              FLAGSHIP PRODUCT RELEASE
            </span>
          </div>

          {/* Product Headline & Category Subhead */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-space-sm">
            <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero font-bold tracking-tight text-on-surface">
              ENTRIVA
            </h2>
            <span className="font-headline-sm text-headline-sm text-on-surface-variant">
              Event Experience &amp; Invitation Platform
            </span>
          </div>

          {/* Descriptive Narrative */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            From digital invitations to guest management, QR verification,
            communication, and live analytics — Entriva unifies the complete
            event lifecycle into a single high-precision system.
          </p>
        </div>

        {/* Two-Column Grid: Interactive Module Selector + Live Verification Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <EntrivaModuleList
            activeModule={activeModule}
            onSelectModule={setActiveModule}
          />
          <EntrivaVerificationConsole />
        </div>
      </div>
    </section>
  );
}

export default FlagshipEntriva;
