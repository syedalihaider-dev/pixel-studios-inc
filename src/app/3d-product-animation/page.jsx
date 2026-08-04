import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/ProductAnimation3D/StatsSection";
import ServicesSection from "@/components/ProductAnimation3D/ServicesSection";
import CostSection from "@/components/ProductAnimation3D/CostSection"
import HowWeWorkSection from "@/components/ProductAnimation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/ProductAnimation3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/ProductAnimation3D/GreatVideosSection";
import TeamStandoutSection from "@/components/ProductAnimation3D/TeamStandoutSection";
import CooperationModelsSection from "@/components/ProductAnimation3D/CooperationModelsSection";
import WonderingSection from "@/components/ProductAnimation3D/WonderingSection";
import IndustrySection from "@/components/ProductAnimation3D/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/ProductAnimation3D/FaqSection";


export const metadata = {
  title: "Conversion-Focused 3D Product Animation Services | Pixels Studios",
  description: "Need 3D product animation services that drive conversions? Pixels Studios builds custom product animations for eCommerce, industrial, and consumer brands.",
};

export default function TitlesAndProductAnimation3D() {
  return (
    <main>
      <Banner
        title="Conversion-Focused 3D Product Animation Services"
        description="Pixels Studios Inc. builds 3D product animation services around the specific objection or question your audience needs resolved before they buy. We are a dedicated 3D product animation company producing product launch animation, eCommerce product animation, and industrial product animation for brands across the USA, and every animation is built to move a buyer closer to a decision, not just look good in a portfolio reel. Whether you need to hire product animators for a single hero asset or outsource product animation services across a full catalog, the strategy comes before the render."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <TeamStandoutSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <GreatVideosSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <WonderingSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
