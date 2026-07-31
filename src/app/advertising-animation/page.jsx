import Banner from "@/components/AdvertisingAnimation/Banner";
import CostSection from "@/components/AdvertisingAnimation/CostSection";
import ServicesSection from "@/components/AdvertisingAnimation/ServicesSection";
import WhyChooseSection from "@/components/AdvertisingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/AdvertisingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/AdvertisingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/AdvertisingAnimation/GreatVideosSection";
import FaqSection from "@/components/AdvertisingAnimation/FaqSection";

export const metadata = {
  title: "Advertising Animation Services | Pixels Studios",
  description: "Pixels Studios' advertising animation services deliver commercial, social, and motion graphics video built to stop the scroll and drive results.",
};

export default function AdvertisingAnimationPage() {
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
