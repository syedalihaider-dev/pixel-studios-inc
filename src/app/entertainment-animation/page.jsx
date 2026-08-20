import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/Common/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/Common/WhyInvestSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import FaqSection from "@/components/Common/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: "Trailers",
    description: "Animated trailers built to build anticipation and communicate tone quickly, for film, television, and game releases.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Shorts",
    description: "Standalone animated short content for festivals, streaming platforms, and independent release.",
    icon: "/industry/services-icon-02.png",
  },
  {
    id: 3,
    title: "Promotion",
    description: "Promotional animation supporting a release, from social teasers to animated music videos tied to a single or album drop.",
    icon: "/industry/services-icon-03.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "2D Animation",
    description: "Stylized 2D animation for shorts, title sequences, and music videos where a hand-crafted, illustrative look fits the content best.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation",
    description: "Dimensional 3D animation for trailers, cinematics, and content that calls for depth, realism, or a more cinematic camera language.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Character Animation",
    description: "Custom character design and animation, whether building original characters or animating existing intellectual property under proper rights.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Title sequences, kinetic typography, and promotional motion graphics built to match a project's tone and genre.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your project, creative references, and release timeline to scope the right visual approach for your story and audience.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around your creative vision and reviewed before design begins in earnest.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, so tone and pacing are locked in early.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Characters, environments, and visual style are developed to match the project's creative direction.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until the piece feels exactly right.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your release and distribution channels require.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An entertainment animation studio with portfolio work spanning trailers, music videos, and character-driven shorts."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every project starts from your creative vision, never a recycled style pulled from another client's work."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around release dates and distribution deadlines."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, keeping creative direction consistent."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Entertainment Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your trailer, music video, or animated short, and we will build the entertainment animation that fits your creative vision and your release date, without compromising on either one, backed by a process built for exactly this kind of pressure.";

const faqs = [
  {
    question: "How Much Does an Entertainment Animation Project Cost?",
    answer:
      "Entertainment animation cost varies widely based on style, length, and complexity, whether the project is a simple title sequence or a fully animated music video with custom characters. Most projects are scoped after an initial discovery call.",
  },
  {
    question: "What's the Difference Between 2D, 3D, and Stylized Animation for Entertainment Content?",
    answer:
      "2D animation suits a more illustrative, hand-crafted look and tends to be more cost-effective; 3D adds depth and cinematic realism; and stylized approaches blend techniques to create a distinctive visual identity for a specific project.",
  },
  {
    question: "Do You Handle Music Licensing and Sync Rights for Animated Music Videos?",
    answer:
      "We can coordinate with your existing rights holders and licensing arrangements, but securing music licensing and sync rights is typically the responsibility of the artist or label commissioning the project.",
  },
  {
    question: "How Long Does It Take to Produce a Show Intro, Title Sequence, or Trailer?",
    answer:
      "Most projects take three to eight weeks depending on length, complexity, and the number of creative revision rounds involved.",
  },
  {
    question: "What Video Specs and Formats Do I Need for Broadcast vs. Streaming?",
    answer:
      "Broadcast delivery typically requires specific technical specs that differ from YouTube or streaming platform requirements. We deliver a full set of platform-ready exports so nothing needs re-editing later.",
  },
  {
    question: "Can You Animate Based on Existing Characters or IP We Already Own?",
    answer:
      "Yes, as long as you hold the rights to that intellectual property, we can animate existing characters or extend an established visual style.",
  },
  {
    question: "How Much Creative Input Do We Get During the Animation Process?",
    answer:
      "Entertainment content is often subjective, so we build in more structured review rounds at script and storyboard stages specifically to give you meaningful creative input before full animation production begins.",
  },
  {
    question: "Do You Provide Voice Casting or Voice-Over Talent for Animated Content?",
    answer:
      "Yes. We can help source voice casting and voice-over talent for animated entertainment content as part of the production process.",
  },
  {
    question: "Can You Match an Existing Show or Franchise's Established Visual Style?",
    answer:
      "Yes. When working within an existing franchise, we study the established style guide and prior content closely to keep new animation visually consistent with what audiences already recognize.",
  },
  {
    question: "Do You Offer Package Pricing for Series or Multi-Episode Content?",
    answer:
      "Yes. Series and multi-episode projects typically receive more favorable per-episode pricing than a single standalone piece, since character models and environments can be reused across episodes.",
  },
  {
    question: "Can You Deliver Both a Full-Length Trailer and Shorter Social Cutdowns From One Project?",
    answer:
      "Yes. Most trailer projects are built to produce a full-length version alongside shorter social and teaser cutdowns from the same core animation assets.",
  },
  {
    question: "Do You Provide Concept Art Before Committing to Full Animation Production?",
    answer:
      "Yes. Concept art and character or environment design come before animation begins, giving you an approval checkpoint while changes are still fast and inexpensive to make.",
  },
  {
    question: "Can You Animate a Music Video Around a Track That Is Not Yet Finalized?",
    answer:
      "It is possible but not ideal, since pacing and timing depend heavily on the final mix. We generally recommend working from a locked or near-final track for the strongest result.",
  },
  {
    question: "Do You Handle International Distribution Format Requirements for Trailers?",
    answer:
      "Yes. We can deliver trailers formatted for different regional broadcast and streaming platform requirements as part of a global release.",
  },
  {
    question: "Can We Request Multiple Concept Directions Before Choosing One to Move Forward With?",
    answer:
      "Yes. For projects where creative direction is still being decided, we can present a small number of concept directions during early development before committing to full production on one.",
  },
  {
    question: "Do You Offer Post-Production Sound Mixing and Mastering for Animated Content?",
    answer:
      "Yes. Sound mixing and mastering are included as part of final production, ensuring the audio meets broadcast or streaming platform delivery standards.",
  },
  {
    question: "Can You Produce Companion Content Like Behind-the-Scenes or Making-Of Videos?",
    answer:
      "Yes. Behind-the-scenes and making-of content can be scoped alongside a primary animation project, often reusing early concept art and process footage from the main production.",
  },
  {
    question: "What Happens if Test Audiences React Differently Than Expected to a Concept?",
    answer:
      "If early feedback suggests a creative direction is not landing, we can pivot to an alternate concept during the storyboard stage, before full animation production makes changes more costly.",
  },
  {
    question: "Can You Produce a Consistent Visual Style Across a Multi-Episode Series or Franchise?",
    answer:
      "Yes. We document a visual style guide during the first project in a series, which keeps character models, environments, and tone consistent across every subsequent episode or installment.",
  },
  {
    question: "Do You Offer Expedited Production for Urgent Release Date Changes?",
    answer:
      "In many cases, yes, depending on how much the timeline compresses and current studio capacity. We recommend flagging any date changes as early as possible so we can adjust the production plan.",
  },
];

export const metadata = {
  title: "Entertainment Animation Service | Pixel Studios",
  description: "Pixel Studios' entertainment animation service delivers trailers, music videos, and character content built for studios, labels, and creators.",
};

export default function EntertainmentAnimationPage() {
  return (
    <main>
      <Banner
        title="Entertainment Animation Built to Perform"
        description="A trailer has seconds to earn a click, and a music video has to hold up next to everything else competing for the same audience. Our entertainment animation service builds trailers, shorts, and animated music videos designed for exactly that kind of pressure, where craft and speed both matter. Every project is built around your creative vision and your release timeline together, so a distinctive visual style never comes at the cost of hitting the date your marketing plan depends on."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Entertainment Animation"
        title="Why Animation Matters in the Entertainment Industry?"
        description="Entertainment content competes in one of the most crowded
                attention markets that exists, where thousands of trailers,
                shorts, and music videos launch every week. Budgets and
                timelines are often tight relative to the creative ambition of
                a project; live-action production adds cost and scheduling
                constraints that animation does not always share, and creative
                direction in this category tends to be more subjective, which
                means more rounds of revision before something feels right.
                Getting a distinctive visual style that still fits a release
                schedule is a genuine production challenge for studios, labels,
                and independent creators alike, especially when a single
                missed deadline can mean losing an entire marketing window."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Entertainment animation gives creators a way to build a
            distinctive visual identity without the scheduling and cost
            constraints of a live-action shoot. A show intro, an animated
            trailer, or a fully animated music video can be produced, tested,
            and revised faster than comparable live-action content, and 3D
            animation styles in entertainment now range widely enough to fit
            almost any creative vision. Studios and artists using
            entertainment animation video production report faster turnaround
            on time-sensitive releases and more creative freedom to try a style
            that live-action simply could not achieve on the available budget,
            without sacrificing the visual polish an audience expects."
      />
      <ServicesSection 
        title="Animation Solutions for Entertainment"
        description="What should an entertainment animation studio be able to deliver across a release cycle? These four formats span illustrative 2D work through cinematic 3D production, each suited to a different kind of project and budget."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Entertainment <span>Animation</span> Projects</>}
        description="Most studio, label, and independent creator engagements fall into three categories, each tied to a specific point in a release or marketing calendar."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Entertainment <br />Animation Process</>}
        description="Creative direction in this category is often subjective, so our process builds in more structured feedback rounds early, when changes are still fast and cheap to make."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="A trailer that looks good in isolation is not the same as one that actually builds anticipation for a release. Here is what our studio brings to that distinction."
        cards={cooperationModelsCards}
      />
      <TestimonialSection />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
