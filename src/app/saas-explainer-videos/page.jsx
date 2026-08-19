import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/SaasExplainerVideo/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/SaasExplainerVideo/WhyInvestSection";
import CooperationModelsSection from "@/components/SaasExplainerVideo/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/SaasExplainerVideo/GreatVideosSection";
import FaqSection from "@/components/SaasExplainerVideo/FaqSection";

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
    title: "Explainer Videos",
    description: "A focused SaaS explainer video built around your core value proposition: the problem, the solution, and the outcome. Sized to hold attention on a homepage without losing the audience halfway, and structured to lead naturally into a signup or demo request.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Product Demo Videos",
    description: "Deeper saas demo video content walking through actual workflows and features, built for sales enablement, gated landing pages, and prospects further along the buying journey who need more than a quick pitch before committing.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "UI Animation",
    description: "Animated recreations of your actual interface: clean, on-brand, and easy to update. Your product looks polished on screen even before a feature ships or a redesign is finalized, and stays consistent across every video you produce.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Supporting motion graphics for feature announcements, in-app messaging, social content, and investor decks, built to match your brand system and reused across channels without a fresh production each time.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "SaaS Explainer Video Services | Pixel Studios",
  description: "Pixel Studios' SaaS explainer video services turn complex software into clear, conversion-focused video for onboarding, demos, and sales.",
};

export default function SaasExplainerVideoPage() {
  return (
    <main>
      <Banner
        title="SaaS Explainer Videos That Turn Visitors into Signups"
        description="Why do great products lose signups on the homepage? Because software sells itself only after someone understands what it does, and most visitors bounce before they get there. Our SaaS explainer video services close that gap, translating complex product logic, workflows, and interfaces into video a prospect can absorb in under two minutes. Pixel Studios Inc. builds every video as the sales asset it is, not a design exercise. We work directly from your actual UI, brand system, and buyer personas rather than a generic SaaS template, so the finished video moves people from confused to convinced without a live demo call, and keeps working across your homepage, onboarding flow, and sales deck at the same time. One production, three jobs, and a video library that grows with your product instead of going stale the moment you ship your next release."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for SaaS"
        description="What should saas explainer video services actually deliver beyond a single homepage video? These four formats cover the full funnel, from first visit to activated user, and they are built to share assets so your library grows without rework."
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
