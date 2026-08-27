import Banner from "@/components/Common/Banner/Banner";
import TrustedClientsSection from "@/components/Animation2D/TrustedClientsSection";
import LocationListSection from "@/components/Location/LocationListSection";
import TestimonialSection from "@/components/Common/TestimonialSection";


export const metadata = {
  title: "Top-Tier 2D and 3D Animation Services Worldwide - Pixel Studios Inc",
  description: "Pixel Studios Inc is a top 2D and 3D animation studio world-wide that is considered a business result oriented, trendsetter and innovator in providing animated solutions to your unique and complex business challenges.",
};

export default function Location() {
  return (
    <main>
      <Banner
        title="Top-Tier 2D and 3D Animation Services Worldwide"
        description="Pixel Studios Inc is a top 2D and 3D animation studio world-wide that is considered a business result oriented, trendsetter and innovator in providing animated solutions to your unique and complex business challenges."
        video="https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/APr1MwnvxgJidhjKrvVy3t8/2D_01.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw"
        showPlayButton={true}
      />
      <TrustedClientsSection />
      <LocationListSection />
      <TestimonialSection />
    </main>
  );
}
