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
    "2D animation gives San Francisco technical teams a fast way to explain a product or concept without slowing down a sprint cycle. We build character-led explainers, whiteboard-style breakdowns, and clean vector storytelling for onboarding, investor materials, and technical communication. See our full [2D animation services](/2d-animation-services) for examples.",
  ],
  [
    "3D Animation",
    "3D animation shows a product's interface, architecture or physical form in a level of detail that a skeptical San Francisco buyer or investor actually trusts. We build product visualization, technical animation, and realistic demonstration videos for SaaS, AI, and hardware-adjacent companies. Visit our [3D animation services](/3d-animation-services) page for past work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics turn San Francisco's dense technical data, product metrics, and fundraising narrative into content an investor or enterprise buyer actually retains. We build modular libraries your team can reuse across pitch decks and campaigns. Explore our [motion graphics services](/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video for a San Francisco technical buyer has to survive a viewer who already assumes most claims are exaggerated. We script around the actual mechanism first, then animate to make it unmistakable. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation simplifies a technical concept, an AI model's behavior, or a fintech product structure into a sequence a non-technical stakeholder can follow. It's a format San Francisco teams lean on for investor education and onboarding. See our [whiteboard animation services](/whiteboard-animation-services) for use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a San Francisco brand a moving identity across product launches, investor materials, and social content, reinforcing recognition every time it plays. Check out our [logo animation services](/logo-animation-services) for style options.",
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
    "AI & Machine Learning",
    "San Francisco's AI and machine learning companies use animation to explain what a model actually does, in language precise enough to satisfy a technical audience and clear enough to reach a non-technical investor or buyer at the same time. We build technical explainers that translate model behavior without collapsing into vague industry buzzwords.",
    [
      "Model and technology explainer videos",
      "Technical investor presentation content",
      "Product capability demonstrations",
    ],
  ],
  [
    "SaaS & Enterprise Technology",
    "San Francisco's SaaS and enterprise technology companies use animation to reduce the support burden of a genuinely complex platform, building onboarding content that a technical buyer trusts more than a marketing overview. We build feature explainers and onboarding walkthroughs built for a buyer who reads documentation before taking a demo call.",
    [
      "SaaS product demonstrations",
      "Technical onboarding videos",
      "Feature and platform explainers",
    ],
  ],
  [
    "Fintech & Financial Technology",
    "San Francisco's fintech companies use animation to explain a financial product's structure to investors, regulators, and customers who each need a different depth of accuracy from the same underlying system. We build compliant, precise explainer content that respects the scrutiny a financial product invites.",
    [
      "Financial product explainer videos",
      "Investor and regulatory presentation content",
      "Compliance-conscious onboarding animation",
    ],
  ],
  [
    "Startups & Venture-Backed Companies",
    "San Francisco's venture-backed startups use animation to make a complex idea land inside a single investor meeting, in a city where every investor has already heard a hundred similar pitches this quarter. We build pitch-ready explainers designed to cut through that fatigue with genuine clarity rather than another polished deck.",
    [
      "Investor and pitch deck explainer videos",
      "Product launch announcement videos",
      "Demo day presentation content",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Make the Technology Credible",
    [
      "AI & Model Explainers|An AI company's biggest marketing problem right now is that everyone claims their model is revolutionary. We build explainers that show what a model genuinely does, with enough technical precision that a skeptical engineer trusts it and enough clarity that a non-technical investor follows it.",
      "SaaS & Platform Explainers|San Francisco buyers read the documentation before they'll take a demo call. We animate the platform in motion, walking a real workflow end to end, built to hold up to that level of scrutiny.",
      "Fintech Product Explainers|A fintech product has to satisfy both a compliance reviewer and a customer trying to understand what they're signing up for. We build explainer content precise enough for both audiences at once.",
    ],
  ],
  [
    "Win the Investor Meeting",
    [
      "Pitch Deck Explainer Videos|An investor sitting through their fifth pitch of the day needs the idea to land fast. We build explainer videos designed to make a complex product understandable inside a single meeting, not a follow-up call.",
      "Demo Day & Launch Content|A demo day slot is short, and a founder rehearsing a verbal pitch alone leaves a lot on the table. We build supporting animation that carries part of the story visually, so the founder doesn't have to explain everything out loud.",
      "Data & Metrics Visualization|Growth metrics on a slide convince no one skimming through a deck. We animate traction and performance data into a sequence that actually tells the story the numbers represent.",
    ],
  ],
  [
    "Explain What the Interface Can't",
    [
      "3D Product & Interface Visualization|Some products live entirely inside a screen, and a static screenshot doesn't capture how they actually work. We build 3D and interface visualization that show a product functioning in a way a screenshot never could.",
      "Technical Architecture Animation|A technical buyer evaluating an enterprise platform wants to understand the architecture, not just the marketing summary. We break down system architecture step by step for an audience that actually reads technical documentation.",
      "Data & System Visualization|Complex data flows and system behavior are hard to explain in text alone. We animate how data moves through a system in a sequence a technical audience can verify against what they already know.",
    ],
  ],
  [
    "Onboard and Train at Startup Speed",
    [
      "Customer Onboarding Animation|A SaaS customer who doesn't understand a complex platform in the first session churns before the second one. We build onboarding content that walks a real workflow start to finish, cutting the support tickets that come from confusion.",
      "Internal Team Training|A San Francisco startup scaling headcount fast can't repeat the same onboarding conversation with every new engineer or salesperson. We build training content that covers product and process once, at startup speed.",
      "Investor & Board Education|A board member or new investor joining mid-round needs to get up to speed on a technical product fast. We build education content that brings a new stakeholder current without a lengthy verbal briefing.",
    ],
  ],
  [
    "Launch With Technical Credibility",
    [
      "Product & Feature Launch Videos|A feature launch buried in a changelog gets no attention. We build launch videos that give a release its own moment, sized for a homepage, an email, and a founder's social post at once.",
      "Investor & Board Presentations|A short animated segment inside an investor or board deck holds attention longer than another slide of metrics. We build sequences designed to slot directly into an existing deck.",
      "Conference & Demo Content|A San Francisco tech conference or demo event needs content built for a technically literate audience that's seen a lot of similar pitches. We build event-ready animation sized for that specific bar.",
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
    "We start by identifying the audience, objective, and message, then map the technical detail that actually needs to be accurate versus the detail that can simplify. Getting that distinction right up front is what keeps a technical founder from feeling like their product got flattened.",
    "/discovery.png",
  ],
  [
    "Script & Accuracy Pass",
    "We write the narrative first and run it past your technical team before storyboarding starts, checking that the language holds up against how your engineers actually describe the product.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We lock pacing and visual direction through storyboards before full production begins, giving your team a checkpoint to approve technical accuracy while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved scenes in 2D or 3D, sending progress checkpoints throughout so a fast-moving startup timeline doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one structured revision round, keeping a technically detailed project moving at startup speed instead of stalling on repeated edits.",
    "/animation.png",
  ],
  [
    "Final Review & Delivery",
    "We run a final technical and quality pass, then deliver files ready for a pitch deck, an investor portal, or a public launch.",
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
    "Survive a Skeptical, Technical Audience",
    "Animation lets you control exactly what a viewer sees and in what order, which matters when the audience already assumes most claims are exaggerated.",
  ],
  [
    "Make Complex Technology Genuinely Understandable",
    "A clear technical explainer earns trust faster than marketing language, meaningful for a San Francisco audience that values substance over hype.",
  ],
  [
    "Shorten the Distance to a Term Sheet",
    "A clear product explainer on an investor-facing page shortens the number of follow-up meetings needed before a funding conversation actually starts.",
  ],
  [
    "Reduce Technical Support Burden",
    "Animated onboarding content reduces the support tickets that come from a genuinely complex product being poorly explained.",
  ],
  [
    "Get More From a Startup Marketing Budget",
    "A single animated production resized across a pitch deck, a launch, and a campaign supports multiple moments instead of one, useful when a startup budget has to stretch.",
  ],
  [
    "Improve Retention on Technical Training",
    "Animated training material improves recall over written documentation, which matters directly for onboarding a fast-scaling technical team.",
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
    "How do I choose an animation studio for a technical or AI product?",
    "Ask to see work reviewed by an actual technical team, not just a polished demo reel. A studio that's been through a real accuracy check with a past technical client already understands the process you need.",
  ],
  [
    "What does a technical explainer video cost for a San Francisco startup?",
    "Cost tracks technical complexity more than runtime. A straightforward 2D explainer costs less than a fully rendered 3D interface or architecture animation. We quote a fixed price after understanding your product.",
  ],
  [
    "Can you explain a genuinely complex AI or technical product without oversimplifying it?",
    "Yes, that's specifically the problem most San Francisco clients bring us. We build explainers precise enough to satisfy a technical reviewer while still being clear to a non-technical audience.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most San Francisco technical projects combine both, using 3D for interface or architecture accuracy and 2D for narrative context.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece with technical review can run $8,000 to $40,000 or more for the same length. Technical detail, character count, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for AI and SaaS work?",
    "It depends on the brief, but strong studios consistently show real technical range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for technical and startup work specifically, alongside a handful of other established studios, because accuracy drives how we scope every project.",
  ],
  [
    "Can you turn around an explainer video fast for a funding round or demo day?",
    "Yes, as long as we know the date early. 2D explainer videos generally move faster than 3D projects when a hard fundraising or demo day deadline is already on the calendar.",
  ],
  [
    "Do you work with early-stage San Francisco startups on a limited budget?",
    "Yes. Many of our San Francisco clients are pre-seed or seed-stage teams that need a single strong explainer for fundraising before they have an in-house creative team, and we scope projects to match that stage.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const sanFranciscoPageContent = {
  banner: {
    title: "Animation Studio in San Francisco – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving San Francisco's SaaS platforms, AI companies, fintech startups, and enterprise technology teams with 2D animation, 3D animation, motion graphics, and explainer videos built for a market that evaluates technical claims before it believes them. An AI company explaining what its model actually does beyond the marketing language, a fintech platform walking a regulator or investor through a product, or an enterprise SaaS team launching a feature to a buyer who reads the documentation first, our work is built around one standard: technical credibility that holds up under a genuinely skeptical read.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in San Francisco for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in San Francisco",
    description:
      "San Francisco is arguably the hardest market in the country to oversell a product in, because the audience has usually built something similar themselves or funded ten companies that tried. Animation earns its place here by translating a genuinely technical idea into something a non-technical stakeholder can understand without the technical founder feeling like the nuance got flattened. An AI company uses an explainer video to show what a model actually does, separate from the industry's current wave of inflated claims. A fintech startup uses motion graphics to walk an investor or regulator through a product structure that has to be both compelling and precise. An enterprise SaaS company uses onboarding animation to reduce the technical support burden of a genuinely complex platform. And a startup preparing for a funding round uses a product explainer as the single asset that gets forwarded to every partner meeting. San Francisco businesses don't need animation to look impressive; they need it to survive an audience that already knows what impressive actually requires.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in San Francisco, CA.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and San Francisco's technical, fast-moving client base usually needs more than one working together. An AI product launch might pair a 2D concept explainer with 3D interface visualization; a fintech company might need motion graphics for investor materials alongside a logo refresh. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans AI and SaaS product explainers, fintech motion graphics, enterprise onboarding content, and technical product visualization across 2D and 3D formats, built for a market that reads the fine print.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in San Francisco.",
    description:
      "San Francisco's economy runs on industries where the underlying technology is often more sophisticated than most audiences can follow without help, and a shortcut in the explanation gets noticed immediately. The sectors below reflect where San Francisco businesses get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports San Francisco's Technical and Startup Economy",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a San Francisco Project Moves From Brief to Delivery",
    description:
      "Every San Francisco project runs through the same production discipline, scoped around the technical precision a skeptical audience demands.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What San Francisco Businesses Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your San Francisco <span>Product</span> or{" "}
        <span>Pitch</span> on Screen
      </>
    ),
    text:
      "An AI model, a fintech platform, or an enterprise product all need the same thing: an explanation precise enough to survive a technical, skeptical audience. Tell us your product and the audience it needs to reach, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From San Francisco Tech, AI and Fintech Teams",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in San Francisco | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in San Francisco building 2D animation, 3D animation, and technical explainer videos for AI, SaaS, and fintech teams.",
};

export default function AnimationStudioSanFranciscoPage() {
  return <LocationPageTemplate content={sanFranciscoPageContent} />;
}