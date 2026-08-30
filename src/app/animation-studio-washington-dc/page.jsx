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
    "Washington DC agencies and nonprofits rely on [2D animation agencies](/2d-animation-services) to explain a policy, a program, or a process without a long production cycle, especially when a public communication deadline is already set. We build character-led explainers, whiteboard-style breakdowns, and clean vector storytelling for public education and member communication.",
  ],
  [
    "3D Animation",
    "[3D animation studios](/3d-animation-services) give a Washington, DC organization a way to show how a system, facility, or process actually functions, useful when a public agency or association needs to demonstrate something too complex for a diagram alone. We build technical visualization and process animation calibrated for accuracy and public trust.",
  ],
  [
    "Motion Graphics",
    "[Motion graphics](/motion-graphics) help a Washington, DC nonprofit or association turn dense impact data and policy information into content a donor, member, or the public actually retains. We build modular libraries a communications team can reuse across reports and campaigns.",
  ],
  [
    "Explainer Videos",
    "An [animated explainer video service](/animated-explainer-video) built for a Washington, DC audience has to communicate a policy or program clearly enough that a viewer doesn't need a background briefing first. We script around the actual point of public confusion, then animate to resolve it directly.",
  ],
  [
    "Whiteboard Animation",
    "[Whiteboard animation](/whiteboard-animation-services) breaks a regulation, a benefit program, or a technical policy concept into a sequence the general public or a new association member can follow without prior context.",
  ],
  [
    "Logo Animation",
    "[Logo animation service](/logo-animation-services) gives a Washington, DC agency, nonprofit, or association a level of visual consistency that reinforces institutional credibility every time it appears across public materials and presentations.",
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
    "Government & Public Agencies",
    "Washington DC [government agencies use animation](/government-animation) to communicate regulations, public programs, and policy changes to residents who won't read a full policy document. We build explainer content that stays accurate under legal or regulatory review while remaining genuinely accessible to a general public audience.",
    [
      "Regulation and policy explainer videos",
      "Public program awareness content",
      "Government training and internal communication",
    ],
  ],
  [
    "Nonprofits & Associations",
    "Washington, DC [nonprofits and trade associations](/nonprofit-animation) use motion graphics to show donors, members, and stakeholders the actual impact of a program, translating outcomes and policy positions into content that's easier to retain than a written report. We build impact storytelling and member education content built for credibility, not just persuasion.",
    [
      "Donor and impact storytelling animation",
      "Member education and onboarding content",
      "Policy position explainer videos",
    ],
  ],
  [
    "Public Education & Awareness Campaigns",
    "Washington, DC public education initiatives use animated content to reach a broad, often skeptical audience with information that has to be accurate and genuinely watchable at the same time. We build [public awareness animation](/education-animation) designed to hold attention without sacrificing the accuracy a public campaign requires.",
    [
      "Public health and safety awareness animation",
      "Civic and voter education content",
      "Community program explainer videos",
    ],
  ],
  [
    "Training & Institutional Communication",
    "Washington, DC's government-adjacent organizations and associations use training animation to standardize onboarding, compliance, and policy education across a distributed membership or workforce. We build training content that delivers identical, accurate information at scale.",
    [
      "Compliance and policy training animation",
      "New employee and member onboarding",
      "Institutional communication content",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Explain Policy and Regulation Clearly",
    [
      "Regulation & Policy Explainers | A new regulation explained only in legal language gets ignored by the public it's meant to reach. We build policy explainers that translate regulatory language into something a general audience actually understands, reviewed for accuracy before a single frame gets locked.",

      "Program & Benefit Explainers | A public program or benefit has to be understood by the people eligible for it, not just policy staff. We animate program details clearly enough that an eligible resident understands how to actually access it.",

      "Association & Membership Overviews | A trade association's value proposition is often hard to communicate in a bulleted list. We visualize membership benefits and policy positions so a prospective member understands what joining actually means.",
    ],
  ],
  [
    "Build Public Trust and Awareness",
    [
      "Public Awareness Campaign Animation | A public health or safety campaign competes for attention against everything else in a resident's day. We build short, clear animated content designed to actually land the message with a general audience.",

      "Donor & Stakeholder Impact Content | A nonprofit's impact report full of statistics convinces no donor scrolling through an inbox. We animate outcomes into a sequence that makes an organization's actual impact memorable.",

      "Civic & Community Education | Civic information often goes unread when it's presented as a dense flyer or webpage. We build civic education animation designed for a broad public audience with varying levels of prior context.",
    ],
  ],
  [
    "Visualize Systems and Data",
    [
      "Technical & Process Animation | A government system or process too complex for a paragraph needs a sequence a resident or reviewer can actually follow. We break down technical and regulatory processes step by step.",

      "Data & Impact Visualization | Public data and program statistics convince no one sitting in a report. We animate data into a sequence that walks an audience through the actual story behind the numbers.",

      "3D Facility & System Visualization | A public facility or infrastructure project is hard to understand from a plan alone. We build 3D visualization that shows a project's scope and function clearly.",
    ],
  ],
  [
    "Train and Onboard at Institutional Scale",
    [
      "Employee & Staff Training Videos | A government agency or large nonprofit can't repeat the same training conversation across every department. We build training content that covers policy and process once, delivered identically department-wide.",

      "Member & Volunteer Onboarding | A new association member or nonprofit volunteer needs to get oriented quickly without a lengthy call. We build onboarding content that gets someone up to speed on their own schedule.",

      "Compliance & Regulatory Training | Explaining a compliance requirement accurately matters more than making it simple. We build training animation that clarifies complex regulatory material without cutting the substance a reviewer needs to see.",
    ],
  ],
  [
    "Present and Communicate With Institutional Credibility",
    [
      "Policy & Program Launch Videos | A new program or policy rollout deserves more than a press release. We build launch videos sized for a public website, a media announcement, and a stakeholder briefing at once.",

      "Congressional & Board Presentations | A short animated segment inside a briefing or board presentation holds attention longer than another slide of bullet points. We build segments designed to slot directly into an existing presentation.",

      "Conference & Public Event Content | A Washington DC conference, public hearing, or advocacy event needs content built for the specific room and audience it's shown to. We build event-ready animation sized for that format.",
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
    "Discovery & Accuracy Scoping",
    "We start by identifying the audience, objective, and message, then map who needs to review the content for legal, regulatory, or policy accuracy before anything ships.",
    "/discovery.png",
  ],
  [
    "Script & Accuracy Pass",
    "We write the narrative first and run it past your policy or legal team before storyboarding starts, checking that the language holds up to public and regulatory scrutiny.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Sign-Off",
    "We lock pacing and visual direction through storyboards before full production begins, giving your reviewers a checkpoint to approve accuracy while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved scenes in 2D or 3D, sending progress checkpoints throughout so a multi-week production doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one structured revision round, keeping a review-heavy project moving instead of stalling on repeated edits.",
    "/animation.png",
  ],
  [
    "Final Accuracy Check & Delivery",
    "Before delivery, we run one more pass against the original policy or regulatory source material, then ship files ready for a public website, a briefing, or a training portal.",
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
    "Build Public Trust Through Clarity",
    "Animation lets you control exactly what a viewer sees and understands, which matters when public trust depends on information being both accurate and genuinely accessible.",
  ],
  [
    "Reach a Broad, Often Skeptical Audience",
    "Animated public awareness content earns higher engagement than a static flyer or webpage, meaningful when a program's success depends on residents actually understanding it.",
  ],
  [
    "Standardize Communication at Institutional Scale",
    "A single training or communication video delivers identical, accurate content across every department, office, or membership segment.",
  ],
  [
    "Make Impact and Data Memorable",
    "Consistent, clear data visualization gives a nonprofit or agency's outcomes more staying power with donors, stakeholders and the public than a written report alone.",
  ],
  [
    "Get More From a Public Communications Budget",
    "A single animated production can be resized across a website, a briefing and a public awareness campaign, supporting several audiences instead of one.",
  ],
  [
    "Improve Retention on Policy and Compliance Training",
    "Animated training material improves recall over written policy documentation, which matters directly for regulatory and institutional compliance outcomes.",
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
    "How do I choose an animation studio for government or public policy content?",
    "Ask to see work that's been through an actual legal or policy accuracy review, not just a polished reel. A studio that's done this before will have a clear answer about their review process.",
  ],
  [
    "What does a public awareness or policy explainer video cost in Washington, DC?",
    "Cost tracks complexity and required review more than runtime. A straightforward 2D explainer costs less than a fully rendered 3D system animation requiring technical or legal review. We quote a fixed price after understanding your project.",
  ],
  [
    "Can animation help a nonprofit communicate its impact to donors?",
    "Yes. We regularly build donor and stakeholder impact content that translates program outcomes into something more memorable and shareable than a written annual report.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and most Washington, DC government and technical projects combine both, using 3D for system accuracy and 2D for public-facing narrative.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece with technical or legal review can run $8,000 to $40,000 or more for the same length. Required accuracy review and revision scope move that range more than the clock.",
  ],
  [
    "Who are the strongest animation studios for government and nonprofit work?",
    "It depends on the brief, but strong studios consistently show real range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. is regularly named among the stronger options for government-adjacent and nonprofit work specifically, alongside a handful of other established studios, because accuracy drives how we scope every project.",
  ],
  [
    "Can you build animation that survives legal or regulatory review before publishing?",
    "Yes, that's a standard part of our process for Washington, DC clients. We build in an accuracy pass before animation begins and again before final delivery, so nothing needs to be reanimated after your legal or policy team reviews it.",
  ],
  [
    "Can you support a Washington DC association or agency with a distributed membership or workforce?",
    "Yes. We build training and communication animation specifically designed to deliver identical, accurate content across every department, chapter, or membership segment.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const washingtonDCPageContent = {
  banner: {
    title: "Animation Studio in Washington DC – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Washington DC's government agencies, nonprofit organizations, associations, and public policy groups with 2D animation, 3D animation, motion graphics and explainer videos built for audiences that need to understand a policy, a program or a public initiative without a lengthy report standing between them and the information. A federal agency communicating a new regulation to the public, a nonprofit explaining its impact to donors, or an association translating policy for its membership, our work is built around one standard: clarity credible enough for an audience that expects accuracy from the institutions communicating with it.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Washington DC for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Studio in Washington DC for Businesses",
    description:
      "Washington DC's economy is unusually concentrated around institutions that exist to inform, regulate, or advocate: government agencies, nonprofits, trade associations and policy organizations, each with an audience that expects credibility over polish alone. A federal or local agency uses explainer content to communicate a new regulation or public program to residents who won't read the full text of a policy document. A nonprofit uses motion graphics to show donors and stakeholders the actual impact of a program, translating outcomes into something more memorable than an annual report. A trade association uses training animation to bring new members up to speed on policy positions and member benefits without a lengthy onboarding call. And a public education initiative uses animated content to reach a broad, often skeptical public audience with information that has to be both accurate and genuinely watchable. Washington, DC organizations use animation because their core function, communicating clearly and credibly at scale, is the entire job, not a marketing add-on.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Washington DC.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Washington DC's government and nonprofit-heavy client base usually needs more than one working together. A public awareness campaign might pair a 2D explainer with motion graphics for social distribution; an association might need whiteboard training content alongside a logo refresh. Here's what each service covers.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans public awareness campaigns, nonprofit impact storytelling, association training content, and government explainer videos across 2D and 3D formats, built for audiences that expect accuracy and credibility.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Washington, DC.",
    description:
      "Washington DC's core sectors- government, nonprofits, associations and public education- all share a common requirement: the audience has to trust the information, not just be entertained by it. The sectors below reflect where Washington, DC organizations get the most measurable value from animation.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Washington DC's Government and Nonprofit Sectors?",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How a Washington DC Project Moves From Brief to Delivery",
    description:
      "Every Washington DC project runs through the same production discipline, scoped around the accuracy and public trust a government or nonprofit subject requires.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Washington DC Organizations Get From Animation?",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your Washington DC <span>Policy</span>, <span>Program</span> or{" "}
        <span>Initiative</span> on Screen
      </>
    ),
    text:
      "A public regulation, a nonprofit's impact story, or an association's policy position all need the same thing: an explanation credible enough to earn public trust. Tell us your subject and audience, and we'll map the right format and timeline.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Washington DC Government and Nonprofit Organizations",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Washington DC | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Washington, DC, building 2D animation, 3D animation, and explainer videos for government and nonprofit organizations.",
};

export default function AnimationStudioWashingtonDCPage() {
  return <LocationPageTemplate content={washingtonDCPageContent} />;
}