import Banner from "@/components/EducationalVideoProduction/Banner";
import CostSection from "@/components/EducationalVideoProduction/CostSection";
import StatsSection from "@/components/EducationalVideoProduction/StatsSection";
import ServicesSection from "@/components/EducationalVideoProduction/ServicesSection";
import HowWeWorkSection from "@/components/EducationalVideoProduction/HowWeWorkSection";
import SupportSection from "@/components/EducationalVideoProduction/SupportSection";
import WhyInvestSection from "@/components/EducationalVideoProduction/WhyInvestSection";
import IndustrySection from "@/components/EducationalVideoProduction/IndustrySection";
import AnimationPortfolio from "@/components/EducationalVideoProduction/AnimationPortfolio";
import GreatVideosSection from "@/components/EducationalVideoProduction/GreatVideosSection";
import TeamStandoutSection from "@/components/EducationalVideoProduction/TeamStandoutSection";
import CooperationModelsSection from "@/components/EducationalVideoProduction/CooperationModelsSection";
import WonderingSection from "@/components/EducationalVideoProduction/WonderingSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/EducationalVideoProduction/FaqSection";


export const metadata = {
  title: "Educational Video Production Services | Improve Learning and Knowledge Retention | Pixels Studios",
  description: "Need educational video production services that learners actually finish? Pixels Studios builds e-learning, training, and corporate learning videos that improve outcomes. Get a quote.",
};

export default function EducationalVideoProductionPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <AnimationPortfolio />
      <GreatVideosSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <IndustrySection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
