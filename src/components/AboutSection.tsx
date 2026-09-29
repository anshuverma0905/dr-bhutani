import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, clinicImages } from '../data/clinicData';

interface AboutSectionProps {
  onLearnMoreTreatments: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreTreatments }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FCFCFA] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Practice Heritage & Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            A Legacy of Dental Excellence Since 1921
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            DR BHUTANI DENTAL CLINIC presents itself as one of Delhi&apos;s longest-serving dental practices, combining a long-standing legacy with modern dental care and state-of-the-art facilities.
          </p>
        </div>

        {/* Content Layout: Visual Timeline + Facility Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Timeline & Verified Certifications */}
          <div className="lg:col-span-6 space-y-10">
            {/* Visual Timeline (Strict adherence to prompt: 1921 -> Today) */}
            <div className="border-l-2 border-teal-800/30 pl-6 sm:pl-8 space-y-8 relative">
              {/* Point 1: 1921 */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-teal-800 border-4 border-white shadow-xs" />
                <div className="text-xs font-bold text-teal-800 tracking-widest uppercase mb-1">
                  1921
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Practice Legacy Begins
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Establishment of dental practice heritage in Delhi, building a multi-generational commitment to patient care and community oral health.
                </p>
              </div>

              {/* Point 2: Today */}
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-4 border-white shadow-xs" />
                <div className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-1">
                  Today
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Modern Dental Care & State-of-the-Art Facilities
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A contemporary clinical setup situated in Rajouri Garden, offering advanced dental operatory suites, certified clinical hygiene protocols, and patient comfort.
                </p>
              </div>
            </div>

            {/* Verified Certifications Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5 text-teal-900">
                  <ShieldCheck className="w-5 h-5 text-teal-700" />
                  <span className="font-bold text-sm text-slate-900">ISO 9001:2015</span>
                </div>
                <p className="text-xs text-slate-600">
                  Quality Management Certified for consistent dental clinical standards and procedures.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5 text-teal-900">
                  <Award className="w-5 h-5 text-teal-700" />
                  <span className="font-bold text-sm text-slate-900">BLS Certified</span>
                </div>
                <p className="text-xs text-slate-600">
                  Basic Life Support certified staff adherence to emergency preparedness and safety.
                </p>
              </div>
            </div>

            {/* Core Values / Commitments */}
            <div className="space-y-2.5 pt-2">
              {[
                'Central West Delhi location opposite Metro Pillar No. 381',
                'Comprehensive range of treatments from preventive care to implants & orthodontics',
                'Transparent pricing for listed treatments with no hidden obligations',
                'Dedicated to sterile environment and patient reassurance',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMoreTreatments}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950 group"
              >
                <span>Explore treatments & transparent rates</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Imagery & Practice Statistics Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
              <img
                src={clinicImages.facility}
                alt="Clinic reception and patient consultation lounge"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="text-xs text-slate-500">Facility Environment</div>
                <div className="text-sm font-semibold text-slate-900">
                  Patient Consultation Lounge & Clinical Operatory
                </div>
              </div>
            </div>

            {/* Heritage & Performance Metric Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tabular-nums">
                  1921
                </div>
                <div className="text-xs text-slate-500 mt-1">Founding Year</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tabular-nums">
                  4.8 / 5
                </div>
                <div className="text-xs text-slate-500 mt-1">Google Rating</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-center sm:text-left col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tabular-nums">
                  1,088+
                </div>
                <div className="text-xs text-slate-500 mt-1">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
