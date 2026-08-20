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
    title: "3D Product Animation",
    description: "Photorealistic vehicle animation showing exterior design, interior features, and finishes from every angle, built directly from CAD data for accuracy down to the panel gap.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Technical Animation",
    description: "Exploded-view and mechanical animations that reveal drivetrain, suspension, and safety systems for engineering documentation, technical marketing, and after-sales training.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Commercial Animation",
    description: "Launch-ready commercial animation built for TV, digital, and dealership use, combining cinematic visuals with confidential-safe production well before a physical unit exists.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "CGI",
    description: "High-end CGI production for hero campaigns, configurator visuals, and flagship launch content requiring the highest visual standard in the category.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your CAD files, confidentiality requirements, and project goals to define the right animation approach while establishing secure handling protocols from the start.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around your vehicle's key features and target audience, whether the animation is intended for consumers, engineers, investors, or internal teams.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene, camera movement, and product sequence is planned and approved before animation begins, ensuring the final video highlights the features and engineering details that matter most.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Our artists build accurate 3D vehicle models directly from your CAD data, preserving dimensional precision while creating visuals that match your brand and engineering standards.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production is completed under agreed confidentiality protocols, with structured feedback rounds to refine every scene while maintaining engineering accuracy and secure file handling.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "After final approval, we deliver optimized files in every format required for product launches, marketing, engineering presentations, dealership displays, and digital campaigns, ready the moment confidentiality restrictions are lifted.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An automotive animation studio experienced with CAD-based production and confidential vehicle design projects across OEMs and suppliers."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation is built from your actual vehicle data, never a generic template repurposed from another manufacturer."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around launch dates and confidentiality windows, so content is ready the moment it can go public."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery under strict confidentiality protocols."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Automotive Animation</span> Project
    </>
  );

const text =
    "If your vehicle's engineering deserves better than a spec sheet, talk to our team. We will scope the automotive animation your launch, technical documentation, or marketing campaign needs, built from your data and handled under full confidentiality, from first concept to final delivery.";

const faqs = [
  {
    question: "How Do You Protect Confidentiality for an Unreleased or Concept Vehicle Design?",
    answer:
      "We work under NDA on every confidential project, with restricted file access and secure handling of CAD data and design files throughout production, including limited internal access to source files.",
  },
  {
    question: "What's the Difference Between Vehicle Product Animation and Manufacturing Process Animation?",
    answer:
      "Vehicle product animation showcases the finished vehicle for marketing and sales, while manufacturing process animation visualizes production line sequences and assembly for training and internal communication rather than a customer-facing audience.",
  },
  {
    question: "What Are Crash and Safety Simulation Animations, and When Are They Used?",
    answer:
      "These animations visualize vehicle safety system behavior, often for technical marketing, investor presentations, or internal engineering communication, and are typically built from simulation or CAD data rather than filmed footage.",
  },
  {
    question: "What Are Exploded-View or Technical Animations Used For?",
    answer:
      "They break a vehicle or component down into its individual parts to show how systems fit together, commonly used for engineering documentation, technical sales, and after-sales training.",
  },
  {
    question: "Can Automotive Animation Be Built From CAD or Engineering Files, or Do You Need a Physical Vehicle?",
    answer:
      "We can build directly from CAD or engineering files, which means production can start well before a physical prototype exists.",
  },
  {
    question: "Can Automotive Animation Cover EV-Specific Technology Like Batteries and Charging?",
    answer:
      "Yes. EV battery animation and charging system visualization are increasingly common requests as manufacturers explain new technology to consumers unfamiliar with it.",
  },
  {
    question: "What's the Difference Between Real-Time Vehicle Visualization and a Pre-Rendered Animation?",
    answer:
      "Real-time visualization, such as a 3D car configurator, lets users interact with and customize the vehicle live. A pre-rendered animation is a fixed, finished video sequence with higher visual fidelity but no user interaction.",
  },
  {
    question: "Can You Build a 3D Car Configurator as Part of an Automotive Animation Project?",
    answer:
      "Yes. Interactive 3D car configurators are a common extension of a core vehicle animation asset library, letting customers explore colors, trims, and features in real time on a dealership site or showroom display.",
  },
  {
    question: "How Long Does an Automotive Animation Project Typically Take?",
    answer:
      "Most projects take four to eight weeks from discovery to delivery, depending on vehicle complexity and how many scenes or configurations are required.",
  },
  {
    question: "Can You Animate Multiple Trim Levels or Color Options From One Vehicle Model?",
    answer:
      "Yes. Once the core 3D model is built, additional trims, colors, and configurations can typically be produced faster and more affordably than the original animation.",
  },
  {
    question: "Do You Provide Both Marketing-Focused and Technically Accurate Engineering Animations?",
    answer:
      "Yes. We build both styles from the same underlying CAD data, adjusting the visual treatment and level of technical detail depending on whether the audience is a customer or an engineering team.",
  },
  {
    question: "Can Automotive Animation Be Used for Dealership and Point-of-Sale Displays?",
    answer:
      "Yes. Vehicle animations and configurator content are commonly adapted for dealership screens and point-of-sale displays, giving sales staff a consistent tool for walking customers through features.",
  },
  {
    question: "Can You Produce Automotive Animation for Aftermarket Parts and Accessories, Not Just Full Vehicles?",
    answer:
      "Yes. The same CAD-based production approach works for aftermarket parts, accessories, and component-level products, which is common for suppliers marketing to both consumers and OEM partners.",
  },
  {
    question: "What Happens if Our Vehicle Design Changes After Animation Production Has Started?",
    answer:
      "Because our models are built from your CAD data, design revisions can typically be reflected by updating the affected model rather than rebuilding the entire animation from scratch.",
  },
  {
    question: "Do You Provide Voiceover and Music Licensing for Automotive Commercial Animation?",
    answer:
      "Yes. Voiceover casting, licensed music, and sound design are all handled as part of production, so the final commercial arrives ready for broadcast or digital placement.",
  },
  {
    question: "Can Automotive Animation Support Global Launches With Multiple Language Versions?",
    answer:
      "Yes. Voiceover and on-screen text can be localized for multiple markets, which is common for global vehicle launches running simultaneously across several regions.",
  },
  {
    question: "How Detailed Does Our CAD Data Need to Be to Start a Project?",
    answer:
      "Production-level CAD detail produces the strongest result, but we can also work from earlier-stage design data and add detail as the vehicle design matures through development.",
  },
  {
    question: "Can You Deliver Both a Short Marketing Cut and a Longer Technical Version From One Project?",
    answer:
      "Yes. Once the vehicle model exists, shorter marketing cuts and longer technical walkthroughs can both be produced from the same underlying asset library, which is more efficient than treating them as separate projects.",
  },
  {
    question: "Do You Provide Both 2D Renderings and Full 3D Animation From the Same Vehicle Model?",
    answer:
      "Yes. Once a vehicle is modeled in 3D, we can produce still renderings for print and marketing alongside full video animation, without duplicating the modeling work.",
  },
  {
    question: "Can Automotive Animation Be Combined With Real Studio Photography for a Hybrid Campaign?",
    answer:
      "Yes. Combining CGI vehicle animation with real studio photography or location footage is a common approach for campaigns that need both photorealistic product shots and content the vehicle's confidentiality status would not otherwise allow.",
  },
];

export const metadata = {
  title: "Automotive Animation Services | Pixel Studios",
  description: "Pixel Studios' automotive animation services deliver 3D vehicle, technical, and commercial animation for launches, engineering, and marketing.",
};

export default function AutomotiveAnimationPage() {
  return (
    <main>
      <Banner
        title="Automotive Animation That Sells the Engineering"
        description="Why is it so hard to show a car the way engineers actually see it? Because the systems that make a vehicle impressive, from suspension geometry to battery architecture, are hidden under the body panel. Our automotive animation services make that engineering visible, accurately and persuasively, for marketing, technical, and internal audiences alike. Every project starts from your CAD and engineering data, so the finished animation stays true to the actual vehicle, whether it is still confidential or already on the showroom floor."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Automotive Animation"
        title="Why Animation Matters in the Automotive Industry?"
        description="What makes automotive marketing and communication uniquely
                difficult? Vehicle designs are often confidential until launch,
                making live-action production impossible before a prototype
                exists. Critical systems like drivetrains, EV batteries, and
                safety components remain hidden inside the vehicle, while
                engineering, manufacturing, and marketing teams all need clear
                visuals for different audiences. Physical prototypes are costly,
                production schedules are tight, and protecting confidential
                designs adds another layer of complexity throughout development."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What does automotive animation solve that photography cannot? 3D
            automotive animation can be created directly from CAD and
            engineering files before a physical prototype exists while keeping
            projects fully confidential. Exploded-view animations reveal
            internal systems no camera can capture, and the same assets support
            product launches, engineering documentation, investor presentations,
            and technical training. The result is faster collaboration, stronger
            marketing, and production-ready content available the moment a
            vehicle is revealed."
      />
      <ServicesSection 
        title="Animation Solutions for Automotive"
        description="What does automotive animation actually need to cover, from concept to showroom? These four formats span confidential CAD-based visualization through launch-ready commercial content, built from the same source data throughout."
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
        title={<>Our Automotive <br />Animation Process</>}
        description="Confidentiality and engineering accuracy both matter in this category, so our process is built around your CAD data and your NDA requirements from day one."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="Vehicles are engineered down to the millimeter. The animation explaining them should be too. Here is how we protect both the accuracy and the confidentiality of your project."
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
