import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/LogisticsAnimation/CostSection";
import ServicesSection from "@/components/LogisticsAnimation/ServicesSection";
import WhyChooseSection from "@/components/LogisticsAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/LogisticsAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/LogisticsAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/LogisticsAnimation/GreatVideosSection";
import FaqSection from "@/components/LogisticsAnimation/FaqSection";

export const metadata = {
  title: "Logistics Animation Service | Pixels Studios",
  description: "Pixels Studios' logistics animation service turns supply chain, warehouse, and fleet operations into clear video for investors, clients, and teams.",
};

export default function LogisticsAnimationPage() {
  return (
    <main>
      <Banner
        title="Logistics Animation That Shows What Your Operation Can Do"
        description="Why do sophisticated logistics operations so often lose deals to companies with better slide decks? Because supply chains are nearly impossible to explain in words and photographs. The scale is too big, the handoffs are too many, and the systems that make your operation impressive are exactly the ones a prospect never gets to see. Our logistics animation service fixes that. Pixels Studios Inc. turns freight networks, warehouse operations, and fleet systems into video that a client, investor, or new hire can follow on the first watch, without a single site visit. Whether you are pitching a new 3PL contract, raising capital, or standardizing safety training across a dozen facilities, the job is the same: make an operation this complex feel simple to understand, and to make that clarity work as hard in a boardroom as it does on a warehouse floor."
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
