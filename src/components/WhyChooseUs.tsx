import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/clinicData';
import { Building2, History, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [History, Building2, ShieldCheck, HeartHandshake, MapPin];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FCFCFA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Practice Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            Why Patients Choose DR BHUTANI DENTAL CLINIC
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Centred on authentic clinical heritage, certified quality standards, modern facilities, and compassionate patient care in Rajouri Garden.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={item.number}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-slate-300 tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-teal-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 mb-2">
                    {item.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
