import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import CostSection from "@/components/Common/CostSection";
import FullCycleSection from "@/components/GameAnimation/FullCycleSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import GameArtSection from "@/components/GameAnimation/GameArtSection";
import DistinguishesSection from "@/components/GameAnimation/DistinguishesSection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import EnginesSection from "@/components/GameAnimation/EnginesSection";
import WonderingSection from "@/components/Common/WonderingSection";
import ProjectsSection from "@/components/GameAnimation/ProjectsSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import AnimationServicesSection from "@/components/GameAnimation/AnimationServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import ProjectCostSection from "@/components/GameAnimation/ProjectCostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

export const whyChooseSectionFeatures = [
  {
    id: 1,
    title: "Idle Animations",
    description: "Subtle ambient motion that communicates a character is alive and present when the player is not actively controlling them.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Walk Cycles",
    description: "Locomotion cycles with correct weight shift, arm swing relationship, and the pace calibrated to the game's movement speed.",
    icon: "/industry/services-icon-05.png",
  },
  {
    id: 3,
    title: "Run Cycles",
    description: "High-energy locomotion with the secondary motion and body lean that communicates speed and momentum.",
    icon: "/industry/services-icon-02.png",
  },
  {
    id: 4,
    title: "Jump Animations",
    description: "Anticipation, airborne, and landing phases, with the squash and stretch that make a jump feel physical rather than scripted.",
    icon: "/industry/services-icon-06.png",
  },
  {
    id: 5,
    title: "Attack Animations",
    description: "Attack cycles with proper anticipation phases, contact frames, and recovery that give the player satisfaction feedback at the moment of impact.",
    icon: "/industry/services-icon-03.png",
  },
  {
    id: 6,
    title: "Death Animations",
    description: "Character death animations that communicate finality through physical response rather than state-switched ragdoll.",
    icon: "/industry/services-icon-08.png",
  },
  {
    id: 7,
    title: "Interaction Animations",
    description: "Object interaction animations with the physical accuracy that makes reaching for a door handle feel connected to the actual geometry.",
    icon: "/industry/services-icon-04.png",
  },
  {
    id: 8,
    title: "Spell and Ability Animations",
    description: "Ability animations with charge-up, release, and recovery phases that communicate the power and consequence of each ability.",
    icon: "/industry/services-icon-07.png",
  },
  {
    id: 9,
    title: "Vehicle Animations",
    description: "Vehicle animation, including suspension response, articulation, and the secondary motion that makes a vehicle feel like it has mass.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 10,
    title: "Weapon Animations",
    description: "Weapon handling animation with the weight, recoil, and reload mechanics that make a weapon feel satisfying to use.",
    icon: "/industry/services-icon-05.png",
  }
];

const metadata = {
  title: "Professional Game Animation Services for Engaging Gameplay | Pixel Studios",
  description: "Need game animation services that make players feel the weight of every move? Pixel Studios delivers 2D and 3D game animation for Unity, Unreal, and any engine.",
};

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const title = (
  <>
    Start Your <span>Game Animation</span> Project Today
  </>
);

const text = "Most game animation problems are brief problems. Tell us the engine, the rig, the platform, and the animation state machine structure. We will tell you what the production requires and what it costs.";

const wonderingIndustriesData = [
  {
    name: "Improved Gameplay Experience",
    intro:
      "An animation that communicates physical feedback to the player makes the gameplay feel more responsive, more satisfying, and more real.",
    points: [
      "Animation improves player responsiveness and control feedback.",
      "Movement feels more satisfying through accurate timing and physical reactions.",
      "Well-crafted animation creates a more realistic gameplay experience."
    ]
  },
  {
    name: "Better Character Personality",
    intro:
      "Secondary motion, idle variation, and the micro-expressions that make characters feel present rather than controlled.",
    points: [
      "Secondary motion adds realism to every movement.",
      "Idle animations make characters feel alive even when inactive.",
      "Micro-expressions give characters believable personality and emotion."
    ]
  },
  {
    name: "Enhanced Immersion",
    intro:
      "Animation inconsistencies break immersion faster than almost any other visual quality issue. Consistent, polished animation sustains it.",
    points: [
      "Consistent animation maintains player immersion.",
      "Polished movement eliminates distracting visual inconsistencies.",
      "Smooth transitions create a believable game world."
    ]
  },
  {
    name: "Increased Player Engagement",
    intro:
      "Players engage more deeply with games whose characters they believe in. Animation quality is a primary variable in that belief.",
    points: [
      "Believable characters encourage stronger emotional connection.",
      "High-quality animation increases player engagement.",
      "Expressive performances keep players invested in the experience."
    ]
  },
  {
    name: "Stronger Visual Storytelling",
    intro:
      "Cinematic and facial animation carry narrative information that dialogue alone cannot deliver with equivalent emotional impact.",
    points: [
      "Facial animation communicates emotion beyond dialogue.",
      "Cinematic performances strengthen narrative delivery.",
      "Visual storytelling creates greater emotional impact."
    ]
  },
  {
    name: "Higher Production Value",
    intro:
      "Animation quality signals production investment to players evaluating a game before purchase. It is a commercial asset, not a production checkbox.",
    points: [
      "Professional animation increases perceived game quality.",
      "Polished visuals strengthen player confidence before purchase.",
      "Animation is a commercial advantage, not simply a production task."
    ]
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Project Discovery and Requirements",
    content:
      "Engine target, character rig specification, animation state machine structure, polycount budget, and delivery format are established before a keyframe is placed.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Character Rig Assessment",
    content:
      "The production rig was reviewed for animation suitability. Joint placement, weight painting quality, and blend shape range are all assessed before animation production begins.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Animation Planning",
    content:
      "Animation shot list, timing references, and state transition design are documented and approved before blocking begins.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Blocking and Keyframing",
    content:
      "Primary pose and timing established in blocking. The creative decision lives here. Everything downstream is refinement.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Refinement and Polish",
    content:
      "Spline refinement, secondary motion, and the animation polish that elevates a correctly-blocked animation to a finished one.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Engine Integration Testing",
    content:
      "Animation imported into the target engine and tested against the state machine, the transition logic, and the gameplay systems it serves. Problems caught here cost nothing.",
  },
  {
    id: 7,
    icon: "/animation.png",
    title: "Quality Assurance",
    content:
      "Internal QA review against the animation brief. Every animation is reviewed at the delivery specification before the client sees it.",
  },
  {
    id: 8,
    icon: "/animation.png",
    title: "Final Delivery",
    content:
      "Final files in the engine-native formats, according to the specifications established in discovery. Source files included.",
  }
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: "In-Game Cutscenes",
    content:
      "Cutscene animation using the game's own character assets and engine at a production quality that justifies pulling the player out of gameplay for it."
  },
  {
    id: 2,
    title: "Storytelling Cinematics",
    content:
      "Narrative cinematic animation with the camera work, character performance, and editing rhythm that serves the story the game is trying to tell."
  },
  {
    id: 3,
    title: "Launch Trailer Animation",
    content:
      "Launch trailer animation that creates the emotional argument for buying the game rather than describing what it contains."
  },
  {
    id: 4,
    title: "Teaser Trailer Animation",
    content:
      "Teaser animation that builds anticipation without revealing content the marketing campaign needs to protect until launch."
  },
  {
    id: 5,
    title: "Promotional Game Videos",
    content:
      "Promotional video animation for social media, advertising campaigns, and press outreach."
  }
];

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Character Models",
    text: "Production-quality character models at the visual standard the animation will run at. Final game-ready models with approved topology, proportions, materials, and visual quality provide the foundation for every animation. Using production-ready assets ensures the finished animations integrate correctly into the target game without requiring unnecessary asset revisions."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Rigged Assets",
    text: "Rigged character assets with documented bone naming convention and weight painting reviewed for animation suitability. We assess skeleton hierarchy, controller setup, deformation quality, constraints, and technical stability before production begins to ensure every animation performs correctly throughout the development pipeline."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Animation References",
    text: "Reference footage, existing animation examples, or documented style direction for the animation approach. Visual references establish movement quality, pacing, acting style, and gameplay behavior so every animation follows a consistent creative direction from the first blocking pass through final polish."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Game Design Documents",
    text: "Gameplay specifications that define what each animation needs to accomplish mechanically. Design documentation explains character abilities, movement systems, combat interactions, gameplay states, and player feedback requirements so every animation supports both gameplay functionality and the intended player experience."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Storyboards",
    text: "Storyboards for cinematic and cutscene animation covering camera, character position, and narrative beat. Storyboards establish scene composition, character performance, camera movement, timing, and storytelling before animation production begins, reducing revisions while keeping every cinematic sequence aligned with the creative vision."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Gameplay Requirements",
    text: "Frame timing requirements, hitbox specifications, and the gameplay information the animation needs to communicate. Technical gameplay requirements ensure every animation delivers accurate player feedback, supports gameplay mechanics, synchronizes with collision systems, and performs correctly inside the target game engine."
  }
];

const faqs = [
  {
    question: "How much does game animation cost?",
    answer:
      "A single 2D character cycle for mobile starts at around $150 to $400. A 3D character animation cycle for PC or console runs $400 to $1,200, depending on complexity. Full character animation packages with 20-plus cycles range from $5,000 to $20,000. Itemized quotes within 48 hours.",
  },
  {
    question: "Do you create animations for Unity and Unreal Engine?",
    answer:
      "Yes. Unity and Unreal Engine are our primary integration targets. Animations are tested in the target engine before delivery. Import settings, bone naming conventions, and state machine structure are confirmed at discovery.",
  },
  {
    question: "Can you animate existing character models?",
    answer:
      "Yes. We assess the existing rig for animation suitability before production begins. If the rig requires corrections, we scope and price that work before production starts.",
  },
  {
    question: "Do you provide motion capture animation?",
    answer:
      "Yes. Motion capture cleanup, retargeting, and supplementary keyframe animation for mocap sessions that require polishing before engine integration.",
  },
  {
    question: "Why high-quality animation matters in game development",
    answer:
      "Animation quality is the primary variable that determines whether a player believes in the character they are controlling. Players do not consciously evaluate animation quality. They feel the result of it in their engagement with the game.",
  },
  {
    question: "How game animations enhance player experience",
    answer:
      "Animation communicates physical feedback, emotional state, and narrative information to the player faster and more reliably than UI or dialogue. It is the invisible layer of game design that makes everything else feel intentional.",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "FBX for 3D animation, PNG sprite sheets for 2D animation, and engine-native formats for Unity and Unreal Engine, where integration is in scope. Format specifications confirmed at discovery.",
  },
  {
    question: "How long does a game animation project take?",
    answer:
      "Single-cycle animations: three to seven business days from approved rig. Full character animation packages: two to six weeks. Cinematic animation: four to eight weeks, depending on complexity.",
  },
  {
    question: "Can you create cinematic animations for game trailers?",
    answer:
      "Yes. Game trailer animation and in-game cinematic animation are both services. The brief defines whether the animation is produced for real-time engine delivery or cinematic render output.",
  },
  {
    question: "Do you support indie game developers?",
    answer:
      "Yes. Indie game animation production at the quality level of commercial release, scoped to the budgets of indie development. Flexible engagement models available.",
  },
  {
    question: "Can you integrate animations into our game engine?",
    answer:
      "Yes. Unity Animator Controller setup, Unreal Anim Blueprint integration, and state machine configuration are available as scope items alongside animation production.",
  }
];

export default function GameAnimationPage() {
  return (
    <main>
      <Banner
        title="Professional Game Animation Services for Engaging Gameplay Experiences."
        description="Pixel Studios produces game animation services built around the end state: animation that performs correctly in the engine, transitions cleanly between states, and communicates the character"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for Game Animation Services"
        statsData={statsData}
        variant="gradient"
      />
      <CostSection
        subtitle="Game Animation Services"
        title="Bring Your Characters to Life with Game Animation Services"
        description="Game animation is the invisible system that makes a player believe in the character they are controlling. The weight of a landing. The anticipation before an attack. The micro-expressions that communicate a character's personality without dialogue. None of that is accidental. All of it is designed."
        videoSrc="https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="We also sign NDAs before briefing conversations begin, work remotely with studios on every continent, and treat a launch date as a hard constraint rather than a planning assumption. If the trailer is not ready when the store page goes live, the launch is not ready. We have never been the reason a launch was not ready."
      />
      <FullCycleSection />
      <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Game <span>Animation</span> Types We Create</>}
        description="Every animation type serves a specific gameplay function. Here is what we build and what each animation needs to achieve."
        features={whyChooseSectionFeatures}
      />
      <GameArtSection />
      <DistinguishesSection />
      <HowWeWorkSection
        heading="Game Cinematic and Trailer Animation Services"
        description="We create cinematic game animations and trailer content designed to build emotional connection, communicate your game's vision, and create memorable experiences across launches, marketing campaigns, and in-game storytelling moments."
        accordionData={howWeWorkAccordionData}
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <EnginesSection />
      <WhyInvestSection
        subtitle="OUR PROCESS"
        title={<>Our Game Animation <br />Production Process</>}
        description="Every game animation project follows a structured production pipeline designed to deliver technically accurate, engine-ready animations with consistent quality. From project discovery and rig assessment to animation planning, blocking, refinement, engine integration testing, quality assurance, and final delivery, each stage ensures every animation performs smoothly, integrates seamlessly into your game engine, and meets both the creative vision and technical requirements established at the start of production."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="PROJECT REQUIREMENTS"
        title="What Do We Need to Start Your Game Animation Project?"
        description="Successful game animation begins with complete production assets, technical documentation, and clearly defined gameplay requirements. Character models, rigged assets, animation references, game design documents, storyboards, and gameplay specifications allow our team to create animations that not only look natural but also integrate seamlessly into your game engine while supporting every gameplay mechanic and player interaction."
        cards={cooperationModelsCards}
      />
      <WonderingSection
        subtitle="GAME ANIMATION BENEFITS"
        title="Why Professional Game Animation Matters?"
        description="Professional game animation improves gameplay responsiveness, strengthens character personality, enhances immersion, increases player engagement, supports visual storytelling, and raises the overall production value of a game. Every animation is designed to serve both the gameplay experience and the commercial success of the final product."
        data={wonderingIndustriesData}
      />
      <ProjectsSection />
      <AnimationServicesSection />
      <PortfolioShowcase />
      <ProjectCostSection />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
