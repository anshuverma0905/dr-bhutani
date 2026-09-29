import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { TreatmentDetailsModal } from './components/TreatmentDetailsModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { InsightsSection } from './components/InsightsSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileCTA } from './components/FloatingMobileCTA';
import { ScrollToTop } from './components/ScrollToTop';
import { Treatment } from './types';

export default function App() {
  const [selectedTreatmentForModal, setSelectedTreatmentForModal] =
    useState<Treatment | null>(null);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] =
    useState<string>('');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTreatment = (treatmentName: string) => {
    setSelectedTreatmentForBooking(treatmentName);
    scrollToAppointment();
  };

  const scrollToTreatments = () => {
    const el = document.getElementById('treatments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-slate-900 flex flex-col relative pb-16 sm:pb-0">
      {/* Top Navbar */}
      <Navbar onBookAppointmentClick={scrollToAppointment} />

      {/* Main Content Areas */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={scrollToAppointment} />

        {/* Trust & Credibility Bar */}
        <TrustBar />

        {/* About Section with 1921 Timeline */}
        <AboutSection onLearnMoreTreatments={scrollToTreatments} />

        {/* Treatments Section */}
        <TreatmentsSection
          onSelectTreatment={(treatment) => setSelectedTreatmentForModal(treatment)}
          onBookTreatment={handleBookTreatment}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Google Reviews Section */}
        <ReviewsSection />

        {/* Dental Insights Articles */}
        <InsightsSection />

        {/* Clinic & Equipment Gallery */}
        <GallerySection />

        {/* Appointment Booking Section */}
        <AppointmentSection initialTreatment={selectedTreatmentForBooking} />

        {/* Contact & Opening Hours Section */}
        <ContactSection onBookAppointmentClick={scrollToAppointment} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reusable Treatment Details Modal */}
      <TreatmentDetailsModal
        treatment={selectedTreatmentForModal}
        onClose={() => setSelectedTreatmentForModal(null)}
        onBookAppointment={handleBookTreatment}
      />

      {/* Floating Mobile Sticky CTA */}
      <FloatingMobileCTA onBookClick={scrollToAppointment} />

      {/* Desktop Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
