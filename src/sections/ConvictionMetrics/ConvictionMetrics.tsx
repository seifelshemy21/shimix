import {
  CONVICTION_METRICS,
  CONVICTION_MANIFESTO,
} from '../../constants/index.ts';

/**
 * ConvictionMetrics Section Component
 * "OUR CONVICTION — WE'RE BUILDING MORE THAN SOFTWARE."
 * Central philosophy manifesto paired with 3 global scale telemetry metrics.
 */
export function ConvictionMetrics() {
  return (
    <section
      id="about"
      className="w-full px-margin-mobile md:px-margin py-32 relative overflow-hidden"
    >
      {/* Subtle Ambient Multitone Lighting Field */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0096ff]/10 via-[#4030f0]/10 to-[#7020ff]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1040px] mx-auto text-center flex flex-col items-center gap-space-lg relative z-10">
        {/* Category Protocol Badge */}
        <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest select-none">
          OUR CONVICTION
        </span>

        {/* Section Headline */}
        <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero font-bold tracking-tight text-on-surface uppercase">
          WE&apos;RE BUILDING MORE THAN SOFTWARE.
        </h2>

        {/* Central Conviction Manifesto */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {CONVICTION_MANIFESTO}
        </p>

        {/* Key Global Metric Counters */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-space-xl pt-space-lg w-full max-w-2xl"
          aria-label="Global scale metrics"
        >
          {CONVICTION_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center">
              <span
                className={`font-headline-lg text-headline-lg font-bold tracking-tight ${metric.colorClass}`}
              >
                {metric.value}
              </span>
              <span className="font-code-md text-code-md text-on-surface-variant mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConvictionMetrics;
