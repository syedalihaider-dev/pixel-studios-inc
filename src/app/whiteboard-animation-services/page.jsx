import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/WhiteboardAnimation/StatsSection";
import ServicesSection from "@/components/WhiteboardAnimation/ServicesSection";
import HowWeWorkSection from "@/components/WhiteboardAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/WhiteboardAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/WhiteboardAnimation/TeamStandoutSection";
import WonderingSection from "@/components/WhiteboardAnimation/WonderingSection";
import CooperationModelsSection from "@/components/WhiteboardAnimation/CooperationModelsSection";
import TestimonialsSlider from "@/components/WhiteboardAnimation/TestimonialsSlider";
import TechnologySection from "@/components/WhiteboardAnimation/TechnologySection";
import IndustrySection from "@/components/WhiteboardAnimation/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/WhiteboardAnimation/FaqSection";


export const metadata = {
  title: "Whiteboard Animation Services | Pixels Studios Inc.",
  description: "Professional whiteboard animation services for explainer videos, training, and marketing. Pixels Studios Inc. delivers clear, compelling whiteboard animation videos built to educate and convert.",
};

export default function WhiteboardAnimation() {
  return (
    <main>
      <Banner
        title="Whiteboard Animation Services for Branding, Training, & Marketing"
        description="Most animated videos are forgotten within 48 hours. Whiteboard animation videos are not, because the format does something other styles cannot: it removes every visual distraction and makes the viewer watch the idea being built in real time. That sustained attention is not an accident. It is the format working exactly as intended.  At Pixels Studios Inc., our professional whiteboard animation services are built around one objective: keeping your audience watching long enough to understand, believe, and act."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <PortfolioShowcase />
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
