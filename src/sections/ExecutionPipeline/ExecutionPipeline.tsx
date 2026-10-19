import { EXECUTION_STAGES } from '../../constants/index.ts';

/**
 * ExecutionPipeline Section Component
 * "FROM IDEA → TO IMPACT"
 * 5-Stage engineering pipeline circuit demonstrating disciplined technical delivery.
 */
export function ExecutionPipeline() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-28 bg-surface-container-lowest relative">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <header className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">
            EXECUTION DISCIPLINE
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold tracking-tight uppercase text-on-surface">
            FROM IDEA &rarr; TO IMPACT
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our disciplined delivery pipeline engineered for speed,
            architectural rigor, and structural integrity.
          </p>
        </header>

        {/* Horizontal Interconnected Circuit Pipeline */}
        <div className="relative">
          {/* Connecting Line Background for Desktop (Hidden on Mobile) */}
          <div
            className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-primary-container via-[#4030f0] to-[#7020ff] z-0 opacity-40 pointer-events-none"
            aria-hidden="true"
          />

          {/* Sequential Process Stages */}
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative list-none p-0 m-0">
            {EXECUTION_STAGES.map((stage) => (
              <li
                key={stage.number}
                className="relative z-10 flex flex-col gap-space-md p-space-md rounded-xl bg-surface-container-low/80 backdrop-blur-md border border-white/5 hover:bg-surface-container-low transition-all duration-300 shadow-sm"
              >
                {/* Step Circular Node */}
                <div
                  className={`w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-code-md text-code-md font-bold shadow-md ${stage.numberColor} border border-white/5 shrink-0 select-none`}
                >
                  <span>{stage.number}</span>
                </div>

                {/* Stage Headline & Description */}
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {stage.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ExecutionPipeline;
