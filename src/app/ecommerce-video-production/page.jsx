import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EcommerceVideo/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/EcommerceVideo/WhyInvestSection";
import CooperationModelsSection from "@/components/EcommerceVideo/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/EcommerceVideo/GreatVideosSection";
import FaqSection from "@/components/EcommerceVideo/FaqSection";

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
    title: "Product Demo Videos",
    description: "A product demo video answers the questions a sales associate would, right on the page where the decision gets made: how it works, what it includes, why it is worth the price. We front-load the details that matter most and structure the sequence around the objections that most often stop a shopper from clicking add to cart.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Promotional Videos",
    description: "Launch drops, seasonal campaigns, and limited releases get a dedicated promotional video built to create urgency and carry your brand identity across your homepage, email campaigns, and paid social, so the campaign feels cohesive wherever a customer meets it.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Feature callouts, spec breakdowns, and comparison graphics animated cleanly, so customers absorb the details that drive purchase decisions without wading through paragraphs of product copy on a mobile screen.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Product Animation",
    description: "Photorealistic 3D product animations show your product from every angle, in every color and configuration, without a single physical unit on a photo set. Ideal for pre-launch marketing and products that only exist as CAD files but still need to sell on a pre-order page.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Ecommerce Video Production Services | Pixel Studios",
  description: "Pixel Studios' ecommerce video production services turn product pages into conversion engines with 3D product animation, demos, and ad-ready video.",
};

export default function EcommerceVideoPage() {
  return (
    <main>
      <Banner
        title="Ecommerce Video Production Built to Convert Browsers into Buyers"
        description="Why do shoppers abandon product pages that have perfectly good photos? Because photos cannot answer the questions that actually decide a purchase. How does it open, how does it fit, what does it feel like to use? Video is the closest thing you can give an online shopper to holding the product, and our ecommerce video production services are built around exactly that job. Pixel Studios Inc. combines 3D product animation, demo-style video, and platform-ready ad content into one production pipeline, engineered around a single question: what does this shopper need to see in the first three seconds to keep watching and eventually buy? Whether that is a hero video on your homepage, a listing video on Amazon, or a fifteen-second ad in a crowded feed, every version is built from one consistent set of assets by the same team."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Ecommerce"
        description="Which video formats actually move the needle for an online store? These four cover the full path from first impression to final checkout, and most of our ecommerce clients end up using at least two of them together."
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
