export interface Treatment {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  price?: string;
  pricingNote?: string;
  image: string;
  imageAlt: string;
  introduction: string;
  benefits: string[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
}

export interface ReviewSnippet {
  id: string;
  text: string;
  source: 'Google Review';
  rating: number;
  highlight: string;
}

export interface DentalInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Clinic' | 'Dental Care' | 'Facilities' | 'Patient Experience';
  image: string;
  alt: string;
  caption: string;
  isRepresentativeAsset: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
}
