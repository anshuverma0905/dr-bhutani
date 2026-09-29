import React from 'react';
import { Phone, Calendar, Star, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, clinicImages } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0b192c_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Heritage Kicker (No Pill Enclosure) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-4">
              <span>World-Class Dental Care</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>New Delhi, India</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-amber-700 font-medium">Est. 1921</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-[1.12] mb-6 max-w-2xl">
              Exceptional Dental Care.{' '}
              <span className="text-teal-900 block mt-1">A Legacy of Trust Since 1921.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Experience modern, patient-focused dentistry backed by more than a century of dental practice.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Indicators: Unboxed text with subtle typographic separators */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium text-slate-900">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-semibold text-slate-900 tabular-nums">4.8★</span>
                  <span>Google Rating</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <div className="font-medium text-slate-800 tabular-nums">
                  <span className="font-semibold text-slate-900">1,088+</span> Google Reviews
                </div>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <div className="flex items-center gap-1 text-slate-700">
                  <Award className="w-3.5 h-3.5 text-teal-700" />
                  <span>Since 1921</span>
                </div>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <div className="flex items-center gap-1 text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Elegant Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
              <img
                src={clinicImages.hero}
                alt="Modern clinical operatory at Dr Bhutani Dental Clinic"
                className="w-full h-auto aspect-4/3 lg:aspect-5/4 object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Quiet Architectural Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-white/60 shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-slate-900">Advanced Dental Operatory</p>
                    <p className="text-slate-500 text-[11px]">Strict sterilization & digital precision</p>
                  </div>
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1 text-teal-800 hover:text-teal-950 font-medium text-[11px]"
                  >
                    <span>View Gallery</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Subtle background decorative accent ring */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
