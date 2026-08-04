import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/TechnologyAnimation/CostSection";
import ServicesSection from "@/components/TechnologyAnimation/ServicesSection";
import WhyChooseSection from "@/components/TechnologyAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/TechnologyAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/TechnologyAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/TechnologyAnimation/GreatVideosSection";
import FaqSection from "@/components/TechnologyAnimation/FaqSection";

export const metadata = {
  title: "Technology Animation Services | Pixels Studios",
  description: "Pixels Studios' technology animation services turn software, AI, and hardware products into clear video for product launches and marketing.",
};

export default function TechnologyAnimationPage() {
  return (
    <main>
      <Banner
        title="Technology Animation That Sells the Product"
        description="Tech products often work in ways users never see, and that invisibility is exactly what makes them hard to market. Our technology animation services translate software, AI systems, and hardware into video that a customer, investor, or new user can actually understand and act on. Every project is built from your actual product and roadmap, so the animation stays accurate even as your platform continues to evolve and ship new features."
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
