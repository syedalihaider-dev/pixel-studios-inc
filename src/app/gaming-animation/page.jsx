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
    description: "Cinematic trailers built for launch, reveal, and marketing milestones across PC, console, and mobile platforms.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Assets",
    description: "Character and environment asset production supporting core development pipelines.",
    icon: "/industry/services-icon-02.png",
  },
  {
    id: 3,
    title: "Marketing",
    description: "Promotional animation and key art supporting launch campaigns and platform storefront listings.",
    icon: "/industry/services-icon-03.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Character Design",
    description: "Character concept art, modeling, and rigging for player characters, NPCs, and enemies, built to match your game's art direction from the earliest concept stage.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Environment Design",
    description: "Environment art and animation covering level backgrounds, props, and interactive world elements, built to feel cohesive with your existing world design.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Game Level Design",
    description: "Level layout and environmental animation support that works alongside your internal design team, integrating cleanly with existing level architecture.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Cinematics",
    description: "In-game cutscenes and cinematic sequences that advance story and elevate production value at key narrative moments, whether pre-rendered or built in-engine.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your game, art bible, and production timeline to scope the right animation support.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "Concept art and animation direction are developed to match your existing art style and game design.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Cinematic sequences are storyboarded and approved before animation begins.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Characters and environments are modeled and rigged to match your technical and stylistic requirements.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds and integrated with your development pipeline.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery of assets in the engine-ready formats your pipeline requires.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A game animation studio experienced with mobile, PC, and console projects across multiple genres and art styles, from stylized indie titles to AAA productions."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every asset is built to match your existing art direction, never a generic style applied regardless of your game's unique world."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built to match your development milestones and crunch schedules, scaling up or down as your production actually needs."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the engagement, integrating directly with your internal production pipeline and tools."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Gaming Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your game, your timeline, and your art direction, and we will scope the character, environment, or cinematic animation support your production actually needs to hit its next milestone, whatever the size of your studio.";

const faqs = [
  {
    question: "What Is Game Animation?",
    answer:
      "Game animation is the process of creating movement for characters, environments, and cinematic sequences within a video game, covering everything from character rigging to in-engine cutscenes.",
  },
  {
    question: "What Do Game Animation Outsourcing Services Actually Include?",
    answer:
      "Outsourcing can cover character design and animation, environment art, cinematics, or a combination of all three, scoped around whichever parts of production your internal team needs support with.",
  },
  {
    question: "How Do I Choose the Right Game Animation Studio for My Project?",
    answer:
      "Look for a studio with a portfolio matching your target art style, experience with your platform, and a production process that can integrate with your existing pipeline rather than working in isolation.",
  },
  {
    question: "What's the Difference Between Character Animation and Environment Animation?",
    answer:
      "Character animation focuses on rigging and movement for characters and creatures, while environment animation covers background elements, interactive props, and world-building assets that do not require character rigs.",
  },
  {
    question: "What Does 3D Game Animation Services Cost, and What Affects the Price?",
    answer:
      "Cost depends on asset complexity, rigging requirements, and volume of work needed. Most engagements are scoped after reviewing your art bible and production timeline.",
  },
  {
    question: "What Information Do I Need to Provide to Get an Accurate Quote?",
    answer:
      "Your art bible, reference assets, target platform, and a clear sense of scope all help us provide an accurate quote during the discovery stage.",
  },
  {
    question: "How Is Mobile Games Art Animation Different From PC or Console?",
    answer:
      "Mobile games art typically requires more optimized assets to manage file size and performance constraints, while PC and console animation can support higher polygon counts and more detailed rigging.",
  },
  {
    question: "Can 2D and 3D Game Animation Be Combined in the Same Game?",
    answer:
      "Yes. Many games mix 2D and 3D elements, such as 2D UI or cutscene art layered over a 3D game world, and we can support hybrid production approaches.",
  },
  {
    question: "Who Owns the Source Files and IP After Animation Outsourcing Is Complete?",
    answer:
      "You own the final delivered assets and associated intellectual property as outlined in your project agreement.",
  },
  {
    question: "Can You Work Within Our Existing Engine, Such as Unreal or Unity?",
    answer:
      "Yes. We deliver assets formatted for the most common game engines and can adapt our rigging and export process to fit your specific technical pipeline.",
  },
  {
    question: "Do You Sign NDAs for Unannounced Game Projects?",
    answer:
      "Yes. NDAs are standard for unannounced titles, and we follow secure file handling practices for any confidential game assets or story content.",
  },
  {
    question: "Can You Scale a Team Up Quickly for a Tight Milestone Deadline?",
    answer:
      "Yes. Flexible capacity is one of the main reasons studios use game animation outsourcing, and we can typically scale a team up for a defined crunch period with appropriate lead time.",
  },
  {
    question: "Do You Provide Rigging That Is Compatible With Our Existing Animation System?",
    answer:
      "Yes. We build rigs to match your technical requirements and existing character setup, so outsourced characters animate correctly within your established systems and tools.",
  },
  {
    question: "Can You Support Both Realistic and Stylized Art Directions?",
    answer:
      "Yes. Our team works across a range of art styles, from realistic to heavily stylized, matched to whatever direction your game's existing art bible establishes.",
  },
  {
    question: "How Do You Handle Feedback From Multiple Reviewers, Like Art Directors and Producers?",
    answer:
      "We consolidate feedback from multiple reviewers into a single, prioritized revision list before implementing changes, which keeps the process efficient even when several stakeholders are involved.",
  },
  {
    question: "Can You Produce Both Pre-Rendered Cinematics and In-Engine Cutscenes?",
    answer:
      "Yes. We can produce both, depending on your game's needs, with pre-rendered work suited to the highest visual fidelity and in-engine cutscenes suited to interactive or branching narrative sequences.",
  },
  {
    question: "Do You Provide Motion Capture Services for Character Animation?",
    answer:
      "Motion capture can be incorporated where appropriate for a project, either through our own pipeline or by working with existing mocap data your studio provides.",
  },
  {
    question: "Can You Support Live Service Games That Need Ongoing Content Updates?",
    answer:
      "Yes. Live service titles often need a steady cadence of new characters, cosmetics, or seasonal content, and we can structure an ongoing engagement around that release schedule.",
  },
  {
    question: "Do You Provide Storyboards or Animatics for Cinematic Sequences Before Full Production?",
    answer:
      "Yes. Cinematic sequences go through a storyboard and animatic stage for approval before full animation begins, giving your narrative team a checkpoint while changes are still inexpensive.",
  },
  {
    question: "Can You Support Cross-Platform Titles Releasing on Both Mobile and Console?",
    answer:
      "Yes. We can produce optimized asset variants for mobile alongside higher-fidelity versions for console or PC, from the same core character and environment models.",
  },
  {
    question: "Do You Work With Small Independent Studios as Well as Large Publishers?",
    answer:
      "Yes. We work with studios of every size, scoping engagements to fit the budget and production needs of an independent title as readily as a large publisher project.",
  },
];

export const metadata = {
  title: "Game Animation Services | Pixel Studios",
  description: "Pixel Studios' game animation services deliver character, environment, and cinematic animation for developers and publishers of every scale.",
};

export default function GamingAnimationPage() {
  return (
    <main>
      <Banner
        title="Game Animation Built to Ship On Time"
        description="Development timelines rarely leave room for animation bottlenecks. Our game animation services provide character, environment, and cinematic work as a flexible extension of your studio, scaling up during crunch and down between production cycles without the overhead of a full internal team. Every engagement is built around your existing art bible and pipeline, so outsourced work integrates cleanly rather than looking like it came from a different game entirely."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Game Animation"
        title="Why Animation Matters in the Gaming Industry?"
        description="Game development requires enormous volumes of character,
                environment, and cinematic animation, often on tight,
                milestone-driven schedules that leave little room for delay.
                Internal studios frequently lack the bandwidth to handle every
                asset in-house, especially during crunch periods before a major
                milestone or launch, and hiring a full internal animation team
                for a single project is rarely cost-effective. Marketing also
                needs trailers and promotional content that showcase the game at
                its best, often before the game itself is fully playable, which
                creates its own separate production challenge running in parallel
                with core development, and stretches lean teams even further."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Game animation outsourcing gives studios flexible production
            capacity that scales with actual need, rather than carrying a fixed
            headcount through slow periods between projects. A 3D game
            animation studio can take on character or environment work during a
            crunch period, then scale back down once that milestone ships, and
            cinematic trailers can be produced in parallel with core development
            rather than competing for the same internal resources. Studios using
            game animation outsourcing services report faster milestone
            delivery, more predictable production costs, and marketing content
            that is ready well ahead of launch instead of scrambling in the
            final weeks."
      />
      <ServicesSection 
        title="Animation Solutions for Gaming"
        description="What does a full-service game animation studio need to cover across a production cycle? These four disciplines span everything from early character concepts through finished cinematics, built to integrate with your existing pipeline."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Gaming <span>Animation</span> Projects</>}
        description="Studios typically bring in outside animation support for three recurring needs, each tied to a different point in development or marketing."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Gaming <br />Animation Process</>}
        description="Development pipelines are unforgiving of delay, so our process is built to plug into your existing production schedule rather than run on its own separate timeline."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="A character that looks good in a still frame is not the same as one that animates well in a real game engine. Here is how our studio bridges that gap."
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
