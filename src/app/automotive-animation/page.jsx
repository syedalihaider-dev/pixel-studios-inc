import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/AutomotiveAnimation/CostSection";
import ServicesSection from "@/components/AutomotiveAnimation/ServicesSection";
import WhyChooseSection from "@/components/AutomotiveAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/AutomotiveAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/AutomotiveAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/AutomotiveAnimation/GreatVideosSection";
import FaqSection from "@/components/AutomotiveAnimation/FaqSection";

export const metadata = {
  title: "Automotive Animation Services | Pixels Studios",
  description: "Pixels Studios' automotive animation services deliver 3D vehicle, technical, and commercial animation for launches, engineering, and marketing.",
};

export default function AutomotiveAnimationPage() {
  return (
    <main>
      <Banner
        title="Automotive Animation That Sells the Engineering"
        description="Why is it so hard to show a car the way engineers actually see it? Because the systems that make a vehicle impressive, from suspension geometry to battery architecture, are hidden under the body panel. Our automotive animation services make that engineering visible, accurately and persuasively, for marketing, technical, and internal audiences alike. Every project starts from your CAD and engineering data, so the finished animation stays true to the actual vehicle, whether it is still confidential or already on the showroom floor."
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
