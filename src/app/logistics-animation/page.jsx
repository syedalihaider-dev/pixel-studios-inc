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

const sliderItems = [
  {
    id: 1,
    title: "Animated Logistics Services",
    description: "A complete overview of your service offering, from freight modes to warehousing, fulfillment, and customs support, built as one clear animated asset for sales decks, your website, and trade show screens that need to work without a live presenter.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Supply Chain Animation",
    description: "End-to-end visualizations tracing a shipment from origin to delivery, showing every handoff, facility, and system your operation manages, so clients understand exactly what they are paying for and why it is worth it.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Freight Animation Video",
    description: "Mode-specific content covering trucking, rail, air, or ocean freight, tailored to the routes and capacity you actually run rather than generic stock footage that could belong to any carrier.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Transport Animation",
    description: "Fleet-focused animation demonstrating routing efficiency, real-time tracking, and delivery capability in a way that is far more memorable than a capabilities PDF.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Operational Workflow Animations",
    description: "Step-by-step breakdowns of warehouse, sorting, and fulfillment workflows, used both for training new hires quickly and for documenting process across compliance, quality, and safety audits.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Promotional Logistics Videos",
    description: "Brand-forward video for trade shows, websites, and sales decks that positions your company as a modern, technology-driven operator instead of a commoditized freight provider competing purely on price.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your operation, facilities, and fleet with your operations and sales leadership to scope the right approach for your audience and use case.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "Script and visual concept are built around your actual processes and the outcome the video needs to drive, whether sales, training, or investor confidence.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, so your operation is represented accurately and in the right order from the start.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Facilities, fleet, and systems are modeled to reflect your real operation, not a generic warehouse or truck that could belong to anyone in the industry.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until the video matches how your operation actually runs, down to specific equipment and branding.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your sales, training, and investor materials need, from decks to your website to trade show screens.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "We have built logistics company animation for 3PLs, freight carriers, and warehouse operators across regions and service models, so we know the operational details your buyers care about."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation reflects your actual fleet, facilities, and processes, never stock visuals that could just as easily represent a competitor down the road."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built to match your sales cycles, trade show dates, and investor deadlines, so the video is ready exactly when you need it."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from discovery through delivery, coordinating with your operations team so nothing gets misrepresented."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Logistics Animation</span> Project
    </>
  );

const text =
    "If your operation is more sophisticated than your current sales deck or training materials show, it is time to fix that. Talk to our team about your network, fleet, or facilities, and we will build the logistics animation that finally shows it clearly. Accurate to your real operation, ready for sales, training, and investor conversations alike.";

const faqs = [
  {
    question: "What Are the Benefits of Logistics Animation for My Company?",
    answer:
      "It makes complex operations easy to understand for clients, investors, and new employees, which shortens sales cycles, improves training consistency across facilities, and strengthens how your company is perceived against larger competitors.",
  },
  {
    question: "Why Use Animation for Supply Chain Marketing Instead of Traditional Visuals?",
    answer:
      "Animation shows a full network end to end, which photography and site tours cannot replicate in one asset, and it can be updated as your operation changes without the cost and scheduling of a reshoot.",
  },
  {
    question: "How Do Logistics Animations Improve Customer Communication?",
    answer:
      "They give clients a visual reference for exactly how their shipments, inventory, or contracts will be handled, reducing miscommunication and building confidence before the first shipment ever moves through your network.",
  },
  {
    question: "What Is Logistics Animation and How Is It Different From a Regular Explainer Video?",
    answer:
      "Logistics animation is built around real operational systems: fleets, facilities, and workflows. Accuracy to your actual operation matters far more here than in a typical marketing explainer built on a generic concept.",
  },
  {
    question: "Should I Choose 2D or 3D Animation for My Logistics or Supply Chain Video?",
    answer:
      "3D works best for facilities, fleets, and physical processes where depth and scale matter to the viewer. 2D suits simpler conceptual overviews of a workflow or network structure and typically costs less.",
  },
  {
    question: "How Much Does a Custom Logistics or Supply Chain Animation Cost?",
    answer:
      "Cost depends on the complexity of your operation, video length, and the level of 3D detail required for facilities and fleet. Most projects are scoped after an initial discovery conversation about your goals.",
  },
  {
    question: "How Long Does It Take to Produce a Warehouse or Supply Chain Management Animation?",
    answer:
      "Most projects run four to six weeks from discovery to final delivery, depending on scope, the number of facilities involved, and revision rounds.",
  },
  {
    question: "Can a Logistics Company Animation Reflect Our Actual Fleet, Equipment, or Facilities?",
    answer:
      "Yes. We build every animation from your real assets and operations rather than stock visuals, so the final video accurately represents your company and does not look interchangeable with a competitor.",
  },
  {
    question: "How Does Logistics Animation Help Beyond Marketing?",
    answer:
      "The same animations support internal training, safety onboarding, and process standardization across facilities and regional teams that may not otherwise share one consistent way of explaining how things work.",
  },
  {
    question: "Can Logistics Animation Be Localized for Global Operations?",
    answer:
      "Yes. Voiceover, on-screen text, and subtitles can all be localized by region, which is especially useful for safety training animations deployed across facilities in multiple countries.",
  },
  {
    question: "What Information Should I Provide to Start a Logistics Process Animation Project?",
    answer:
      "Facility layouts, fleet details, process documentation, and a clear sense of your target audience all help us scope an accurate animation from the first discovery call. Where materials are limited, we fill gaps through interviews with your operations team.",
  },
  {
    question: "Can Logistics Animation Show Tracking and Technology Systems, Not Just Physical Assets?",
    answer:
      "Yes. Many projects combine physical fleet and facility visuals with animated overlays of tracking dashboards and software systems, giving prospects a complete picture of both the physical and digital sides of your operation.",
  },
];

export const metadata = {
  title: "Logistics Animation Service | Pixel Studios",
  description: "Pixel Studios' logistics animation service turns supply chain, warehouse, and fleet operations into clear video for investors, clients, and teams.",
};

export default function LogisticsAnimationPage() {
  return (
    <main>
      <Banner
        title="Logistics Animation That Shows What Your Operation Can Do"
        description="Why do sophisticated logistics operations so often lose deals to companies with better slide decks? Because supply chains are nearly impossible to explain in words and photographs. The scale is too big, the handoffs are too many, and the systems that make your operation impressive are exactly the ones a prospect never gets to see. Our logistics animation service fixes that. Pixel Studios Inc. turns freight networks, warehouse operations, and fleet systems into video that a client, investor, or new hire can follow on the first watch, without a single site visit. Whether you are pitching a new 3PL contract, raising capital, or standardizing safety training across a dozen facilities, the job is the same: make an operation this complex feel simple to understand, and to make that clarity work as hard in a boardroom as it does on a warehouse floor."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Logistics Animation"
        title="Why Animation Matters in the Logistics Industry?"
        description="What actually goes wrong when logistics companies try to explain themselves? Sales teams describe capabilities in words a prospect has to imagine, safety teams struggle to standardize training across facilities that do not look alike, and investors are asked to trust a business model they cannot see in motion. No photo captures a multi-modal network in one frame. The result is longer sales cycles, inconsistent onboarding, and pitch decks that undersell genuinely strong operations. Facilities and equipment change constantly too, so static marketing materials go stale the moment a new automation system arrives or a warehouse relocates. Against larger, better-funded competitors, that presentation gap can decide contracts your service could easily have won."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What happens when you can finally show the whole operation? Logistics 3d animation walks a prospective client through your entire network in minutes. A supply chain management animation makes every handoff visible, a warehouse automation animation standardizes safety training across every site, and logistics animation for investors makes a complex model instantly legible. Companies using animated logistics services consistently shorten sales cycles, cut the back-and-forth caused by prospects not grasping the operation, and gain a marketing asset that updates far faster and cheaper than reshooting facility footage every time something changes."
      />
      <ServicesSection 
        title="Animation Solutions for Logistics"
        description="What should a logistics animation service actually be able to produce? Everything from a full network overview to a single warehouse workflow. These six formats cover the range our logistics clients use most."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Logistics <br />Animation Process</>}
        description="Accuracy to your real operation is the whole point, so our process is built around your operations team, not around generic industry footage. Here is how a project runs from discovery to delivery."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios?"
        description="The difference between a generic explainer studio and a genuine logistics animation partner shows up in the details of your operation. Here is where we earn that difference."
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
