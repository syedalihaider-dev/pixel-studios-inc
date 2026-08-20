import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/IndustrialAnimation3D/CostSection"
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TechnologySection from "@/components/IndustrialAnimation3D/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: 'Industrial and Engineering Expertise',
    description: "Our team includes artists experienced in reading CAD models and engineering drawings, not just generalist animators applying motion after the fact without technical context.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Accurate Technical Visualization',
    description: "Every industrial animation is checked against the source engineering data, whether that originates from SolidWorks, AutoCAD, or Autodesk Inventor files.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Custom Animation Solutions',
    description: "Every project starts from your specific equipment, process, and audience rather than a generic industrial animation template retrofitted to fit.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'High-End Visual Quality',
    description: "Broadcast-quality rendering and lighting are applied to every industrial animation regardless of the technical complexity underneath the finished surface.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Dedicated Project Management',
    description: "One project manager coordinates between your engineering teams and our production team throughout the entire project lifecycle.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Reliable Delivery Timelines',
    description: "Documented production schedules keep technically complex industrial animation projects on track without sacrificing accuracy for speed at the final stage.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "Manufacturing",
    image: "/industry/01.png",
    text: "Manufacturing equipment animation and production line visualization for facilities seeking to train staff or market capability to new clients and partners.",
    link: "#"
  },
  {
    id: 2,
    title: "Oil and Gas",
    image: "/industry/02.png",
    text: "Industrial system animation for pipeline operations, refinery processes, and extraction equipment built to strict technical accuracy and safety communication standards.",
    link: "#"
  },
  {
    id: 3,
    title: "Renewable Energy",
    image: "/industry/03.png",
    text: "Industrial animation for turbine systems, solar installations, and energy storage technology is explained clearly to investors and regulatory bodies alike.",
    link: "#"
  },
  {
    id: 4,
    title: "Construction and Infrastructure",
    image: "/industry/04.png",
    text: "Technical animation for heavy construction equipment, infrastructure projects, and large-scale mechanical systems used across public works and private development.",
    link: "#"
  },
  {
    id: 5,
    title: "Automotive",
    image: "/industry/05.png",
    text: "Industrial animation for automotive manufacturing lines, robotics integration, and mechanical systems within high-volume production facilities.",
    link: "#"
  },
  {
    id: 6,
    title: "Aerospace and Defense",
    image: "/industry/06.png",
    text: "Engineering animation services for aerospace mechanical systems and defense equipment built to exacting technical specifications and security requirements.",
    link: "#"
  },
  {
    id: 7,
    title: "Mining and Heavy Equipment",
    image: "/industry/06.png",
    text: "Industrial machinery animation services for mining equipment and heavy machinery operating in extreme operational environments and remote locations.",
    link: "#"
  },
  {
    id: 8,
    title: "Industrial Automation",
    image: "/industry/06.png",
    text: "Animation visualizing industrial automation systems, PLC systems, and SCADA systems integration across modern, increasingly automated production facilities.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Industrial Process Animation",
    description: "Industrial process animation visualizing multi-stage manufacturing or chemical processes end-to-end, built from engineering data rather than visual approximation. Every stage transition is timed to match the actual cycle time of the process being shown.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Manufacturing Animation",
    description: "Manufacturing animation showing production line sequences, equipment interaction, and material flow across a facility for training and marketing use. We model the actual layout of production facilities rather than a generic factory backdrop.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Mechanical Animation",
    description: "Mechanical engineering animation services depicting gear systems, hydraulics, and moving assemblies with technically accurate motion derived directly from CAD models. Mechanical systems are animated to their real tolerances, not an approximated range of motion.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Assembly Animation",
    description: "Product assembly animation sequencing component installation steps are clearly for training, technical documentation, and customer-facing demonstration. Sequencing follows the actual assembly order specified by your engineering teams.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Industrial Equipment Animation",
    description: "Industrial equipment demonstration videos showing machinery function and operating principles without requiring physical access to the equipment. Useful for export markets where shipping a demo unit is impractical.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Safety Training Animation",
    description: "Industrial safety training animation walks employees through hazard scenarios and correct procedures in a controlled, repeatable visual format. Scenarios can depict situations too dangerous to stage for live training footage.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Plant and Facility Animation",
    description: "Plant operation animation showing full facility layout, workflow, and system integration for stakeholder presentations and operational planning. Built from facility blueprints for dimensional accuracy across the full site.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Engineering Simulation Animation",
    description: "Engineering simulation animation visualizes stress analysis, thermal behavior, or fluid dynamics results from engineering simulations in an accessible visual format. Translates simulation data into a narrative that non-engineers can follow.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Technical Explainer Animations",
    description: "Engineering explainer videos breaking down complex technical systems for non-technical stakeholders, investors, and customers who need the concept without the full engineering background.",
    videoSrc: "https://player.vimeo.com/video/1200540842?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
    title: '1 Equipment Demonstrations',
    content: "Industrial equipment demonstration videos let prospects evaluate machinery capability without scheduling a site visit or disrupting production downtime to host a tour."
  },
  {
    id: 2,
    title: '2 Manufacturing Process Visualization',
    content: "Factory process animation communicates production capability to buyers, auditors, and partners who cannot tour the facility in person or across international markets."
  },
  {
    id: 3,
    title: '3 Employee Safety Training',
    content: "Animated safety scenarios train employees on hazard recognition without exposing new hires to live operational risk during their first weeks on the floor."
  },
  {
    id: 4,
    title: '4 Investor and Stakeholder Presentations',
    content: "Technical process visualization gives investors a clear understanding of operations that financial statements and written reports alone cannot communicate effectively."
  },
  {
    id: 5,
    title: '5 Product and Machinery Marketing',
    content: "Industrial product demonstration animation gives marketing teams a visual asset that explains capability without the cost and logistics of an industrial photoshoot."
  },
  {
    id: 6,
    title: '6 Technical Sales Presentations',
    content: "Sales engineers use industrial animation to explain system integration and performance during technical evaluation conversations with prospective buyers and procurement teams."
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Technical Consultation',
    content: 'We consult directly with your engineering teams to understand the system, the audience, and the technical accuracy required before any visual work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Asset Collection and Engineering Review',
    content: 'CAD models, Revit files, and engineering drawings are collected and reviewed for completeness before entering production, flagging any gaps in the source data early.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visualization Planning',
    content: 'Every sequence and camera angle is mapped against the engineering data before 3D modeling begins, with technical review built into this stage rather than left for later.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: '3D Modeling and Asset Development',
    content: 'Industrial machinery and mechanical systems are modeled directly from CAD data to preserve dimensional and functional accuracy throughout the pipeline.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Motion is animated according to actual mechanical behavior, not approximated movement, particularly for systems involving PLC-controlled sequencing or timed cycles.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Technical Validation and Quality Assurance',
    content: 'Engineering teams review the animation for technical accuracy before final rendering, catching errors while they remain inexpensive to fix rather than after delivery.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Rendering and Post-Production',
    content: 'Final rendering, lighting, and compositing bring the validated animation to its finished visual quality for client and stakeholder delivery.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Files are delivered in every format specified at kickoff, with source files available for future Product Lifecycle Management integration and reuse.',
  }
];

const title = (
  <>
    Start Your <span>Industrial Animation</span> Project with a Free Consultation
  </>
);

const text = "Book a discovery call, and we will scope your industrial animation project, timeline, and investment within 48 hours, with no obligation to proceed.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Simplify Complex Engineering Concepts",
    text: "Industrial workflow animation translates dense engineering concepts into a format that non-engineers can follow and act on without specialized training."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Improve Training Effectiveness",
    text: "3D industrial training videos improve retention and reduce onboarding time compared to manuals and static diagrams alone, particularly for spatial and mechanical concepts."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Reduce Operational Miscommunication",
    text: "Clear visualization of plant operation animation reduces the costly misunderstandings that occur between engineering teams and external stakeholders or contractors."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Accelerate Sales Cycles",
    text: "Industrial product demonstration animation answers technical questions early in the conversation, shortening the evaluation period for complex equipment purchases."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Enhance Stakeholder Understanding",
    text: "Investors and board members grasp operational complexity faster through technical process visualization than through written reports or static diagrams alone."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Minimize On-Site Demonstration Costs",
    text: "Animated equipment demonstration videos reduce the travel, downtime, and safety risk associated with repeated in-person plant tours for every new prospect."
  }
];

const faqs = [
  {
    question: "What Are 3D Industrial Animation Services?",
    answer: "3D industrial animation services cover the visualization of manufacturing processes, machinery, and engineering systems using technically accurate 3D animation for training, marketing, and stakeholder communication.",
  },
  {
    question: "How Much Does Industrial Animation Cost?",
    answer: "A standard equipment demonstration animation typically starts at $3,000 to $7,000. Full process or facility animations range from $8,000 to $25,000, depending on complexity. Itemized quotes within 48 hours.",
  },
  {
    question: "How Long Does an Industrial Animation Project Take?",
    answer: "Most industrial animation projects are completed in four to eight weeks, depending on engineering data availability and the technical complexity of the system involved.",
  },
  {
    question: "Can You Animate Existing CAD Models?",
    answer: "Yes. CAD to animation services using SolidWorks, AutoCAD, Autodesk Inventor, or Revit files are a core part of our industrial animation process.",
  },
  {
    question: "What Industries Benefit Most from Industrial Animation?",
    answer: "Manufacturing, oil and gas, renewable energy, construction, automotive, and aerospace industries consistently benefit most from technically accurate industrial animation.",
  },
  {
    question: "Can Industrial Animations Be Used for Safety Training?",
    answer: "Yes. Industrial safety training animation is one of our most requested applications, allowing repeatable, controlled hazard training without exposing employees to operational risk.",
  },
  {
    question: "How Accurate Are Technical and Engineering Animations?",
    answer: "Every industrial animation is built directly from engineering data and reviewed by your engineering teams for technical accuracy before final delivery is approved.",
  },
  {
    question: "What File Formats Do You Deliver?",
    answer: "Standard delivery includes MP4 in multiple resolutions, with additional formats available for integration into Product Lifecycle Management systems and internal platforms.",
  },
  {
    question: "How Many Revisions Are Included?",
    answer: "Two full revision rounds are standard. Additional rounds are available and priced transparently upfront before production begins on the project.",
  },
  {
    question: "Who Owns the Final Animation Assets?",
    answer: "Full ownership of the final industrial animation assets transfers to you upon final payment, without restriction or ongoing licensing fees of any kind.",
  }
];

export const metadata = {
  title: "3D Industrial Animation Services for Modern Industries | Pixel Studios",
  description: "Need 3D industrial animation services that engineers actually trust? Pixel Studios builds technically accurate animation for manufacturing and industrial brands.",
};

export default function IndustrialAnimation3DPage() {
  return (
    <main>
      <Banner
        title="Advanced 3D Industrial Animation Services for Modern Industries"
        description="We are a dedicated industrial animation studio working directly from CAD models, engineering drawings, and SolidWorks, AutoCAD, or Autodesk Inventor files to produce industrial process animation that production teams, engineering teams, and safety officers all sign off on without hesitation. Whether you need manufacturing animation services for a plant walkthrough or industrial equipment animation for a sales presentation, the technical accuracy is never negotiable, and neither is the production quality that makes the final asset usable in front of investors and customers alike."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for 3D Industrial Animation"
        statsData={statsData}
        variant="gradient"
      />
      <CostSection />
      <ServicesSection
        title="Professional 3D Industrial Animation Services for Every Business Need"
        description="Our industrial animation services cover the full range of technical communication needs across manufacturing, energy, and engineering sectors, all produced by a team that reads engineering drawings as fluently as it builds animation."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <HowWeWorkSection
        heading="How Businesses Use 3D Industrial Animation Services?"
        description="3D industrial animation helps brands communicate complex engineering details, show operations that are invisible to the eye, and simplify safety, training, and sales presentations."
        accordionData={howWeWorkAccordionData}
      />
      <CooperationModelsSection
        subtitle="Business Benefits"
        title="Business Benefits of Industrial Animation"
        description=""
        cards={cooperationModelsCards}
      />
      <WhyInvestSection
        subtitle="THE PROCESS"
        title="Our Proven Industrial Animation Production Process"
        description="We follow a rigorous, technically validated pipeline to ensure your industrial processes are animated with absolute dimensional and behavioral accuracy."
        accordionData={whyInvestAccordionData}
      />
      <TeamStandoutSection
        subtitle="HOW WE WORK"
        title={<>Why Businesses Choose Our Industrial <span>Animation</span> Company?</>}
        description="We combine engineering literacy with high-end visualization tools to create industrial animations that communicate clearly, validate technically, and engage audiences."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1065200259?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TechnologySection />
      <IndustrySection
        heading="Industry-Specific Industrial Animation Solutions"
        description="Industrial animation requirements vary significantly by sector, and our team applies industry-specific technical standards and regulatory awareness to each of the following categories."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions About 3D Industrial Animation Services"
        faqs={faqs}
      />
    </main>
  );
}
