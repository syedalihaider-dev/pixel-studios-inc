import LocationPageTemplate from "@/components/Common/LocationPageTemplate";
import parseLinks from "@/utils/parseLinks";
import Link from "next/link";

const images = [
  "/game-development/game-concept.png",
  "/game-development/game-01.png",
  "/game-development/game-02.png",
];

const services = [
  [
    "2D Animation",
    "Miami brands turn to [2D animation studios](/2d-animation-services) when a concept, amenity list, or campaign idea needs to move fast, without the longer production timeline a full 3D build requires. We build character-led explainers, whiteboard-style breakdowns, and clean vector storytelling for marketing, onboarding, and hospitality content.",
  ],
  [
    "3D Animation",
    "3D visualization is how Miami real estate developers and hospitality brands sell a property or experience before it exists, showing a tower, a residence or a resort exactly as it will look and function from every angle. [Top rated 3d Animation agency ](/3d-animation-services) build architectural visualization, product animation, and realistic demonstration videos calibrated to the visual standard this market expects.",
  ],
  [
    "Motion Graphics",
    "A Miami luxury or hospitality brand relies on [motion graphics](/motion-graphics) to carry its identity consistently across advertising, investor materials, and social media, especially when a campaign needs to run in more than one language for an international audience. We build modular libraries so a marketing team can produce a full campaign kit from a single brief.",
  ],
  [
    "Explainer Videos",
    "[High-quality explainer video](/animated-explainer-video) built for Miami's international buyer base has to communicate clearly regardless of a viewer's first language, leaning on strong visual storytelling rather than dense narration alone. We script around the core concept first, then animate to make it land.",
  ],
  [
    "Whiteboard Animation",
    "[Whiteboard animation videos](/whiteboard-animation-services) simplifies a financial product, a property amenity package or a technical concept into a sequence a bilingual audience can follow without relying entirely on spoken language.",
  ],
  [
    "Logo Animation",
    "A moving logo animation with the neon effects  gives a Miami brand a level of polish that matches the properties and experiences it represents, reinforcing recognition every time it opens a campaign, an investor deck, or a social post just how amazingly GTA 6 leonida looks at the night.",
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
    "[Miami real estate developers use 3D visualization](/real-estate-animation) to market a waterfront tower, a luxury residence, or a mixed-use development before construction finishes, giving international buyers and investors a walkthrough of a space that only exists as architectural plans. We build property visualizations that make a pre-construction listing credible enough to secure commitment from buyers evaluating the property from another country.",
    [
      "3D property visualization and walkthroughs",
      "Pre-construction marketing animation",
      "International investor and buyer presentation content",
    ],
  ],
  [
    "Hospitality & Tourism",
    "Miami's hospitality brands and tourism-driven businesses use [branded animation](/advertising-animation) to sell an experience, a resort, a restaurant, an event venue, before a guest ever arrives. We build branded content that captures a property's atmosphere and amenities in a way photography alone often can't.",
    [
      "Property and experience branded content",
      "Pre-opening marketing animation",
      "Seasonal and event campaign content",
    ],
  ],
  [
    "Luxury Retail & Consumer Brands",
    "Miami's luxury retailers and consumer brands use motion graphics and 3D product animation to launch campaigns built for an international, often bilingual customer base spanning South Florida, Latin America, and beyond. We build [product visualization](/ecommerce-video-production) and campaign motion graphics sized for a multilingual, multi-market launch.",
    [
      "3D product visualization",
      "Multilingual campaign motion graphics",
      "Retail and social launch assets",
    ],
  ],
  [
    "Finance & International Business",
    "Miami's finance companies and international business services firms use [fintech animation](/fintech-animation) to explain a product or service to clients who often split time between multiple countries and expect the same level of polish wherever they encounter the brand. We build explainer content built for an audience that compares Miami firms against international competitors, not just local ones.",
    [
      "Financial product explainer videos",
      "International client presentation content",
      "Cross-border service overview animation",
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
      "Pre-Construction Property Visualization | A property that only exists as architectural plans is a hard sell without a way to show it. We build [3D visualization](/3d-modeling-services) that walks international buyers and investors through a space months or years before completion.",

      "Resort & Experience Visualization | A hospitality concept is difficult to sell from a floor plan or a mood board alone. We animate the guest experience itself, showing a space and its atmosphere before a single guest arrives.",

      "Development & Infrastructure Visualization | A large-scale development is hard to picture from a site plan alone. We build visualizations that show a project's scope and function before ground is broken.",
    ],
  ],
  [
    "Market to an International Audience",
    [
      "Multilingual Campaign Animation | A campaign built for Miami's international customer base has to work across more than one language and cultural context. We build motion graphics designed around strong visual storytelling that doesn't rely entirely on narration to land the message.",

      "Luxury Brand & Hospitality Content | A luxury brand's marketing has to match the actual standard of the physical experience it's selling.We build branded animation calibrated to that same level of polish.",

      "Investor & International Buyer Presentations | A short animated segment inside an investor or buyer presentation holds attention longer than another slide of specifications, especially for a buyer evaluating a property from abroad. We build segments designed to slot directly into an existing deck.",
    ],
  ],
  [
    "Visualize Scale and Quality",
    [
      "3D Property & Development Visualization | A large development is hard to understand from a site plan alone. We build 3D visualization that shows a full development from every angle, in motion, before it's built.",

      "Materials & Amenity Detail Animation | The finishes and amenities that justify a premium price point are often lost in a rendering. We animate the specific details that make a Miami property or experience genuinely distinctive.",

      "Data & Investment Visualization | Investment and performance data convinces no one sitting in a spreadsheet. We animate data into a sequence that walks an investor through the actual story behind the numbers.",
    ],
  ],
  [
    "Communicate Across Languages and Markets",
    [
      "Bilingual Onboarding & Training | A Miami business serving a bilingual customer base can't rely on a single-language training or onboarding video to reach everyone. We build onboarding content designed with visual clarity that supports more than one language.",

      "Customer & Guest Education | A customer or guest who understands what to expect from a property or service has a better experience and fewer follow-up questions. We build education content that walks an audience through complex material clearly, regardless of first language.",

      "Cross-Border Client Communication | Explaining a financial or service offering to a client based in another country requires content that travels well across markets. We build explainer content for exactly that kind of audience.",
    ],
  ],
  [
    "Launch and Present at International Standard",
    [
      "Property & Experience Launch Videos | A property or hospitality launch deserves more than a static announcement. We build launch videos sized for a sales gallery, an investor roadshow, and a digital campaign at once.",

      "Investor & Partner Presentations | A short animated segment inside an investor or partner deck holds attention longer than another slide of bullet points. We build segments designed to slot directly into an existing deck.",

      "Event & Exhibition Content | A property launch event, exhibition, or investor roadshow needs content built for the specific room and audience it's shown to. We build event-ready animation sized for that format.",
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
    "Discovery & Audience Scoping",
    "We start by identifying the audience, objective, and message, then map the languages and markets the finished piece needs to work across before anything ships.",
    "/discovery.png",
  ],
  [
    "Script & Concept Development",
    "We write and lock the narrative and creative concept before any visual work starts, making sure the concept matches the level of polish this market expects by default.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We plan every scene through storyboards and style frames, giving developers, brand teams, or stakeholders a checkpoint to approve accuracy and creative direction while changes are still cheap.",
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
    "We run a final quality pass across visuals, audio, and technical specs, then deliver files ready for a sales gallery, an investor roadshow, or a digital campaign.",
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
    "3D visualization lets a developer secure commitment on a property that only exists as a plan, which is often how deals close in Miami's pre-construction market.",
  ],
  [
    "Match an International Standard of Polish",
    "Consistent, high-production animation meets the visual standard Miami's international buyers and guests already expect from properties and experiences abroad.",
  ],
  [
    "Communicate Across Languages and Markets",
    "Visually driven animation travels better across a bilingual or multinational audience than narration-heavy content alone.",
  ],
  [
    "Build Credibility With International Investors",
    "Clear, credible visualization gives a Miami project credibility with buyers and investors evaluating it from outside the region.",
  ],
  [
    "Get More From a Luxury Marketing Budget",
    "A single animated production resized across a sales gallery, a roadshow, and a digital campaign supports several touchpoints instead of one.",
  ],
  [
    "Improve Guest and Client Understanding",
    "Animated content improves comprehension of scale, amenities, and service offerings over a brochure or floor plan alone.",
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
    "How do I choose an animation studio for a Miami real estate or hospitality project?",
    "Ask to see 3D visualization work specifically, not just 2D marketing content. Pre-construction and hospitality visualization requires a different level of production quality than a general explainer video.",
  ],
  [
    "What does 3D property visualization cost for a Miami development?",
    "Cost depends on scale, detail level, and number of units or spaces visualized. A single residence costs less than a full mixed-use development. We quote a fixed price after understanding your project scope.",
  ],
  [
    "Can you build campaigns that work for a bilingual or international audience?",
    "Yes. We regularly build motion graphics and explainer content designed around strong visual storytelling that works across languages, not just narration built for a single-language audience.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Miami real estate and hospitality projects rely heavily on 3D, often paired with 2D or motion graphics for supporting marketing materials.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D property or hospitality animation can run $8,000 to $40,000 or more for the same length. Detail level, scale, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for real estate and hospitality visualization?",
    "It depends on the brief, but strong studios consistently show real 3D range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for real estate and hospitality visualization specifically, alongside a handful of other established studios, because precision drives how we scope every project.",
  ],
  [
    "Can you visualize a large-scale development, not just a single property?",
    "Yes. We regularly build visualizations for full communities, mixed-use developments, and resort properties, not just individual units or buildings.",
  ],
  [
    "Do you work with international buyers evaluating a Miami property from abroad?",
    "Yes. Much of our Miami real estate work is built specifically for buyers and investors evaluating a property remotely, before ever visiting in person.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const sanFranciscoPageContent = {
  banner: {
    title: "Animation Studio in Miami – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Miami's real estate developers, hospitality brands, luxury retailers, and finance companies with 2D animation, 3D animation, motion graphics, and explainer videos built for a market shaped by international buyers, seasonal tourism, and a real estate pipeline that rarely slows down. Whether it's a developer marketing a waterfront tower before construction finishes, a hospitality brand launching a resort experience, or a luxury retailer building a campaign for a bilingual customer base, our work is built around one goal: visual quality that matches the standard of the properties, products, and experiences it's selling.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Miami for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Studio in Miami for Business",
    description:
      "Miami's economy runs on industries that sell an experience as much as a product; luxury real estate, hospitality, high-end retail, and a finance sector built around serving an international client base that expects the same polish here as anywhere else they do business. A real estate developer uses 3D visualization to market a waterfront property to buyers and investors months before a single unit is finished. A hospitality brand uses branded animation to sell a resort or restaurant experience before a guest ever books a reservation. A luxury retailer uses motion graphics to launch a campaign built for a genuinely bilingual, international customer base, not a single-language market. And a Miami finance company uses an explainer video to communicate a product to clients who split their time between multiple countries. Miami businesses use animation because the market rewards visible quality, and buyers here are used to comparing against the best property, hospitality, and retail experiences internationally, not just locally.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Miami, FL.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Miami's real estate and hospitality-heavy client base usually needs more than one working together. A property launch might pair 3D architectural visualization with motion graphics for an investor roadshow; a hospitality brand might need branded video content alongside a logo animation for a new property. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans pre-construction real estate visualization, hospitality branded content, luxury retail campaigns, and finance sector explainers across 2D and 3D formats, built for a market that compares itself against international standards.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Miami.",
    description:
      "Miami's economy is built around industries that sell an experience alongside a product, real estate, hospitality, luxury retail, and international finance, each shaped by a genuinely global, often bilingual customer base. The sectors below reflect where Miami businesses get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports San Francisco's Technical and Startup Economy",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Miami Project Moves From Brief to Delivery?",
    description:
      "Every Miami project runs through the same production discipline, scoped to fit a real estate, hospitality, or luxury subject that has to match an international standard of visual quality.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Miami Businesses Get From Animation?",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Miami Property <span>Brand</span> or{" "}
        <span>Launch</span> on Screen
      </>
    ),
    text:
      "A pre-construction tower, a hospitality concept, or a luxury retail campaign all need the same thing: visual quality that matches an international standard. Tell us your project and audience, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Miami Real Estate, Hospitality and Luxury Brands",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Miami | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Miami building 2D animation, 3D animation, and property visualization for real estate and hospitality brands.",
};

export default function AnimationStudioSanFranciscoPage() {
  return <LocationPageTemplate content={sanFranciscoPageContent} />;
}