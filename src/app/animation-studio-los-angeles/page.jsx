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
    "2D animation gives Los Angeles agencies and brands a fast, flexible way to build character-led campaigns, branded content and social-first storytelling without a long production cycle. We build explainers, brand spots and vector-based storytelling for campaigns that need to move fast. See our full [2D animation services](/2d-animation-services) for examples.",
  ],
  [
    "3D Animation",
    "3D animation shows a product, a brand world, or a piece of branded content with a level of polish Los Angeles clients expect by default. We build product visualization, character work, and realistic demonstration animation for consumer brands and entertainment-adjacent companies. Visit our [3D animation services](/3d-animation-services) page for past work.",
  ],
  [
    "Motion Graphics",
    "Motion graphics carry a Los Angeles brand or campaign across advertising, social media, and streaming platforms in one consistent visual language. We build modular libraries so your agency or brand team can produce a full campaign kit from a single brief. Explore our [motion graphics services](/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video for a Los Angeles brand or platform has to entertain as much as it explains, or it gets scrolled past. We script for the hook first, then the message, producing content built for a market with a short attention span and a high bar. Learn more on our [explainer video services](/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation simplifies a product or campaign concept into a format that's easy to pitch internally or present to a client, before committing to a larger production. See our [whiteboard animation services](/whiteboard-animation-services) for use cases.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a Los Angeles brand a moving identity across intros, streaming pre-rolls, and social content, replacing a static mark with a few seconds that reinforce recognition. Check out our [logo animation services](/logo-animation-services) for style options.",
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
    "Advertising & Creative Agencies",
    "Los Angeles advertising and creative agencies use us as a production partner for animated work they don't have in-house capacity to build, briefing us the way they'd brief an internal team and trusting the output to hold up in front of their own clients. We build campaign animation, character spots and branded content that agencies can present as their own work with confidence.",
    [
      "Campaign and brand spot animation",
      "Character-led advertising content",
      "Agency-to-client production partnership",
    ],
  ],
  [
    "Streaming & Entertainment",
    "Los Angeles streaming platforms and entertainment-adjacent companies use branded animated content to extend a show, film, or platform's identity into marketing without it looking disconnected from the source material. We build branded content and promotional animation that respects the creative bar an entertainment audience expects.",
    [
      "Branded content and promotional animation",
      "Platform and title marketing animation",
      "Social-first entertainment content",
    ],
  ],
  [
    "Consumer Brands & Retail",
    "Los Angeles consumer brands use motion graphics and 3D product animation to launch across social, retail, and paid media at the same time, in a market where the visual bar is set unusually high. We build product visualization and campaign motion graphics sized for a full, simultaneous launch.",
    [
      "3D product visualization",
      "Product launch motion graphics",
      "Paid social and retail campaign assets",
    ],
  ],
  [
    "Technology & Media",
    "Los Angeles technology and media companies, many operating at the intersection of entertainment and software, use animation to explain products to an audience that expects the same creative polish as the content they consume. We build onboarding and platform explainers that don't read as a step down in quality from the rest of a company's brand.",
    [
      "SaaS and platform explainers",
      "Onboarding and feature animation",
      "Brand and campaign motion graphics",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Deliver Work That Holds Up to Industry Scrutiny",
    [
      "Campaign & Brand Spot Animation|An agency briefing us on a client campaign expects work that could pass as their own in-house production. We build campaign animation and brand spots scoped and reviewed the same way an internal creative team would handle it.",
      "Character-Led Advertising Content|A character-driven spot has to be genuinely memorable in a market full of memorable work. We build character animation designed to carry a campaign's personality, not just illustrate its message.",
      "Branded Entertainment Content|A streaming platform or entertainment brand extending its world into marketing needs content that doesn't feel like an afterthought. We build branded animation that respects the tone and visual language of the source material.",
    ],
  ],
  [
    "Launch Across Every Channel at Once",
    [
      "Product Launch Motion Graphics|A Los Angeles consumer brand launch usually needs to hit social, retail, and paid media simultaneously. We build modular motion graphics libraries sized for every channel from a single production.",
      "Social-First Animated Content|Content built for a Los Angeles social audience has to earn attention in the first second, or it's gone. We build short-form animated content designed around that exact constraint.",
      "Retail & Paid Campaign Animation|A paid campaign competing against the best creative in the country needs a genuine hook, not just competent execution. We build animated ad content built to actually stop a scroll.",
    ],
  ],
  [
    "Show Products and Worlds With Real Polish",
    [
      "3D Product Visualization|A Los Angeles consumer brand's product visuals get compared against the best commercial work in the market by default. We build 3D visualization that holds up to that comparison, from every angle, in motion.",
      "Brand World & Environment Animation|A brand or platform with a distinct visual identity needs animation that extends that world convincingly, not a generic stock look. We build environment and world-building animation matched to an existing creative direction.",
      "Technical & Platform Animation|A technology or media platform still needs its product explained clearly, even inside a market obsessed with style. We break down how a platform works without sacrificing the visual polish the brand demands.",
    ],
  ],
  [
    "Support Agencies and In-House Teams",
    [
      "Agency Production Partnership|An agency without in-house animation capacity needs a partner they can brief once and trust completely with client work. We integrate into an agency's existing creative process rather than requiring them to adapt to ours.",
      "Internal Brand & Marketing Training|A growing Los Angeles brand or platform still needs internal training and onboarding content, even while its external marketing gets all the attention. We build training animation with the same visual quality bar as external work.",
      "Pitch & Concept Animation|An agency pitching a client on an animated concept needs something more convincing than a storyboard. We build early concept animation that helps win the pitch before full production even starts.",
    ],
  ],
  [
    "Present and Launch With Impact",
    [
      "Platform & Title Launch Videos|A streaming title or platform launch deserves content built specifically for that moment, not a repurposed trailer cut. We build launch videos sized for a platform's own channels and paid media at once.",
      "Investor & Partner Presentations|A short animated segment inside an investor or partner deck holds attention longer than another slide of bullet points, even in a market full of polished pitches. We build segments designed to slot directly into an existing deck.",
      "Event & Premiere Content|A launch event, premiere, or industry conference needs content built for the specific room and audience it's shown to. We build event-ready animation sized for the format and moment.",
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
    "Discovery & Creative Scoping",
    "We start by identifying the audience, objective, and creative direction, mapping which stakeholders- an agency's client, a brand's internal team- need to sign off before production begins.",
    "/discovery.png",
  ],
  [
    "Script & Concept Development",
    "We write and lock the narrative and creative concept before any visual work starts, stress-testing the idea's strength for this specific market before committing to a direction.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Style Frames",
    "We plan every scene and lock the visual direction through storyboards and style frames, giving you or your client a checkpoint to approve the creative direction while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved animation in 2D or 3D, sending progress checkpoints throughout so a multi-week production doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover, music and sound design, then open one scoped revision round rather than an open-ended one, keeping a creative project moving toward delivery.",
    "/animation.png",
  ],
  [
    "Final Review & Delivery",
    "We run a final quality pass across visuals, audio and technical specs, then deliver files ready for a campaign launch, a platform premiere or a client presentation.",
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
    "Compete With the Best Creative in the Market",
    "Animation gives you control over pacing, tone and visual execution, which matters in a market where the audience has already seen the industry's best work.",
  ],
  [
    "Extend Brand or Platform Identity Convincingly",
    "Consistent motion branding across campaigns and platforms builds recognition more effectively than static graphics, especially where an audience expects visual consistency from entertainment-caliber brands.",
  ],
  [
    "Launch Across Every Channel Simultaneously",
    "A single animated production resized across social, retail, and paid media supports a full, simultaneous Los Angeles launch instead of a staggered one.",
  ],
  [
    "Give Agencies a Trusted Production Partner",
    "A reliable outside animation partner lets an agency take on more animated work without building in-house capacity or risking client-facing quality.",
  ],
  [
    "Get More From a Competitive Marketing Budget",
    "A single animated asset repurposed across a campaign supports every channel instead of one, which matters in a market where creative production costs run high.",
  ],
  [
    "Improve Audience Retention on Content-Heavy Platforms",
    "Animated content earns higher completion rates than static content, meaningful for entertainment and streaming platforms competing for a viewer's limited attention.",
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
    "How do I choose an animation studio for a Los Angeles agency or brand campaign?",
    "Ask to see work that's actually run in market, not just a demo reel. A studio that can show a campaign that performed, not just looked good in a pitch, understands what this market actually rewards.",
  ],
  [
    "What does branded or campaign animation cost in Los Angeles?",
    "Cost tracks creative complexity and channel count more than anything else. A single social-first 2D spot costs less than a multi-channel 3D campaign kit. We quote a fixed price after understanding your creative scope.",
  ],
  [
    "Can you work as a production partner for an agency without in-house animation capacity?",
    "Yes. This is one of the most common ways Los Angeles agencies work with us, briefing us the way they'd brief an internal team and presenting the output as their own to clients.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Los Angeles campaigns combine both depending on the creative concept and channel mix.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece can run $8,000 to $40,000 or more for the same length. Creative complexity, character count, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for entertainment and brand work?",
    "It depends on the brief, but strong studios consistently show real creative range, a discovery process ahead of pricing, in-house production, and verifiable campaign outcomes rather than vague praise. Pixel Studios Inc. is regularly named among the stronger options for brand and entertainment-adjacent work specifically, alongside a handful of other established studios, because outcomes drive how we scope every project.",
  ],
  [
    "Do you build trailer or title sequence animation for film and games?",
    "That specialized work sits on our dedicated Hollywood and Burbank pages, since trailer and title production has its own production standards. This Los Angeles page covers our broader agency, brand and platform animation work.",
  ],
  [
    "Can you handle a Los Angeles product launch across social, retail and paid media at once?",
    "Yes. We regularly build modular motion graphics libraries specifically designed for a simultaneous multi-channel launch, so one production supports the entire campaign.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const losAngelesPageContent = {
  banner: {
    title: "Animation Studio in Los Angeles – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Los Angeles advertising agencies, streaming platforms, consumer brands, and entertainment-adjacent companies with 2D animation, 3D animation, motion graphics, and branded content built for campaigns that have to compete in the most saturated creative market in the country. An agency needing a character-led spot for a national campaign, a streaming platform building branded content around a new release, or a consumer brand launching a product with motion graphics across every channel at once, our work is built around a single standard: creative that survives the scrutiny of an industry that makes creative for a living.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Los Angeles for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in Los Angeles",
    description:
      "Los Angeles is the one market where every client has already seen the best creative in the industry, which changes what animation has to do here. An advertising agency doesn't need a video that looks fine; it needs one that holds up next to work from competitors who make ads for a living. A streaming platform launching a new title uses branded animated content to extend a show or film's world into marketing without looking like an afterthought. A consumer brand uses motion graphics to launch a product across social, retail, and paid media simultaneously, in a city where the audience's bar for visual quality is set by the entertainment industry itself. A creative agency without in-house animation capacity uses us as a production partner they can brief once and trust with client-facing work. Los Angeles businesses don't use animation because it's novel; they use it because the market has trained every viewer to expect it done well.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Los Angeles, CA.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Los Angeles agencies and brands typically need more than one working together on a single campaign. A brand launch might pair 2D character animation with motion graphics for paid social; an agency might need 3D product work alongside a logo animation refresh for a client rebrand. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans branded content for entertainment platforms, consumer product launches, agency campaign work, and character-led storytelling across 2D and 3D formats, built for a market where the audience already knows what good looks like.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Los Angeles.",
    description:
      "Los Angeles's economy runs on industries built around creative output itself, which means the animation these businesses need has to compete with work made by people whose entire job is making things look good. The sectors below reflect where Los Angeles businesses get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Los Angeles Agencies, Brands and Platforms",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Los Angeles Project Moves From Brief to Delivery",
    description:
      "Every Los Angeles project runs through the same production discipline, scoped to hold up against a market that reviews creative work for a living.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Los Angeles Businesses Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Los Angeles <span>Campaign</span> or{" "}
        <span>Launch</span> Moving
      </>
    ),
    text:
      "An agency campaign, a platform launch, or a consumer product rollout all need creative that holds up in the most scrutinized market in the country. Tell us your concept, audience, and timeline, and we'll map the right format and approach.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Los Angeles Agencies, Brands and Platforms",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Los Angeles | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Los Angeles building 2D animation, 3D animation, and branded content for agencies, brands, and platforms.",
};

export default function AnimationStudioLosAngelesPage() {
  return <LocationPageTemplate content={losAngelesPageContent} />;
}