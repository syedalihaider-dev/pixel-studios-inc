import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/MotionGraphics/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/MotionGraphics/HowWeWorkSection";
import WhyInvestSection from "@/components/MotionGraphics/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/MotionGraphics/GreatVideosSection";
;
import CooperationModelsSection from "@/components/MotionGraphics/CooperationModelsSection";
import TestimonialsSlider from "@/components/MotionGraphics/TestimonialsSlider";
import TechnologySection from "@/components/MotionGraphics/TechnologySection";

import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/MotionGraphics/FaqSection";











const softwareSectionFeatures = [
  {
    id: 1,
    title: "Factors Affecting Project Cost",
    description:
      "Reconstruction complexity, number of expert review cycles, animation length, and production timeline.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Complexity of the Case",
    description:
      "A single-vehicle accident reconstruction costs less than a multi-party commercial vehicle collision with conflicting expert opinions.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Level of Detail Required",
    description:
      "A demonstrative showing general event sequence costs less than forensic animation with frame-accurate vehicle dynamics and sight line analysis precisely matched to engineering survey data.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Animation Length",
    description:
      "A 90-second reconstruction costs less than a five-minute medical malpractice animation covering surgical procedure, injury mechanism, and long-term consequence.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Expert Witness Collaboration",
    description:
      "Multi-expert review cycles with revision requirements at each review add to the production timeline and cost.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Delivery Timeline",
    description:
      "Standard production runs four to eight weeks. Expedited production for cases approaching trial is available.",
    icon: "/icons/experienced.png"
  }
];

const standoutFeatures = [
  {
    id: 1,
    title: 'Simplify Complex Messages',
    description: "Animation sequences, timing, and visual emphasis guide the viewer through a complex idea in the order it needs to land, without requiring prior knowledge of the subject. Text cannot do that. Static images cannot do that. Motion graphics can.Amateur motion graphic looks like it was produced in a web browser. Professional motion graphic tells a visual story — where the sequence of drawings, the pacing of the voiceover, and the logical structure of the script work together as a unified communication system. That integration is the difference between content that informs and content that converts.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Increase Audience Engagement',
    description: "Animated content holds attention at significantly higher rates than static formats on every digital platform. That extra dwell time is the difference between a message received and one scrolled past without registering.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Improve Brand Recall',
    description: "Motion combined with audio creates memory encoding that text alone cannot produce. Consistent motion graphic design builds a visual identity that the audience recognizes across platforms without needing to see the logo first.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Boost Marketing Campaign Performance',
    description: "Motion graphics video production services consistently outperform static ad formats in click-through rate, engagement, and cost per acquisition. The performance differential compounds when the creative quality is high, and the strategy behind it is sound.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Drive Higher Conversion Rates',
    description: "Landing pages with a motion graphics explainer video convert at higher rates than static pages. Motion answers the objections a prospect has before they go looking elsewhere, which keeps them moving toward the conversion point.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "Product walkthroughs, feature announcements, and onboarding animations for software companies at every stage of growth. We know which motion graphics assets move which metrics at which funnel stage.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education, device explanation, and healthcare marketing content built to the accuracy and sensitivity standards the industry demands for public-facing motion graphics.",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Curriculum animation and instructional motion graphics are designed around learning outcomes rather than visual novelty. Built for LMS platforms and standalone distribution alike.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: "Investment product explanation, regulatory communication, and financial literacy content for audiences that do not accept ambiguity in either the message or the visual presentation.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate and Construction",
    image: "/industry/05.png",
    text: "Architectural walkthroughs and property launch motion graphics that give investors and buyers something compelling to respond to before the building exists.",
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce and Retail",
    image: "/industry/06.png",
    text: "Product launch animations and brand awareness motion graphics for consumer brands competing in high-noise retail environments where the first frame determines whether the ad gets skipped.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups and Emerging Brands",
    image: "/industry/06.png",
    text: "First-impression content for brands that need to communicate clearly and confidently before their reputation does it for them. Motion graphics that position early-stage companies credibly within their category from the first campaign.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Explainer Video Motion Graphics",
    description: "A motion graphics explainer video strips complexity out of a product and replaces it with a visual argument that the audience can follow in 90 seconds. We build explainer video animation around the cognitive gap between what your audience currently understands and what they need to understand to act. This is the format most brands ask for first, and the one where strategy matters most.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Product Demo and Launch Videos",
    description: "Launch content built around the first impression. We animate product features, interface walkthroughs, and launch announcements using motion graphics that make the product the hero without requiring prior category knowledge from the viewer. Product demo videos produced this way consistently outperform live-action demos in completion rate.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Motion Graphics",
    description: "Brand films, investor presentations, and internal communications brought to life through corporate motion graphics. Motion graphics video production services that belong in a premium brand environment, not pulled from a stock template library that your competitors are also using.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Social Media Motion Graphics",
    description: "Short-form motion content built natively for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts. Social media motion graphics with vertical formats, on-screen text that works without audio, and hooks engineered to stop the scroll in the first frame rather than building to one.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Advertising and Promotional Motion Graphics",
    description: "Paid social, display, pre-roll, and broadcast advertising motion graphics built around a conversion objective. Promotional motion graphics where the response mechanism is embedded in the creative structure, not bolted on as a final-frame logo card.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Animated Infographics",
    description: "Data and statistics that would otherwise sit in a spreadsheet or a dense report are animated into content that gets watched, shared, and remembered. We build animated infographics for investor decks, campaign support, social media series, and digital publications.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "UI and App Motion Graphics",
    description: "Interface walkthroughs, feature highlights, and app demo animations that make complex software feel intuitive to a first-time viewer. Produced at the pixel precision that UI communication requires, built directly from product design files.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Presentation and Corporate Communication Videos",
    description: "Animated presentation content for keynotes, board meetings, and investor presentations. Motion graphics that replace static slide decks with content that holds a room and earns the next meeting rather than filling time before it.",
    videoSrc: "https://player.vimeo.com/video/1201856415?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Motion Graphics Services for Brands & Campaigns | Pixel Studios",
  description: "Need professional motion graphics services in the USA? Pixel Studios delivers brand, product, and campaign motion graphics that convert. Get your free quote today.",
};

export default function MotionGraphics() {
  return (
    <main>
      <Banner
        title="Motion Graphics Services for Brands, Products, and Marketing Campaigns."
        description="At Pixel Studios Inc., our motion graphics services start with a business objective and build backward from there. What does the viewer need to understand? What do they do next? Every keyframe, transition, and piece of animated typography we produce answers those two questions first. We deliver motion graphics design services for brands, product teams, and marketing campaigns across the USA, and our motion graphics animation services in the United States markets are built to convert attention into action from day one."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Professional Motion Graphics Services"
        description="Our motion graphics animation services cover every format a brand needs to communicate clearly across digital and broadcast environments."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>Why Businesses Invest in <span>Motion Graphics?</span></>}
        description="The gap between a motion graphic video that gets watched and one that gets results comes down to production quality. These are the advantages that professional production delivers over template-based or in-house alternatives."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201856158?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <PortfolioShowcase />
      <GreatVideosSection />
      <WhyInvestSection />
      <TechnologySection />
            <TeamStandoutSection
        subtitle="PRICING"
        title={<>Cost of <span>Legal Graphics Animation Services</span></>}
        description="Every legal graphics and animation project is quoted based on the evidence, complexity, and production requirements of the case. The following factors have the greatest impact on project scope, timeline, and overall cost."
        features={softwareSectionFeatures}
        
      />
      <TestimonialsSlider />
      <IndustrySection 
        heading="Motion Graphics Solutions for Every Industry"
        description="Motion graphics work differently in every vertical. The pacing, language, and visual register that perform for a FinTech product launch are not what works for healthcare compliance training. We have built production experience across all of the following."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
