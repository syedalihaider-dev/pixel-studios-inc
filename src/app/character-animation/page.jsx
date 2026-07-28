import Banner from "@/components/CharacterAnimation/Banner";
import StatsSection from "@/components/CharacterAnimation/StatsSection";
import ServicesSection from "@/components/CharacterAnimation/ServicesSection";
import WhyInvestSection from "@/components/CharacterAnimation/WhyInvestSection";
import AnimationPortfolio from "@/components/CharacterAnimation/AnimationPortfolio";
import GreatVideosSection from "@/components/CharacterAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/CharacterAnimation/TeamStandoutSection";
import HowWeWorkSection from "@/components/CharacterAnimation/HowWeWorkSection";
import CooperationModelsSection from "@/components/CharacterAnimation/CooperationModelsSection";
import RiggingSection from "@/components/CharacterAnimation/RiggingSection";
import WonderingSection from "@/components/CharacterAnimation/WonderingSection";
import BenefitsSection from "@/components/CharacterAnimation/BenefitsSection";
import CharacterWhyChooseSection from "@/components/CharacterAnimation/CharacterWhyChooseSection";
import AnimationPricingSection from "@/components/CharacterAnimation/AnimationPricingSection";
import TestimonialSection from "@/components/CharacterAnimation/TestimonialSection";
import FaqSection from "@/components/CharacterAnimation/FaqSection";


export const metadata = {
  title: "Professional Character Animation Services | Pixels Studios",
  description: "Need character animation that makes audiences feel something? Pixels Studios delivers 2D and 3D character animation for games, film, marketing, and corporate content.",
};

export default function CharacterAnimationPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <AnimationPortfolio />
      <GreatVideosSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <WonderingSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <RiggingSection />
      <BenefitsSection />
      <CharacterWhyChooseSection />
      <AnimationPricingSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
