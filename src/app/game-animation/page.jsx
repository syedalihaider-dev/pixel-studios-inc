import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/GameAnimation/StatsSection";
import CostSection from "@/components/GameAnimation/CostSection";
import FullCycleSection from "@/components/GameAnimation/FullCycleSection";

import GameArtSection from "@/components/GameAnimation/GameArtSection";
import DistinguishesSection from "@/components/GameAnimation/DistinguishesSection";
import GreatVideosSection from "@/components/GameAnimation/GreatVideosSection";
import EnginesSection from "@/components/GameAnimation/EnginesSection";
import WonderingSection from "@/components/GameAnimation/WonderingSection";
import ProjectsSection from "@/components/GameAnimation/ProjectsSection";
import WhyInvestSection from "@/components/GameAnimation/WhyInvestSection";
import AnimationServicesSection from "@/components/GameAnimation/AnimationServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import HowWeWorkSection from "@/components/GameAnimation/HowWeWorkSection";
import CooperationModelsSection from "@/components/GameAnimation/CooperationModelsSection";
import ProjectCostSection from "@/components/GameAnimation/ProjectCostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/GameAnimation/FaqSection";


export const whyChooseSectionFeatures = [
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

const metadata = {
  title: "Professional Game Animation Services for Engaging Gameplay | Pixel Studios",
  description: "Need game animation services that make players feel the weight of every move? Pixel Studios delivers 2D and 3D game animation for Unity, Unreal, and any engine.",
};

export default function GameAnimationPage() {
  return (
    <main>
      <Banner
        title="Professional Game Animation Services for Engaging Gameplay Experiences."
        description="Pixel Studios produces game animation services built around the end state: animation that performs correctly in the engine, transitions cleanly between states, and communicates the character"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <FullCycleSection />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <GameArtSection />
      <DistinguishesSection />
      <HowWeWorkSection />
      <GreatVideosSection />
      <EnginesSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <ProjectsSection />
      <AnimationServicesSection />
      <PortfolioShowcase />
      <ProjectCostSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
