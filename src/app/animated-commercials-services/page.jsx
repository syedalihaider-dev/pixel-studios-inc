import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/Common/CostSection";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import WonderingSection from "@/components/Common/WonderingSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";
import Link from "next/link";

const standoutFeatures = [
  {
    id: 1,
    title: "Product Launch Campaigns",
    description:
      "Animated commercial production for product launches where the first impression is the only impression. The commercial creates the visual identity of the product in the market before any other content exists.",
    icon: "/icons/result-oriented.png"
  },
  {
    id: 2,
    title: "Brand Awareness Campaigns",
    description:
      "Brand commercial animation at scale, across multiple formats and placements, delivering consistent messaging to audiences across every digital and broadcast channel the media plan covers.",
    icon: "/icons/flexible.png"
  },
  {
    id: 3,
    title: "Lead Generation Advertising",
    description:
      "Commercial animation where the creative is structured around the click, the form fill, or the trial sign-up rather than brand sentiment that cannot be attributed to a conversion event.",
    icon: "/icons/transparent.png"
  },
  {
    id: 4,
    title: "Customer Acquisition Campaigns",
    description:
      "Animated advertising services for new customer acquisition at a measurable cost per acquisition that justifies the production investment within the campaign window.",
    icon: "/icons/experienced.png"
  },
  {
    id: 5,
    title: "Social Media Marketing",
    description:
      "Social media commercial videos that generate engagement, shares, and platform algorithm distribution across TikTok, Instagram, YouTube, and LinkedIn.",
    icon: "/icons/experienced.png"
  },
  {
    id: 6,
    title: "Digital Advertising Campaigns",
    description:
      "Pre-roll, mid-roll, display, and paid social animated ad production built around the specific creative requirements of programmatic and direct buy digital placements.",
    icon: "/icons/experienced.png"
  },
  {
    id: 7,
    title: "App and Software Promotion",
    description:
      "Animated commercial production for app and software brands where the product exists on a screen and needs to be made visible and desirable to an audience that cannot hold it in their hands.",
    icon: "/icons/experienced.png"
  },
  {
    id: 8,
    title: "Event and Trade Show Promotion",
    description:
      "Pre-event and at-event animated commercial content that generates registration, drives booth traffic, and communicates brand positioning in an environment where attention is distributed across a hundred competing priorities.",
    icon: "/icons/experienced.png"
  }
];

const industries = [
  {
    id: 1,
    title: "YouTube Video Ads",
    image: "/industry/01.png",
    text: "Skippable and non-skippable YouTube commercial animation built to the platform's creative requirements. The first five seconds of a skippable ad are a different brief from seconds six through thirty.",
    points: [
      "Skippable & non-skippable YouTube ads",
      "Optimized for YouTube creative requirements",
      "Strong hooks in the first five seconds"
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Social Media Video Ads",
    image: "/industry/02.png",
    text: "Instagram, TikTok, Facebook, and LinkedIn commercial animation in the aspect ratios and technical specifications each platform requires for paid distribution.",
    points: [
      "Instagram, TikTok, Facebook & LinkedIn",
      "Platform-specific aspect ratios",
      "Optimized for paid social campaigns"
    ],
    link: "#"
  },
  {
    id: 3,
    title: "TV Commercials",
    image: "/industry/03.png",
    text: "Broadcast television commercial animation to network delivery specifications. 15-second, 30-second, and 60-second formats with the master and cut-down versions media plans typically require.",
    points: [
      "15, 30 & 60-second TV commercials",
      "Broadcast-ready delivery specifications",
      "Master and cut-down versions included"
    ],
    link: "#"
  },
  {
    id: 4,
    title: "OTT and Streaming Ads",
    image: "/industry/04.png",
    text: "Connected TV and OTT commercial animation for streaming platform placements where the audience is engaged, but the skip option changes the creative requirement.",
    points: [
      "Connected TV & OTT advertising",
      "Streaming platform optimization",
      "Creative built for viewer engagement"
    ],
    link: "#"
  },
  {
    id: 5,
    title: "Website Commercial Videos",
    image: "/industry/05.png",
    text: "Homepage and landing page commercial animation that reduces bounce rate and increases the time on page, which signals audience intent to conversion tracking systems.",
    points: [
      "Homepage & landing page videos",
      "Reduce bounce rate",
      "Increase visitor engagement & conversions"
    ],
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce Product Ads",
    image: "/industry/06.png",
    text: "Product commercial animation for e-commerce environments where the visual quality of the product presentation determines whether the browser becomes a buyer.",
    points: [
      "High-quality product presentations",
      "Built for e-commerce platforms",
      "Designed to increase purchase intent"
    ],
    link: "#"
  },
  {
    id: 7,
    title: "Paid Advertising Creatives",
    image: "/industry/06.png",
    text: "Animated ad creative for search, display, and programmatic placements at the production quality that premium ad inventory requires.",
    points: [
      "Search, display & programmatic ads",
      "Premium-quality animated creatives",
      "Optimized for paid advertising campaigns"
    ],
    link: "#"
  },
  {
    id: 8,
    title: "Promotional Campaign Videos",
    image: "/industry/06.png",
    text: "Seasonal, event-based, and limited-time promotional animated commercial content that creates urgency without undermining brand positioning.",
    points: [
      "Seasonal & event-based campaigns",
      "Limited-time promotional videos",
      "Creates urgency while protecting brand value"
    ],
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Product Commercial Animation",
    description:
      "Product commercial animation is built around the specific audience decision that the product needs to influence. Not a feature tour. A visual argument for why this product solves a problem the viewer already has.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Brand Story Commercials",
    description:
      "Brand commercials that communicate values and positioning to audiences who have never heard of the company. The story is not about the brand. It is about the viewer and what the brand means for them.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Commercial Videos",
    description:
      <><Link href="/animated-explainer-video">Animated explainer video</Link> that explains what a product does clearly enough that the viewer arrives at the landing page already understanding the proposition. Less work for the landing page and more qualified lead.</>,
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Character Animation Commercials",
    description:
      <><Link href="/character-animation">Character-driven animation</Link> commercials for brands whose audience responds to emotional narrative. The character is not a decoration. It is the device through which the commercial earns the viewer's attention long enough to deliver the message.</>,
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "2D Animated Commercials",
    description:
      <>Commercials based on <Link href="/2d-animation-services">custom 2d animation services</Link> across every visual style from clean motion graphics to fully illustrated character animation. Produced at the frame rate and resolution the distribution platform requires.</>,
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "3D Animated Commercials",
    description:
      <>Commercials based on <Link href="/3d-animation-services">customized 3d animation</Link> for products with physical form, technical complexity, or the kind of visual quality requirement that 2D cannot match for the specific brief.</>,
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Motion Graphics Commercials",
    description:
      <><Link href="/motion-graphics">Motion graphics commercial animation</Link> for data-driven messages, product feature communication, and brand campaigns where the argument is the visual rather than the story.</>,
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Social Media Commercials",
    description:
      <><Link href="/social-media-animation">Social media commercial videos</Link> are built for the platform rather than adapted to it. Vertical formats, hooks in the first frame, and captions for the majority watching without sound. Produced to each platform's specific creative requirements.</>,
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Television Commercial Animation",
    description:
      "TV commercial animation to broadcast delivery specifications. Frame rate, loudness normalization, color space, and codec requirements were handled correctly the first time, not corrected after the network rejected the initial submission.",
    videoSrc: "https://player.vimeo.com/video/1201624848?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];



const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Campaign Strategy',
    content:
      'Audience identification, conversion objective, media plan, and competitive context are established before a frame is conceived. The strategy brief precedes the creative brief.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Creative Concept Development',
    content:
      'Multiple creative directions were developed against the strategy brief and presented for selection. The concept that earns the approval is the one that best serves the objective, not the one that is most visually impressive in isolation.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Scriptwriting and Messaging',
    content:
      'Commercial scripts written by people who understand the difference between a brand message and a conversion argument. Short copy. Specific hooks. Calls to action are placed where the audience is most prepared to act on them.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content:
      'Every visual beat is mapped and approved before animation begins. Changes to the storyboard are inexpensive. Changes after the animation has begun are not.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Visual Design and Asset Creation',
    content:
      'Style frames, character design, and branded asset creation are approved before production. The visual direction is locked before production resources are committed.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Animation Production',
    content:
      'Commercial animation production in-house, by the team that developed the concept. No handoffs to animators who were not in the strategy session.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Voiceover and Sound Design',
    content:
      'Professional voiceover, music, and sound design mixed for broadcast-spec audio delivery and for the digital environments where most commercial content is consumed without full speaker volume.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Review and Optimization',
    content:
      'Structured revision round with documented feedback and confirmed interpretations before any changes are made. Then, a pre-delivery review against the original conversion objective.',
  },
  {
    id: 9,
    icon: '/animation.png',
    title: 'Final Delivery',
    content:
      'Final files in every format the media plan requires. Platform-specific exports to technical specification. Source files were scoped into the project.',
  }
];

const title = (
  <>
    Start Your Animated Commercial Project Today
  </>
);

const text = "Most animated commercials that underperform were built around the wrong question. Tell us the conversion objective, the audience, and the media plan. We will tell you what the commercial needs to do to succeed, and then we will build it.";

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Capture Attention Faster',
    content:
      'Motion captures human attention involuntarily. Animated commercial content earns the viewer\'s focus before they have consciously decided to give it.'
  },
  {
    id: 2,
    title: '2 Increase Audience Retention',
    content:
      'Viewers complete animated commercial videos at higher rates than live-action equivalents because animation sustains visual interest through the full runtime without requiring the viewer to do interpretive work.'
  },
  {
    id: 3,
    title: '3 Simplify Complex Messages',
    content:
      'Animation controls the sequence and pacing of information delivery in a way that live-action cannot. A complex product or service can be explained in 30 seconds with animation that would take three minutes of live-action to communicate imprecisely.'
  },
  {
    id: 4,
    title: '4 Improve Brand Recall',
    content:
      'Animated brand identity elements, character design, and consistent visual style create memory encoding that static advertising cannot produce at an equivalent frequency.'
  },
  {
    id: 5,
    title: '5 Boost Conversion Rates',
    content:
      'Commercial animation built around a specific conversion objective converts at higher rates than awareness-only creative because the viewer arrives at the conversion point already primed to act.'
  },
  {
    id: 6,
    title: '6 Scale Across Multiple Platforms',
    content:
      'A single animated commercial production can be adapted for television, social media, digital pre-roll, and website use simultaneously, which amortizes the production cost across a full campaign.'
  },
  {
    id: 7,
    title: '7 Maximize Advertising ROI',
    content:
      'The combination of higher engagement rates, better retention, and improved conversion means animated commercial services deliver better return on advertising spend than most alternative creative formats.'
  },
  {
    id: 8,
    title: '8 Create Consistent Brand Messaging',
    content:
      'Animation allows complete control over every visual and audio element, which means the brand message is delivered consistently across every placement, every viewing context, and every device.'
  }
];

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Strategy-Driven Commercial Production",
    text: "Every animated commercial we produce is traceable to a specific business objective. Not an aesthetic preference. Not a creative direction that felt right in the pitch. A conversion goal that was established before the first frame was drawn."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Experienced Animation Specialists",
    text: "Our team has produced animated commercial content across product, brand, direct response, and broadcast categories. The experience is relevant to the brief, not just extensive on a resume."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Conversion-Focused Creative Approach",
    text: "The hook structure, the pacing of the value proposition, the timing of the call to action: all of these are strategic decisions made with the conversion objective in front of us, not aesthetic decisions made because they looked good in the animatic."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Premium Visual Quality",
    text: "Broadcast-quality production on every commercial we produce. Not as a premium tier. As the standard."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "Custom Commercial Solutions",
    text: "Every animated commercial brief is treated as a unique business problem that requires a specific solution. A template commercial animation applied regardless of context is what you get when you hire the wrong animated commercial production company."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Fast Turnaround Times",
    text: "Most animated commercial productions are completed in three to six weeks from a brief sign-off, depending on complexity. Rush production available for campaign launch deadlines."
  },
  {
    id: 7,
    icon: "/game-development/managed-outsourcing.png",
    title: "Dedicated Project Management",
    text: "One project manager from strategy through delivery. Every milestone is dated. Every approval is documented. No surprises at the final delivery."
  },
  {
    id: 8,
    icon: "/game-development/managed-outsourcing.png",
    title: "Proven Client Success",
    text: "Our animated commercial production record is measured in client metrics, not internal awards. The commercial worked, or it did not, and we track the difference."
  }
];

const wonderingIndustriesData = [
  {
    name: "Commercial Length",
    intro:
      "A 15-second digital ad and a 60-second broadcast commercial are not the same production. Script, storyboard, animation, and voiceover all scale with runtime.",
    points: [
      "15-second ads require less scripting and production than 60-second broadcast commercials.",
      "Longer commercials increase storyboard, animation, editing, and review time.",
      "Production investment scales directly with the final runtime of the commercial."
    ]
  },
  {
    name: "Animation Style",
    intro:
      "Motion graphics commercial animation costs less than fully illustrated character animation. 3D commercial animation with photorealistic rendering costs more than both.",
    points: [
      "Motion graphics provide the most cost-effective commercial animation solution.",
      "Character animation requires custom illustration, rigging, and performance animation.",
      "Photorealistic 3D animation involves advanced modeling, lighting, rendering, and compositing."
    ]
  },
  {
    name: "Creative Development Requirements",
    intro:
      "Projects requiring multiple concept directions and discovery-led strategy development cost more than projects where the creative brief arrives fully formed.",
    points: [
      "Brand discovery workshops increase strategic planning time.",
      "Developing multiple creative concepts requires additional writing and visual exploration.",
      "A finalized creative brief reduces production time and overall project cost."
    ]
  },
  {
    name: "Character Design Complexity",
    intro:
      "Custom character design and build for a character-driven commercial adds to the production scope beyond standard asset creation.",
    points: [
      "Original character concepts require illustration and visual development.",
      "Custom rigging and animation increase production effort.",
      "Detailed characters require additional animation and quality assurance time."
    ]
  },
  {
    name: "Voiceover and Audio Production",
    intro:
      "Professional voiceover talent, music licensing, and custom sound design are standard in our packages and priced transparently at the quote stage.",
    points: [
      "Professional voice actors improve commercial quality and audience trust.",
      "Licensed music enhances the emotional impact of the commercial.",
      "Custom sound design and final audio mixing ensure broadcast-ready quality."
    ]
  },
  {
    name: "Number of Deliverables",
    intro:
      "A campaign package producing the same commercial across six platform formats costs more than a single-format production. Multi-format campaigns are priced with package efficiencies applied.",
    points: [
      "Each platform requires different aspect ratios and export specifications.",
      "Campaigns often include versions for TV, YouTube, Instagram, TikTok, LinkedIn, and websites.",
      "Bundled multi-platform production offers better value than creating each version separately."
    ]
  },
  {
    name: "Production Timeline",
    intro:
      "Standard production timelines are priced at the standard rate. Rush timelines for campaign launch deadlines are available and priced honestly.",
    points: [
      "Standard production schedules provide the best value.",
      "Rush projects require priority scheduling and additional production resources.",
      "Expedited delivery is available for fixed product launches and campaign deadlines."
    ]
  }
];

const faqs = [
  {
    question: "What is an animated commercial?",
    answer:
      "An animated commercial is a paid advertising video produced using animation techniques, including 2D illustration, 3D rendering, or motion graphics rather than live-action footage. Animated commercials are used across digital platforms, social media, television, and streaming services.",
  },
  {
    question: "How much does an animated commercial cost?",
    answer:
      "A 15-second social media animated commercial starts in the $2,000 to $4,000 range. A 30-second broadcast commercial with custom characters and multi-format delivery runs $8,000 to $20,000. Itemized quotes within 48 hours of a brief.",
  },
  {
    question: "Who should use animated commercial services?",
    answer:
      "Any business running paid advertising that needs to communicate a product benefit, service value, or brand message faster than live-action footage can deliver it. Animation is particularly effective for product explanation, app promotion, and any category where the product itself is not visually compelling in its raw form.",
  },
  {
    question: "What are the different types of animated commercials?",
    answer:
      "Product commercials, brand story commercials, character-driven commercials, motion graphics commercials, 2D animated commercials, and 3D animated commercials. The right type is determined by the audience, the objective, and the platform where the commercial will run.",
  },
  {
    question: "Can I use the animated commercial across multiple platforms?",
    answer:
      "Yes. We produce multi-format delivery packages covering broadcast, digital, social media, and website use from a single production. The additional formats are more efficient to produce alongside the primary commercial than as separate commissions.",
  }
];

export const metadata = {
  title: "Animated Commercial Services That Capture Attention & Drive Results | Pixel Studios ",
  description: "Need animated commercial services that convert, not just impress? Pixel Studios builds strategy-driven animated commercials for brands across the USA. Get a quote today.",
};

export default function AnimatedCommercialsPage() {
  return (
    <main>
      <Banner
        title="Animated Commercial Services That Capture Attention and Drive Results."
        description="Why do so many animated commercials look impressive and generate almost no measurable return on the media spend behind them? Most animated commercial production companies start the conversation with creative direction. Visual style. Animation quality. The things that make a commercial look good. And looking good is not a business outcome. The brands generating real results from animated advertising are the ones whose creative was built around a conversion objective before anyone selected a color palette. Pixel Studios Inc. is a commercial animation company that starts with what you need the viewer to do and works backward from there. The animation is the delivery mechanism. The strategy is what determines whether it works."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Animated Commercials"
        title="Turn Viewers into Customers with High-Impact Animated Commercials"
        description="The average viewer decides on an ad in the first three seconds. Not at the logo reveal. Not at the product shot. In the first three seconds. Most animated commercial production does not begin with that constraint in mind. It begins with the full 30-second runtime and builds toward a hook rather than from one."
        videoSrc="https://player.vimeo.com/video/1201624786?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Pixel Studios approaches animated advertising services differently: the hook is brief one, and everything else is built around holding the attention the opening frame has already earned."
      />
      <StatsSection
        heading="A Trusted Animation Company for Animated Commercial Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Animated Commercial Services for Every Marketing Goal"
        description="Our animated commercial production covers every format and objective a brand runs advertising toward."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TeamStandoutSection
        subtitle="HOW BUSINESSES USE"
        title={<>How Businesses Use <span>Animated Commercial Services?</span></>}
        description="Businesses use animated commercial services to launch products, build brand awareness, generate leads, acquire customers, promote apps, support digital advertising, increase social media engagement, and drive event marketing with compelling visual campaigns."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201624746?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <HowWeWorkSection
        heading="Why Animated Commercials Outperform Traditional Advertising?"
        description="Animated commercials capture attention faster, improve audience
                retention, simplify complex messages, strengthen brand recall,
                increase conversions, scale across multiple platforms, maximize
                advertising ROI, and deliver consistent brand messaging across
                every campaign."
        accordionData={howWeWorkAccordionData}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Animated Commercial <br />Production Process</>}
        description="Every animated commercial follows a structured production process, from campaign strategy and creative development to animation, optimization, and final delivery. Each stage is designed to maximize audience engagement and achieve the campaign's marketing objectives."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY CHOOSE US"
        title="Why Choose Our Animated Commercial Production Company?"
        description="We combine strategic thinking, creative storytelling, and premium animation production to create commercials that improve brand awareness, engagement, and conversion performance."
        cards={cooperationModelsCards}
      />
      <WonderingSection
        subtitle="PRICING"
        title="Animated Commercial Pricing and Cost Factors"
        description="Animated commercial services cost is determined by the production scope, not by a flat-rate package. Here are the variables that drive the investment."
        data={wonderingIndustriesData}
      />
      <TestimonialSection />
      <IndustrySection
        heading="Animated Commercial Formats We Create"
        description="Our animated commercial production services cover every major advertising format, from social media campaigns and YouTube ads to television commercials, streaming platforms, websites, and e-commerce promotions. Every commercial is created to meet the technical specifications and marketing objectives of its intended platform."
        industries={industries}
        variant="gradient"
      />
      <FaqSection
        heading="Frequently Asked Questions About Animated Commercial Services"
        faqs={faqs}
      />
    </main>
  );
}
