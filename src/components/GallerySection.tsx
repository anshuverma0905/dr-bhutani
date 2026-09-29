import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryPhoto } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Clinic', 'Dental Care', 'Facilities', 'Patient Experience'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhotoIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              Visual Environment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Clinical Space & Equipment Gallery
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our clinical treatment operatories, consultation suites, modern orthodontic appliances, and sterilized facilities.
            </p>
          </div>

          {/* Transparent Notice */}
          <div className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 max-w-sm shrink-0">
            <Info className="w-4 h-4 text-teal-700 shrink-0" />
            <span>
              Images depict representative modern dental clinic environments and clinical models.
            </span>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-300">
                    {photo.category}
                  </span>
                  <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-white leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePhotoIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Controls */}
              <div className="w-full flex items-center justify-between text-white/80 py-2 px-1 mb-2">
                <div className="text-xs font-medium">
                  {activePhotoIndex + 1} / {filteredPhotos.length} · {filteredPhotos[activePhotoIndex].category}
                </div>
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  aria-label="Close Lightbox"
                  className="p-2 text-white hover:text-teal-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image View */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center">
                <img
                  src={filteredPhotos[activePhotoIndex].image}
                  alt={filteredPhotos[activePhotoIndex].alt}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />

                {/* Left/Right Buttons */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Bar */}
              <div className="w-full text-center mt-3 text-white">
                <h4 className="font-serif text-lg font-bold">
                  {filteredPhotos[activePhotoIndex].title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl mx-auto">
                  {filteredPhotos[activePhotoIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
