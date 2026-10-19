import { useState, useEffect, useRef } from 'react';

export interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ConsultationModal Component
 * Interactive high-tech glass dialog for direct engineering collaboration initiation.
 * Replaces browser prompt with an ergonomic, fully keyboard-accessible modal interface.
 */
export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Focus management: autofocus input or confirm button when open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (!isSubmitted) {
          inputRef.current?.focus();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isSubmitted]);

  // Keyboard navigation: Escape key closes modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus trap inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  const handleClose = () => {
    setIsSubmitted(false);
    setEmail('');
    setErrorMessage('');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setErrorMessage('Please provide a valid corporate email address.');
      return;
    }

    setSubmittedEmail(trimmed);
    setIsSubmitted(true);
    setErrorMessage('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#03040a]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
        aria-describedby="consultation-modal-desc"
        className="relative w-full max-w-lg rounded-2xl bg-surface-container/95 backdrop-blur-2xl border border-primary-container/30 p-space-lg sm:p-space-xl shadow-[0_0_50px_rgba(0,150,255,0.2)] text-on-surface overflow-hidden motion-safe:animate-fade-in"
      >
        {/* Ambient Corner Light Halos */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Modal Top Bar */}
        <div className="relative z-10 flex items-center justify-between gap-space-sm pb-space-sm">
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-primary-container/15 text-tertiary border border-tertiary/20 select-none">
            <span className="material-symbols-outlined text-[14px]">
              terminal
            </span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider">
              DIRECT GATEWAY // CONSULTATION
            </span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="relative z-10">
          {!isSubmitted ? (
            <>
              <h3
                id="consultation-modal-title"
                className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface uppercase mt-3"
              >
                INITIATE ENGINEERING CONSULTATION
              </h3>
              <p
                id="consultation-modal-desc"
                className="font-body-md text-body-md text-on-surface-variant mt-2"
              >
                Enter your corporate email to initiate an engineering
                consultation with our systems architecture team:
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="consultation-email"
                    className="font-code-md text-code-md text-tertiary uppercase tracking-wider"
                  >
                    Corporate Email
                  </label>
                  <div className="relative">
                    <span
                      className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none"
                      aria-hidden="true"
                    >
                      mail
                    </span>
                    <input
                      id="consultation-email"
                      ref={inputRef}
                      type="email"
                      required
                      placeholder="corporate.architect@organization.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low border border-white/10 text-on-surface placeholder:text-on-surface-variant/40 font-code-md text-code-md focus:outline-none focus:border-tertiary focus:ring-1 focus:ring-tertiary transition-all"
                    />
                  </div>
                  {errorMessage && (
                    <span
                      className="font-code-md text-sm text-error mt-1"
                      role="alert"
                    >
                      {errorMessage}
                    </span>
                  )}
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-center gap-space-sm pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-space-lg py-3 rounded-xl font-label-md text-label-md font-medium text-on-surface bg-surface-container-high/60 hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-xl font-label-md text-label-md font-semibold text-[#f5f7fa] bg-gradient-to-r from-primary-container via-[#4030f0] to-[#7020ff] shadow-lg hover:shadow-[0_0_24px_rgba(0,200,255,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>Submit Transmission</span>
                    <span className="material-symbols-outlined text-[16px]">
                      send
                    </span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="mt-4 flex flex-col items-center text-center gap-4 py-4">
              <div className="w-14 h-14 rounded-full bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-[#00e676]">
                <span className="material-symbols-outlined text-[32px]">
                  check_circle
                </span>
              </div>
              <h3
                id="consultation-modal-title"
                className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface uppercase"
              >
                TRANSMISSION RECEIVED
              </h3>
              <p
                id="consultation-modal-desc"
                className="font-body-md text-body-md text-on-surface-variant max-w-sm"
              >
                Transmission received. A Shimix Tech systems architect will
                connect with you at{' '}
                <strong className="text-tertiary font-code-md">
                  {submittedEmail}
                </strong>{' '}
                within 4 hours.
              </p>
              <div className="w-full pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full inline-flex items-center justify-center px-space-xl py-3.5 rounded-xl font-label-md text-label-md font-semibold text-[#f5f7fa] bg-gradient-to-r from-primary-container via-[#4030f0] to-[#7020ff] shadow-lg hover:shadow-[0_0_24px_rgba(0,200,255,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  Acknowledge &amp; Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultationModal;
