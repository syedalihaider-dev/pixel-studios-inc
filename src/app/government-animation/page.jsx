import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/GovernmentAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/GovernmentAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/GovernmentAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/GovernmentAnimation/GreatVideosSection";
import FaqSection from "@/components/GovernmentAnimation/FaqSection";

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
