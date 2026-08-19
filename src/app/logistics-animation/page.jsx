import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/LogisticsAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/LogisticsAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/LogisticsAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/LogisticsAnimation/GreatVideosSection";
import FaqSection from "@/components/LogisticsAnimation/FaqSection";

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
    title: "Animated Logistics Services",
    description: "A complete overview of your service offering, from freight modes to warehousing, fulfillment, and customs support, built as one clear animated asset for sales decks, your website, and trade show screens that need to work without a live presenter.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Supply Chain Animation",
    description: "End-to-end visualizations tracing a shipment from origin to delivery, showing every handoff, facility, and system your operation manages, so clients understand exactly what they are paying for and why it is worth it.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Freight Animation Video",
    description: "Mode-specific content covering trucking, rail, air, or ocean freight, tailored to the routes and capacity you actually run rather than generic stock footage that could belong to any carrier.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Transport Animation",
    description: "Fleet-focused animation demonstrating routing efficiency, real-time tracking, and delivery capability in a way that is far more memorable than a capabilities PDF.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Operational Workflow Animations",
    description: "Step-by-step breakdowns of warehouse, sorting, and fulfillment workflows, used both for training new hires quickly and for documenting process across compliance, quality, and safety audits.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Promotional Logistics Videos",
    description: "Brand-forward video for trade shows, websites, and sales decks that positions your company as a modern, technology-driven operator instead of a commoditized freight provider competing purely on price.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Logistics Animation Service | Pixel Studios",
  description: "Pixel Studios' logistics animation service turns supply chain, warehouse, and fleet operations into clear video for investors, clients, and teams.",
};

export default function LogisticsAnimationPage() {
  return (
    <main>
      <Banner
        title="Logistics Animation That Shows What Your Operation Can Do"
        description="Why do sophisticated logistics operations so often lose deals to companies with better slide decks? Because supply chains are nearly impossible to explain in words and photographs. The scale is too big, the handoffs are too many, and the systems that make your operation impressive are exactly the ones a prospect never gets to see. Our logistics animation service fixes that. Pixel Studios Inc. turns freight networks, warehouse operations, and fleet systems into video that a client, investor, or new hire can follow on the first watch, without a single site visit. Whether you are pitching a new 3PL contract, raising capital, or standardizing safety training across a dozen facilities, the job is the same: make an operation this complex feel simple to understand, and to make that clarity work as hard in a boardroom as it does on a warehouse floor."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Logistics"
        description="What should a logistics animation service actually be able to produce? Everything from a full network overview to a single warehouse workflow. These six formats cover the range our logistics clients use most."
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
