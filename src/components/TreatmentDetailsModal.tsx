import React, { useEffect } from 'react';
import { X, Calendar, Check, HelpCircle, AlertCircle, ChevronRight, Phone } from 'lucide-react';
import { Treatment } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface TreatmentDetailsModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookAppointment: (treatmentName: string) => void;
}

export const TreatmentDetailsModal: React.FC<TreatmentDetailsModalProps> = ({
  treatment,
  onClose,
  onBookAppointment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (treatment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Breadcrumb and Close */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
            <button
              onClick={onClose}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Treatments
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-teal-800 truncate max-w-[200px] sm:max-w-xs">
              {treatment.title}
            </span>
          </nav>

          <button
            onClick={onClose}
            aria-label="Close treatment details"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Banner Image */}
          <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-slate-100 shadow-sm border border-slate-200/80">
            <img
              src={treatment.image}
              alt={treatment.imageAlt}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-300 mb-1 block">
                {treatment.category}
              </span>
              <h2 id="modal-treatment-title" className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {treatment.title}
              </h2>
            </div>
          </div>

          {/* Pricing Highlight if available */}
          {treatment.price && (
            <div className="p-4 bg-teal-50/70 border border-teal-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-teal-900 block">Clinic Listed Fee</span>
                <span className="text-xl font-bold font-serif text-teal-950 tabular-nums">
                  {treatment.price}
                </span>
                {treatment.pricingNote && (
                  <p className="text-xs text-teal-800 mt-0.5">{treatment.pricingNote}</p>
                )}
              </div>
              <button
                onClick={() => {
                  onClose();
                  onBookAppointment(treatment.title);
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-lg shadow-2xs transition-colors shrink-0 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Treatment</span>
              </button>
            </div>
          )}

          {/* Introduction */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Overview & Clinical Indications
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {treatment.introduction}
            </p>
          </div>

          {/* Benefits / General Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Benefits & Considerations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/60">
                  <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              What to Expect During Care
            </h3>
            <div className="space-y-2.5">
              {treatment.whatToExpect.map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-800 text-[11px] font-bold shrink-0 mt-0.5 tabular-nums">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          {treatment.faqs && treatment.faqs.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-700" />
                <span>Common Questions</span>
              </h3>
              <div className="space-y-3">
                {treatment.faqs.map((faq, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200/70">
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mandatory Medical Safety Disclaimer */}
          <div className="p-4 bg-amber-50/60 border border-amber-200/70 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed">
              <span className="font-semibold">Medical Disclaimer: </span>
              {CLINIC_INFO.treatmentDisclaimer}
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Rajouri Garden, New Delhi</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Tel: {CLINIC_INFO.phoneDisplay}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={CLINIC_INFO.phoneTel}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Call Clinic</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onBookAppointment(treatment.title);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Request Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
