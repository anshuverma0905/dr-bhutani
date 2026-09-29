import React, { useState } from 'react';
import { Phone, MapPin, Globe, ShieldCheck, Award, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const [legalModalContent, setLegalModalContent] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const treatmentsList = [
    { name: 'Dental Implants', href: '#treatments' },
    { name: 'Root Canal Treatment', href: '#treatments' },
    { name: 'Braces & Orthodontics', href: '#treatments' },
    { name: 'Teeth Whitening', href: '#treatments' },
    { name: 'Cosmetic Dentistry', href: '#treatments' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Practice', href: '#about' },
    { name: 'Treatments & Pricing', href: '#treatments' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Google Reviews', href: '#reviews' },
    { name: 'Clinic Gallery', href: '#gallery' },
    { name: 'Contact & Directions', href: '#contact' },
  ];

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    if (type === 'privacy') {
      setLegalModalContent({
        title: 'Privacy Policy',
        content:
          'DR BHUTANI DENTAL CLINIC respects patient confidentiality. Personal information collected through consultation requests is used strictly for scheduling appointments and responding to clinical inquiries. We do not sell or distribute personal identifiable data to third parties.',
      });
    } else if (type === 'terms') {
      setLegalModalContent({
        title: 'Terms & Conditions',
        content:
          'Website content is intended for informational and educational purposes. Appointment requests submitted online are subject to confirmation by the clinic. Treatment eligibility, fees for unlisted services, and clinical recommendations are established solely during in-person clinical consultations.',
      });
    } else {
      setLegalModalContent({
        title: 'Medical & Dental Disclaimer',
        content: CLINIC_INFO.disclaimer,
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Column 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-lg font-bold text-white tracking-tight block">
                DR BHUTANI
              </span>
              <span className="text-xs font-semibold tracking-widest text-teal-400 uppercase">
                DENTAL CLINIC
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              World-Class Dental Care Since 1921. Combining more than a century of clinical heritage with contemporary dental facilities in Rajouri Garden, New Delhi.
            </p>

            <div className="pt-2 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Established 1921 · Practice Legacy</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>ISO 9001:2015 & BLS Certified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Treatments
            </h4>
            <ul className="space-y-2">
              {treatmentsList.map((t) => (
                <li key={t.name}>
                  <a
                    href={t.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-teal-400 font-medium block">
                Supplied Clinic Fees:
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Metal Braces ₹35,000 · Ceramic Braces ₹55,000 · Teeth Whitening ₹12,000 · Tooth Jewellery ₹5,000.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Location & Contact
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  1st Floor, Black Building Chowk, B-7, Rajouri Garden Marg, Opp. Metro Pillar No. 381, Raja Garden, New Delhi 110027
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="hover:text-white font-medium text-slate-300"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={CLINIC_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  {CLINIC_INFO.websiteDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Official Channels
              </span>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span>Facebook</span>
                <span aria-hidden="true">·</span>
                <span>Instagram</span>
                <span aria-hidden="true">·</span>
                <span>LinkedIn</span>
                <span aria-hidden="true">·</span>
                <span>X / Twitter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Content Safety Disclaimer Notice in Footer */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Medical Notice: </strong>
            {CLINIC_INFO.disclaimer}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 DR BHUTANI DENTAL CLINIC. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleOpenLegal('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleOpenLegal('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleOpenLegal('disclaimer')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog */}
      {legalModalContent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            className="relative bg-white text-slate-800 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 id="legal-modal-title" className="text-lg font-serif font-bold text-slate-900">
                {legalModalContent.title}
              </h3>
              <button
                onClick={() => setLegalModalContent(null)}
                aria-label="Close dialog"
                className="p-1 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {legalModalContent.content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
