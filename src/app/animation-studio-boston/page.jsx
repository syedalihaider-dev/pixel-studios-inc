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
    "[2D animation](https://www.pixelstudiosinc.com/2d-animation-services) gives Boston research and healthcare teams a way to walk a specialist or a layperson through a dense concept without oversimplifying it. We build character-led explainers, whiteboard-style science breakdowns, and clean vector storytelling for patient education, grant presentations, and internal training. It's the format most university and hospital teams reach for when the message has to stay accurate under review.",
  ],
  [
    "3D Animation",
    "[3D animation](https://www.pixelstudiosinc.com/3d-animation-services) lets Boston med-tech and biotech companies show a mechanism, a device, or a molecule doing exactly what it does, at a scale no camera can capture. We build product visualization, surgical device walkthroughs, and mechanism-of-action animation for teams that need to prove function to a regulator, an investor, or a physician.",
  ],
  [
    "Motion Graphics",
    "Motion graphics turn a Boston firm's quarterly numbers, research findings, or brand story into something an audience actually retains, across investor decks, conference presentations, and social channels. We build modular graphics libraries so your team can repurpose data visualizations and brand elements across every report and campaign instead of rebuilding from scratch each quarter. Explore our [motion graphics services](https://www.pixelstudiosinc.com/motion-graphics) for format specs.",
  ],
  [
    "Explainer Videos",
    "An explainer video earns its place on a Boston biotech or SaaS homepage by answering the one question a visitor, investor, or patient actually has, in language that survives legal and medical review. We script around that question first and animate second, so the final video holds up in front of a compliance team as well as a customer. Learn more on our [explainer video services](https://www.pixelstudiosinc.com/animated-explainer-video) page.",
  ],
  [
    "Whiteboard Animation",
    "Whiteboard animation breaks down a clinical trial phase, a research finding, or a financial product into a sequence a non-specialist audience can follow start to finish. It's a format Boston hospitals, universities and financial firms lean on for training content and public-facing education where accuracy can't be traded for simplicity. See how our [whiteboard animation services](https://www.pixelstudiosinc.com/whiteboard-animation-services) support training and patient education.",
  ],
  [
    "Logo Animation",
    "Logo animation gives a Boston institution's brand a moving identity that shows up consistently across conference intros, investor materials, and social channels, replacing a static mark with a few seconds that reinforce recognition every time. Check out our [logo animation services](https://www.pixelstudiosinc.com/logo-animation-services) for style direction suited to research and financial brands.",
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
    "Biotechnology & Pharmaceuticals",
    "Boston's biotech and pharma companies use animation to explain mechanism of action, clinical trial design, and drug delivery systems to investors, regulators, and physicians who each need a different depth of detail from the same underlying science. We build 3D [molecular and cellular animation](https://www.pixelstudiosinc.com/biotech-animation) that shows a compound working inside the body, alongside investor-ready explainers that translate a pipeline into a fundable story. Accuracy review happens before animation starts, not after, so nothing has to be walked back once a scientific advisor sees the first cut.",
    [
      "Mechanism-of-action animation",
      "Clinical trial and pipeline explainers",
      "Investor and conference presentation content",
    ],
  ],
  [
    "Healthcare & Hospital Systems",
    "Boston's teaching hospitals and [healthcare networks use animation](https://www.pixelstudiosinc.com/healthcare-animation) for patient education, procedural walkthroughs, and internal clinical training, formats that have to meet health-literacy standards while staying medically precise enough for a physician to approve. We build patient-facing videos a care team can hand to someone in a waiting room, and internal training content that shortens onboarding for new clinical staff without cutting corners on protocol.",
    [
      "Patient education and procedure videos",
      "Surgical and device explainer animation",
      "Clinical staff training content",
    ],
  ],
  [
    "Higher Education & Research",
    "Boston's universities and research institutions use animation to communicate findings to funding bodies, explain complex methodology to students, and turn a research grant proposal into something a review committee actually remembers. We build [educational animation content](https://www.pixelstudiosinc.com/education-animation) that translates dense academic material into a format that holds attention without flattening the research itself, useful for grant applications, public-facing science communication, and lecture-supporting content.",
    [
      "Research and methodology explainers",
      "Grant proposal and funding presentation content",
      "Lecture and course support animation",
    ],
  ],
  [
    "Finance & Financial Services",
    "Boston's asset managers, insurers, and financial services firms use animation to turn dense performance data and product structures into content a client or prospect will actually watch instead of setting aside for later. We build [financial animation motion graphics](https://www.pixelstudiosinc.com/finance-animation) for quarterly reviews, product explainers for new financial offerings, and investor-facing content that respects the compliance language a regulated firm has to use while still being genuinely watchable.",
    [
      "Quarterly performance motion graphics",
      "Financial product explainer videos",
      "Investor and client presentation content",
    ],
  ],
  [
    "SaaS & Technology",
    "Boston's SaaS companies, many spun directly out of the city's research base, use animation to explain technical products to buyers who expect a higher bar of rigor than a typical consumer audience. We build onboarding walkthroughs and feature explainers that respect a technical buyer's intelligence instead of oversimplifying the product down to a marketing tagline using [Saas explainer video animation](https://www.pixelstudiosinc.com/saas-explainer-videos).",
    [
      "SaaS product demonstrations",
      "Technical onboarding videos",
      "Feature and platform explainer animation",
    ],
  ],
].map(([name, intro, points]) => ({
  name,
  intro: parseLinks(intro),
  points,
}));

const solutions = [
  [
    "Make the Science Investable",
    [
      "Mechanism & Pipeline Explainers|Before an investor commits capital or a physician trusts a new device, they need to see the mechanism working, not just read a claim about it. We build pipeline and mechanism explainers that walk through what a compound, device, or diagnostic actually does inside the body, reviewed for scientific accuracy before a single frame gets animated. For a Boston biotech mid-raise, this is often the single piece of content that gets forwarded to every partner on the cap table.",
      "Platform & SaaS Explainers|Boston's research-adjacent software companies sell into buyers who read documentation before they take a demo call. We animate the platform in motion, walking a real workflow end to end instead of listing features, built to hold up when a technical evaluator watches it twice before looping in a colleague.",
      "Clinical & Research Service Overviews|A CRO, a lab services provider, or a research consultancy often has no product screen to show, only a methodology. We visualize that methodology step by step, from intake through delivery, so a prospective partner or sponsor understands exactly what your process involves before the first scoping call.",
    ],
  ],
  [
    "Build Institutional Recognition",
    [
      "Conference & Symposium Animation|A poster session or a symposium booth competes for attention against a hundred other research groups in the same hallway. We build short animated content sized for conference screens and symposium reels, built to communicate a finding in the time it takes someone to walk past.",
      "Grant & Fundraising Campaign Animation|A grant application or a fundraising campaign lives or dies on how memorable it is to a reviewer who has already read forty others that week. We build animated components for grant submissions and fundraising campaigns that make a proposal memorable without exaggerating what the research actually shows.",
      "Institutional Brand & Logo Motion|A research institution, hospital system, or fund carries more weight when its visual identity moves consistently across every conference intro, investor deck, and internal presentation. We build logo animation and motion identity systems that reinforce institutional recognition every time your mark appears.",
    ],
  ],
  [
    "Show the Mechanism, Not Just the Claim",
    [
      "3D Molecular & Device Visualization|A molecule, a surgical device, or a diagnostic tool is nearly impossible to understand from a static diagram. We build 3D visualization that shows the mechanism from every angle, in motion, useful for investor materials, regulatory submissions, and physician education alike.",
      "Clinical & Technical Process Animation|A clinical trial protocol or a manufacturing process too complex for a slide needs a sequence instead. We break down multi-step clinical and technical processes so a reviewer, partner, or trainee can follow exactly how each stage connects to the next.",
      "Research & Financial Data Visualization|A results table or a quarterly performance sheet convinces no one sitting still on a page. We animate research findings and financial data into a sequence that guides a board, investor, or review committee through the actual story the numbers are telling.",
    ],
  ],
  [
    "Train Clinicians, Staff and Patients",
    [
      "Clinical Staff Training Videos|New clinical staff need to absorb protocol quickly, and repeating the same training session with every hire doesn't scale across a hospital system. We build training videos that cover protocol and process once, so staff can complete onboarding on their own schedule without pulling a supervisor into another repeat session.",
      "Patient Onboarding & Education|A patient who understands a procedure or a treatment plan clearly tends to follow through with fewer complications and fewer confused follow-up calls. We build patient onboarding and education content that meets health-literacy standards while staying medically precise enough for a care team to approve without edits.",
      "Compliance & Protocol Animation|Explaining a compliance requirement or a clinical protocol accurately matters more than making it simple. We build protocol animation that clarifies complex regulatory or clinical material without cutting the substance a compliance officer or reviewer needs to see.",
    ],
  ],
  [
    "Present to Investors, Boards and Review Committees",
    [
      "Trial & Product Milestone Videos|A trial phase completion or a product milestone deserves more than a press release nobody reads past the headline. We build milestone videos sized for an investor update, a press announcement, and an internal team update at once.",
      "Investor & Grant Review Presentations|A short animated segment inside an investor deck or a grant review presentation holds a room's attention longer than another slide of data tables. We build sequences designed to slot directly into an existing presentation, reinforcing the exact point where the pitch needs to land.",
      "Conference & Symposium Presentation Content|A symposium talk or a conference keynote benefits from content built specifically for the room and time slot it's shown in. We build presentation-ready animation sized for the screen, format, and time constraint of the specific academic or investor audience it needs to reach.",
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
    "Discovery & Scientific Scoping",
    "Every Boston project starts with a scoping conversation that goes deeper than audience and objective; we also map who on your side needs to review the science, the compliance language, or the financial claims before anything ships. Skipping this step is how a studio ends up reanimating a scene after a medical advisor flags an inaccuracy in week four.",
    "/discovery.png",
  ],
  [
    "Script & Accuracy Pass",
    "We write the narrative first and run it past your internal experts before storyboarding starts, checking that the language matches how your team actually describes the mechanism, the data, or the offering. A script that survives your scientific advisor's read-through is a script that survives animation.",
    "/storyboarding.png",
  ],
  [
    "Storyboard & Stakeholder Sign-Off",
    "We lock pacing and visual direction through storyboards before full production begins, giving your internal reviewers- a PI, a compliance officer, or a marketing lead- a checkpoint to approve structure while changes are still cheap.",
    "/storyboarding.png",
  ],
  [
    "Full Production",
    "Our team builds the approved scenes in 2D or 3D, sending progress checkpoints throughout so a multi-week production doesn't leave you waiting on a single surprise delivery date.",
    "/animation.png",
  ],
  [
    "Voice, Sound & Scoped Revisions",
    "We add voiceover and sound design, then open one structured revision round rather than an open-ended back-and-forth, keeping a compliance-heavy project moving instead of stalling on repeated small edits.",
    "/animation.png",
  ],
  [
    "Final Accuracy Check & Delivery",
    "Before delivery, we run one more pass against the original source material, not just visuals and audio, then ship files ready for a hospital portal, an investor deck, or a conference screen.",
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
    "Survive Scientific and Compliance Review",
    "Animation lets you control exactly what a viewer sees and in what order, which matters when the underlying material has to satisfy a compliance officer or a peer reviewer, not just look impressive on a first pass.",
  ],
  [
    "Hold a Distracted Investor's Attention",
    "A fund manager or investor reviewing dozens of pitches a week finishes an animated explainer at a far higher rate than a static deck, meaningful when your material is competing for a few minutes of real attention.",
  ],
  [
    "Build Recognition Across a Research Community",
    "Consistent motion branding across conference materials and publications builds recognition within a research or investor community more effectively than static graphics at the same reach.",
  ],
  [
    "Shorten the Distance to a Term Sheet",
    "A clear mechanism explainer on an investor-facing page shortens the number of follow-up calls needed before a term sheet conversation actually starts.",
  ],
  [
    "Get More From Every Grant or Marketing Dollar",
    "A single animated production can be resized for a grant submission, a conference reel, and an investor deck, meaning one budget line covers three audiences instead of one.",
  ],
  [
    "Improve Retention for Clinical and Research Training",
    "Animated training material improves recall over written protocol documentation, which matters directly where retention isn't optional: hospital onboarding and clinical compliance training.",
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
    "How do I choose an animation studio for scientific or financial content?",
    "Ask to see work involving actual technical review, not just polished visuals. A studio that can show you a project where a compliance officer or scientific advisor signed off has already proven the process you need.",
  ],
  [
    "What does an explainer video cost for a Boston biotech or healthcare project?",
    "Pricing tracks complexity and required accuracy review more than runtime. A straightforward 2D explainer costs less than a 3D mechanism animation requiring scientific validation. We quote a fixed price after understanding your subject matter and review requirements.",
  ],
  [
    "What animation formats work best for research and financial content?",
    "Most Boston research and financial teams land on a mix: 3D for mechanism or data accuracy, 2D for narrative context. We'll recommend a specific combination once we understand your audience.",
  ],
  [
    "Do you provide both 2D and 3D animation?",
    "Yes, and biotech and med-tech projects most often combine both in a single production.",
  ],
  [
    "What's a reasonable budget for two minutes of finished animation?",
    "Complexity drives the number more than runtime. A simple 2D piece typically lands between $3,000 and $12,000 for two minutes, while a detailed 3D production with heavier review requirements can run $8,000 to $40,000 or beyond. Character count, voiceover, and revision scope move that range more than the clock.",
  ],
  [
    "Who are the leading animation studios, and where does Pixel Studios Inc. fit?",
    "The right studio depends on the brief, but the traits that matter are consistent: genuine range across visual styles, a discovery process that happens before pricing, in-house production, and outcomes you can verify rather than vague testimonials. Pixel Studios Inc. is regularly named among the stronger options on those criteria, alongside a small set of other established studios, because we build every project to hold up under review.",
  ],
  [
    "Can you handle content that requires scientific or compliance sign-off before publishing?",
    "Yes, that's a standard part of our process for Boston clients. We build in a subject-matter accuracy pass before animation begins and again before final delivery, so nothing needs to be redone after your reviewer sees the finished piece.",
  ],
  [
    "Can a Boston research lab or fund work with you entirely remotely?",
    "Yes. Our review rounds are built to fit around an existing lab or fund approval chain rather than requiring anyone to meet in person.",
  ],
].map(([question, answer]) => ({
  question,
  answer,
}));

const bostonPageContent = {
  banner: {
    title: "Animation Studio in Boston – Pixel Studios Inc.",
    description:
      "Pixel Studios Inc. is an animation studio serving Boston's biotech labs, hospital systems, research universities, and financial firms with 2D animation, 3D animation, motion graphics, and explainer videos built for regulatory clarity, not just visual polish. A mechanism-of-action video for a pharma pipeline, a 3D surgical device walkthrough for a med-tech launch, or a fund performance explainer for an asset manager all demand the same thing: precision first, style second. We build animation for teams that can't afford an oversimplified claim or a technically inaccurate frame, and we get the science and the finance right before we get it beautiful.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },

  stats: {
    heading:
      "A Trusted Animation Company in Boston for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },

  mission: {
    heading: "2D & 3D Animation Services for Businesses in Boston",
    description:
      "Boston runs on institutions that can't cut corners on accuracy: teaching hospitals, biotech labs mid-trial, university research groups chasing grant renewals, and asset managers who answer to regulators and clients in the same breath. Animation earns its place here by making dense, technical material legible without stripping out the substance a scientific or financial reviewer needs to see. A biotech company preparing for a Series B uses a mechanism-of-action animation to show investors what a compound actually does inside a cell, something a slide of chemical structures never manages. A hospital system builds patient education videos that meet health-literacy standards while staying medically precise. A financial services firm turns a quarterly performance review into a motion graphics piece a client actually watches instead of skimming. None of this works if the animator doesn't understand the underlying material, which is why our Boston projects start with a subject-matter review before a single frame gets drawn.",
  },

  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Boston, MA.",
    description:
      "Pixel Studios Inc. builds animation across six core service lines, and Boston's research-heavy, regulation-heavy client base usually needs more than one applied to the same project. A biotech launch might pair a 3D mechanism animation with a 2D investor explainer; a hospital system might need whiteboard training content alongside a rebrand of its patient-facing logo. Here's what each service covers, so you know exactly where your project fits before we scope it.",
    tabs: services,
  },

  portfolio: {
    heading: "Our Latest Animation Projects",
    description:
      "Our work spans mechanism-of-action animation, financial motion graphics, university research explainers, and healthcare training content, built for audiences that range from regulators to retail investors.",
  },

  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Boston.",
    description:
      "Boston's economy runs on institutions with a high bar for accuracy: research hospitals, biotech and pharma companies, universities, and a dense financial services sector, alongside a growing SaaS presence spun out of that research base. A generic marketing video doesn't survive contact with a compliance officer or a peer reviewer, so every industry below gets animation built around its specific accuracy and audience requirements, not a repurposed template.",
    industries,
  },

  services: {
    sectionTitle:
      "How Animation Supports Boston's Research, Care and Capital Institutions",
    items: solutions,
  },

  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How We Move From Brief to Final File in Boston",
    description:
      "Every Boston project runs through the same production discipline, scoped around the accuracy review a research, medical, or financial subject usually requires.",
    items: workflow,
  },

  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What Boston Institutions Get From Animation",
    cards: benefits,
  },

  greatVideos: {
    title: (
      <>
        Get Your <span>Science</span>, Data or Product in Front of the Right
        Room
      </>
    ),
    text:
      "A biotech pipeline explainer, a hospital training rollout or a fund performance piece all need to survive review before they're allowed to be persuasive. Tell us your subject matter, your reviewers and your timeline, and we'll map a production plan built around both.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },

  testimonials: {
    heading: "What Our Clients Say?",
  },

  faq: {
    heading:
      "Common Questions From Boston Research, Healthcare and Finance Teams",
    faqs: faq,
  },
};

export const metadata = {
  title: "Animation Studio in Boston | Pixel Studios Inc.",
  description:
    "Pixel Studios Inc. is an animation studio in Boston building 2D animation, 3D animation, and medical, biotech, and financial explainer videos.",
};

export default function AnimationStudioBostonPage() {
  return <LocationPageTemplate content={bostonPageContent} />;
}