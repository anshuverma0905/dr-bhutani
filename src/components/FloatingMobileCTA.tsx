import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingMobileCTAProps {
  onBookClick: () => void;
}

export const FloatingMobileCTA: React.FC<FloatingMobileCTAProps> = ({ onBookClick }) => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-lg flex items-center gap-3"
      style={{ maxHeight: '60px' }}
    >
      <a
        href={CLINIC_INFO.phoneTel}
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center truncate"
      >
        <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
        <span className="truncate">Call Clinic</span>
      </a>

      <button
        onClick={onBookClick}
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-xl transition-colors shadow-xs text-center truncate cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-teal-300 shrink-0" />
        <span className="truncate">Book Visit</span>
      </button>
    </aside>
  );
};
