import Banner from "@/components/EcommerceVideo/Banner";
import CostSection from "@/components/EcommerceVideo/CostSection";
import ServicesSection from "@/components/EcommerceVideo/ServicesSection";
import WhyChooseSection from "@/components/EcommerceVideo/WhyChooseSection";
import WhyInvestSection from "@/components/EcommerceVideo/WhyInvestSection";
import CooperationModelsSection from "@/components/EcommerceVideo/CooperationModelsSection";
import TestimonialSection from "@/components/EcommerceVideo/TestimonialSection";
import GreatVideosSection from "@/components/EcommerceVideo/GreatVideosSection";
import FaqSection from "@/components/EcommerceVideo/FaqSection";

export const metadata = {
  title: "Ecommerce Video Production Services | Pixels Studios",
  description: "Pixels Studios' ecommerce video production services turn product pages into conversion engines with 3D product animation, demos, and ad-ready video.",
};

export default function EcommerceVideoPage() {
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
