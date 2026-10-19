import { ENTRIVA_MODULES } from '../../constants/index.ts';

interface EntrivaModuleListProps {
  activeModule: number;
  onSelectModule: (index: number) => void;
}

/**
 * EntrivaModuleList Component
 * 5 Interactive feature modules for the Entriva flagship platform with semantic tab buttons.
 */
export function EntrivaModuleList({
  activeModule,
  onSelectModule,
}: EntrivaModuleListProps) {
  return (
    <div className="lg:col-span-5 flex flex-col gap-space-sm" role="tablist" aria-label="Entriva Platform Modules">
      {ENTRIVA_MODULES.map((module, index) => {
        const isSelected = activeModule === index;

        return (
          <button
            key={module.title}
            type="button"
            role="tab"
            aria-selected={isSelected}
            tabIndex={0}
            onClick={() => onSelectModule(index)}
            className={`p-space-lg rounded-xl text-left w-full backdrop-blur-md cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
              isSelected
                ? 'bg-surface-container/70 shadow-lg border border-primary-container/30'
                : 'bg-surface-container-low/40 border border-white/5 hover:bg-surface-container'
            }`}
          >
            <div className="flex items-center gap-space-md">
              {/* Icon Container */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${module.iconBgClass}`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {module.icon}
                </span>
              </div>

              {/* Module Text Details */}
              <div className="flex flex-col">
                <h4 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {module.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {module.description}
                </p>
              </div>
            </div>
          </button>
        );
      })}

      {/* Bottom CTA Row */}
      <div className="pt-space-md flex flex-wrap items-center gap-space-md">
        <a
          href="#flagship"
          className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-primary-container to-secondary shadow-lg hover:shadow-[0_0_20px_rgba(0,150,255,0.4)] transition-all"
        >
          <span>Launch Entriva Platform</span>
          <span className="material-symbols-outlined text-[16px]">
            open_in_new
          </span>
        </a>

        <span className="font-code-md text-code-md text-tertiary flex items-center gap-1.5 select-none">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse motion-reduce:animate-none" />
          Live Enterprise Production
        </span>
      </div>
    </div>
  );
}

export default EntrivaModuleList;
