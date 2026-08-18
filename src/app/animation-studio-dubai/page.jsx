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
    "2D animation gives Dubai brands and government entities a fast way to explain a concept, policy or process without a long production cycle. We build character-led explainers, whiteboard-style breakdowns and clean vector storytelling for public communication and marketing. See our full [2D animation services](/2d-animation-services) for examples.",
  ],
  [
    "3D Animation",
    "3D animation shows a property, a building or an infrastructure project exactly as it will look and function before it's built, which matters in a Dubai market built around pre-construction sales and investment. We build architectural visualization, product animation, and realistic demonstration videos. Visit our [3D animation services](/3d-animation-services) page for past work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics carry a Dubai brand's identity across advertising, investor materials, and social media in one consistent visual language. We build modular libraries so your marketing team can produce a full campaign kit from a single brief. Explore our [motion graphics services](/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video for a Dubai audience has to communicate ambition and detail at the same time, since both are expected by default. We script around the core concept first, then animate to make it genuinely compelling. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation simplifies a policy, a process, or a technical concept into a sequence a public or investor audience can follow. It's a format government and institutional clients lean on for clear public communication. See our [whiteboard animation services](/whiteboard-animation-services) for use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a Dubai brand a moving identity across launches, investor materials and social content, reinforcing recognition every time it plays. Check out our [logo animation services](/logo-animation-services) for style options.",
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
    "Real Estate & Property Development",
    "Dubai real estate developers use 3D visualization to market a tower, villa community, or mixed-use development before construction finishes, giving buyers and investors a walkthrough of a space that only exists as architectural plans. We build property visualizations that make a pre-construction listing credible enough to secure commitment early.",
    [
      "3D property visualization and walkthroughs",
      "Pre-construction marketing animation",
      "Investor and buyer presentation content",
    ],
  ],
  [
    "Architecture & Design",
    "Dubai architecture firms use technical animation to present a concept to a government review board, an investor, or a private client who needs to understand scale, materials, and design intent before approving a project. We build architectural animation that communicates a design concept with genuine technical credibility.",
    [
      "Architectural concept animation",
      "Design and materials visualization",
      "Client and review board presentation content",
    ],
  ],
  [
    "Hospitality & Luxury Brands",
    "Dubai's hospitality and luxury brands use branded animation to market an experience before a property opens, giving prospective guests, investors, and partners a sense of a space that photography alone can't fully capture. We build branded content that matches a luxury brand's actual visual standard.",
    [
      "Property and experience branded content",
      "Pre-opening marketing animation",
      "Luxury brand campaign content",
    ],
  ],
  [
    "Government & Institutional",
    "Dubai government and semi-government entities use explainer content to communicate major infrastructure projects, policy initiatives and public programs to residents and international stakeholders. We build public communication content that's clear, credible and appropriately formal for an institutional audience.",
    [
      "Infrastructure and policy explainers",
      "Public communication and awareness content",
      "Institutional presentation animation",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Sell What Doesn't Exist Yet",
    [
      "Pre-Construction Property Visualization|A property that only exists as a blueprint is a hard sell without a way to show it. We build 3D visualization that walks buyers and investors through a space months or years before completion.",
      "Architectural Concept Animation|A design concept presented only as drawings loses most of its impact. We animate a concept in motion, communicating scale, materials, and design intent clearly enough for a review board or client to approve it.",
      "Infrastructure & Development Visualization|A large-scale infrastructure or development project is difficult to picture from a plan alone. We build visualizations that show a project's scope and function before ground is broken.",
    ],
  ],
  [
    "Market Ambition Convincingly",
    [
      "Luxury Brand & Hospitality Content|A luxury brand's marketing has to match the actual standard of the physical experience it's selling. We build branded animation calibrated to that same level of polish.",
      "Investor & Buyer Presentations|A short animated segment inside an investor or buyer presentation holds attention longer than another slide of specifications. We build segments designed to slot directly into an existing deck.",
      "Social & Campaign Animation|A Dubai property or brand launch needs content built for a highly visual, aspiration-driven audience. We build campaign animation sized for the platforms that audience actually uses.",
    ],
  ],
  [
    "Communicate Public and Institutional Initiatives",
    [
      "Infrastructure & Policy Explainers|A major infrastructure or policy initiative needs to be understood by residents and international stakeholders who won't read a lengthy report. We build explainer content that communicates the initiative clearly and credibly.",
      "Public Awareness Animation|A public program or initiative competes for attention against everything else in a resident's day. We build short, clear animated content designed to actually land the message.",
      "Institutional Presentation Content|A government or institutional presentation benefits from content built for the specific formality and audience it's shown to. We build presentation-ready animation matched to that standard.",
    ],
  ],
  [
    "Visualize Scale and Detail",
    [
      "3D Development & Property Visualization|A large development is hard to understand from a site plan alone. We build 3D visualization that shows a full development from every angle, in motion, before it's built.",
      "Materials & Design Detail Animation|The materials and design details that justify a premium price point are often lost in a rendering. We animate the specific details that make a project genuinely distinctive.",
      "Data & Investment Visualization|Investment and performance data convinces no one sitting in a spreadsheet. We animate data into a sequence that walks an investor through the actual story behind the numbers.",
    ],
  ],
  [
    "Launch and Present With Regional Credibility",
    [
      "Property & Project Launch Videos|A property or project launch deserves more than a static announcement. We build launch videos sized for a roadshow, a sales gallery, and a digital campaign at once.",
      "Government & Investor Presentations|A short animated segment inside a government or investor presentation holds attention longer than another slide of bullet points. We build segments designed to slot directly into an existing deck.",
      "Event & Exhibition Content|A property launch event, exhibition, or investor roadshow needs content built for the specific room and audience it's shown to. We build event-ready animation sized for that format.",
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
    "Discovery & Concept Scoping",
    "We start by identifying the audience, objective, and message, then map the scale and ambition the visualization needs to communicate before anything ships.",
    "/discovery.png",
  ],
  [
    "Script & Concept Development",
    "We write and lock the narrative and creative concept before any visual work starts, making sure the concept matches the level of ambition the Dubai market expects by default.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We plan every scene through storyboards and style frames, giving developers, architects, or institutional stakeholders a checkpoint to approve accuracy and creative direction while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved animation in 2D or 3D, sending progress checkpoints throughout so a multi-week production doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one scoped revision round rather than an open-ended one, keeping the project moving toward delivery.",
    "/animation.png",
  ],
  [
    "Final Review & Delivery",
    "We run a final quality pass across visuals, audio and technical specs, then deliver files ready for a sales gallery, an investor roadshow or a government presentation.",
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
    "Sell Before It's Built",
    "3D visualization lets a developer or institution secure commitment on a project that only exists as a plan, which is often how deals close in Dubai's pre-construction market.",
  ],
  [
    "Match the Market's Baseline Ambition",
    "Consistent, high-production animation meets the visual standard Dubai buyers and investors already expect, rather than falling short of it.",
  ],
  [
    "Build Credibility With International Investors",
    "Clear, credible visualization gives a Dubai project credibility with buyers and investors evaluating it from outside the region.",
  ],
  [
    "Communicate at Institutional Scale",
    "A single explainer video delivers identical, clear content to residents and international stakeholders at once, useful for government and institutional communication.",
  ],
  [
    "Get More From a Development Marketing Budget",
    "A single animated production resized across a sales gallery, a roadshow, and a digital campaign supports several touchpoints instead of one.",
  ],
  [
    "Improve Comprehension of Complex Developments",
    "Animated visualization improves comprehension of scale and detail over a floor plan or rendering alone, which matters directly for a buyer's confidence in a pre-construction purchase.",
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
    "How do I choose an animation studio for a Dubai real estate or architecture project?",
    "Ask to see 3D visualization work specifically, not just 2D marketing content. Pre-construction and architectural visualization require a different level of technical precision than a general explainer video.",
  ],
  [
    "What does 3D property visualization cost for a Dubai development?",
    "Cost depends on scale, detail level, and number of units or spaces visualized. A single villa costs less than a full mixed-use development. We quote a fixed price after understanding your project scope.",
  ],
  [
    "Do you have a physical office in Dubai or the UAE?",
    "We serve businesses in Dubai and across the UAE through a structured remote production process. We don't claim a local office or team unless that's genuinely verified, and we're upfront about working with clients across the region remotely.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Dubai real estate and architectural projects rely heavily on 3D, often paired with 2D or motion graphics for supporting marketing materials.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D architectural or property animation can run $8,000 to $40,000 or more for the same length. Detail level, scale, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for real estate and architectural visualization?",
    "It depends on the brief, but strong studios consistently show real 3D range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for real estate and architectural visualization specifically, alongside a handful of other established studios, because precision drives how we scope every project.",
  ],
  [
    "Can you visualize a large-scale development, not just a single property?",
    "Yes. We regularly build visualizations for full communities, mixed-use developments, and infrastructure projects, not just individual units or buildings.",
  ],
  [
    "Can you work with government or institutional clients on public communication content?",
    "Yes. We build explainer and public awareness content for government and semi-government entities, calibrated to the formality and scale that kind of communication requires.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const dubaiPageContent = {
  banner: {
    title: "Animation Studio in Dubai – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Dubai's real estate developers, architecture firms, hospitality brands, and government entities with 2D animation, 3D animation, motion graphics, and explainer videos built for a market where visual ambition is the baseline expectation, not the differentiator. A developer marketing a tower that exists only as a rendering, an architecture firm presenting a concept to a government review board, or a luxury hospitality brand launching a property before it opens, our work is built around a shared standard: the visualization has to be credible enough to secure commitment before the physical result exists.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company Serving Dubai for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in Dubai",
    description:
      "Dubai's economy is built on projects that have to be sold before they're built: real estate developments, hospitality concepts, government infrastructure, and architectural ambitions that routinely outpace what a rendering or a floor plan alone can communicate. A real estate developer uses 3D visualization to walk investors and buyers through a tower or community that exists only as a concept, months or years before the first unit is delivered. An architecture firm uses technical animation to present a design concept to a government review body or a private client who needs to understand scale and materials before approving a budget. A hospitality brand uses branded animation to market a property's experience before it opens its doors. And a government or semi-government entity uses explainer content to communicate a major infrastructure or policy initiative to residents and international stakeholders. Dubai businesses use animation because the market rewards visible ambition, and a static rendering rarely captures enough of it to close.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services for Businesses in Dubai.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Dubai's real estate and hospitality-heavy client base usually needs more than one working together. A property launch might pair 3D architectural visualization with motion graphics for an investor roadshow; a hospitality brand might need branded video content alongside a logo animation for a new property. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans pre-construction real estate visualization, architectural concept animation, hospitality branded content, and government explainer videos across 2D and 3D formats, built for a market where ambition is the standard, not the exception.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Dubai.",
    description:
      "Dubai's economy runs on industries where a project's success often depends on how convincingly it can be sold before it physically exists. The sectors below reflect where businesses serving the Dubai market get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Dubai's Real Estate, Architecture and Hospitality Sectors",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Dubai Project Moves From Brief to Delivery",
    description:
      "Every project we build for the Dubai market runs through the same production discipline, scoped to fit a real estate, architectural, or institutional subject that has to convince before it physically exists.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Businesses Get From Animation in the Dubai Market",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Dubai <span>Property</span>, <span>Concept</span> or{" "}
        <span>Initiative</span> on Screen
      </>
    ),
    text:
      "A pre-construction development, an architectural concept, or a government initiative all need the same thing: a visualization credible enough to secure commitment before the physical result exists. Tell us your project and audience, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading: "Common Questions About Animation Services in Dubai",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Dubai | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio serving Dubai with 2D animation, 3D animation, and architectural visualization for real estate and hospitality.",
};

export default function AnimationStudioDubaiPage() {
  return <LocationPageTemplate content={dubaiPageContent} />;
}