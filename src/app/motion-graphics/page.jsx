import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/MotionGraphics/StatsSection";
import ServicesSection from "@/components/MotionGraphics/ServicesSection";
import HowWeWorkSection from "@/components/MotionGraphics/HowWeWorkSection";
import WhyInvestSection from "@/components/MotionGraphics/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
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
  title: "Motion Graphics Services for Brands & Campaigns | Pixel Studios",
  description: "Need professional motion graphics services in the USA? Pixel Studios delivers brand, product, and campaign motion graphics that convert. Get your free quote today.",
};

export default function MotionGraphics() {
  return (
    <main>
      <Banner
        title="Motion Graphics Services for Brands, Products, and Marketing Campaigns."
        description="At Pixel Studios Inc., our motion graphics services start with a business objective and build backward from there. What does the viewer need to understand? What do they do next? Every keyframe, transition, and piece of animated typography we produce answers those two questions first. We deliver motion graphics design services for brands, product teams, and marketing campaigns across the USA, and our motion graphics animation services in the United States markets are built to convert attention into action from day one."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <PortfolioShowcase />
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
