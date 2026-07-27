import Banner from "@/components/AnimationAI/Banner";
import StatsSection from "@/components/AnimationAI/StatsSection";
import ServicesSection from "@/components/AnimationAI/ServicesSection";
import CostSection from "@/components/AnimationAI/CostSection"
import HowWeWorkSection from "@/components/AnimationAI/HowWeWorkSection";
import WhyInvestSection from "@/components/AnimationAI/WhyInvestSection";
import StepProcessSection from "@/components/AnimationAI/StepProcessSection";
import TestimonialsSlider from "@/components/AnimationAI/TestimonialsSlider";
import AnimationPortfolio from "@/components/AnimationAI/AnimationPortfolio";
import GreatVideosSection from "@/components/AnimationAI/GreatVideosSection";
import IndustrySection from "@/components/AnimationAI/IndustrySection";
import TestimonialSection from "@/components/AnimationAI/TestimonialSection";
import FaqSection from "@/components/AnimationAI/FaqSection";


export const metadata = {
  title: "AI Animation Services for Smart, Scalable Storytelling | Pixels Studios",
  description: "AI animation services that combine the speed of AI with the creative control your brand actually needs. Pixels Studios delivers AI-powered animation without the uncanny valley. Get a quote.",
};

export default function AnimationAIPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <AnimationPortfolio />
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
