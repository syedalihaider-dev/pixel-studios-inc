import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyPartnerSection from "@/components/Animation2D/WhyPartnerSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import CostSection from "@/components/Common/CostSection";
import TestimonialsSlider from "@/components/Animation2D/TestimonialsSlider";
import TrustedClientsSection from "@/components/Animation2D/TrustedClientsSection";
import IndustrySection from "@/components/Common/IndustrySection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";
import Link from 'next/link';

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: <>From product explainers and onboarding videos to feature demonstrations and software tutorials, our <Link href="/saas-explainer-videos">2D Saas animation services</Link> help companies simplify complex platforms and improve user adoption. We create content that shortens the learning curve, increases engagement, and supports customer acquisition and retention.</>,
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: <>We produce 2D animations that communicate complex medical information with clarity and accuracy. Whether it's patient education, healthcare awareness, medical device demonstrations, or clinical training, our <Link href="/healthcare-animation">medical and healthcare animations</Link> help organizations educate audiences while maintaining trust and professionalism.</>,
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: <>Learning becomes more engaging through visual storytelling. We develop <Link href="/education-animation">educational 2D animations</Link> for schools, universities, online learning platforms, and corporate training programs that improve knowledge retention, simplify difficult concepts, and keep learners engaged from start to finish.</>,
    link: "#"
  },
  {
    id: 4,
    title: "Finance & FinTech",
    image: "/industry/04.png",
    text: <>Financial services often involve concepts that can overwhelm customers. Our 2D <Link href="/fintech-animation">fintech animations</Link> simplify banking products, investment strategies, insurance plans, payment solutions, and financial processes, making them easier to understand while building confidence and credibility.</>,
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: <>From property showcases and development presentations to investment explainers and buyer education videos, our 2D <Link href="/real-estate-animation">real-estate animations</Link> help real estate agencies, developers, and proptech companies present opportunities in a clear, engaging, and visually compelling way.</>,
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce",
    image: "/industry/06.png",
    text: <>We help eCommerce brands showcase products, explain unique features, and build customer confidence through engaging 2D animations. Whether launching a new product or improving the buying experience, our 2D <Link href="/ecommerce-video-production">ecommerce video services</Link> help increase conversions and reduce customer uncertainty.</>,
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups & Enterprises",
    image: "/industry/06.png",
    text: <>Whether you're introducing an innovative product, pitching investors, training employees, or communicating organizational changes, our 2D <Link href="/enterprise-animation">startup animation services</Link> provide scalable visual content that grows alongside your business and supports every stage of your journey.</>,
    link: "#"
  },
  {
    id: 8,
    title: "Gaming",
    image: "/industry/06.png",
    text: <>We partner with game developers, publishers, and studios to create 2D animations for game trailers, character showcases, feature explainers, promotional campaigns, and community engagement. Our <Link href="/gaming-animation">game animations experts</Link> help generate excitement before launch and keep players engaged long after release.</>,
    link: "#"
  },
  {
    id: 9,
    title: "Manufacturing & Industrial",
    image: "/industry/06.png",
    text: <>Industrial products and manufacturing processes can be difficult to explain through traditional media. Our <Link href="/manufacturing-animation">2D Manufacturing animations</Link> simplify production workflows, equipment functionality, safety procedures, and technical concepts, making communication more effective for customers, employees, and stakeholders.</>,
    link: "#"
  },
  {
    id: 10,
    title: "Logistics & Supply Chain",
    image: "/industry/06.png",
    text: <>We create 2D <Link href="/logistics-animation">2D Logistics animations</Link> that simplify logistics operations, warehouse processes, shipping workflows, and supply chain solutions. Whether educating customers or training internal teams, our animations turn complex operations into easy-to-understand visual stories.</>,
    link: "#"
  },
  {
    id: 11,
    title: "Architecture & Construction",
    image: "/industry/06.png",
    text: <>Architects, developers, and construction firms use our <Link href="/architecture-animation">2D Architecture animations</Link> to visualize concepts, explain construction processes, present development projects, and communicate design ideas to clients and investors with greater clarity and impact.</>,
    link: "#"
  },
  {
    id: 12,
    title: "Marketing & Advertising",
    image: "/industry/06.png",
    text: <>Creative campaigns deserve equally compelling visuals. We produce <Link href="/advertising-animation">2D animated advertisements</Link>, social media content, promotional videos, and brand storytelling animations that help businesses capture attention, increase engagement, and strengthen brand recognition across digital platforms.</>,
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "2D Animated Explainer Videos",
    description: "How long does it take your sales team to explain what your product does in a first call? A well-built 2D explainer video animation solves that permanently. We write scripts around the viewer's decision-making process, not your product feature list. Our animated explainer videos hold attention from the first frame to the call to action because every visual beat was designed with that goal in mind. Clients report improved landing page conversion rates and faster sales cycles after a custom 2D animated video goes live.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "2D Whiteboard Animations",
    description: <><Link href="/whiteboard-animation-services">2d Whiteboard Animation services</Link> has outlasted every video marketing trend for one reason: clarity never goes out of style. The format removes visual noise and puts the viewer's full attention on the concept being explained. Our whiteboard animation productions combine professional voiceover, clean illustration, and carefully paced narration built for training, compliance communication, and sales enablement content that has to work without a facilitator present.</>,
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "2D Logo Animations",
    description: <>A static logo on a video intro signals that the production was not quite finished. An animated logo intro signals the opposite and builds brand recall across every video your company publishes. We produce <Link href="/logo-animation-services">2d logo animation</Link> in multiple output formats for video intros, website headers, presentation slides, and digital advertising, from short stings for social media to longer branded sequences for company films.</>,
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "2D Cel Animation",
    description: <>Frame-by-frame character movement, expressive gesture, and a handcrafted quality that no fully digital style can replicate. Our <Link href="/hybrid-and-cel-animation">2d cel animation production</Link> team works across visual styles from clean commercial-grade character animation to more art-forward approaches for brands whose identity demands something genuinely distinct from the polished digital aesthetic dominating the category.</>,
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "2D Social Media Animations",
    description: <>Social media is a different communication problem from every other format. The first frame must earn the second. Our <Link href="/social-media-animation">social media animation</Link> team builds short-form content from the ground up for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts: vertical formats, on-screen text that works without audio, and visual hooks built to interrupt scroll behavior in the opening frame.</>,
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Promotional 2D Animated Videos",
    description: "A promotional video that produces no response is an expensive placeholder. Every promotional 2D animated video we produce has a conversion objective embedded in the creative from the first script draft. Urgency that feels earned, specific value communication, and a call to action that follows naturally from the argument the video just made.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Explainer Videos for Complex Products",
    description: <>Some products are genuinely hard to explain, and the difficulty is not a marketing problem. Animation solves it better than any other format. We have built <Link href="/animated-explainer-video">animated explainer videos</Link> for SaaS platforms, medical devices, financial instruments, and industrial equipment: making the invisible visible and the complex understandable without talking down to the viewer or skipping the technical substance that makes the product credible.</>,
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
    icon: '/discovery.png',
    title: 'Discovery and Conceptualization',
    content: 'We establish the audience, the objective, the brand voice, the competitive context, and the distribution channels before any creative work begins. We write a creative brief specific enough to make real production decisions from. Vague briefs produce vague animated videos. We do not accept vague briefs.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Storyboarding and Design',
    content: 'Character design, background style, color palette, and visual direction are established and approved before a single frame is animated. A full storyboard maps every script beat to a specific visual. Changes at this stage take 30 minutes. Changes after animation begins take two days. We invest in this stage because the economics of thoroughness are straightforward.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Animation Development',
    content: 'With the storyboard approved, production begins in full. Characters move, scenes transition, and text appears at the precise moment the voiceover reaches the corresponding line. Voiceover recording runs in parallel with early animation. The entire 2D animation production runs in-house on the same team that handled the storyboard stage.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Refinements and Sound Design',
    content: 'Sound design is structural, not decorative. Background music sets the emotional register. Sound effects add weight to visual events. Final motion refinements and easing adjustments are applied here before the full draft is sent for client review. What gets produced at this stage is a fully finished video, not a rough cut.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Quality Assurance',
    content: 'Before the draft reaches you, it goes through a structured internal review: audio-visual sync, brand accuracy against approved style frames, voiceover mix levels, and platform-specific export specifications. We catch production issues here so they do not arrive as client revision requests.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Final Draft Review and Delivery',
    content: 'The final draft arrives with a structured revision process. Every note is documented and confirmed before changes are made. We do not guess at ambiguous feedback. Final delivery covers every format and resolution specified at kickoff, plus source files in most project scopes.',
  },
];

const title = (
  <>
    Bring Your <span>Ideas</span> to Life with Professional <span>2D Animation Services</span>
  </>
);

const text = "Whether you're launching a product, explaining a service, or strengthening your brand, our 2D animation studio creates visually compelling videos tailored to your goals. We combine strategic storytelling, creative design, and smooth animation to deliver content that captures attention and leaves a lasting impression.";

const faqs = [
  {
    question: "How do I choose the best 2D animation company?",
    answer: "Look at portfolio range: genuine visual variety shows they adapt to briefs rather than applying one aesthetic to every client. Then, examine the process: do they describe their discovery approach specifically before the quote? Finally, look for verifiable client results with specific outcomes, not just testimonials describing a pleasant experience.",
  },
  {
    question: "What should I avoid when hiring a 2D animation studio?",
    answer: "Avoid studios that quote a price before understanding your project. Any 2D animation agency that gives you a rate before asking detailed questions about your audience and your business objective is pricing a generic production, not your specific one. Avoid studios that cannot show you named clients with verifiable outcomes. Avoid portfolios that show only one visual style regardless of industry.",
  },
  {
    question: "Can you follow my brand guidelines and visual identity?",
    answer: "Yes, and we treat your brand guidelines as the creative starting point. Your color palette, typography, illustration references, and tone of voice are all incorporated into the style frames before any animation begins. We produce branded 2D animated videos that fit your visual ecosystem rather than looking like they came from a different team.",
  },
  {
    question: "How do I choose the right animation style for my audience?",
    answer: "The right style depends on the audience, the objective, and the distribution context. Consumer audiences on social respond to expressive character animation and high visual energy. B2B and technical audiences respond to clean motion graphics and measured pacing. Healthcare audiences need accuracy above all. We work through these variables in discovery rather than leaving the style decision to trend or default.",
  },
  {
    question: "Is 2D animation enough for tech or B2B products, or do I need 3D to look premium?",
    answer: "2D animation is more than sufficient for the vast majority of tech and B2B use cases. What signals premium quality is the clarity of thinking and the craft of execution, neither of which is format-dependent. SaaS companies and enterprise brands producing the most effective animated content predominantly use 2D formats because the format excels at clear, efficient explanation. 3D is right when the product has a physical structure requiring dimensional rendering. Otherwise, a well-produced 2D video outperforms a mediocre 3D production in every metric that matters.",
  },
  {
    question: "How much does it cost for a 60 to 90-second 2D business animation?",
    answer: "A professionally produced 60 to 90-second 2D business animation from a reputable studio in the USA falls between $2,500 and $8,000, depending on creative complexity, number of characters, voiceover requirements, and production timeline. We provide an itemized, transparent quote based on your actual brief within 48 hours of a discovery call.",
  },
  {
    question: "How long does our production cycle typically take?",
    answer: "Most 60 to 90-second 2D animated videos are completed in three to five weeks from a brief sign-off. Discovery and scripting: five to seven days. Storyboard and design: five to seven days. Animation production: seven to ten days. Sound and final review: three to five days. Every project receives a milestone schedule with specific dates at kickoff, not a range with a disclaimer.",
  },
  {
    question: "What about the copyright of my animations once I pay for them?",
    answer: "Full copyright ownership transfers to you upon final payment. You own the right to use, distribute, modify, and publish the video in any format, on any platform, for any purpose without restriction. Our standard agreements confirm this in writing at project kickoff. Licensed music and stock sound assets are documented separately, so you have a complete picture of what you own outright and what is covered by a commercial license.",
  },
];

export const metadata = {
  title: "Creative 2D Animation Services in the USA | Pixel Studios Inc.",
  description: "Looking for high-quality 2D animations services for your business? Pixel Studios offers comprehensive 2D animation production services at a competitive price.",
};

export default function TwoDAnimation() {
  return (
    <main>
      <Banner
        title="Creative 2D Animation Services in the USA | Pixel Studios Inc"
        description="Looking for high-quality 2D animations services for your business? Pixel Studios offers comprehensive 2D animation production services at a competitive price."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for 2D & 3D Animation Services."
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="WHAT WE ARE OFFERING IN 2D ANIMATION SERVICES?"
        description="Our 2D animation company covers every production format a brand or marketing team needs. All work is produced entirely in-house by our dedicated animators, scriptwriters, character designers, and sound specialists."
        sliderItems={sliderItems}
      />
      <WhyPartnerSection />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Proven 2D<br /> Animation Workflow</>}
        description="Our 2D animation production follows a structured, milestone-driven process. Here is exactly what happens between the brief and the final file."
        accordionData={whyInvestAccordionData}
      />
      <PortfolioShowcase />
      <CostSection
        subtitle="COLLABORATIVE APPROACH"
        title={<>How Much Does 2D<br />Animation Cost?</>}
        description="A professionally produced 60-second 2D animated video from a reputable 2D animation studio in the USA typically starts in the $2,500 to $4,500 range. This covers discovery, scripting, character design, storyboarding, animation, professional voiceover, sound design, and final delivery in the formats you need. More complex productions with custom character libraries and multiple unique environments fall in the $5,000 to $12,000 range."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="For multi-video content campaigns and ongoing retainers, we structure scaled pricing that reduces the per-video cost substantially. When character libraries and style systems are built once and deployed across multiple videos, the per-asset production cost drops considerably. We provide itemized, transparent quotes based on your actual brief within 48 hours of a discovery call."
      />
      <TestimonialsSlider />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TestimonialSection />
      <TrustedClientsSection />
      <IndustrySection
        heading="Ready to Get Started with Professional 2D Animation Services?"
        description="Most brands already know they need better animated content. What they do not have is a 2D animation studio that built the strategy before it started drawing. Book a discovery call, and we will show you exactly what is possible for your product, your audience, and your timeline."
        industries={industries}
        variant="gradient"
      />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
