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
    "2D animation gives Seattle technology and ecommerce teams a fast way to explain a product or process without a long production cycle. We build character-led explainers, whiteboard-style breakdowns, and clean vector storytelling for onboarding, marketing, and technical communication. See our full [2D animation services](/2d-animation-services) for examples.",
  ],
  [
    "3D Animation",
    "3D animation shows infrastructure, equipment, aerospace components and game environments functioning or existing exactly as designed, which matters when a Seattle audience expects genuine technical precision. We build product visualization, technical animation and character work for engineering-heavy clients. Visit our [3D animation services](/3d-animation-services) page for past work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics turn Seattle's dense technical and operational data into content an enterprise buyer, investor, or player community actually retains. We build modular libraries your team can reuse across campaigns and technical reporting. Explore our [motion graphics services](/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video for a Seattle technical buyer has to answer one question clearly: how does this actually work at scale? We script around that question first, then animate to make it land. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation simplifies a cloud architecture concept, a logistics system, or a technical process into a sequence a non-specialist audience can follow. It's a format Seattle technology and enterprise teams lean on for training and onboarding. See our [whiteboard animation services](/whiteboard-animation-services) for use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a Seattle brand a moving identity across product launches, investor materials, and social content, reinforcing recognition every time it plays. Check out our [logo animation services](/logo-animation-services) for style options.",
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
    "Cloud Software & Enterprise Technology",
    "Seattle's cloud software and enterprise technology companies use animation to explain infrastructure, data architecture, and platform behavior to buyers who expect a genuinely technical explanation, not a marketing summary. We build technical explainers and onboarding content that respect an engineering-literate audience.",
    [
      "Cloud and infrastructure explainer videos",
      "Technical onboarding animation",
      "Enterprise platform demonstrations",
    ],
  ],
  [
    "Ecommerce & Logistics",
    "Seattle's ecommerce and logistics companies use process animation to explain fulfillment, supply chain, and operational systems running at a scale that's hard to picture from a written description alone. We build process animation that makes large-scale logistics genuinely understandable.",
    [
      "Fulfillment and logistics process animation",
      "Supply chain explainer videos",
      "Operations training content",
    ],
  ],
  [
    "Gaming & Interactive Entertainment",
    "Seattle's gaming studios use 3D character and environment animation to build trailers and marketing content that competes with the best production values in the industry. We build cinematic animation sized for launch dates and platform reveals that can't move.",
    [
      "Game trailer and cinematic animation",
      "Character and environment design",
      "Launch and platform marketing assets",
    ],
  ],
  [
    "Aerospace & Advanced Manufacturing",
    "Seattle's aerospace suppliers and advanced manufacturers use technical animation to prove a component or system functions correctly to buyers and regulators who will not accept an approximation. We build precision technical visualization that holds up under engineering-level scrutiny.",
    [
      "Component and system visualization",
      "Technical process animation",
      "Engineering and regulatory presentation content",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Explain Infrastructure and Scale",
    [
      "Cloud & Infrastructure Explainers|Cloud infrastructure is invisible by design, which makes it genuinely hard to sell. We build technical explainers that show how distributed systems actually process and move data, translated for a buyer who isn't a systems engineer.",
      "Logistics & Fulfillment Process Animation|A fulfillment network operating at Seattle scale is difficult to picture from a written description. We animate how a logistics system actually moves product end to end, at a scale an audience can finally visualize.",
      "Enterprise Platform Explainers|An enterprise buyer evaluating a Seattle software platform expects real technical depth, not a marketing overview. We animate the platform in motion, following a real workflow instead of listing features.",
    ],
  ],
  [
    "Prove Engineering Precision",
    [
      "Aerospace Component Visualization|An aerospace buyer or regulator will not accept an approximation of how a component functions. We build 3D visualization precise enough to hold up under genuine engineering scrutiny.",
      "Technical Process Animation|A manufacturing or engineering process too complex for a paragraph needs a sequence an audience can actually follow. We break down technical systems step by step, proving function rather than just describing it.",
      "Data & Systems Visualization|Complex operational or technical data convinces no one sitting in a spreadsheet. We animate performance and system data into a sequence that guides an audience through the actual story behind the numbers.",
    ],
  ],
  [
    "Build Trailers and Content That Compete Industry-Wide",
    [
      "Game Trailer & Cinematic Animation|A Seattle gaming studio's trailer has to hold up next to the best production values in the industry. We build 3D character and environment animation sized for a launch or reveal date that can't move.",
      "Character & Environment Design|A game's world needs to feel fully realized even in a short marketing clip. We build character and environment animation matched to an existing creative direction and production standard.",
      "Launch & Platform Marketing Content|A game launch or platform reveal needs content built specifically for that moment. We build launch-ready animation sized for a store page, a trailer drop, and a marketing campaign at once.",
    ],
  ],
  [
    "Train and Onboard at Enterprise Scale",
    [
      "Enterprise Onboarding Animation|A technical enterprise platform needs onboarding content that respects a buyer's intelligence while still reducing support burden. We build onboarding walkthroughs that a technical customer actually trusts.",
      "Operations & Logistics Training|A large-scale operations team needs training content that stays accurate and consistent across every shift and facility. We build training animation that scales with a Seattle logistics operation.",
      "Technical & Engineering Team Training|New engineering hires need to absorb complex technical context quickly. We build training animation that covers process and system knowledge once, at a pace a growing technical team can actually use.",
    ],
  ],
  [
    "Launch and Present With Technical Weight",
    [
      "Product & Platform Launch Videos|A cloud platform or product launch deserves more than a changelog entry. We build launch videos sized for a homepage, an enterprise announcement, and a technical audience at once.",
      "Investor & Enterprise Presentations|A short animated segment inside an investor or enterprise sales deck holds attention longer than another slide of specifications. We build segments designed to slot directly into an existing deck.",
      "Conference & Trade Show Content|A Seattle technology or aerospace conference needs content built for a technically literate audience. We build event-ready animation sized for that specific bar.",
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
    "We start by identifying the audience, objective, and message, then map who on your side- engineering, product, safety- needs to review technical accuracy before anything ships.",
    "/discovery.png",
  ],
  [
    "Script & Accuracy Pass",
    "We write the narrative first and run it past your technical team before storyboarding starts, checking that the language matches how your engineers actually describe the system.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We lock pacing and visual direction through storyboards before full production begins, giving your technical reviewers a checkpoint to approve accuracy while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved scenes in 2D or 3D, sending progress checkpoints throughout so a multi-week engineering-heavy production doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one structured revision round, keeping a technically detailed project moving instead of stalling on repeated edits.",
    "/animation.png",
  ],
  [
    "Final Technical Check & Delivery",
    "Before delivery, we run one more pass against the original technical source material, then ship files ready for an enterprise portal, a trade show screen or a launch date.",
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
    "Make Invisible Infrastructure Visible",
    "Animation shows how cloud systems, logistics networks or aerospace components actually work, which matters when the underlying product is genuinely hard to see or picture.",
  ],
  [
    "Prove Engineering Precision Before It's Challenged",
    "Consistent, technically accurate animation gives a Seattle company credibility with buyers, regulators, and investors who expect real substance.",
  ],
  [
    "Compete With Industry-Leading Production Values",
    "Animation built to a high production standard lets Seattle gaming and technology brands compete directly with the best work in their industry.",
  ],
  [
    "Standardize Training Across a Large-Scale Operation",
    "A single training video delivers identical, accurate content across every facility, shift or team, which matters at Seattle's operational scale.",
  ],
  [
    "Get More From a Technical Marketing Budget",
    "A single animated production can be resized across a trade show booth, an investor deck and a technical campaign, supporting multiple audiences instead of one.",
  ],
  [
    "Improve Technical Training Retention",
    "Animated training material improves recall over written documentation, which matters directly for onboarding a growing engineering or operations team.",
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
    "How do I choose an animation studio for technical or engineering content?",
    "Ask to see work reviewed by an actual engineer or technical lead, not just a polished demo reel. A studio that's been through a real technical accuracy pass with a past client already understands the process you need.",
  ],
  [
    "What does a technical explainer video cost for a Seattle technology or aerospace project?",
    "Cost tracks technical complexity more than runtime. A 2D process explainer costs less than a fully rendered 3D component or infrastructure animation requiring engineering review. We quote a fixed price after understanding your project.",
  ],
  [
    "Can you build a game trailer that competes with major studio production values?",
    "Yes. We build 3D character and environment animation scoped and produced to the same standard Seattle's gaming studios expect from a competitive trailer.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Seattle technical and gaming projects combine both, using 3D for accuracy and spectacle and 2D for narrative or onboarding context.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece with technical review can run $8,000 to $40,000 or more for the same length. Technical detail, character count, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for technology and aerospace work?",
    "It depends on the brief, but strong studios consistently show real technical range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for technical and engineering-adjacent work specifically, alongside a handful of other established studios, because accuracy drives how we scope every project.",
  ],
  [
    "Can animation help explain cloud infrastructure that's otherwise invisible to a buyer?",
    "Yes, this is one of the most common problems Seattle cloud and software companies bring us, specifically to make invisible infrastructure genuinely understandable.",
  ],
  [
    "Can you build animation that meets aerospace-level technical precision requirements?",
    "Yes. We build in an engineering accuracy pass before animation begins and again before final delivery, so nothing needs to be reanimated after your engineering team reviews it.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const seattlePageContent = {
  banner: {
    title: "Animation Studio in Seattle – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Seattle's cloud software companies, ecommerce brands, gaming studios, and aerospace suppliers with 2D animation, 3D animation, motion graphics, and explainer videos built for products that are often too technical, too large-scale, or too physically complex to explain with a screenshot or a spec sheet. A cloud platform explaining how its infrastructure actually works, an aerospace supplier proving a component's function to a demanding buyer, or a gaming studio building a trailer for a major release, our work is built around one goal: make genuinely complex engineering and design understandable without losing what makes it impressive.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Seattle for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in Seattle",
    description:
      "Seattle's economy is unusually engineering-heavy for a city its size, built around cloud infrastructure, ecommerce logistics at massive scale, gaming production, and an aerospace industry that demands a level of technical precision most cities never encounter. Animation earns its place here by making that engineering visible. A cloud software company uses technical animation to show how distributed infrastructure actually processes and moves data, something no static diagram fully captures. An ecommerce company uses process animation to explain a fulfillment or logistics system operating at a scale most audiences can't intuitively picture. A gaming studio uses 3D character and environment animation to build a trailer that has to compete with the best production values in the industry. And an aerospace supplier uses technical visualization to prove a component functions correctly to a buyer who will not accept an approximation. Seattle businesses use animation because their underlying work is genuinely complex, and a simplified explanation that loses the substance isn't good enough.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Seattle, WA.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Seattle's engineering-heavy client base usually needs more than one working together. A cloud platform launch might pair a 2D explainer with 3D infrastructure visualization; a gaming studio might need character animation alongside motion graphics for a marketing campaign. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans cloud infrastructure explainers, ecommerce logistics animation, gaming character and trailer work, and aerospace technical visualization across 2D and 3D formats, built for audiences that expect real engineering precision.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Seattle.",
    description:
      "Seattle's core industries share an unusually high bar for technical accuracy, in cloud infrastructure, a fulfillment network operating at massive scale, a AAA game production, and an aerospace component alike. The sectors below reflect where Seattle businesses get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Seattle's Technology, Logistics and Engineering Sectors",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Seattle Project Moves From Brief to Delivery",
    description:
      "Every Seattle project runs through the same production discipline, scoped around the engineering-level precision this market's audience expects.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Seattle Businesses Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Seattle <span>Product</span>,{" "}
        <span>System</span> or <span>Trailer</span> Moving
      </>
    ),
    text:
      "Cloud infrastructure, a logistics network, an aerospace component, or a game trailer all need the same thing: an explanation precise enough to survive a technically literate Seattle audience. Tell us your subject and audience, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Seattle Technology, Gaming and Aerospace Teams",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Seattle | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Seattle building 2D animation, 3D animation, and technical explainer videos for cloud, gaming, and aerospace teams.",
};

export default function AnimationStudioSeattlePage() {
  return <LocationPageTemplate content={seattlePageContent} />;
}