import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/GameAnimation/StatsSection";
import CostSection from "@/components/GameAnimation/CostSection";
import FullCycleSection from "@/components/GameAnimation/FullCycleSection";
import WhyChooseSection from "@/components/GameAnimation/WhyChooseSection";
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


export const metadata = {
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
      <WhyChooseSection />
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
