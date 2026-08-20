import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/TrailerAnimation/CostSection"
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

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



const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Build Anticipation Before Launch',
    content: "A trailer's primary function is to create a gap between what the audience knows and what they want to know. Professional trailer animation services build that gap deliberately, using structure and pacing to make the audience want the resolution that only the full release can provide."
  },
  {
    id: 2,
    title: '2 Increase Audience Engagement',
    content: 'Trailers produced with cinematic pacing and sound design generate significantly higher engagement and share rates than simple highlight compilations. The structure is what makes a trailer worth sharing, not just the content within it.'
  },
  {
    id: 3,
    title: '3 Strengthen Brand Recognition',
    content: "Consistent title sequence animation and trailer production style across a brand's content builds recognition that compounds.A recognizable trailer style becomes a brand asset in its own right."
  },
  {
    id: 4,
    title: '4 Improve Marketing Performance',
    content: 'Promotional trailer videos consistently outperform standard promotional video formats in click-through rate and completion rate because the trailer structure is specifically engineered to hold attention to the end.'
  },
  {
    id: 5,
    title: '5 Drive More Views and Conversions',
    content: 'A well-produced trailer drives views to the full content and conversions on the underlying offer because it creates a specific reason to follow through rather than a general awareness of the option.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Creative Brief',
    content: 'We establish the audience, the objective, the tone, and the single most compelling element of the content the trailer is built around. The brief identifies the hook before any creative work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept Development',
    content: 'Visual direction, tone, and structural approach were developed and presented for approval. Multiple concept directions where the brief warrants exploring different emotional registers.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Script Writing and Messaging',
    content: "Trailer scripts and messaging sequences were built around the hook identified in discovery. Every line and visual beat earns its place in the structure.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: 'Every shot and transition was mapped before production. Pacing, reveal timing, and the structure of anticipation are all planned and approved at the storyboard stage.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Visual Design and Motion Graphics',
    content: 'Title treatments, motion graphics elements, and visual style were developed and approved. Typography, color, and graphic language are established before animation production begins.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Trailer Animation Production',
    content: 'Full trailer animation production in-house. Motion graphics, title sequences, and any animated elements were produced according to the approved storyboard and visual direction.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Sound Design and Music Integration',
    content: 'Sound design and music integration are where trailers earn their emotional impact. Score selection, sound effects, and mix timing are built around the reveal structure established in the storyboard.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Rendering and Quality Assurance',
    content: 'Final render passes and structured internal quality review. Pacing, sync, and visual quality were checked against the brief before client review.',
  },
  {
    id: 9,
    icon: '/animation.png',
    title: 'Final Revisions and Delivery',
    content: 'Structured revision round with documented feedback. Final delivery in every format and resolution specified at kickoff, including broadcast and platform-specific exports.',
  },
];

const title = (
  <>
    Start Your <span>Trailer Animation</span> Project Today
  </>
);

const text = "Most trailers fail because they were built as summaries instead of arguments. Book a discovery call, and we will show you what a trailer built around a single, compelling hook can do for your film, your game, or your brand.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Experienced Trailer Production Specialists",
    text: "Our trailer animation studio has produced trailer content for film, gaming, and brand marketing clients. The format expertise is specific, not adapted from general video production experience."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Custom Creative Concepts",
    text: "Every trailer begins with original concept development built around your specific content. No template trailer structures or stock reveal sequences applied regardless of fit."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "High-End Motion Graphics",
    text: "Broadcast-quality motion graphics and title sequence animation produced to the visual standard that premium entertainment and brand content requires."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Dedicated Project Management",
    text: "One project manager from brief to delivery. Every milestone is dated. Every revision round is structured and documented before production begins."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Fast Turnaround Times",
    text: "Most trailer projects are completed in two to four weeks from a brief sign-off, depending on complexity. Rush production available for launch-critical timelines."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Collaborative Revision Process",
    text: "Structured revision rounds where every note is documented and confirmed before changes are made. No guessing at ambiguous feedback on a format where pacing nuance matters enormously."
  }
];

const faqs = [
  {
    question: "How much does trailer animation cost?",
    answer: "A professionally produced 30 to 60-second trailer typically starts in the $2,000 to $5,000 range for motion graphics-based production. Trailers with custom 3D elements, character animation, or extensive visual effects range from $6,000 to $15,000 or more. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does movie trailer production take?",
    answer: "Most movie trailer production completes in two to four weeks from brief sign-off. Trailers requiring custom animated sequences or extensive visual effects take longer. Rush timelines are available for release-date-critical projects.",
  },
  {
    question: "Can you create a trailer for my game?",
    answer: "Yes. Game trailer production and game trailer animation are core services. We produce cinematic reveal trailers, gameplay announcement trailers, and launch trailers for PC, console, and mobile titles.",
  },
  {
    question: "What is included in trailer production services?",
    answer: "Our trailer production services include creative brief development, concept development, scriptwriting, storyboarding, motion graphics and animation production, sound design and music integration, and final delivery in every format specified at kickoff.",
  },
  {
    question: "Do you provide scriptwriting and storyboarding?",
    answer: "Yes. Scriptwriting and storyboarding are standard stages in our trailer production process. Both are developed around the hook identified in discovery and approved before animation production begins.",
  },
  {
    question: "What makes a successful promotional trailer?",
    answer: "A successful promotional trailer identifies a single compelling hook and structures the entire sequence to deliver that hook at the right moment. The most common mistake in trailer production is trying to communicate everything rather than building toward one moment that makes the audience want more.",
  },
  {
    question: "Can trailer videos be used for social media marketing?",
    answer: "Yes. Trailer-style content performs strongly on social media because the structure is built for engagement and completion. We produce platform-specific cuts of trailer content for social distribution alongside the primary deliverable.",
  },
  {
    question: "What is the difference between a teaser trailer and a full trailer?",
    answer: "A teaser trailer is short, typically 15 to 30 seconds, and designed to create awareness and curiosity without revealing significant content. A full trailer, typically 60 to 120 seconds, develops a more complete narrative arc and reveals more of the content while still withholding the resolution. Both serve different stages of a campaign timeline.",
  },
  {
    question: "Do you provide voiceovers and sound design?",
    answer: "Yes. Professional voiceover casting and full sound design, including score selection or composition, are included in our trailer production services. Sound design is where much of a trailer's emotional impact is built.",
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
      <StatsSection
        heading="A Trusted Animation Company for Trailer Animation Services"
        statsData={statsData}
        variant="gradient"
      />
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
      <HowWeWorkSection
        heading="Why Invest in Professional Trailer Animation Services?"
        description="Motion graphics services help brands capture attention, communicate complex ideas quickly, and drive measurable business results. Done right, motion design is one of the highest-performing assets a brand can own."
        accordionData={howWeWorkAccordionData}
      />
      <CooperationModelsSection
        subtitle="Why Choose Our"
        title="Why Choose Our Trailer Animation Company?"
        description="With proven results across multiple entertainment verticals, our approach is built to escalate your project’s impact."
        cards={cooperationModelsCards}
      />
      <TeamStandoutSection
        subtitle="PRICING"
        title={<>Cost of <span>Legal Graphics Animation Services</span></>}
        description="Every legal graphics and animation project is quoted based on the evidence,
 complexity, and production requirements of the case. The following factors
 have the greatest impact on project scope, timeline, and overall cost."
        features={softwareSectionFeatures}

      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title="Our Trailer Production Process"
        description="Every trailer follows a structured production process from creative brief to final delivery."
        accordionData={whyInvestAccordionData}
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <IndustrySection
        heading="Industries We Create Trailer Videos For"
        description="We have developed animation frameworks for each of the industries below. The result is a production process that is faster, more predictable, and more closely aligned with the business goals that drive trailer production."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
