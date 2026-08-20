import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/Common/CostSection";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import SupportSection from "@/components/LegalGraphics/SupportSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import WonderingSection from "@/components/Common/WonderingSection";
import TechnologySection from "@/components/LegalGraphics/TechnologySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

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
    title: 'Case Review and Discovery Materials',
    content:
      'Complete review of police reports, medical records, expert reports, photographs, and surveillance footage before any production begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Evidence Collection and Analysis',
    content:
      'Evidence analysis in consultation with the attorney and retained expert witnesses to establish the factual foundation the animation will represent.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Script Development',
    content:
      'Narrative script developed against established facts. The animation depicts what the evidence establishes, not what the attorney prefers it to show.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content:
      'Every camera angle and visual sequence is reviewed and approved by the attorney before 3D production begins.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: '3D Modeling and Scene Creation',
    content:
      'Accurate 3D reconstruction of the incident location, vehicles, equipment, or anatomical structures based on measurements, photographs, and engineering data.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Animation Production',
    content:
      'Event sequence animated to the approved storyboard and reviewed against the factual record at each stage.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Attorney and Expert Review',
    content:
      'Full review with the attorney and the retained expert witnesses. The animation must satisfy the expert technical accuracy standards and the attorney strategic requirements.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Courtroom-Ready Delivery',
    content:
      'Final files in courtroom-ready presentation format with documentation of the evidence basis for each animation element.',
  }
];

const title = (
  <>
    Start Your <span>Legal Animation</span> Project
  </>
);

const text = "Tell us the case type, the stage of litigation, and what the animation needs to establish. We will review the brief and respond with a scope and timeline within 48 hours.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Static Legal Graphics",
    text: "Diagrams, maps, medical illustrations, and timeline exhibits as static images. Used for information that does not require motion and for courtrooms where video presentation is unavailable."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Animated Demonstratives",
    text: "Animation depicting event sequences and mechanisms in motion. More effective than static graphics for causation evidence where the sequence of events is at issue."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Interactive Trial Presentations",
    text: "Attorney-controlled presentations allowing real-time navigation of exhibits during testimony."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "When Each Option Works Best",
    text: "Static graphics for complex data requiring extended viewing. Animation for event sequences and mechanisms. Interactive presentations for complex multi-exhibit trials requiring attorney pacing control."
  }
];

const wonderingIndustriesData = [
  {
    name: "Personal Injury & Medical Malpractice",
    intro:
      "Personal injury law firms and medical malpractice attorneys rely on clear, medically accurate visuals to explain how injuries occur and how treatment impacts the body. Demonstratives often include injury mechanism animations, surgical walkthroughs, and timelines that connect negligence to outcome in a way juries can easily understand.",
    points: [
      "Visualizing injury mechanisms, surgical procedures, and medical conditions with accurate demonstrations.",
      "Creating timelines that connect negligence, injury events, treatment, and outcomes clearly.",
      "Helping juries understand complex medical evidence through easy-to-follow visual storytelling."
    ]
  },
  {
    name: "Product Liability",
    intro:
      "Product liability lawyers need precise, technical storytelling to show how and why a product failed. We create detailed animations that break down design flaws, manufacturing defects, and failure sequences, helping establish causation and liability in complex cases.",
    points: [
      "Breaking down product defects and failure mechanisms through detailed visual reconstruction.",
      "Demonstrating how design flaws or manufacturing issues contributed to an incident.",
      "Presenting complex engineering evidence in a format juries can easily evaluate."
    ]
  },
  {
    name: "Insurance Defense",
    intro:
      "Insurance defense firms require balanced, evidence driven visuals that support expert testimony and challenge opposing claims. Demonstratives focus on accident reconstruction, alternative scenarios, and damage analysis to provide clarity and reinforce defence strategies.",
    points: [
      "Creating accident reconstructions based on available evidence and expert analysis.",
      "Visualizing alternative scenarios and evaluating different case interpretations.",
      "Supporting defense strategies with clear and factual courtroom presentations."
    ]
  },
  {
    name: "Criminal Defense",
    intro:
      "Criminal defense attorneys use visual reconstructions to present timelines, scene layouts, and alternative interpretations of events. These demonstratives simplify complex evidence, support witness accounts, and help create reasonable doubt through clear, factual presentation.",
    points: [
      "Reconstructing crime scenes, timelines, and sequences of events visually.",
      "Supporting witness testimony with accurate scene layouts and evidence presentation.",
      "Helping juries understand alternative interpretations through factual visualization."
    ]
  },
  {
    name: "Civil & Corporate Litigation",
    intro:
      "Civil litigation firms and corporate legal teams need polished, persuasive visuals for high stakes disputes. From contract breakdowns to large scale incident reconstructions, we develop graphics and animations that communicate complex information with clarity and credibility in courtrooms and arbitration settings.",
    points: [
      "Visualizing complex disputes, contracts, and business-related evidence clearly.",
      "Creating professional courtroom graphics for trials and arbitration proceedings.",
      "Communicating large-scale incidents through accurate and persuasive animations."
    ]
  }
];

const faqs = [
  {
    question: "What Information Is Needed to Create Legal Graphics Animation?",
    answer: "Police reports, medical records, witness statements, expert reports, surveillance footage, site photographs and measurements, and engineering documents. The completeness of the discovery materials determines the accuracy of the reconstruction.",
  },
  {
    question: "Common mistakes in legal demonstrative evidence?",
    answer: "Depicting events as established when they are actually disputed. Every element produced at Pixel Studios is traceable to a specific evidence basis, and we document that basis as part of every delivery.",
  },
  {
    question: "Are legal animations admissible in court?",
    answer: "Generally yes, when they accurately represent established facts and expert opinions, are disclosed to opposing counsel, and are not presented as fact where they represent opinion. Admissibility is the attorney's responsibility. We produce to the accuracy standards that support it.",
  },
  {
    question: "How accurate must a legal animation be?",
    answer: "Sufficient to survive Daubert or Frye challenge. Every speed, distance, anatomical structure, and timeline must be consistent with the expert report and the underlying evidence.",
  },
  {
    question: "How long does it take to create a trial animation?",
    answer: "Four to eight weeks from complete discovery materials through attorney-approved final delivery. Expedited production available for matters approaching trial.",
  },
  {
    question: "What materials do you need to start?",
    answer: "Police reports, medical records, expert reports, photographs, and site measurements at minimum. The completeness of the materials determines the accuracy of the reconstruction.",
  },
  {
    question: "Can legal animations support expert witness testimony?",
    answer: "Yes. The expert explains the analysis. The animation provides the visual reference the jury can understand. The expert validates the animation as an accurate depiction of the opinion they have formed.",
  },
  {
    question: "What is the difference between accident reconstruction and legal animation?",
    answer: "Accident reconstruction is the forensic analysis performed by a qualified expert. Legal animation is the visual representation of that reconstruction for courtroom presentation. The reconstruction precedes the animation.",
  },
  {
    question: "How much does legal graphics animation cost?",
    answer: "Standard accident reconstruction animation: $3,000 to $8,000. Complex reconstructions or detailed medical legal animations: $8,000 to $25,000. Itemized quotes within 48 hours of a case brief.",
  },
  {
    question: "Can you update an existing courtroom animation?",
    answer: "Yes. New evidence, expert revisions, or attorney changes can be incorporated into existing animations where source files permit.",
  },
  {
    question: "Do you sign NDAs for confidential cases?",
    answer: "Yes. Every engagement begins with a mutual NDA. Case information and discovery materials are never referenced or discussed outside the specific engagement.",
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
      <CostSection
        subtitle="COLLABORATIVE APPROACH"
        title="Simplify Complex Legal Cases with Professional Legal Graphics Animation"
        description="When attorneys use legal graphics and trial animations, they are solving one specific communication problem: how do you make technical, medical, or forensic information comprehensible to twelve people with no background in the subject? The animation does not advocate. It presents the evidence in a visual format that a juror can follow. The legal argument remains with the attorney."
        videoSrc="https://player.vimeo.com/video/1065203124?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What is legal graphics animation, and why does it matter in a case where the evidence should speak for itself? Because evidence almost never speaks for itself. A police report describes what happened in prose. A medical record documents an injury in clinical terminology. Legal graphics animation closes that gap. It translates evidence into a visual format that a judge, a jury, or an arbitrator can evaluate clearly, without requiring knowledge they do not have."
      />
      <StatsSection
        heading="A Trusted Animation Company for Legal Graphics Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Our Legal Graphics Animation Services"
        description="Our courtroom animation services cover every demonstrative evidence format litigation requires."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <SupportSection />
      <TeamStandoutSection
        subtitle="WHY USE"
        title={<>Why Do Attorneys Use <span>Legal Animation in Court?</span></>}
        description="Legal animation transforms complex evidence into clear visual narratives that judges and juries can understand. It strengthens courtroom presentations by making technical, medical, and engineering concepts easier to follow while preserving factual accuracy."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1065200259?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>From Evidence to Animation: <br />Our Legal Visualization Process</>}
        description="Every legal animation project follows a structured visualization process built around evidence accuracy, expert collaboration, and courtroom requirements. From initial case review to final delivery, each stage ensures the animation represents the facts clearly and supports effective legal presentation."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="COMPARE LEGAL"
        title="Legal Graphics vs Legal Animation: What's the Difference?"
        description="Different legal visualization formats serve different courtroom purposes. Static graphics, animation, and interactive presentations each provide unique advantages depending on the complexity of the evidence and how attorneys need to present their case."
        cards={cooperationModelsCards}
      />
      <WonderingSection
        subtitle="INDUSTRIES WE SERVE"
        title="Industries and Legal Practice Areas We Serve"
        description="Personal injury law firms, medical malpractice attorneys, product liability lawyers, insurance defense firms, criminal defense attorneys, civil litigation firms, and corporate legal teams rely on our legal visualization services. Each practice area has specific demonstrative requirements that we understand and approach individually."
        data={wonderingIndustriesData}
      />
      <TechnologySection />
      <TeamStandoutSection
        subtitle="PRICING"
        title={<>Cost of <span>Legal Graphics Animation Services</span></>}
        description="Every legal graphics and animation project is quoted based on the evidence,
 complexity, and production requirements of the case. The following factors
 have the greatest impact on project scope, timeline, and overall cost."
        features={softwareSectionFeatures}

      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
