import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/ArchitectureAnimation/CostSection";
import ServicesSection from "@/components/ArchitectureAnimation/ServicesSection";
import WhyChooseSection from "@/components/ArchitectureAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/ArchitectureAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/ArchitectureAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/ArchitectureAnimation/GreatVideosSection";
import FaqSection from "@/components/ArchitectureAnimation/FaqSection";

export const metadata = {
  title: "Architecture Animation Service | Pixels Studios",
  description: "Pixels Studios' architecture animation service turns architectural drawings into photorealistic renderings, walkthroughs, and CGI presentations.",
};

export default function ArchitectureAnimationPage() {
  return (
    <main>
      <Banner
        title="Architecture Animation That Sells the Vision"
        description="Why do so many strong architectural designs fail to win approval or investment? Because a 2D drawing asks clients, boards, and committees to imagine a building rather than see it. Our architecture animation service turns your plans into photorealistic renderings and walkthroughs that make the design decision easy. Every project is built directly from your architectural drawings and CAD files, so what a client sees on screen matches what your team actually designed, down to the materials and lighting."
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
