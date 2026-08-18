import LocationPageTemplate from "@/components/Common/LocationPageTemplate";
import parseLinks from "@/utils/parseLinks";

const images = ["/game-development/game-concept.png", "/game-development/game-01.png", "/game-development/game-02.png"];

const services = [
  ["2D Animation", "2D animation gives Dallas SaaS and corporate teams a fast way to explain a product or process without slowing a growing team down. We build character-led explainers, whiteboard-style breakdowns and clean vector storytelling for onboarding, feature walkthroughs and internal training. See our full", "/2d-animation-services", "2D animation services"],
  ["3D Animation", "3D animation shows what a property, product or piece of equipment looks and functions like before it physically exists, which matters directly for Dallas real estate developers marketing pre-construction and product companies proving how something works. We build product visualization, architectural walkthroughs, and technical demonstration videos. Visit our", "/3d-animation-services", "3D animation services"],
  ["Motion Graphics", "[Motion graphics](/motion-graphics) carry a Dallas brand's identity across advertising, investor materials, social media, and internal communication in one consistent visual language. We build modular libraries so your marketing team produces a full campaign kit from a single brief instead of commissioning new work for every channel.", null, null],
  ["Explainer Videos", "An [explainer video](/animated-explainer-video) for a Dallas SaaS platform or corporate service has to answer one question clearly: what does this actually do? We script around the point of genuine confusion first, then animate to resolve it, built for a prospective customer evaluating your platform as much as an internal team learning a new process.", null, null],
  ["Whiteboard Animation", "[Whiteboard animation](/whiteboard-animation-services) simplifies a dense onboarding process, a compliance update, or a technical concept into a format audiences actually finish watching. It's a format Dallas healthcare systems and SaaS companies lean on for training content that needs to scale across a fast-growing organization.", null, null],
  ["Logo Animation", "Logo animation gives a Dallas brand a moving identity across intros, investor materials, and social content, replacing a static mark with a few seconds that reinforce recognition every time it plays.", null, null],
].map(([title, text, href, link], index) => ({
  id: title.toLowerCase().replaceAll(" ", "-"),
  title,
  image: images[index % 3],
  contentTitle: title.toUpperCase(),
  contentParagraph: href && link
    ? parseLinks(`${text} [${link}](${href}) for examples and turnaround.`)
    : parseLinks(text),
}));

const industries = [
  ["SaaS & Technology", "Companies in Dallas use [animation for Saas](/saas-explainer-videos) and Technology to shorten a sales cycle that only gets more competitive as the local market grows, turning a feature list into an onboarding walkthrough a new customer can follow without a support ticket. We build product explainers and feature launch videos that give a new release its own moment instead of getting lost in a product update email.", ["SaaS product demonstrations", "Platform onboarding videos", "Feature and launch animations"]],
  ["Real Estate & Development", "Real estate developers use 3D visualization to market a property before it's built, giving buyers, brokers, and investors a walkthrough of a space that only exists as a blueprint. We build architectural animation and property walkthroughs for [Real estate Animations](/real-estate-animation) that make a pre-construction listing credible enough to secure a commitment months ahead of a groundbreaking.", ["3D property visualization and walkthroughs", "Pre-construction marketing animation", "Investor and broker presentation content"]],
  ["Healthcare & Medical Networks", "Dallas's expanding [healthcare networks use animation](/healthcare-animation) to standardize training and patient education across a growing number of facilities without repeating the same session at every location. We build compliance training modules and patient-facing explainer content that stays medically accurate while remaining easy to distribute system-wide.", ["Compliance and training animation", "Patient education videos", "Procedure and device explainers"]],
  ["Corporate Relocation & Enterprise", "Dallas continues to attract corporate headquarters relocating from other states, and those companies use animation to communicate a rebrand, a restructuring, or a new office rollout to a workforce that's often growing faster than internal communication can keep pace with organically. We build internal communication videos and motion graphics designed to land the same message consistently across a rapidly scaling team.", ["Internal communication and rebrand videos", "Company update motion graphics", "New office and relocation announcement content"]],
  ["Finance & Corporate Services", "Dallas's growing sector uses [animation in finance](/finance-animation) and corporate services to explain products, processes and performance data to clients who expect a level of polish that matches the city's fast-moving business reputation. We build motion graphics and explainer content for quarterly updates, product launches and client-facing presentations.", ["Financial product explainer videos", "Client and investor presentation content", "Quarterly performance motion graphics"]],
].map(([name, intro, points]) => ({ name, intro: parseLinks(intro), points }));

const solutions = [
  ["Explain It Before the Market Moves", ["SaaS Product Explainers|SaaS company in Dallas competing in an increasingly crowded local market needs a prospect to understand the product before a competitor's demo call gets scheduled first. We build [product explainers](/3d-product-animation) that answer the core question fast, timed to land inside two minutes so a prospect finishes watching before losing interest.", "Platform Onboarding Explainers|A new customer who doesn't understand your platform in the first week is a customer who churns in the first quarter. We animate onboarding content that walks a real workflow start to finish, cutting the support tickets that come from confusion instead of a product problem.", "Service Overview Videos|A service business relocating to or expanding in Dallas often has no product screen to show, just a process. We visualize that process from intake to delivery, so a prospective client understands exactly what working with your firm looks like before the first call."]],
  ["Get Noticed in a Crowded Market", ["Social & Digital Campaign Animation|Dallas's fast-growing market means a lot of brands are fighting for the same attention at once. We build [short-form animated content](/social-media-animation) designed to stop a scroll in the first three seconds, sized correctly for the platforms your audience actually uses.", "Paid Advertising Animation|A paid campaign in a competitive, fast-growing market like Dallas succeeds or fails on watch-through rate. We build [animated ad content](/animated-commercials-services) with cutdowns planned from the first storyboard, built to outperform static creative and low-budget live-action on that specific metric.", "Brand & Logo Motion|A brand relocating to or scaling in Dallas needs a visual identity that reads as established from day one. We build [logo animation](/logo-animation-services) and a broader motion system that reinforces recognition every time your mark appears, across a video, a listing, or a pitch deck."]],
  ["Sell What Doesn't Exist Yet", ["Pre-Construction Property Visualization|A property that only exists as a blueprint is a hard sell without a way to show it. We build [3D visualizations](/3d-animation-services) that walk buyers, brokers, and investors through a space months before groundbreaking, making a pre-construction listing credible enough to secure commitments early.", "Technical & Product Animation|A hardware product or technical system is hard to understand from a spec sheet alone. We break down how something works step by step, in 3D or 2D depending on the subject, proving function instead of just describing it.", "Investor Data Visualization|A spreadsheet of growth numbers convinces no one sitting still on a page. We animate performance and growth data into a sequence that walks an investor through the actual story behind a fast-scaling Dallas company's numbers."]],
  ["Onboard a Team That's Growing Fast", ["New-Hire Training Videos|A company growing as fast as many Dallas businesses are can't keep repeating the same onboarding conversation with every new hire. We build training videos that cover policy and process once, so new employees ramp up on a consistent schedule regardless of how quickly the team is scaling.", "Customer Onboarding Animation|A customer who understands your product fully churns less and files fewer support tickets. We build onboarding content that walks users through setup and troubleshooting in a format that scales as your customer base grows.", "Compliance & Healthcare Animation|A Dallas healthcare network adding facilities faster than it can standardize training runs into a real consistency problem. We build compliance and educational animation that delivers identical, medically accurate content to every new facility at once."]],
  ["Announce It As It Matters", ["Product & Property Launch Videos|A launch, a product release, or a property opening alike deserves more than a static announcement post. We build launch videos sized for a homepage, an email announcement, and a broker's presentation at once.", "Investor & Sales Presentations|A short animated segment inside a pitch deck or sales presentation holds a room's attention longer than another slide of numbers. We build segments designed to slot directly into an existing deck, reinforcing exactly where the pitch needs to land.", "Groundbreaking & Event Content|A groundbreaking event, a product launch party, or an internal all-hands each need content built for the specific room and moment it's shown in. We build event-ready animation sized for the format and time constraint of the actual presentation."]],
].map(([title, items]) => ({ title, subItems: items.map((item, index) => { const [subTitle, description] = item.split("|"); return { image: images[index], title: subTitle, description: parseLinks(description), buttonText: "Request a Proposal", buttonLink: "/contact-us" }; }) }));

const workflow = [
  ["Discovery & Timeline Lock", "We start by identifying the audience, objective, and message, then confirm the real deadline behind the project: a launch date, a groundbreaking, an investor meeting, before anything else moves forward. In a market growing this fast, an unrealistic timeline gets caught here, not halfway through production.", "/discovery.png"],
  ["Script & Story Development", "We write and lock the narrative before any visual work begins, identifying the single point of confusion the video needs to resolve so nothing gets animated before the message actually works.", "/storyboarding.png"],
  ["Storyboard & Fast Sign-Off", "We plan every scene through storyboards and style frames, giving you a quick checkpoint to approve structure and pacing while changes are still inexpensive, built to keep a fast-moving Dallas timeline on track.", "/storyboarding.png"],
  ["Full Production", "Our team builds the approved animation in 2D or 3D, with progress checkpoints throughout so you're never waiting on a single unexplained delivery date, even against a tight launch window.", "/animation.png"],
  ["Voice, Sound & Scoped Revisions", "We add voiceover and sound design, then open one scoped revision round rather than an open-ended one, keeping momentum instead of drifting through unlimited small edits before a launch date.", "/animation.png"],
  ["Final Review & Delivery", "We run a final quality pass across visuals, audio and technical specs, then deliver files ready to publish immediately, sized for whatever platform or event the launch actually needs.", "/animation.png"],
].map(([title, content, icon], index) => ({ id: index + 1, title, content, icon }));

const benefits = [
  ["Get the Message Right the First Time", "Animation lets you control exactly what a buyer, client, or new hire sees first, second, and last, which matters in a market moving too fast for miscommunication to get caught and corrected later."],
  ["Win Attention in a Crowded, Growing Market", "Animated content earns higher completion rates than static pages, a real advantage in a market as competitive and fast-growing as Dallas's for a customer's limited attention."],
  ["Stand Out While Everyone Else Is Also Growing", "Consistent motion branding across a website, listings, and campaigns builds recognition more effectively than static graphics, which matters when half the market is also trying to establish itself at once."],
  ["Convert Faster in a Competitive Sales Environment", "A clear explainer video on a landing page or property listing directly lifts conversion, meaningful when a Dallas competitor is one search result away."],
  ["Stretch a Growing Marketing Budget Further", "A single animated production resized across paid social, listings, and email supports an entire campaign instead of one channel, useful when a scaling team's budget hasn't caught up with its growth yet."],
  ["Onboard New Hires as Fast as You're Hiring Them", "Animated training material improves recall over documentation and scales cleanly, which matters directly when a Dallas company is adding headcount faster than most markets."],
].map(([title, text], index) => ({ id: index + 1, title, text, icon: index === 0 ? "/game-development/outstaffing.png" : "/game-development/managed-outsourcing.png" }));

const faq = [
  ["How do I choose an animation studio in a fast-growing market like Dallas?", "Ask how quickly they can actually turn around a project against a real deadline, not just what their portfolio looks like. A studio that scopes timeline honestly up front is the one that won't blow your launch date."],
  ["What does an explainer video cost for a Dallas SaaS or real estate project?", "Cost depends on style, length, and complexity more than anything else. A straightforward 2D explainer costs less than a fully rendered 3D property visualization. We quote a fixed price once we understand your project."],
  ["Can you build a 3D visualization for a property that hasn't broken ground yet?", "Yes, this is one of the most common requests we get from Dallas developers, giving buyers and investors a walkthrough of a space that currently exists only as architectural plans."],
  ["Do you provide both 2D and 3D animation?", "Yes, and many real estate and product projects blend the two depending on the audience and the stage of the project."],
  ["What's a reasonable budget for two minutes of finished animation?", "Complexity drives the number more than length. A simple 2D piece typically runs $3,000 to $12,000 for two minutes, while a fully rendered 3D piece can run $8,000 to $40,000 or more for the same length. Character count, voiceover, and revision scope move that range more than the clock does."],
  ["Who are the strongest animation studios working with growing SaaS and real estate companies?", "It depends on the brief, but the traits that matter are consistent: real stylistic range, a discovery process ahead of pricing, in-house production, and verifiable outcomes over vague praise. Pixel Studios Inc. shows up regularly on that list for fast-growing SaaS and real estate clients specifically, alongside a handful of other established studios, because we scope every project around a measurable result."],
  ["Can you support a Dallas company scaling its team faster than most markets?", "Yes. We build onboarding and training content specifically designed to scale, so a company growing faster than its internal communication team can keep pace and still deliver a consistent message to every new hire."],
  ["Can you hit a hard launch or groundbreaking deadline?", "Yes, as long as we know the date early. Turnaround depends on scope, but 2D explainer videos can often move faster than 3D projects when a fixed deadline like a groundbreaking or launch event is already on the calendar."],
].map(([question, answer]) => ({ question, answer }));

const dallasPageContent = {
  banner: {
    title: "Animation Studio in Dallas – Pixel Studios Inc.",
    description: "Pixel Studios Inc. is an animation studio serving Dallas SaaS companies, real estate developers, healthcare organizations, and corporate teams with 2D animation, 3D animation, motion graphics, and explainer videos built for product launches, property marketing, and internal communication. A software platform explaining a new feature to enterprise buyers, a developer showing a property that hasn't broken ground yet, or a hospital system rolling out a training update across multiple facilities, our work is built around the same goal: make the idea land the first time someone sees it.",
    video: "/videos/home.webm",
    showPlayButton: true,
  },
  stats: {
    heading: "A Trusted Animation Company in Dallas for 2D & 3D Animation Services",
    statsData: [
      { end: 110, suffix: "+", label: "Projects\nDelivered" },
      { end: 97, suffix: "%", label: "Client Retention\nRate" },
      { end: 12, suffix: "+", label: "Industries\nServed" },
      { end: 95, suffix: "%", label: "On-Time\nDelivery" },
    ],
    variant: "gradient",
  },
  mission: {
    heading: "2D & 3D Animation Services for Businesses in Dallas",
    description: "Dallas has built one of the country's strongest corporate relocation and SaaS growth markets, alongside a real estate development pipeline that rarely slows down, and both of those industries lean on animation for very different reasons. A SaaS company relocating its headquarters or opening a new enterprise segment uses explainer videos to onboard new customers faster and shorten a sales cycle that's already competitive. A real estate developer uses 3D visualization to market a property before construction finishes, giving buyers and investors a walkthrough of something that doesn't physically exist yet. A healthcare system spread across the metro area uses training animation to standardize a compliance update across every facility at once instead of repeating the session location by location. And a corporate headquarters relocating or expanding into Dallas uses motion graphics to communicate a rebrand or an internal restructuring clearly to a workforce that's growing fast enough to make word-of-mouth unreliable. Animation earns its place in Dallas by keeping pace with a market expanding faster than most internal communication teams can.",
  },
  fullCycle: {
    eyebrow: "ANIMATION SERVICES",
    heading: "Professional Animation Services in Dallas, TX.",
    description: "Pixel Studios Inc. builds animation across six core service lines, and Dallas's SaaS and real estate-heavy market usually needs more than one applied together. A software launch might pair a 2D explainer with motion graphics for paid campaigns; a property developer might need 3D visualization alongside a logo animation for a new development brand. Here's what each service line covers.",
    tabs: services,
  },
  portfolio: {
    heading: "Our Latest Animation Projects",
    description: "Our work spans SaaS product explainers, real estate visualization, healthcare training content, and corporate motion graphics across 2D and 3D formats, built for a market growing faster than most in-house teams can keep pace with.",
  },
  industries: {
    eyebrow: "INDUSTRIES WE SERVE",
    heading: "Industries We Serve in Dallas.",
    description: "Dallas's growth runs on a specific combination of industries: a booming SaaS and technology sector, a real estate development pipeline that never fully pauses, an expanding healthcare network, and a steady stream of corporate relocations. The sectors below reflect where Dallas businesses get the most measurable value from animation, along with the kind of production we typically build for each.",
    industries,
  },
  services: {
    sectionTitle: "How Animation Keeps Pace With Dallas Growth",
    items: solutions,
  },
  workflow: {
    eyebrow: "HOW WE WORK",
    heading: "How We Keep Pace With a Dallas Timeline",
    description: "Every Dallas project runs through the same production discipline, scoped to keep pace with a market that moves quickly.",
    items: workflow,
  },
  benefits: {
    eyebrow: "BUSINESS BENEFITS",
    heading: "What a Fast-Growing Dallas Business Gets From Animation",
    cards: benefits,
  },
  greatVideos: {
    title: (
      <>
        Get Your Dallas <span>Launch</span>, Listing or <span>Rollout Moving</span>
      </>
    ),
    text: "A SaaS release, a pre-construction property, or a corporate relocation all need the message to land clearly the first time, in a market that isn't slowing down to wait for a second draft. Tell us your project and your timeline, and we'll map the right format.",
    ctaText: "Discuss Your Project",
    ctaHref: "/contact-us",
  },
  testimonials: { heading: "What Our Clients Say?" },
  faq: { heading: "Common Questions From Dallas SaaS, Real Estate and Healthcare Teams", faqs: faq },
};

export const metadata = {
  title: "Animation Studio in Dallas | Pixel Studios Inc.",
  description: "Pixel Studios Inc. is an animation studio in Dallas building 2D animation, 3D animation, motion graphics, and explainer videos for SaaS and real estate.",
};

export default function AnimationStudioDallasPage() {
  return <LocationPageTemplate content={dallasPageContent} />;
}
