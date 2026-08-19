import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/VideoEditingServices/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/VideoEditingServices/HowWeWorkSection";
import WhyInvestSection from "@/components/VideoEditingServices/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/VideoEditingServices/GreatVideosSection";
;
import CooperationModelsSection from "@/components/VideoEditingServices/CooperationModelsSection";
import TestimonialsSlider from "@/components/VideoEditingServices/TestimonialsSlider";
import TechnologySection from "@/components/VideoEditingServices/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/VideoEditingServices/FaqSection";











const standoutFeatures = [
  {
    id: 1,
    title: 'Higher Audience Retention',
    description: "Content edited to hold attention at specific drop-off points outperforms unoptimized footage on every platform metric: watch time, completion rate, and algorithmic distribution. The edit is where retention is built.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Better Brand Storytelling',
    description: "The edit is where the story is constructed. A professional video editing team assembles raw material into a narrative sequence that carries the brand message from the hook to the call to action without losing the viewer at the transitions.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Increased Engagement',
    description: "Well-edited video generates higher engagement across every platform because it respects the viewer's time. Tight cuts, clean audio, and purposeful graphic integration produce content audiences finish watching and choose to interact with.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Improved Conversion Rates',
    description: "Video edited with a conversion objective in mind performs measurably better on landing pages and in paid campaigns. Pacing, graphic placement, and call-to-action timing all influence whether a viewer acts or exits.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Consistent Brand Presentation',
    description: "Professional video editing services apply consistent color grading, audio treatment, and graphic standards across every piece of content a brand publishes, building recognition and signaling production investment at every audience touchpoint.",
    icon: '/icons/experienced.png'
  }
];

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "Product demo editing, feature announcements, and thought leadership series with pacing and graphic treatment calibrated for technical B2B audiences.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education videos, medical device content, and clinical training material edited to the accuracy and sensitivity standards healthcare audiences and regulatory environments require.",
    link: "#"
  },
  {
    id: 3,
    title: "Finance and FinTech",
    image: "/industry/03.png",
    text: "Financial product videos, brand communications, and regulatory explainer content for finance audiences that do not accept imprecision in production or message.",
    link: "#"
  },
  {
    id: 4,
    title: "E-Commerce and Retail",
    image: "/industry/04.png",
    text: "Product video editing, promotional campaign content, and brand storytelling where visual quality at the first frame determines whether a product page converts.",
    link: "#"
  },
  {
    id: 5,
    title: "Education and E-Learning",
    image: "/industry/05.png",
    text: "Course content editing, instructional video post production, and educational series finishing for platforms producing video-based learning at scale.",
    link: "#"
  },
  {
    id: 6,
    title: "Real Estate",
    image: "/industry/06.png",
    text: "Property video editing, virtual tour post production, and development marketing content that performs before a buyer sets foot through the door.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups & Enterprises",
    image: "/industry/06.png",
    text: "Pitch video editing for investor confidence and full video post production services for enterprises managing high-volume branded content across multiple departments.",
    link: "#"
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Corporate Video Editing",
    description: "Brand films, company overviews, executive interviews, and investor presentations edited to the visual and audio standard that enterprise brand environments demand. Our corporate video editing team applies the pacing, grade, and treatment that makes corporate content feel polished rather than assembled.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Marketing and Promotional Video Editing",
    description: "Promotional video editing built around the campaign objective. Every cut, transition, and graphic overlay is placed with the conversion goal in mind, from product launches and brand campaigns to lead generation content that is sequenced to hold attention and drive response.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Social Media Video Editing",
    description: "Short form video editing for TikTok video editing, Instagram reel editing, YouTube Shorts editing, and LinkedIn video with correct aspect ratios, pacing, and caption treatment built in from the start, not adapted after the fact.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "YouTube Video Editing",
    description: "YouTube video editing services for brands and creators covering long-form content, series production, chapter structuring, thumbnail frame selection, and end-screen setup that YouTube's algorithm and audience both respond to.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Podcast Video Editing",
    description: "Multi-camera sync, guest isolation cuts, b-roll integration, lower third graphics, and audio cleanup for podcast content published to YouTube and social platforms. Watchable and listenable in equal measure.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Explainer Video Editing",
    description: "Final assembly, audio mixing, motion graphics integration, caption placement, and platform export for animated and live-action explainer video content produced in-house or brought to us for finishing.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Product Video Editing",
    description: "Product video editing for e-commerce listings, product launches, and sales enablement assets. We grade, sequence, and mix product footage to the visual standard that converts browsers into buyers.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Event and Conference Video Editing",
    description: "Multi-camera event video editing for conferences, webinars, and corporate events. Highlight reels, session recordings, and recap videos that turn hours of event footage into content assets that earn views after the event ends.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Training and Educational Video Editing",
    description: "Educational video editing for corporate training, e-learning platforms, and onboarding content. Edited for comprehension and retention using pacing, chapter markers, and visual reinforcement to maximize the learning value of every minute.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Professional Video Editing Services for Brands & Businesses | Pixel Studios",
  description: "Need professional video editing services that make your footage perform? Pixel Studios delivers custom video post production for brands and creators. Get a quote today.",
};

export default function VideoEditingServices() {
  return (
    <main>
      <Banner
        title="Professional Video Editing Services for Brands, Creators, and Businesses"
        description="At Pixel Studios Inc., our professional video editing services exist to close the gap between footage that was captured and content that performs. We are a dedicated video editing studio serving brands, content creators, marketing teams, and agencies across the USA with video post production services that treat the edit as a creative and strategic discipline, not a technical formality."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Video Editing Services We Offer"
        description="Our video editing studio covers every post production format a brand, creator, or marketing team needs. Delivered by in-house editors with clear timelines and structured revision rounds."
        sliderItems={sliderItems}
      />
      <HowWeWorkSection />
      <PortfolioShowcase />
      <GreatVideosSection />
            <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>Benefits of Professional <span>Video Editing</span></>}
        description="What professional video editing services produce for a brand's content performance that template or amateur editing cannot replicate."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1064482488?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialsSlider />
      <IndustrySection 
        heading="Video Editing Solutions for Every Industry"
        description="Our professional video editing services apply specific post production approaches to each industry."
        industries={industries}
        variant="gradient"
      />
      <TechnologySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}