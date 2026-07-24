import Banner from "@/components/ProductAnimation3D/Banner";
import StatsSection from "@/components/ProductAnimation3D/StatsSection";
import ServicesSection from "@/components/ProductAnimation3D/ServicesSection";
import CostSection from "@/components/ProductAnimation3D/CostSection"
import HowWeWorkSection from "@/components/ProductAnimation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/ProductAnimation3D/WhyInvestSection";
import AnimationPortfolio from "@/components/ProductAnimation3D/AnimationPortfolio";
import GreatVideosSection from "@/components/ProductAnimation3D/GreatVideosSection";
import TeamStandoutSection from "@/components/ProductAnimation3D/TeamStandoutSection";
import CooperationModelsSection from "@/components/ProductAnimation3D/CooperationModelsSection";
import SoftwareSection from "@/components/ProductAnimation3D/SoftwareSection";
import IndustrySection from "@/components/ProductAnimation3D/IndustrySection";
import TestimonialSection from "@/components/ProductAnimation3D/TestimonialSection";
import FaqSection from "@/components/ProductAnimation3D/FaqSection";


export const metadata = {
  title: "Conversion-Focused 3D Product Animation Services | Pixels Studios",
  description: "Need 3D product animation services that drive conversions? Pixels Studios builds custom product animations for eCommerce, industrial, and consumer brands.",
};

export default function TitlesAndProductAnimation3D() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <TeamStandoutSection />
      <AnimationPortfolio />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <SoftwareSection />
      <WhyInvestSection />
      <GreatVideosSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
