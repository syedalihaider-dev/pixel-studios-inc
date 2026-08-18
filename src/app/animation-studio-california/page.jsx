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
    "2D animation gives California businesses a fast, cost-efficient way to explain a product or process without a long production timeline. We build character-led explainers, whiteboard breakdowns, and clean vector storytelling for onboarding, marketing, and internal communication, well suited to teams that need consistent messaging across multiple offices or regions through [2d animation services](https://www.pixelstudiosinc.com/2d-animation-services).",
  ],
  [
    "3D Animation",
    "3D animation shows a product, facility or process instead of describing it, which matters for California manufacturers, healthcare device makers and ecommerce brands trying to build trust in a competitive statewide market. With our [3d animation services](https://www.pixelstudiosinc.com/3d-animation-services) you can build product visualization, technical animation and realistic demonstration videos that hold up under close inspection.",
  ],
  [
    "Motion Graphics",
    "Motion graphics keep a California brand's visual identity consistent across advertising, internal presentations, and data-heavy reporting, no matter which office or region produced the underlying content. We build modular libraries, so your team reuses the same visual system project after project instead of starting fresh each time. Explore our [motion graphics services](https://www.pixelstudiosinc.com/motion-graphics) for specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video has to answer one question clearly: what does this product or service actually do? We script around the point of genuine confusion first, then build an [animated explainer video](https://www.pixelstudiosinc.com/animated-explainer-video) around it, producing content that works the same way for a customer in one region as it does in another.",
  ],
  [
    "Whiteboard Animation",
    "Our [whiteboard animation services](https://www.pixelstudiosinc.com/whiteboard-animation-services) simplifies dense or technical material into a format that trains, informs, or educates without losing accuracy, a format California healthcare and enterprise teams lean on for standardized training content delivered across multiple locations.",
  ],
  [
    "Logo Animation",
    "Logo animation services gives every brand in California a consistent, recognizable motion identity across every video, presentation, and social post produced across the organization, replacing a static mark with a few seconds of reinforced recognition.",
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
    "Technology & Enterprise Software",
    "Technology and enterprise software companies in California use [technology animation](https://www.pixelstudiosinc.com/technology-animation) to standardize how a product gets explained across every sales team, region, and customer segment, replacing an inconsistent verbal pitch with a single accurate video. We build onboarding walkthroughs, feature explainers, and internal training content that keeps messaging consistent for a brand-new customer and a newly hired account executive alike, both learning the product from the same source instead of a dozen slightly different pitches.",
    [
      "Enterprise onboarding videos",
      "Multi-region sales enablement content",
      "Feature and platform explainers",
    ],
  ],
  [
    "Healthcare & Life Sciences",
    "California's healthcare networks and life sciences companies use animation to roll out training, compliance, and patient education content across multiple facilities without repeating the same session county by county. We build training modules and [patient-facing explainers](https://www.pixelstudiosinc.com/healthcare-animation) that meet accuracy and health-literacy standards while staying easy to distribute across a large organization.",
    [
      "Compliance and training animation",
      "Patient education videos",
      "Device and procedure explainers",
    ],
  ],
  [
    "Ecommerce & Retail",
    "California ecommerce and retail brands use animation to give a product listing more credibility than static photography alone provides, especially for products that are hard to understand from a flat image. We build 3D product visualization, assembly demonstrations, and short-form motion graphics sized for [ecommerce product pages](https://www.pixelstudiosinc.com/ecommerce-video-production), marketplaces, and paid social campaigns running statewide.",
    [
      "3D product visualization",
      "Assembly and feature demonstration animation",
      "Paid social and marketplace video assets",
    ],
  ],
  [
    "Enterprise & Corporate Communications",
    "Large California organizations with teams spread across multiple offices use animation to make sure a quarterly update, a policy change, or a company-wide announcement lands the same way everywhere it's shown. We build motion graphics and internal communication videos designed for consistency across a distributed workforce, not a single headquarters.",
    [
      "Internal communication and announcement videos",
      "Quarterly and company update motion graphics",
      "Multi-location training content",
    ],
  ],
  [
    "Manufacturing & Industrial",
    "California manufacturers use technical animation to explain equipment function, assembly processes, and safety procedures to audiences ranging from plant staff to enterprise buyers evaluating a purchase. We build [manufacturing animation](https://www.pixelstudiosinc.com/manufacturing-animation) and technical demonstrations of the process that make a complex mechanical or industrial system understandable without requiring a site visit.",
    [
      "Equipment and process animation",
      "Technical demonstration videos",
      "Safety and procedural training content",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Standardize the Product Story",
    [
      "Enterprise Product Explainers|A sales team spread across five California offices telling five slightly different versions of the same pitch is a consistency problem, not a talent problem. We build product explainers that become the single source of truth every rep uses, closing a deal in San Diego or Sacramento alike, so the story stays accurate no matter who's telling it.",
      "Platform & SaaS Walkthroughs|Software value lives inside a workflow a screenshot can't capture, true for a buyer evaluating your platform from a regional office or from headquarters. We animate the product in motion, following a real use case start to finish, in a format every territory can reuse identically.",
      "Multi-Location Service Overviews|A service business with locations across the state needs one accurate description of what working with you involves, not a dozen slightly different verbal pitches from a dozen regional teams. We visualize your process end to end so every office tells the same story to every prospect.",
    ],
  ],
  [
    "Build One Brand Across Every Office",
    [
      "Statewide Social & Digital Animation|A statewide brand posting inconsistent visual content out of different regional offices dilutes recognition instead of building it. We build short-form animated content sized for the platforms your teams actually use, built once and distributed identically across every market you operate in.",
      "Multi-Market Advertising Animation|Running the same paid campaign across multiple California markets only works if the creative holds up the same way in every one of them. We build animated ad content with built-in regional cutdowns, so a single production covers your entire statewide media buy.",
      "Unified Brand & Logo Motion|A brand that looks slightly different coming out of every regional office undermines the recognition a statewide organization spends years building. We build logo animation and a motion system every location can apply identically, keeping your visual identity consistent no matter which office produced the content.",
    ],
  ],
  [
    "Make Scale Understandable",
    [
      "3D Product & Facility Visualization|A product or facility is hard to understand from a photo, and that problem multiplies when prospects across multiple regions are evaluating it remotely. We build 3D visualization that shows a product or space from every angle, usable identically for an audience in Los Angeles or one in Fresno.",
      "Manufacturing & Technical Process Animation|A manufacturing process too complex for a paragraph needs a sequence, and that sequence should look identical for a plant team in one region and a buyer in another. We break down technical systems step by step in a single, reusable format.",
      "Statewide Performance Data Visualization|Quarterly numbers rolling up from multiple California regions convince no one sitting in a spreadsheet. We animate performance data into a sequence that walks a board or leadership team through the actual statewide story the numbers are telling.",
    ],
  ],
  [
    "Train Every Location the Same Way",
    [
      "Multi-Site Employee Training|Training every new hire the same way gets harder as a company adds locations across the state. We build training content that covers policy and process once, so every site delivers identical onboarding instead of a dozen slightly different versions of the same material.",
      "Customer Onboarding at Scale|A customer's onboarding experience shouldn't depend on which regional office happens to answer the phone. We build onboarding content that walks every customer through the same setup and troubleshooting steps, regardless of which part of the state they're in.",
      "Healthcare Compliance Animation|A compliance update rolled out inconsistently across multiple healthcare facilities creates real risk, not just an inconvenience. We build compliance and training animation that delivers identical, medically accurate content to every facility at once.",
    ],
  ],
  [
    "Launch Once, Distribute Everywhere",
    [
      "Statewide Product Launch Videos|A product launch loses momentum when different regions get slightly different messaging at slightly different times. We build launch videos sized for a homepage, an email rollout, and every regional office at once, so one production covers the entire statewide launch.",
      "Investor & Enterprise Presentations|A short animated segment inside an enterprise or investor presentation holds attention longer than another slide of regional performance tables. We build sequences designed to slot into an existing deck, reinforcing the exact point where a statewide story needs to land.",
      "Regional Event & Conference Content|A trade show booth or regional conference benefits from content built for the specific room and audience it's shown to, even when the underlying brand message stays consistent statewide. We build event-ready animation sized for the format and constraints of each specific presentation.",
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
    "Discovery & Rollout Mapping",
    "We start by identifying the audience, objective, and message, then map exactly how the finished video needs to roll out, a single headquarters launch or a phased release across multiple regional offices. That distinction changes how we scope timeline and review.",
    "/discovery.png",
  ],
  [
    "Script & Multi-Stakeholder Alignment",
    "We write and lock the narrative before visual work starts, checking the language against how teams in different regions actually talk about the product, not a single office's internal shorthand.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We plan every scene through storyboards and style frames, giving stakeholders across departments or regions a single checkpoint to approve structure and pacing before full production begins.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved animation in 2D or 3D, with progress checkpoints throughout so a statewide rollout doesn't leave any office waiting on an unexplained delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one scoped revision round rather than an open-ended one, so feedback from multiple regional stakeholders doesn't stall the project indefinitely.",
    "/animation.png",
  ],
  [
    "Final Review & Statewide Delivery",
    "We run a final quality pass, then deliver files formatted for every platform and office that needs them, ready for simultaneous statewide distribution without extra rework on your end.",
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
    "Say the Same Thing in Every Office",
    "Animation lets you control exactly what every regional team sees and communicates, removing the guesswork that comes from a dozen offices interpreting the same static document slightly differently.",
  ],
  [
    "Keep Attention Across a Crowded Market",
    "Animated content earns higher completion rates than static pages, meaningful for a statewide brand competing against every other California business for the same limited attention.",
  ],
  [
    "Build One Recognizable Identity Statewide",
    "Consistent motion branding across every office and campaign builds recognition more effectively than static graphics at equivalent reach, and it scales cleanly as new regions come online.",
  ],
  [
    "Convert More Consistently Across Regions",
    "A clear explainer video performs the same way on a landing page regardless of which region's traffic it's serving, removing regional variance from your conversion numbers.",
  ],
  [
    "Stretch One Production Across Every Market",
    "A single animated asset resized for every regional campaign supports the entire state instead of one office, which is where a statewide animation budget actually pays for itself.",
  ],
  [
    "Standardize Training Outcomes Everywhere",
    "Animated training material improves recall over static documentation and, more importantly, delivers it identically no matter which office is running the session",
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
    "How do I choose an animation studio for a statewide rollout?",
    "Ask specifically how they handle multi-stakeholder review across different offices, not just their general process. A studio that's coordinated sign-off across multiple locations before will have a clear answer, not a vague one.",
  ],
  [
    "What does an explainer video cost for a multi-location California organization?",
    "Cost depends on complexity and scope more than distribution footprint. We quote a fixed price after understanding your project, a single video or a full rollout kit alike.",
  ],
  [
    "Can you produce one video that works identically for every California office?",
    "Yes, that's the specific problem most of our California clients bring us. We build a single master production designed to work the same way regardless of which region receives it.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and many statewide rollouts combine both depending on the audience in different regions.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D production can run $8,000 to $40,000 or more for the same length. Style, character count, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios, and where does Pixel Studios Inc. stand?",
    "It depends on the brief, but strong studios consistently show real range across visual styles, a discovery process ahead of pricing, in-house production, and verifiable outcomes rather than vague testimonials. Pixel Studios Inc. shows up on that shortlist regularly, alongside a handful of other established names, because we scope every project around a measurable result first.",
  ],
  [
    "Do you work with organizations that need statewide, not city-specific, content?",
    "Yes, this is one of the more common requests we get. Statewide content requires a different approach to language and examples than a city-focused campaign, and we build specifically for that broader audience.",
  ],
  [
    "Can you coordinate review and sign-off across multiple regional stakeholders?",
    "Yes. Our production process includes a structured review stage built specifically to collect feedback from multiple offices or departments without letting the project stall.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const californiaPageContent = {
  banner: {
    title: "Animation Studio in California – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio working with technology companies, healthcare organizations, ecommerce brands, and enterprise teams across California, building 2D animation, 3D animation, motion graphics, and explainer videos for product launches, internal communication, and customer-facing marketing. From a SaaS platform demo built for a statewide sales team to a healthcare compliance training module rolled out across multiple locations, our work is built around one standard: communicate the idea clearly enough that a viewer doesn't need a follow-up conversation to understand it.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company Across California for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in California",
    description:
      "California's business landscape is too large and too varied for a single local angle, which is exactly why animation earns a different job here than it does in a smaller market: consistency across a distributed footprint. A technology company with teams in multiple cities uses animation to standardize a product explainer so every sales rep, regardless of office, tells the same accurate story. A healthcare network operating across several counties uses training animation to roll out a compliance update once instead of repeating the same session at every location. An ecommerce brand shipping statewide uses 3D product visualization to give a listing more credibility than a photo alone can provide, and an enterprise organization uses motion graphics to turn a quarterly update into something regional teams actually watch instead of skim. Across every one of those cases, the value isn't proximity; it's a single piece of content that holds up the same way everywhere it's shown.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in California.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines for businesses operating throughout California, and most projects draw on more than one. An enterprise software rollout might combine a 2D explainer with a training-focused whiteboard video; an ecommerce brand might need 3D product visualization paired with motion graphics for a statewide ad campaign. Here's what each service line covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans enterprise product explainers, healthcare training content, ecommerce product visualization, and statewide marketing campaigns across 2D and 3D formats, built for organizations operating in multiple California markets at once.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in California.",
    description:
      "California's economy covers more ground than any single city angle can represent, spanning technology, healthcare, ecommerce, and enterprise services across a state larger than most countries. The industries below reflect where we see the strongest, most consistent demand for animation from organizations operating statewide, not a single metro area, along with the kind of production that actually moves the needle for each one.",
    industries,
  },

  services: {
    sectionTitle: "How Animation Keeps Messaging Consistent Across California",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How We Deliver Consistent Animation Across Every California Office",
    description:
      "Every California project runs through the same structured production discipline, scaled to fit a single product video or a multi-location rollout.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What a Statewide Organization Gets From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get One Message That Works in Every <span>California Office</span>
      </>
    ),
    text:
      "A statewide product launch, a compliance rollout, or a multi-region campaign all fail the same way when messaging drifts office to office. We build the version that doesn't drift. Tell us your footprint, audience, and timeline, and we'll map the right format.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From California Organizations With Multiple Locations",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in California | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio serving California with 2D animation, 3D animation, motion graphics, and explainer videos statewide.",
};

export default function AnimationStudioCaliforniaPage() {
  return <LocationPageTemplate content={californiaPageContent} />;
}