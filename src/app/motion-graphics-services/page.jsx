import Banner from "@/components/WhiteboardAnimation/Banner";
import StatsSection from "@/components/WhiteboardAnimation/StatsSection";
import ServicesSection from "@/components/WhiteboardAnimation/ServicesSection";
import HowWeWorkSection from "@/components/WhiteboardAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/WhiteboardAnimation/WhyInvestSection";
import AnimationPortfolio from "@/components/WhiteboardAnimation/AnimationPortfolio";
import TeamStandoutSection from "@/components/WhiteboardAnimation/TeamStandoutSection";
import WonderingSection from "@/components/WhiteboardAnimation/WonderingSection";
import CooperationModelsSection from "@/components/WhiteboardAnimation/CooperationModelsSection";
import TestimonialsSlider from "@/components/WhiteboardAnimation/TestimonialsSlider";
import TechnologySection from "@/components/WhiteboardAnimation/TechnologySection";
import IndustrySection from "@/components/WhiteboardAnimation/IndustrySection";
import TestimonialSection from "@/components/WhiteboardAnimation/TestimonialSection";
import FaqSection from "@/components/WhiteboardAnimation/FaqSection";


export const metadata = {
  title: "Whiteboard Animation Services | Pixels Studios Inc.",
  description: "Professional whiteboard animation services for explainer videos, training, and marketing. Pixels Studios Inc. delivers clear, compelling whiteboard animation videos built to educate and convert.",
};

export default function WhiteboardAnimation() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <AnimationPortfolio />
      <TeamStandoutSection />
      <WonderingSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialsSlider />
      <TechnologySection />
      <TestimonialSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
