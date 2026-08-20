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
    title: "Industrial Animation",
    description:
      "Full process animation showing how a production line, facility, or system operates from raw material to finished product, built for sales, training, and internal documentation across every department.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Technical Animation",
    description:
      "Exploded-view and mechanical animation revealing how machinery and equipment function internally, used for technical sales and engineering communication with prospects and partners.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Training Videos",
    description:
      "Manufacturing safety training animation and procedural content that standardizes instruction across shifts, facilities, and new hires, regardless of location.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Product Animation",
    description:
      "Photorealistic product manufacturing animation showing equipment and machinery from every angle, built directly from CAD data for precision down to the smallest component.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your process documentation, CAD files, and confidentiality requirements to scope the right approach for your goals.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around your actual process and reviewed for technical accuracy before design begins.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, so the sequence matches your real process exactly.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "3D models are built directly from your CAD data or process documentation for mechanical accuracy at every stage.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds under agreed confidentiality protocols and secure handling.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your sales, training, and marketing teams need to use it.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A manufacturing animation company experienced with CAD-based production and confidential industrial projects across multiple sectors."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation is built from your actual process and equipment data, never a generic template applied regardless of client."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around trade show dates, sales cycles, and training rollout schedules that your business actually runs on."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery under strict confidentiality throughout."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Manufacturing Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your process, your equipment, and your confidentiality requirements, and we will build the manufacturing animation that finally shows your production capability the way your internal team already sees it, ready for sales, training, and marketing alike, from first storyboard to final export.";

const faqs = [
  {
    question: "What Types of Manufacturing Processes Can You Animate?",
    answer:
      "We can animate nearly any production process, from assembly lines and injection molding to chemical processing and packaging, as long as we have access to process documentation or CAD data to work from.",
  },
  {
    question:
      "What's the Difference Between Product Manufacturing Animation and Process Animation?",
    answer:
      "Product manufacturing animation typically showcases a finished piece of equipment or product for sales and marketing, while process animation focuses on the sequence of steps involved in producing something, often for training or technical documentation.",
  },
  {
    question:
      "How Much Do Manufacturing Animation Services Typically Cost?",
    answer:
      "Cost depends on process complexity, animation length, and the level of mechanical detail required. Most projects are scoped after reviewing your process documentation and goals.",
  },
  {
    question: "What CAD Files or Engineering Data Do I Need to Provide?",
    answer:
      "Standard CAD formats from most major software packages work well, along with any process documentation, technical drawings, or reference photos that help us understand how your equipment or process actually functions.",
  },
  {
    question:
      "How Is Confidential or Proprietary Manufacturing Information Protected?",
    answer:
      "We work under NDA on any confidential project, with restricted file access and secure handling of CAD data and process documentation throughout production.",
  },
  {
    question:
      "What Measurable Results Can Manufacturing Animation Deliver for a Business?",
    answer:
      "Common outcomes include shorter sales cycles for complex equipment, fewer repetitive training questions, and stronger trade show engagement when prospects can finally see how a process or machine actually works.",
  },
  {
    question:
      "What's the Difference Between Manufacturing Animation and a Digital Twin or Plant Walkthrough?",
    answer:
      "Manufacturing animation is a produced, directed video asset built for a specific communication goal, while a digital twin is typically an interactive, ongoing simulation tool used for operational monitoring rather than marketing or training content.",
  },
  {
    question:
      "What Should I Look for When Choosing a Manufacturing Animation Company?",
    answer:
      "Look for experience working from CAD or engineering data, a portfolio showing technical accuracy alongside visual polish, and a studio comfortable handling confidentiality requirements around proprietary processes.",
  },
  {
    question:
      "What Is Manufacturing Animation Turnaround Time for a Typical Project?",
    answer:
      "Most manufacturing animation projects take four to eight weeks from discovery to final delivery, depending on process complexity and the number of revision rounds involved.",
  },
  {
    question:
      "Can You Produce Mechanical Animation Showing Internal Component Interactions?",
    answer:
      "Yes. Mechanical animation services are one of our most common manufacturing requests, showing how internal components interact within a piece of equipment or assembly.",
  },
  {
    question:
      "Do You Provide Both Marketing-Focused and Technical Training Versions of the Same Content?",
    answer:
      "Yes. We often build a shorter marketing version alongside a longer, more detailed technical training version from the same underlying 3D model and process data.",
  },
  {
    question:
      "Can Manufacturing Animation Be Used for Trade Show and Conference Presentations?",
    answer:
      "Yes. Trade show and conference-ready content is a common deliverable, often produced alongside a longer-form version for website or sales use.",
  },
  {
    question:
      "Do You Provide Voiceover and Sound Design as Part of Production?",
    answer:
      "Yes. Voiceover and sound design are included as part of standard production, so you receive a fully finished, publish-ready video rather than a silent visual.",
  },
  {
    question:
      "Can You Animate Equipment That Is Still in Development or Not Yet Built?",
    answer:
      "Yes. As long as CAD data exists, we can build animation for equipment that has not been physically manufactured yet, which is common for pre-launch marketing.",
  },
  {
    question:
      "How Do You Handle Revisions if Our Equipment Design Changes Mid-Project?",
    answer:
      "Because our models are built from your CAD data, design revisions can typically be reflected by updating the affected model rather than starting the animation over.",
  },
  {
    question:
      "Can You Support Multilingual Safety Training for International Facilities?",
    answer:
      "Yes. Voiceover and on-screen text can be localized for multiple languages, which is common for manufacturers with facilities in more than one country and workforce.",
  },
  {
    question:
      "Do You Provide Package Pricing for Manufacturers Producing Multiple Training Modules?",
    answer:
      "Yes. Volume pricing is available for manufacturers commissioning a series of related training or process videos, typically offering better per-video value than one-off projects.",
  },
  {
    question:
      "Can Manufacturing Animation Include Real Facility Footage Alongside Animated Sequences?",
    answer:
      "Yes. Combining real facility footage with animated internal mechanism sequences is a common hybrid approach when parts of a process are filmable and others are not.",
  },
  {
    question:
      "Do You Offer a Discovery Call Before We Commit to a Full Project Scope?",
    answer:
      "Yes. Every engagement starts with a discovery call to review your process, goals, and confidentiality needs before we propose a scope or timeline that fits your production schedule.",
  },
];

export const metadata = {
  title: "Manufacturing Animation Services | Pixel Studios",
  description: "Pixel Studios' manufacturing animation services turn production processes, machinery, and safety training into clear, accurate video content.",
};

export default function ManufacturingAnimationPage() {
  return (
    <main>
      <Banner
        title="Manufacturing Animation That Shows the Process"
        description="Manufacturing floors are hard to film and even harder to explain in a sales deck. Our manufacturing animation services turn production processes, machinery, and safety procedures into clear video, built directly from your engineering data for accuracy on every frame. Every project starts with your CAD files or process documentation, so what appears on screen matches what actually happens on your production line, not a generic stand-in. From assembly lines to safety training, the same production process supports every part of your communication needs."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Manufacturing Animation"
        title="Why Animation Matters in the Manufacturing Industry?"
        description="Manufacturing floors are loud, proprietary, and often too
                dangerous or confidential to film in full, which makes
                traditional video production difficult even when a company wants
                to showcase its capabilities. Internal mechanisms inside
                machinery are hidden from view, safety training needs to be
                standardized across shifts and facilities without losing
                consistency, and marketing teams need polished content to sell
                equipment or capabilities that a camera crew could never fully
                capture on a working floor. Proprietary processes also raise
                real confidentiality concerns, and static manuals struggle to
                communicate a multi-step process the way watching it unfold
                actually does, leaving new employees and prospective clients
                alike to piece together understanding from incomplete
                information."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Manufacturing animation solves the visibility problem directly,
            since it can be built from CAD data and process documentation rather
            than a physical shoot. Industrial animation shows internal
            mechanisms, assembly sequences, and process flows that no camera
            angle could ever capture, and it can be produced under full
            confidentiality before a machine is even built. Manufacturers using
            manufacturing animation report faster sales cycles for complex
            equipment, more consistent safety training outcomes across
            facilities, and marketing content that finally does justice to
            processes their internal teams already know are impressive, without
            waiting for a facility to be photo-ready."
      />
      <ServicesSection 
        title="Animation Solutions for Manufacturing"
        description="What does a manufacturing animation company need to cover across a plant's communication needs?"
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
        title={<>Our Manufacturing <br />Animation Process</>}
        description="Confidentiality and mechanical accuracy both matter here, so our process
                is built around your CAD data and your NDA requirements from the first
                call."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="A process that runs smoothly on the floor deserves to look just as clear on screen. Here is how our studio makes that translation."
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
