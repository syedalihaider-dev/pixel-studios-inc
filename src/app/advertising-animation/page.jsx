import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/Common/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/Common/WhyInvestSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import FaqSection from "@/components/Common/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: 'Experienced Motion Designers',
    description: "Our motion design team has produced logo animation for brands across consumer, corporate, entertainment, technology, and healthcare sectors with genuinely cross-industry experience.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Custom Animation Concepts',
    description: "Every project begins with original concept development. No stock motion paths or template effects. Custom logo animation built specifically for each brand.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Fast Turnaround Times',
    description: "Most logo animation projects complete in one to two weeks from brief sign-off. Rush production available for campaign launch windows.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Dedicated Project Management',
    description: "One project manager from brief to delivery. Every milestone is dated. Every update is proactive.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'High-Quality Motion Design',
    description: "Professional logo animation produced to broadcast-quality standards regardless of the distribution platform. Quality is the baseline, not a premium tier.",
    icon: '/icons/experienced.png'
  },
  {
    id: 6,
    title: 'Multiple Export Formats',
    description: "Delivery in MP4, transparent-background MOV, GIF, and source files. Platform-specific exports for social, web, and broadcast included in standard packages.",
    icon: '/icons/experienced.png'
  },
  {
    id: 7,
    title: 'Flexible Cooperation Models',
    description: "Project-based, retainer, or dedicated team models. We adapt to your needs, timelines, and budget with transparent terms and no surprises.",
    icon: '/icons/experienced.png'
  },
  {
    id: 8,
    title: 'Brand-Centric Animation Strategy',
    description: "Every animation starts with your brand goals. We define the objective first, then select the right animation style to match your message and audience.",
    icon: '/icons/experienced.png'
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Commercial Animation",
    description: "Full animated commercials built for TV, streaming, and pre-roll placements, combining strong visual storytelling with a message engineered to land inside a strict time limit. Every spot is built to work as a standalone piece and as the anchor for a full campaign of cutdowns.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Fast-paced motion graphics for feature highlights, promotional offers, and data-driven ads that need to communicate quickly and clearly, especially in placements where a viewer may only watch for a few seconds before scrolling on.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Social Media Animation",
    description: "Platform-native cuts optimized for Instagram, TikTok, and YouTube, paced for how people actually scroll and watch, with or without sound, and built to feel native to each platform rather than repurposed from a TV spot.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Logo Animation",
    description: "Animated logo intros and outros that give every ad a consistent, branded finish across every campaign and platform, reinforcing brand recognition even in a six-second bumper ad.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your brand, campaign goals, and target platforms to scope the right creative approach and format mix for your media plan.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around your core message and reviewed before design begins, locking in the creative direction early.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every shot is planned and approved before animation begins, so pacing and messaging are locked in early and match the intended platform.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Visual assets and brand elements are built or refined to match your identity precisely, from color palette to typography and motion style.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until every shot performs, with particular attention to the opening seconds of each cut.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format and cutdown your campaign requires, ready to drop directly into your media buy.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An advertising animation studio with campaign work across categories, understanding what actually holds attention on each platform rather than one approach everywhere."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every ad starts from your actual brand and campaign goals, never a recycled template repurposed from another client's work."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around your campaign calendar, not the other way around, so creative is never the reason a launch date slips."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, keeping every cutdown consistent across the full campaign."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Advertising Animation</span> Project
    </>
  );

const text =
    "If your campaign concept is strong but your creative production cannot keep up with your media plan, talk to our team. We will scope the commercial, motion graphics, or social animation your campaign needs, built to work across every placement without slowing your launch. Bring us your media plan and your deadline, and we will build to match both, from the first storyboard to the final cutdown.";

const faqs = [
  {
    question: "What's the Difference Between Advertising Animation and Social Media Animation?",
    answer:
      "Advertising animation is a broader category covering TV, streaming, and display placements, while social media animation refers specifically to content built for platform-native feeds, usually shorter and paced differently for scrolling behavior.",
  },
  {
    question: "How Long Should a Video Be for Advertising?",
    answer:
      "It depends on the platform. TV spots typically run 15 or 30 seconds, while social ads often perform best between 6 and 15 seconds, with longer versions reserved for retargeting or landing pages.",
  },
  {
    question: "What Is the Best Length for a Promotional Video?",
    answer:
      "Most promotional videos perform best between 30 and 90 seconds, long enough to build a story but short enough to hold attention through the message.",
  },
  {
    question: "What Formats and Aspect Ratios Do I Need Across TV, Social, and Digital Display?",
    answer:
      "Requirements vary by placement, from widescreen TV formats to vertical social cuts to square display ads. We deliver a full set of platform-ready exports so nothing needs re-editing later.",
  },
  {
    question: "Can Advertising Animation Include AR, VR, or Other Interactive Elements?",
    answer:
      "Yes. AR advertising animation and VR interactive ad animation are both options for brands looking to build more immersive, engagement-driven campaigns.",
  },
  {
    question: "How Do You Decide Between Character-Driven Animation and Motion Graphics for a Campaign?",
    answer:
      "It depends on the message. Character-driven animation tends to build emotional connection and brand personality, while motion graphics communicate data, features, or offers more directly and efficiently.",
  },
  {
    question: "Can One Advertising Animation Be Repurposed Into Multiple Cutdowns for Different Platforms?",
    answer:
      "Yes. Most campaigns are built from one core asset that gets recut into shorter and platform-specific versions, which is faster and more cost-effective than producing each version from scratch.",
  },
  {
    question: "What Makes an Animated Ad Perform Well Specifically on Social Media?",
    answer:
      "A strong hook in the first two seconds, clear messaging that works without sound, and pacing built for how people actually scroll rather than how they watch television.",
  },
  {
    question: "What's the Ideal Length for Different Types of Advertising Animation?",
    answer:
      "TV commercials typically run 15 or 30 seconds, pre-roll ads often work best around 6 to 15 seconds, and social content can range from 6-second bumpers to 60-second storytelling pieces depending on placement and objective.",
  },
  {
    question: "Do You Follow Our Existing Brand Guidelines When Creating Advertising Animation?",
    answer:
      "Yes. We work from your brand guidelines for color, typography, and tone from the discovery stage, so every piece of advertising animation stays consistent with your existing brand identity across every platform.",
  },
  {
    question: "Can Advertising Animation Be Tested Before Committing to a Full Media Buy?",
    answer:
      "Yes. Because animated concepts can be produced and revised faster than live-action footage, many clients test two or three creative directions with a smaller audience before committing full budget to one version.",
  },
  {
    question: "Do You Provide Both the Master File and Platform-Specific Cutdowns?",
    answer:
      "Yes. Every campaign includes a master version plus the specific cutdowns your media plan requires, delivered in the exact aspect ratios and durations each platform needs.",
  },
  {
    question: "Can You Work From an Existing Campaign Concept Developed by Our Agency?",
    answer:
      "Yes. We regularly work alongside agency creative teams, taking an approved concept and building the animated production around it rather than starting the creative process over.",
  },
  {
    question: "Do You Provide Storyboards We Can Review Before Committing to Full Production?",
    answer:
      "Yes. Every project includes a storyboard approval stage before animation begins, so you can review pacing and messaging while changes are still fast and inexpensive to make.",
  },
  {
    question: "How Far in Advance Should We Start Production Before a Campaign Launch Date?",
    answer:
      "We recommend starting four to six weeks before launch for most campaigns, though tighter timelines can sometimes be accommodated depending on scope and current production capacity.",
  },
];

export const metadata = {
  title: "Advertising Animation Services | Pixel Studios",
  description: "Pixel Studios' advertising animation services deliver commercial, social, and motion graphics video built to stop the scroll and drive results.",
};

export default function AdvertisingAnimationPage() {
  return (
    <main>
      <Banner
        title="Advertising Animation Built to Stop the Scroll"
        description="Why do so many ads get skipped in the first two seconds? Because most creative is competing for attention it never earns. Our advertising animation services build commercials, motion graphics, and social content designed to hook fast and hold attention long enough to land your message and move a viewer to act. Every campaign is built from one core creative concept, then adapted across every format and platform your media plan requires, so your brand looks consistent whether someone sees it on television or in a six-second social bumper."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Advertising Animation"
        title="Why Animation Matters in the Advertising Industry?"
        description="What actually determines whether an ad works? Attention, and it
                disappears fast. Viewers scroll past most content in under two
                seconds, live-action production is expensive and slow to
                iterate, and a single campaign now needs a dozen cutdowns for
                TV, social, and display, each with different aspect ratios and
                length limits. Brand guidelines have to stay consistent across
                every version, testing multiple creative concepts with
                live-action footage is often cost-prohibitive, and by the time a
                traditional shoot wraps, the cultural moment it was built around
                may have already passed. Media budgets keep shifting toward
                platforms that demand new creative every few weeks, which puts
                constant pressure on production teams that were never built to
                move that fast."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What does advertising animation change about that equation? An
            animated commercial can be produced, tested, and iterated far
            faster than a live-action shoot, and one core asset can be recut
            into dozens of platform-specific variants without reshooting
            anything. Motion graphics advertising also makes it easier to
            visualize abstract benefits, product features, or data points that
            a camera simply cannot capture. Brands using commercial animation
            video production report stronger completion rates on social, more
            consistent brand presentation across formats, and lower total
            production cost once every required cutdown is factored in against
            the price of a comparable live-action shoot."
      />
      <ServicesSection 
        title="Animation Solutions for Advertising"
        description="What should an advertising animation studio be able to deliver beyond a single hero spot? These four formats cover the full campaign, from broadcast to the smallest social cutdown, all built from one creative concept."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Why Choose Our <span>Logo Animation</span> Studio?</>}
        description="We don't just animate logos; we craft memorable audio-visual experiences. Our team of skilled animators and designers specializes in transforming static brand marks into dynamic, engaging animations that leave a lasting impression."
        features={whyChooseSectionFeatures}
        videoSrc="https://player.vimeo.com/video/1201854680?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Advertising <br />Animation Process</>}
        description="Media plans move fast, and our process is built to match that pace without sacrificing creative quality. Here is how a campaign moves from brief to delivery."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="Plenty of studios can animate a logo. Building creative that actually performs against a media plan is a different job. Here is where we make the difference."
        cards={cooperationModelsCards}
      />
      <TestimonialSection />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
