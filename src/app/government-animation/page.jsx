import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/GovernmentAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/GovernmentAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/GovernmentAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/GovernmentAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/GovernmentAnimation/GreatVideosSection";
import FaqSection from "@/components/GovernmentAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Public Awareness Videos",
    description: "Campaign-ready animation for public health, safety, and civic awareness initiatives, built to reach a broad and varied audience across every literacy level.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Training Videos",
    description: "Standardized training video content for agency staff, covering procedures, compliance, and internal policy, deployable consistently across departments and locations.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description: "Clear explainer videos for government programs, benefits, and processes that citizens need to understand and navigate without confusion or repeated calls to a help line.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Data-driven motion graphics for reports, public dashboards, and presentations that need to communicate clearly to a general audience unfamiliar with the underlying subject.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Government Animation Services | Pixel Studios",
  description: "Pixel Studios' government animation services deliver public awareness, training, and explainer videos built for agencies at every level.",
};

export default function GovernmentAnimationPage() {
  return (
    <main>
      <Banner
        title="Government Animation Citizens Actually Understand"
        description="Public communication only works if the public actually understands it. Our government animation services turn policy, procedure, and public safety information into video that citizens and staff can follow, built for agencies that need accuracy, accessibility, and a defensible production process. Every project is built to move through your agency"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Government"
        description="What does a government animation vendor need to be able to deliver across an agency's communication channels?"
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
