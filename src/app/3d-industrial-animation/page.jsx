import Banner from "@/components/IndustrialAnimation3D/Banner";
import StatsSection from "@/components/IndustrialAnimation3D/StatsSection";
import ServicesSection from "@/components/IndustrialAnimation3D/ServicesSection";
import CostSection from "@/components/IndustrialAnimation3D/CostSection"
import HowWeWorkSection from "@/components/IndustrialAnimation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/IndustrialAnimation3D/WhyInvestSection";
import AnimationPortfolio from "@/components/IndustrialAnimation3D/AnimationPortfolio";
import GreatVideosSection from "@/components/IndustrialAnimation3D/GreatVideosSection";
import TeamStandoutSection from "@/components/IndustrialAnimation3D/TeamStandoutSection";
import CooperationModelsSection from "@/components/IndustrialAnimation3D/CooperationModelsSection";
import TechnologySection from "@/components/IndustrialAnimation3D/TechnologySection";
import IndustrySection from "@/components/IndustrialAnimation3D/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/IndustrialAnimation3D/FaqSection";


export const metadata = {
  title: "3D Industrial Animation Services for Modern Industries | Pixels Studios",
  description: "Need 3D industrial animation services that engineers actually trust? Pixels Studios builds technically accurate animation for manufacturing and industrial brands.",
};

export default function IndustrialAnimation3DPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <AnimationPortfolio />
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
