import LocationPageTemplate from "@/components/Common/LocationPageTemplate";
import parseLinks from "@/utils/parseLinks";

const images = ["/game-development/game-concept.png", "/game-development/game-01.png", "/game-development/game-02.png"];

const services = [
  ["2D Animation", "2D animation is the fastest way to explain a product without slowing your team down. We build character-led explainers, whiteboard-style breakdowns, and clean vector storytelling for SaaS onboarding, feature walkthroughs, and educational content. It's the format most Austin startups reach for when a launch date isn't moving. See our full", "/2d-animation-services", "2D animation services"],
  ["3D Animation", "3D animation shows what a product does instead of describing it. We build product visualization, technical animation, and realistic demonstration videos for hardware, gaming, and manufacturing-adjacent businesses that need to prove how something works before a customer ever holds it. Visit our", "/3d-animation-services", "3D animation services"],
  ["Motion Graphics", "Motion graphics carry your brand across advertising, presentations, social media, and data visualization in one consistent visual language. We build modular motion graphics libraries so your Austin marketing team can produce a campaign kit from a single brief instead of commissioning a new video for every channel. Explore our", "/motion-graphics", "motion graphics services"],
  ["Explainer Videos", "An explainer video is built to answer one question: what does your product actually do? We script for the point of confusion first, then animate around it, whether the audience is a customer evaluating your SaaS platform or an investor deciding whether to fund your next round. Learn more on our", "/animated-explainer-video", "explainer video services"],
  ["Whiteboard Animation", "Whiteboard animation simplifies dense or technical information into a format audiences actually finish watching. It works well for training content, educational material, and simplified explanations of a process, policy, or feature that would otherwise take a long paragraph to describe. See how our", "/whiteboard-animation-services", "whiteboard animation services"],
  ["Logo Animation", "Logo animation gives your brand a moving identity across intros, social media and promotional content, replacing a static mark with a few seconds that reinforce recognition every time it plays. It's a small addition with outsized reach once it's built into your video templates. Check out our", "/logo-animation-services", "logo animation services"],
].map(([title, text, href, link], index) => ({
  id: title.toLowerCase().replaceAll(" ", "-"),
  title,
  image: images[index % 3],
  contentTitle: title.toUpperCase(),
  contentParagraph: parseLinks(`${text} [${link}](${href}) for style examples and turnaround timelines.`),
}));

const industries = [
  ["SaaS & Technology", "Austin's SaaS and technology companies use animation to close the gap between a feature list and a customer actually understanding what a product does. We build onboarding walkthroughs that reduce support tickets, feature explainers that shorten sales calls, and launch videos that give a new release its own moment instead of getting buried in a changelog. For product-led growth teams especially, a well-built explainer video becomes a permanent part of the funnel, sitting on the homepage, in the app, and in every sales deck that follows.", ["SaaS product demonstrations", "Platform onboarding videos", "Feature and launch animations"]],
  ["Gaming & Interactive Entertainment", "Austin's gaming studios and interactive entertainment teams need animation that holds up next to established production values, whether it's a trailer for a convention reveal or in-app cinematics for a new release. We build [2D and 3D character animation](/character-animation), environment work, and motion graphics sized for trailers, store pages, and marketing campaigns. Because gaming marketing often runs on a fixed convention or launch calendar, we scope these projects early and build in review checkpoints, so a trailer or reveal is ready on the date it needs to be, not a week after the moment has passed.", ["Game trailer and cinematic animation", "Character and environment design", "Launch and convention marketing assets"]],
  ["Venture-Backed Startups", "For Austin's venture-backed startups, animation usually shows up around a deadline: a fundraising round, a demo day, or a product launch that's already been announced. We build pitch-ready product explainers designed to make a complex idea land inside a single investor meeting, along with launch content that gives an announcement more weight than a static graphic or a founder-recorded video. Timelines here are often tight, so we scope production against your actual funding or launch date from the first conversation.", ["Investor and pitch deck explainer videos", "Product launch announcement videos", "Demo day presentation content"]],
  ["Consumer Technology & Hardware", "When a product has a physical form, animation gives Austin hardware and consumer tech companies a way to show it instead of describing it in a spec sheet. We build 3D product visualization, exploded-view assembly animation, and technical demonstration videos that explain how a device works and fits into daily use, content that's difficult to produce convincingly through photography alone. This is especially useful for crowdfunding campaigns, retail partner pitches, and e-commerce product pages that need more than a rotating photo gallery.", ["3D product visualization and walkthroughs", "Assembly and technical demonstration animation", "E-commerce and crowdfunding campaign videos"]],
  ["Product Launch & Growth Marketing", "Austin's marketing and growth teams treat animation as a campaign asset, not a one-off video. We build motion graphics libraries sized for paid social, landing pages, and email, so a single product launch produces a full set of assets instead of one video that only lives on YouTube. For teams running frequent campaigns, a consistent animated visual language also means faster turnaround on the next launch, since brand elements and templates already exist.", ["Paid social and campaign motion graphics", "Landing page and email animation assets", "Ongoing brand motion graphics libraries"]],
].map(([name, intro, points]) => ({ name, intro: parseLinks(intro), points }));

const solutions = [
  ["Explain Products & Services", ["Product Explainer Videos|A product explainer video answers the one question every prospect has before they'll take a sales call: what does this actually do? We build explainer videos that walk through your product's core function in under two minutes, scripted around the point where most visitors get confused rather than a generic feature tour. For Austin SaaS and startup teams, this is often the single highest-leverage piece of content on the homepage.", "SaaS & Software Explainers|SaaS products are hard to explain because the value often lives inside a workflow, not a screenshot. We build [software explainers animations](/saas-explainer-videos) that show your platform in motion, walking through a real use case instead of listing features in a bulleted list. These videos work equally well embedded on a pricing page or sent directly to a prospect mid-sales-cycle.", "Service Explainer Videos|Service-based businesses face a different problem: there's often no product screen to show at all. We build service explainer videos that visualize your process, from intake to delivery, so a prospective client understands what working with you actually looks like before they ever get on a call."]],
  ["Promote & Market Your Brand", ["Social Media Animation|Social feeds move fast, and static graphics rarely stop the scroll the way motion does. We build short-form animated content sized for Instagram, LinkedIn, and TikTok, designed to communicate a single idea in the first three seconds, since that's typically all the attention a feed post gets before a viewer decides to keep scrolling.", "Animated Advertising|Paid campaigns live or die on watch-through rate, and animation consistently holds attention longer than static ad creative or live-action footage shot on a limited budget. We build animated ad content sized for the platforms Austin businesses actually run campaigns on, with cutdowns built in from the start rather than added as an afterthought.", "Brand & Logo Animation|A moving logo does more work than a static one, reinforcing brand recognition every time it appears at the start of a video, a social post, or a presentation. We build logo animation and broader brand motion systems that give your visual identity a consistent, recognizable motion language across every piece of video content you produce."]],
  ["Visualize Complex Ideas", ["3D Product Visualization|Some products are difficult to understand from a photo or a written spec, especially before they're manufactured. We build [3D product visualizations for manufacturing industries](/manufacturing-animation) that show a device from every angle, in motion, before a single physical unit exists, useful for pre-launch marketing, investor materials, and manufacturing partner conversations alike.", "Technical Animation|When a process, mechanism, or system is too complex to explain in text, [technical animation](/technology-animation) breaks it down step by step, in a sequence an audience can actually follow. We build this kind of animation for hardware, engineering, and manufacturing-adjacent Austin businesses that need to explain how something works, not just what it looks like.", "Motion Graphics & Data Visualization|Numbers and data are hard to make compelling on a static slide. For Fintech and [Financial service industries](/fintech-animation) we build motion graphics that animate charts, metrics, and comparisons in a way that guides an audience through the story the data is telling, useful for investor updates, sales presentations, and internal reporting alike."]],
  ["Educate & Train Audiences", ["Employee Training Videos|Fast-growing Austin teams onboard new hires constantly, and repeating the same training conversation in person doesn't scale. We build [employee training videos](/enterprise-animation) that cover process, policy, and product knowledge once, so new team members can ramp up on their own schedule without pulling a manager into another repeat session.", "Customer Education|Customers who understand your product fully tend to churn less and generate fewer support tickets. We build [customer education content](/ecommerce-video-production) that walks users through setup, features, and troubleshooting in a format that's easier to follow and easier to reuse than a written help article.", "Healthcare & Educational Animation|Healthcare and education-adjacent Austin organizations often need to explain sensitive or technical information clearly and accurately. We build [animation for patient education](/healthcare-animation) and instructional content that simplifies complex material without oversimplifying the facts, a balance that matters when accuracy is non-negotiable."]],
  ["Launch & Present Ideas", ["Product Launch Videos|A launch deserves more than a static announcement post. We build product launch videos that give a new release its own moment, sized for a homepage, an email announcement, and a founder's social post at the same time, so one production covers the entire launch moment.", "Investor & Sales Presentations|A well-built animated segment inside a pitch deck or sales presentation does more to hold a room's attention than another slide of bullet points. We build short animated sequences designed to slot directly into an existing deck, reinforcing the moment in the pitch where the idea needs to land hardest.", "Event & Presentation Content|Conferences, demo days and internal all-hands events all benefit from animated content built specifically for the room it's shown in. We build event-ready animation sized for the screen, the format, and the time constraint of the specific presentation it needs to support."]],
].map(([title, items]) => ({ title, subItems: items.map((item, index) => { const [subTitle, description] = item.split("|"); return { image: images[index], title: subTitle, description: parseLinks(description), buttonText: "Request a Proposal", buttonLink: "/contact-us" }; }) }));

const workflow = [
  ["Discovery & Concept Development", "We start every project by establishing the audience, the objective, the message, and the platform it needs to live on. This step exists to catch problems before they're expensive to fix: a vague brief produces a vague animated video, so we push for specifics on goals, style preferences, and distribution channels before any creative work begins. For Austin startups working against a funding or launch deadline, this is also where we confirm the timeline is realistic.", "/discovery.png"],
  ["Script & Story Development", "Once the brief is locked, we build the message and narrative before any visual work starts. A script that doesn't work on the page won't work animated, so we write, review, and tighten the story first, making sure it answers the question your audience actually has rather than the question we assume they have. This is also where we identify the single point of confusion the video needs to resolve.", "/storyboarding.png"],
  ["Storyboarding & Design", "We plan every scene and lock the visual direction through storyboards and style frames before full animation begins. This gives you a chance to approve the story, pacing, and look of the video while changes are still cheap to make, rather than discovering a direction issue after animation is already underway. You'll see exactly how the video is structured, scene by scene, before we commit to full production.", "/storyboarding.png"],
  ["Animation Development", "With the storyboard approved, our team moves into full animation production, building out the approved scenes in 2D or 3D depending on your project. This is typically the longest phase of the process, and we provide progress checkpoints along the way so you're never waiting on a single, unexplained delivery date.", "/animation.png"],
  ["Refinement & Sound Design", "We layer in voiceover, music, and sound effects, then open a structured revision round for your feedback. Revisions here are scoped and specific, not open-ended, which keeps the project moving toward delivery instead of drifting through unlimited rounds of small changes that stall a launch date. You'll receive a near-final cut to review before we lock picture and move to final delivery.", "/animation.png"],
  ["Quality Assurance & Delivery", "Before anything ships, we run a final quality review across visuals, audio, and technical specs to catch anything that would look off on a specific platform or screen size. We then deliver final files in the formats your team actually needs, from web-ready video to social cutdowns, so you're not left resizing or re-exporting anything yourself.", "/animation.png"],
].map(([title, content, icon], index) => ({ id: index + 1, title, content, icon }));

const benefits = [
  ["Simplify Complex Information", "Animation controls the sequence and pacing of information delivery, which makes it one of the most effective formats for communicating complex products, services, or processes clearly. Instead of hoping a reader connects the dots on their own, you control exactly what they see and in what order."],
  ["Increase Audience Engagement", "Video animation consistently generates higher engagement and completion rates than static content, keeping audiences connected to your message for longer. For businesses competing for limited attention, that difference often determines whether your key message actually gets received."],
  ["Improve Brand Awareness", "Consistent animated content across your website, social channels, and campaigns builds brand recognition and recall more effectively than text-and-image content at equivalent distribution levels. A recognizable visual and motion style becomes an asset in itself over time."],
  ["Support Lead Generation", "A well-placed explainer video on a landing page or homepage can lift conversion by giving visitors a faster, clearer path to understanding your offer. For many businesses, video becomes one of the highest-performing assets in the funnel, not just a nice-to-have."],
  ["Improve Marketing ROI", "Because animated assets can be resized, cut down, and repurposed across paid social, email, and landing pages, a single production often supports an entire campaign instead of one channel. That reuse is where animation's return on investment compounds over time."],
  ["Improve Training & Knowledge Retention", "Animated training content improves knowledge retention compared to text-based documentation, since visual and sequential information is easier for most people to recall later. That matters for onboarding, compliance, and product training alike, where retention is the actual goal."]
].map(([title, text], index) => ({ id: index + 1, title, text, icon: index === 0 ? "/game-development/outstaffing.png" : "/game-development/managed-outsourcing.png" }));

const faq = [
  ["How do I choose an animation studio in Austin?", "Look at portfolio range first: genuine variety across styles shows a studio adapts to each brief rather than applying one aesthetic to every client. Then look at process: do they explain their discovery approach before quoting a price? Finally, look for outcomes-based examples, not just testimonials describing a pleasant working experience."],
  ["How much does an animated video cost?", "Cost depends on animation style, length, and complexity. A straightforward 2D explainer typically costs less than a fully rendered 3D product animation. We provide a fixed quote after understanding your goals, so there are no surprise costs mid-project."],
  ["What animation services do you provide in Austin?", "We provide 2D animation, 3D animation, motion graphics, explainer videos, whiteboard animation, and logo animation for Austin businesses, most commonly SaaS platforms, startups, gaming studios, and consumer technology companies."],
  ["Do you provide both 2D and 3D animation?", "Yes, and many projects blend the two. We'll recommend the style, or combination of styles, that best fits your product, audience and budget during the discovery phase."],
  ["How much do 2 minutes of animation cost?", "It depends more on complexity than length. A simple 2D explainer typically runs $3,000–$12,000 for 2 minutes, while a detailed 3D piece can run $8,000–$40,000 or more for the same runtime. Style, character count, voiceover, and revisions move the price far more than the clock does."],
  ["What are the top 5 animation studios?", "Rankings shift depending on the brief, but strong studios share a few traits: real range across styles, a discovery process that happens before the quote, in-house production, and client results with specifics attached rather than vague praise. Pixel Studios Inc. is consistently named among the leaders on that standard, alongside a handful of other established names in the space, because we build every project around outcomes first."],
  ["How long does animation production take?", "Timelines vary by style and complexity. 2D explainer projects generally move faster than 3D productions, since 3D modeling, texturing, and rendering add production time. We'll give you a specific timeline once we understand the scope."],
  ["Can you work remotely with businesses in Austin?", "Yes. Our production process is built for remote collaboration, with structured check-ins and review rounds that don't require in-person meetings, which is how we work with businesses in Austin and beyond."],
  ["Do Austin startups need a large budget to get started with animation?", "No. Many of our Austin clients are pre-seed or seed-stage teams that need a single strong explainer video for fundraising or launch before they have an in-house creative team, and we scope projects to match that stage."],
  ["Can you deliver an animated video before a demo day or launch deadline?", "Turnaround depends on scope, but 2D explainer videos can often be produced faster than 3D projects when a hard deadline like a demo day is in play. Tell us your date up front, and we'll scope a timeline that hits it."],
].map(([question, answer]) => ({ question, answer }));

const austinPageContent = {
  banner: {
    title: "Animation Studio in Austin – Pixel Studios Inc.",
    description: "Pixel Studios Inc. serves startups, SaaS companies, and growth-stage businesses across Austin with 2D animation, 3D animation, motion graphics, and explainer videos built for product launches, investor updates, and marketing campaigns. From immersive feature explainers before a demo day, a 3D product walkthrough for a hardware launch, or a motion graphics package for paid social, our animation team turns complex product and business communication into animation that's clear, on-brand, and ready to publish.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },
  stats: {
    heading: "A Trusted Animation Company in Austin for 2D & 3D Animation Services",
    // description: "Pixel Studios Inc. has built its production process around consistency, not one-off creative wins.",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },
  mission: {
    heading: "2D & 3D Animation Services for Businesses in Austin",
    description: "Austin's business ecosystem runs on agility and change. The city's startup and SaaS density means most companies here are either racing toward a funding round, a product launch, or both, and static screenshots and text-heavy decks rarely keep up with that pace. Businesses in Austin use animation to compress a complicated pitch into ninety seconds a founder can actually deliver in a room, to turn a SaaS feature into an onboarding video that reduces support tickets, and to give a hardware or gaming product a demo reel that holds up at a launch event or convention booth.",
  },
  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Austin, TX.",
    description: "Pixel Studios Inc. builds animation across six core service lines, and Austin businesses rarely need just one. A SaaS launch might combine a 2D explainer with motion graphics for paid social; a hardware startup might need 3D visualization alongside a logo animation for its new brand. Below is what each service covers, so you can see where your project fits before we scope it together.",
    tabs: services,
  },
  portfolio: {
    heading: "Our Latest Animation Projects",
    description: "Our portfolio goes far beyond SaaS explainers, product visualization, motion graphics campaigns,s and character-led storytelling across 2D and 3D formats.",
  },
  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Austin.",
    description: "Austin's economy is built around a specific mix of industries: SaaS, gaming, venture-backed startups, and a growing consumer hardware scene, and treating every client the same way produces generic, forgettable work. Below are the sectors where we see Austin businesses get the most out of animation, along with the kind of production we typically build for each one, from onboarding videos to launch trailers to investor-ready product explainers.",
    industries,
  },
  services: {
    sectionTitle: "Animation Solutions for Businesses in Austin",
    items: solutions,
  },
  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "Our Animation Production Process",
    description: "Our visualization and animation production follows a structured, milestone-driven process. Here is exactly what happens between the brief and the final file.",
    items: workflow,
  },
  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "Benefits of Animation for Businesses in Austin",
    cards: benefits,
  },
  greatVideos: {
    title: (
      <>
        Bring Your <span>Ideas</span> to Life With a Professional <span>Animation Studio in Austin</span>
      </>
    ),
    text: "If you're launching a product, explaining a service, or strengthening your brand, our team builds animation adapted to your specific goals and timeline. We combine strategic storytelling, clear direction, and structured production to deliver content that captures attention and leaves a lasting impression. Tell us about your project, and we'll help you figure out the right format, style, and timeline to get there.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },
  testimonials: { heading: "What Our Clients Say?" },
  faq: { heading: "Frequently Asked Questions About Animation Services in Austin.", faqs: faq },
};

export const metadata = {
  title: "Animation Studio in Austin | Pixel Studios Inc",
  description: "Pixel Studios Inc. provides 2D and 3D animation, motion graphics, and explainer videos for businesses in Austin, TX.",
};

export default function AnimationStudioAustinPage() {
  return <LocationPageTemplate content={austinPageContent} />;
}
