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
    title: "Product Demo Videos",
    description: "A product demo video answers the questions a sales associate would, right on the page where the decision gets made: how it works, what it includes, why it is worth the price. We front-load the details that matter most and structure the sequence around the objections that most often stop a shopper from clicking add to cart.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Promotional Videos",
    description: "Launch drops, seasonal campaigns, and limited releases get a dedicated promotional video built to create urgency and carry your brand identity across your homepage, email campaigns, and paid social, so the campaign feels cohesive wherever a customer meets it.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Feature callouts, spec breakdowns, and comparison graphics animated cleanly, so customers absorb the details that drive purchase decisions without wading through paragraphs of product copy on a mobile screen.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Product Animation",
    description: "Photorealistic 3D product animations show your product from every angle, in every color and configuration, without a single physical unit on a photo set. Ideal for pre-launch marketing and products that only exist as CAD files but still need to sell on a pre-order page.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your product, brand guidelines, catalog, and target platforms to scope the right video approach and format mix for your sales goals.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "Concept and script are built around your product's key selling points and the specific platforms the video needs to perform on, from listing pages to paid feeds.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every shot is planned and approved before animation begins, so pacing and the order of information are locked before any modeling starts.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "3D models and visual assets are built to match your actual product with precision, down to color, material, texture, and finish.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until every shot performs the way it should on the platform it is built for.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format and aspect ratio your platforms require, from vertical social cuts to widescreen product pages.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "An ecommerce video production company with work across Shopify, Amazon, and DTC brands in electronics, home goods, beauty, and apparel. We know what converts on each platform."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every video starts from your actual product and brand, never a stock template, so it looks like nothing else in your customer's feed."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Production timelines built around launch dates and ad calendars, not the other way around, so campaigns never wait on creative."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, keeping every platform cut aligned to the same brand standard and launch timeline."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Ecommerce Animation</span> Project
    </>
  );

const text = "If your product pages rely on photos alone, you are leaving conversions on the table. Talk to our team about your catalog, your platforms, and your launch timeline, and we will build the ecommerce video production plan that turns browsers into buyers, one platform-ready video at a time. From a single hero video to a full catalog rollout, we scope the work around your actual sales calendar.";

const faqs = [
  {
    question: "What Is Ecommerce Video Production?",
    answer: "Ecommerce video production is the process of creating product, promotional, and ad video through live action, 3D product animation, or a mix of both, built specifically for online storefronts, marketplaces, and paid social campaigns.",
  },
  {
    question: "What Types of Ecommerce Videos Should I Produce for My Online Store?",
    answer: "Most brands need a product demo video for the listing page, a promotional video for launches, and a set of short ad cuts for paid social. The right mix depends on catalog size, price point, and which platforms drive most of your traffic.",
  },
  {
    question: "How Can 3D Product Animation Improve Customer Experience?",
    answer: "It shows details, angles, and functionality that static photos cannot, which reduces buyer uncertainty, sets accurate expectations before purchase, and lowers returns caused by the gap between what was shown and what arrived.",
  },
  {
    question: "How Much Does a Product Video Cost?",
    answer: "Ecommerce video production cost depends on animation style, video length, and how many product variants or platform cuts you need. Most projects are scoped after we review your catalog, brand assets, and goals together.",
  },
  {
    question: "Should I Use Live-Action or 3D/CGI Animation for My Ecommerce Product Videos?",
    answer: "The live-action vs animation product video decision usually comes down to what you need to show. Real-world use and texture favor live action. Internal mechanisms, color variants, and products that do not exist as samples yet favor 3D. Many brands use both at different funnel stages.",
  },
  {
    question: "How Long Does It Take to Produce an Ecommerce Video, and How Long Should It Be?",
    answer: "Most projects take two to five weeks depending on complexity. Product page videos typically run 15 to 30 seconds, while ad cuts are often trimmed to 6 to 15 seconds to match social platform norms.",
  },
  {
    question: "Do Ecommerce Product Videos Actually Increase Sales?",
    answer: "Yes. Video on product pages consistently improves ecommerce video conversion rate by giving shoppers the context and confidence photos alone cannot provide before they commit to a purchase.",
  },
  {
    question: "What Video Specs and Formats Do I Need for Shopify, Amazon, and Social Ads?",
    answer: "Requirements vary by platform, from aspect ratio to file size and duration caps, and getting them wrong can mean a rejected listing or a badly cropped ad. We deliver a full set of platform-ready exports so you never re-edit the same video per channel.",
  },
  {
    question: "Do I Own the Raw Footage, and Can I Get Revisions After Delivery?",
    answer: "Yes. You retain your project assets, and every package includes revision rounds so the final video matches your brand before it goes live. Future re-cuts can be scoped separately as your catalog evolves.",
  },
  {
    question: "Why Are Ecommerce Videos So Effective?",
    answer: "They replicate the in-store experience of seeing, understanding, and trusting a product before buying it, which static images and text descriptions cannot do for a shopper deciding from their phone.",
  },
  {
    question: "Do You Handle Voiceover, Music, and Sound Design?",
    answer: "Yes. Voiceover, licensed music, and sound design are handled in-house as part of production, so you receive a fully finished, ready-to-publish video rather than a silent visual that still needs editing.",
  },
];

export const metadata = {
  title: "Ecommerce Video Production Services | Pixel Studios",
  description: "Pixel Studios' ecommerce video production services turn product pages into conversion engines with 3D product animation, demos, and ad-ready video.",
};

export default function EcommerceVideoPage() {
  return (
    <main>
      <Banner
        title="Ecommerce Video Production Built to Convert Browsers into Buyers"
        description="Why do shoppers abandon product pages that have perfectly good photos? Because photos cannot answer the questions that actually decide a purchase. How does it open, how does it fit, what does it feel like to use? Video is the closest thing you can give an online shopper to holding the product, and our ecommerce video production services are built around exactly that job. Pixel Studios Inc. combines 3D product animation, demo-style video, and platform-ready ad content into one production pipeline, engineered around a single question: what does this shopper need to see in the first three seconds to keep watching and eventually buy? Whether that is a hero video on your homepage, a listing video on Amazon, or a fifteen-second ad in a crowded feed, every version is built from one consistent set of assets by the same team."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Ecommerce Video Production"
        title="The Challenge: Selling in a Feed Full of Lookalikes"
        description="What are ecommerce brands really competing against? A screen where every product looks like a thumbnail next to a dozen near-identical alternatives, judged in seconds. Static photography cannot show how a product performs, and live-action shoots are expensive, slow to schedule, and locked in the moment they are filmed. The second your packaging or promotion changes, the footage no longer matches what is for sale. Meanwhile, return rates climb when photos set the wrong expectations, ad fatigue sets in when creative cannot keep pace with the platforms, and every new SKU means another costly shoot. For fast-moving brands, that production bottleneck quietly caps how fast marketing can move."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What does 3D animation for ecommerce fix that photography cannot? A single 3D product animation can be re-cut into a Shopify hero video, an Amazon listing video, and a dozen social ad variants without a reshoot, and it can show internal mechanisms and materials no camera could capture. Brands using animated ecommerce product video report stronger ecommerce video conversion rate performance, lower return rates from clearer expectations, and creative that scales across every platform their customers shop on. New colorways and packaging updates reach your marketing in days instead of waiting weeks for a reshoot."
      />
      <ServicesSection 
        title="Animation Solutions for Ecommerce"
        description="Which video formats actually move the needle for an online store? These four cover the full path from first impression to final checkout, and most of our ecommerce clients end up using at least two of them together."
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
        title={<>Our Ecommerce <br />Animation Process</>}
        description="Speed matters in ecommerce, but so does getting the product exactly right on screen. Our process is built to deliver both, with approval checkpoints early so revisions never derail a launch date."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios?"
        description="Any studio can make a product spin on screen. Making it sell is a different discipline. Here is why brands choose us as their ecommerce video production company."
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
