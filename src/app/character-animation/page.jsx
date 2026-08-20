import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import WonderingSection from "@/components/Common/WonderingSection";
import CharacterWhyChooseSection from "@/components/CharacterAnimation/CharacterWhyChooseSection";
import AnimationPricingSection from "@/components/CharacterAnimation/AnimationPricingSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const benefitsSectionFeatures = [
  {
    id: 1,
    title: 'Stronger Brand Recall',
    description: "Motion combined with sound creates memory encoding that static visual elements cannot. A well-designed animated logo becomes recognizable to repeat viewers faster than a static equivalent seen the same number of times.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'More Engaging Marketing Content',
    description: "Every video that opens with a polished logo animation is more engaging from the first frame than one that begins with a static brand mark or no brand identification at all.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Consistent Visual Branding',
    description: "A single logo animation production used consistently across all video content creates a uniform brand opening that functions as an audio-visual standard across every channel.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Professional Brand Presentation',
    description: "Logo animation signals investment in brand presentation. Audiences, clients, and partners associate polished animated identity with organizational credibility and attention to detail.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Improved Audience Attention',
    description: "Motion captures attention more reliably than static imagery. A logo animation at the start of a video secures viewer attention before the content begins.",
    icon: '/icons/experienced.png'
  }
];

const riggingSectionFeatures = [
  {
    id: 1,
    title: "2D Character Rigging",
    description:
      "2D rigging for puppet animation in After Effects, Spine, and other 2D animation tools.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "3D Character Rigging",
    description:
      "3D rigging for Unity, Unreal, and custom engine pipelines with documented bone naming conventions.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Facial Rig Setup",
    description:
      "Blend shape systems and facial rig configuration for dialogue and emotional performance animation.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Skeleton and Bone Systems",
    description:
      "Skeleton design and weight painting for animation rigs that deform correctly rather than creating vertex artifacts at joint locations.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Animation Optimization",
    description:
      "Animation optimization for performance-constrained platforms, including mobile and VR.",
    icon: "/icons/experienced.png"
  }
];

const standoutFeatures = [
  {
    id: 1,
    title: "Idle Animations",
    description:
      "Subtle ambient motion communicating a character is present and alive between active player inputs.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Walk Cycles",
    description:
      "Locomotion with weight, personality, and the gait specific to the character's physical build and emotional state.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Run Cycles",
    description:
      "High-energy movement with body lean and secondary motion that communicates speed and the urgency of the character's purpose.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Jump Animations",
    description:
      "Anticipation, airborne, and landing with squash and stretch calibrated to the character's physical weight.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Combat Animations",
    description:
      "Attack, defense, and impact animation with anticipation and recovery phases that communicate consequence and power.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Interaction Animations",
    description:
      "Character-environment interactions that feel physically connected to the geometry rather than approximated near it.",
    icon: "/icons/experienced.png"
  },
  {
    id: 7,
    title: "Performance Animations",
    description:
      "Expressive character performance for narrative, emotional, and comedic moments.",
    icon: "/icons/experienced.png"
  },
  {
    id: 8,
    title: "Facial Expressions",
    description:
      "Emotional state communication through facial motion, with the subtlety that makes an expression feel genuine.",
    icon: "/icons/experienced.png"
  },
  {
    id: 9,
    title: "Dialogue Animation",
    description:
      "Full-body character performance synchronized with recorded dialogue. The body communicates the character's emotional state. The mouth communicates the words.",
    icon: "/icons/experienced.png"
  },
  {
    id: 10,
    title: "Emotes and Reactions",
    description:
      "Short expressive animations for social contexts, games with player emotes, and characters that need to respond to events without dialogue.",
    icon: "/icons/experienced.png"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "2D Character Animation",
    description:
      "2D character animation for games, marketing, and entertainment content. Frame-by-frame, rigged puppet, and hybrid animation approaches were selected based on the visual style and production requirements of each brief.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Character Animation",
    description:
      "3D character animation for games, film, advertising, and interactive content. Keyframe and motion capture approaches delivered to the visual quality and technical specification that the brief defines.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Game Character Animation",
    description:
      "Real-time game character animation with the state machine awareness and engine integration testing that game animation production requires, beyond standard character performance.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Creature Animation",
    description:
      "Non-human character animation for creatures, animals, and entities whose movement logic is derived from anatomy rather than borrowing human movement conventions and hoping it reads correctly.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Facial Animation",
    description:
      "Blend shape-driven facial animation for emotional performance, dialogue scenes, and the micro-expressions that distinguish a character that feels present from one that appears rendered.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Lip Sync Animation",
    description:
      "Phoneme-accurate lip sync animation against recorded dialogue. Automated lip sync is reviewed and corrected by animators because automated processes produce technically compliant results that do not look correct.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Motion Capture Animation",
    description:
      "Motion capture data processed, cleaned, and retargeted to production rigs. Mocap is a data capture method, not a finished animation product. We treat the gap between those two things as production work.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Cinematic Character Animation",
    description:
      "Character performance animation for film, game cinematics, and promotional content at the quality level that cinematic output demands.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Cartoon Character Animation",
    description:
      "Exaggerated, expressive cartoon character animation with the timing and secondary motion that makes cartoon characters feel alive rather than illustrated.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Realistic Character Animation",
    description:
      "Photorealistic character performance animation with the subtle weight and secondary motion that distinguishes convincing realistic animation from accurate realistic animation.",
    videoSrc: "https://player.vimeo.com/video/1201855045?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
    title: "Character Analysis and Planning",
    content:
      "Every successful animation begins with understanding the character before any movement is created. We establish physical proportions, personality traits, rig quality, animation style references, performance objectives, and all production requirements before the first pose is created. This planning stage ensures the animation reflects both the technical requirements of the project and the intended emotional performance of the character throughout every scene.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Storyboarding and Pose Development",
    content:
      "Complex animation sequences are visualized through storyboards and key pose exploration before full production begins. We define the major storytelling beats, camera relationships, and performance poses that communicate the character's intent. By approving these foundations early, we reduce unnecessary revisions later while ensuring every movement supports the narrative and visual direction established for the project.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Rigging Preparation",
    content:
      "Before production starts, every rig undergoes a detailed assessment to confirm it is suitable for animation. Controller functionality, deformation quality, facial systems, constraints, and technical limitations are carefully reviewed. Any issues are corrected before animation begins, preventing production delays and ensuring the rig performs consistently throughout every sequence.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Animation Blocking",
    content:
      "Blocking establishes the core creative performance of the animation. Primary poses, timing, spacing, and scene rhythm are built during this phase, allowing the team to focus on storytelling before refining movement. Every creative decision that defines the final performance is made here, with later production stages dedicated to enhancing and polishing those approved animation choices.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Refinement and Polish",
    content:
      "Once the blocking has been approved, we refine spline curves, improve timing, adjust spacing, and introduce secondary motion that gives the character believable weight and personality. Fine details such as overlapping action, follow-through, balance, and subtle body mechanics are carefully polished to transform technically correct animation into a convincing character performance.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Facial Animation and Lip Sync",
    content:
      "After body animation is finalized, facial performance and dialogue synchronization are added. Blend shape animation, eye movement, facial expressions, and phoneme-accurate lip sync are carefully crafted to match recorded dialogue while preserving emotional authenticity. Every facial movement is refined manually to achieve performances that feel expressive, natural, and believable.",
  },
  {
    id: 7,
    icon: "/animation.png",
    title: "Quality Assurance",
    content:
      "Every animation passes through a comprehensive internal quality review before delivery. Performance consistency, technical accuracy, timing, rig stability, visual continuity, and compliance with the approved creative brief are carefully evaluated. Any issues are resolved before client delivery to ensure the final animation meets both artistic and production-quality standards.",
  },
  {
    id: 8,
    icon: "/animation.png",
    title: "Final Delivery",
    content:
      "Completed animation files are delivered in every format agreed upon during project kickoff. Source files, production assets, and integration documentation are included where required, allowing developers, editors, or production teams to implement the animations efficiently while maintaining compatibility with the intended workflow and target platform.",
  }
];

const title = (
  <>
    Start Your <span>Character Animation</span> Project Today
  </>
);

const text = "Tell us the character, the context, and the output requirement. We will tell you the production approach and what it costs.";

const howWeWorkAccordionData = [
  {
    id: 1,
    title: "1 Player Character Animation",
    content:
      "The animation system on which the player's experience is built. Responsive, fluid, and physically communicative of the player's actions."
  },
  {
    id: 2,
    title: "2 NPC Animation",
    content:
      "Supporting character animation that makes the game world feel inhabited without consuming the production budget the hero character requires."
  },
  {
    id: 3,
    title: "3 Creature and Monster Animation",
    content:
      "Non-human antagonist animation with the threat communication and behavioral distinctiveness that makes each enemy type memorable."
  },
  {
    id: 4,
    title: "4 Combat Animation Systems",
    content:
      "Full combat animation systems, including attack varieties, defensive responses, hit reactions, and the state machine design that makes them work as a coherent system."
  },
  {
    id: 5,
    title: "5 Engine-Ready Game Animations",
    content:
      "Animations delivered in engine-native formats, tested in the target build, and documented for the integration team."
  }
];

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Character Design Files",
    text: "Approved character design files provide the visual foundation for the entire animation process. Front, side, and perspective views, color references, expression sheets, and any existing style guides help establish the character's proportions, personality, and intended movement style before production begins. The more complete the design package, the more accurately the final animation reflects the original creative vision."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Rigged Models",
    text: "Rigged character models prepared for animation allow production to begin immediately. We review skeleton hierarchy, controller setup, weight painting, constraints, facial rigs, and documented bone naming conventions to confirm the rig is suitable for production. Any technical issues are identified and resolved before animation starts, preventing delays later in the pipeline."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Concept Art",
    text: "Character concept art helps define personality, visual language, costume details, expressions, and overall performance direction. Even when final production models already exist, concept artwork provides valuable creative context that influences posing, body mechanics, acting choices, and the emotional performance delivered throughout the animation."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Storyboards",
    text: "Storyboards provide a clear visual blueprint for complex animation sequences before production begins. Camera angles, scene progression, character actions, emotional beats, and performance timing are established in advance, allowing animators to focus on execution rather than making structural storytelling decisions during production."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Voiceovers",
    text: "Final recorded dialogue is required for any project involving facial animation or lip sync. Working from approved voice recordings allows animators to synchronize phonemes, facial expressions, eye movement, and body performance accurately, resulting in natural character acting that matches both the dialogue and the intended emotional delivery."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Animation References",
    text: "Reference footage, motion studies, previous animations, or visual examples help establish the desired animation style, pacing, acting quality, and movement language before production begins. These references ensure every animator works toward a consistent visual standard while reducing interpretation differences throughout the project."
  }
];

const wonderingIndustriesData = [
  {
    name: "Brand Mascot Animation",
    intro:
      "Mascot character animation with the personality consistency and expressive range to serve the brand across multiple campaigns and platforms.",
    points: [
      "Consistent character personality across marketing campaigns.",
      "Expressive animation that reinforces brand identity.",
      "Adaptable mascot performances for websites, ads, social media, and promotional content."
    ]
  },
  {
    name: "Explainer Video Characters",
    intro:
      "Character animation for explainer videos where the character's role is to guide the viewer through a complex message without overshadowing it.",
    points: [
      "Characters simplify complex topics through visual storytelling.",
      "Designed to support the message rather than distract from it.",
      "Ideal for product explainers, onboarding videos, and educational content."
    ]
  },
  {
    name: "Social Media Character Content",
    intro:
      "Short-form character animation for social media with the hook, energy, and format calibrated to each platform's audience behavior.",
    points: [
      "Platform-optimized animations for Instagram, TikTok, YouTube Shorts, and Facebook.",
      "Attention-grabbing character performances designed for short-form viewing.",
      "Built to increase engagement, shares, and audience interaction."
    ]
  },
  {
    name: "Advertising Campaign Characters",
    intro:
      "Campaign character animation that builds an audience relationship with the character across a series of connected advertising pieces.",
    points: [
      "Characters developed for long-term advertising campaigns.",
      "Consistent visual identity across multiple campaign assets.",
      "Story-driven performances that strengthen audience recognition and brand recall."
    ]
  }
];

const faqs = [
  {
    question: "What makes a character animation look believable?",
    answer:
      "Weight, anticipation, follow-through, and the micro-imperfections that distinguish organic motion from mechanical motion. A character that obeys physics while appearing to make decisions is a believable character.",
  },
  {
    question: "What is the difference between character animation and motion graphics?",
    answer:
      "Character animation expresses personality and intention through physical performance. Motion graphics communicate information and brand through designed motion. Both are valuable. Neither substitutes for the other.",
  },
  {
    question: "Do I need a rigged character before animation starts?",
    answer:
      "Yes. A production rig is required before animation can begin. If the character is not yet rigged, we can scope and price rigging as part of the engagement.",
  },
  {
    question: "Can you animate an existing character design?",
    answer:
      "Yes. We work from existing character designs, assess the rig for animation suitability, and begin production from that point.",
  },
  {
    question: "What is facial animation and lip sync?",
    answer:
      "Facial animation uses blend shapes to produce emotional expressions and mouth shapes. Lip sync matches the mouth animation to the recorded dialogue phoneme by phoneme. Both are required for characters with dialogue.",
  },
  {
    question: "Should I choose 2D or 3D character animation?",
    answer:
      "2D is more efficient for flat visual styles and high-volume content production. 3D is better for dimensional visual styles, realistic character performance, and content requiring multiple camera angles from the same animation.",
  },
  {
    question: "Can you animate characters for games and marketing campaigns?",
    answer:
      "Yes. Game character animation and marketing character animation are both active services with different technical requirements and delivery specifications.",
  },
  {
    question: "How many animation cycles should a game character have?",
    answer:
      "A basic playable character requires 15 to 25 cycles: locomotion, combat, interaction, and idle states. More complex characters with multiple move sets, ability systems, or emotional states require proportionally more.",
  },
  {
    question: "Can you work with our in-house creative team?",
    answer:
      "Yes. We integrate into existing creative teams rather than requiring clients to adapt their workflow to ours. Style guide, alignment, and communication structures are established at the start of every engagement.",
  }
];

export const metadata = {
  title: "Professional Character Animation Services | Pixel Studios",
  description: "Need character animation that makes audiences feel something? Pixel Studios delivers 2D and 3D character animation for games, film, marketing, and corporate content.",
};

export default function CharacterAnimationPage() {
  return (
    <main>
      <Banner
        title="Professional Character Animation Services"
        description="A character animation that is technically correct but emotionally empty is one of the most expensive production failures in animated content. It is expensive because it passes every quality checklist, ships on time, and then fails the only test that matters: the audience either connects with the character or they do not. The connection is not produced by correct timing and clean splines. It is produced by the weight, the intention, and the small imperfections of motion that make an animated character feel like it is making decisions rather than executing a motion path. At Pixel Studios Inc., our character animation services are built around that distinction. We produce animations that audiences believe."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for Character Animation Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Bring Characters to Life with Expert Character Animation Services"
        description="Character animation is the technical discipline that produces emotional results. The technical work is necessary. The emotional result is the only measure that matters to the audience consuming it."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TeamStandoutSection
        subtitle="CHARACTER ANIMATION"
        title={<>Character Animation <span>Types We Create</span></>}
        description="Character animation covers every movement a character performs, from subtle idle poses to full cinematic performances. Each animation type serves a specific gameplay, storytelling, or interactive purpose."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201855044?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <HowWeWorkSection
        heading="Character Animation for Games"
        description="Game character animation combines technical precision with responsive movement systems that make every interaction feel natural. From player-controlled heroes to NPCs, creatures, and combat systems, every animation is built for performance, gameplay clarity, and seamless engine integration."
        accordionData={howWeWorkAccordionData}
      />
      <WonderingSection
        subtitle="MARKETING & BRANDING"
        title="Character Animation for Marketing and Branding"
        description="Character animation gives brands a recognizable personality that audiences remember across campaigns, videos, and social platforms. From mascots to advertising campaigns, every character is designed to strengthen engagement while supporting the brand message."
        data={wonderingIndustriesData}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Character Animation <br />Production Process</>}
        description="Every character animation project follows a structured production workflow that prioritizes planning, technical preparation, creative performance, and quality assurance. From character analysis and storyboard development to animation blocking, facial performance, refinement, and final delivery, each stage is designed to ensure the finished animation performs naturally, integrates seamlessly into production pipelines, and meets the visual quality standards established at the beginning of the project."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="PROJECT REQUIREMENTS"
        title="What Do We Need to Start Your Character Animation Project?"
        description="A successful character animation project begins with complete production assets and clear creative direction. Character designs, rigged models, concept artwork, storyboards, voice recordings, and animation references allow our team to begin production efficiently while ensuring every movement, performance, and technical decision aligns with your creative vision from the very first stage."
        cards={cooperationModelsCards}
      />
      <TeamStandoutSection
        subtitle="RIGGING & ANIMATION"
        title={<>Character Rigging and <span>Animation Support</span></>}
        description="Strong character animation begins with a reliable rig. We provide complete rigging and animation support, including 2D and 3D rig creation, facial rig setup, skeleton development, weight painting, and performance optimization to ensure characters move naturally across games, films, marketing content, and real-time engines."
        features={riggingSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201855043?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <TeamStandoutSection
        subtitle="TYPES OF"
        title={<>Benefits of Professional <span>Logo Animation</span></>}
        description="What professionally produced logo animation does for a brand that a static logo in a video frame cannot replicate."
        features={benefitsSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <CharacterWhyChooseSection />
      <AnimationPricingSection />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
