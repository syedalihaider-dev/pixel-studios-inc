import Banner from "@/components/Common/Banner/Banner";
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
  title: "Logo Animation Services That Bring Your Brand to Life | Pixel Studios",
  description: "Looking for professional logo animation services in the USA? Pixel Studios creates custom 2D and 3D logo animations for every brand. Get your free quote today.",
};

export default function LogoAnimation() {
  return (
    <main>
      <Banner
        title="Logo Animation Services That Bring Your Brand to Life"
        description="At Pixel Studios Inc., our logo animation services are built around that philosophy. We create custom logo animation that turns a static mark into a living piece of brand communication, from clean 2D logo animation for digital environments to cinematic 3D logo animation for broadcast-quality productions. We are the logo animation company brands across the USA come to when they want a brand intro that earns attention rather than borrows it."
        video="/videos/home.webm"
        showPlayButton={true}
      />
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
