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
    title: "Concepts",
    description: "Early-stage concept visualization used to test and communicate design direction before drawings are finalized, helping a firm gather feedback while a design is still flexible.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Client Presentations",
    description: "Polished walkthroughs and renderings built specifically for client meetings, planning boards, and investor presentations where the final decision gets made.",
    icon: "/industry/services-icon-02.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Architectural Rendering",
    description: "Photorealistic still renderings that establish materials, lighting, and mood for a design before construction begins, used for client presentations, marketing, and permitting submissions.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Walkthroughs",
    description: "Full walkthrough animations that move through a building room by room, showing flow, scale, and finishes exactly as they would be experienced in person by a future occupant.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Visualization",
    description: "Detailed 3D models built directly from architectural plans, used for design review, client presentations, and construction coordination across the whole project team.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "CGI",
    description: "High-end CGI production combining architectural accuracy with cinematic lighting and camera work for standout marketing and portfolio pieces that set a firm apart from competitors.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your architectural drawings, CAD files, and presentation goals to scope the right approach for your audience and timeline.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A camera path and visual concept are developed around how you want your audience to experience the design, from arrival to interior detail.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene and camera move is planned and approved before animation begins, so the sequence highlights the features that matter most.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "3D models are built directly from your architectural plans and materials for dimensional accuracy across every space.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until the walkthrough feels exactly right, from lighting to camera pacing.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your presentations and marketing require, from planning board screens to your website.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An architecture animation service with work across residential, commercial, and institutional projects, fluent in reading architectural plans and construction documents."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation is built from your actual plans, never a generic template retrofitted to look like your building."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around client meetings and submission deadlines, so the animation is ready before the presentation, not after."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, coordinating directly with your architects and design team."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Architecture Animation</span> Project
    </>
  );

const text =
    "If your design is stronger than your current presentation materials show, that is an easy fix. Talk to our team about your plans and your timeline, and we will build the architecture animation that helps clients and boards see the vision clearly, before a single wall goes up. Bring us your drawings, and we will bring the visualization your design deserves.";

const faqs = [
  {
    question: "Does an Architectural Animation Need to Exactly Match the Finished Building?",
    answer:
      "We build every animation from your actual plans, so it reflects the design as closely as possible at the time of production. Minor construction-phase adjustments after that point are common and do not require rebuilding the entire animation.",
  },
  {
    question: "What's the Difference Between an Architectural Walkthrough Animation and a 360° Virtual Tour?",
    answer:
      "A walkthrough animation is a directed, cinematic sequence built to highlight specific design features with intentional camera movement. A 360° virtual tour is interactive and self-guided, letting viewers explore the space at their own pace.",
  },
  {
    question: "Can Architectural Animation Be Combined With Real Drone or Site Footage?",
    answer:
      "Yes. Combining animated visualization with real site or drone footage is common, especially for projects where the surrounding context is already built and only the new structure needs to be visualized.",
  },
  {
    question: "Can Architectural Animation Be Used for Zoning Approvals or Community Presentations?",
    answer:
      "Yes. Clear visualization is particularly effective at planning commission meetings and community presentations, where stakeholders need to understand scale and impact without an architectural background.",
  },
  {
    question: "What Resolution and File Formats Will I Receive?",
    answer:
      "We typically deliver in 4K resolution, with standard video formats for presentations and higher-resolution stills available for print materials.",
  },
  {
    question: "How Many Rounds of Revisions Are Typically Included?",
    answer:
      "Most architectural animation projects include two to three revision rounds, though this can be adjusted based on project scope and complexity.",
  },
  {
    question: "Can Architectural Animation Start From Early Concept Sketches?",
    answer:
      "Yes. We can work from early concept sketches, though the level of detail in the final animation will reflect how developed the design is at that stage.",
  },
  {
    question: "Can an Architectural Animation Be Updated Later if the Design Changes?",
    answer:
      "Yes. Because we build from your source files, revisions to reflect design changes are typically faster and more affordable than starting over.",
  },
  {
    question: "How Long Does It Take to Render 3D Architectural Animation?",
    answer:
      "Rendering time depends on scene complexity and length, but most projects complete rendering within the final one to two weeks of the production timeline.",
  },
  {
    question: "How Much Does 3D Rendering Cost per Hour of Production Time?",
    answer:
      "Cost is typically scoped per project rather than per hour, based on scene complexity, animation length, and level of detail required, and confirmed after an initial discovery call.",
  },
  {
    question: "What Is the Difference Between Animation and Rendering?",
    answer:
      "Rendering produces a still, photorealistic image of a 3D scene, while animation adds movement, whether through a moving camera or dynamic elements, to create a video sequence.",
  },
  {
    question: "Do You Provide Both Interior and Exterior Views in the Same Project?",
    answer:
      "Yes. Most architectural animation projects combine exterior establishing shots with detailed interior walkthroughs, giving a complete picture of the building from arrival to interior finishes.",
  },
  {
    question: "Can Architectural Animation Include Landscaping and Site Context?",
    answer:
      "Yes. Surrounding landscaping, streetscape, and neighboring context can be included alongside the building itself, which helps viewers understand how the project fits into its actual setting.",
  },
  {
    question: "How Far in Advance Should We Commission an Architectural Animation for a Presentation Deadline?",
    answer:
      "We recommend starting four to six weeks before a hard presentation deadline, though shorter timelines can sometimes be accommodated depending on scene complexity and current production schedule.",
  },
  {
    question: "Can Architectural Animation Show Different Times of Day or Seasonal Lighting?",
    answer:
      "Yes. Lighting conditions can be adjusted to show a design at different times of day or across seasons, which is often useful for demonstrating how natural light moves through a space.",
  },
  {
    question: "Do You Provide Both High-Resolution Stills and Full Video From the Same Project?",
    answer:
      "Yes. Most projects produce both high-resolution still renderings for print and marketing use and full video animation from the same underlying 3D model, at no extra modeling cost.",
  },
  {
    question: "Can You Work Directly From Revit or SketchUp Files Instead of Requiring a Separate Model?",
    answer:
      "Yes. We can work directly from Revit, SketchUp, and most common architectural software files, which typically speeds up production compared to starting the modeling process from scratch.",
  },
  {
    question: "Is Furniture and Interior Styling Included, or Do We Need to Provide That Separately?",
    answer:
      "Furniture and interior styling can be included as part of the production, and we are happy to follow specific interior design direction if your project already has one.",
  },
  {
    question: "Can You Produce Animation for Interior Spaces Only, Without a Full Exterior Building?",
    answer:
      "Yes. Interior-only projects are common for renovation, retail, and hospitality work where the exterior is either existing or not the focus of the presentation.",
  },
];

export const metadata = {
  title: "Architecture Animation Service | Pixel Studios",
  description: "Pixel Studios' architecture animation service turns architectural drawings into photorealistic renderings, walkthroughs, and CGI presentations.",
};

export default function ArchitectureAnimationPage() {
  return (
    <main>
      <Banner
        title="Architecture Animation That Sells the Vision"
        description="Why do so many strong architectural designs fail to win approval or investment? Because a 2D drawing asks clients, boards, and committees to imagine a building rather than see it. Our architecture animation service turns your plans into photorealistic renderings and walkthroughs that make the design decision easy. Every project is built directly from your architectural drawings and CAD files, so what a client sees on screen matches what your team actually designed, down to the materials and lighting."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Architecture Animation"
        title="Why Animation Matters in the Architecture Industry?"
        description="What makes architectural presentations so difficult? Blueprints
                and elevation drawings are precise but nearly impossible for a
                non-architect to visualize in three dimensions. Clients approve
                budgets based on renderings they cannot fully picture, planning
                commissions review proposals without ever experiencing the scale
                of what is being built, and design changes late in a project
                mean updating static boards or physical models that are slow
                and costly to redo. For firms competing for high-value
                commissions, the ability to show a design clearly and
                persuasively can be the difference between winning a project and
                losing it to a competitor with better visuals, regardless of
                which firm actually produced the stronger design."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What changes when a design becomes something people can experience?
            Architectural animation lets clients, investors, and planning
            boards walk through a space, see how light moves through it, and
            understand scale in a way no drawing can convey. Firms using 3D
            architectural animation services report faster client approvals,
            stronger presentations at planning and zoning meetings, and a
            persuasive edge in competitive pitches where the firm with the
            clearest visualization often wins the commission, even when
            competing designs are technically comparable on paper."
      />
      <ServicesSection 
        title="Animation Solutions for Architecture"
        description="What does a complete architecture animation service include? From early concept visuals to full cinematic CGI, these four formats cover a project from first client meeting to final marketing push, all built from the same underlying model."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Architecture <span>Animation</span> Projects</>}
        description="Most firms we work with use architectural animation at two key moments, each with different goals and different audiences in the room."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Architecture <br />Animation Process</>}
        description="Design accuracy and visual persuasion both matter in this work, so our process keeps your architects involved from the first storyboard through final delivery."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="A rendering that looks good is not the same as one that wins a commission. Here is why architecture firms choose our studio for the work that actually needs to persuade."
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
