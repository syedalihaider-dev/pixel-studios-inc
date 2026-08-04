import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/ManufacturingAnimation/CostSection";
import ServicesSection from "@/components/ManufacturingAnimation/ServicesSection";
import WhyChooseSection from "@/components/ManufacturingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/ManufacturingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/ManufacturingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/ManufacturingAnimation/GreatVideosSection";
import FaqSection from "@/components/ManufacturingAnimation/FaqSection";

export const metadata = {
  title: "Manufacturing Animation Services | Pixels Studios",
  description: "Pixels Studios' manufacturing animation services turn production processes, machinery, and safety training into clear, accurate video content.",
};

export default function ManufacturingAnimationPage() {
  return (
    <main>
      <Banner
        title="Manufacturing Animation That Shows the Process"
        description="Manufacturing floors are hard to film and even harder to explain in a sales deck. Our manufacturing animation services turn production processes, machinery, and safety procedures into clear video, built directly from your engineering data for accuracy on every frame. Every project starts with your CAD files or process documentation, so what appears on screen matches what actually happens on your production line, not a generic stand-in. From assembly lines to safety training, the same production process supports every part of your communication needs."
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
