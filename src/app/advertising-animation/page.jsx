import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/AdvertisingAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/AdvertisingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/AdvertisingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/AdvertisingAnimation/GreatVideosSection";
import FaqSection from "@/components/AdvertisingAnimation/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: 'Experienced Motion Designers',
    description: "Our motion design team has produced logo animation for brands across consumer, corporate, entertainment, technology, and healthcare sectors with genuinely cross-industry experience.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Animation Concepts',
    description: "Every project begins with original concept development. No stock motion paths or template effects. Custom logo animation built specifically for each brand.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Fast Turnaround Times',
    description: "Most logo animation projects complete in one to two weeks from brief sign-off. Rush production available for campaign launch windows.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Dedicated Project Management',
    description: "One project manager from brief to delivery. Every milestone is dated. Every update is proactive.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'High-Quality Motion Design',
    description: "Professional logo animation produced to broadcast-quality standards regardless of the distribution platform. Quality is the baseline, not a premium tier.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Multiple Export Formats',
    description: "Delivery in MP4, transparent-background MOV, GIF, and source files. Platform-specific exports for social, web, and broadcast included in standard packages.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Flexible Cooperation Models',
    description: "Project-based, retainer, or dedicated team models. We adapt to your needs, timelines, and budget with transparent terms and no surprises.",
    icon: '/icons/experienced.png'
  },
  {
    id: 8,
    title: 'Brand-Centric Animation Strategy',
    description: "Every animation starts with your brand goals. We define the objective first, then select the right animation style to match your message and audience.",
    icon: '/icons/experienced.png'
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Commercial Animation",
    description: "Full animated commercials built for TV, streaming, and pre-roll placements, combining strong visual storytelling with a message engineered to land inside a strict time limit. Every spot is built to work as a standalone piece and as the anchor for a full campaign of cutdowns.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Fast-paced motion graphics for feature highlights, promotional offers, and data-driven ads that need to communicate quickly and clearly, especially in placements where a viewer may only watch for a few seconds before scrolling on.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Social Media Animation",
    description: "Platform-native cuts optimized for Instagram, TikTok, and YouTube, paced for how people actually scroll and watch, with or without sound, and built to feel native to each platform rather than repurposed from a TV spot.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Logo Animation",
    description: "Animated logo intros and outros that give every ad a consistent, branded finish across every campaign and platform, reinforcing brand recognition even in a six-second bumper ad.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Advertising Animation Services | Pixel Studios",
  description: "Pixel Studios' advertising animation services deliver commercial, social, and motion graphics video built to stop the scroll and drive results.",
};

export default function AdvertisingAnimationPage() {
  return (
    <main>
      <Banner
        title="Advertising Animation Built to Stop the Scroll"
        description="Why do so many ads get skipped in the first two seconds? Because most creative is competing for attention it never earns. Our advertising animation services build commercials, motion graphics, and social content designed to hook fast and hold attention long enough to land your message and move a viewer to act. Every campaign is built from one core creative concept, then adapted across every format and platform your media plan requires, so your brand looks consistent whether someone sees it on television or in a six-second social bumper."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Advertising"
        description="What should an advertising animation studio be able to deliver beyond a single hero spot? These four formats cover the full campaign, from broadcast to the smallest social cutdown, all built from one creative concept."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
