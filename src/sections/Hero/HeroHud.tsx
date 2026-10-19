import { useState } from 'react';
import shimixLogo from '../../assets/shimix-logo.jpeg';
import { SHIMIX_EMBLEM_URL } from '../../constants/index.ts';

/**
 * HeroHud Component
 * Holographic HUD centerpiece featuring dual concentric rotating SVG tech rings,
 * dark glass core emblem plate, and 3 orbiting telemetry telemetry badges.
 */
export function HeroHud() {
  const [emblemSrc, setEmblemSrc] = useState(SHIMIX_EMBLEM_URL);

  return (
    <div className="lg:col-span-5 relative flex items-center justify-center">
      {/* Orbiting Visual Container */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
        {/* Backing Ambient Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container/20 to-secondary/20 blur-2xl animate-pulse motion-reduce:animate-none pointer-events-none" />

        {/* Outer Rotating SVG Tech Ring (Clockwise, 24s) */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow motion-reduce:animate-none pointer-events-none"
          fill="none"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="rgba(0, 200, 255, 0.18)"
            strokeDasharray="8 12"
            strokeWidth="1.5"
          />
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="rgba(112, 32, 255, 0.25)"
            strokeDasharray="24 6"
            strokeWidth="1"
          />
        </svg>

        {/* Inner Rotating SVG Tech Ring (Counter-Clockwise, 38s) */}
        <svg
          className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] animate-spin-reverse-slow motion-reduce:animate-none pointer-events-none"
          fill="none"
          viewBox="0 0 360 360"
          aria-hidden="true"
        >
          <circle
            cx="180"
            cy="180"
            r="140"
            stroke="rgba(0, 150, 255, 0.3)"
            strokeDasharray="4 8"
            strokeWidth="1.5"
          />
          <circle
            cx="180"
            cy="180"
            r="120"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
        </svg>

        {/* Core Emblem Glass Plate */}
        <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-surface-container-lowest/90 backdrop-blur-2xl p-space-md flex flex-col items-center justify-center shadow-2xl border border-white/5">
          <img
            src={emblemSrc}
            alt="Shimix Tech Emblem"
            onError={() => setEmblemSrc(shimixLogo)}
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,150,255,0.45)] hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </div>

        {/* Orbiting Telemetry Badge 1: Encrypted Core (Top Right) */}
        <div className="absolute -top-2 right-4 z-20 px-space-md py-1.5 rounded-lg bg-surface-container/90 backdrop-blur-xl shadow-lg flex items-center gap-space-xs border border-white/5 select-none">
          <span className="material-symbols-outlined text-[16px] text-tertiary">
            verified_user
          </span>
          <span className="font-code-md text-code-md text-on-surface">
            Encrypted Core
          </span>
        </div>

        {/* Orbiting Telemetry Badge 2: Zero-Latency State (Bottom Left) */}
        <div className="absolute bottom-4 -left-4 z-20 px-space-md py-1.5 rounded-lg bg-surface-container/90 backdrop-blur-xl shadow-lg flex items-center gap-space-xs border border-white/5 select-none">
          <span className="material-symbols-outlined text-[16px] text-secondary">
            bolt
          </span>
          <span className="font-code-md text-code-md text-on-surface">
            Zero-Latency State
          </span>
        </div>

        {/* Orbiting Telemetry Badge 3: 99.99% Operational (Bottom Right) */}
        <div className="absolute -bottom-4 right-10 z-20 px-space-md py-1.5 rounded-lg bg-surface-container/90 backdrop-blur-xl shadow-lg flex items-center gap-space-xs border border-white/5 select-none">
          <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse motion-reduce:animate-none" />
          <span className="font-code-md text-code-md text-on-surface">
            99.99% Operational
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroHud;
