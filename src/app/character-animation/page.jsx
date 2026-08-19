import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/CharacterAnimation/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyInvestSection from "@/components/CharacterAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/CharacterAnimation/GreatVideosSection";
;
import HowWeWorkSection from "@/components/CharacterAnimation/HowWeWorkSection";
import CooperationModelsSection from "@/components/CharacterAnimation/CooperationModelsSection";

import WonderingSection from "@/components/CharacterAnimation/WonderingSection";

import CharacterWhyChooseSection from "@/components/CharacterAnimation/CharacterWhyChooseSection";
import AnimationPricingSection from "@/components/CharacterAnimation/AnimationPricingSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/CharacterAnimation/FaqSection";

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
      <StatsSection />
      <ServicesSection 
        title="Bring Characters to Life with Expert Character Animation Services"
        description="Character animation is the technical discipline that produces emotional results. The technical work is necessary. The emotional result is the only measure that matters to the audience consuming it."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection />
            <TeamStandoutSection
        subtitle="CHARACTER ANIMATION"
        title={<>Character Animation <span>Types We Create</span></>}
        description="Character animation covers every movement a character performs, from subtle idle poses to full cinematic performances. Each animation type serves a specific gameplay, storytelling, or interactive purpose."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201855044?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <HowWeWorkSection />
      <WonderingSection />
      <WhyInvestSection />
      <CooperationModelsSection />
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
      <FaqSection />
    </main>
  );
}
