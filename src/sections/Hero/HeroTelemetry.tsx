import { HERO_TELEMETRY } from '../../constants/index.ts';

/**
 * HeroTelemetry Component
 * 3-Column performance indicators representing core system telemetry.
 */
export function HeroTelemetry() {
  return (
    <div className="grid grid-cols-3 gap-space-md pt-space-lg max-w-xl">
      {HERO_TELEMETRY.map((item) => (
        <div key={item.label} className="flex flex-col">
          <span
            className={`font-headline-sm text-headline-sm font-semibold tracking-tight ${item.colorClass}`}
          >
            {item.value}
          </span>
          <span className="font-code-md text-code-md text-on-surface-variant">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HeroTelemetry;
