import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/ManufacturingAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/ManufacturingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/ManufacturingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/ManufacturingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/ManufacturingAnimation/GreatVideosSection";
import FaqSection from "@/components/ManufacturingAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Industrial Animation",
    description:
      "Full process animation showing how a production line, facility, or system operates from raw material to finished product, built for sales, training, and internal documentation across every department.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Technical Animation",
    description:
      "Exploded-view and mechanical animation revealing how machinery and equipment function internally, used for technical sales and engineering communication with prospects and partners.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Training Videos",
    description:
      "Manufacturing safety training animation and procedural content that standardizes instruction across shifts, facilities, and new hires, regardless of location.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Product Animation",
    description:
      "Photorealistic product manufacturing animation showing equipment and machinery from every angle, built directly from CAD data for precision down to the smallest component.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Manufacturing Animation Services | Pixel Studios",
  description: "Pixel Studios' manufacturing animation services turn production processes, machinery, and safety training into clear, accurate video content.",
};

export default function ManufacturingAnimationPage() {
  return (
    <main>
      <Banner
        title="Manufacturing Animation That Shows the Process"
        description="Manufacturing floors are hard to film and even harder to explain in a sales deck. Our manufacturing animation services turn production processes, machinery, and safety procedures into clear video, built directly from your engineering data for accuracy on every frame. Every project starts with your CAD files or process documentation, so what appears on screen matches what actually happens on your production line, not a generic stand-in. From assembly lines to safety training, the same production process supports every part of your communication needs."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Manufacturing"
        description="What does a manufacturing animation company need to cover across a plant's communication needs?"
        sliderItems={sliderItems}
      />
      <WhyChooseSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
