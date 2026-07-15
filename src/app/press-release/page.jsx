import Banner from "@/components/PressRelease/Banner";
import PressReleaseCards from "@/components/PressRelease/PressReleaseCards";
import PressReleaseQuote from "@/components/PressRelease/PressReleaseQuote";
import PressReleaseSlider from "@/components/PressRelease/PressReleaseSlider";
import PressReleaseAwards from "@/components/PressRelease/PressReleaseAwards";
import PressReleaseCareer from "@/components/PressRelease/PressReleaseCareer";
import PressReleaseNews from "@/components/PressRelease/PressReleaseNews";
import TestimonialSection from "@/components/Animation2D/TestimonialSection";


export const metadata = {
  title: "Press Release - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Press Release page. We are an award-winning digital agency.",
};

export default function Location() {
  return (
    <main>
      <Banner />
      <PressReleaseCards />
      <PressReleaseQuote />
      <PressReleaseSlider />
      <PressReleaseAwards />
      <PressReleaseCareer />
      <PressReleaseNews />
      <TestimonialSection />
    </main>
  );
}
