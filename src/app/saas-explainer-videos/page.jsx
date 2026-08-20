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
    title: "Onboarding",
    description: "Guided walkthrough videos that shorten time-to-value for new users and cut repetitive support questions in the first weeks after signup, so users reach their first win faster.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Feature Launches",
    description: "Short, focused videos announcing new functionality to users and prospects, timed to your release schedule and built to drive adoption rather than just awareness.",
    icon: "/industry/services-icon-02.png",
  },
  {
    id: 3,
    title: "Sales",
    description: "Demo and pitch-ready assets giving your sales team one consistent way to explain the product in every call and every deck, regardless of rep experience level.",
    icon: "/industry/services-icon-03.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Explainer Videos",
    description: "A focused SaaS explainer video built around your core value proposition: the problem, the solution, and the outcome. Sized to hold attention on a homepage without losing the audience halfway, and structured to lead naturally into a signup or demo request.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Product Demo Videos",
    description: "Deeper saas demo video content walking through actual workflows and features, built for sales enablement, gated landing pages, and prospects further along the buying journey who need more than a quick pitch before committing.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "UI Animation",
    description: "Animated recreations of your actual interface: clean, on-brand, and easy to update. Your product looks polished on screen even before a feature ships or a redesign is finalized, and stays consistent across every video you produce.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Supporting motion graphics for feature announcements, in-app messaging, social content, and investor decks, built to match your brand system and reused across channels without a fresh production each time.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your product, audience, and business goals, including a walkthrough of your actual platform with your team, to understand how users interact with the software and where animation will create the biggest impact. Whether the objective is increasing trial signups, improving onboarding, supporting sales, or explaining a complex workflow, we define the right video strategy before production begins so every scene has a clear purpose.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "Our team develops a script and creative concept around the exact action you want viewers to take. Instead of listing features, we build a story that demonstrates the problem, introduces your product naturally, and highlights the workflows, integrations, and benefits that matter most to your audience, whether they are decision-makers, end users, or enterprise buyers.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene, transition, interface interaction, and camera movement is mapped and approved before animation begins. This ensures the messaging flows naturally, the pacing keeps viewers engaged, and every product feature appears in the right sequence without creating unnecessary revisions later in production.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "We recreate your interface, brand assets, illustrations, icons, typography, and visual language to match your actual product as closely as possible. Every UI element is designed for consistency across current and future videos, making it easier to update animations as your software evolves without rebuilding everything from scratch.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Our animators bring the approved storyboard to life with polished motion, interface interactions, transitions, and visual effects that keep viewers focused on your product rather than distracting design. Throughout production, we refine every sequence through structured feedback rounds until the video communicates clearly, feels natural, and supports your conversion goals.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "After final approval, we deliver your SaaS animation in every format your business needs, including homepage embeds, landing pages, sales presentations, onboarding flows, social media campaigns, product launches, and paid advertising. Every export is optimized for its destination, so your team receives ready-to-publish assets without additional editing or formatting.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A SaaS explainer video company trusted by startups, scale-ups, and enterprise software providers across industries. From project management and fintech platforms to healthcare, AI, HR, cybersecurity, and B2B SaaS products, we understand how different audiences evaluate software and build videos that explain complex workflows in language buyers actually understand. Every project is tailored to the stage of your business, whether you are launching your first product or expanding an established multi-product ecosystem."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every animation is created around your real product, interface, brand identity, and customer journey rather than relying on stock assets or generic SaaS templates. We recreate your UI, messaging, and workflows with precision so your video feels like a natural extension of your software. The result is an explainer that reflects your product accurately while remaining flexible enough to support future updates, feature launches, and additional marketing campaigns."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Software moves quickly, and your creative assets have to keep pace. Our production schedules are designed around launch dates, product releases, marketing campaigns, fundraising milestones, and customer onboarding initiatives. Structured approvals and efficient workflows help us deliver high-quality animation on schedule without sacrificing storytelling, visual polish, or technical accuracy."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "You work with one dedicated project manager from discovery through final delivery, ensuring clear communication at every stage. Product managers, designers, developers, marketers, founders, and sales teams remain aligned throughout production while feedback is organized into a streamlined review process. The result is a smoother collaboration, faster approvals, and a final video that supports every department with one consistent visual story."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>SaaS Animation</span> Project
    </>
  );

const text =
    "If your product is stronger than your homepage makes it look, that is a fixable problem. Talk to our team about your platform, your audience, and your growth goals, and we will build the SaaS explainer video that turns visitors into signups and signups into activated users, without adding a single call to your sales team's calendar. The first conversation is free, and it usually saves weeks of internal debate about what the video should say.";

const faqs = [
  {
    question: "What Is a SaaS Explainer Video?",
    answer:
      "A SaaS explainer video is a short animated or motion graphics video that explains what your software does, who it is for, and why it is worth trying. It typically lives on a homepage, landing page, or in early sales conversations to build quick understanding.",
  },
  {
    question: "What's the Difference Between a SaaS Explainer Video and a Product Demo Video?",
    answer:
      "A saas explainer video prioritizes clarity and hook, condensing your value proposition into under two minutes for a cold audience. A product demo video runs longer and walks through specific features and use cases for a warmer audience that needs depth before deciding.",
  },
  {
    question: "Will My SaaS Explainer Video Become Outdated When We Update Our UI or Features?",
    answer:
      "It can, which is why we design UI animation sequences to be updated efficiently rather than rebuilt. Most UI or minor feature updates can be reflected with a partial revision instead of a full new production.",
  },
  {
    question: "How Many SaaS Explainer Videos Does a Growing Company Actually Need?",
    answer:
      "Most companies start with one core explainer for the homepage, then add feature-specific or use-case-specific videos as the product and customer segments expand over time.",
  },
  {
    question: "Should Our SaaS Explainer Video Show Our Real Product Interface or Use Abstract Animation?",
    answer:
      "It depends on maturity and audience. Showing the real interface builds credibility and sets accurate expectations. Abstract animation works well for earlier-stage products or conceptual value propositions that are harder to demo directly.",
  },
  {
    question: "Where Should a SaaS Explainer Video Live: Homepage, Gated Landing Page, or Both?",
    answer:
      "Most SaaS companies benefit from a short version on the homepage for immediate clarity and a longer, more detailed version on a gated landing page or sales deck for prospects further down the funnel.",
  },
  {
    question: "How Do We Measure Whether a SaaS Explainer Video Is Actually Working?",
    answer:
      "Common metrics include video completion rate, homepage-to-signup conversion lift, and reduced sales call length, since a good explainer means less needs to be explained live on every call. Set a baseline before launch so the comparison is clean.",
  },
  {
    question: "Can an Existing SaaS Explainer Video Be Updated Instead of Remade From Scratch?",
    answer:
      "Yes, in most cases. If the core structure and assets are still usable, we can update messaging, UI screens, or branding without a full rebuild, which saves both time and budget.",
  },
  {
    question: "Do You Provide Different Video Lengths for Different Funnel Stages?",
    answer:
      "Yes. Most SaaS clients need a 30 to 60 second version for the homepage and paid ads, plus a 90 to 120 second version for gated content, sales decks, and deeper product education.",
  },
  {
    question: "Can You Localize a SaaS Explainer Video for Multiple Markets or Languages?",
    answer:
      "Yes. Voiceover, subtitles, and on-screen UI text can all be localized, which is common for SaaS companies expanding into new international markets without producing a new video per region.",
  },
  {
    question: "What Makes the Best Explainer Videos for SaaS Different From Average Ones?",
    answer:
      "The best explainer videos for SaaS earn attention in the first five seconds, show the actual product rather than vague metaphors, and end with one clear next step. Average ones try to say everything and end up saying nothing memorable.",
  },
];

export const metadata = {
  title: "SaaS Explainer Video Services | Pixel Studios",
  description: "Pixel Studios' SaaS explainer video services turn complex software into clear, conversion-focused video for onboarding, demos, and sales.",
};

export default function SaasExplainerVideoPage() {
  return (
    <main>
      <Banner
        title="SaaS Explainer Videos That Turn Visitors into Signups"
        description="Why do great products lose signups on the homepage? Because software sells itself only after someone understands what it does, and most visitors bounce before they get there. Our SaaS explainer video services close that gap, translating complex product logic, workflows, and interfaces into video a prospect can absorb in under two minutes. Pixel Studios Inc. builds every video as the sales asset it is, not a design exercise. We work directly from your actual UI, brand system, and buyer personas rather than a generic SaaS template, so the finished video moves people from confused to convinced without a live demo call, and keeps working across your homepage, onboarding flow, and sales deck at the same time. One production, three jobs, and a video library that grows with your product instead of going stale the moment you ship your next release."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="SaaS Explainer Videos"
        title="Why Animation Matters in the SaaS Industry?"
        description="What makes SaaS uniquely hard to market? The product is abstract.
                There is nothing to photograph, and the value lives inside a
                dashboard or integration that only makes sense once someone has
                used it. Homepage visitors decide in seconds whether your
                product deserves attention, long before a live demo, and a wall
                of feature bullets rarely closes that gap. Product teams ship
                constantly, so marketing and onboarding materials go stale fast.
                Support fields the same UI questions repeatedly because written
                docs do not stick, and sales cycles stretch when prospects
                cannot picture the product in their workflow until several calls
                in. For a category where trials and demos drive conversion, that
                early confusion costs signups and momentum a growing company
                cannot easily recover, especially when a better-funded
                competitor is explaining the same problem more clearly."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="What does a SaaS explainer video actually change? It compresses the
            entire understanding gap into a couple of focused minutes. Instead
            of asking a visitor to imagine the platform, a saas demo video
            shows the interface, workflow, and outcome in motion, which builds
            confidence faster than screenshots ever could. Companies investing
            in SaaS animation videos see stronger saas video ROI through higher
            trial signups, shorter sales cycles, and fewer onboarding tickets,
            because the same video that convinces a prospect can also walk a new
            user through their first login. Your sales team gets a consistent
            asset that explains the product identically every time, whichever
            rep is presenting."
      />
      <ServicesSection 
        title="Animation Solutions for SaaS"
        description="What should saas explainer video services actually deliver beyond a single homepage video? These four formats cover the full funnel, from first visit to activated user, and they are built to share assets so your library grows without rework."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common SaaS <span>Animation</span> Projects</>}
        description="Where does SaaS explainer production create the most measurable impact? Three recurring project types, each mapped to a metric your team already tracks."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our SaaS <br />Animation Process</>}
        description="Your product changes fast, so our process is built for speed without sacrificing quality or control. Early approvals, reusable UI assets, and structured review milestones keep production efficient while making future updates simple. Here is how we turn your software into a video that supports marketing, sales, onboarding, and product adoption."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="WHY PIXEL STUDIOS"
        title="Why Choose Pixel Studios?"
        description="The best explainer videos for SaaS look effortless, but behind every successful animation is a production process built around strategy, product knowledge, and clear communication. Templates can imitate motion, but they cannot explain your software, your workflows, or your competitive advantage. At Pixel Studios, every project is built around your actual product, giving your marketing, sales, and onboarding teams a video that continues delivering value long after launch. Here is why growing software companies choose our custom SaaS explainer video studio."
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
