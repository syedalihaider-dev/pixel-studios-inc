import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/FinanceAnimation/CostSection";
import ServicesSection from "@/components/FinanceAnimation/ServicesSection";
import WhyChooseSection from "@/components/FinanceAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/FinanceAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/FinanceAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/FinanceAnimation/GreatVideosSection";
import FaqSection from "@/components/FinanceAnimation/FaqSection";

export const metadata = {
  title: "Finance Animation Service | Pixel Studios",
  description: "Pixel Studios' finance animation service turns investments, banking products, and compliance content into clear video for clients and stakeholders.",
};

export default function FinanceAnimationPage() {
  return (
    <main>
      <Banner
        title="Finance Animation That Makes Numbers Clear"
        description="Numbers alone rarely convince anyone of anything. Our finance animation service turns investment products, banking services, and compliance content into video that clients, partners, and internal teams can actually follow, built for an industry where trust and clarity carry more weight than flashy visuals. Every project is reviewed for both clarity and compliance accuracy before it ever reaches a client, so the finished animation stays true to your product documentation while still being genuinely easy to follow."
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
