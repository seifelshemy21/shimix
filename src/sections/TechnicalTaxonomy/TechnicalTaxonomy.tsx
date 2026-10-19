import { TECHNICAL_TAXONOMY_LAYERS } from '../../constants/index.ts';

/**
 * TechnicalTaxonomy Section Component
 * "TECHNOLOGY THAT MOVES WITH YOU."
 * 5-Card Bento Grid showcasing Shimix Tech engineering capabilities.
 */
export function TechnicalTaxonomy() {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-28 relative">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
            TECHNICAL TAXONOMY
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold tracking-tight uppercase text-on-surface">
            TECHNOLOGY THAT MOVES WITH YOU.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Engineered with modular precision across web, distributed systems,
            machine-assisted workflows, and robust cryptographic verifications.
          </p>
        </div>

        {/* 5-Card High-Tech Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {TECHNICAL_TAXONOMY_LAYERS.map((item) => (
            <article
              key={item.layer}
              className={`p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-lg flex flex-col justify-between hover:bg-surface-container transition-all group border border-white/5 ${item.spanClass}`}
            >
              {/* Card Upper Content: Header Indicator, Icon, Title, and Description */}
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className={`font-code-md text-code-md ${item.accentColor}`}>
                    {item.layer}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[24px] text-on-surface-variant ${item.hoverIconColor} transition-colors`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Technology Specification Chips */}
              <div className="pt-space-md flex flex-wrap gap-1.5" aria-label={`${item.title} technology stack`}>
                {item.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-container-high font-code-md text-code-md text-on-surface-variant select-none border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalTaxonomy;
