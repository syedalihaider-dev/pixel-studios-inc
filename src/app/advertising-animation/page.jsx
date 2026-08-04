import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/AdvertisingAnimation/CostSection";
import ServicesSection from "@/components/AdvertisingAnimation/ServicesSection";
import WhyChooseSection from "@/components/AdvertisingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/AdvertisingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/AdvertisingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/AdvertisingAnimation/GreatVideosSection";
import FaqSection from "@/components/AdvertisingAnimation/FaqSection";

export const metadata = {
  title: "Advertising Animation Services | Pixel Studios",
  description: "Pixel Studios' advertising animation services deliver commercial, social, and motion graphics video built to stop the scroll and drive results.",
};

export default function AdvertisingAnimationPage() {
  return (
    <main>
      <Banner
        title="Advertising Animation Built to Stop the Scroll"
        description="Why do so many ads get skipped in the first two seconds? Because most creative is competing for attention it never earns. Our advertising animation services build commercials, motion graphics, and social content designed to hook fast and hold attention long enough to land your message and move a viewer to act. Every campaign is built from one core creative concept, then adapted across every format and platform your media plan requires, so your brand looks consistent whether someone sees it on television or in a six-second social bumper."
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
