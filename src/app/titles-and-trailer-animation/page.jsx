import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/TrailerAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/TrailerAnimation/CostSection"
import HowWeWorkSection from "@/components/TrailerAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/TrailerAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/TrailerAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/TrailerAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/TrailerAnimation/CooperationModelsSection";
import SoftwareSection from "@/components/TrailerAnimation/SoftwareSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/TrailerAnimation/FaqSection";

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
      <TeamStandoutSection />
      <CostSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <SoftwareSection />
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
