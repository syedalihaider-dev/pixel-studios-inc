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
    "2D animation gives Toronto financial and technology teams a fast way to explain a product or process without a long production cycle. We build character-led explainers, whiteboard-style breakdowns and clean vector storytelling for onboarding, marketing and corporate communication. See our full [2D animation services](/2d-animation-services) for examples.",
  ],
  [
    "3D Animation",
    "3D animation shows a financial product's structure, a technology platform's architecture, or a healthcare device functioning exactly as intended, which matters for a Toronto audience that expects genuine precision. We build product visualization and technical animation for finance, technology and healthcare clients. Visit our [3D animation services](/3d-animation-services) page for past work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics turn Toronto's dense financial data, corporate reporting and brand messaging into content a client, board or regulator actually retains. We build modular libraries your team can reuse across reporting and campaigns. Explore our [motion graphics services](/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video for a Toronto financial or enterprise buyer has to answer one question clearly: what does this actually do, and can I trust it? We script around that question first, then animate to make it land. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation simplifies a financial product, a technical concept, or a healthcare protocol into a sequence a non-specialist audience can follow. It's a format Toronto finance and healthcare teams lean on for training and client education. See our [whiteboard animation services](/whiteboard-animation-services) for use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a Toronto brand a moving identity across investor materials, campaigns and social content, reinforcing recognition every time it plays. Check out our [logo animation services](/logo-animation-services) for style options.",
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
    "Financial Services",
    "Toronto's banks, asset managers and insurers use animation to translate dense financial products and performance data into content a client or regulator can follow without a background briefing. We build motion graphics for quarterly reporting and product explainers that stay accurate under compliance review while remaining genuinely watchable.",
    [
      "Financial product explainer videos",
      "Quarterly performance motion graphics",
      "Investor and client presentation content",
    ],
  ],
  [
    "Technology & Enterprise Software",
    "Toronto's growing technology sector uses animation to sell into enterprise buyers who compare local vendors against competitors across North America. We build onboarding walkthroughs and feature explainers built to hold up to that comparison.",
    [
      "SaaS product demonstrations",
      "Technical onboarding videos",
      "Feature and platform explainers",
    ],
  ],
  [
    "Media & Communications",
    "Toronto's media and communications organizations use branded animation to extend a property's identity consistently across broadcast, digital, and social platforms. We build branded content and motion graphics matched to an existing creative direction.",
    [
      "Branded content and promotional animation",
      "Platform and campaign motion graphics",
      "Social-first media content",
    ],
  ],
  [
    "Healthcare & Education",
    "Toronto's hospital networks and educational institutions, some of the largest in the country, use animation to standardize training, patient education, and academic communication across large, multi-site organizations. We build training content that delivers identical, accurate information system-wide.",
    [
      "Patient education and training animation",
      "Compliance and protocol content",
      "Academic and research explainers",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Explain Financial and Technical Products With Precision",
    [
      "Financial Product Explainers|A Toronto financial product has to satisfy both a compliance reviewer and a customer trying to understand what they're actually signing up for. We build explainer content precise enough for both audiences at once.",
      "SaaS & Platform Explainers|A Toronto enterprise buyer compares vendors across the entire North American market. We animate the platform in motion, walking a real workflow end to end, built to hold up to that comparison.",
      "Healthcare & Protocol Explainers|Explaining a clinical protocol or healthcare product accurately matters more than making it simple. We build explainer content that clarifies complex medical material without cutting the substance a reviewer needs to see.",
    ],
  ],
  [
    "Build Brand at National Scale",
    [
      "Financial Brand & Campaign Animation|A Toronto financial institution's brand has to read as trustworthy at national scale. We build motion graphics and campaign animation that reinforce that trust consistently across every channel.",
      "Media & Branded Content|A Toronto media organization extending a property into marketing needs content that doesn't feel disconnected from the source. We build branded animation matched to an existing creative direction.",
      "Corporate Brand & Logo Motion|A Toronto corporate brand that moves consistently across investor decks, campaigns, and internal presentations reads as more established. We build logo animation and a broader motion system that reinforces that impression.",
    ],
  ],
  [
    "Visualize Complex Financial and Technical Data",
    [
      "Quarterly & Performance Data Visualization|A spreadsheet of quarterly numbers convinces no board member or client to sit still on a page. We animate performance data into a sequence that walks a stakeholder through the actual story the numbers tell.",
      "3D Product & System Visualization|A financial product structure or a technical platform is hard to understand from a document alone. We build 3D visualization that shows a product or system from every angle, in motion.",
      "Technical Process Animation|A financial, technical, or clinical process too complex for a paragraph needs a sequence an audience can actually follow. We break down multi-step processes so a reviewer understands exactly how each stage connects.",
    ],
  ],
  [
    "Train and Educate at System Scale",
    [
      "Multi-Site Employee Training|Toronto's largest employers can't repeat the same training conversation across every branch, office, or hospital. We build training content that covers policy and process once, delivered identically system-wide.",
      "Client & Patient Education|A client or patient who understands a financial product or medical procedure fully has fewer follow-up questions and better outcomes. We build education content that walks an audience through complex material clearly.",
      "Regulatory & Compliance Animation|Explaining a regulatory requirement accurately matters more than making it simple. We build compliance animation that clarifies complex material without cutting the substance a regulator needs to see.",
    ],
  ],
  [
    "Present and Launch at National Standard",
    [
      "Product & Service Launch Videos|A launch in Canada's largest commercial market deserves more than a press release. We build launch videos sized for a homepage, an investor update, and a media announcement at once.",
      "Investor & Board Presentations|A short animated segment inside an investor or board deck holds attention longer than another slide of bullet points. We build segments designed to slot directly into an existing deck.",
      "Conference & Industry Event Content|A Toronto financial or technology conference needs content built for a sophisticated, comparison-minded audience. We build event-ready animation sized for that specific bar.",
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
    "Discovery & Stakeholder Mapping",
    "We start by identifying the audience, objective, and message, then map which stakeholders- compliance, legal, executive- need to sign off before production begins.",
    "/discovery.png",
  ],
  [
    "Script & Accuracy Pass",
    "We write and lock the narrative before any visual work starts, cross-checking financial, technical, or clinical language against how your team actually describes the product or process.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We plan every scene through storyboards and style frames, giving corporate or clinical stakeholders a checkpoint to approve structure and accuracy while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved animation in 2D or 3D, sending progress checkpoints throughout instead of leaving a stakeholder waiting on one unexplained delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one scoped revision round instead of an open-ended one, keeping the project moving even when feedback comes from multiple departments.",
    "/animation.png",
  ],
  [
    "Final Review & Delivery",
    "We run a final quality and accuracy pass, then deliver files ready for a board meeting, a regulatory submission or a public launch.",
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
    "Meet the Precision Bar of Canada's Largest Market",
    "Animation lets you control exactly what a client, regulator, or investor sees and in what order, which matters in a market that rewards precision over generic polish.",
  ],
  [
    "Build Trust With Compliance-Conscious Audiences",
    "A clear, accurate explainer earns trust faster than marketing language alone, meaningful for Toronto's finance and healthcare-heavy audience.",
  ],
  [
    "Standardize Communication at National Scale",
    "A single training or communication video delivers identical, accurate content across every branch, office, or facility, removing variance across a large organization.",
  ],
  [
    "Compete Against Vendors Across North America",
    "Consistent, high-quality animation gives a Toronto business credibility against competitors evaluated from outside Canada as well as within it.",
  ],
  [
    "Get More From a Corporate Marketing Budget",
    "A single animated production resized across investor materials, campaigns, and training supports multiple audiences instead of one.",
  ],
  [
    "Improve Training and Compliance Retention",
    "Animated training material improves recall over written documentation, which matters directly for compliance and clinical training outcomes.",
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
    "How do I choose an animation studio for financial or technical content in Toronto?",
    "Ask to see work that's been through an actual compliance or technical review, not just a polished reel. That's the process you need for Toronto's more scrutiny-heavy buyers.",
  ],
  [
    "What does an explainer video cost for a Toronto financial or enterprise project?",
    "Cost tracks complexity more than runtime. A straightforward 2D explainer costs less than a fully rendered 3D product or system animation requiring technical review. We quote a fixed price after understanding your project.",
  ],
  [
    "Can animation help a Toronto financial institution communicate compliance information clearly?",
    "Yes. We regularly build compliance and financial product animations that stay accurate under regulatory review while remaining genuinely watchable for a client audience.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Toronto financial and technical projects combine both, using 3D for accuracy and 2D for narrative context.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece with technical or compliance review can run $8,000 to $40,000 or more for the same length. Technical detail, character count, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for financial and enterprise work?",
    "It depends on the brief, but strong studios consistently show real range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for financial and enterprise work specifically, alongside a handful of other established studios, because accuracy drives how we scope every project.",
  ],
  [
    "Can you support a Toronto organization with locations across multiple provinces?",
    "Yes. We build training and communication animation specifically designed to deliver identical, accurate content across every branch, office, or facility, regardless of province.",
  ],
  [
    "Do you work with Toronto businesses competing against vendors based outside Canada?",
    "Yes. Many Toronto clients come to us specifically because their buyers are comparing local options against vendors across North America, and consistent, high-quality animation matters in that comparison.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const torontoPageContent = {
  banner: {
    title: "Animation Studio in Toronto – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Toronto's financial institutions, technology companies, media organizations, and healthcare networks with 2D animation, 3D animation, motion graphics, and explainer videos built for Canada's largest and most competitive business market. A bank explaining a new financial product to a compliance-conscious customer, a technology company launching a platform to an enterprise buyer, or a hospital network standardizing training across the country's biggest healthcare system, our work is built around a shared need: content precise enough to hold up in Canada's most demanding commercial centre.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Toronto for 2D & 3D Animation Services",
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
    heading: "2D & 3D Animation Services for Businesses in Toronto",
    description:
      "Toronto is Canada's financial and corporate centre, home to the country's largest banks, a fast-growing technology sector, major media organizations and some of the largest healthcare networks in North America, and businesses here operate at a scale and level of scrutiny that a smaller Canadian market doesn't demand. A bank or financial institution uses motion graphics to explain a product or quarterly performance to a client base that expects both polish and precision. A Toronto technology company uses an explainer video to sell to enterprise buyers who compare it against competitors on both sides of the border. A media organization uses branded animation to extend a property's identity across platforms. And a healthcare network spanning multiple hospitals uses training animation to standardize a protocol update across a system serving millions of patients. Toronto businesses use animation because the market here rewards precision and scale, not a generic approach borrowed from a smaller city.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Toronto, ON.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Toronto's finance and enterprise-heavy client base usually needs more than one working together. A financial product launch might pair a 2D explainer with motion graphics for investor materials; a technology company might need 3D product visualization alongside a logo refresh. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans financial services motion graphics, technology product explainers, media branded content and healthcare training animation across 2D and 3D formats, built for Canada's largest commercial market.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Toronto.",
    description:
      "Toronto's status as Canada's financial and corporate capital shapes what businesses here actually need from animation: precision at scale, not a generic small-market approach. The sectors below reflect where Toronto businesses get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Toronto's Financial, Technology and Healthcare Sectors",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Toronto Project Moves From Brief to Delivery",
    description:
      "Every Toronto project runs through the same production discipline, scoped around the precision and scale this market's audience expects.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Toronto Businesses Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Toronto <span>Financial</span>,{" "}
        <span>Technology</span> or <span>Healthcare</span> Story on Screen
      </>
    ),
    text:
      "A financial product, an enterprise platform or a healthcare protocol all need the same thing: an explanation precise enough to hold up in Canada's most demanding commercial market. Tell us your subject and audience, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Toronto Finance, Technology and Healthcare Teams",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Toronto | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Toronto building 2D animation, 3D animation, and corporate explainer videos for finance, tech, and healthcare teams.",
};

export default function AnimationStudioTorontoPage() {
  return <LocationPageTemplate content={torontoPageContent} />;
}