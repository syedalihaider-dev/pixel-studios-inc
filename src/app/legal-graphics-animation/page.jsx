import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/LegalGraphics/CostSection";
import StatsSection from "@/components/LegalGraphics/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import SupportSection from "@/components/LegalGraphics/SupportSection";
import WhyInvestSection from "@/components/LegalGraphics/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/LegalGraphics/GreatVideosSection";
;
import CooperationModelsSection from "@/components/LegalGraphics/CooperationModelsSection";
import WonderingSection from "@/components/LegalGraphics/WonderingSection";
import TechnologySection from "@/components/LegalGraphics/TechnologySection";

import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/LegalGraphics/FaqSection";











const softwareSectionFeatures = [
  {
    id: 1,
    title: "Factors Affecting Project Cost",
    description:
      "Reconstruction complexity, number of expert review cycles, animation length, and production timeline.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Complexity of the Case",
    description:
      "A single-vehicle accident reconstruction costs less than a multi-party commercial vehicle collision with conflicting expert opinions.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Level of Detail Required",
    description:
      "A demonstrative showing general event sequence costs less than forensic animation with frame-accurate vehicle dynamics and sight line analysis precisely matched to engineering survey data.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Animation Length",
    description:
      "A 90-second reconstruction costs less than a five-minute medical malpractice animation covering surgical procedure, injury mechanism, and long-term consequence.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Expert Witness Collaboration",
    description:
      "Multi-expert review cycles with revision requirements at each review add to the production timeline and cost.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Delivery Timeline",
    description:
      "Standard production runs four to eight weeks. Expedited production for cases approaching trial is available.",
    icon: "/icons/experienced.png"
  }
];

const standoutFeatures = [
  {
    id: 1,
    title: "Explain Complex Events Clearly",
    description:
      "A 30-second accident reconstruction animation communicates spatial relationships, vehicle speeds, and event timing with a precision that twenty minutes of expert testimony cannot match in a juror's mental model.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Strengthen Expert Testimony",
    description:
      "The expert explains the analysis. The animation shows what it looks like in the specific facts of the case. How do legal animations support expert witnesses? By providing the visual reference the expert can speak to directly rather than describing abstractly.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Improve Jury Understanding",
    description:
      "Jurors evaluate cases on what they understand. Legal animation increases the depth of understanding, which improves the quality of the verdict.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Visualize Technical Evidence",
    description:
      "Engineering analysis, biomechanical opinion, and medical testimony exist in precise but abstract forms. Animation makes the abstraction concrete at the level of visual understanding.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Present Timelines and Sequences Accurately",
    description:
      "Trial presentation graphics allow attorneys to present precise event timelines with correct spatial and temporal relationships that verbal testimony approximates.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Increase Engagement During Trial Presentations",
    description:
      "Jurors pay attention to animation. The visual format sustains engagement through complex technical testimony that verbal description alone cannot hold.",
    icon: "/icons/experienced.png"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Accident Reconstruction Animation",
    description:
      "Accident reconstruction built from police reports, witness statements, traffic data, surveillance footage, and engineering analysis. Accurate to the expert witness standard that courtroom admissibility requires.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Medical Legal Animation",
    description:
      "Medical legal animation visualizing injuries, surgical procedures, and biological mechanisms connecting a plaintiff's medical record to the damages claimed. Reviewed against clinical documentation and expert opinion.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Personal Injury Case Animation",
    description:
      "How the injury occurred, the nature and extent of the physical damage, and the mechanism of harm presented visually for juries evaluating causation and damages.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Liability Animation",
    description:
      "Product defect and failure mechanism animation showing how a product failed and how that failure caused the injury, in terms a non-engineer can evaluate.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Construction Accident Animation",
    description:
      "Site fall, equipment failure, and structural collapse case animation with precise 3D reconstruction of the incident environment.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Workplace Injury Animation",
    description:
      "Industrial accident and occupational injury animation for workers' compensation and employer liability litigation.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Criminal Case Visualization",
    description:
      "Crime scene reconstruction and event sequence animation for defense and prosecution teams in criminal litigation.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Forensic Animation",
    description:
      "Forensic animation for ballistics, bloodstain pattern, fire origin, and structural failure analysis visualized in three dimensions from physical evidence.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Trial Presentation Graphics",
    description:
      "Static and animated trial presentation graphics for courtroom display: timelines, diagrams, medical illustrations, and engineering schematics presented clearly at trial pace.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Interactive Legal Demonstratives",
    description:
      "Attorney-controlled interactive courtroom demonstratives for real-time zoom, pause, and evidence navigation during testimony.",
    videoSrc: "https://player.vimeo.com/video/1065182530?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Legal Graphics Animation Services for Litigation, Trial & Courtroom | Pixel Studios",
  description: "Need courtroom animation that holds up to judicial scrutiny? Pixel Studios builds accident reconstruction, medical legal animation, and trial demonstratives. Get a quote.",
};

export default function LegalGraphicsPage() {
  return (
    <main>
      <Banner
        title="Legal Graphics Animation Services for Courtroom Demonstratives"
        description="How do legal animations help judges and juries understand evidence? By showing rather than describing. An accident reconstruction animation places the viewer at the intersection. A medical legal animation shows exactly how the injury occurred at the anatomical level the clinical record documents. A forensic animation demonstrates the event timeline with the precision witness testimony cannot reliably provide. Pixel Studios Inc. provides legal graphics animation services for litigation firms, personal injury attorneys, insurance defense teams, and corporate legal departments across the USA."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <StatsSection />
      <ServicesSection 
        title="Our Legal Graphics Animation Services"
        description="Our courtroom animation services cover every demonstrative evidence format litigation requires."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection />
      <SupportSection />
            <TeamStandoutSection
        subtitle="WHY USE"
        title={<>Why Do Attorneys Use <span>Legal Animation in Court?</span></>}
        description="Legal animation transforms complex evidence into clear visual narratives that judges and juries can understand. It strengthens courtroom presentations by making technical, medical, and engineering concepts easier to follow while preserving factual accuracy."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1065200259?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <TechnologySection />
            <TeamStandoutSection
        subtitle="PRICING"
        title={<>Cost of <span>Legal Graphics Animation Services</span></>}
        description="Every legal graphics and animation project is quoted based on the evidence, complexity, and production requirements of the case. The following factors have the greatest impact on project scope, timeline, and overall cost."
        features={softwareSectionFeatures}
        
      />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
