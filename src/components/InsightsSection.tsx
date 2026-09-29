import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, X } from 'lucide-react';
import { DENTAL_INSIGHTS } from '../data/clinicData';
import { DentalInsight } from '../types';

export const InsightsSection: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<DentalInsight | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#FCFCFA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Patient Education & Knowledge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            Dental Insights & Practical Guides
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Educational articles and informational guides on dental care, modern procedures, and common oral health topics in Delhi.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DENTAL_INSIGHTS.map((insight) => (
            <article
              key={insight.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Unboxed Metadata (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-teal-800">{insight.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {insight.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-teal-900 transition-colors leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {insight.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedInsight(insight)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer group-hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Educational Overview</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Reading Article Excerpt */}
        {selectedInsight && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="insight-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div
              className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-teal-800 uppercase tracking-wider">
                    {selectedInsight.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedInsight.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedInsight(null)}
                  aria-label="Close article"
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 id="insight-title" className="text-2xl font-serif font-bold text-slate-900 mb-4">
                {selectedInsight.title}
              </h3>

              <div className="space-y-4 text-slate-700 text-sm leading-relaxed mb-8">
                {selectedInsight.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Educational Note: </span>
                This informational summary is provided for general guidance. Consult a dental specialist for comprehensive personalized evaluation.
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
