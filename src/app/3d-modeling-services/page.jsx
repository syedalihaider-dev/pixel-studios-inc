import Banner from "@/components/Modeling3D/Banner";
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
  title: "3D Modeling Services for Businesses | Pixels Studios",
  description: "Need professional 3D modeling services? Pixels Studios builds custom 3D models for products, characters, games, and more. Get a free quote today.",
};

export default function Modeling3DPage() {
  return (
    <main>
      <Banner />
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
