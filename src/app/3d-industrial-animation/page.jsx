import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/IndustrialAnimation3D/StatsSection";
import ServicesSection from "@/components/IndustrialAnimation3D/ServicesSection";
import CostSection from "@/components/IndustrialAnimation3D/CostSection"
import HowWeWorkSection from "@/components/IndustrialAnimation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/IndustrialAnimation3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/IndustrialAnimation3D/GreatVideosSection";
import TeamStandoutSection from "@/components/IndustrialAnimation3D/TeamStandoutSection";
import CooperationModelsSection from "@/components/IndustrialAnimation3D/CooperationModelsSection";
import TechnologySection from "@/components/IndustrialAnimation3D/TechnologySection";
import IndustrySection from "@/components/IndustrialAnimation3D/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/IndustrialAnimation3D/FaqSection";


export const metadata = {
  title: "3D Industrial Animation Services for Modern Industries | Pixel Studios",
  description: "Need 3D industrial animation services that engineers actually trust? Pixel Studios builds technically accurate animation for manufacturing and industrial brands.",
};

export default function IndustrialAnimation3DPage() {
  return (
    <main>
      <Banner
        title="Advanced 3D Industrial Animation Services for Modern Industries"
        description="We are a dedicated industrial animation studio working directly from CAD models, engineering drawings, and SolidWorks, AutoCAD, or Autodesk Inventor files to produce industrial process animation that production teams, engineering teams, and safety officers all sign off on without hesitation. Whether you need manufacturing animation services for a plant walkthrough or industrial equipment animation for a sales presentation, the technical accuracy is never negotiable, and neither is the production quality that makes the final asset usable in front of investors and customers alike."
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
