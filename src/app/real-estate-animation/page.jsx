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
    title: "Property Tours",
    description: "Full walkthrough animations for sales galleries, websites, and buyer presentations, giving prospects a realistic sense of the finished space and the lifestyle it offers.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Developments",
    description: "Master-planned community animations covering multiple buildings, phases, and amenities across an entire site, from phase one launch to full build-out.",
    icon: "/industry/services-icon-02.png",
  },
  {
    id: 3,
    title: "Sales",
    description: "Focused marketing and investor presentation animation built to accelerate pre-sales momentum and support capital raises at every stage of the funding lifecycle.",
    icon: "/industry/services-icon-03.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "3D Architectural Visualization / Rendering",
    description: "Photorealistic still renderings establishing the look, materials, and lighting of a development before it is built, used across marketing, permitting submissions, and investor materials from the earliest project stages.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Animation & Walkthroughs",
    description: "Full walkthrough animations moving buyers room by room and floor by floor, exactly as they would experience the property in person, with realistic finishes and furnishing that sell the lifestyle, not just the layout.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "2D/3D Floor Plan Animation",
    description: "Floor plans brought to life with animated camera movement and furnishing overlays, so buyers grasp scale and flow at a glance instead of decoding a flat technical drawing.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Interior & Exterior Rendering Animation",
    description: "Detailed interior finishes and exterior facades rendered and animated from every angle, building buyer confidence in final quality well before a sales gallery even opens.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Promotional & Marketing Animations",
    description: "Brand-forward video for sales launches, website hero content, and digital ad campaigns, designed to generate qualified leads from the day a project is announced.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Aerial/Drone Simulation Animations",
    description: "Simulated aerial flythroughs showing a property's setting, surroundings, and scale without waiting for construction to reach a filmable stage. Ideal for master-planned, waterfront, and resort developments.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review architectural drawings, CAD files, and project goals with your development and sales leadership to scope the right approach for your timeline.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A visual concept and camera path are developed around how you want buyers and investors to experience the property from the first frame to the last.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene and camera move is planned and approved before animation begins, so the sequence matches your sales narrative and highlights what your target buyer cares about.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "3D models are built directly from your architectural plans, materials, and finishes, so the animation reflects the actual building design rather than a generic stand-in.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until the walkthrough feels exactly right, from lighting mood to camera pacing.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your channels require, from sales gallery screens to digital ads to investor roadshow decks.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A custom real estate animation studio with work across residential, commercial, and mixed-use projects, from single towers to multi-phase communities spanning years of build-out."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation starts from your actual architectural plans, never a template, so it represents the property down to specific finishes and amenities."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around sales launches and investor deadlines, so marketing materials are ready before the launch date, not after it."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, coordinating directly with your architects, sales team, and marketing agency."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Real Estate Animation</span> Project
    </>
  );

const text =
    "If your development is more impressive than your current renderings show, let's fix that. Talk to our team about your architectural plans and sales timeline, and we will build the real estate animation that turns buyers and investors into believers before you have broken ground. Accurate to your actual design, ready for every stage of the campaign, and built to keep working long after the sales gallery closes.";

const faqs = [
  {
    question: "What's the Difference Between Real Estate 3D Animation and a 360° Virtual Tour?",
    answer: "3D animation is a directed, cinematic sequence built to highlight a property's best features with camera movement and storytelling. A 360° virtual tour is an interactive, self-guided format buyers navigate on their own, without a directed narrative.",
  },
  {
    question: "When Should I Commission a Real Estate Animation?",
    answer: "As soon as architectural plans are far enough along to model accurately, typically during design development, so the animation is ready for pre-sales well ahead of construction completion and any sales gallery opening.",
  },
  {
    question: "2D vs 3D Real Estate Animation, Which Is Better?",
    answer: "3D gives buyers a realistic, immersive sense of scale and finishes and performs better for high-value and luxury sales. 2D floor plan animation suits quick, budget-friendly overviews of layout and flow earlier in a campaign.",
  },
  {
    question: "Do I Own the Finished Animation, and Can I Reuse It?",
    answer: "Yes. You retain your deliverables and can reuse the animation across future marketing, investor, and sales campaigns for as long as the development and its sales phases remain active.",
  },
  {
    question: "Can You Create an Animation From Our Existing Floor Plans or Renderings?",
    answer: "Yes. We regularly build animations from existing architectural drawings, CAD files, or static renderings rather than restarting the design process, which meaningfully reduces both cost and production timeline.",
  },
  {
    question: "Will Our Unreleased Project Details Stay Confidential During Production?",
    answer: "Yes. Confidentiality is standard practice on every development we work on, and we are glad to formalize it with an NDA before any plans, renderings, or sales materials are shared with our team.",
  },
  {
    question: "What Happens if the Building Design Changes After Production Starts?",
    answer: "Design changes are common during development. Our 3D models can be updated to reflect revisions without rebuilding the project from the ground up, keeping the cost and timeline impact small.",
  },
  {
    question: "What Determines How Long a Real Estate Animation Takes to Produce?",
    answer: "Timeline depends on the scale of the development, the level of architectural detail required, and how many buildings, units, or amenity spaces need to be modeled and animated in full detail.",
  },
  {
    question: "What Is the Pricing Structure for Your Real Estate 3D Animation Services?",
    answer: "Real estate 3D animation cost is scoped around project scale, animation length, and level of detail. Most quotes follow an initial review of your architectural plans, delivery date, and intended use across channels.",
  },
  {
    question: "How Do Your 3D Animation Services Help Attract Investors for Large Developments?",
    answer: "A realistic walkthrough or investor presentation animation lets capital partners see a project's potential clearly and emotionally, which builds confidence and accelerates fundraising conversations for large-scale developments.",
  },
  {
    question: "Can Real Estate Animation Be Used for International Marketing Campaigns?",
    answer: "Yes. Animation travels well across markets since it does not depend on an in-person site visit, and voiceover or subtitles can be localized for international buyers and overseas roadshows.",
  },
  {
    question: "Can the Animation Include Neighborhood and Amenity Context, Not Just the Building?",
    answer: "Yes. Many projects include surrounding streetscape, nearby amenities, and lifestyle context alongside the building itself, so buyers understand not just the unit but the neighborhood they would be living in.",
  },
];

export const metadata = {
  title: "Real Estate Animation Service | Pixel Studios",
  description: "Pixel Studios' real estate animation service brings unbuilt developments to life with 3D walkthroughs, renderings, and marketing video that sell.",
};

export default function RealEstatePage() {
  return (
    <main>
      <Banner
        title="Real Estate Animation That Sells Before Ground Breaks"
        description="How do you sell a home that does not exist yet? That is the problem every pre-construction campaign faces, and floor plans with static renderings only take a buyer so far. Our real estate animation service turns architectural drawings and CAD models into 3D walkthroughs, renderings, and marketing video that let buyers and investors experience a property long before completion. Pixel Studios Inc. builds these assets from your actual plans, working from the same underlying 3D models across every stage of the campaign, so nothing gets rebuilt from scratch as the project moves from investor pitch to sales gallery to sold out. From single-unit walkthroughs to master-planned communities, the visuals carry the development through its entire sales lifecycle. Buyers get confidence, investors get clarity, and your sales team gets materials that always match what is actually being built, even as the design evolves."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Real Estate Animation"
        title="Why Animation Matters in the Real Estate Industry?"
        description="Why is off-plan selling so hard? Buyers are asked to commit to something they cannot walk through, and static renderings leave too much to the imagination for a purchase this large. Developers need materials that work in investor decks, sales galleries, and digital campaigns at the same time, but photography is impossible for an unbuilt property, and physical scale models are slow to produce, expensive to ship, and impossible to update. Design changes are routine during development, so sales teams end up working with materials that no longer match what is being built. International buyers add another layer of difficulty, because flying prospects to an active construction site is unrealistic, and the first impression has to happen entirely on a screen."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What changes when buyers can actually experience the property? Real estate 3d animation lets them walk a unit, tour a lobby, or fly over an entire community before construction finishes, and the underlying model updates quickly as designs evolve. Developers using real estate video animation see stronger pre-sales momentum, more persuasive investor presentation animation for capital raises, and marketing that performs consistently everywhere, from sales centers to social media to overseas roadshows where a site visit is simply not an option."
      />
      <ServicesSection 
        title="Animation Solutions for Real Estate"
        description="What does a full real estate animation service include? From still renderings to full aerial flythroughs, these six formats cover every stage of a development's marketing lifecycle."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Real Estate <span>Animation</span> Projects</>}
        description="Most developer engagements fall into three categories, and because they share underlying models, adding a second project type is far cheaper than starting the first."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Real Estate <br />Animation Process</>}
        description="Architectural accuracy and marketing appeal have to coexist in every frame. Our process keeps your architects and your sales team in the same loop from the first storyboard to final delivery."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios?"
        description="Rendering a building is easy. Selling one that does not exist yet is not. Here is why developers choose our custom real estate animation studio."
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
