import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Info, ShieldCheck } from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onBookTreatment,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Orthodontics',
    'Implantology',
    'Endodontics',
    'Cosmetic Dentistry',
    'General Dentistry',
    'Patient Services',
  ];

  const filteredTreatments =
    selectedFilter === 'All'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === selectedFilter);

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              Comprehensive Dental Care
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Clinical Treatments & Services
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore preventive, restorative, orthodontic, and cosmetic dental treatments. All pricing displays reflect verified clinic-provided rate schedules.
            </p>
          </div>

          {/* Transparent Pricing Callout Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 shrink-0 max-w-sm">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block mb-0.5">Transparent Clinic Rates</span>
                Metal Braces ₹35,000 · Ceramic Braces ₹55,000 · Teeth Whitening ₹12,000 · Tooth Jewellery ₹5,000.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (Buttons with click handlers) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-[#FCFCFA] rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60" />

                {/* Price Display if Supplied by Clinic */}
                {treatment.price && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-bold text-slate-900 shadow-xs tabular-nums border border-slate-200/60">
                    {treatment.price}
                  </div>
                )}

                {/* Category Unboxed Label */}
                <div className="absolute bottom-3 left-3 text-[11px] font-semibold tracking-wider uppercase text-white/90 drop-shadow-xs">
                  {treatment.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {treatment.shortDescription}
                  </p>

                  {treatment.pricingNote && (
                    <p className="text-[11px] font-medium text-teal-800 bg-teal-50/70 rounded-md px-2.5 py-1.5 mb-4 border border-teal-100">
                      {treatment.pricingNote}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer py-1.5 px-2 -ml-2 rounded-md hover:bg-slate-100"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookTreatment(treatment.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-teal-900 py-1.5 px-3 rounded-lg shadow-2xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3 h-3 text-teal-300" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Medical Content Safety Disclaimer */}
        <div className="mt-12 p-4 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-500 leading-relaxed text-center sm:text-left">
          <span className="font-semibold text-slate-700">Clinical Notice: </span>
          Treatment suitability varies from patient to patient. Please consult a qualified dental professional for an individual assessment. Treatment options, timelines, and suitability are determined through comprehensive in-person clinical examinations.
        </div>
      </div>
    </section>
  );
};
