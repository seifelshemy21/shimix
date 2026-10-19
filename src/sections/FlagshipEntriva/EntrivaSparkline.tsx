/**
 * EntrivaSparkline Component
 * SVG dual-wave telemetry sparkline visualization showing real-time scanner mesh throughput.
 */
export function EntrivaSparkline() {
  return (
    <div className="bg-surface-container-lowest/80 rounded-xl p-space-md mb-space-lg border border-white/5">
      <div className="flex items-center justify-between mb-space-sm">
        <span className="font-code-md text-code-md text-on-surface-variant">
          Live Throughput (Entriva Mesh Scanner)
        </span>
        <span className="font-code-md text-code-md text-tertiary">
          +14 scans/sec peak
        </span>
      </div>

      <svg
        className="w-full h-28"
        preserveAspectRatio="none"
        viewBox="0 0 500 120"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveGlow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7020FF" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {/* Glow Area Fill */}
        <path
          d="M0,80 Q50,30 100,65 T200,40 T300,75 T400,20 T500,50 L500,120 L0,120 Z"
          fill="url(#waveGlow)"
        />
        {/* Primary Cyan Solid Wave */}
        <path
          d="M0,80 Q50,30 100,65 T200,40 T300,75 T400,20 T500,50"
          fill="none"
          stroke="#00C8FF"
          strokeWidth="2.5"
        />
        {/* Secondary Violet Dashed Wave */}
        <path
          d="M0,95 Q60,60 130,85 T260,60 T380,85 T500,70"
          fill="none"
          stroke="#7020FF"
          strokeDasharray="4 4"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default EntrivaSparkline;
