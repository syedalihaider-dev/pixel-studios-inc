import Banner from "@/components/MotionGraphics/Banner";
import StatsSection from "@/components/MotionGraphics/StatsSection";
import ServicesSection from "@/components/MotionGraphics/ServicesSection";
import HowWeWorkSection from "@/components/MotionGraphics/HowWeWorkSection";
import WhyInvestSection from "@/components/MotionGraphics/WhyInvestSection";
import AnimationPortfolio from "@/components/MotionGraphics/AnimationPortfolio";
import GreatVideosSection from "@/components/MotionGraphics/GreatVideosSection";
import TeamStandoutSection from "@/components/MotionGraphics/TeamStandoutSection";
import CooperationModelsSection from "@/components/MotionGraphics/CooperationModelsSection";
import TestimonialsSlider from "@/components/MotionGraphics/TestimonialsSlider";
import TechnologySection from "@/components/MotionGraphics/TechnologySection";
import SoftwareSection from "@/components/MotionGraphics/SoftwareSection";
import IndustrySection from "@/components/MotionGraphics/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/MotionGraphics/FaqSection";


export const metadata = {
  title: "Motion Graphics Services for Brands & Campaigns | Pixels Studios",
  description: "Need professional motion graphics services in the USA? Pixels Studios delivers brand, product, and campaign motion graphics that convert. Get your free quote today.",
};

export default function MotionGraphics() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <AnimationPortfolio />
      <GreatVideosSection />
      <WhyInvestSection />
      <TechnologySection />
      <SoftwareSection />
      <TestimonialsSlider />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
