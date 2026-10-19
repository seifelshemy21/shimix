import { CORE_CAPABILITIES } from '../../constants/index.ts';

/**
 * CoreArchitecture Section Component
 * "WE BUILD. WE CONNECT. WE INNOVATE."
 * Faithful implementation of the Shimix Core Architecture section according to DESIGN.md.
 */
export function CoreArchitecture() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-28 relative">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            {/* Category Protocol Badge */}
            <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">
              CORE ARCHITECTURE
            </span>

            {/* Headline */}
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold tracking-tight uppercase">
              WE BUILD. WE CONNECT. WE INNOVATE.
            </h2>

            {/* Sub-narrative */}
            <p className="font-body-md text-body-md text-on-surface-variant">
              Shimix creates digital products and technology solutions that
              connect businesses, people, and experiences through engineered
              elegance and high-performance infrastructure.
            </p>
          </div>

          {/* Right-Side Technical Matrix Indicator */}
          <div className="flex items-center gap-space-xs font-code-md text-code-md text-on-surface-variant select-none self-start md:self-auto">
            <span className="material-symbols-outlined text-primary text-[18px]">
              memory
            </span>
            <span>DISTRIBUTED CAPABILITY MATRIX</span>
          </div>
        </div>

        {/* 3 Glassmorphic Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {CORE_CAPABILITIES.map((card) => (
            <div
              key={card.index}
              className="group relative rounded-xl bg-surface-container/60 backdrop-blur-xl p-space-xl flex flex-col justify-between hover:bg-surface-container hover:-translate-y-0.5 transition-all duration-300 shadow-md border border-white/5"
            >
              {/* Top-Right Ambient Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-all duration-300 ${card.glowColor}`}
                aria-hidden="true"
              />

              {/* Upper Content: Icon, Index & Descriptions */}
              <div className="flex flex-col gap-space-md relative z-10">
                {/* 12x12 Rounded Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBgColor} ${card.accentColor}`}
                >
                  <span className="material-symbols-outlined text-[28px]">
                    {card.icon}
                  </span>
                </div>

                {/* Index & Headlines */}
                <div className="flex flex-col gap-space-xs">
                  <span
                    className={`font-code-md text-code-md tracking-wider ${card.accentColor}`}
                  >
                    {card.index}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {card.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action Label with Animated Arrow */}
              <div
                className={`pt-space-lg flex items-center justify-between font-label-md text-label-md text-on-surface ${card.hoverLinkColor} transition-colors relative z-10 select-none`}
              >
                <span>{card.actionLabel}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreArchitecture;
