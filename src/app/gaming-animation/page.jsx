import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/GamingAnimation/CostSection";
import ServicesSection from "@/components/GamingAnimation/ServicesSection";
import WhyChooseSection from "@/components/GamingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/GamingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/GamingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/GamingAnimation/GreatVideosSection";
import FaqSection from "@/components/GamingAnimation/FaqSection";

export const metadata = {
  title: "Game Animation Services | Pixels Studios",
  description: "Pixels Studios' game animation services deliver character, environment, and cinematic animation for developers and publishers of every scale.",
};

export default function GamingAnimationPage() {
  return (
    <main>
      <Banner
        title="Game Animation Built to Ship On Time"
        description="Development timelines rarely leave room for animation bottlenecks. Our game animation services provide character, environment, and cinematic work as a flexible extension of your studio, scaling up during crunch and down between production cycles without the overhead of a full internal team. Every engagement is built around your existing art bible and pipeline, so outsourced work integrates cleanly rather than looking like it came from a different game entirely."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection />
      <WhyChooseSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
