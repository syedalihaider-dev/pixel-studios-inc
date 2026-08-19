import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/TrailerAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/TrailerAnimation/CostSection"
import HowWeWorkSection from "@/components/TrailerAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/TrailerAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/TrailerAnimation/GreatVideosSection";
;
import CooperationModelsSection from "@/components/TrailerAnimation/CooperationModelsSection";

import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/TrailerAnimation/FaqSection";











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
    title: 'Opening Title Animation',
    description: "Opening title animation that establishes tone before the content begins. Used for films, branded video series, YouTube channels, and corporate video content that needs a consistent opening identity.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Animated Title Sequences',
    description: "Full animated title sequences combining typography, motion graphics, and visual effects. Used for film openings, series intros, and branded content that needs a memorable, repeatable opening identity.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Motion Graphics Titles',
    description: "Motion graphics titles for corporate video, marketing content, and broadcast production. Clean, brand-consistent title treatments that integrate with the visual identity established elsewhere in the production.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Intro Animation Services',
    description: "Video intro animation for YouTube channels, podcasts, and branded content series. Short, high-impact intro animation services that establish brand recognition in the first three seconds of every video.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Outro Animation Services',
    description: "Outro animation services that close content with the same production quality as the opening. Calls to action, subscribe prompts, and brand sign-offs are integrated into a cohesive closing sequence.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Kinetic Typography Animation',
    description: "Text-led kinetic typography animation where words carry the motion and emphasis. Effective for quote-driven trailers, brand statement videos, and title sequences where the message is the visual.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Broadcast Graphics and Film Titles',
    description: "Broadcast title animation and film title sequence design produced to broadcast delivery specifications. Frame rate, resolution, and color space requirements are handled to professional broadcast standards.",
    icon: '/icons/experienced.png'
  },
];

const industries = [
  {
    id: 1,
    title: "Film and Entertainment",
    image: "/industry/01.png",
    text: "Movie trailer production and film title sequence design for independent films, branded entertainment, and content studios building audience anticipation for theatrical or streaming releases.",
    link: "#"
  },
  {
    id: 2,
    title: "Gaming and Esports",
    image: "/industry/02.png",
    text: "Game trailer production and game trailer animation for PC games, console games, mobile games, and esports events. Cinematic reveal trailers and gameplay announcement content.",
    link: "#"
  },
  {
    id: 3,
    title: "Technology and SaaS",
    image: "/industry/03.png",
    text: "Product launch trailer videos for SaaS feature releases and technology product announcements. Trailer-style content that creates a moment around what would otherwise be a standard release note.",
    link: "#"
  },
  {
    id: 4,
    title: "E-Commerce Brands",
    image: "/industry/04.png",
    text: "Promotional trailer videos for product launches and seasonal campaigns. Built to create urgency and anticipation for e-commerce brands competing for attention during high-volume shopping periods.",
    link: "#"
  },
  {
    id: 5,
    title: "Corporate Organizations",
    image: "/industry/05.png",
    text: "Corporate trailer videos for major announcements, brand relaunches, and organizational milestones that warrant more than a standard corporate communication format.",
    link: "#"
  },
  {
    id: 6,
    title: "Events and Conferences",
    image: "/industry/06.png",
    text: "Event trailer animation for conferences, festivals, and brand events designed to drive registration and build anticipation in the lead-up to the event date.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Movie Trailer Production",
    description: "Movie trailer production for independent films, branded short films, and entertainment content. Our movie trailer animation combines pacing, music, and visual rhythm to create the anticipation that drives audiences to the full release.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Game Trailer Production",
    description: "Game trailer production and game trailer animation for PC, console, and mobile titles. We build cinematic sequences, gameplay reveal cuts, and announcement trailers that communicate the experience of the game, not just its feature list.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Promotional Trailer Videos",
    description: "Promotional trailer videos for product launches, campaigns, and brand announcements. Built with the same anticipation-first structure as entertainment trailers, applied to commercial objectives.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Launch Trailer Videos",
    description: "Product launch trailer videos that create a moment around a release rather than simply announcing it. Used for SaaS feature launches, consumer product reveals, and major brand campaign kickoffs.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Event Trailer Animation",
    description: "Event trailer animation for conferences, festivals, and major brand events. Built to drive registrations and attendance by making the event feel like something the audience cannot afford to miss.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Corporate Trailer Videos",
    description: "Corporate trailer videos for company announcements, brand relaunches, and major organizational milestones. Brand trailer production that communicates significance without relying on generic corporate visual language.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Brand Launch Trailers",
    description: "Brand launch trailers for companies entering new markets or launching new identities. A trailer-style brand announcement signals confidence and creates a moment around the launch that a standard announcement video cannot replicate.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Cinematic Trailer Production",
    description: "High-end cinematic trailer production combining motion graphics, sound design, and visual effects for trailers that need to feel like premium entertainment content, regardless of the underlying subject matter.",
    videoSrc: "https://player.vimeo.com/video/1201624743?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Professional Trailer Animation Services | Pixel Studios Inc.",
  description: "Need professional trailer animation services for your brand, game, or film? Pixel Studios creates custom trailer videos and title sequences. Get a free quote today.",
};

export default function TitlesAndTrailerAnimation() {
  return (
    <main>
      <Banner
        title="Professional Trailer Animation Services Games and Films"
        description="At Pixel Studios Inc., our professional trailer animation services are built around that argument-first approach. We are a dedicated trailer animation company producing movie trailer production, game trailer production, and brand trailer content for clients across the USA, and every trailer video production we deliver is structured to build anticipation, not just summarize what already exists."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Our Trailer Animation Services"
        description="Our trailer production company covers every trailer format across entertainment, gaming, and brand marketing."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>Title Sequence Animation and <span>Motion Graphics Services</span></>}
        description="A title sequence is the first thing an audience sees and the first signal of production quality they receive. Our title sequence animation services cover every format a brand, film, or broadcast production needs."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1200540933?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <CostSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
            <TeamStandoutSection
        subtitle="PRICING"
        title={<>Cost of <span>Legal Graphics Animation Services</span></>}
        description="Every legal graphics and animation project is quoted based on the evidence, complexity, and production requirements of the case. The following factors have the greatest impact on project scope, timeline, and overall cost."
        features={softwareSectionFeatures}
        
      />
      <WhyInvestSection />
      <GreatVideosSection />
      <IndustrySection 
        heading="Industries We Create Trailer Videos For"
        description="We have developed animation frameworks for each of the industries below. The result is a production process that is faster, more predictable, and more closely aligned with the business goals that drive trailer production."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
