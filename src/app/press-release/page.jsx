import Banner from "@/components/Common/Banner/Banner";
import PressReleaseCards from "@/components/PressRelease/PressReleaseCards";
import PressReleaseQuote from "@/components/PressRelease/PressReleaseQuote";
import PressReleaseSlider from "@/components/PressRelease/PressReleaseSlider";
import PressReleaseAwards from "@/components/PressRelease/PressReleaseAwards";
import PressReleaseCareer from "@/components/PressRelease/PressReleaseCareer";
import PressReleaseNews from "@/components/PressRelease/PressReleaseNews";
import TestimonialSection from "@/components/Common/TestimonialSection";


export const metadata = {
  title: "Press Release - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc Press Release page. We are an award-winning digital agency.",
};

export default function Location() {
  return (
    <main>
      <Banner
        title="Locations We Serve"
        description="We are a team of passionate storytellers and visual artists dedicated to bringing ideas to life. With years of experience in the animation industry, we combine creativity, technology, and strategic thinking to deliver exceptional results for our clients across various locations."
        video="https://dl.dropboxusercontent.com/scl/fo/d7f5pmdtiote831w4ravn/APr1MwnvxgJidhjKrvVy3t8/2D_01.mp4?dl=1&rlkey=k073vgd1ke8at52isx6ywoibw"
        showPlayButton={true}
      />
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
