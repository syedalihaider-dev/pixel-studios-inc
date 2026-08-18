import LocationPageTemplate from "@/components/Common/LocationPageTemplate";
import parseLinks from "@/utils/parseLinks";

const images = [
  "/game-development/game-concept.png",
  "/game-development/game-01.png",
  "/game-development/game-02.png",
];

const services = [
  [
    "2D Animation",
    "2D animation gives Houston industrial and technology teams a fast way to explain a process or product without a long production cycle. We build character-led explainers, whiteboard-style breakdowns and clean vector storytelling for training, onboarding and technical communication. See our full [2D animation services](/2d-animation-services) for examples and turnaround.",
  ],
  [
    "3D Animation",
    "3D animation shows equipment, machinery and industrial processes functioning exactly as they're built to, which matters when a Houston buyer or field team needs to understand behavior a photo or spec sheet can't capture. We build technical visualization, process animation and realistic demonstration videos for energy and manufacturing clients. Visit our [3D animation services](/3d-animation-services) page for past technical work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics turn Houston's dense operational data, safety metrics, and corporate messaging into content a field team, board, or investor actually retains. We build modular libraries your team can reuse across safety campaigns, investor materials and internal communication. Explore our [motion graphics services](/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video for a Houston energy or technology buyer has to answer one question clearly: how does this actually work? We script around the technical detail that matters most first, then animate to make it unmistakable. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation breaks a complex safety procedure, industrial process, or technical concept into a sequence a field crew or new employee can follow without a live walkthrough. It's a format Houston industrial and healthcare teams lean on for training content that has to be repeatable and accurate. See our [whiteboard animation services](/whiteboard-animation-services) for use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a Houston company's brand a moving identity across trade materials, investor decks and internal presentations, reinforcing recognition every time it plays. Check out our [logo animation services](/logo-animation-services) for style options.",
  ],
].map(([title, text], index) => ({
  id: title.toLowerCase().replaceAll(" ", "-"),
  title,
  image: images[index % 3],
  contentTitle: title.toUpperCase(),
  contentParagraph: parseLinks(text),
}));

const industries = [
  [
    "Energy, Oil & Gas",
    "Houston's energy operators and oil and gas suppliers use animation to explain equipment function, extraction processes, and field safety procedures to audiences ranging from new field hires to out-of-state investors. We build technical process animation and 3D equipment visualization that makes a complex operational system understandable without requiring a site visit.",
    [
      "Equipment and process animation",
      "Field safety training videos",
      "Technical investor and stakeholder presentations",
    ],
  ],
  [
    "Industrial Safety & Manufacturing",
    "Houston's manufacturers and industrial suppliers use animation to prove how equipment works to a buyer evaluating multiple vendors and to train staff on procedures too complex for a written manual. We build safety training modules and 3D product visualization that gives a procurement team or a plant supervisor confidence before a purchase order or a shift starts.",
    [
      "Industrial safety training animation",
      "3D equipment visualization",
      "Technical demonstration videos",
    ],
  ],
  [
    "Healthcare & Medical Systems",
    "Houston's hospital systems and healthcare networks use animation for patient education, procedural walkthroughs, and safety training that has to stay medically accurate while remaining easy to distribute across multiple facilities. We build training content and patient-facing explainers that meet health-literacy standards without cutting clinical precision.",
    [
      "Patient education videos",
      "Clinical and safety training animation",
      "Procedure and device explainers",
    ],
  ],
  [
    "Technology & Enterprise",
    "Houston's growing technology sector, much of it built around energy-adjacent software and enterprise tools, uses animation to explain technical products to buyers who expect the same rigor they'd get from an engineering team. We build onboarding walkthroughs and feature explainers that respect a technical buyer's intelligence.",
    [
      "SaaS and platform explainers",
      "Technical onboarding videos",
      "Feature and product launch animation",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Prove the Process Before Anyone Touches Equipment",
    [
      "Field Safety Procedure Animation|A new safety procedure explained only in a written manual gets skimmed, not learned. We build field safety animation that walks a crew through a procedure step by step before they ever touch the equipment, reviewed for technical accuracy with your safety team before a single frame gets locked.",
      "Equipment Function Explainers|A piece of industrial equipment is hard to sell or approve from a spec sheet alone. We animate exactly how it functions, from every angle, giving a procurement team or an inspector confidence before a purchase order or a permit gets signed.",
      "Process & Extraction Animation|A multi-step extraction or operational process too complex for a diagram needs a sequence a non-specialist can actually follow. We break down industrial processes so a regulator, investor, or new hire understands exactly how each stage connects.",
    ],
  ],
  [
    "Communicate Risk and Compliance Clearly",
    [
      "Safety Compliance Training Videos|Repeating a compliance briefing site by site doesn't scale across a Houston operator with multiple facilities. We build training videos that cover a safety or regulatory update once, delivered identically to every site.",
      "Incident Prevention Animation|Explaining why a procedure exists, not just what it is, improves compliance more than a rule read off a page. We build animation that shows the consequence of a shortcut clearly enough that a crew remembers it.",
      "Regulatory & Inspection Content|A regulator or inspector evaluating a facility responds better to a clear technical walkthrough than a stack of paperwork. We build animation that documents a process or safety system in a format built for regulatory review.",
    ],
  ],
  [
    "Sell Technical Capability",
    [
      "Investor & Stakeholder Presentations|An out-of-state investor evaluating a Houston energy or industrial company needs to understand technical capability without a site visit. We build animated segments that slot into an existing investor deck, making a technical differentiator land clearly.",
      "SaaS & Platform Explainers|Houston's energy-adjacent software companies sell into buyers who expect engineering-level rigor. We animate the platform in motion, walking a real workflow instead of listing features.",
      "Trade Show & Conference Content|A Houston energy or industrial trade show competes for attention across dozens of competing booths. We build event-ready animation sized for the floor and the specific technical audience walking by.",
    ],
  ],
  [
    "Train a Distributed Workforce",
    [
      "New Hire & Field Training Videos|A new field hire needs to absorb safety and process knowledge fast, and repeating the same training conversation doesn't scale across a large operator. We build training videos that cover process and safety once, letting new hires ramp up on a consistent schedule.",
      "Clinical & Facility Staff Training|Houston healthcare and industrial facilities alike need training content that stays accurate across every shift and every site. We build training animation that delivers identical, accurate content company-wide.",
      "Contractor & Vendor Onboarding|A Houston operator working with rotating contractors needs a fast, repeatable way to communicate site safety and process standards. We build onboarding animation that gets a new contractor up to standard before they ever step on site.",
    ],
  ],
  [
    "Launch and Present With Technical Credibility",
    [
      "Product & Equipment Launch Videos|A new piece of equipment or a technology product launch deserves more than a spec sheet. We build launch videos that show the product functioning, sized for a homepage, a trade show, and a sales deck at once.",
      "Technical Sales Presentations|A short animated segment inside a technical sales presentation holds a buyer's attention longer than another slide of specifications. We build segments designed to slot directly into an existing deck, reinforcing exactly where the technical case needs to land.",
      "Facility & Site Overview Animation|A facility or site too complex, or too remote, to visit in person still needs to be understood by an investor, regulator, or partner. We build overview animations that walk an audience through a site's layout and operations remotely.",
    ],
  ],
].map(([title, items]) => ({
  title,
  subItems: items.map((item, index) => {
    const [subTitle, description] = item.split("|");

    return {
      image: images[index],
      title: subTitle,
      description: parseLinks(description),
      buttonText: "Request a Proposal",
      buttonLink: "/contact-us",
    };
  }),
}));

const workflow = [
  [
    "Discovery & Technical Scoping",
    "We start by identifying the audience, objective, and message, then map who on your team- safety, engineering, compliance- needs to review the technical content before it ships. Getting that list right up front is what keeps a field safety video from needing a rework after a supervisor flags an inaccuracy.",
    "/discovery.png",
  ],
  [
    "Script & Accuracy Pass",
    "We write the narrative first and run it past your technical experts before storyboarding starts, checking that the language matches how your team actually describes the equipment or process, not a generic guess.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We lock pacing and visual direction through storyboards before full production begins, giving your safety or engineering reviewers a checkpoint to approve technical accuracy while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved scenes in 2D or 3D, sending progress checkpoints throughout so a multi-week industrial production doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one structured revision round, keeping a technically detailed project moving instead of stalling on repeated small edits.",
    "/animation.png",
  ],
  [
    "Final Technical Check & Delivery",
    "Before delivery, we run one more pass against the original technical source material, then ship files ready for a field training portal, a trade show screen or an investor deck.",
    "/animation.png",
  ],
].map(([title, content, icon], index) => ({
  id: index + 1,
  title,
  content,
  icon,
}));

const benefits = [
  [
    "Prove Technical Accuracy Before It's Challenged",
    "Animation lets you control exactly what a viewer sees and in what order, which matters when a safety inspector or engineering reviewer needs to trust the content is accurate, not just polished.",
  ],
  [
    "Reduce Field Incidents Through Clearer Training",
    "Animated safety training improves comprehension and recall over a written manual, which matters directly when the outcome of a misunderstood procedure is a safety incident, not just a support ticket.",
  ],
  [
    "Build Credibility With Out-of-State Buyers and Investors",
    "Consistent, technically accurate animation gives a Houston company credibility with buyers and investors who can't do a site visit before deciding.",
  ],
  [
    "Standardize Training Across Every Site",
    "A single training video delivers identical, accurate content across every facility or crew, removing the variance that comes from repeating a briefing site by site.",
  ],
  [
    "Get More From a Technical Marketing Budget",
    "A single animated production can be resized across a trade show booth, an investor deck and a sales presentation, supporting several audiences instead of one.",
  ],
  [
    "Improve Compliance Outcomes",
    "Animated compliance content improves recall over a written policy document, which matters directly for regulatory and safety outcomes, not just employee satisfaction scores.",
  ],
].map(([title, text], index) => ({
  id: index + 1,
  title,
  text,
  icon:
    index === 0
      ? "/game-development/outstaffing.png"
      : "/game-development/managed-outsourcing.png",
}));

const faq = [
  [
    "How do I choose an animation studio for technical or industrial content?",
    "Ask to see work reviewed by an actual engineer or safety officer, not just a polished demo reel. A studio that's been through a technical accuracy pass with a past client already understands the process you need.",
  ],
  [
    "What does a technical explainer video cost for a Houston energy or industrial project?",
    "Cost tracks technical complexity more than runtime. A straightforward 2D process explainer costs less than a fully rendered 3D equipment animation requiring engineering review. We quote a fixed price after understanding your project.",
  ],
  [
    "Can animation improve field safety training outcomes?",
    "Yes. Animated safety training consistently improves comprehension and recall over a written manual, which is why many Houston operators use it to standardize training across multiple sites or shifts.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Houston industrial projects combine both, using 3D for equipment accuracy and 2D for the surrounding safety or process narrative.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece with technical review can run $8,000 to $40,000 or more for the same length. Equipment detail, character count, and revision scope move that range more than the clock does.",
  ],
  [
    "Who are the strongest animation studios for energy and industrial work?",
    "It depends on the brief, but strong studios consistently show real technical range, a discovery process that happens before pricing, in-house production, and verifiable outcomes rather than vague praise. Pixel Studios Inc. is regularly named among the stronger options for technical and industrial work specifically, alongside a handful of other established studios, because accuracy drives how we scope every project.",
  ],
  [
    "Can you build animation that survives a safety or engineering review?",
    "Yes, that's a standard part of our process for Houston clients. We build in a technical accuracy pass before animation begins and again before final delivery, so nothing needs to be reanimated after your safety or engineering team reviews it.",
  ],
  [
    "Can you support a Houston operator with multiple facilities or field sites?",
    "Yes. We build training and process animation specifically designed to deliver identical, accurate content across every site or crew, without repeating production for each location.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const houstonPageContent = {
  banner: {
    title: "Animation Studio in Houston – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Houston's energy operators, industrial manufacturers, healthcare systems, and technology companies with 2D animation, 3D animation, motion graphics, and explainer videos built to explain equipment, processes, and safety with total accuracy. A pipeline operator walking a field crew through a new procedure, a manufacturer proving how a piece of equipment functions before a purchase order gets signed, or a hospital system standardizing patient safety training, our work is built around one standard: the technical detail has to survive a safety review, not just look good in a pitch.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Houston for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in Houston",
    description:
      "Houston runs on industries where a misunderstood process isn't just a bad customer experience; it's a safety incident. Energy operators, oil and gas suppliers, and industrial manufacturers use animation because a photo or a written procedure can't fully capture how equipment behaves under load or how a multi-step process actually unfolds on a rig or a plant floor. A midstream operator uses 3D process animation to walk a field crew through a new safety procedure before anyone touches the equipment. An industrial manufacturer uses technical visualization to prove a piece of equipment functions correctly to a buyer evaluating multiple vendors from out of state. A Houston hospital system uses training animation to standardize a safety protocol across every unit at once, and a growing technology company uses explainer video to translate a technical product for a buyer who isn't an engineer. Across every one of these cases, animation earns its place by carrying technical accuracy that a static document or a live demonstration can't reliably repeat.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Houston, TX.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Houston's energy and industrial client base usually needs more than one working together. A safety training rollout might pair 3D equipment animation with whiteboard-style process breakdowns; a technology company might need a 2D explainer alongside motion graphics for investor materials. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans industrial process animation, energy sector explainers, healthcare safety training, and technology product visualization across 2D and 3D formats, built for audiences that need technical accuracy above all else.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Houston.",
    description:
      "Houston's economy runs on industries where the stakes of a misunderstood process are higher than a lost sale, they're a safety incident or a failed inspection. The sectors below reflect where Houston businesses get the most measurable value from animation, along with the kind of technical production we typically build for each.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Houston's Energy, Industrial and Healthcare Sectors",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Houston Project Moves From Brief to Delivery",
    description:
      "Every Houston project runs through the same production discipline, scoped around the technical accuracy and safety, engineering or regulatory subject usually requires.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Houston Businesses Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Houston <span>Process</span>, <span>Product</span> or{" "}
        <span>Training Program</span> on Screen
      </>
    ),
    text:
      "A field safety procedure, a piece of industrial equipment or a technical product all need the same thing: an explanation accurate enough to survive scrutiny from an engineer, an inspector or an investor. Tell us the technical detail and the audience it needs to reach, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Houston Energy, Industrial and Healthcare Teams",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Houston | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Houston building 2D animation, 3D animation, and technical explainer videos for energy and industrial teams.",
};

export default function AnimationStudioHoustonPage() {
  return <LocationPageTemplate content={houstonPageContent} />;
}