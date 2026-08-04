import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/HybridAnimation/StatsSection";
import CostSection from "@/components/HybridAnimation/CostSection";
import ServicesSection from "@/components/HybridAnimation/ServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/HybridAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/HybridAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/HybridAnimation/CooperationModelsSection";
import HowWeWorkSection from "@/components/HybridAnimation/HowWeWorkSection";
import WonderingSection from "@/components/HybridAnimation/WonderingSection";
import WhyInvestSection from "@/components/HybridAnimation/WhyInvestSection";
import AnimationServicesSection from "@/components/HybridAnimation/AnimationServicesSection";
import ProjectCostSection from "@/components/HybridAnimation/ProjectCostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/HybridAnimation/FaqSection";


export const metadata = {
  title: "Hybrid & Cel Animation Services for Unique and Expressive Visual Storytelling | Pixels Studios",
  description: "Need cel animation or hybrid 2D/3D production with genuine craft behind it? Pixels Studios delivers traditional cel, digital cel, and hybrid animation for brands and creators who want a distinctive visual identity.",
};

export default function HybridAnimationPage() {
  return (
    <main>
      <Banner
        title="Hybrid and Cel Animation Services for Unique and Expressive Visual Storytelling"
        description="Cel animation and hybrid 2D/3D production are slower and more labor-intensive than puppet rigging, and that additional labor is exactly what produces the handcrafted visual texture that makes content look like it was made by artists rather than assembled from a template library. Pixels Studios Inc. produces hybrid and cel animation for brands and creators who understand that distinctiveness is a competitive advantage worth the additional production investment."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <PortfolioShowcase />
      <GreatVideosSection />
      <TeamStandoutSection />
      <CooperationModelsSection />
      <HowWeWorkSection />
      <WonderingSection />
      <WhyInvestSection />
      <AnimationServicesSection />
      <ProjectCostSection />
      <TestimonialSection />
      <FaqSection />





      {/* <ProjectsSection />
      <WhyChooseSection />
      <EnginesSection />
      <DistinguishesSection />
      <FullCycleSection />
      <GameArtSection />
      <RiggingSection />
      <BenefitsSection />
      <CharacterWhyChooseSection />
      <AnimationPricingSection /> */}
    </main>
  );
}
