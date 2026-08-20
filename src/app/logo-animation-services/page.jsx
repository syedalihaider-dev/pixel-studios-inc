



import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialsSlider from "@/components/LogoAnimation/TestimonialsSlider";
import TechnologySection from "@/components/LogoAnimation/TechnologySection";
import FaqSection from "@/components/Common/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: 'Experienced Motion Designers',
    description: "Our motion design team has produced logo animation for brands across consumer, corporate, entertainment, technology, and healthcare sectors with genuinely cross-industry experience.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Animation Concepts',
    description: "Every project begins with original concept development. No stock motion paths or template effects. Custom logo animation built specifically for each brand.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Fast Turnaround Times',
    description: "Most logo animation projects complete in one to two weeks from brief sign-off. Rush production available for campaign launch windows.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Dedicated Project Management',
    description: "One project manager from brief to delivery. Every milestone is dated. Every update is proactive.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'High-Quality Motion Design',
    description: "Professional logo animation produced to broadcast-quality standards regardless of the distribution platform. Quality is the baseline, not a premium tier.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Multiple Export Formats',
    description: "Delivery in MP4, transparent-background MOV, GIF, and source files. Platform-specific exports for social, web, and broadcast included in standard packages.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Flexible Cooperation Models',
    description: "Project-based, retainer, or dedicated team models. We adapt to your needs, timelines, and budget with transparent terms and no surprises.",
    icon: '/icons/experienced.png'
  },
  {
    id: 8,
    title: 'Brand-Centric Animation Strategy',
    description: "Every animation starts with your brand goals. We define the objective first, then select the right animation style to match your message and audience.",
    icon: '/icons/experienced.png'
  }
];

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











const standoutFeatures = [
  {
    id: 1,
    title: 'Startups and Emerging Brands',
    description: "First-impression logo animation that gives a new brand the visual credibility of an established one before the track record exists to do it independently.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'SaaS and Technology Companies',
    description: "Clean, professional 2D logo animation and after effects logo animation for SaaS brands producing product videos, onboarding content, and marketing campaigns at scale.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'E-Commerce Businesses',
    description: "Animated logo services for e-commerce brands producing high volumes of product and social media video content. Logo animation that builds recognition across a content calendar.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Corporate Brands',
    description: "Enterprise-grade logo animation for corporate brands needing a consistent animated identity across global communications and branded content at scale.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Media and Entertainment',
    description: "Cinematic logo reveals and broadcast-spec logo animation for media companies and entertainment brands whose audience recognizes production quality immediately.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Agencies and Marketing Teams',
    description: "Logo animation services for creative agencies producing branded video content for multiple clients. White-label production available on qualifying projects.",
    icon: '/icons/experienced.png'
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Custom Logo Animation",
    description: "Bespoke logo animation built from your brand assets, your visual identity, and the context where the animation will be used. No template motion paths, no stock reveal effects. Custom logo animation designed to match your brand personality and perform across every platform it appears on.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Logo Animation",
    description: "Clean, versatile 2D logo animation for brands that need a professional platform-ready intro across video, web, and presentation environments. Our 2D logo animation services produce smooth, brand-consistent motion that works at every size and in every context.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Logo Animation",
    description: "Photorealistic 3D logo animation with depth, lighting, materials, and camera choreography. Our 3D logo animation company delivers cinematic quality that makes a static brand mark unforgettable in motion, built for broadcast, film, and premium digital content.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Logo Intro Animation",
    description: "Opening sequences that establish brand identity before the content begins. Produced in multiple duration cuts for long-form branded films, short-form social content, and every format in between.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Logo Reveal Animation",
    description: "Animated logo reveals that make the moment the logo appears feel intentional. Motion, timing, and sound design used together to build anticipation and reinforce brand impact. Available in 2D, 3D, and mixed-media styles.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Animated Logo for Social Media",
    description: "Animated logo content optimized for Instagram, TikTok, LinkedIn, and YouTube specifications. File formats and durations produced natively for each platform rather than adapted from a single master file.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Broadcast and Video Logo Animation",
    description: "Broadcast-spec logo animation for television, streaming, and high-production digital content. Produced to the frame rate, resolution, and color space requirements of broadcast delivery.",
    videoSrc: "https://player.vimeo.com/video/1201854679?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
    title: '1 Increase Brand Recognition',
    content: 'A consistent animated logo intro across every video a brand produces creates a visual and auditory brand signal that compounds into recognition over time in a way that a static corner logo cannot produce.'
  },
  {
    id: 2,
    title: '2 Create Memorable First Impressions',
    content: 'The first three seconds of any video determine whether the viewer stays or leaves. A well-produced logo animation uses those seconds to establish credibility, signal production quality, and communicate brand personality before a word is spoken.'
  },
  {
    id: 3,
    title: '3 Enhance Video Marketing',
    content: 'Every piece of video marketing benefits from a professional logo animation opener. It raises perceived production value across the entire video, which directly affects how the audience evaluates the brand making the pitch.'
  },
  {
    id: 4,
    title: '4 Strengthen Brand Identity',
    content: 'Consistent logo animation across all video content creates a visual language that reinforces brand identity at every audience touchpoint across social, web, and broadcast channels simultaneously.'
  },
  {
    id: 5,
    title: '5 Improve Social Media Engagement',
    content: 'Branded animated social media posts with polished logo animation signal production quality that both the platform algorithm and the audience respond to with higher engagement and completion rates.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Brand Discovery',
    content: 'We review your brand identity, existing visual assets, the context where the animation will be used, and the audience who will see it. Logo animation that fits the brand cannot be designed without understanding it.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Animation Concept Development',
    content: 'Two to three distinct animation directions developed based on the brief. Each represents a different interpretation of the brand motion language. You choose the direction that fits.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Motion Planning',
    content: "Keyframes, motion paths, timing, and sound design approach mapped and approved before production. Changes here cost nothing. Changes after animation begins cost time.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Full logo animation production in-house using After Effects, Cinema 4D, Blender, or Adobe Illustrator depending on the style and format requirements of the brief.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Sound Design Integration',
    content: 'Custom sound design or music integration matched to the motion and the brand tone. Sound is what makes a logo reveal feel intentional rather than assembled.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Review and Revisions',
    content: 'Two full revision rounds standard. Every note is documented and confirmed before changes are made.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format specified at kickoff: MP4 in multiple resolutions, transparent-background MOV for compositing, GIF for web use, and source files in most project scopes.',
  }
];

const title = (
  <>
    Ready to Animate <br /> <span>Your Logo?</span>
  </>
);

const text = "Every video your brand publishes is an opportunity to make the first impression count. Book a discovery call and we will show you what professional logo animation services can do for your brand identity across every platform you publish on.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Minimal Logo Animation",
    text: "Clean, subtle motion for brands whose identity is built on restraint and precision. Works for premium consumer brands, professional services, and technology companies where understatement is part of the positioning."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Kinetic Typography Logo Animation",
    text: "Text-led motion where the brand name carries the animation. Effective for wordmark-based identities where the name itself is the primary recognition asset."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Cinematic Logo Reveals",
    text: "High-production reveals with dramatic lighting, depth, and camera choreography. The right choice for entertainment brands and companies whose brand presence needs to feel large and authoritative."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Modern Motion Graphics Logo Animation",
    text: "Contemporary motion design applied to brand mark animation. Dynamic, current, and platform-flexible. Works well for SaaS brands and digital-first companies in visual-attention markets."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "3D Logo Reveals",
    text: "Dimensional reveals with material, lighting, and shadow. Our 3D logo animation company produces photorealistic 3D logo reveals for broadcast, corporate video, and premium digital content."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Particle and Visual Effects Animation",
    text: "VFX-driven logo reveals using particle systems, light trails, and atmospheric effects. Neon logo animation and energy-based motion for brands whose identity has edge and visual complexity."
  }
];

const faqs = [
  {
    question: "What are logo animation services?",
    answer: "Logo animation services cover the production of animated versions of a brand's logo for video, social media, web, presentations, and broadcast. This includes 2D logo animation, 3D logo animation, logo reveal effects, and animated brand mark production in every format a brand needs.",
  },
  {
    question: "How much does logo animation cost?",
    answer: "A professionally produced 2D logo animation starts in the $400 to $1,200 range. 3D logo animation runs $1,500 to $4,000 or more depending on complexity. Cinematic logo reveals with VFX and custom sound design sit at the upper end. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does logo animation take?",
    answer: "Most projects complete in one to two weeks. Complex 3D logo animations with custom environments take two to three weeks. Rush production is available for campaign launch windows.",
  },
  {
    question: "Can you animate an existing logo?",
    answer: "Yes. We animate existing logos from the vector files you provide. If the logo does not exist in vector format, we can redraw it in Adobe Illustrator as part of the project scope.",
  },
  {
    question: "Do I need a vector logo file?",
    answer: "Yes. Vector format (AI, EPS, or SVG) is required for professional logo animation. It allows us to animate individual elements independently. If you only have a PNG or JPEG, we can discuss options in the discovery call.",
  },
  {
    question: "What file formats will I receive?",
    answer: "Standard delivery includes MP4 in multiple resolutions, a transparent-background MOV for compositing, a GIF for web use, and source files in most project scopes. Platform-specific exports for social media and broadcast are included where specified.",
  },
  {
    question: "Can I use my animated logo on social media?",
    answer: "Yes. We produce platform-optimized versions in the correct aspect ratios, file sizes, and formats for Instagram, TikTok, LinkedIn, YouTube, and X. Social media optimization is included for projects where social use is specified at kickoff.",
  },
  {
    question: "Do you create 2D and 3D logo animations?",
    answer: "Yes. We are both a 2D logo animation company and a 3D logo animation company with full in-house capabilities in both formats. The choice is made based on brand positioning, distribution context, and the production budget established in the brief.",
  },
  {
    question: "Can you add sound effects to my logo animation?",
    answer: "Yes. Sound design is included in most logo animation packages. Custom sound effects, music stings, and audio branding are available. Sound is matched to the motion and the brand tone established in discovery.",
  },
  {
    question: "Who owns the final animation files?",
    answer: "Full copyright ownership transfers to you upon final payment. You own the right to use, distribute, and publish the animation in any format, on any platform, for any purpose without restriction or ongoing licensing fees.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds standard. Additional rounds available and priced upfront. All revision terms documented before production begins.",
  },
  {
    question: "Can logo animation improve brand recognition?",
    answer: "Yes. Motion combined with sound creates stronger memory encoding than static visuals. A consistent animated logo used across all video content builds audience recognition faster than a static equivalent seen the same number of times.",
  },
];

export const metadata = {
  title: "Logo Animation Services That Bring Your Brand to Life | Pixel Studios",
  description: "Looking for professional logo animation services in the USA? Pixel Studios creates custom 2D and 3D logo animations for every brand. Get your free quote today.",
};

export default function LogoAnimation() {
  return (
    <main>
      <Banner
        title="Logo Animation Services That Bring Your Brand to Life"
        description="At Pixel Studios Inc., our logo animation services are built around that philosophy. We create custom logo animation that turns a static mark into a living piece of brand communication, from clean 2D logo animation for digital environments to cinematic 3D logo animation for broadcast-quality productions. We are the logo animation company brands across the USA come to when they want a brand intro that earns attention rather than borrows it."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for Logo Animation Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Professional Logo Animation Services in the USA"
        description="Our logo animation company provides every type of animated logo production a brand needs, from simple 2D logo animation for social media to full cinematic 3D logo reveals for broadcast. All produced in-house by our professional logo animation studio."
        sliderItems={sliderItems}
      />
      <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<><span>Logo Animation</span> Solutions for Every Business</>}
        description="A startup and an enterprise brand have different logo animation needs. Here is how our logo animation services are applied across every business type."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201854809?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <HowWeWorkSection
        heading="Why Do Businesses Use Logo Animation?"
        description="Logo animation is not visual decoration. It is a measurable brand communication tool with specific, demonstrable effects on audience perception."
        accordionData={howWeWorkAccordionData}
      />
      <TeamStandoutSection
        subtitle="TYPES OF"
        title={<>Benefits of Professional <span>Logo Animation</span></>}
        description="What professionally produced logo animation does for a brand that a static logo in a video frame cannot replicate."
        features={benefitsSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <CooperationModelsSection
        subtitle="Why Choose Our"
        title="Types of Logo Animation Styles"
        description="Every logo has a personality and every brand has a context. Here are the styles our logo animation company works in and when each one is the right choice."
        cards={cooperationModelsCards}
      />
      <WhyInvestSection
        subtitle="Process"
        title="Our Logo Animation Process"
        description="Our professional logo animation services follow a structured production process from brand discovery to final delivery."
        accordionData={whyInvestAccordionData}
      />
      <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <TechnologySection />
      <TestimonialsSlider />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
