import React, { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CLINIC_INFO, REVIEWS } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const nextReview = () => {
    setActiveMobileIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveMobileIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Aggregate Google Rating */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              Verified Patient Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Patient Trust Built Over Generations
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Read authentic feedback excerpts from patients who have visited Dr Bhutani Dental Clinic in Rajouri Garden, New Delhi.
            </p>
          </div>

          {/* Google Scorecard Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex items-center gap-6 shadow-2xs shrink-0">
            <div className="text-center pr-6 border-r border-slate-200">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tabular-nums">
                {CLINIC_INFO.googleRating}
              </div>
              <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-[11px] font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                out of 5.0
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1">
                {/* Standard Google "G" representation */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Google Business Reviews</span>
              </div>
              <div className="text-sm font-bold text-slate-900 tabular-nums">
                {CLINIC_INFO.googleReviewCount} Verified Ratings
              </div>
              <a
                href="https://www.google.com/search?q=DR+BHUTANI+DENTAL+CLINIC+Rajouri+Garden+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-teal-800 hover:text-teal-950 font-medium mt-1.5"
              >
                <span>View All Google Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FCFCFA] rounded-2xl border border-slate-200/90 p-8 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-slate-300 mb-3" />

                <blockquote className="text-base text-slate-800 font-medium leading-relaxed italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>Verified Google Review</span>
                <span className="font-medium text-teal-800">{review.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-[#FCFCFA] rounded-2xl border border-slate-200/90 p-6 shadow-2xs mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(REVIEWS[activeMobileIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                {REVIEWS[activeMobileIndex].source}
              </span>
            </div>

            <blockquote className="text-base text-slate-800 font-medium leading-relaxed italic mb-6">
              &ldquo;{REVIEWS[activeMobileIndex].text}&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
              <span>Verified Google Review</span>
              <span className="font-medium text-teal-800">
                {REVIEWS[activeMobileIndex].highlight}
              </span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMobileIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeMobileIndex === idx ? 'bg-slate-900 w-5' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Reviews sourced directly from Google Business Profile listing for DR BHUTANI DENTAL CLINIC. Excerpts presented verbatim as shared by patients.
          </p>
        </div>
      </div>
    </section>
  );
};
