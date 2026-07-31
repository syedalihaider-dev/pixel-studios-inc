import Banner from "@/components/LogoAnimation/Banner";
import StatsSection from "@/components/LogoAnimation/StatsSection";
import ServicesSection from "@/components/LogoAnimation/ServicesSection";
import HowWeWorkSection from "@/components/LogoAnimation/HowWeWorkSection";
import BenefitsSection from "@/components/LogoAnimation/BenefitsSection";
import WhyInvestSection from "@/components/LogoAnimation/WhyInvestSection";
import WhyChooseSection from "@/components/LogoAnimation/WhyChooseSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/LogoAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/LogoAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/LogoAnimation/CooperationModelsSection";
import TestimonialsSlider from "@/components/LogoAnimation/TestimonialsSlider";
import TechnologySection from "@/components/LogoAnimation/TechnologySection";
import FaqSection from "@/components/LogoAnimation/FaqSection";

export const metadata = {
  title: "Logo Animation Services That Bring Your Brand to Life | Pixels Studios",
  description: "Looking for professional logo animation services in the USA? Pixels Studios creates custom 2D and 3D logo animations for every brand. Get your free quote today.",
};

export default function LogoAnimation() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <TeamStandoutSection />
      <PortfolioShowcase />
      <GreatVideosSection />
      <HowWeWorkSection />
      <BenefitsSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <WhyChooseSection />
      <TechnologySection />
      <TestimonialsSlider />
      <FaqSection />
    </main>
  );
}
