import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/HealthcareAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/HealthcareAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/HealthcareAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/HealthcareAnimation/GreatVideosSection";
import FaqSection from "@/components/HealthcareAnimation/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: 'Experienced Motion Designers',
    description: "Our motion design team has produced logo animation for brands across consumer, corporate, entertainment, technology, and healthcare sectors with genuinely cross-industry experience.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Animation Concepts',
    description: "Every project begins with original concept development. No stock motion paths or template effects. Custom logo animation built specifically for each brand.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Fast Turnaround Times',
    description: "Most logo animation projects complete in one to two weeks from brief sign-off. Rush production available for campaign launch windows.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Dedicated Project Management',
    description: "One project manager from brief to delivery. Every milestone is dated. Every update is proactive.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'High-Quality Motion Design',
    description: "Professional logo animation produced to broadcast-quality standards regardless of the distribution platform. Quality is the baseline, not a premium tier.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Multiple Export Formats',
    description: "Delivery in MP4, transparent-background MOV, GIF, and source files. Platform-specific exports for social, web, and broadcast included in standard packages.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Flexible Cooperation Models',
    description: "Project-based, retainer, or dedicated team models. We adapt to your needs, timelines, and budget with transparent terms and no surprises.",
    icon: '/icons/experienced.png'
  },
  {
    id: 8,
    title: 'Brand-Centric Animation Strategy',
    description: "Every animation starts with your brand goals. We define the objective first, then select the right animation style to match your message and audience.",
    icon: '/icons/experienced.png'
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Medical Animation",
    description:
      "Anatomically accurate medical animation explaining conditions, procedures, and treatment mechanisms for patient and provider audiences, verified against clinical source material.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation",
    description:
      "Detailed 3D surgical animations and device visualization built from medical imaging, CAD, or engineering data for precision at every stage of the procedure.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description:
      "Clear explainer videos that introduce a condition, treatment, or device in language patients and non-specialist audiences can follow without a medical background.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Training Videos",
    description:
      "Clinical and sales training video content that gives providers and reps a consistent, accurate way to explain a device or procedure to every patient or prospect.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Healthcare Animation Services | Pixel Studios",
  description: "Pixel Studios' healthcare animation services deliver medically accurate 3D animation, patient education, and device training videos.",
};

export default function HealthcareAnimationPage() {
  return (
    <main>
      <Banner
        title="Healthcare Animation Built on Medical Accuracy"
        description="Patients understand a diagnosis better when they can see it. Our healthcare animation services translate anatomy, procedures, and medical devices into video that patients, providers, and sales teams can follow, verified for accuracy at every stage of production. Every animation is checked against your clinical source material by qualified reviewers before delivery, so the finished video stays medically accurate as well as genuinely easy to understand."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Healthcare"
        description="What does a complete healthcare animation offering need to cover, from the clinic to the sales floor? These four formats span patient-facing education through internal clinical training, all verified for medical accuracy before delivery."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
