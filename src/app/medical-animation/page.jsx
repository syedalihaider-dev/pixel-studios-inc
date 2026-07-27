import Banner from "@/components/MedicalAnimation/Banner";
import StatsSection from "@/components/MedicalAnimation/StatsSection";
import ServicesSection from "@/components/MedicalAnimation/ServicesSection";
import CostSection from "@/components/MedicalAnimation/CostSection"
import HowWeWorkSection from "@/components/MedicalAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/MedicalAnimation/WhyInvestSection";
import AnimationPortfolio from "@/components/MedicalAnimation/AnimationPortfolio";
import GreatVideosSection from "@/components/MedicalAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/MedicalAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/MedicalAnimation/CooperationModelsSection";
import TechnologySection from "@/components/MedicalAnimation/TechnologySection";
import IndustrySection from "@/components/MedicalAnimation/IndustrySection";
import TestimonialSection from "@/components/MedicalAnimation/TestimonialSection";
import FaqSection from "@/components/MedicalAnimation/FaqSection";


export const metadata = {
  title: "Medical Animation Services for Healthcare & Life Sciences | Pixels Studios",
  description: "Need medical animation services that pass clinical review? Pixels Studios builds 3D medical animations for pharma, medical devices, and healthcare education. Get a quote.",
};

export default function MedicalAnimationPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <AnimationPortfolio />
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
