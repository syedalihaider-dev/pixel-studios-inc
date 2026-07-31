import Banner from "@/components/Location/Banner";
import TrustedClientsSection from "@/components/Animation2D/TrustedClientsSection";
import LocationListSection from "@/components/Location/LocationListSection";
import TestimonialSection from "@/components/Common/TestimonialSection";


export const metadata = {
  title: "Location - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Location page. We are an award-winning digital agency.",
};

export default function Location() {
  return (
    <main>
      <Banner />
      <TrustedClientsSection />
      <LocationListSection />
      <TestimonialSection />
    </main>
  );
}
