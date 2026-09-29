import React from 'react';
import { MapPin, Phone, Globe, Navigation, Clock, Calendar, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactSectionProps {
  onBookAppointmentClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onBookAppointmentClick,
}) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
            Location & Direct Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            Visit Our Rajouri Garden Clinic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently situated in Raja Garden opposite Delhi Metro Pillar No. 381, serving patients across West Delhi and beyond.
          </p>
        </div>

        {/* Contact Grid: Details + Map & Hours Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Address, Telephone, Official Web Link */}
          <div className="lg:col-span-6 bg-[#FCFCFA] rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-2xs flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold text-teal-800 tracking-widest uppercase block mb-1">
                  Clinic Identity
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {CLINIC_INFO.tagline}
                </p>
              </div>

              {/* Physical Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-teal-800 shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Clinic Address
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                    {CLINIC_INFO.address.line1},<br />
                    {CLINIC_INFO.address.line2},<br />
                    {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.pincode}, {CLINIC_INFO.address.country}
                  </p>
                  <p className="text-xs text-teal-900 font-semibold mt-1">
                    Landmark: Opp. Metro Pillar No. 381
                  </p>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-teal-800 shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Direct Telephone
                  </h4>
                  <a
                    href={CLINIC_INFO.phoneTel}
                    className="text-lg font-bold text-slate-900 hover:text-teal-900 transition-colors tabular-nums"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Available for inquiries and appointments
                  </p>
                </div>
              </div>

              {/* Official Website */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-teal-800 shrink-0 shadow-2xs">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Official Website
                  </h4>
                  <a
                    href={CLINIC_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{CLINIC_INFO.websiteDisplay}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-xl transition-colors shadow-2xs text-center"
              >
                <Phone className="w-3.5 h-3.5 text-teal-300" />
                <span>Call Clinic</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors shadow-2xs text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-700" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onBookAppointmentClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/70 rounded-xl transition-colors text-center cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-800" />
                <span>Book Visit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Opening Hours & Location Guidance */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Opening Hours Box (Strictly following prompt instruction: DO NOT invent times) */}
            <div className="bg-[#FCFCFA] rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-4 text-teal-800">
                <Clock className="w-5 h-5 text-teal-700" />
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Opening Hours
                </h3>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200/70 space-y-4">
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  Please contact the clinic to confirm today&apos;s opening hours.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our front-desk team is pleased to assist you with same-day consultation availability, doctor availability, and scheduled appointments.
                </p>

                <div className="pt-2">
                  <a
                    href={CLINIC_INFO.phoneTel}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-700" />
                    <span>Call Clinic at {CLINIC_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Metro & Directions Card */}
            <div className="bg-[#FCFCFA] rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3 text-slate-900">
                  <Navigation className="w-5 h-5 text-teal-700" />
                  <h3 className="text-xl font-serif font-bold">
                    Transit & Landmark Details
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-semibold">Delhi Metro Landmark: </strong>
                    Directly opposite Metro Pillar No. 381 on Rajouri Garden Marg in Block B, Raja Garden.
                  </p>
                  <p>
                    <strong className="text-slate-900 font-semibold">Building: </strong>
                    1st Floor, Black Building Chowk, B-7.
                  </p>
                  <p>
                    Easily accessible by private vehicle, auto, cab, or metro transit across New Delhi.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-xl transition-colors shadow-2xs"
                >
                  <Navigation className="w-4 h-4 text-teal-300" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
