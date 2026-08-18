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
    "[2D animation services](/2d-animation-services) gives Chicago B2B companies a fast, budget-conscious way to explain a service or process without a long production cycle. We build character-led explainers, whiteboard-style breakdowns and clean vector storytelling for sales enablement, onboarding and internal training.",
  ],
  [
    "3D Animation",
    "[3D animation services](/3d-animation-services) show industrial equipment, manufactured products and technical systems doing exactly what they're built to do, which carries more weight with a Chicago procurement team than a photo or a spec sheet ever could. We build product visualization, technical animation and realistic demonstration videos for manufacturing and industrial clients.",
  ],
  [
    "Motion Graphics",
    "[Motion graphics services](/motion-graphics) turn Chicago's dense corporate data, financial reporting, and brand messaging into content a board or client actually retains, across investor decks, trade show materials, and internal communications. We build modular libraries your team can reuse quarter after quarter.",
  ],
  [
    "Explainer Videos",
    "An [explainer video](/animated-explainer-video) for a Chicago B2B audience has to survive a skeptical, detail-oriented viewer, someone evaluating a vendor rather than browsing casually. We script around the exact objection or point of confusion first, then animate to resolve it.",
  ],
  [
    "Whiteboard Animation",
    "[Whiteboard animation](/whiteboard-animation-services) breaks a complicated service offering or technical process into a sequence a procurement committee or new employee can follow without a live walkthrough. It's a format Chicago professional services and manufacturing firms lean on for sales enablement and internal training.",
  ],
  [
    "Logo Animation",
    "Chicago businesses can use [logo animation services](/logo-animation-services) to bring a consistent sense of movement to their trade show displays, investor decks, and internal presentations, helping audiences recognize and remember the brand across every touchpoint.",
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
    "B2B & Professional Services",
    "Chicago’s B2B and professional services firms—including law firms, consultancies, and agencies—use animation to explain complex services in a way prospective clients can quickly understand. Our [legal animation services](/legal-graphics-animation) help law firms present complicated cases and legal concepts clearly, while our service explainers and capability videos give decision-makers something more engaging than a dense proposal deck to review before the first meeting.",
    [
      "Service and capability explainer videos",
      "Sales enablement animation",
      "Client onboarding content",
    ],
  ],
  [
    "Financial Services",
    "Chicago's banks, asset managers, and insurance firms use [animation to translate dense financial products](/finance-animation) and performance data into content that a client or regulator can follow without a background briefing. We build motion graphics for quarterly reporting, product explainers for new financial offerings, and investor materials that stay accurate under compliance review while remaining genuinely watchable.",
    [
      "Financial product explainer videos",
      "Quarterly performance motion graphics",
      "Investor and client presentation content",
    ],
  ],
  [
    "Manufacturing & Industrial",
    "Chicago's manufacturers and industrial suppliers use animation to show equipment and processes functioning in ways a photo, a spec sheet, or a site visit can't always achieve, especially when a buyer is evaluating multiple vendors from a distance. We build [technical process animation](/manufacturing-animation) and 3D product visualization that gives a procurement team confidence before a purchase order gets signed.",
    [
      "Equipment and process animation",
      "3D product visualization",
      "Technical sales presentation content",
    ],
  ],
  [
    "Corporate Communications & Enterprise",
    "Large Chicago corporations use animation to keep internal communication consistent across departments and offices, turning a policy change, a leadership update, or a quarterly result into something employees actually engage with instead of skimming past in an email. We build internal communication videos and motion graphics that respect a corporate audience's limited attention while still landing the message.",
    [
      "Internal communication videos",
      "Corporate announcement animation",
      "Leadership and quarterly update content",
    ],
  ],
  [
    "Logistics & Supply Chain",
    "Chicago's position as a national logistics hub means many local companies manage supply chain processes too complex to explain in a paragraph or a static diagram. We build [logistics process animation](/logistics-animation) that walks a client, partner, or internal team through a multi-step supply chain or fulfillment operation clearly enough to answer questions before they get asked.",
    [
      "Supply chain process animation",
      "Operations and fulfillment explainers",
      "Partner and vendor onboarding content",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Win the First Meeting",
    [
      "Product & Platform Explainers|A Chicago procurement contact evaluating three vendors reads the explainer before they ever take your call. We build [product animation](/3d-product-animation) and platform explainers that answer the core question a skeptical buyer actually has, timed to land inside two minutes so it gets watched all the way through before your competitor does.",
      "SaaS & Software Walkthroughs|Software value gets lost in a static screenshot, especially with a technical B2B buyer who wants to see the workflow, not read about it. We animate your platform in motion, walking a real use case end to end, built to survive a second viewing when a stalled prospect forwards it to a colleague.",
      "Professional Service Overviews|A law firm, consultancy, or agency often has nothing visual to show, just a process. We visualize that process from intake to delivery, so a prospective client understands exactly what retaining your firm actually involves before the first scoping call.",
    ],
  ],
  [
    "Build a Brand That Reads as Serious",
    [
      "LinkedIn & Trade Media Animation|A Chicago B2B audience scrolls LinkedIn and trade publications differently than a consumer feed, with less patience for anything that reads as fluff. We build short-form [social animated content](/social-media-animation) built for that specific skepticism, communicating one credible idea fast instead of chasing a viral moment.",
      "Account-Based Advertising Animation|A targeted account-based campaign only works if the creative respects how deliberately a B2B buyer evaluates a vendor. We build [animated commercials](/animated-commercials-services) content sized for the specific platforms your target accounts actually use, with messaging built around a real business problem, not a generic hook.",
      "Corporate Brand & Logo Motion|A corporate brand that moves consistently across trade show materials, investor decks, and internal presentations reads as more established than one that doesn't. We build logo animation and a broader motion system that reinforces that impression every time your mark appears.",
    ],
  ],
  [
    "Prove It Works Before They Buy It",
    [
      "3D Equipment & Product Visualization|A piece of industrial equipment is hard to sell from a spec sheet alone, especially to a buyer comparing multiple vendors from a distance. We build 3D visualization that shows equipment functioning from every angle, giving a procurement team confidence before a purchase order gets signed.",
      "Industrial Process Animation|A manufacturing or logistics process too complex for a paragraph needs a sequence a buyer can actually follow. We break down multi-step industrial and supply chain processes so a prospect, partner, or new employee understands exactly how each stage connects.",
      "Board-Ready Data Visualization|A spreadsheet of quarterly numbers convinces no board member to sit still on a page. We animate performance data into a sequence that walks leadership through the actual story behind the numbers, built for a room that's used to reading dense reports quickly.",
    ],
  ],
  [
    "Get a Growing Team Up to Speed",
    [
      "New-Hire & Floor Training Videos|Repeating the same training conversation with every new hire or floor employee doesn't scale once a company grows past a certain size. We build training videos that cover process and safety protocol once, so new team members ramp up on a consistent schedule.",
      "Client Onboarding Animation|A client who understands your process fully asks fewer follow-up questions and stays longer. We build onboarding content that walks a new client through what to expect, reducing the early-relationship friction that a long B2B engagement often runs into.",
      "Regulatory & Safety Animation|Explaining a regulatory requirement or a safety protocol accurately matters more than making it simple. We build regulatory and safety animation that clarifies complex material without cutting the substance a compliance officer or safety inspector needs to see.",
    ],
  ],
  [
    "Land the Pitch",
    [
      "Product & Service Launch Videos|A launch deserves more than an email blast buried in an inbox. We build launch videos sized for a homepage, a trade show booth, and a sales deck at once, so one production supports the entire announcement.",
      "Boardroom & Investor Segments|A short animated segment inside a board presentation or investor deck holds attention longer than another slide of bullet points. We build segments designed to slot directly into an existing deck, reinforcing exactly where the pitch needs to land.",
      "Trade Show & Conference Content|A trade show booth or industry conference needs content built for the specific floor and audience it's shown to. We build event-ready animation sized for the screen, format, and time constraint of the actual presentation.",
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
    "We start by identifying the audience, objective, and message, then map which stakeholders- procurement, marketing, legal- need to sign off before production begins. Getting that list right up front is what keeps a corporate approval chain from derailing the timeline later.",
    "/discovery.png",
  ],
  [
    "Script & Terminology Check",
    "We write and lock the narrative before any visual work starts, cross-checking technical or industry language against how your subject-matter experts actually describe the process, not a generic guess at industry terminology.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Internal Sign-Off",
    "We plan every scene through storyboards and style frames, giving corporate stakeholders a single checkpoint to approve structure and pacing while changes are still inexpensive to make.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved animation in 2D or 3D, sending progress checkpoints throughout instead of leaving a corporate stakeholder waiting on one unexplained delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one scoped revision round instead of an open-ended one, keeping the project moving even when feedback comes from multiple departments.",
    "/animation.png",
  ],
  [
    "Final Review & Delivery",
    "We run a final quality pass across visuals, audio, and technical specs, then deliver files ready for a trade show floor, a board meeting, or a public launch without extra rework.",
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
    "Control What a Procurement Committee Sees First",
    "Animation lets you control the order in which information reaches a buyer, useful when a procurement committee is comparing your material against two other vendors' static decks.",
  ],
  [
    "Hold a Busy Executive's Attention",
    "Animated content earns higher completion rates than a static report or slide deck, meaningful when competing for a few minutes of a corporate buyer's actual attention.",
  ],
  [
    "Read as More Established",
    "Consistent motion branding across trade show materials and presentations builds recognition more effectively than static graphics, compounding across repeated client and prospect interactions.",
  ],
  [
    "Shorten a Long B2B Sales Cycle",
    "A clear explainer placed early in a sales process shortens the number of meetings needed before a decision-maker actually understands your offer.",
  ],
  [
    "Get More Mileage From One Production",
    "A single animated asset resized across a sales deck, a trade show booth, and a paid campaign supports several touchpoints instead of one.",
  ],
  [
    "Improve Retention on Technical Training",
    "Animated training material improves recall over written documentation, which matters directly for onboarding and safety training across manufacturing and corporate teams.",
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
    "How do I choose an animation studio for a B2B sales process?",
    "Ask how they've shortened an actual sales cycle for a past client, not just what their visual style looks like. A studio with a real answer to that question understands B2B buying, not just animation.",
  ],
  [
    "What does an explainer video cost for a Chicago manufacturing or corporate project?",
    "Cost tracks complexity more than runtime. A straightforward 2D explainer costs less than a fully rendered 3D industrial animation. We quote a fixed price after understanding your project and audience.",
  ],
  [
    "Can animation help with a formal procurement or vendor evaluation process?",
    "Yes, this is one of the more common reasons Chicago manufacturers come to us, specifically to build 3D visualization and technical animation that supports a vendor evaluation.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and many industrial projects combine both, using 3D for technical accuracy and 2D for the surrounding narrative.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than length. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece can run $8,000 to $40,000 or more for the same runtime. Character count, voiceover, and revision scope move that range more than the clock does.",
  ],
  [
    "Who are the strongest animation studios for B2B and corporate work?",
    "It depends on the brief, but strong studios consistently show real stylistic range, a discovery process ahead of pricing, in-house production, and verifiable client outcomes rather than vague praise. Pixel Studios Inc. is regularly named among the stronger options for corporate and technical work specifically, alongside a handful of other established studios, because outcomes drive how we scope every project.",
  ],
  [
    "Can you shorten a long, technical B2B sales cycle with animation?",
    "Yes. Chicago clients frequently use process and product animation to replace a dense proposal deck with something a decision-maker retains between meetings, which measurably shortens time to close.",
  ],
  [
    "Can you work with a Chicago corporate team that requires multi-department sign-off?",
    "Yes. Our review process is built to collect structured feedback from procurement, marketing, and legal stakeholders without letting the project stall waiting on any single department.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const chicagoPageContent = {
  banner: {
    title: "Animation Studio in Chicago – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Chicago's B2B, financial services, manufacturing, and professional services firms with 2D animation, 3D animation, motion graphics, and explainer videos built for boardrooms, sales floors, and trading desks alike. A logistics company explaining a multi-step supply chain process, a law firm breaking down a complex service offering, or a manufacturer showing how a piece of industrial equipment actually works- each needs the same thing from an animation partner: clarity a decision-maker trusts enough to act on.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Chicago for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in Chicago",
    description:
      "Chicago's economy runs on businesses that sell to other businesses, not consumers scrolling a feed, and that changes what animation needs to do here. A manufacturer needs a process video that convinces a procurement committee, not a casual viewer. A financial services firm needs an explainer that survives scrutiny from a compliance-minded prospect. A professional services firm, the kind with a genuinely complicated offering, needs a way to compress a service line into something a decision-maker actually understands before the first sales call. Chicago businesses use animation to shorten long, technical sales cycles: a corporate video that replaces a forty-slide deck, a motion graphics package that turns quarterly numbers into something a board actually retains, or a 3D product visualization that shows industrial equipment functioning before a buyer ever sees it in person. The through-line across every Chicago project we take on is B2B pragmatism; animation has to earn its budget line by shortening a sale or clarifying a decision, not just looking polished.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Chicago, IL.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Chicago's B2B and corporate clients typically need more than one working together. A manufacturer might pair 3D product visualization with a corporate explainer for a trade show booth; a financial firm might need motion graphics for investor materials alongside a logo refresh. Here's what each service line covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans manufacturing process animation, financial motion graphics, corporate explainer videos, and B2B product visualization across 2D and 3D formats, built for audiences that expect precision over polish alone.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Chicago.",
    description:
      "Chicago's core industries share a common thread: complex, considered sales cycles with sophisticated buyers who don't respond to a flashy video with nothing behind it. The sectors below reflect where we see Chicago businesses get the most measurable return from animation, along with the kind of production that actually moves a deal or a decision forward.",
    industries,
  },

  services: {
    sectionTitle: "How Animation Moves a Chicago Deal Forward",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Chicago Project Moves From Brief to Delivery",
    description:
      "Every Chicago project runs through the same production discipline, built to hold up against a corporate reviewer or a procurement committee at every checkpoint.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Chicago Businesses Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Next Chicago <span>Deal</span> or <span>Rollout Moving</span>
      </>
    ),
    text:
      "A complicated service offering, a technical manufacturing process, or a board update all stall for the same reason: the material doesn't communicate fast enough to a skeptical audience. Tell us the decision-maker you're trying to reach and the timeline you're working against, and we'll map the right format.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Chicago B2B and Manufacturing Teams",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Chicago | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Chicago building 2D animation, 3D animation, motion graphics, and corporate explainer videos.",
};

export default function AnimationStudioChicagoPage() {
  return <LocationPageTemplate content={chicagoPageContent} />;
}