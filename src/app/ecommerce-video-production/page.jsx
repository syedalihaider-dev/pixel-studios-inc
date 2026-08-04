import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EcommerceVideo/CostSection";
import ServicesSection from "@/components/EcommerceVideo/ServicesSection";
import WhyChooseSection from "@/components/EcommerceVideo/WhyChooseSection";
import WhyInvestSection from "@/components/EcommerceVideo/WhyInvestSection";
import CooperationModelsSection from "@/components/EcommerceVideo/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/EcommerceVideo/GreatVideosSection";
import FaqSection from "@/components/EcommerceVideo/FaqSection";

export const metadata = {
  title: "Ecommerce Video Production Services | Pixel Studios",
  description: "Pixel Studios' ecommerce video production services turn product pages into conversion engines with 3D product animation, demos, and ad-ready video.",
};

export default function EcommerceVideoPage() {
  return (
    <main>
      <Banner
        title="Ecommerce Video Production Built to Convert Browsers into Buyers"
        description="Why do shoppers abandon product pages that have perfectly good photos? Because photos cannot answer the questions that actually decide a purchase. How does it open, how does it fit, what does it feel like to use? Video is the closest thing you can give an online shopper to holding the product, and our ecommerce video production services are built around exactly that job. Pixel Studios Inc. combines 3D product animation, demo-style video, and platform-ready ad content into one production pipeline, engineered around a single question: what does this shopper need to see in the first three seconds to keep watching and eventually buy? Whether that is a hero video on your homepage, a listing video on Amazon, or a fifteen-second ad in a crowded feed, every version is built from one consistent set of assets by the same team."
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
