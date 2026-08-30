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
    "New York teams reach for [2D animation studio](/2d-animation-services) when a product, campaign or financial concept needs to move from idea to finished asset without a long production cycle. We build character-led explainers, whiteboard-style breakdowns and clean vector storytelling for onboarding, agency campaigns and financial communication, produced at the pace this market's timelines usually demand.",
  ],
  [
    "3D Animation",
    "[3D animation Studio](/3d-animation-services) gives a New York consumer brand or technology company a way to show something functioning or existing with a level of polish this market's audience expects by default. We build product visualization, technical animation, and realistic demonstration videos for finance, fashion, and technology clients who need their work to hold up next to the best commercial production in the country.",
  ],
  [
    "Motion Graphics",
    "[Motion graphics](/motion-graphics) carry a New York brand's identity across advertising, investor materials, social media, and editorial coverage in one consistent visual language, and it's often the format agencies lean on hardest for a fast-moving, multi-channel campaign. We build modular libraries so a marketing team can produce a full campaign kit from a single brief instead of commissioning new work for every channel.",
  ],
  [
    "Explainer Videos",
    "[Animated explainer video services](/animated-explainer-video) built for a New York audience has to earn attention fast, since the city trains every viewer to expect more from their first three seconds. We script around the actual point of confusion first, then animate to make the message unmistakable, for a financial client, a technology buyer, or a fashion customer alike.",
  ],
  [
    "Whiteboard Animation",
    "[Whiteboard animation](/whiteboard-animation-services) gives New York financial and corporate teams a way to simplify a dense product or compliance concept into a sequence a client or new employee can actually follow, without cutting the accuracy a regulated industry demands.",
  ],
  [
    "Logo Animation",
    "A [moving logo](/logo-animation-services) does more for a New York brand than a static one ever could, reinforcing recognition every time it opens a campaign, a pitch deck, or a social post in a market where visual competition never really lets up.",
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
    "Finance & Financial Services",
    "New York's banks, asset managers, and [financial services firms use animation](/finance-animation) to translate dense products and performance data into content a client or regulator can actually follow, in a market where competitors are pitching the same audience daily. We build motion graphics for quarterly reporting and financial product explainers that stay accurate under compliance review while remaining genuinely watchable.",
    [
      "Financial product explainer videos",
      "Quarterly performance motion graphics",
      "Investor and client presentation content",
    ],
  ],
  [
    "Advertising & Media",
    "New York's [advertising agencies](/advertising-animation) and media companies use animation as a production partner for campaigns that need to compete against the best creative talent in the country, often briefing us the way they'd brief an internal team. We build campaign animation and branded content that agencies can present to their own clients with confidence.",
    [
      "Campaign and brand spot animation",
      "Branded content and promotional animation",
      "Agency-to-client production partnership",
    ],
  ],
  [
    "Fashion & Consumer Brands",
    "New York fashion and consumer brands use [ecommerce video production](/ecommerce-video-production) using motion graphics and 3D product animation to launch a collection across social, retail, and editorial coverage at the same time, in a market where the visual bar is set by the fashion industry itself. We build product visualization and campaign motion graphics sized for a full, simultaneous launch.",
    [
      "3D product visualization",
      "Collection and product launch motion graphics",
      "Paid social and editorial campaign assets",
    ],
  ],
  [
    "Technology & Enterprise",
    "New York's growing [technology sector uses animation](/technology-animation) to explain a product to buyers who are also fielding pitches from well-funded competitors across the city. We build onboarding walkthroughs and feature explainers built to hold up to that level of comparison.",
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
    "Explain Financial and Technical Products With Precision",
    [
      "Financial Product Explainers | A New York financial product has to satisfy both a compliance reviewer and a customer trying to understand what they're actually signing up for. We build explainer content precise enough for both audiences at once.",

      "SaaS & Platform Explainers | A New York technology buyer compares vendors across a market with no shortage of well-funded competitors. We animate the platform in motion, walking a real workflow end to end, built to hold up to that comparison.",

      "Service & Agency Overviews | A financial or professional services firm often has no product screen to show, just a process. We visualize that process from intake to delivery, so a prospective client understands exactly what working with your firm involves.",
    ],
  ],
  [
    "Compete in the Most Creative Market in the Country",
    [
      "Campaign & Brand Spot Animation | An agency briefing us on a client campaign expects work that could pass as their own in-house production. We build campaign animation and brand spots scoped and reviewed the same way an internal creative team would handle it.",

      "Fashion & Collection Launch Content | A collection launch needs motion graphics that match the visual standard the fashion industry itself has set. We build campaign content calibrated to that same level of polish.",

      "Brand & Logo Motion | A brand that moves consistently across investor decks, campaigns, and social content reads as more established in a market that rewards visual consistency. We build logo animation and a broader motion system to reinforce that impression.",
    ],
  ],
  [
    "Visualize Complex Financial and Product Data",
    [
      "Quarterly & Performance Data Visualization | A spreadsheet of quarterly numbers convinces no client or board member to sit still on a page. We animate performance data into a sequence that walks a stakeholder through the actual story the numbers tell.",

      "3D Product Visualization | A consumer or technology product's visuals get compared against the best commercial work in the country by default in New York. We build 3D visualization that holds up to that comparison, from every angle, in motion.",

      "Technical & Regulatory Process Animation | A financial or technical process too complex for a paragraph needs a sequence a reviewer can actually follow. We break down multi-step processes so a regulator or investor understands exactly how each stage connects.",
    ],
  ],
  [
    "Train and Onboard at Corporate Scale",
    [
      "Multi-Office Employee Training | A New York organization with multiple offices or floors can't repeat the same training conversation everywhere. We build training content that covers policy and process once, delivered identically across every team.",

      "Customer & Client Onboarding | A client who understands a financial product or technology platform fully has fewer follow-up questions and stays longer. We build onboarding content that walks an audience through complex material clearly.",

      "Compliance & Regulatory Training | Explaining a compliance requirement accurately matters more than making it simple. We build training animation that clarifies complex regulatory material without cutting the substance a reviewer needs to see.",
    ],
  ],
  [
    "Launch and Present at Industry Standard",
    [
      "Product & Collection Launch Videos | A launch in New York's market deserves more than a static announcement. We build launch videos sized for a homepage, an investor update, and a media campaign at once.",

      "Investor & Board Presentations | A short animated segment inside an investor or board deck holds attention longer than another slide of bullet points, even in a market full of polished pitches. We build segments designed to slot directly into an existing deck.",

      "Event & Conference Content | A New York conference, trade show, or investor day needs content built for a sophisticated, comparison-minded audience. We build event-ready animation sized for that specific bar.",
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
    "We start by identifying the audience, objective, and message, then map which stakeholders, compliance, legal, and creative leadership, need to sign off before production begins.",
    "/discovery.png",
  ],
  [
    "Script & Concept Development",
    "We write and lock the narrative before any visual work starts, stress-testing the concept's strength against a market with an unusually high creative bar.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We plan every scene through storyboards and style frames, giving stakeholders a checkpoint to approve structure, accuracy, and creative direction while changes are still cheap.",
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
    "We run a final quality pass across visuals, audio and technical specs, then deliver files ready for a board meeting, a media campaign or a public launch.",
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
    "Compete in the Country's Most Creative Market",
    "Animation gives you control over pacing, tone and visual execution, which matters where the audience has already seen the industry's best work.",
  ],
  [
    "Build Trust With Compliance-Conscious Audiences",
    "A clear, accurate explainer earns trust faster than marketing language alone, meaningful for New York's finance-heavy client base.",
  ],
  [
    "Launch Across Every Channel Simultaneously",
    "A single animated production resized across social, retail, and paid media supports a full, simultaneous New York launch instead of a staggered one.",
  ],
  [
    "Shorten the Distance to a Signed Deal",
    "A clear product explainer shortens the number of follow-up meetings needed before a financial or technology deal actually closes.",
  ],
  [
    "Get More From a Competitive Marketing Budget",
    "A single animated asset repurposed across a campaign supports every channel instead of one, which matters where creative production costs run high.",
  ],
  [
    "Improve Training Outcomes Across a Large Organization",
    "Animated training material improves recall over written documentation, which matters directly for onboarding and compliance training at New York's corporate scale.",
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
    "How do I choose an animation studio for a New York finance or agency project?",
    "Ask to see work that's actually run in market or survived a compliance review, not just a polished reel. A studio that can show real outcomes understands what this market rewards.",
  ],
  [
    "What does branded or financial animation cost in New York?",
    "Cost tracks complexity and creative scope more than anything else. A single 2D financial explainer costs less than a multi-channel 3D campaign kit. We quote a fixed price after understanding your scope.",
  ],
  [
    "Can you work as a production partner for a New York agency without in-house animation capacity?",
    "Yes. This is one of the most common ways New York agencies work with us, briefing us the way they'd brief an internal team and presenting the output as their own to clients.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most New York campaigns combine both depending on the creative concept and audience.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece can run $8,000 to $40,000 or more for the same length. Creative complexity and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for finance and brand work?",
    "It depends on the brief, but strong studios consistently show real range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for finance and brand-adjacent work specifically, alongside a handful of other established studios, because outcomes drive how we scope every project.",
  ],
  [
    "Can animation help a New York financial firm communicate compliance information clearly?",
    "Yes. We regularly build compliance and financial product animation that stays accurate under regulatory review while remaining genuinely watchable for a client audience.",
  ],
  [
    "Can you handle a fast-moving New York fashion or product launch across multiple channels at once?",
    "Yes. We build modular motion graphics libraries specifically designed for a simultaneous multi-channel launch, so one production supports the entire campaign.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const newYorkPageContent = {
  banner: {
    title: "Animation Studio in New York – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving New York's financial institutions, advertising agencies, media companies, fashion brands, and technology firms with 2D animation, 3D animation, motion graphics, and explainer videos built for a market where every industry competes for attention at once. A bank explaining a new product to a client base that reads the fine print, an agency needing a character-led spot for a national campaign, or a fashion brand launching a collection with motion graphics across every channel, our work is built around one standard: creative sharp enough to hold up in a city that sets the pace for nearly every industry it touches.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in New York for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Studio in New York for Businesses",
    description:
      "New York is the one city where finance, media, advertising, fashion, and technology all compete for the same audience's attention within a few city blocks of each other, and that density changes what animation has to accomplish here. A financial institution uses motion graphics to translate dense performance data into something a client actually retains, in a market where every competitor is making the same pitch. An advertising agency uses character-led animation to build a campaign that has to stand out against work produced by some of the best creative talent in the country. A fashion brand uses motion graphics to launch a collection across social, retail and editorial simultaneously, timed to a market that moves in seasons, not quarters. And a New York technology company uses explainer video to sell a product to buyers who are also fielding pitches from a dozen well-funded competitors headquartered a few subway stops away. Businesses here don't use animation as decoration; they use it because the baseline competitive standard in New York is already high.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in New York, NY.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and New York's finance, media, and advertising-heavy client base typically needs more than one working together on a single project. A financial product launch might pair a 2D explainer with motion graphics for investor materials; an agency campaign might need 3D product work alongside a logo animation refresh for a client rebrand. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans financial services motion graphics, agency campaign animation, fashion brand launches, and technology product explainers across 2D and 3D formats, built for a market that expects the best creative in the country by default.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in New York.",
    description:
      "New York's economy is unusually dense with industries that each demand a different kind of creative excellence: finance rewards precision, advertising rewards originality, and fashion rewards visual polish, often within the same client relationship. The sectors below reflect where New York businesses get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports New York's Finance, Media and Fashion Industries?",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a New York Project Moves From Brief to Delivery",
    description:
      "Every New York project runs through the same production discipline, scoped to hold up against a market that rewards both precision and creative polish.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What New York Businesses Get From Animation?",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your New York <span>Campaign</span>, <span>Launch</span> or{" "}
        <span>Pitch</span> Moving
      </>
    ),
    text:
      "A financial product, an agency campaign or a fashion launch all need creative sharp enough to compete in the country's most demanding market. Tell us your concept, audience and timeline, and we'll map the right format and approach.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From New York Finance, Media and Fashion Teams",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in New York | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in New York building 2D animation, 3D animation, and explainer videos for finance, media, and fashion brands.",
};

export default function AnimationStudioNewYorkPage() {
  return <LocationPageTemplate content={newYorkPageContent} />;
}