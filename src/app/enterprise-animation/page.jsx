import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EducationAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/EducationAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/EducationAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/EducationAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/EducationAnimation/GreatVideosSection";
import FaqSection from "@/components/EducationAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Corporate Videos",
    description: "Polished corporate video content for leadership communications, company milestones, and external-facing brand storytelling, produced to a consistent standard across every business unit and region.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Training Videos",
    description: "Scalable training video content for onboarding, compliance, and skills development, built to be deployed across large, distributed teams without losing quality between locations.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description: "Enterprise explainer video animations that clarify complex products, processes, or organizational changes for internal or external audiences, built to reduce repeated questions and confusion.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Data-driven motion graphics for reporting, internal dashboards, and executive presentations that need to communicate quickly and clearly to a busy leadership audience.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Enterprise Animation Services | Pixel Studios",
  description: "Pixel Studios' enterprise animation services deliver corporate video, training, and explainer content at scale, built for large, multi-stakeholder teams.",
};

export default function EducationAnimationPage() {
  return (
    <main>
      <Banner
        title="Enterprise Animation Built for Scale"
        description="Large organizations do not need one video. They need a system that produces consistent, on-brand video across dozens of teams, markets, and stakeholders without losing quality along the way. Our enterprise animation services are built for exactly that kind of scale, from internal communications to global training rollouts. Every engagement is built around your actual approval structure and brand governance, not a one-off creative project, so the same standard holds whether a video comes from HR, marketing, or the executive team."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Enterprise"
        description="What does an enterprise animation company actually need to deliver across a large organization? These four formats cover the range most enterprise teams need, from internal leadership updates to external brand storytelling, all built to the same governed brand standard."
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
