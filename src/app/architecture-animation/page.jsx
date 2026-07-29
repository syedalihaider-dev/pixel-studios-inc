import Banner from "@/components/ArchitectureAnimation/Banner";
import CostSection from "@/components/ArchitectureAnimation/CostSection";
import ServicesSection from "@/components/ArchitectureAnimation/ServicesSection";
import WhyChooseSection from "@/components/ArchitectureAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/ArchitectureAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/ArchitectureAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/ArchitectureAnimation/TestimonialSection";
import GreatVideosSection from "@/components/ArchitectureAnimation/GreatVideosSection";
import FaqSection from "@/components/ArchitectureAnimation/FaqSection";

export const metadata = {
  title: "Architecture Animation Service | Pixels Studios",
  description: "Pixels Studios' architecture animation service turns architectural drawings into photorealistic renderings, walkthroughs, and CGI presentations.",
};

export default function ArchitectureAnimationPage() {
  return (
    <main>
      <Banner />
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
