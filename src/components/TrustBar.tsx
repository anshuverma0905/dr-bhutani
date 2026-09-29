import React from 'react';
import { Star, ShieldCheck, Award, HeartPulse, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Clock,
      label: 'Since 1921',
      subtext: 'More than a century of care',
    },
    {
      icon: Star,
      label: `${CLINIC_INFO.googleRating}★ Google Rating`,
      subtext: 'Verified patient satisfaction',
      highlightIcon: 'text-amber-500 fill-amber-500',
    },
    {
      icon: Award,
      label: `${CLINIC_INFO.googleReviewCount} Reviews`,
      subtext: 'Documented Google reviews',
    },
    {
      icon: HeartPulse,
      label: 'BLS Certified',
      subtext: 'Basic Life Support protocols',
    },
    {
      icon: ShieldCheck,
      label: 'ISO 9001:2015 Certified',
      subtext: 'Quality management standard',
    },
  ];

  return (
    <section
      aria-label="Trust and Certifications"
      className="border-y border-slate-200/80 bg-white py-6 shadow-2xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid: 2-column on mobile, 5-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 ${
                  idx === 0 ? '' : 'pt-4 sm:pt-0'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      item.highlightIcon ? item.highlightIcon : 'text-teal-700'
                    }`}
                  />
                  <span className="text-sm font-bold text-slate-900 tracking-tight">
                    {item.label}
                  </span>
                </div>
                <span className="text-xs text-slate-500 leading-tight">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
