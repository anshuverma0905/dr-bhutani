import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  initialTreatment?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialTreatment,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    treatment: initialTreatment || '',
    message: '',
  });

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const treatmentOptions = [
    'General Consultation',
    'Dental Implants',
    'Root Canal Treatment',
    'Teeth Whitening',
    'Braces',
    'Cosmetic Dentistry',
    'Other',
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^[0-9]{10,12}$/.test(cleanPhone)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment or service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#FCFCFA] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2">
              Consultation & Visits
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Ready to Take the Next Step Toward Better Dental Care?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Submit your visit inquiry online or contact our clinic directly at{' '}
              <a
                href={CLINIC_INFO.phoneTel}
                className="font-semibold text-teal-900 underline hover:text-teal-950"
              >
                {CLINIC_INFO.phoneDisplay}
              </a>
              .
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-12 text-center max-w-lg mx-auto space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-slate-900">
                    Appointment Request Recorded
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you. Your appointment request has been recorded in this demo.
                  </p>
                </div>

                {/* Patient Summary Box */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-left text-xs space-y-1.5 text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-900">Patient: </span>
                    {formData.fullName}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Phone: </span>
                    {formData.phoneNumber}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Treatment: </span>
                    {formData.treatment}
                  </div>
                  {formData.preferredDate && (
                    <div>
                      <span className="font-semibold text-slate-900">Preferred Date: </span>
                      {formData.preferredDate} ({formData.preferredTime})
                    </div>
                  )}
                </div>

                {/* Direct Call Recommendation */}
                <div className="pt-2">
                  <p className="text-xs text-slate-500 mb-3">
                    To confirm today&apos;s current openings or schedule immediately:
                  </p>
                  <a
                    href={CLINIC_INFO.phoneTel}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-xl shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-300" />
                    <span>Call {CLINIC_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      email: '',
                      preferredDate: '',
                      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
                      treatment: '',
                      message: '',
                    });
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto cursor-pointer"
                >
                  Submit another consultation inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Rahul Sharma"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-teal-700 focus:ring-teal-100'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                      }}
                      placeholder="10-digit mobile number"
                      aria-invalid={!!errors.phoneNumber}
                      aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all ${
                        errors.phoneNumber
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-teal-700 focus:ring-teal-100'
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p id="phoneNumber-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="your.email@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-teal-700 focus:ring-teal-100'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Treatment Select */}
                  <div>
                    <label
                      htmlFor="treatment"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Treatment Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="treatment"
                      value={formData.treatment}
                      onChange={(e) => {
                        setFormData({ ...formData, treatment: e.target.value });
                        if (errors.treatment) setErrors({ ...errors, treatment: '' });
                      }}
                      aria-invalid={!!errors.treatment}
                      aria-describedby={errors.treatment ? 'treatment-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white focus:outline-hidden focus:ring-2 transition-all ${
                        errors.treatment
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-teal-700 focus:ring-teal-100'
                      }`}
                    >
                      <option value="">Select Treatment / Care</option>
                      {treatmentOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.treatment && (
                      <p id="treatment-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.treatment}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Preferred Date <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-teal-700 focus:outline-hidden focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Preferred Time Slot
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:border-teal-700 focus:outline-hidden focus:ring-2 focus:ring-teal-100"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Additional Details / Notes <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your dental symptoms, timeline, or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-hidden focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                {/* Submission CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>Clinic representative will contact you via phone or email.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
                  >
                    <Send className="w-4 h-4 text-teal-300" />
                    <span>Request Appointment</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
