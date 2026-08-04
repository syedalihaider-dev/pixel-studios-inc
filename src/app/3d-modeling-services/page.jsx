import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Modeling3D/StatsSection";
import ServicesSection from "@/components/Modeling3D/ServicesSection";
import CostSection from "@/components/Modeling3D/CostSection"
import HowWeWorkSection from "@/components/Modeling3D/HowWeWorkSection";
import WhyInvestSection from "@/components/Modeling3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Modeling3D/GreatVideosSection";
import TeamStandoutSection from "@/components/Modeling3D/TeamStandoutSection";
import CooperationModelsSection from "@/components/Modeling3D/CooperationModelsSection";
import TechnologySection from "@/components/Modeling3D/TechnologySection";
import IndustrySection from "@/components/Modeling3D/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Modeling3D/FaqSection";


export const metadata = {
  title: "3D Modeling Services for Businesses | Pixel Studios",
  description: "Need professional 3D modeling services? Pixel Studios builds custom 3D models for products, characters, games, and more. Get a free quote today.",
};

export default function Modeling3DPage() {
  return (
    <main>
      <Banner
        title="High-Impact 3D Modeling Services for Businesses"
        description="Why do so many 3D projects stall at the modeling stage before the animation even starts? Most 3D modeling companies treat the model as a technical checkbox instead of the foundation on which the entire project depends. A flawed model means every downstream stage, texturing, rigging, and rendering, inherits the flaw, and fixing geometry problems after a project is already in production costs far more than getting the topology right the first time. Pixel Studios Inc. provides professional 3D modeling services built to be production-ready from the first export: accurate topology, clean UVs, and a level of detail calibrated to exactly how the asset will be used."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <TeamStandoutSection />
      <GreatVideosSection />
      <TechnologySection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
