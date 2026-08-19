import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EntertainmentAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/EntertainmentAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/EntertainmentAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/EntertainmentAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/EntertainmentAnimation/GreatVideosSection";
import FaqSection from "@/components/EntertainmentAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "2D Animation",
    description: "Stylized 2D animation for shorts, title sequences, and music videos where a hand-crafted, illustrative look fits the content best.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation",
    description: "Dimensional 3D animation for trailers, cinematics, and content that calls for depth, realism, or a more cinematic camera language.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Character Animation",
    description: "Custom character design and animation, whether building original characters or animating existing intellectual property under proper rights.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Title sequences, kinetic typography, and promotional motion graphics built to match a project's tone and genre.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Entertainment Animation Service | Pixel Studios",
  description: "Pixel Studios' entertainment animation service delivers trailers, music videos, and character content built for studios, labels, and creators.",
};

export default function EntertainmentAnimationPage() {
  return (
    <main>
      <Banner
        title="Entertainment Animation Built to Perform"
        description="A trailer has seconds to earn a click, and a music video has to hold up next to everything else competing for the same audience. Our entertainment animation service builds trailers, shorts, and animated music videos designed for exactly that kind of pressure, where craft and speed both matter. Every project is built around your creative vision and your release timeline together, so a distinctive visual style never comes at the cost of hitting the date your marketing plan depends on."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Entertainment"
        description="What should an entertainment animation studio be able to deliver across a release cycle? These four formats span illustrative 2D work through cinematic 3D production, each suited to a different kind of project and budget."
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
