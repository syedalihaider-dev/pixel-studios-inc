import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/Modeling3D/CostSection"
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TechnologySection from "@/components/Modeling3D/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: 'Experienced 3D Artists',
    description: "Our professional 3D artists have built assets across gaming, product, and architectural categories for years, with portfolios that demonstrate range rather than a single specialty.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Modeling Solutions',
    description: "Every 3D modeling project starts from your brief and your technical requirements, never a template asset retrofitted to fit your specification.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Industry-Specific Expertise',
    description: "Our 3D modeling experts understand the technical standards specific to gaming, healthcare, and manufacturing clients alike, reducing the learning curve on every new brief.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Scalable Production Capacity',
    description: "From a single hero asset to a full enterprise 3D modeling services library, we scale our team to your project volume without compromising turnaround.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Fast Turnaround Times',
    description: "Most 3D modeling projects are completed in one to three weeks, depending on asset complexity and scope, with rush options available for tighter deadlines.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Transparent Communication',
    description: "A dedicated project manager and a documented production schedule keep every 3D modeling project on track with no surprises at delivery.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "Gaming",
    image: "/industry/01.png",
    text: "3D modeling for gaming covers characters, environments, and props optimized for real-time engines and the specific performance budget of each platform.",
    link: "#"
  },
  {
    id: 2,
    title: "eCommerce and Retail",
    image: "/industry/02.png",
    text: "3D modeling for eCommerce produces interactive product views that reduce returns and improve buyer confidence across online marketplaces and brand websites alike.",
    link: "#"
  },
  {
    id: 3,
    title: "Manufacturing",
    image: "/industry/03.png",
    text: "3D modeling for manufacturing supports CAD conversion, training visualization, and marketing content from a single accurate source asset.",
    link: "#"
  },
  {
    id: 4,
    title: "Architecture and Real Estate",
    image: "/industry/04.png",
    text: "3D modeling for real estate produces accurate property and interior models for pre-sale marketing and development pitch presentations.",
    link: "#"
  },
  {
    id: 5,
    title: "Healthcare and Medical",
    image: "/industry/05.png",
    text: "3D modeling for healthcare supports device visualization and training content built to clinical accuracy standards that regulatory and provider audiences expect.",
    link: "#"
  },
  {
    id: 6,
    title: "Automotive",
    image: "/industry/06.png",
    text: "3D modeling for automotive covers vehicles, components, and configurators for both marketing campaigns and internal engineering review.",
    link: "#"
  },
  {
    id: 7,
    title: "Consumer Electronics",
    image: "/industry/07.png",
    text: "3D modeling for consumer electronics produces precise, market-ready models for launch campaigns and retail platform listings.",
    link: "#"
  },
  {
    id: 8,
    title: "Fashion and Apparel",
    image: "/industry/08.png",
    text: "3D modeling for fashion brands enables digital sampling, virtual try-on, and catalog content production without a physical photoshoot for every SKU. ",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "3D Character Modeling",
    description: "Custom 3D character modeling for games, animation, and brand mascots, built with clean topology ready for rigging and animation. Every character model is constructed with deformation in mind so that downstream animators are not fighting the geometry.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Product Modeling",
    description: "Precision 3D product modeling from CAD files or reference images for marketing, eCommerce, and engineering visualization. We match dimensions and proportions exactly so the final render is indistinguishable from the physical product.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Game Asset Modeling",
    description: "Game-ready 3D game asset modeling optimized for Unreal Engine assets and Unity assets with real-time performance in mind. Polycount and texture budgets are managed against your engine's actual performance targets, not a generic standard.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Environment Modeling",
    description: "Full 3D environment modeling for games, architectural visualization, and virtual production built to scale and lighting accuracy. Environments are modeled with modularity in mind so assets can be reused and recombined efficiently.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "AR and VR Modeling",
    description: "AR/VR modeling services produce lightweight, real-time-ready virtual reality assets and augmented reality models for interactive platforms. Every asset is optimized for the frame rate and tracking stability that immersive applications demand.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Digital Twin Modeling",
    description: "Digital twin modeling that mirrors real-world equipment and facilities for simulation, monitoring, and predictive maintenance applications. The accuracy of source data is treated as non-negotiable since the model feeds operational decisions.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Metaverse Asset Modeling",
    description: "Metaverse 3D modeling for wearables, environments, and interactive objects built to platform-specific technical constraints. We work within the polygon, texture, and file size limits that each platform enforces.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Architectural 3D Modeling",
    description: "Architectural 3D modeling services for developers and architects producing accurate, presentation-ready building and interior models. Built directly from blueprints and architectural plans for dimensional accuracy.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Industrial and Manufacturing Modeling",
    description: "Industrial 3D modeling services converting CAD to 3D modeling output for training, marketing, and engineering review. We preserve engineering tolerances while optimizing the model for visualization use cases.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
    title: '1 Product Visualization',
    content: "3D visualization and product visualization let buyers and stakeholders evaluate a product before it physically exists, accelerating decisions across sales, marketing, and investment conversations."
  },
  {
    id: 2,
    title: '2 Game Development',
    content: 'Game assets built to spec accelerate development timelines and reduce the asset bottleneck most studios face mid-production, freeing internal teams to focus on gameplay rather than asset backlog.'
  },
  {
    id: 3,
    title: '3 AR and VR Experiences',
    content: "Real-time 3D assets power immersive AR and VR experiences for retail, training, and entertainment applications where tracking performance and visual fidelity both matter."
  },
  {
    id: 4,
    title: '4 Marketing and Advertising',
    content: 'Photorealistic 3D models replace expensive photography setups for marketing and advertising content production, allowing unlimited angles and lighting setups from a single asset.'
  },
  {
    id: 5,
    title: '5 Architectural Visualization',
    content: 'Architectural visualization gives investors and buyers a concrete view of unbuilt spaces and developments, often becoming the deciding factor in pre-construction sales.'
  },
  {
    id: 6,
    title: '6 Engineering and Manufacturing',
    content: 'Digital prototyping through 3D modeling reduces costly physical iteration cycles in engineering and manufacturing workflows, catching design issues before tooling costs are committed. '
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Requirements Gathering',
    content: 'We identify the buyer objection or question that the animation needs to resolve before any modeling begins, since that answer shapes every creative decision downstream.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept and Reference Collection',
    content: 'Reference materials, CAD files, and visual direction are gathered and confirmed before modeling begins, preventing costly direction changes mid-production.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: '3D Modeling',
    content: "Base geometry is built to the approved reference, balancing detail level against the project's technical constraints and final use case.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Texturing and Material Creation',
    content: 'PBR texturing and UV mapping are applied to give the model accurate surface detail and real-world material behavior under any lighting condition.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Optimization and Quality Assurance',
    content: 'Retopology and polycount optimization ensure the asset performs correctly in its target engine or rendering pipeline without visual compromise.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Rendering and Visualization',
    content: 'Final renders or real-time previews are produced for client review against the original brief and approved reference materials.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Revisions and Refinements',
    content: 'Structured revision rounds with every note documented and confirmed before changes are made, avoiding guesswork on ambiguous feedback.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Asset Delivery',
    content: 'Final 3D modeling deliverables are exported in every format specified at kickoff, including source files where scoped into the project.',
  }
];

const title = (
  <>
    Start Your <span>3D Modeling</span> Project with a Free Consultation
  </>
);

const text = "Book a discovery call, and we will scope your 3D modeling project, timeline, and investment within 48 hours, with no obligation to proceed.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Improve Product Presentation",
    text: "Professional 3D models present products with a consistency and polish that photography cannot always match, particularly across large catalogs where lighting and angle consistency matter."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Accelerate Product Development",
    text: "Digital prototyping shortens iteration cycles by removing the wait time of physical sample production, letting teams test design variations in days rather than weeks."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Enhance Customer Engagement",
    text: "Interactive 3D visualization keeps customers engaged longer than static images across web and retail platforms, directly improving time on page and conversion metrics."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Reduce Production Costs",
    text: "3D asset creation services reduce the need for repeated physical photoshoots for every new angle, color variant, or marketing update, lowering the long-term cost of visual content."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Support Interactive Experiences",
    text: "Real-time 3D assets are essential for AR, VR, and configurator-style interactive product experiences that let customers customize and explore before purchasing."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Improve Design Accuracy",
    text: "Precision modeling from CAD to 3D modeling workflows reduces costly errors before physical manufacturing begins, catching dimensional issues while they are still cheap to fix."
  }
];

const faqs = [
  {
    question: "What Are 3D Modeling Services?",
    answer: "3D modeling services cover the creation of digital three-dimensional assets, including products, characters, environments, and architectural structures for use in games, marketing, AR/VR, and visualization.",
  },
  {
    question: "How Much Does 3D Product Animation Cost?",
    answer: "A standard 30 to 60-second 3D product animation typically starts at $2,500 to $6,000, depending on complexity. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How Much Do Professional 3D Modeling Services Cost?",
    answer: "A standard product 3D model typically starts at $300 to $800. Character and environment models range from $800 to $5,000 or more, depending on complexity. Itemized quotes within 48 hours.",
  },
  {
    question: "How Long Does a 3D Modeling Project Take?",
    answer: "Most single-asset 3D modeling projects are completed in one to two weeks. Complex characters or environments take three to four weeks, depending on the detail requirements.",
  },
  {
    question: "What File Formats Do You Deliver?",
    answer: "We deliver FBX, OBJ, GLTF, and engine-specific formats, including Unreal Engine assets and Unity assets exactly as specified at kickoff.",
  },
  {
    question: "Can You Create Models for Games and AR/VR Applications?",
    answer: "Yes. We produce real-time optimized 3D game asset modeling and AR/VR modeling services built to each platform's specific performance constraints.",
  },
  {
    question: "Do You Provide Texturing and Rendering Services?",
    answer: "Yes. PBR texturing, UV mapping, and full 3D rendering are standard components of our 3D modeling production process at no additional sourcing step.",
  },
  {
    question: "Can You Convert CAD Drawings into 3D Models?",
    answer: "Yes. CAD to 3D modeling conversion is a core service for manufacturing, industrial, and engineering clients who need visualization-ready assets from technical drawings.",
  },
  {
    question: "Do You Offer Low-Poly and High-Poly Models?",
    answer: "Yes. We produce both low-poly modeling for real-time applications and high-poly modeling for photorealistic rendering, matched to your actual delivery requirements.",
  },
  {
    question: "How Many Revisions Are Included?",
    answer: "Two full revision rounds are standard. Additional rounds are available and priced transparently upfront before production begins.",
  },
  {
    question: "Who Owns the Final 3D Assets?",
    answer: "Full ownership of the final 3D modeling deliverables transfers to you upon final payment, without restriction or ongoing licensing fees.",
  }
];

export const metadata = {
  title: "3D Modeling Services for Businesses | Pixel Studios",
  description: "Need professional 3D modeling services? Pixel Studios builds custom 3D models for products, characters, games, and more. Get a free quote today.",
};

export default function Modeling3DPage() {
  return (
    <main>
      <Banner
        title="High-Impact 3D Modeling Services for Businesses"
        description="Why do so many 3D projects stall at the modeling stage before the animation even starts? Most 3D modeling companies treat the model as a technical checkbox instead of the foundation on which the entire project depends. A flawed model means every downstream stage, texturing, rigging, and rendering, inherits the flaw, and fixing geometry problems after a project is already in production costs far more than getting the topology right the first time. Pixel Studios Inc. provides professional 3D modeling services built to be production-ready from the first export: accurate topology, clean UVs, and a level of detail calibrated to exactly how the asset will be used."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for 3D Modeling Services"
        statsData={statsData}
        variant="gradient"
      />
      <CostSection />
      <ServicesSection
        title="Comprehensive 3D Modeling Services Tailored to Your Needs"
        description="Our 3D modeling solutions cover every asset type a business needs across product, character, and environment work, all produced in-house by professional 3D artists who specialize in the specific category of asset your project requires."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <HowWeWorkSection
        heading="Powerful Ways Businesses Use 3D Modeling Services"
        description="3D product animation helps brands communicate clearly, showcase complex products dynamically, and stand out in crowded digital spaces. When precision meets storytelling, 3D animation becomes one of your most versatile marketing assets."
        accordionData={howWeWorkAccordionData}
      />
      <CooperationModelsSection
        subtitle="Our Key Benefits"
        title="Key Benefits of Professional 3D Modeling Services"
        description=""
        cards={cooperationModelsCards}
      />
      <WhyInvestSection
        subtitle="THE PROCESS"
        title="Our Proven 3D Modeling Process"
        description="We approach every product animation as a marketing asset first and an animation project second. The workflow is designed to deliver clarity, alignment, and predictable milestones before any rendering begins."
        accordionData={whyInvestAccordionData}
      />
      <TeamStandoutSection
        subtitle="HOW WE WORK"
        title={<>Why Choose Our Expert <span>3D Modeling</span> Company?</>}
        description="The right 3D modeling company preserves your creative intent while solving technical challenges like file size, naming conventions, and engine-ready topology. From there the models are polished, validated, and packaged so your team can drop them straight into the pipeline without friction."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201624713?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TechnologySection />
      <IndustrySection
        heading="Industry-Leading 3D Modeling Solutions"
        description="Our 3D modeling services for businesses are applied across the following sectors, each with its own technical standards and production priorities that our team has built specific expertise in."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About 3D Modeling Services"
        faqs={faqs}
      />
    </main>
  );
}
