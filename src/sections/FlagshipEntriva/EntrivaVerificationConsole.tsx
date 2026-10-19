import { ENTRIVA_FEED_ITEMS } from '../../constants/index.ts';
import { EntrivaSparkline } from './EntrivaSparkline.tsx';

/**
 * EntrivaVerificationConsole Component
 * High-density glass tablet console mockup displaying gate operations telemetry,
 * real-time verification metrics, throughput sparkline, and access log stream.
 */
export function EntrivaVerificationConsole() {
  return (
    <div className="lg:col-span-7 rounded-2xl bg-surface-container/90 backdrop-blur-2xl p-space-lg md:p-space-xl shadow-2xl relative border border-white/5">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between pb-space-md mb-space-lg border-b border-white/5">
        <div className="flex items-center gap-space-sm">
          {/* Status Window Dots */}
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-error-container" />
            <span className="w-3 h-3 rounded-full bg-surface-variant" />
            <span className="w-3 h-3 rounded-full bg-primary-container/40" />
          </div>
          <span className="font-code-md text-code-md text-on-surface font-semibold ml-2">
            ENTRIVA // GATE-OPERATIONS-ALPHA
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-space-xs">
          <span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-code-md text-code-md flex items-center gap-1.5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse motion-reduce:animate-none" />
            SCANNER ONLINE
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mb-space-lg">
        {/* Metric 1: Checked In */}
        <div className="bg-surface-container-low/80 p-space-md rounded-xl border border-white/5">
          <span className="font-code-md text-code-md text-on-surface-variant">
            Checked In
          </span>
          <div className="flex items-baseline gap-space-xs mt-1">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">
              1,420
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              / 1,500
            </span>
          </div>
          <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-container to-tertiary h-full rounded-full"
              style={{ width: '94.6%' }}
              role="progressbar"
              aria-valuenow={94.6}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Attendance progress"
            />
          </div>
        </div>

        {/* Metric 2: Average Verification Latency */}
        <div className="bg-surface-container-low/80 p-space-md rounded-xl border border-white/5">
          <span className="font-code-md text-code-md text-on-surface-variant">
            Avg Verification
          </span>
          <div className="flex items-baseline gap-space-xs mt-1">
            <span className="font-headline-md text-headline-md font-bold text-tertiary">
              0.38s
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              latency
            </span>
          </div>
          <span className="font-code-md text-code-md text-[#00e676] mt-2 block">
            Zero Collision
          </span>
        </div>

        {/* Metric 3: Security Protocol */}
        <div className="bg-surface-container-low/80 p-space-md rounded-xl border border-white/5">
          <span className="font-code-md text-code-md text-on-surface-variant">
            Security Protocol
          </span>
          <div className="flex items-baseline gap-space-xs mt-1">
            <span className="font-headline-md text-headline-md font-bold text-secondary">
              SHA-512
            </span>
          </div>
          <span className="font-code-md text-code-md text-on-surface-variant mt-2 block">
            Hardware Verified
          </span>
        </div>
      </div>

      {/* SVG Sparkline Throughput Telemetry */}
      <EntrivaSparkline />

      {/* Live Feed Activity Ticker */}
      <div className="flex flex-col gap-2" aria-label="Real-time access logs">
        {ENTRIVA_FEED_ITEMS.map((item) => (
          <div
            key={item.ticket}
            className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-space-md rounded-lg bg-surface-container-low/50 border border-white/5 gap-1 sm:gap-0"
          >
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-[#00e676] shrink-0" />
              <span className="font-code-md text-code-md text-on-surface font-semibold">
                {item.ticket}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {item.guest} • {item.status}
              </span>
            </div>
            <span className="font-code-md text-code-md text-on-surface-variant text-right sm:text-left">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntrivaVerificationConsole;
