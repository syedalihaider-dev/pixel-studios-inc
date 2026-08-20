import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import WonderingSection from "@/components/Common/WonderingSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialsSlider from "@/components/WhiteboardAnimation/TestimonialsSlider";
import TechnologySection from "@/components/WhiteboardAnimation/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const standoutFeatures = [
  {
    id: 1,
    title: 'Clear Visual Storytelling',
    description: "Amateur whiteboard animation looks like it was produced in a web browser. Professional whiteboard animation tells a visual story — where the sequence of drawings, the pacing of the voiceover, and the logical structure of the script work together as a unified communication system. That integration is the difference between content that informs and content that converts.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Higher Viewer Retention',
    description: "Professionally produced whiteboard animation holds more viewers for longer because every element of the production is optimized for sustained attention — script pacing, visual complexity calibration, voiceover energy, and transition rhythm. Viewer retention is not a metric that improves by accident.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Cost-Effective Video Production',
    description: "Whiteboard animation delivers a higher value-per-dollar than most other animated formats because it does not require complex character rigs, environment design, or 3D rendering. The production investment goes into the two things that actually drive results: a well-built script and professional illustration. That is where we focus.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Stronger Brand Communication',
    description: "A whiteboard animation video with a consistent visual identity — custom illustrations, brand color accents, a voiceover that matches your brand tone — does not just communicate information. It communicates professionalism. Every video we produce is a brand asset, not just a content deliverable.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Better Learning Outcomes',
    description: "Training programs that use whiteboard animation consistently report higher assessment scores, higher completion rates, and lower re-training frequency than programs built on traditional presentation formats. We build our educational whiteboard animations around the learning science, not around what is easiest to produce.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Create Engaging Customer Experiences',
    description: "Real estate visualization and consumer product showcases give buyers a richer product experience than static pages allow, directly feeding purchase confidence.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "Product walkthroughs, onboarding sequences, and feature education for software platforms where users need to understand your product quickly — before they decide it is too complicated and leave.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education, clinical training, and compliance content are produced to the accuracy and regulatory standards healthcare audiences require. We understand the difference between simplifying complex information and misrepresenting it. ",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Curriculum content, course modules, and institutional explainers are built around genuine learning outcomes. From K-12 to university-level and professional certification, we produce whiteboard animations that learners actually finish.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: "Complex financial products, regulatory disclosures, and investment concepts are explained in a format that builds understanding without sacrificing accuracy. Clear enough for a general audience, precise enough for a compliance review.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: "Property walkthroughs, investment explainers, mortgage process videos, and market education content for agencies, developers, and proptech platforms communicating with buyers who are making the largest purchase of their lives.",
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce",
    image: "/industry/06.png",
    text: "Product education, unboxing explainers, and post-purchase onboarding content that reduces returns, increases repeat purchases, and gives buyers the confidence to complete checkout on products that require some explanation.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups & Enterprises",
    image: "/industry/06.png",
    text: "Whether you are explaining a new category to early adopters or rolling out a process change across a global organization, whiteboard animation scales from a single launch video to a full content program. ",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Whiteboard Explainer Videos",
    description: "A whiteboard explainer video is the most efficient format for communicating a concept that your audience currently does not understand. We use this to your advantage. Every whiteboard explainer we produce is built on a script engineered for that specific audience, with a voiceover that matches their pace and a visual flow that mirrors how they actually process new information.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 2,
    title: "Educational Whiteboard Animation",
    description: "Training content that people click through to finish is not training. It is a compliance checkbox. Educational whiteboard animation works differently because learners follow the logic being drawn rather than watching a presenter read slides. We produce educational whiteboard animation for K-12 curriculum, university courses, corporate L&D programs, and professional certification content.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 3,
    title: "Corporate Whiteboard Videos",
    description: "Internal communication that goes unread and onboarding content that gets skipped costs organizations real money. Corporate whiteboard videos work for announcements, process documentation, policy explainers, change management communications, and executive messaging because the format commands attention without demanding a large production budget.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 4,
    title: "Marketing & Promotional Whiteboard Videos",
    description: "The attention economics of digital marketing have shifted. A well-built whiteboard animation video for marketing earns those five seconds because the visual construction draws the eye before the audience has decided whether to care. We produce whiteboard animation for product launches, lead generation campaigns, social media, and sales.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 5,
    title: "Product Explainer Videos",
    description: "Your product makes sense to you. It does not automatically make sense to someone encountering it for the first time. Product explainer videos translate features into outcomes, technical specifications into real-world benefits, and complex workflows into obvious logic. Our product explainer whiteboard animations are written for the buyer, not the builder.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 6,
    title: "Training & E-Learning Videos",
    description: "E-learning content has a retention problem. Slide decks narrated over screen recordings are not learning experiences — they are content endurance tests. Whiteboard animation is structurally better suited to learning because it sequences information the way the brain encodes it: one concept, then the next, visually connected. Our training and e-learning whiteboard videos are SCORM-compatible, LMS-ready, and aligned with the program's actual learning objectives.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 7,
    title: "Healthcare Whiteboard Animation",
    description: "Healthcare communication requires accuracy before anything else. Patient education, clinical training, public health awareness, and provider-facing content all carry compliance and standards that general-purpose animation studios do not understand. Our healthcare whiteboard animation team has produced content that meets the evidentiary and regulatory standards these audiences require, with terminology reviewed against clinical accuracy and visuals built to reinforce.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 8,
    title: "SaaS Whiteboard Animation",
    description: "SaaS onboarding is where user retention is won or lost. A new user who does not understand your product in the first session rarely returns. SaaS whiteboard animation for onboarding, feature education, and customer success content gives your users the conceptual scaffolding they need to get value from your product quickly. We have produced whiteboard animations for software platforms across project management, HR tech, fintech, cybersecurity, and marketing automation.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 9,
    title: "AI Animation Services",
    description: "AI-assisted 3D animation that reduces timelines without reducing quality. Used strategically to accelerate asset iteration and style exploration for high-volume or compressed-schedule productions.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 10,
    title: "Architectural Rendering",
    description: "Photorealistic architectural rendering, real estate visualization, and property walkthroughs for developers and architects presenting projects before completion.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 11,
    title: "Cartoon Animation",
    description: "Stylized 3D cartoon animation for brand storytelling, children's content, and educational series. Expressive, accessible, and distinct from the default digital-clean aesthetic.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
  },
  {
    id: 12,
    title: "Photorealistic Rendering",
    description: "Hyperrealistic rendering that makes digital assets indistinguishable from photography. Used in product marketing, architectural visualization, and any context where visual realism determines audience trust.",
    videoSrc: "https://www.youtube.com/embed/EmsrnGZTaIs?autoplay=1&mute=1&loop=1&playlist=EmsrnGZTaIs&controls=0&rel=0"
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
    title: '1 Simplify Complex Ideas',
    content: 'There is a ceiling to what written text can explain before a reader disengages. Whiteboard animation removes that ceiling by letting the visual do the work that words cannot. Abstract processes, multi-step systems, and conceptually unfamiliar ideas become navigable when they are drawn in sequence. If your audience keeps misunderstanding your product, your process, or your value proposition, whiteboard animation is almost always the most effective correction.'
  },
  {
    id: 2,
    title: '2 Improve Information Retention',
    content: 'Studies consistently show that people retain significantly more information from visual learning experiences than from text-only alternatives. The whiteboard format amplifies this because it adds a temporal dimension — information arrives progressively rather than all at once, which gives the brain time to encode each concept before the next one builds on it.'
  },
  {
    id: 3,
    title: '3 Increase Audience Engagement',
    content: 'Completion rates for whiteboard animation videos consistently outperform other animated formats across training, marketing, and explainer use cases. The format holds attention by design: the audience is not watching something pre-built — they are watching it being built, which creates a sustained pull that passive video formats do not produce.'
  },
  {
    id: 4,
    title: '4 Enhance Customer Education',
    content: 'The difference between a customer who churns and one who stays is often a matter of whether they understood what they bought. Customer education content built on whiteboard animation reduces support volume, improves activation rates, and creates a product experience that does not require a phone call to navigate.'
  },
  {
    id: 5,
    title: '5 Improve Marketing Results',
    content: 'Whiteboard animation video in marketing contexts outperforms static and live-action alternatives on the metrics that matter: click-through rate, time on page, lead form completion, and sales cycle velocity. The format performs because it is built around a visual hook that earns attention before the viewer decides whether to engage.'
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery & Strategy',
    content: 'Before a single frame is storyboarded, we run a genuine discovery session. We learn about your audience — not as a demographic profile, but as a group of specific people with specific knowledge gaps, specific objections, and a specific decision or behavior you need them to take after watching the video. That understanding drives every creative decision that follows.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Writing',
    content: 'The script is the foundation of any whiteboard animation video that actually works. We write scripts that are structured for clarity, paced for the format, and built around a clear narrative arc that leaves your viewer knowing exactly what to do next. Scripts go through collaborative review before anything is drawn — because changing the script costs hours, and changing the animation costs days.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: "The storyboard is where the script becomes a visual plan. Every scene is sketched and sequenced to confirm that the visual logic supports the verbal logic, that transitions are intuitive, and that the pacing will hold the viewer's attention across the full runtime.You review and approve the storyboard before production begins.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Illustration Development',
    content: 'Our illustrators create every visual element custom for your project. Characters, icons, environments, diagrams, and data visualizations are drawn to match your brand and to serve the specific explanatory purpose of each scene. We do not pull from stock libraries — the illustrations are built for this script, this audience, and this message.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'With illustrations complete and approved, the animation team brings the sequence to life. Timing, draw-on pacing, element reveals, and motion are calibrated against the voiceover track to ensure the visual and audio experience is synchronized and intentional. This phase runs in parallel with voiceover recording, where project timelines allow.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Voiceover & Sound Design',
    content: 'Professional voiceover direction is included in every Pixel Studios whiteboard animation project. We work with a vetted roster of voice talent and select based on your audience profile, your brand tone, and the energy the script calls for. Sound design — including background music and audio mixing — is completed in-house and delivered with the final video.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Review & Revisions',
    content: 'The first full draft is delivered for your structured revision round. Your project manager documents every note, confirms interpretation before changes are made, and returns a revised version that addresses every point. We do not guess at what feedback means. We ask, confirm, and act.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final delivery includes your whiteboard animation video in every format and resolution required for every platform where it will live. Source files are included in most project scopes. Your project is not complete until you are ready to deploy it.',
  },
];

const wonderingIndustriesData = [
  {
    name: "Explainer Videos",
    intro: "Designed to close the gap between what your audience currently understands and what they need to understand to act. Ideal for new products, unfamiliar concepts, and any message where confusion is costing you conversions.",
    points: [
      "Simplifying complex SaaS workflows and API ecosystems into easy-to-digest visual stories.",
      "Explaining novel technology platforms to non-technical stakeholders and potential buyers.",
      "Reducing customer bounce rates by answering core value propositions within the first 30 seconds.",
      "Converting abstract business models into clear step-by-step visual journeys."
    ]
  },
  {
    name: "Educational Videos",
    intro: "Structured around genuine learning outcomes rather than content volume. We build educational whiteboard videos that sequence information the way the brain encodes it, each one building on the last.",
    points: [
      "Transforming dense academic and technical curriculum into engaging progressive modules.",
      "Improving student and learner retention rates through synchronized visual drawing and audio.",
      "Developing SCORM-compliant e-learning assets for university and K-12 educational platforms."
    ]
  },
  {
    name: "Training Videos",
    intro: "Compliance training, process documentation, systems onboarding, and skills development content built for completion and retention. We produce training whiteboard videos that employees actually watch and remember after the session ends.",
    points: [
      "Standardizing employee onboarding workflows across multi-location enterprise organizations.",
      "Increasing workplace safety compliance rates with step-by-step procedural animations.",
      "Replacing static presentation decks with high-retention interactive training videos."
    ]
  },
  {
    name: "Product Demonstrations",
    intro: "Feature walkthroughs, use-case illustrations, and capability showcases that show your product in action rather than describe it in abstract terms. Built for buyers who need to see it to believe it before they will purchase.",
    points: [
      "Highlighting core software features, integrations, and user dashboard capabilities.",
      "Visualizing hardware mechanics and internal component operations with precision.",
      "Equipping sales teams with powerful visual demos that overcome technical buyer objections."
    ]
  },
  {
    name: "Sales & Marketing Videos",
    intro: "Funnel-aware whiteboard animation built to move the viewer from awareness to intent. Hook structure, persuasive narrative, and a clear call to action — edited for the platform and the specific stage of the buyer journey.",
    points: [
      "Boosting paid ad click-through rates across LinkedIn, YouTube, and Meta ad campaigns.",
      "Increasing landing page conversion rates by capturing immediate visitor interest.",
      "Structuring high-impact video pitches for sales proposals and investor presentations."
    ]
  },
  {
    name: "Internal Communication Videos",
    intro: "Policy announcements, organizational updates, change management communications, and leadership messaging are produced to the same standard as your external content. Because your employees deserve communication that respects their attention, too.",
    points: [
      "Communicating major corporate change initiatives and strategic shifts with clarity.",
      "Delivering executive updates and company-wide policy updates that drive alignment.",
      "Fostering company culture and values through engaging visual storytelling."
    ]
  }
];

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Experienced Whiteboard Animators",
    text: "Every whiteboard animation at Pixel Studios is produced by a team that has spent years specifically in the whiteboard format — not generalist animators who rotate between styles depending on the brief. Whiteboard animation has its own visual grammar, its own pacing logic, and its own approach to information sequencing. That expertise is not interchangeable with 2D character animation or motion graphics experience."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Professional Scriptwriters",
    text: "The script is where most whiteboard animation projects succeed or fail. Ours are written by specialists who understand both the persuasive structure required for marketing content and the learning design principles required for training and education content. We do not outsource scripts to junior copywriters and hand them to the animation team. The writer is part of the production team from brief to delivery."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Custom Illustrations",
    text: "Every visual element in a Pixel Studios whiteboard animation is drawn for your project. We do not use template packs or stock icon libraries. Custom illustration means your video has a visual identity that is specific to your brand and your message — and it means the illustrations actually explain what they are supposed to explain, rather than approximating it."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "High-Quality Voiceovers",
    text: "Professional voiceover is included in every project. We select talent based on your audience, your brand tone, and the energy the script requires — not whoever is available or cheapest on the roster."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Fast Turnaround Times",
    text: "Standard whiteboard animation projects run three to five weeks from brief sign-off to final delivery. Expedited timelines are available for qualifying projects. We do not extend timelines without cause and do not pad schedules to manage client expectations down."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Dedicated Project Management",
    text: "Every Pixel Studios project has a dedicated project manager who owns the timeline, owns the communication, and owns the outcome. You will not be passed between departments or left waiting for status updates. One point of contact, start to finish."
  }
];

const faqs = [
  {
    question: "What are whiteboard animation services?",
    answer: "Whiteboard animation services cover the full production of videos in which content is drawn on screen as a voiceover narrates. The format is used for explainer videos, training programs, marketing content, and customer education. A complete whiteboard animation service includes scriptwriting, storyboarding, illustration, animation, voiceover recording, sound design, and final delivery.",
  },
  {
    question: "How much does a whiteboard animation video cost?",
    answer: "Whiteboard animation video pricing varies based on video length, illustration complexity, number of revision rounds, and whether voiceover talent and music licensing are included. Most professional whiteboard animation projects fall between $2,000 and $8,000 for a 60-90 second video. We provide custom quotes based on your specific scope — contact us to discuss your project.",
  },
  {
    question: "How long does a whiteboard animation project take?",
    answer: "A standard 60-90 second whiteboard animation video runs three to five weeks from brief sign-off to final delivery. Discovery and scripting: 5-7 days. Storyboard and illustration: 5-7 days. Animation and voiceover: 7-10 days. Review and final delivery: 3-5 days. Expedited timelines are available for qualifying projects.",
  },
  {
    question: "Do you provide script writing?",
    answer: "Yes. Professional scriptwriting is included in every Pixel Studios whiteboard animation project. We do not produce animation from client-provided scripts unless the client specifically requests it and the script has been reviewed and approved by our team. The script is too important to the outcome to be treated as a pre-production formality.",
  },
  {
    question: "Do you provide professional voiceovers?",
    answer: "Yes. Voiceover is included in our standard whiteboard animation service. We work with professional voice talent across a range of styles, accents, and delivery registers. You will have the opportunity to review talent options before recording begins.",
  },
  {
    question: "What industries benefit from whiteboard animation?",
    answer: "Whiteboard animation performs across industries where complex information needs to be communicated clearly. Healthcare, SaaS and technology, financial servicWhiteboard animation performs across industries where complex information needs to be communicated clearly. Healthcare, SaaS and technology, financial services, education, legal, real estate, e-commerce, and non-profit organizations all use whiteboard animation regularly for training, marketing, and customer education purposes.es, education, legal, real estate, e-commerce, and non-profit organizations all use whiteboard animation regularly for training, marketing, and customer education purposes.",
  },
  {
    question: "Can whiteboard videos improve learning retention?",
    answer: "Yes. The whiteboard format is one of the most retention-efficient video formats available because it sequences information progressively and creates an active cognitive engagement loop. Learners follow the construction of an idea rather than watching a completed visual, which produces measurably higher retention.",
  },
  {
    question: "Can you animate existing content?",
    answer: "Yes. We regularly work with clients who have existing scripts, slide decks, or e-learning modules that need to be rebuilt as whiteboard animation videos. We review the existing content, identify what should be preserved, what should be restructured, and what should be cut, and produce the animation accordingly.",
  },
  {
    question: "What file formats do you deliver?",
    answer: "Final whiteboard animation videos are delivered in MP4 (H.264) as standard, with additional formats available on request — including MOV, WebM, and platform-specific exports for YouTube, LinkedIn, LMS platforms, and internal portals. Resolution options include 1080p and 4K. Source files are included in most project scopes.",
  },
  {
    question: "How many revisions are included?",
    answer: "Our standard whiteboard animation projects include structured revision rounds at the script stage, the storyboard stage, and the final animation stage. The number of revision rounds is confirmed in your project scope. We do not cap the number of notes per round — a revision round means all of your feedback for that stage, addressed together.",
  },
  {
    question: "Do you create custom illustrations?",
    answer: "Yes. Every illustration in a Pixel Studios whiteboard animation is created custom for your project. We do not use pre-built illustration libraries or template packs.",
  },
  {
    question: "Who owns the final video?",
    answer: "You do. Upon final delivery and payment, full ownership of the final rendered video transfers to you. Source file ownership terms are detailed in your project agreement.",
  },
];

export const metadata = {
  title: "Whiteboard Animation Services | Pixel Studios Inc.",
  description: "Professional whiteboard animation services for explainer videos, training, and marketing. Pixel Studios Inc. delivers clear, compelling whiteboard animation videos built to educate and convert.",
};

export default function WhiteboardAnimation() {
  return (
    <main>
      <Banner
        title="Whiteboard Animation Services for Branding, Training, & Marketing"
        description="Most animated videos are forgotten within 48 hours. Whiteboard animation videos are not, because the format does something other styles cannot: it removes every visual distraction and makes the viewer watch the idea being built in real time. That sustained attention is not an accident. It is the format working exactly as intended.  At Pixel Studios Inc., our professional whiteboard animation services are built around one objective: keeping your audience watching long enough to understand, believe, and act."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company For Whiteboard Animation Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Professional Whiteboard Animation Services"
        description="Looking for Professional and Premium Whiteboard Animation Services? From product explainers and corporate training to healthcare education and SaaS onboarding, our professional whiteboard animation services are built for every use case where coherence, retention, and audience action are the goal. Here is what we bring to the table:"
        sliderItems={sliderItems}
      />
      <HowWeWorkSection
        heading="Why Do Businesses Use Whiteboard Animation?"
        description="Whiteboard animation consistently outperforms other video formats on the metrics that matter most — completion rate, information retention, and audience action."
        accordionData={howWeWorkAccordionData}
      />
      <PortfolioShowcase />
      <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>Benefits of Professional <span>Whiteboard Animation</span></>}
        description="The gap between a whiteboard animation video that gets watched and one that gets results comes down to production quality. These are the advantages that professional production delivers over template-based or in-house alternatives."
        features={standoutFeatures}

      />
      <WonderingSection
        title="Types of Whiteboard Animation Videos"
        description="Whiteboard animation is not a single format — it is a production approach that adapts to the communication objective. These are the most common video types we produce and the specific purpose each one serves."
        data={wonderingIndustriesData}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Whiteboard Animation <br />Production Process</>}
        description="Every whiteboard animation video we produce follows the same disciplined production process. There are no shortcuts, no freelance handoffs, and no phases where your project loses its strategic thread."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="Why Choose Our"
        title="Whiteboard Animation Company?"
        description="Choosing the right whiteboard animation company determines whether your video gets watched, understood, and acted on — or archived. Here is what makes Pixel Studios the whiteboard animation studio brands and organizations return to."
        cards={cooperationModelsCards}
      />
      <TestimonialsSlider />
      <TechnologySection />
      <TestimonialSection />
      <IndustrySection
        heading="Whiteboard Animation Solutions for Every Industry"
        description="The same whiteboard animation video that works for a healthcare compliance program will not work for a SaaS product demo. We have built genuine expertise across the categories below, which means we understand those differences from the first briefing call."
        industries={industries}
        variant="gradient"
      />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
