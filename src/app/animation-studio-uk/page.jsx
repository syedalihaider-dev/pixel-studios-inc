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
    "2D animation gives UK organisations a fast, cost-efficient way to explain a product or process without a long production timeline. We build character-led explainers, whiteboard breakdowns and clean vector storytelling for onboarding, marketing and internal communication. See our full [2D animation services](/2d-animation-services) for examples.",
  ],
  [
    "3D Animation",
    "3D animation shows a product, a system or a healthcare device instead of describing it, which matters for UK technology, fintech and healthcare organisations building trust with a research-driven audience. We build product visualisation, technical animation and realistic demonstration videos. Visit our [3D animation services](/3d-animation-services) page for past work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics keep a UK organisation's visual identity consistent across advertising, internal presentations and data-heavy reporting, wherever in the country the underlying content is produced. We build modular libraries your team can reuse project after project. Explore our [motion graphics services](/motion-graphics) for specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video has to answer one question clearly: what does this product or service actually do? We script around the point of genuine confusion first, then animate around it, producing content that works consistently for a national UK audience. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation simplifies dense or technical material into a format that trains, informs or educates without losing accuracy, a format UK healthcare and education organisations lean on for standardised training content. See our [whiteboard animation services](/whiteboard-animation-services) for training use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a UK brand a consistent, recognisable motion identity across every video, presentation and social post the organisation produces. Check out our [logo animation services](/logo-animation-services) for style direction.",
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
    "Fintech & Financial Services",
    "UK fintech companies and financial services firms use animation to explain regulated products clearly enough to satisfy both a customer and a regulator like the FCA. We build compliant, precise explainer content that respects the scrutiny a financial product invites, without losing the clarity a customer actually needs.",
    [
      "Financial product explainer videos",
      "Regulatory and compliance-conscious content",
      "Investor and client presentation animation",
    ],
  ],
  [
    "Higher Education & Research",
    "UK universities and research institutions use animation to communicate findings to funding bodies, explain methodology to students, and turn research into content the public can actually engage with. We build explainer content that translates academic material without flattening the research itself.",
    [
      "Research and methodology explainers",
      "Funding and grant presentation content",
      "Course and lecture support animation",
    ],
  ],
  [
    "Healthcare & NHS-Adjacent Organisations",
    "UK healthcare providers and NHS-adjacent organisations use animation for patient education and staff training that has to stay medically accurate while remaining easy to distribute across multiple trusts and facilities. We build training content and patient-facing explainers built for national, not single-site, distribution.",
    [
      "Patient education videos",
      "Clinical and compliance training animation",
      "Procedure and device explainers",
    ],
  ],
  [
    "SaaS & Technology",
    "UK SaaS and technology companies use animation to explain a product to a buyer comparing vendors across the country and beyond. We build onboarding walkthroughs and feature explainers that respect a technical buyer's intelligence.",
    [
      "SaaS product demonstrations",
      "Technical onboarding videos",
      "Feature and platform explainers",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Explain Regulated and Technical Products Clearly",
    [
      "Financial Product Explainers|A UK fintech product has to satisfy both a compliance reviewer and a customer trying to understand what they're signing up for. We build explainer content precise enough for both audiences at once.",
      "SaaS & Platform Explainers|A UK technical buyer expects a genuine explanation, not a marketing summary. We animate the platform in motion, walking a real workflow end to end.",
      "Healthcare & Protocol Explainers|Explaining a clinical protocol accurately matters more than making it simple. We build explainer content that clarifies complex medical material without cutting the substance a reviewer needs to see.",
    ],
  ],
  [
    "Build a Consistent National Brand",
    [
      "National Campaign Animation|A UK organisation with a national footprint needs its brand to read the same way regardless of region. We build motion graphics and campaign animation built for consistent, nationwide distribution.",
      "Sector Brand & Logo Motion|A UK brand that moves consistently across every presentation and campaign reads as more established. We build logo animation and a broader motion system that reinforces that impression.",
      "Social & Digital Campaign Animation|UK audiences scroll fast, and static content earns little attention. We build short-form animated content designed for the platforms UK audiences actually use.",
    ],
  ],
  [
    "Visualise Complex Data and Systems",
    [
      "Financial & Performance Data Visualisation|A spreadsheet of quarterly numbers convinces no board member to sit still on a page. We animate performance data into a sequence that walks a stakeholder through the actual story the numbers tell.",
      "3D Product & System Visualisation|A product or system is hard to understand from a document alone. We build 3D visualisation that shows it from every angle, in motion.",
      "Technical & Regulatory Process Animation|A process too complex for a paragraph needs a sequence a reviewer can actually follow. We break down multi-step processes so a regulator or stakeholder understands exactly how each stage connects.",
    ],
  ],
  [
    "Train and Educate Nationally",
    [
      "Multi-Site Employee Training|A UK organisation with multiple offices or facilities can't repeat the same training conversation everywhere. We build training content that covers policy and process once, delivered identically nationwide.",
      "Patient & Customer Education|A patient or customer who understands a product or procedure fully has fewer follow-up questions and better outcomes. We build education content that walks an audience through complex material clearly.",
      "Compliance & Regulatory Training|Explaining a compliance requirement accurately matters more than making it simple. We build training animation that clarifies complex regulatory material without cutting the substance a reviewer needs to see.",
    ],
  ],
  [
    "Launch and Present Nationally",
    [
      "Product & Service Launch Videos|A UK launch deserves more than a static announcement post. We build launch videos sized for a homepage, an email rollout, and a national campaign at once.",
      "Investor & Board Presentations|A short animated segment inside an investor or board deck holds attention longer than another slide of bullet points. We build segments designed to slot directly into an existing deck.",
      "Conference & Industry Event Content|A UK conference or industry event needs content built for the specific room and audience it's shown to. We build event-ready animation sized for that format.",
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
    "Discovery & National Scoping",
    "We start by identifying the audience, objective and message, then map how the finished video needs to reach a national audience, a single launch or a phased rollout across multiple UK sites.",
    "/discovery.png",
  ],
  [
    "Script & Stakeholder Alignment",
    "We write and lock the narrative before any visual work starts, checking the language against how your organisation actually communicates nationally, not a single office's internal shorthand.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We plan every scene through storyboards and style frames, giving stakeholders across departments or regions a single checkpoint to approve structure and accuracy before full production begins.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved animation in 2D or 3D, with progress checkpoints throughout so a national rollout doesn't leave any office waiting on an unexplained delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one scoped revision round rather than an open-ended one, so feedback from multiple stakeholders doesn't stall the project.",
    "/animation.png",
  ],
  [
    "Final Review & National Delivery",
    "We run a final quality pass, then deliver files formatted for every platform and office that needs them, ready for simultaneous distribution across the UK.",
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
    "Communicate Consistently at National Scale",
    "Animation lets you control exactly what every office or region communicates, removing the guesswork that comes from interpreting a static document differently across the country.",
  ],
  [
    "Build Trust With Regulated and Compliance-Conscious Audiences",
    "A clear, accurate explainer earns trust faster than marketing language alone, meaningful for the UK's finance, healthcare and education-heavy sectors.",
  ],
  [
    "Build One Recognisable Identity Nationally",
    "Consistent motion branding across every office and campaign builds recognition more effectively than static graphics at equivalent reach.",
  ],
  [
    "Convert More Consistently Across the Country",
    "A clear explainer video performs the same way on a landing page regardless of which UK region the traffic comes from.",
  ],
  [
    "Get More From a National Marketing Budget",
    "A single animated asset resized for every regional campaign supports the entire country instead of one office.",
  ],
  [
    "Standardise Training Outcomes Nationwide",
    "Animated training material improves recall over static documentation and delivers it identically no matter which office or site is running the session.",
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
    "How do I choose an animation studio for a UK-wide project?",
    "Ask specifically how they handle multi-stakeholder review across different offices or sites, not just their general process. A studio that's coordinated national sign-off before will have a clear answer, not a vague one.",
  ],
  [
    "What does an explainer video cost for a UK organisation?",
    "Cost depends on complexity and scope more than location. We quote a fixed price after understanding your project, a single video or a full national rollout alike.",
  ],
  [
    "Can you produce one video that works consistently across the whole UK, not just one city?",
    "Yes, that's specifically what this page is built for. We build organisation-wide productions designed to work the same way regardless of which UK region receives them.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and many national rollouts combine both depending on the audience and subject matter.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the cost more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D production can run $8,000 to $40,000 or more for the same length. Style, character count and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios working with UK organisations?",
    "It depends on the brief, but strong studios consistently show real range across visual styles, a discovery process ahead of pricing, in-house production, and verifiable outcomes rather than vague testimonials. Pixel Studios Inc. shows up on that shortlist regularly, alongside a handful of other established names, because we scope every project around a measurable result first.",
  ],
  [
    "Do you work with organisations that need UK-wide, not London-specific, content?",
    "Yes, this is one of the more common requests we get. National content requires a different approach to language and examples than a London-focused campaign, and we build specifically for that broader audience.",
  ],
  [
    "Can you build content that satisfies UK regulatory bodies like the FCA?",
    "Yes. We regularly build financial and compliance animations reviewed against the accuracy standard a UK regulator expects, alongside the clarity a customer actually needs.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const ukPageContent = {
  banner: {
    title: "Animation Studio in the UK – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving corporate, fintech, education, healthcare and technology organisations across the United Kingdom with 2D animation, 3D animation, motion graphics and explainer videos built for a national audience, not a single city market. A fintech company explaining a regulated product to customers and the FCA alike, a university communicating research to a funding body, or a healthcare provider standardising training across multiple trusts, our work is built around a shared standard: content precise enough to satisfy a UK audience that expects both professionalism and substance.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company Serving the UK for 2D & 3D Animation Services",
    statsData: [
      {
        end: 110,
        suffix: "+",
        label: "Projects\nDelivered",
      },
      {
        end: 97,
        suffix: "%",
        label: "Client Retention\nRate",
      },
      {
        end: 12,
        suffix: "+",
        label: "Industries\nServed",
      },
      {
        end: 95,
        suffix: "%",
        label: "On-Time\nDelivery",
      },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in the UK",
    description:
      "The UK is too large and too varied a market for a single regional angle to cover, which is exactly why we treat this page as a national resource rather than a city-specific one. A fintech company based anywhere from Edinburgh to Bristol uses animation to explain a regulated financial product clearly enough to satisfy both a customer and the FCA. A university or research institution uses explainer content to communicate findings to a funding body or the public, regardless of which city it's based in. A healthcare provider operating across multiple NHS trusts uses training animation to standardise a protocol update nationally instead of repeating it trust by trust. And a growing SaaS or technology company uses onboarding animation to reduce support burden for customers spread across the country. UK organisations use animation because the underlying need, clear, accurate communication at national scale, doesn't depend on which city a business happens to be headquartered in.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in the UK.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines for organisations operating throughout the UK, and most projects draw on more than one. A fintech launch might combine a 2D explainer with motion graphics for compliance materials; a healthcare rollout might need whiteboard training content alongside patient-facing animation. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans fintech product explainers, healthcare training content, university research animation and technology onboarding across 2D and 3D formats, built for organisations operating across the United Kingdom.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve Across the UK.",
    description:
      "The UK's economy spans a national mix of fintech, education, healthcare, SaaS and corporate organisations, each with a different bar for the accuracy and formality animation needs to meet. The sectors below reflect where we see the strongest, most consistent demand for animation from organisations operating nationally, not a single city market.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Organisations Across the UK",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a UK Project Moves From Brief to Delivery",
    description:
      "Every UK project runs through the same structured production process, scaled to fit a single organisation or a national rollout across multiple sites.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What UK Organisations Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get One Message That Works Across the <span>Whole UK</span>
      </>
    ),
    text:
      "A national product launch, a compliance rollout or a multi-site training programme all fail the same way when messaging drifts region to region. We build the version that doesn't drift. Tell us your footprint, audience and timeline, and we'll map the right format.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading: "Common Questions From UK Organisations",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in the UK | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio serving organisations across the UK with 2D animation, 3D animation and national explainer video production.",
};

export default function AnimationStudioUKPage() {
  return <LocationPageTemplate content={ukPageContent} />;
}