import Banner from "@/components/GameAnimation/Banner";
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
import AnimationPortfolio from "@/components/GameAnimation/AnimationPortfolio";
import HowWeWorkSection from "@/components/GameAnimation/HowWeWorkSection";
import CooperationModelsSection from "@/components/GameAnimation/CooperationModelsSection";
import ProjectCostSection from "@/components/GameAnimation/ProjectCostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/GameAnimation/FaqSection";


export const metadata = {
  title: "Professional Game Animation Services for Engaging Gameplay | Pixels Studios",
  description: "Need game animation services that make players feel the weight of every move? Pixels Studios delivers 2D and 3D game animation for Unity, Unreal, and any engine.",
};

export default function GameAnimationPage() {
  return (
    <main>
      <Banner />
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
      <AnimationPortfolio />
      <ProjectCostSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
