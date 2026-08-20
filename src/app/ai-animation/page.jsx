import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import CostSection from "@/components/AnimationAI/CostSection"
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import StepProcessSection from "@/components/AnimationAI/StepProcessSection";
import TestimonialsSlider from "@/components/AnimationAI/TestimonialsSlider";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

const industries = [
  {
    id: 1,
    title: "Anime-Style Animation",
    image: "/industry/01.png",
    text: "The aesthetic codes of anime are applied to brand content, character animation, and commercial video at a timeline that traditional anime production cannot match.",
    link: "#"
  },
  {
    id: 2,
    title: "2D AI Animation",
    image: "/industry/02.png",
    text: "2D AI animated videos with the flat illustration aesthetic that works across social media, explainers, and brand campaigns. Clean, intentional, and on-brand between every frame.",
    link: "#"
  },
  {
    id: 3,
    title: "3D AI Animation",
    image: "/industry/03.png",
    text: "3D AI animation for product content, architectural visualization, and cinematic brand sequences where dimensional quality matters and the timeline does not allow traditional 3D production.",
    link: "#"
  },
  {
    id: 4,
    title: "Stylized Cinematic Animation",
    image: "/industry/04.png",
    text: "High-production-value cinematic animation with AI-assisted visual generation and expert compositing. The cinematic quality of traditional production at a meaningfully faster pace.",
    link: "#"
  },
  {
    id: 5,
    title: "Realistic AI Animation",
    image: "/industry/05.png",
    text: "Photorealistic AI animation for product and brand content where the visual standard is photorealistic rendering, but the timeline and budget of traditional CGI are not viable.",
    link: "#"
  },
  {
    id: 6,
    title: "Cartoon Animation",
    image: "/industry/06.png",
    text: "AI-accelerated cartoon animation that retains the expressive character performance that makes cartoon content emotionally engaging. The AI speeds up the frames. The animator ensures they tell the story.",
    link: "#"
  },
  {
    id: 7,
    title: "Motion Graphics Design",
    image: "/industry/06.png",
    text: "AI-assisted motion graphics for brand content, data visualization, and marketing campaigns where the design language needs to be consistent across a high volume of assets.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "AI Anime Opening Animation",
    description:
      "Anime-style opening sequences and title animations produced with AI-assisted visual generation and expert motion design. The aesthetic quality of anime opening animation is without the multi-month production timeline of traditional hand-drawn production.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "AI Explainer Videos",
    description:
      "AI-powered explainer video production that compresses the visual development timeline without compressing the strategic clarity that makes an explainer video actually explain something. The script is still the argument. The AI accelerates how fast the visual case is assembled around it.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "AI Motion Graphics Animation",
    description:
      "AI motion graphics animation for brand content, social media, and marketing campaigns where the visual quality needs to compete with traditional production at a fraction of the timeline and cost.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "AI Commercial Animation",
    description:
      "AI commercial animation for paid advertising campaigns that need multiple creative variations tested at a pace that traditional production cannot support. Generate, test, optimize, repeat. AI makes the loop faster without making the creative decisions for you.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "AI Product Animation",
    description:
      "AI-assisted product animation for e-commerce, marketing, and sales content. Faster than traditional 3D production. Better than what an AI tool produces without an animator in the room.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "AI Character Animation",
    description:
      "AI character animation for brand characters, mascots, and narrative content. The character stays on-brand between frames because a human with brand standards is reviewing every one of them.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "AI Music Video Production",
    description:
      "AI-powered music video production for artists, labels, and brands, building audio-visual content at a scale that traditional production cannot make economically viable. Visual storytelling that matches the track's emotional register rather than illustrating the lyrics literally.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "AI Social Media Animation",
    description:
      "AI animated videos for social media content calendars that require more volume than traditional animation production can sustain. Platform-native formats, on-brand visual style, and the creative direction that makes each piece feel intentional rather than generated.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "AI Cinematic Trailer Animation",
    description:
      "AI cinematic trailer animation for films, games, events, and product launches where the production quality of the trailer needs to match the ambition of the thing it is announcing.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "AI Logo Animation",
    description:
      "AI-assisted logo animation for brands that need a polished motion identity faster than traditional motion design timelines allow. The logo moves like it was designed to move, not like a tool decided it should.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];



const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: "1 Faster Turnaround",
    content:
      "AI animation production moves faster than traditional animation production. Not because the creative work disappears, but because the tool eliminates the parts of production that were always mechanical rather than creative. The speed gain is real, and it flows directly to the client."
  },
  {
    id: 2,
    title: "2 Cost-Efficiency",
    content:
      "Faster production means lower cost at equivalent quality. Not lower quality at lower cost. The same creative direction and quality control are applied to an AI-assisted pipeline that gets the job done in less billable time."
  },
  {
    id: 3,
    title: "3 Creative Control",
    content:
      "Every piece of AI animation content we produce is reviewed and directed by an experienced animator. The AI generates. The animator directs. Your brand stays on-brand because a person with brand standards is in the room."
  },
  {
    id: 4,
    title: "4 Scalable Output",
    content:
      "AI animation makes high-volume content production viable at quality levels that traditional production could not sustain at that volume. More content. More formats. More platform variations. Without proportionally more time and cost."
  },
  {
    id: 5,
    title: "5 Expert Insight",
    content:
      "We have worked with AI animation tools across enough production contexts to know what they are good at and where they require human correction. That knowledge is what separates our output from the brands running AI tools without experienced oversight."
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Creative Discovery and Strategy",
    content:
      "Brand brief, audience, platform requirements, and campaign objective are established before any AI tool is opened. The strategic foundation is the same as any traditional production. The AI is a production tool that serves the strategy, not a replacement for having one.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Scriptwriting and Storyboarding",
    content:
      "Script and storyboard developed by humans. The argument the animation makes, and the sequence it makes, it in are not tasks AI tools do reliably. The creative direction is human. The execution is where AI accelerates.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "AI Asset and Visual Generation",
    content:
      "AI-assisted visual generation for assets, environments, and character references, where the tool can produce qualified options faster than traditional illustration. Expert creative review at every generation stage to ensure brand consistency and quality standards.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Animation and Motion Design",
    content:
      "Motion direction applied to AI-generated assets by animators who understand pacing, timing, and the difference between motion that serves the story and motion that distracts from it.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Visual Effects and Compositing",
    content:
      "VFX and compositing layer applied in post to add the production depth that makes AI animation feel finished rather than generated. This stage is where raw AI output becomes broadcast-quality content.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Sound Design and Final Delivery",
    content:
      "Professional voiceover, music, and sound design were applied to the completed animation. Final delivery in every format and platform specification the campaign requires.",
  },
];

const title = (
    <>
      Ready to Scale Your <span>Animation</span> Without Sacrificing Your Brand?
    </>
  );

const text = "AI animation is not a shortcut. It is a faster route to the same destination when it is run by people who know where they are going. Tell us the brief. We will tell you what AI can do for it and what it will cost.";

const faqs = [
  {
    question: "How does AI animation work, and why is it effective for businesses?",
    answer:
      "AI animation uses generative AI tools to accelerate visual creation, then applies expert creative direction and post-production to bring the output to a finished quality level. For businesses, it means faster content production at lower cost without the quality compromise that unmanaged AI tools produce.",
  },
  {
    question: "How long does it typically take to produce an AI animation video?",
    answer:
      "AI-assisted production is typically 30 to 50 percent faster than equivalent traditional production. A 60-second explainer video that would traditionally take four weeks can be completed in two to three weeks with AI-assisted production. Complex productions with high brand specificity take longer because the expert review and refinement stages are unchanged.",
  },
  {
    question: "Which businesses or organizations find AI animation most useful?",
    answer:
      "Brands with high-volume content requirements, organizations that need faster production cycles for campaign testing, companies whose production budget cannot support traditional animation at their required volume, and businesses that want to test animation at a lower cost before committing to a larger production.",
  },
  {
    question: "Do AI animation projects come with voiceovers and soundtracks?",
    answer:
      "Yes. Professional voiceover, music selection, and sound design are standard in every AI animation production. The audio production is not AI-generated. It is produced by our audio team to the same standard as our traditional animation projects.",
  },
  {
    question: "Are revisions included in AI animation projects?",
    answer:
      "Yes. Two structured revision rounds are standard. Revision scope is defined in the brief before production begins. AI-assisted production does not change the revision process.",
  },
  {
    question: "Will Just Animations allow changes to AI animation videos after delivery?",
    answer:
      "Source files are delivered with every project, and changes to delivered animations are available as a separate engagement. Most revisions requested after final delivery are handled efficiently because the source files are structured for it.",
  },
  {
    question: "Are there discounts available for bulk AI animation video orders?",
    answer:
      "Yes. Multi-video packages and ongoing retainer arrangements are priced with volume efficiencies applied. The AI pipeline is particularly suited to high-volume content production, and the pricing reflects that.",
  }
];

export const metadata = {
  title: "AI Animation Services for Smart, Scalable Storytelling | Pixel Studios",
  description: "AI animation services that combine the speed of AI with the creative control your brand actually needs. Pixel Studios delivers AI-powered animation without the uncanny valley. Get a quote.",
};

export default function AnimationAIPage() {
  return (
    <main>
      <Banner
        title="AI Animation Services for Smart, Scalable Storytelling"
        description="At Pixel Studios Inc., our AI animation services combine the production velocity that AI tools now make possible with the creative direction, quality control, and strategic thinking that AI cannot replace. The result is an animation that is faster than traditional production and better than unmanaged AI output. Both things at once."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection
        heading="A Trusted Animation Company for AI Animation"
        statsData={statsData}
        variant="gradient"
      />
      <CostSection />
      <ServicesSection 
        title="Our AI Animation Services"
        description="Every AI animation service we offer is produced with AI tools under expert creative direction. The speed is real. The creative control is too."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <HowWeWorkSection
        heading="Why Choose Pixel Studios for AI-Powered Animation?"
        description="AI animation is only valuable when it produces better business outcomes, not just faster videos. We combine advanced AI tools with experienced creative direction to deliver high-quality animation that stays on-brand, scales efficiently, and meets professional production standards."
        accordionData={howWeWorkAccordionData}
      />
      <WhyInvestSection
        subtitle="OUR PROCESS"
        title="Our AI Animation Production Process"
        description="Every AI animation project follows a structured production workflow that combines strategic planning, human creative direction, and AI-assisted execution. The technology accelerates production, but every stage is guided, reviewed, and refined by experienced professionals to ensure quality, consistency, and brand alignment from concept to final delivery."
        accordionData={whyInvestAccordionData}
      />
      <StepProcessSection />
      <TestimonialsSlider />
      <IndustrySection 
        heading="AI Animation Styles We Create"
        description="Our AI animation studio produces a wide range of animation styles, combining AI-powered production with professional creative direction to deliver visually consistent, high-quality content for every platform and campaign."
        industries={industries}
        variant="gradient"
      />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
