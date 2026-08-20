import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/MedicalAnimation/CostSection"
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TechnologySection from "@/components/MedicalAnimation/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: 'Medical and Scientific Expertise',
    description: "Our studio for medical animation works with scientific advisors and your internal medical teams rather than relying on animators interpreting clinical content alone.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Accurate Healthcare Visualizations',
    description: "Every medical animation is reviewed against primary scientific literature and client-provided clinical data before final production.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Custom-Tailored Animation Solutions',
    description: "Every 3D medical animation is built from your specific molecule, device, or procedure rather than a modified generic model.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Regulatory-Conscious Production',
    description: "Our production process is structured to produce content that meets the evidentiary and accuracy standards of regulatory communication and promotional review.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Dedicated Project Management',
    description: "One project manager coordinates between your medical, regulatory, and marketing teams throughout every medical animation production.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Reliable Delivery Timelines',
    description: "Documented production schedules built around your medical review cycles so milestones align with internal approval timelines.",
    icon: '/icons/experienced.png'
  }
];

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

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Product Launch and Commercialization',
    content: "Medical device marketing animation and pharmaceutical product animation support HCP detailing and market access conversations during product launches."
  },
  {
    id: 2,
    title: '2 Patient Education and Awareness',
    content: "Patient education animation improves comprehension of complex diagnoses and treatment options, directly affecting adherence and informed consent quality."
  },
  {
    id: 3,
    title: '3 Physician and Clinical Training',
    content: "Healthcare training animations provide repeatable, standardized procedure training that reduces the variability of live clinical instruction."
  },
  {
    id: 4,
    title: '4 Investor and Stakeholder Presentations',
    content: "Medical 3D animation and simulation help investors understand complex biological mechanisms and product differentiation without requiring a scientific background."
  },
  {
    id: 5,
    title: '5 Conference and Trade Show Marketing',
    content: "Medical animation videos create compelling, credible booth and presentation assets for medical conferences where competition for physician attention is intense."
  },
  {
    id: 6,
    title: '6 Regulatory and Scientific Communication',
    content: "Animation supports regulatory submissions and scientific communication by making complex mechanism data visually accessible to reviewers and advisory committee members."
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Scientific Research',
    content: 'We review current literature, clinical data, and scientific references before scripting begins, establishing the accuracy standard the animation will be held to.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Development and Medical Review',
    content: 'Scripts are developed in collaboration with your medical and scientific teams and reviewed for accuracy before any visual work begins.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visual Planning',
    content: 'Every anatomical structure, biological event, and clinical step is mapped visually and reviewed for scientific accuracy before 3D modeling begins.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: '3D Modeling and Asset Creation',
    content: 'Anatomical models, cellular structures, and device components are built to reference data and reviewed against approved medical illustrations and literature.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Motion is animated according to the actual biological behavior or clinical procedure being depicted, not a visually convenient approximation.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Medical Accuracy Validation',
    content: 'Your scientific or clinical team reviews the animation specifically for technical and medical accuracy before final rendering begins.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Rendering and Post-Production',
    content: 'Final rendering, sound design, and post-production are applied after medical review is closed to avoid quality rework on validated content.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files delivered in every format specified at kickoff, with source files available for future updates as clinical data evolves.',
  }
];

const title = (
  <>
    Start Your <span>Medical Animation</span> Project with a Free Consultation
  </>
);

const text = "Book a discovery call, and we will scope your medical animation project, clinical review requirements, timeline, and investment within 48 hours.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Simplify Complex Medical Information",
    text: "Medical 3D animation services make molecular, cellular, and anatomical processes visible and comprehensible to audiences without requiring years of scientific training."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Improve Patient Understanding",
    text: "Patients who receive animated explanations of their diagnosis and treatment demonstrate better comprehension and higher adherence rates than those receiving text-only materials."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Enhance Healthcare Marketing Results",
    text: "Medical animation services business applications consistently outperform static creative in HCP engagement, with higher recall and clearer differentiation of product mechanism."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Support Scientific Communication",
    text: "Complex biological data presented through scientifically accurate animation is more persuasive and better retained than the same information in written scientific language."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Increase Audience Engagement",
    text: "Medical animation videos hold physician and patient attention significantly longer than static materials across both in-person and digital distribution contexts."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Strengthen Product Adoption",
    text: "Physicians and patients who clearly understand how a medical device or pharmaceutical works are more likely to adopt and recommend it, making clinical clarity a commercial advantage."
  }
];

const faqs = [
  {
    question: "How Do I Choose the Right Medical Animation Services for Healthcare, Medical Device, or Pharma Projects?",
    answer: "Look for a medical animation studio with documented scientific review processes, a portfolio showing work in your specific clinical category, and a production team that involves clinical advisors rather than animating from a brief alone.",
  },
  {
    question: "Can Startups Afford Professional Medical Animation Services?",
    answer: "Yes. Early-stage medical and biotech companies regularly invest in 3D medical animation for investor presentations and pipeline communication, where visual clarity directly affects funding outcomes.",
  },
  {
    question: "What Should I Look for When Hiring a Medical Animation Company?",
    answer: "Clinical accuracy track record, documented medical review process, portfolio in your therapeutic area, and a production workflow that builds review into the schedule rather than treating it as a final-stage obstacle.",
  },
  {
    question: "What Information Is Needed to Create a Custom 3D Medical Animation?",
    answer: "A clear scientific brief, primary literature references or proprietary data, approved anatomical or structural references, and access to your internal medical or scientific team for accuracy review during production.",
  },
  {
    question: "How Can Medical Animation Services Improve Healthcare Marketing Results?",
    answer: "Medical animation services translate complex mechanisms into clear visual arguments that physicians engage with and remember better than written clinical summaries, improving both HCP recall and product differentiation in competitive markets.",
  },
  {
    question: "Why Is Medical Animation Effective for Patient Education and Awareness?",
    answer: "Patients comprehend visual process explanations significantly faster than written equivalents, particularly for abstract biological mechanisms or procedural steps with which they have no prior reference.",
  },
  {
    question: "What Should Be Included in a Pharmaceutical Animation Project Brief?",
    answer: "The therapeutic mechanism to be depicted, the target audience, the scientific references or data the animation must represent accurately, the regulatory context if applicable, and the distribution channels the animation will be used in.",
  },
  {
    question: "How Detailed Should a Surgical Procedure Medical Animation Be?",
    answer: "The detail level should match the audience and purpose. Patient education animations require procedural clarity without clinical granularity. Surgical training animations require anatomical precision and step-by-step accuracy sufficient for a clinical audience.",
  },
  {
    question: "How Are 3D Medical Animations for Healthcare Professionals Different from Patient Education Videos?",
    answer: "HCP animations can use clinical terminology, show anatomical detail at the level a physician expects, and assume prior scientific knowledge. Patient education animation uses plain language, simplified visual metaphors, and focuses on experience rather than mechanism.",
  },
  {
    question: "What Is the Ideal Length for a Medical Explainer Animation Video?",
    answer: "60 to 90 seconds for patient education and HCP marketing. Two to four minutes for detailed MOA, surgical procedure, and device mechanism animations where clinical completeness matters more than brevity.",
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
      <StatsSection
        heading="A Trusted Animation Company for Medical Animation"
        statsData={statsData}
        variant="gradient"
      />
      <CostSection />
      <ServicesSection
        title="Medical Animation Services for Healthcare and Life Sciences"
        description="Our medical animation production company covers every format a healthcare or life sciences organization needs across marketing, education, and clinical communication."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <HowWeWorkSection
        heading="How Organizations Use Medical Animation Services?"
        description="Medical animation is not a single use case. Healthcare providers use it for patient education. Pharmaceutical companies use it for drug mechanism explainers. Medical device manufacturers use it for surgical training and product demonstrations. Research institutions use it for grant communication. Each application requires a different production approach and a different standard of scientific accuracy."
        accordionData={howWeWorkAccordionData}
      />
      <CooperationModelsSection
        subtitle="Medical Benefits"
        title="Key Benefits of Professional Medical Animation Services"
        description="The case for professional medical animation is not aesthetic — it is clinical and commercial. Patients who understand their condition make better treatment decisions. Healthcare providers who communicate clearly reduce liability exposure. Medical device companies that demonstrate mechanisms visually close sales cycles faster. These are the outcomes professional medical animation is built to deliver, and the standard we hold every project to."
        cards={cooperationModelsCards}
      />
      <WhyInvestSection
        subtitle="THE PROCESS"
        title="Our Proven Medical Animation Production Process"
        description="Most medical animation projects fail due to scientific inaccuracies or misaligned clinical expectations in pre-production. Our production process is structured around continuous medical reviews to resolve accuracy risks before animation begins, ensuring a reliable pathway from script to final clinical approval."
        accordionData={whyInvestAccordionData}
      />
      <TeamStandoutSection
        subtitle="HOW WE WORK"
        title={<>Why Healthcare Brands Trust Our Medical <span>Animation</span> Company?</>}
        description="Most medical animation studios deliver a visual asset. We deliver clinical clarity. Our production process integrates rigorous scientific review cycles and collaborative oversight to ensure every frame meets the highest standards of scientific accuracy and regulatory compliance."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201854908?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TechnologySection />
      <IndustrySection
        heading="Medical Animation Solutions for Every Healthcare Sector"
        description="Our medical animation production company has built specific expertise across each of the following healthcare sectors, applying clinical accuracy standards relevant to each audience."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About Medical Animation Services"
        faqs={faqs}
      />
    </main>
  );
}
