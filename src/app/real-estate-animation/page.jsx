import Banner from "@/components/RealEstate/Banner";
import CostSection from "@/components/RealEstate/CostSection";
import ServicesSection from "@/components/RealEstate/ServicesSection";
import WhyChooseSection from "@/components/RealEstate/WhyChooseSection";
import WhyInvestSection from "@/components/RealEstate/WhyInvestSection";
import CooperationModelsSection from "@/components/RealEstate/CooperationModelsSection";
import TestimonialSection from "@/components/RealEstate/TestimonialSection";
import GreatVideosSection from "@/components/RealEstate/GreatVideosSection";
import FaqSection from "@/components/RealEstate/FaqSection";

export const metadata = {
  title: "Real Estate Animation Service | Pixels Studios",
  description: "Pixels Studios' real estate animation service brings unbuilt developments to life with 3D walkthroughs, renderings, and marketing video that sell.",
};

export default function RealEstatePage() {
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
