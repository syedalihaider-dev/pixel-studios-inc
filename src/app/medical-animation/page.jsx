import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/MedicalAnimation/StatsSection";
import ServicesSection from "@/components/MedicalAnimation/ServicesSection";
import CostSection from "@/components/MedicalAnimation/CostSection"
import HowWeWorkSection from "@/components/MedicalAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/MedicalAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/MedicalAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/MedicalAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/MedicalAnimation/CooperationModelsSection";
import TechnologySection from "@/components/MedicalAnimation/TechnologySection";
import IndustrySection from "@/components/MedicalAnimation/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/MedicalAnimation/FaqSection";


export const metadata = {
  title: "Medical Animation Services for Healthcare & Life Sciences | Pixel Studios",
  description: "Need medical animation services that pass clinical review? Pixel Studios builds 3D medical animations for pharma, medical devices, and healthcare education. Get a quote.",
};

export default function MedicalAnimationPage() {
  return (
    <main>
      <Banner
        title="Medical Animation Services for Healthcare Education and Product Marketing"
        description="We are a dedicated medical animation studio producing 3D medical animation services for pharmaceutical companies, medical device manufacturers, healthcare systems, and life sciences organizations across the USA. Every medical animation video we deliver has been through a structured medical review process before it reaches a physician, a patient, or a regulatory body."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <TeamStandoutSection />
      <GreatVideosSection />
      <TechnologySection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
