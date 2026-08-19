import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/InsuranceAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/InsuranceAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/InsuranceAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/InsuranceAnimation/GreatVideosSection";
import FaqSection from "@/components/InsuranceAnimation/FaqSection";

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
    title: "Insurance Explainer Videos",
    description: "Clear, jargon-free explainer videos for insurance that show what a policy covers, what it does not, and how claims actually work, built to stop confusion before it turns into a support ticket or an abandoned quote.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Insurance Product Videos",
    description: "Product-specific videos across auto insurance animation, health insurance explainer video content, life insurance animation, and property lines, walking customers through coverage tiers so they choose with confidence instead of guessing by price.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Insurance Sales & Pitch Videos",
    description: "Sales enablement video for agents and brokers, giving them one consistent, professional asset that explains complex coverage the same way in every conversation, whatever the rep's experience level.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Customer Testimonial & Trust Videos",
    description: "Animated storytelling that reinforces reliability and support, built to complement real testimonials and strengthen brand trust across marketing channels and renewal campaigns.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Educational Insurance Videos",
    description: "Broader educational content covering how insurance works, common terms, and the claims process, used to build long-term brand authority and ease first-time buyer anxiety about an unfamiliar purchase.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Insurance Animation Services | Pixel Studios",
  description: "Pixel Studios' insurance animation services turn complex policies, claims, and coverage into clear video for customers, agents, and marketing.",
};

export default function InsuranceAnimationPage() {
  return (
    <main>
      <Banner
        title="Insurance Animation That Turns Fine Print into Trust"
        description="Why do insurance customers call support with questions the policy document already answers? Because insurance is built on fine print, and fine print rarely convinces or clarifies anything. Our insurance animation services translate policies, claims processes, and coverage details into video that customers actually understand, reducing confusion before it becomes a support ticket or a lost sale. Pixel Studios Inc. builds every insurance explainer to stay accurate to your actual policy language while remaining genuinely easy to follow, with your compliance team reviewing each stage before anything reaches a customer. From product explainers to claims walkthroughs, the goal is a brand that feels human and transparent in an industry that often feels the opposite."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Insurance"
        description="What does a complete insurance animation video services offering look like? Five formats covering the entire customer relationship, from the first quote to the renewal notice, each built to reduce a specific point of confusion."
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
