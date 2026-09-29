import { Treatment, ReviewSnippet, DentalInsight, GalleryPhoto } from '../types';

import heroImg from '../assets/images/hero_dental_clinic_1790698862419.jpg';
import implantsImg from '../assets/images/dental_implants_care_1790698878755.jpg';
import facilityImg from '../assets/images/dental_clinic_facility_1790698892115.jpg';
import bracesImg from '../assets/images/dental_orthodontics_ceramic_1790698907303.jpg';

export const clinicImages = {
  hero: heroImg,
  implants: implantsImg,
  facility: facilityImg,
  braces: bracesImg,
};

export const CLINIC_INFO = {
  name: 'DR BHUTANI DENTAL CLINIC',
  tagline: 'World-Class Dental Care Since 1921',
  establishedYear: 1921,
  yearsOfLegacy: 'A Century of Practice',
  phoneDisplay: '088513 29647',
  phoneTel: 'tel:+918851329647',
  website: 'https://drbhutanidentalclinic.com',
  websiteDisplay: 'drbhutanidentalclinic.com',
  address: {
    line1: '1st Floor, Black Building Chowk, B-7, Rajouri Garden Marg',
    line2: 'Opp. Metro Pillar No. 381, Block B, Raja Garden',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110027',
    country: 'India',
    fullFormatted:
      '1st Floor, Black Building Chowk, B-7, Rajouri Garden Marg, Opp. Metro Pillar No. 381, Block B, Raja Garden, New Delhi, Delhi 110027, India',
  },
  googleRating: 4.8,
  googleReviewCount: '1,088+',
  certifications: [
    {
      name: 'BLS Certified',
      description: 'Basic Life Support Certified Medical Protocols',
    },
    {
      name: 'ISO 9001:2015 Certified',
      description: 'International Quality Management Standard for Dental Services',
    },
  ],
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=DR+BHUTANI+DENTAL+CLINIC+1st+Floor+Black+Building+Chowk+B-7+Rajouri+Garden+Marg+Opp+Metro+Pillar+No+381+Block+B+Raja+Garden+New+Delhi+Delhi+110027',
  disclaimer:
    'Information on this website is provided for general educational purposes and does not replace professional dental advice, diagnosis, or treatment. Individual treatment options should be discussed with a qualified dental professional.',
  treatmentDisclaimer:
    'Treatment suitability varies from patient to patient. Please consult a qualified dental professional for an individual assessment.',
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'braces-orthodontics',
    title: 'Braces & Orthodontics',
    shortDescription: 'Orthodontic options including ceramic and metal braces.',
    category: 'Orthodontics',
    price: 'From ₹35,000',
    pricingNote: 'Metal Braces: ₹35,000 · Ceramic Braces: ₹55,000',
    image: clinicImages.braces,
    imageAlt: 'Ceramic orthodontic brackets and dental model',
    introduction:
      'Orthodontic treatment aims to correct misaligned teeth, improve bite relationships, and enhance overall oral harmony through precise mechanical guidance.',
    benefits: [
      'Addresses dental alignment and crowding',
      'Helps improve biting and chewing function',
      'Choice between traditional metal brackets and aesthetic tooth-colored ceramic brackets',
      'Supports easier daily oral hygiene following alignment',
    ],
    whatToExpect: [
      'Initial clinical examination and diagnostic dental impressions or digital scans',
      'Discussion of appliance choices based on individual alignment needs',
      'Precise bonding of brackets and placement of orthodontic archwires',
      'Periodic adjustments throughout the course of orthodontic care',
    ],
    faqs: [
      {
        question: 'What is the price of braces at Dr Bhutani Dental Clinic?',
        answer:
          'Metal braces are offered at ₹35,000 and Ceramic braces are offered at ₹55,000. Treatment suitability varies from patient to patient and is confirmed upon clinical consultation.',
      },
      {
        question: 'What is the primary aesthetic difference between metal and ceramic braces?',
        answer:
          'Metal braces utilize stainless steel brackets, whereas ceramic braces use translucent or tooth-colored ceramic brackets designed to blend more subtly with natural teeth.',
      },
    ],
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDescription:
      'Explore tooth replacement options designed to restore dental function and appearance.',
    category: 'Implantology',
    image: clinicImages.implants,
    imageAlt: 'Dental implant restoration model with crown',
    introduction:
      'Dental implants represent an advanced restorative solution for single, multiple, or full-arch tooth replacement, integrating with the jawbone to support realistic dental restorations.',
    benefits: [
      'Provides stable anchoring anchored in bone structure',
      'Preserves neighboring natural teeth without requiring preparation of adjacent enamel',
      'Restores masticatory chewing efficiency and natural aesthetic balance',
      'Designed for long-term stability with proper oral hygiene',
    ],
    whatToExpect: [
      'Comprehensive clinical evaluation including radiographic or 3D imaging assessment',
      'Formulation of an individualized surgical and restorative treatment plan',
      'Implant fixture placement followed by appropriate healing and osseointegration period',
      'Custom fabrication and secure placement of the final dental crown or prosthesis',
    ],
    faqs: [
      {
        question: 'Who is a candidate for dental implants?',
        answer:
          'Candidates generally require healthy gums and adequate jawbone density to support the implant post. A clinical evaluation determines individual eligibility.',
      },
      {
        question: 'How are dental implants cared for after placement?',
        answer:
          'Implants require the same diligent oral hygiene as natural teeth, including thorough daily brushing, flossing, and regular routine dental check-ups.',
      },
    ],
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    shortDescription:
      'Learn about modern root canal treatment options for damaged or infected teeth.',
    category: 'Endodontics',
    image: clinicImages.hero,
    imageAlt: 'Modern sterile operatory equipment for endodontic care',
    introduction:
      'Root canal treatment (endodontic therapy) is a conservative procedure designed to preserve natural teeth compromised by deep decay, trauma, or internal pulp inflammation.',
    benefits: [
      'Preserves natural tooth structure and avoids premature extraction',
      'Relieves discomfort associated with inflamed or infected pulp tissue',
      'Maintains normal biting sensation and natural adjacent tooth spacing',
      'Protects surrounding bone and tissues from recurring bacterial involvement',
    ],
    whatToExpect: [
      'Diagnostic radiographic assessment to map internal root anatomy',
      'Local anesthesia to maintain patient comfort throughout the procedure',
      'Gentle removal of infected or inflamed pulp tissue, followed by thorough cleaning and shaping of the canals',
      'Biocompatible sealing of the root canal system, often followed by crown restoration',
    ],
    faqs: [
      {
        question: 'Can root canal treatment be performed in a single visit?',
        answer:
          'In many suitable clinical scenarios, modern endodontic techniques allow single-sitting root canal treatment, depending on the severity of infection and tooth anatomy.',
      },
      {
        question: 'Why is a crown often recommended after a root canal?',
        answer:
          'Treated teeth can become more brittle over time due to loss of moisture and tooth structure; a crown restores structural integrity and protects against fracture.',
      },
    ],
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDescription: 'Professional teeth whitening for a brighter-looking smile.',
    category: 'Cosmetic Dentistry',
    price: '₹12,000',
    pricingNote: 'Clinic-supplied rate: ₹12,000',
    image: clinicImages.facility,
    imageAlt: 'Modern aesthetic dental consultation lounge',
    introduction:
      'Professional teeth whitening is a controlled cosmetic procedure utilizing dental-grade whitening agents to safely reduce external stains and brighten natural tooth enamel.',
    benefits: [
      'Clinically supervised procedure ensuring soft tissue and enamel protection',
      'Reduces staining accumulated from coffee, tea, lifestyle habits, and natural aging',
      'Tailored application based on baseline shade and individual sensitivity profile',
      'Non-invasive cosmetic enhancement',
    ],
    whatToExpect: [
      'Preliminary examination to ensure teeth and gums are healthy prior to whitening',
      'Protective barrier application to shield delicate gingival tissues',
      'Application of dental-grade whitening gel under controlled clinical observation',
      'Post-procedure shade assessment and personalized aftercare guidance',
    ],
    faqs: [
      {
        question: 'What is the pricing for teeth whitening?',
        answer:
          'Teeth whitening is offered at ₹12,000 as listed in the clinic rate guide.',
      },
      {
        question: 'How long do professional whitening results last?',
        answer:
          'Longevity varies based on dietary habits, oral hygiene, and lifestyle factors such as consumption of dark staining beverages.',
      },
    ],
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDescription:
      'Explore cosmetic dental treatments focused on improving the appearance of your smile.',
    category: 'Cosmetic Dentistry',
    price: 'Tooth Jewellery from ₹5,000',
    pricingNote: 'Tooth Jewellery: ₹5,000 · Custom consultations for aesthetic treatments',
    image: clinicImages.braces,
    imageAlt: 'Aesthetic smile design and orthodontic modeling',
    introduction:
      'Cosmetic dentistry combines science and artistry to address aesthetic concerns such as discoloration, minor irregularities, spacing, or decorative enhancements like tooth jewellery.',
    benefits: [
      'Comprehensive smile aesthetics tailored to individual facial proportions',
      'Conservative procedures that prioritize natural enamel preservation',
      'Available tooth jewellery options starting at ₹5,000',
      'Personalized smile assessment and collaborative planning',
    ],
    whatToExpect: [
      'Detailed aesthetic consultation and shade evaluation',
      'Exploration of appropriate non-invasive or minimally invasive modalities',
      'Safe, gentle application of cosmetic materials or non-invasive tooth jewellery',
      'Clear maintenance guidelines for lasting appeal',
    ],
    faqs: [
      {
        question: 'Is tooth jewellery harmful to the natural tooth?',
        answer:
          'Professional tooth jewellery is bonded safely to the enamel surface using dental adhesive without invasive drilling, preserving the underlying tooth structure.',
      },
    ],
  },
  {
    id: 'general-dental-care',
    title: 'General Dental Care',
    shortDescription:
      'Preventive examinations, cleanings, and fundamental oral hygiene maintenance.',
    category: 'General Dentistry',
    image: clinicImages.hero,
    imageAlt: 'Modern sterile operatory setup for general dental examinations',
    introduction:
      'Routine general dentistry serves as the foundation for lifelong oral health, emphasizing preventive diagnostics, professional cleanings, and timely treatment of early conditions.',
    benefits: [
      'Early identification of dental caries, gum concerns, and wear patterns',
      'Professional ultrasonic scaling to eliminate calculus and plaque buildup',
      'Customized oral hygiene recommendations for home care',
      'Supports systemic well-being by maintaining oral health',
    ],
    whatToExpect: [
      'Thorough clinical inspection of teeth, periodontal tissues, and oral mucosa',
      'Diagnostic dental x-rays when clinically indicated',
      'Professional polishing and gentle periodontal scaling',
      'Transparent discussion of any recommended preventive interventions',
    ],
    faqs: [
      {
        question: 'How frequently should I schedule a routine dental check-up?',
        answer:
          'Most clinical guidelines recommend routine dental visits every six months, though individual intervals are customized based on oral health status.',
      },
    ],
  },
  {
    id: 'dental-tourism',
    title: 'Dental Tourism',
    shortDescription:
      'Information for patients considering dental treatment while travelling to India.',
    category: 'Patient Services',
    image: clinicImages.facility,
    imageAlt: 'Welcoming consultation suite for visiting and international patients',
    introduction:
      'Dr Bhutani Dental Clinic provides coordinated dental care for domestic and overseas travelers seeking quality dental treatments while visiting New Delhi.',
    benefits: [
      'Centrally located in West Delhi with convenient metro access (Opp. Metro Pillar No. 381)',
      'Legacy of clinical practice dating back to 1921',
      'ISO 9001:2015 and BLS certified clinical standards',
      'Assistance with flexible scheduling tailored to travel itineraries',
    ],
    whatToExpect: [
      'Pre-travel inquiry and preliminary treatment timeline discussion',
      'Efficient diagnostic scheduling upon arrival in New Delhi',
      'Concentrated treatment sessions planned around your stay duration',
      'Comprehensive documentation and follow-up guidance for your home practitioner',
    ],
    faqs: [
      {
        question: 'Where is the clinic located for visiting patients?',
        answer:
          'The clinic is situated at 1st Floor, Black Building Chowk, B-7, Rajouri Garden Marg, Opp. Metro Pillar No. 381, Raja Garden, New Delhi, accessible via the Delhi Metro network.',
      },
    ],
  },
];

export const REVIEWS: ReviewSnippet[] = [
  {
    id: 'rev-1',
    text: 'Their facility, staff, equipment & services are all top quality.',
    source: 'Google Review',
    rating: 5,
    highlight: 'Facility & Equipment',
  },
  {
    id: 'rev-2',
    text: 'And of course charge reasonable good price for the service.',
    source: 'Google Review',
    rating: 5,
    highlight: 'Fair & Reasonable Value',
  },
  {
    id: 'rev-3',
    text: 'Outstanding Work Welcoming Doctors Professional Staff Nice Behaviour',
    source: 'Google Review',
    rating: 5,
    highlight: 'Staff & Patient Care',
  },
];

export const DENTAL_INSIGHTS: DentalInsight[] = [
  {
    id: 'dental-implants-delhi',
    title: 'Dental Implants in Delhi',
    category: 'Implantology',
    readTime: '4 min read',
    summary:
      'An educational overview of how modern titanium implants integrate with jaw anatomy to replace missing teeth securely.',
    content: [
      'Dental implants have evolved into a reliable standard for single and multi-tooth replacement. Understanding the surgical and restorative phases helps patients make informed healthcare decisions.',
      'During the procedure, a biocompatible fixture is positioned into the alveolar bone where it gradually fuses with natural tissue. Following appropriate integration, a customized prosthetic crown completes the restoration.',
    ],
  },
  {
    id: 'single-sitting-rct',
    title: 'Single Sitting Root Canal Treatment',
    category: 'Endodontics',
    readTime: '3 min read',
    summary:
      'How contemporary rotary instruments and apex locators enable efficient endodontic treatment in single visits when indicated.',
    content: [
      'Advancements in endodontic technology, including nickel-titanium rotary files and digital imaging, have transformed root canal procedures into efficient, patient-friendly experiences.',
      'When clinical conditions permit, treating inflamed pulp in a single appointment minimizes multiple anesthesia administrations while preserving tooth longevity.',
    ],
  },
  {
    id: 'teeth-whitening-cost-delhi',
    title: 'Teeth Whitening Cost in Delhi',
    category: 'Cosmetic Dentistry',
    readTime: '3 min read',
    summary:
      'Understanding professional teeth whitening options, what influences costs, and why clinical supervision safeguards enamel.',
    content: [
      'Professional whitening provides controlled, safe brightening under dental supervision. At Dr Bhutani Dental Clinic, professional teeth whitening is offered at ₹12,000.',
      'Unlike abrasive over-the-counter kits that can compromise enamel or irritate gums, in-clinic procedures use tested formulations with protective barriers.',
    ],
  },
  {
    id: 'choosing-a-dentist-in-delhi',
    title: 'Choosing a Dentist in Delhi',
    category: 'Patient Guide',
    readTime: '4 min read',
    summary:
      'Key criteria for selecting a dental practice: clinical heritage, certified standards, modern equipment, and patient comfort.',
    content: [
      'When evaluating dental clinics in Delhi, key factors include hygiene protocols, verified certifications such as ISO 9001:2015 and BLS, institutional history, and proximity to transit.',
      'A century-old practice legacy reflects enduring patient trust and consistent dedication to community oral care.',
    ],
  },
  {
    id: 'dental-tourism-india',
    title: 'Dental Tourism in India',
    category: 'Travel & Care',
    readTime: '5 min read',
    summary:
      'What international patients and domestic visitors should consider when planning dental appointments in New Delhi.',
    content: [
      'India continues to be a prominent destination for dental travelers seeking high standards of clinical care combined with cultural travel.',
      'Careful pre-planning, reviewing facility certifications, and scheduling adequate time for healing ensure an effective dental tourism experience.',
    ],
  },
  {
    id: 'cosmetic-dentistry-overview',
    title: 'Cosmetic Dentistry',
    category: 'Cosmetic Dentistry',
    readTime: '4 min read',
    summary:
      'From ceramic braces to tooth jewellery and whitening: an informational review of modern aesthetic smile treatments.',
    content: [
      'Cosmetic dentistry focuses on enhancing harmony between teeth, gums, and facial profile. Treatments can range from tooth jewellery (₹5,000) to aesthetic ceramic braces (₹55,000).',
      'A thorough smile evaluation ensures aesthetic procedures remain harmonious with overall oral health and masticatory function.',
    ],
  },
  {
    id: 'missing-teeth-dental-implants',
    title: 'Missing Teeth & Dental Implants',
    category: 'Restorative Care',
    readTime: '4 min read',
    summary:
      'Why replacing missing teeth protects adjacent alignment and prevents gradual jawbone resorption over time.',
    content: [
      'When a tooth is lost, adjacent teeth gradually drift into the void, potentially altering the bite and causing bone resorption in the unoccupied ridge.',
      'Dental implants replace both the functional root and the visible crown, stimulating underlying bone and keeping the dental arch structurally sound.',
    ],
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Modern Operatory & Treatment Suite',
    category: 'Clinic',
    image: clinicImages.hero,
    alt: 'Clean modern dental operatory room with treatment chair',
    caption: 'Clean, sanitized treatment operatory equipped with modern dental chair and digital operatory lighting.',
    isRepresentativeAsset: true,
  },
  {
    id: 'gal-2',
    title: 'Precision Implantology Restoration',
    category: 'Dental Care',
    image: clinicImages.implants,
    alt: 'Precision dental implant anatomical model',
    caption: 'Clinical demonstration model showcasing implant fixture integration and custom crown restoration.',
    isRepresentativeAsset: true,
  },
  {
    id: 'gal-3',
    title: 'Patient Consultation & Reception Lounge',
    category: 'Facilities',
    image: clinicImages.facility,
    alt: 'Modern welcoming clinic consultation lounge with comfortable seating',
    caption: 'Calm, patient-focused reception and consultation lounge designed for privacy and comfort.',
    isRepresentativeAsset: true,
  },
  {
    id: 'gal-4',
    title: 'Aesthetic Ceramic Orthodontics',
    category: 'Dental Care',
    image: clinicImages.braces,
    alt: 'Ceramic orthodontic brackets and wire on model',
    caption: 'Tooth-colored ceramic brackets designed for discreet orthodontic alignment.',
    isRepresentativeAsset: true,
  },
  {
    id: 'gal-5',
    title: 'Advanced Sterilization Standards',
    category: 'Facilities',
    image: clinicImages.hero,
    alt: 'Sterile medical clinical environment',
    caption: 'Strict infection-control and sterilization protocols complying with ISO 9001:2015 quality guidelines.',
    isRepresentativeAsset: true,
  },
  {
    id: 'gal-6',
    title: 'Patient-Centered Clinical Care',
    category: 'Patient Experience',
    image: clinicImages.facility,
    alt: 'Welcoming dental facility environment',
    caption: 'Attentive, reassuring patient care backed by more than a century of clinical heritage in New Delhi.',
    isRepresentativeAsset: true,
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: 'Long-standing Legacy',
    description: 'Dental practice legacy dating back to 1921 in New Delhi.',
    detail: 'Combining more than a century of clinical tradition with modern standards.',
  },
  {
    number: '02',
    title: 'Modern Facilities',
    description: 'State-of-the-art facilities as described by the clinic.',
    detail: 'Equipped with contemporary clinical operatory technologies and comfortable patient lounges.',
  },
  {
    number: '03',
    title: 'Certified Standards',
    description: 'BLS Certified and ISO 9001:2015 Certified.',
    detail: 'Adhering to verified international management and life support safety frameworks.',
  },
  {
    number: '04',
    title: 'Patient-focused Care',
    description: 'A warm, reassuring presentation without making unsupported medical promises.',
    detail: 'Focused on transparent consultations, gentle demeanor, and patient comfort at every visit.',
  },
  {
    number: '05',
    title: 'Central Delhi Location',
    description: 'Conveniently located in Rajouri Garden, New Delhi.',
    detail: '1st Floor, Black Building Chowk, B-7, Rajouri Garden Marg, Opp. Metro Pillar No. 381.',
  },
];
