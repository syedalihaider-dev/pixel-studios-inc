import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/Common/CostSection";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import TestimonialsSlider from "@/components/GameTrailer/TestimonialsSlider";
import WhyPartnerSection from "@/components/GameTrailer/WhyPartnerSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: "Cinematic Reveal",
    description:
      "The first public appearance of a game. Usually animation-led or heavily VFX-supported. The job is to create a world and an emotional stake in it before the viewer knows what the gameplay is.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Gameplay Highlight",
    description:
      "Gameplay footage edited to the best session of the best player who ever played it, with sound design and score that make the mechanics feel as satisfying as the best moment of play.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Announcement Teaser",
    description:
      "15 to 30 seconds. The only job is to create a question that the viewer needs the answer to. Teasers that over-explain have already failed.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Story and Lore Trailers",
    description:
      "Narrative-focused trailers for games with a story the audience needs to care about before they evaluate the gameplay. Character, world, and stakes delivered without spoiling the resolution.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Launch Trailers",
    description:
      "Release-day content for the audience that has been watching since the announcement. The launch trailer confirms the promise the announcement made. It does not need to be introduced. It needs to close.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Mobile Game Trailers",
    description:
      "User acquisition-optimized video for app store pages, Meta campaigns, TikTok, and YouTube Shorts. Hook in the first two seconds. Conversion objective visible by the second five. Everything else is retention.",
    icon: "/icons/experienced.png"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Game Cinematic Trailers",
    description:
      "Cinematic game trailers that establish a game's world, stakes, and emotional territory for an audience encountering it for the first time. Animation, visual effects, and score synchronized to create the feeling of a world worth entering. Used for announcements, awards season reveals, and the headline marketing moments that define a game's first impression in market.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Gameplay Trailers",
    description:
      "Gameplay trailers that make the act of playing the game look as good as the best session a skilled player has ever had with it. Capture selection, editing rhythm, and the editorial choices that make 90 seconds of gameplay footage feel like the argument for spending 90 hours in the game.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Launch and Announcement Trailers",
    description:
      "Launch trailers for the window when everything is spent on reaching the widest possible audience. Announcement trailers for the moment before that, when the only job is to create a reason to keep watching for what comes next.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Story Trailers",
    description:
      "Narrative trailers for games whose story is a primary commercial argument. The kind of trailer that makes an audience care about characters they have never controlled, in a world they have never visited.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Mobile Game Trailers",
    description:
      "Mobile game trailers built for the context mobile advertising actually runs in: app store pages, paid social campaigns, and the first six seconds a user decides whether to download or scroll. User acquisition-focused creative with measurable conversion objectives rather than entertainment value as the primary design criterion.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Creative Brief and Discovery",
    content:
      "We establish what the viewer needs to feel at the end of the trailer before we establish what they will see during it. The emotional objective drives every subsequent creative and technical decision.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Scripting and Storyboarding",
    content:
      "Script and storyboard are produced and approved before footage capture or animation begins. The trailer exists as a document before it exists as a video. Changes at this stage are inexpensive.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Gameplay Capture and Animation",
    content:
      "Footage capture sessions are directed to produce the specific moments the storyboard requires rather than capturing broadly and hoping the edit finds something usable. Animation sequences were produced to the visual quality of the brief.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Motion Graphics and VFX",
    content:
      "Title cards, logo animations, lower thirds, and visual effects are applied to serve the narrative rhythm of the trailer rather than demonstrate our visual effects capability.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Sound Design and Final Mix",
    content:
      "Score selection or original composition, sound design that gives every action its physical consequence, and a final mix that makes the trailer work in a cinema, on a phone speaker, and on a gaming headset simultaneously.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Platform Optimization",
    content:
      "Final exports in every format, at every specification, for every platform the trailer will be distributed through. Steam video specs. App store requirements. YouTube and social platform formats. All confirmed against current platform requirements before submission.",
  }
];

const title = (
  <>
    Let's Talk About Your <span>Project</span>
  </>
);

const text = "Tell us the game, the moment in its commercial lifecycle, and what you need the viewer to do after watching. We will tell you the trailer type, the approach, and what it costs.";

const faqs = [
  {
    question: "How much does it actually cost to get a game trailer made?",
    answer:
      "A motion graphics-led 60-second gameplay trailer for a mobile or indie game starts at $3,000 to $6,000. A cinematic animated trailer with original character animation and VFX runs $8,000 to $25,000. AAA-quality cinematic productions with full score and complex visual effects are scoped individually. Itemized quotes within 48 hours of a brief.",
  },
  {
    question: "How long does it usually take to produce a finished game trailer from start to launch?",
    answer:
      "A standard gameplay trailer with motion graphics and editing can be completed in two to four weeks from a brief sign-off. Cinematic animated trailers run four to eight weeks. Launch windows with fixed dates drive the production schedule backward, and we have never missed one.",
  },
  {
    question: "I am a solo or small indie dev on a tight budget. Is a trailer really worth it for my game?",
    answer:
      "Yes, with the right brief. A $3,000 trailer that communicates the game's emotional proposition clearly converts meaningfully better in the Steam discovery algorithm and in press outreach than no trailer. The question is not whether a trailer is worth it. It is whether the brief is good enough to produce a trailer that works.",
  },
  {
    question: "I already have raw gameplay footage. Do I still need an animated or cinematic trailer?",
    answer:
      "It depends on the game and the moment in its marketing timeline. Gameplay footage edited well can be highly effective for games with visually compelling real-time output. Cinematic animation is necessary when the game's emotional appeal is not fully visible in gameplay capture at the production quality the current build supports.",
  },
  {
    question: 'How do you make sure the trailer is honest and not "fake" compared to the real gameplay?',
    answer:
      "We are briefed explicitly against the misleading trailer problem. Every visual element in a gameplay trailer is either actual game footage or clearly presented as cinematic content. We have never produced a trailer that overpromised what the game delivers, and we consider that a commercial quality standard, not an ethical position.",
  },
  {
    question: "What does your end-to-end game trailer production process look like?",
    answer:
      "Creative brief and emotional objective. Script and storyboard. Footage capture or animation production. Motion graphics and VFX. Sound design and score. Platform-specific exports. Delivery before the deadline. No step is skipped, and no step is rushed at the expense of the one that follows.",
  },
  {
    question: "How many revisions do I get, and what happens if I do not like the first version?",
    answer:
      "Two structured revision rounds are standard. Every note is documented and confirmed before changes are made. If the first version requires structural changes beyond the revision scope, we have a conversation about what changed in the brief rather than absorbing additional production cost without acknowledgment.",
  },
  {
    question: "Can you work with my existing art, 3D models, and game builds, or do you recreate everything from scratch?",
    answer:
      "Yes. We work from existing game assets, builds, and footage wherever available. Existing assets reduce the production scope and cost. Limitations in the existing asset quality are identified at a brief stage rather than discovered during production.",
  },
  {
    question: "Can I work with you remotely, and how does collaboration work if I hire professional game trailer animators online?",
    answer:
      "Yes. Remote collaboration is our standard operating model. Brief sessions by video call. Storyboard review through shared documents. Delivery through secure file transfer. We have worked with studios on every continent, and the timezone gap has never been the reason a trailer was late.",
  },
  {
    question: "What is different about mobile game trailers, and can you help with user acquisition-focused videos?",
    answer:
      "Mobile game trailers are creative direct response advertising, not entertainment marketing. The hook must land before the user has decided to watch. The conversion objective must be visible before they have decided to stay. Every second is a cost measured in acquisition economics. Yes, we produce UA-optimized mobile game trailers, and we brief them accordingly.",
  }
];

export const metadata = {
  title: "Top-Tier Gaming Trailer Services to Ignite Your Launch | Pixel Studios",
  description: "Need a game trailer that actually sells the game? Pixel Studios builds cinematic reveal trailers, gameplay trailers, launch trailers, and mobile UA videos. Get a quote.",
};

export default function GameTrailerPage() {
  return (
    <main>
      <Banner
        title="Top-Tier Gaming Trailer Services to Ignite Your Launch"
        description="Pixel Studios produces game trailer services built around the emotional argument the trailer needs to make, and then backwards into the footage, animation, and editing choices that deliver it. We produce cinematic game trailers, gameplay trailers, launch trailers, mobile game trailers, Steam videos, and the announcement content that creates anticipation before the game exists. Every trailer begins with a creative brief that asks what the viewer should feel at the end, not what the viewer should have seen."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for Game Trailer Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Full-Spectrum Game Trailer Services"
        description="Every trailer type serves a specific moment in a game's lifecycle."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <CostSection
        subtitle="Game Trailer"
        title="What Makes Us Different?"
        description="Most game trailer studios produce technically accomplished videos. The ones worth hiring produce a video that changes what the viewer does next. The distinction is in the creative brief. We spend more time on the brief than most studios spend on the production plan, because the brief is where the trailer is either won or lost. What does the viewer need to feel? What does the viewer need to believe? What does the viewer need to do? Answer those questions specifically, and the editorial, animation, and sound design choices that serve them become obvious. Skip those questions and produce a beautiful failure."
        videoSrc="https://player.vimeo.com/video/1200540905?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="We also sign NDAs before briefing conversations begin, work remotely with studios on every continent, and treat a launch date as a hard constraint rather than a planning assumption. If the trailer is not ready when the store page goes live, the launch is not ready. We have never been the reason a launch was not ready."
      />
      <TestimonialsSlider />
      <TeamStandoutSection
        subtitle="TRAILER TYPES"
        title={<>Use Cases and <span>Trailer Types We Cover</span></>}
        description="The trailer type is determined by the moment in the game's commercial lifecycle and the specific emotional job the trailer needs to do."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1200540905?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Trailer <br />Production Process</>}
        description="Every game trailer follows a structured production workflow, from creative discovery and story development to gameplay capture, motion graphics, sound design, and platform-specific delivery. Each stage is planned to maximize audience engagement while ensuring the trailer supports the game's marketing and commercial objectives."
        accordionData={whyInvestAccordionData}
      />
      <WhyPartnerSection />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
