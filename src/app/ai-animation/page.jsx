import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/AnimationAI/StatsSection";
import ServicesSection from "@/components/AnimationAI/ServicesSection";
import CostSection from "@/components/AnimationAI/CostSection"
import HowWeWorkSection from "@/components/AnimationAI/HowWeWorkSection";
import WhyInvestSection from "@/components/AnimationAI/WhyInvestSection";
import StepProcessSection from "@/components/AnimationAI/StepProcessSection";
import TestimonialsSlider from "@/components/AnimationAI/TestimonialsSlider";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/AnimationAI/GreatVideosSection";
import IndustrySection from "@/components/AnimationAI/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimationAI/FaqSection";


export const metadata = {
  title: "AI Animation Services for Smart, Scalable Storytelling | Pixels Studios",
  description: "AI animation services that combine the speed of AI with the creative control your brand actually needs. Pixels Studios delivers AI-powered animation without the uncanny valley. Get a quote.",
};

export default function AnimationAIPage() {
  return (
    <main>
      <Banner
        title="AI Animation Services for Smart, Scalable Storytelling"
        description="At Pixels Studios Inc., our AI animation services combine the production velocity that AI tools now make possible with the creative direction, quality control, and strategic thinking that AI cannot replace. The result is an animation that is faster than traditional production and better than unmanaged AI output. Both things at once."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <PortfolioShowcase />
      <GreatVideosSection />
      <HowWeWorkSection />
      <WhyInvestSection />
      <StepProcessSection />
      <TestimonialsSlider />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
