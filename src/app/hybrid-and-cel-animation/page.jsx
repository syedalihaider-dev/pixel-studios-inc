import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import CostSection from "@/components/Common/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WonderingSection from "@/components/Common/WonderingSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import AnimationServicesSection from "@/components/HybridAnimation/AnimationServicesSection";
import ProjectCostSection from "@/components/HybridAnimation/ProjectCostSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: "What Is Cel Animation?",
    description:
      "Cel animation is the technique of drawing each frame individually, traditionally on transparent celluloid sheets photographed in sequence. The term now applies broadly to any frame-by-frame drawn animation, traditional or digital, that produces the specific visual character of hand-drawn motion.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "What Is Hybrid Animation?",
    description:
      "Hybrid animation combines two or more animation techniques, most commonly 2D and 3D, within a single production. The combination is used deliberately: each technique applied to the elements it renders most effectively.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Traditional vs Digital Cel Animation",
    description:
      "Traditional cel animation is drawn and photographed on physical media. Digital cel animation replicates the same frame-by-frame drawing process in software. The visual result can be nearly indistinguishable. The production workflow and cost structure are different.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Combining 2D and 3D Animation Techniques",
    description:
      "Successful hybrid production requires a consistent visual language between the 2D and 3D elements so the combination reads as an intentional style rather than a visible technical seam.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Choosing the Right Animation Style for Your Project",
    description:
      "The technique is determined by the visual concept, the budget, and the production timeline, not by studio default. We recommend the approach that serves the specific creative brief.",
    icon: "/icons/experienced.png"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Traditional Cel Animation",
    description:
      "Hand-drawn cel-style animation with the specific visual character that traditional frame-by-frame production produces: subtle line variation, organic timing, and the texture that no rigged puppet approximates convincingly.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Digital Cel Animation",
    description:
      "The visual aesthetic of traditional cel animation produced with digital tools for production efficiency without sacrificing the frame-by-frame craftsmanship that gives cel animation its specific character.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Hybrid 2D and 3D Animation",
    description:
      "Combined 2D and 3D production where each technique is applied where it serves the visual concept: 3D for dimensional environments or objects, 2D for character work with the expressive hand-crafted quality 3D rigging cannot fully replicate.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Frame-by-Frame Animation",
    description:
      "Full frame-by-frame production for content where every frame is a hand-produced drawing rather than an interpolated tween. The most labor-intensive animation technique and the one that produces the most distinctive, organic motion quality.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Character Animation",
    description:
      "Character performance built through cel or hybrid technique for productions where the character's expressive range and visual specificity are central to the content's identity.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Effects Animation",
    description:
      "Hand-animated effects work: fire, water, magic, impact, and the visual effects vocabulary that cel-style production renders with a texture and energy that procedural effects systems do not replicate.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Short Films",
    description:
      "Full short film production in cel or hybrid technique for creators, brands, and studios producing standalone narrative content with festival, streaming, or brand storytelling objectives.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Custom Hybrid Animation Projects",
    description:
      "Bespoke technique combinations built for a specific creative vision that does not fit a standard production category. Brief us on the visual concept and we will determine the right technical approach.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const title = (
  <>
    Start Your <span>Hybrid and Cel Animation</span> Project
  </>
);

const text = "Tell us the creative concept and the visual reference. We will tell you the right technique and what it costs.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Handcrafted Artistic Appeal",
    text: "Visual texture and organic imperfection that signals genuine craftsmanship to an audience increasingly aware of templated production. Handcrafted animation creates a unique visual character where every frame carries intentional artistic decisions that distinguish the final content from automated or repetitive animation styles."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Dynamic Character Performance",
    text: "Expressive range that frame-by-frame drawing achieves more convincingly than rigged puppet interpolation for certain performance styles. Traditional and hybrid techniques allow animators to push poses, timing, and emotional expressions beyond standard rig limitations when the creative direction demands a more distinctive performance."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Distinctive Visual Identity",
    text: "Content that does not resemble the templated production flooding every content category, producing genuine brand recall. A carefully crafted animation style creates a recognizable visual language that helps brands, creators, and studios establish a stronger connection with their audience."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Greater Creative Flexibility",
    text: "No rig constraints limiting what a character can physically do. If it can be drawn, it can be animated. Frame-by-frame and hybrid approaches provide complete creative freedom to design movements, transformations, and visual moments that would be difficult or impossible through traditional rig-based animation systems."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Rich Visual Detail",
    text: "Frame-level control over every visual element, producing a density of intentional detail that automated interpolation does not offer. Each movement, expression, effect, and visual transition can be carefully crafted to support the artistic direction and emotional impact of the project."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Timeless Animation Aesthetics",
    text: "A visual style with decades of proven audience affection that does not date the way templated motion graphics trends do. Cel and hybrid animation techniques provide a lasting artistic quality that continues to feel intentional, memorable, and visually relevant across different audiences and platforms."
  }
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: "Anime-Inspired Animation",
    content:
      "The visual conventions and pacing of anime production applied to original character and story content. This approach focuses on expressive character acting, dynamic composition, controlled timing, and the stylistic elements that define anime-inspired visual storytelling while creating original content with its own identity."
  },
  {
    id: 2,
    title: "Cartoon Animation",
    content:
      "Classic cartoon visual language with the exaggerated timing that cel technique renders naturally. Cartoon animation uses expressive poses, dynamic movement, and carefully crafted comedic or emotional timing to create characters that feel energetic, memorable, and visually engaging."
  },
  {
    id: 3,
    title: "Cinematic Animation",
    content:
      "Dramatic, film-referenced visual composition and pacing for narrative-driven hybrid productions. Cinematic animation combines storytelling-focused performances, camera direction, emotional timing, and detailed visual presentation to create experiences designed around narrative impact."
  },
  {
    id: 4,
    title: "Stylized Character Animation",
    content:
      "Distinctive character visual design built specifically for cel or hybrid production rather than adapted from a rigged 3D asset. This style allows complete artistic control over proportions, movement language, expressions, and personality-driven animation choices."
  },
  {
    id: 5,
    title: "Retro Animation Styles",
    content:
      "Period-specific visual aesthetics referencing particular eras of animation history for brands seeking that specific nostalgic register. Retro-inspired animation recreates the visual characteristics, timing, textures, and artistic details associated with classic animation styles while applying them to modern creative projects."
  },
  {
    id: 6,
    title: "Modern Hybrid Animation",
    content:
      "Contemporary visual sensibilities applied to the traditional technique, avoiding pure nostalgia in favor of a current visual language. Modern hybrid animation combines handcrafted artistic qualities with updated design approaches to create visuals that feel fresh, relevant, and suitable for today's audiences."
  }
];

const wonderingIndustriesData = [
  {
    name: "Character Design",
    intro:
      "Character design establishes the foundation of hybrid and cel animation by defining the visual identity, personality, proportions, and expressive range the animation style requires. Characters are created specifically for the drawing approach and performance possibilities that frame-by-frame and hybrid techniques provide.",
    points: [
      "Character designs are developed with animation movement and visual storytelling in mind.",
      "Every shape, proportion, expression, and detail supports the intended artistic direction.",
      "Pinterest references, visual moodboards, and style inspirations help establish a clear creative direction before production begins."
    ]
  },
  {
    name: "Visual Development",
    intro:
      "Visual development creates the complete artistic language of the project before animation production starts. Colors, environments, character styles, textures, and overall visual direction are established to ensure every animated frame maintains consistency and communicates the intended creative vision.",
    points: [
      "Style frames and visual references define the overall look and atmosphere of the animation.",
      "Pinterest boards and creative references help explore color palettes, environments, compositions, and artistic influences.",
      "A strong visual foundation ensures every scene feels connected and intentionally designed."
    ]
  },
  {
    name: "Frame-by-Frame Motion",
    intro:
      "Frame-by-frame animation is the core discipline behind authentic cel animation, where every movement is carefully crafted instead of relying on automated interpolation. Each individual frame receives artistic attention to create organic motion, expressive timing, and a handcrafted visual quality.",
    points: [
      "Every frame is designed intentionally to create natural and expressive movement.",
      "Hand-drawn animation allows greater control over personality, timing, and emotional performance.",
      "Frame-by-frame craftsmanship creates the unique visual character that defines cel animation."
    ]
  },
  {
    name: "Timing and Spacing",
    intro:
      "Timing and spacing determine how animation feels to the audience. These fundamental animation principles control weight, emotion, speed, rhythm, and overall believability, transforming individual drawings into convincing movement.",
    points: [
      "Proper timing creates natural rhythm and emotional impact.",
      "Spacing decisions control acceleration, weight, and physical realism.",
      "Carefully planned motion prevents animation from feeling mechanical or artificial."
    ]
  },
  {
    name: "Effects Animation",
    intro:
      "Effects animation adds another layer of visual storytelling through hand-crafted elements such as fire, water, magic, impacts, smoke, and environmental effects. These elements are designed to match the character animation style and create a unified visual experience.",
    points: [
      "Hand-drawn effects enhance the personality and energy of animated scenes.",
      "Effects are designed to match the project's artistic direction and animation style.",
      "Visual effects support storytelling by adding movement, atmosphere, and emotional impact."
    ]
  },
  {
    name: "Background and Environment Design",
    intro:
      "Background and environment design completes the visual world by creating spaces that complement the character animation. Environments are developed with the same artistic language, color direction, and visual detail as the animated characters to maintain a consistent experience.",
    points: [
      "Environment artwork is created to support the character's visual style.",
      "Background details, compositions, and colors enhance storytelling and atmosphere.",
      "Pinterest-inspired references and environment moodboards help define unique worlds and visual settings."
    ]
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Creative Discovery",
    content:
      "The creative direction is established before production begins through visual references, brand context, narrative requirements, and technique selection. This stage defines the animation style, artistic approach, production goals, and the technical method that best supports the intended creative vision.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Story and Concept Development",
    content:
      "Narrative structure, messaging approach, and creative concepts are developed according to the specific requirements of the project. Every storytelling decision is planned to ensure the animation communicates the intended emotion, message, and audience experience effectively.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Character and Environment Design",
    content:
      "Characters, backgrounds, and environments are designed specifically for the selected hybrid or cel animation technique. Visual style, proportions, colors, details, and artistic elements are carefully developed to create a consistent world that supports the overall animation direction.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Storyboarding and Animatics",
    content:
      "The complete animation sequence is mapped through detailed storyboards and animatics before frame production begins. Camera movement, scene composition, timing, character actions, and transitions are reviewed to ensure the final animation follows a clear and approved creative structure.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation Production",
    content:
      "Frame-by-frame and hybrid animation production is executed according to the approved storyboard, visual direction, and technical requirements. Every movement, drawing, transition, and animated element is carefully produced to achieve the intended artistic quality and storytelling impact.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Compositing and Visual Effects",
    content:
      "Multiple animation layers are combined through professional compositing workflows, with visual effects integrated to complete the final production. Hybrid projects receive careful layer management, effects treatment, and color consistency to ensure every element feels like part of one unified visual experience.",
  },
  {
    id: 7,
    icon: "/animation.png",
    title: "Sound Design and Music",
    content:
      "Audio elements are produced and integrated according to the animation's pacing, mood, and storytelling requirements. Sound effects, background music, and audio timing are carefully matched with visual movement to strengthen emotional impact and create a complete viewing experience.",
  },
  {
    id: 8,
    icon: "/animation.png",
    title: "Final Rendering and Delivery",
    content:
      "The completed animation is rendered and delivered in the formats required for the intended distribution platform. Final files are prepared according to technical specifications, ensuring compatibility for marketing campaigns, streaming platforms, digital content, or any other production requirements.",
  }
];

const faqs = [
  {
    question: "What are animation cels?",
    answer:
      "Animation cels are the transparent sheets traditionally used to hand-draw individual animation frames, allowing static backgrounds to be reused while characters were drawn on overlaying transparent layers. The term now broadly refers to frame-by-frame drawn animation regardless of production medium.",
  },
  {
    question: "How can cel animation videos improve my marketing campaigns?",
    answer:
      "Cel animation's distinctive visual texture stands out in a content environment saturated with templated motion graphics and rigged puppet animation, producing stronger brand recall and content differentiation.",
  },
  {
    question: "What is the difference between cel animation and digital animation?",
    answer:
      "Cel animation refers specifically to frame-by-frame drawn technique, traditional or digital. Digital animation is a broader category that includes rigged puppet animation, motion graphics, and 3D production alongside digital cel work.",
  },
  {
    question: "How much do hybrid animation services cost?",
    answer:
      "A 60-second hybrid 2D/3D production typically starts at $6,000 to $12,000 depending on frame density and technique complexity. Full frame-by-frame cel animation of equivalent length runs $8,000 to $18,000 given the higher labor intensity.",
  },
  {
    question: "How long does frame-by-frame animation take?",
    answer:
      "A 30-second sequence of fully hand-drawn frame-by-frame animation typically requires three to five weeks of production time given the per-frame labor investment.",
  },
  {
    question: "Can hybrid animation combine 2D and 3D elements?",
    answer:
      "Yes, this is the defining characteristic of hybrid production. The specific combination approach is determined by the creative brief and selected based on which technique best serves each visual element.",
  },
  {
    question: "Is cel animation still used in modern productions?",
    answer:
      "Yes. Cel-style animation remains in active commercial and entertainment production specifically because its visual distinctiveness has become more valuable as templated animation has become more common.",
  },
  {
    question: "What types of projects work best with hybrid animation?",
    answer:
      "Brand content seeking visual distinctiveness, entertainment content with a specific stylistic identity, and any project where the creative concept genuinely requires combining dimensional and flat visual elements are ideal applications for hybrid animation.",
  },
  {
    question: "How is traditional cel animation created?",
    answer:
      "Each frame is individually drawn, traditionally on transparent celluloid over a static background, historically photographed in sequence. Digital cel animation replicates this process in software while preserving the frame-by-frame drawing discipline.",
  },
  {
    question: "Why choose hybrid animation over other animation styles?",
    answer:
      "Hybrid animation is selected when the creative concept requires visual elements that neither pure 2D nor pure 3D can deliver alone, or when a brand needs visual distinctiveness that standard rigged animation does not provide.",
  },
  {
    question: "What should I consider when choosing a cel animation studio?",
    answer:
      "Ask to see actual frame-by-frame work, not rigged animation marketed as hand-drawn. Ask about the studio's traditional animation training because the craft discipline is specific and not every animation studio has the required experience.",
  },
  {
    question: "How can a cel animation video production company benefit my brand?",
    answer:
      "Genuine visual distinctiveness in a content environment where most competitors are using templated production helps create stronger brand recall and makes the content stand out from standard animated campaigns.",
  },
  {
    question: "Why are cel animated videos effective for advertising?",
    answer:
      "The handcrafted visual quality signals production investment and creative intention to viewers, which helps build brand trust and recall more effectively than content that appears templated or automated.",
  }
];

export const metadata = {
  title: "Hybrid & Cel Animation Services for Unique and Expressive Visual Storytelling | Pixel Studios",
  description: "Need cel animation or hybrid 2D/3D production with genuine craft behind it? Pixel Studios delivers traditional cel, digital cel, and hybrid animation for brands and creators who want a distinctive visual identity.",
};

export default function HybridAnimationPage() {
  return (
    <main>
      <Banner
        title="Hybrid and Cel Animation Services for Unique and Expressive Visual Storytelling"
        description="Cel animation and hybrid 2D/3D production are slower and more labor-intensive than puppet rigging, and that additional labor is exactly what produces the handcrafted visual texture that makes content look like it was made by artists rather than assembled from a template library. Pixel Studios Inc. produces hybrid and cel animation for brands and creators who understand that distinctiveness is a competitive advantage worth the additional production investment."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for Cel Animation Services"
        statsData={statsData}
        variant="gradient"
      />
      <CostSection
        subtitle="Hybrid & Cell Animation"
        title="Bring Every Frame to Life with Expert Hybrid and Cel Animation"
        description="Cel animation, whether produced traditionally or digitally, and hybrid 2D/3D production both trade production efficiency for visual specificity. That trade is the entire value proposition. Content produced this way does not look like everything else currently running in a given category, and that visual distinctiveness compounds into brand recognition that templated production cannot generate."
        videoSrc="https://player.vimeo.com/video/1201625004?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="We also sign NDAs before briefing conversations begin, work remotely with studios on every continent, and treat a launch date as a hard constraint rather than a planning assumption. If the trailer is not ready when the store page goes live, the launch is not ready. We have never been the reason a launch was not ready."
      />
      <ServicesSection
        title="Our Hybrid and Cel Animation Services"
        description="We create traditional cel, digital cel, and hybrid animation experiences that combine handcrafted visual quality with modern production techniques. From frame-by-frame character animation to animated short films and custom hybrid projects, every approach is selected based on the creative vision, storytelling requirements, and unique visual identity of the project."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TeamStandoutSection
        subtitle="HYBRID & CEL ANIMATION"
        title={<>Understanding Hybrid and Cel Animation</>}
        description="Hybrid and cel animation combine traditional artistic techniques with modern production workflows to create distinctive visual experiences. From hand-drawn frame-by-frame animation to carefully integrated 2D and 3D techniques, each approach is selected based on the creative direction, storytelling goals, and production requirements of the project."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201625004?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <CooperationModelsSection
        subtitle="HYBRID & CEL ANIMATION"
        title="Why Creators Choose Hybrid and Cel Animation?"
        description="Hybrid and cel animation provide creators with a distinctive visual language built around craftsmanship, expressive performance, and complete artistic control. From handcrafted frame-by-frame details to carefully combined 2D and 3D techniques, these approaches allow brands, studios, and creators to produce animation that feels unique, memorable, and emotionally engaging."
        cards={cooperationModelsCards}
      />
      <HowWeWorkSection
        heading="Animation Styles We Create"
        description="We create a wide range of animation styles using cel and hybrid techniques, from anime-inspired and cartoon visuals to cinematic, stylized, retro, and modern animation approaches. Each style is developed around the project's creative direction, storytelling requirements, and desired audience experience."
        accordionData={howWeWorkAccordionData}
      />
      <WonderingSection
        subtitle="HYBRID & CEL ANIMATION"
        title="Key Elements of High-Quality Hybrid and Cel Animation"
        description="High-quality hybrid and cel animation combines artistic direction, detailed character design, frame-by-frame craftsmanship, and carefully developed visual elements to create memorable animated experiences. From character development and visual exploration to hand-drawn motion, effects animation, and environment design, every element works together to build a consistent and distinctive animation style."
        data={wonderingIndustriesData}
      />
      <WhyInvestSection
        subtitle="OUR PROCESS"
        title={<>Our Hybrid and Cel Animation <br />Production Process</>}
        description="Every hybrid and cel animation project follows a structured production workflow designed to transform creative concepts into polished animated experiences. From creative discovery and concept development to character design, storyboarding, frame-by-frame production, compositing, sound design, and final delivery, each stage ensures the animation maintains a consistent visual identity, technical quality, and emotional impact throughout the complete production process."
        accordionData={whyInvestAccordionData}
      />
      <AnimationServicesSection />
      <ProjectCostSection />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About Hybrid and Cel Animation Services"
        faqs={faqs}
      />





      {/* <ProjectsSection />
      <WhyChooseSection />
      <EnginesSection />
      <DistinguishesSection />
      <FullCycleSection />
      <GameArtSection />
      <RiggingSection />
      <BenefitsSection />
      <CharacterWhyChooseSection />
      <AnimationPricingSection /> */}
    </main>
  );
}