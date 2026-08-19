import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/IndustrialAnimation3D/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/IndustrialAnimation3D/CostSection"
import HowWeWorkSection from "@/components/IndustrialAnimation3D/HowWeWorkSection";
import WhyInvestSection from "@/components/IndustrialAnimation3D/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/IndustrialAnimation3D/GreatVideosSection";
;
import CooperationModelsSection from "@/components/IndustrialAnimation3D/CooperationModelsSection";
import TechnologySection from "@/components/IndustrialAnimation3D/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/IndustrialAnimation3D/FaqSection";











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
      <StatsSection />
      <CostSection />
      <ServicesSection 
        title="Professional 3D Industrial Animation Services for Every Business Need"
        description="Our industrial animation services cover the full range of technical communication needs across manufacturing, energy, and engineering sectors, all produced by a team that reads engineering drawings as fluently as it builds animation."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <WhyInvestSection />
            <TeamStandoutSection
        subtitle="HOW WE WORK"
        title={<>Why Businesses Choose Our Industrial <span>Animation</span> Company?</>}
        description="We combine engineering literacy with high-end visualization tools to create industrial animations that communicate clearly, validate technically, and engage audiences."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1065200259?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <GreatVideosSection />
      <TechnologySection />
      <IndustrySection 
        heading="Industry-Specific Industrial Animation Solutions"
        description="Industrial animation requirements vary significantly by sector, and our team applies industry-specific technical standards and regulatory awareness to each of the following categories."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
