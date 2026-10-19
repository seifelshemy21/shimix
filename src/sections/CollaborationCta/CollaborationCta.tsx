import { useState } from 'react';
import { COLLABORATION_CTA } from '../../constants/index.ts';
import { ConsultationModal } from '../../components/ConsultationModal.tsx';

/**
 * CollaborationCta Section Component
 * "COLLABORATION INITIATION — HAVE AN IDEA? LET'S BUILD IT."
 * Direct collaboration transition concluding the main Shimix narrative.
 * Features rounded-3xl elevated gradient container, corner ambient bleeds,
 * primary gradient consultation trigger, and secondary specification navigation.
 */
export function CollaborationCta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewSpecifications = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const target = document.getElementById('flagship');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#flagship');
    }
  };

  return (
    <>
      <section
        id="contact-flow"
        className="w-full px-margin-mobile md:px-margin pb-32 pt-8 relative"
      >
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container p-space-xl md:p-24 relative overflow-hidden shadow-2xl border border-white/5">
          {/* Ambient Corner Light Bleeds */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-space-lg max-w-3xl mx-auto">
            {/* Collaboration Initiation Badge */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-container/15 text-tertiary border border-tertiary/20 select-none">
              <span className="material-symbols-outlined text-[16px]">
                terminal
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">
                {COLLABORATION_CTA.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero font-bold tracking-tight uppercase text-on-surface">
              {COLLABORATION_CTA.headlinePrefix} <br />
              <span className="bg-gradient-to-r from-tertiary via-primary-container to-secondary text-transparent bg-clip-text">
                {COLLABORATION_CTA.headlineGradient}
              </span>
            </h2>

            {/* Supporting Content */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {COLLABORATION_CTA.description}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-sm w-full justify-center">
              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-xl font-label-md text-label-md font-semibold text-[#f5f7fa] bg-gradient-to-r from-[#0096ff] via-[#4030f0] to-[#7020ff] shadow-xl hover:shadow-[0_0_32px_rgba(0,200,255,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer"
              >
                <span>{COLLABORATION_CTA.primaryAction}</span>
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
              </button>

              {/* Secondary Action Link */}
              <a
                href={COLLABORATION_CTA.specificationsHref}
                onClick={handleReviewSpecifications}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-xl font-label-md text-label-md font-semibold text-on-surface bg-surface-container-lowest/80 backdrop-blur-xl border border-white/5 hover:bg-surface-container hover:border-white/10 transition-all duration-300 shadow-md"
              >
                <span>{COLLABORATION_CTA.secondaryAction}</span>
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  visibility
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Dialog Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default CollaborationCta;
