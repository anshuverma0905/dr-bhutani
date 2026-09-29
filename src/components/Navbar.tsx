import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onBookAppointmentClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookAppointmentClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/40 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Zone: Clean wordmark following Top Bar Contract */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="group flex flex-col focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded-sm"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-900 transition-colors">
              DR BHUTANI
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-teal-800 uppercase">
              DENTAL CLINIC
            </span>
          </a>

          {/* Navigation Links: Clean text with hover underlines */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-teal-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 rounded-sm px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Zone: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-teal-900 transition-colors rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Call Now</span>
            </a>
            <button
              onClick={onBookAppointmentClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-900 transition-colors rounded-lg shadow-xs hover:shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={CLINIC_INFO.phoneTel}
              aria-label="Call clinic at 088513 29647"
              className="p-2 text-slate-700 hover:text-teal-900 rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <Phone className="w-5 h-5 text-teal-700" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close mobile navigation menu' : 'Open mobile navigation menu'}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="sm:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl px-4 py-6 transition-all animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-slate-800 hover:text-teal-800 py-1 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookAppointmentClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-900 rounded-lg shadow-xs"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book Appointment</span>
              </button>
              <a
                href={CLINIC_INFO.phoneTel}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
