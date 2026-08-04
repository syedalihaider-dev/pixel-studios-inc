import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/FintechAnimation/CostSection";
import ServicesSection from "@/components/FintechAnimation/ServicesSection";
import WhyChooseSection from "@/components/FintechAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/FintechAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/FintechAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/FintechAnimation/GreatVideosSection";
import FaqSection from "@/components/FintechAnimation/FaqSection";

export const metadata = {
  title: "Fintech Animation Service | Pixel Studios",
  description: "Pixel Studios' fintech animation service turns complex financial products, data, and compliance into clear video for users, investors, and regulators.",
};

export default function FintechAnimationPage() {
  return (
    <main>
      <Banner
        title="Fintech Animation That Builds Financial Trust"
        description="Why do so many fintech products get built brilliantly and explained badly? Because financial concepts are abstract, regulated, and often invisible on screen. Our fintech animation service turns payments, data, and compliance into video that users, investors, and regulators actually understand, without losing the accuracy your industry demands."
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
