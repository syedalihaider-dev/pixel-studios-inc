import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/CharacterAnimation/StatsSection";
import ServicesSection from "@/components/CharacterAnimation/ServicesSection";
import WhyInvestSection from "@/components/CharacterAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/CharacterAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/CharacterAnimation/TeamStandoutSection";
import HowWeWorkSection from "@/components/CharacterAnimation/HowWeWorkSection";
import CooperationModelsSection from "@/components/CharacterAnimation/CooperationModelsSection";
import RiggingSection from "@/components/CharacterAnimation/RiggingSection";
import WonderingSection from "@/components/CharacterAnimation/WonderingSection";
import BenefitsSection from "@/components/CharacterAnimation/BenefitsSection";
import CharacterWhyChooseSection from "@/components/CharacterAnimation/CharacterWhyChooseSection";
import AnimationPricingSection from "@/components/CharacterAnimation/AnimationPricingSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/CharacterAnimation/FaqSection";


export const metadata = {
  title: "Professional Character Animation Services | Pixels Studios",
  description: "Need character animation that makes audiences feel something? Pixels Studios delivers 2D and 3D character animation for games, film, marketing, and corporate content.",
};

export default function CharacterAnimationPage() {
  return (
    <main>
      <Banner
        title="Professional Character Animation Services"
        description="A character animation that is technically correct but emotionally empty is one of the most expensive production failures in animated content. It is expensive because it passes every quality checklist, ships on time, and then fails the only test that matters: the audience either connects with the character or they do not. The connection is not produced by correct timing and clean splines. It is produced by the weight, the intention, and the small imperfections of motion that make an animated character feel like it is making decisions rather than executing a motion path. At Pixels Studios Inc., our character animation services are built around that distinction. We produce animations that audiences believe."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <PortfolioShowcase />
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
