import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/MedicalAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/MedicalAnimation/CostSection"
import HowWeWorkSection from "@/components/MedicalAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/MedicalAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/MedicalAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/MedicalAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/MedicalAnimation/CooperationModelsSection";
import TechnologySection from "@/components/MedicalAnimation/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/MedicalAnimation/FaqSection";

const industries = [
  {
    id: 1,
    title: "Pharmaceuticals",
    image: "/industry/01.png",
    text: "Pharmaceutical animation for drug mechanism, clinical data visualization, and commercial marketing content for branded and specialty pharmaceutical products.",
    link: "#"
  },
  {
    id: 2,
    title: "Medical Devices",
    image: "/industry/02.png",
    text: "Medical device animation services for Class I, II, and III devices across implantable, diagnostic, and surgical instrument categories.",
    link: "#"
  },
  {
    id: 3,
    title: "Biotechnology",
    image: "/industry/03.png",
    text: "Biotechnology animation for cell therapy, gene editing, and biologic drug development content for investors, regulators, and scientific communication.",
    link: "#"
  },
  {
    id: 4,
    title: "Hospitals and Healthcare Providers",
    image: "/industry/04.png",
    text: "Patient education animation and clinical training content for health systems and hospital networks managing large, distributed care teams.",
    link: "#"
  },
  {
    id: 5,
    title: "Digital Health and HealthTech",
    image: "/industry/05.png",
    text: "Medical tech animation for digital health platforms and connected device ecosystems explaining product function to patients, providers, and payers.",
    link: "#"
  },
  {
    id: 6,
    title: "Research Organizations",
    image: "/industry/06.png",
    text: "Scientific visualization and research communication animation for academic and commercial research organizations presenting complex study data.",
    link: "#"
  },
  {
    id: 7,
    title: "Healthcare Education",
    image: "/industry/07.png",
    text: "Medical education animation for nursing programs, medical schools, and continuing education platforms, producing curriculum content at scale.",
    link: "#"
  },
  {
    id: 8,
    title: "Life Sciences Companies",
    image: "/industry/08.png",
    text: "Life sciences medical animation for discovery-stage companies communicating early pipeline data to investors and scientific advisory boards.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "3D Medical Animations",
    description: "Photorealistic 3D medical animations for cellular processes, anatomical systems, and clinical procedures are built to scientific accuracy standards and reviewed against current medical literature.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Pharmaceutical Animation Services",
    description: "Pharmaceutical animation for drug mechanism of action, formulation delivery, and product marketing content used in HCP engagement, patient education, and regulatory submission support.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Medical Device Animations",
    description: "Medical device animation services demonstrating device implantation, operation, and patient benefit for regulatory, marketing, and clinical training audiences.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Surgical Procedure Animations",
    description: "Surgical procedure animations showing operative steps, instrument use, and anatomical landmarks for surgical training and patient consent communication.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Patient Education Videos",
    description: "Patient education animation explaining diagnoses, treatment options, and procedures in plain language, reducing anxiety and improving informed consent comprehension.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Mechanism of Action Animations",
    description: "Mechanism of Action animation depicting how a drug or therapeutic intervenes at the molecular or cellular level, for physician detailing, conference presentations, and regulatory documentation.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Mechanism of Disease Animations",
    description: "Mechanism of Disease animation illustrating the pathophysiology of a condition clearly for patient education, clinical training, and pharmaceutical marketing context.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Healthcare Training Animations",
    description: "Healthcare training animation for clinical staff onboarding, procedure training, and compliance education built to reduce variability in protocol execution.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Biotechnology Animations",
    description: "Biotechnology animation for gene therapy mechanisms, biologic drug development, and cell therapy processes for investor, regulatory, and scientific communication contexts.",
    videoSrc: "https://player.vimeo.com/video/1201854911?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Medical Animation Services for Healthcare & Life Sciences | Pixel Studios",
  description: "Need medical animation services that pass clinical review? Pixel Studios builds 3D medical animations for pharma, medical devices, and healthcare education. Get a quote.",
};

export default function MedicalAnimationPage() {
  return (
    <main>
      <Banner
        title="Medical Animation Services for Healthcare Education and Product Marketing"
        description="We are a dedicated medical animation studio producing 3D medical animation services for pharmaceutical companies, medical device manufacturers, healthcare systems, and life sciences organizations across the USA. Every medical animation video we deliver has been through a structured medical review process before it reaches a physician, a patient, or a regulatory body."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection 
        title="Medical Animation Services for Healthcare and Life Sciences"
        description="Our medical animation production company covers every format a healthcare or life sciences organization needs across marketing, education, and clinical communication."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <TeamStandoutSection />
      <GreatVideosSection />
      <TechnologySection />
      <IndustrySection 
        heading="Medical Animation Solutions for Every Healthcare Sector"
        description="Our medical animation production company has built specific expertise across each of the following healthcare sectors, applying clinical accuracy standards relevant to each audience."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
