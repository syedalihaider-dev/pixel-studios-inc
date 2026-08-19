import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/FintechAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/FintechAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/FintechAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/FintechAnimation/GreatVideosSection";
import FaqSection from "@/components/FintechAnimation/FaqSection";

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
    title: "Fintech Explainer Videos",
    description: "Clear, concise fintech explainer videos that introduce your product's value proposition and core mechanism in under two minutes, built for a homepage or app store listing where attention is short and trust has to be earned fast.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Financial Data Visualization Animation",
    description: "Animated charts, dashboards, and data flows that make complex financial data digestible for users, analysts, and investors who need to grasp trends at a glance rather than parse a spreadsheet.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Product Demo Animations for Fintech Apps",
    description: "Screen-accurate walkthroughs of your app's core flows, from account setup to transaction confirmation, built to reduce onboarding drop-off and answer user questions before they reach support.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Cryptocurrency and Blockchain Animations",
    description: "Animations that make decentralized ledgers, wallets, and token mechanics understandable to an audience that may have never interacted with crypto before, without oversimplifying the mechanics that matter.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Investor Pitch Animations",
    description: "Investor pitch animation built for fundraising decks, condensing your business model and technical differentiation into a few focused minutes that build conviction quickly.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Financial Education and Training Animations",
    description: "Educational content that teaches financial literacy or internal compliance procedures in a format that is easier to retain than a written manual or a slide-based training deck.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Corporate Branding and Logo Animation for Fintech Companies",
    description: "Fintech logo animation and brand motion systems that give your company a consistent, professional identity across every touchpoint, from your app to your pitch deck.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Marketing and Social Media Animation",
    description: "Short, platform-native fintech animation videos built for paid social, app store previews, and organic content that need to earn attention quickly.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "RegTech and Compliance Animations",
    description: "Animations explaining regulatory processes and compliance workflows clearly to internal teams, auditors, and partners who need a shared reference for how a process actually works.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Custom 2D and 3D Fintech Animation Services",
    description: "Whether your product calls for clean 2D motion graphics or more dimensional 3D visualization, every project is built around what actually communicates your mechanism best, not a default style.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Fintech Animation Service | Pixel Studios",
  description: "Pixel Studios' fintech animation service turns complex financial products, data, and compliance into clear video for users, investors, and regulators.",
};

export default function FintechAnimationPage() {
  return (
    <main>
      <Banner
        title="Fintech Animation That Builds Financial Trust"
        description="Why do so many fintech products get built brilliantly and explained badly? Because financial concepts are abstract, regulated, and often invisible on screen. Our fintech animation service turns payments, data, and compliance into video that users, investors, and regulators actually understand, without losing the accuracy your industry demands."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Fintech"
        description="What does a full-service fintech animation company actually need to cover? Everything from a homepage explainer to a compliance training module. These ten formats reflect the range of work most fintech companies need across their product, marketing, and investor relationships."
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
