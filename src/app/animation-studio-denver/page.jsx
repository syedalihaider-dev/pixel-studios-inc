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
    "2D animation gives Denver technology and outdoor brands a fast way to explain a product or process without a long production cycle. We build character-led explainers, whiteboard-style breakdowns, and clean vector storytelling for onboarding, marketing, and technical communication. See our full [2D animation services](/2d-animation-services) for examples.",
  ],
  [
    "3D Animation",
    "3D animation shows a product, a piece of energy infrastructure or a property performing or functioning exactly as intended, which matters for Denver clean-energy developers, outdoor brands and real estate teams building credibility with a research-driven buyer. We build product visualization, technical animation and architectural walkthroughs. Visit our [3D animation services](/3d-animation-services) page for past work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics turn Denver's sustainability data, product performance metrics, and brand story into content an investor, customer, or partner actually retains. We build modular libraries your team can reuse across campaigns and reporting. Explore our [motion graphics services](/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video for a Denver technology or energy buyer has to answer one question clearly: how does this actually work, and why does it matter? We script around that question first, then animate to make it land. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation simplifies a technical energy concept, a product mechanism, or a sustainability claim into a format audiences actually finish watching. It's a format Denver technology and energy teams lean on for training and public-facing education. See our [whiteboard animation services](/whiteboard-animation-services) for use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a Denver brand a moving identity across product launches, investor materials and social content, reinforcing recognition every time it plays. Check out our [logo animation services](/logo-animation-services) for style direction.",
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
    "Renewable Energy & Clean Tech",
    "Denver's solar, wind, and clean-energy developers use animation to explain how a technical energy system actually generates and delivers power to investors, regulators, and communities who need to understand the technology before they'll support or fund a project. We build technical process animation and 3D infrastructure visualization that makes a complex energy system understandable.",
    [
      "Technical energy process animation",
      "Infrastructure and system visualization",
      "Investor and community presentation content",
    ],
  ],
  [
    "Technology & SaaS",
    "Denver's technology and software companies use animation to explain a product to a buyer who's comparing multiple vendors and expects substance over a slick pitch. We build onboarding walkthroughs and feature explainers that respect a research-driven buyer's need for real detail.",
    [
      "SaaS product demonstrations",
      "Technical onboarding videos",
      "Feature and platform explainers",
    ],
  ],
  [
    "Outdoor & Recreation Brands",
    "Denver's outdoor and recreation brands use 3D product animation to show gear performing in conditions a studio photo shoot can't capture, useful for product launches, retail partnerships, and crowdfunding campaigns. We build product visualization and demonstration animation that proves durability and function, not just aesthetics.",
    [
      "3D product visualization and demos",
      "Performance and durability animation",
      "Retail and campaign video assets",
    ],
  ],
  [
    "Real Estate & Development",
    "Denver real estate developers, working across both mountain and urban markets, use 3D visualization to market a property before it's built, giving buyers and investors a walkthrough of a space that only exists as a plan. We build architectural animation that makes a pre-construction listing credible.",
    [
      "3D property visualization",
      "Pre-construction marketing animation",
      "Investor and broker presentation content",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Explain the Technology Behind the Claim",
    [
      "Renewable Energy System Explainers|A community or investor evaluating a solar or wind project needs to understand the technology, not just trust a sustainability claim. We build technical explainers that show exactly how a clean-energy system generates and delivers power, reviewed for accuracy with your engineering team.",
      "SaaS & Platform Explainers|Denver's technology buyers research before they trust a pitch. We animate your platform in motion, walking a real workflow end to end instead of listing features, built to hold up under a second, more skeptical viewing.",
      "Product Mechanism Animation|A technical or outdoor product's real value often lives in how it performs under conditions a photo can't show. We animate the mechanism or performance characteristic that actually differentiates it.",
    ],
  ],
  [
    "Prove Product Performance",
    [
      "3D Product Visualization|An outdoor or technical product is hard to sell on specs alone. We build 3D visualization that shows a product from every angle, in motion, useful for pre-launch marketing and retail partner conversations.",
      "Durability & Field Performance Animation|A Denver outdoor brand's credibility rests on real performance, not marketing language. We build animation that demonstrates how a product holds up under the conditions it's actually built for.",
      "Technical & Engineering Animation|A process or mechanism too complex for a paragraph needs a sequence a buyer can actually follow. We break down technical systems step by step, proving function rather than just describing it.",
    ],
  ],
  [
    "Build Credibility With Investors and Partners",
    [
      "Investor & Community Presentations|A clean-energy or technology company raising capital needs an audience to understand the technology quickly. We build animated segments that slot into an existing deck, making a technical differentiator land clearly.",
      "Sustainability & Impact Data Visualization|A sustainability report full of metrics convinces no one sitting in a spreadsheet. We animate performance and impact data into a sequence that walks an investor or community stakeholder through the actual story the numbers tell.",
      "Trade Show & Conference Content|A Denver energy or outdoor industry trade show competes for attention across dozens of booths. We build event-ready animation sized for the floor and the specific audience walking by.",
    ],
  ],
  [
    "Train and Onboard a Growing Team",
    [
      "Employee Training Videos|Repeating the same onboarding conversation with every new hire stops scaling once a Denver company grows past a certain size. We build training videos that cover policy and process once, letting new employees ramp up on a consistent schedule.",
      "Customer & Field Onboarding|A customer or field technician who understands a product or system fully generates fewer support calls. We build onboarding content that walks users through setup and troubleshooting in a reusable format.",
      "Technical & Safety Training Animation|Explaining a technical or safety process accurately matters more than making it simple. We build training animation that clarifies complex material without cutting the substance a reviewer needs to see.",
    ],
  ],
  [
    "Launch With Substance",
    [
      "Product & Project Launch Videos|A launch, a product release, or an energy project milestone alike deserves more than a static announcement. We build launch videos sized for a homepage, an investor update, and a trade show booth at once.",
      "Investor & Sales Presentations|A short animated segment inside a pitch deck holds a room's attention longer than another slide of bullet points. We build segments designed to slot directly into an existing deck.",
      "Event & Conference Content|A Denver conference, trade show, or investor day needs content built for the specific room and audience it's shown to. We build event-ready animation sized for the format and time constraint of the presentation.",
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
    "We start by identifying the audience, objective, and message, then map any technical, engineering, or sustainability claims that need review before anything ships. Getting this right up front avoids reworking a scene after a technical reviewer flags an inaccuracy.",
    "/discovery.png",
  ],
  [
    "Script & Accuracy Pass",
    "We write and lock the narrative before any visual work starts, cross-checking technical language against how your team actually describes the system or product, not a generic guess.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We plan every scene through storyboards and style frames, giving technical or stakeholder reviewers a checkpoint to approve accuracy and pacing while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved animation in 2D or 3D, sending progress checkpoints throughout so a multi-week production doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one scoped revision round rather than an open-ended one, keeping a technically detailed project moving toward delivery.",
    "/animation.png",
  ],
  [
    "Final Review & Delivery",
    "We run a final quality and accuracy pass, then deliver files ready for an investor deck, a trade show screen, or a property listing page.",
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
    "Prove Substance, Not Just Polish",
    "Animation lets you show exactly how a technology or product works, which matters in a Denver market where buyers research before they trust a claim.",
  ],
  [
    "Build Credibility With Research-Driven Buyers",
    "A clear technical explainer earns trust faster than marketing language alone, meaningful for Denver's research-heavy technology and energy buyers.",
  ],
  [
    "Stand Out in a Growing, Competitive Market",
    "Consistent motion branding across launches and campaigns builds recognition more effectively than static graphics, useful as Denver's technology and outdoor sectors keep expanding.",
  ],
  [
    "Shorten the Distance to a Funded Decision",
    "A clear investor explainer shortens the number of meetings needed before a technical differentiator actually lands.",
  ],
  [
    "Get More From a Growing Marketing Budget",
    "A single animated production resized across investor materials, retail campaigns, and trade shows supports several touchpoints instead of one.",
  ],
  [
    "Improve Training Outcomes for Technical Teams",
    "Animated training material improves recall over written documentation, which matters directly for onboarding and safety training in technical and energy roles.",
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
    "How do I choose an animation studio for technical or energy content?",
    "Ask to see work that's been through an actual engineering or technical review, not just a polished reel. That's the process you need for Denver's more research-driven buyers.",
  ],
  [
    "What does a technical explainer video cost for a Denver energy or product project?",
    "Cost tracks technical complexity more than runtime. A 2D process explainer costs less than a fully rendered 3D system animation requiring engineering review. We quote a fixed price after understanding your project.",
  ],
  [
    "Can you build animation for a renewable energy or clean-tech project?",
    "Yes. We regularly build technical animation that explains how a solar, wind, or clean-energy system generates and delivers power to investors, regulators, and communities.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Denver technical and product projects combine both, using 3D for accuracy and 2D for narrative context.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece with technical review can run $8,000 to $40,000 or more for the same length. Technical detail, character count, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for technology and energy work?",
    "It depends on the brief, but strong studios consistently show real technical range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for technical and product work specifically, alongside a handful of other established studios, because accuracy drives how we scope every project.",
  ],
  [
    "Can you show an outdoor product performing under real conditions, not just in a studio?",
    "Yes. We build 3D product visualization and performance animation designed to demonstrate durability and function, which matters more to Denver's outdoor and recreation buyers than studio photography alone.",
  ],
  [
    "Can you support a Denver real estate developer marketing a mountain or pre-construction property?",
    "Yes. Pre-construction visualization is a common request from Denver developers, giving buyers and investors a walkthrough of a property before it's built.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const denverPageContent = {
  banner: {
    title: "Animation Studio in Denver – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Denver's technology companies, outdoor and recreation brands, renewable energy developers, and real estate teams with 2D and 3D animation, motion graphics, and explainer videos for product launches, sustainability communications, and property marketing. A clean-energy developer explaining how a solar or wind project actually works, an outdoor gear brand showing a product in motion, or a real estate team visualizing a mountain property before it's built, our work is built around a shared goal: make a technical or visual idea land clearly with an audience that expects substance, not just polish.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Denver for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in Denver",
    description:
      "Denver's economy runs on a specific combination that doesn't exist in quite the same mix anywhere else: a fast-growing technology corridor, a renewable energy sector building out solar and wind infrastructure, an outdoor and recreation industry built around product credibility, and a real estate market shaped by both mountain and urban development. A clean-energy developer uses technical animation to explain how a solar array or wind project generates and delivers power to a community or to an investor who isn't an engineer. An outdoor brand uses 3D product animation to show gear performing in conditions a studio photo shoot can't replicate. A Denver technology company uses an explainer video to translate a technical product for a buyer evaluating multiple vendors. And a real estate developer uses 3D visualization to market a mountain or urban property before it's built. Denver businesses use animation to prove substance, not just show polish, which matters in a market where buyers tend to research before they trust a claim.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Denver, CO.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Denver's technology, energy, and outdoor-brand mix usually draws on more than one. A renewable energy launch might pair 3D technical animation with motion graphics for investor materials; an outdoor brand might need product visualization alongside a logo animation for a new product line. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans renewable energy explainers, outdoor product visualization, technology onboarding content, and real estate walkthroughs across 2D and 3D formats, built for a Denver market that expects substance behind the polish.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Denver.",
    description:
      "Denver's identity runs on a specific mix of industries: a technology sector that's grown well beyond its early reputation, a renewable energy build-out that's reshaping the regional grid, an outdoor and recreation industry with real product credibility to protect, and a real estate market spanning mountain and urban development. The sectors below reflect where Denver businesses get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Denver's Energy, Technology and Outdoor Sectors",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Denver Project Moves From Brief to Delivery",
    description:
      "Every Denver project runs through the same production discipline, scoped to fit a technical, product or property subject that has to prove substance, not just look good.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Denver Businesses Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Denver <span>Technology</span>, <span>Energy</span> or{" "}
        <span>Product Story</span> on Screen
      </>
    ),
    text:
      "A renewable energy system, an outdoor product, or a technical platform all need the same thing: a way to prove how they actually work to a buyer who won't just take your word for it. Tell us your subject and audience, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Denver Technology, Energy and Outdoor Brands",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Denver | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Denver building 2D animation, 3D animation, and technical explainer videos for tech, energy, and outdoor brands.",
};

export default function AnimationStudioDenverPage() {
  return <LocationPageTemplate content={denverPageContent} />;
}