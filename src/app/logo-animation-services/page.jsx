import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/LogoAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/LogoAnimation/HowWeWorkSection";

import WhyInvestSection from "@/components/LogoAnimation/WhyInvestSection";

import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/LogoAnimation/GreatVideosSection";
;
import CooperationModelsSection from "@/components/LogoAnimation/CooperationModelsSection";
import TestimonialsSlider from "@/components/LogoAnimation/TestimonialsSlider";
import TechnologySection from "@/components/LogoAnimation/TechnologySection";
import FaqSection from "@/components/LogoAnimation/FaqSection";

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

const benefitsSectionFeatures = [
  {
    id: 1,
    title: 'Stronger Brand Recall',
    description: "Motion combined with sound creates memory encoding that static visual elements cannot. A well-designed animated logo becomes recognizable to repeat viewers faster than a static equivalent seen the same number of times.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'More Engaging Marketing Content',
    description: "Every video that opens with a polished logo animation is more engaging from the first frame than one that begins with a static brand mark or no brand identification at all.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Consistent Visual Branding',
    description: "A single logo animation production used consistently across all video content creates a uniform brand opening that functions as an audio-visual standard across every channel.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Professional Brand Presentation',
    description: "Logo animation signals investment in brand presentation. Audiences, clients, and partners associate polished animated identity with organizational credibility and attention to detail.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Improved Audience Attention',
    description: "Motion captures attention more reliably than static imagery. A logo animation at the start of a video secures viewer attention before the content begins.",
    icon: '/icons/experienced.png'
  }
];











const standoutFeatures = [
  {
    id: 1,
    title: 'Startups and Emerging Brands',
    description: "First-impression logo animation that gives a new brand the visual credibility of an established one before the track record exists to do it independently.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'SaaS and Technology Companies',
    description: "Clean, professional 2D logo animation and after effects logo animation for SaaS brands producing product videos, onboarding content, and marketing campaigns at scale.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'E-Commerce Businesses',
    description: "Animated logo services for e-commerce brands producing high volumes of product and social media video content. Logo animation that builds recognition across a content calendar.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Corporate Brands',
    description: "Enterprise-grade logo animation for corporate brands needing a consistent animated identity across global communications and branded content at scale.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Media and Entertainment',
    description: "Cinematic logo reveals and broadcast-spec logo animation for media companies and entertainment brands whose audience recognizes production quality immediately.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Agencies and Marketing Teams',
    description: "Logo animation services for creative agencies producing branded video content for multiple clients. White-label production available on qualifying projects.",
    icon: '/icons/experienced.png'
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Custom Logo Animation",
    description: "Bespoke logo animation built from your brand assets, your visual identity, and the context where the animation will be used. No template motion paths, no stock reveal effects. Custom logo animation designed to match your brand personality and perform across every platform it appears on.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Logo Animation",
    description: "Clean, versatile 2D logo animation for brands that need a professional platform-ready intro across video, web, and presentation environments. Our 2D logo animation services produce smooth, brand-consistent motion that works at every size and in every context.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Logo Animation",
    description: "Photorealistic 3D logo animation with depth, lighting, materials, and camera choreography. Our 3D logo animation company delivers cinematic quality that makes a static brand mark unforgettable in motion, built for broadcast, film, and premium digital content.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Logo Intro Animation",
    description: "Opening sequences that establish brand identity before the content begins. Produced in multiple duration cuts for long-form branded films, short-form social content, and every format in between.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Logo Reveal Animation",
    description: "Animated logo reveals that make the moment the logo appears feel intentional. Motion, timing, and sound design used together to build anticipation and reinforce brand impact. Available in 2D, 3D, and mixed-media styles.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Animated Logo for Social Media",
    description: "Animated logo content optimized for Instagram, TikTok, LinkedIn, and YouTube specifications. File formats and durations produced natively for each platform rather than adapted from a single master file.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Broadcast and Video Logo Animation",
    description: "Broadcast-spec logo animation for television, streaming, and high-production digital content. Produced to the frame rate, resolution, and color space requirements of broadcast delivery.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Logo Animation Services That Bring Your Brand to Life | Pixel Studios",
  description: "Looking for professional logo animation services in the USA? Pixel Studios creates custom 2D and 3D logo animations for every brand. Get your free quote today.",
};

export default function LogoAnimation() {
  return (
    <main>
      <Banner
        title="Logo Animation Services That Bring Your Brand to Life"
        description="At Pixel Studios Inc., our logo animation services are built around that philosophy. We create custom logo animation that turns a static mark into a living piece of brand communication, from clean 2D logo animation for digital environments to cinematic 3D logo animation for broadcast-quality productions. We are the logo animation company brands across the USA come to when they want a brand intro that earns attention rather than borrows it."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Professional Logo Animation Services in the USA"
        description="Our logo animation company provides every type of animated logo production a brand needs, from simple 2D logo animation for social media to full cinematic 3D logo reveals for broadcast. All produced in-house by our professional logo animation studio."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<><span>Logo Animation</span> Solutions for Every Business</>}
        description="A startup and an enterprise brand have different logo animation needs. Here is how our logo animation services are applied across every business type."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201854809?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <PortfolioShowcase />
      <GreatVideosSection />
      <HowWeWorkSection />
            <TeamStandoutSection
        subtitle="TYPES OF"
        title={<>Benefits of Professional <span>Logo Animation</span></>}
        description="What professionally produced logo animation does for a brand that a static logo in a video frame cannot replicate."
        features={benefitsSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <CooperationModelsSection />
      <WhyInvestSection />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <TechnologySection />
      <TestimonialsSlider />
      <FaqSection />
    </main>
  );
}
