import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/GovernmentAnimation/CostSection";
import ServicesSection from "@/components/GovernmentAnimation/ServicesSection";
import WhyChooseSection from "@/components/GovernmentAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/GovernmentAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/GovernmentAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/GovernmentAnimation/GreatVideosSection";
import FaqSection from "@/components/GovernmentAnimation/FaqSection";

export const metadata = {
  title: "Government Animation Services | Pixels Studios",
  description: "Pixels Studios' government animation services deliver public awareness, training, and explainer videos built for agencies at every level.",
};

export default function GovernmentAnimationPage() {
  return (
    <main>
      <Banner
        title="Government Animation Citizens Actually Understand"
        description="Public communication only works if the public actually understands it. Our government animation services turn policy, procedure, and public safety information into video that citizens and staff can follow, built for agencies that need accuracy, accessibility, and a defensible production process. Every project is built to move through your agency"
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
