import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/Common/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import WhyInvestSection from "@/components/Common/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialsSlider from "@/components/VideoEditingServices/TestimonialsSlider";
import TechnologySection from "@/components/VideoEditingServices/TechnologySection";
import IndustrySection from "@/components/Common/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";

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

const statsData = [
  { end: 500, suffix: '+', label: 'Projects\nDelivered' },
  { end: 97, suffix: '%', label: 'Client Retention\nRate' },
  { end: 12, suffix: '+', label: 'Industries\nServed' },
  { end: 95, suffix: '%', label: 'On-Time\nDelivery' },
];

const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Video Trimming and Sequencing',
    content: "Strategic assembly of footage into a narrative sequence that serves the brief and the audience's attention profile.Cutting decisions are made based on story logic, not on what was easiest to shoot."
  },
  {
    id: 2,
    title: '2 Motion Graphics Integration',
    content: 'On-brand motion graphics, animated titles, lower thirds, and call-to-action overlays produced in After Effects and integrated into the edit at the appropriate stage.'
  },
  {
    id: 3,
    title: '3 Color Correction and Color Grading',
    content: 'Technical color correction to establish accuracy, followed by color grading to establish emotional tone. Footage matched across cameras, exposure corrected, and grade applied to fit the brand and the distribution environment.'
  },
  {
    id: 4,
    title: '4 Audio Enhancement',
    content: 'Dialogue cleanup, noise reduction, level normalization, and acoustic treatment for location recordings and voiceover tracks to meet broadcast and platform loudness standards.'
  },
  {
    id: 5,
    title: '5 Sound Design and Mixing',
    content: 'Sound design, music selection, and full audio mixing for branded video content. Final audio produced to the loudness and dynamic range specifications of every platform in the delivery package.'
  },
  {
    id: 6,
    title: '6 Visual Effects',
    content: 'VFX compositing, screen replacements, environmental effects, and graphic overlays applied with the production discipline of broadcast-standard video post production services.'
  },
  {
    id: 7,
    title: '7 Subtitle and Caption Creation',
    content: 'Accurate, frame-timed subtitle creation and caption services for accessibility compliance, social media silent-viewing optimization, and multilingual distribution. Not auto-generated and unchecked.'
  },
  {
    id: 8,
    title: '8 Multi-Platform Export Optimization',
    content: "Final delivery in every format, resolution, aspect ratio, and codec specified at kickoff. YouTube, Instagram, TikTok, LinkedIn, broadcast, and web formats produced to each platform's specifications."
  }
];

const whyInvestAccordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Project Discovery',
    content: 'Brief, audience, platform requirements, brand standards, and delivery timeline established before touching the footage. Every post production decision that follows is traceable to something confirmed here.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Footage Review and Organization',
    content: 'All footage logged, reviewed, and organized before the edit begins. Usable material identified, technical issues flagged, and the asset library built before the timeline opens.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Editing and Story Development',
    content: "Rough cut assembled around the brief: scene selection, sequence logic, pacing, and story structure. This is where the performance of the final video is built and where we invest most of our editorial attention.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Motion Graphics and Effects',
    content: 'Branded motion graphics, titles, lower thirds, and VFX integrated after the picture cut is locked. Graphics serve the story rather than being added decoratively after the fact.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Audio Enhancement',
    content: 'Full audio treatment: dialogue cleanup, noise reduction, music placement, sound design, and final mix to the loudness specifications of every delivery platform.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Client Feedback and Revisions',
    content: 'Draft submitted for your structured revision round. Every note documented and confirmed before changes are made. We ask, confirm, and fix the right thing rather than guessing at ambiguous feedback.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files exported in every format specified at kickoff. Platform technical specifications confirmed. Source project files available in most project scopes. ',
  }
];

const title = (
  <>
    Discuss Your <span>Video Editing</span> Requirements
  </>
);

const text = "Tell us your footage volume, platform targets, brand standards, and timeline. We will tell you what approach we would take and what a realistic turnaround and investment looks like.";

const cooperationModelsCards = [
  {
    id: 1,
    icon: "/game-development/outstaffing.png",
    title: "Experienced Video Editors",
    text: "Our video editing team has worked across corporate, marketing, social media, e-learning, healthcare, and entertainment content with cross-industry post production experience that reduces briefing overhead on every new project."
  },
  {
    id: 2,
    icon: "/game-development/dedicated-team.png",
    title: "Fast Turnaround Times",
    text: "Most standard video editing projects complete in three to seven business days from footage delivery and brief sign-off. Rush delivery available. Quality protected within compressed timelines."
  },
  {
    id: 3,
    icon: "/game-development/managed-outsourcing.png",
    title: "Dedicated Project Managers",
    text: "One project manager from brief to delivery on every project. One point of contact. Every milestone dated. Every revision round structured and documented."
  },
  {
    id: 4,
    icon: "/game-development/managed-outsourcing.png",
    title: "Scalable Editing Support",
    text: "From a single campaign video to an ongoing video editing agency partnership managing a full content calendar, we scale the team and workflow to the volume and frequency you need."
  },
  {
    id: 5,
    icon: "/game-development/managed-outsourcing.png",
    title: "High-Quality Production Standards",
    text: "Broadcast-standard color grading, professional audio mixing, and platform-specific export quality on every delivery. Not a premium tier. The baseline."
  },
  {
    id: 6,
    icon: "/game-development/managed-outsourcing.png",
    title: "Flexible Engagement Models",
    text: "Project-based video editing services for one-off campaigns. Retainer-based online video editing services for brands and creators with ongoing production needs. Both options priced transparently."
  }
];

const faqs = [
  {
    question: "What are video editing services?",
    answer: "Video editing services cover all post production work required to turn raw footage into finished content: cutting, sequencing, color grading, audio mixing, motion graphics, caption creation, and platform export. Professional video editing services apply editorial judgment and technical expertise to produce content that performs in its distribution environment.",
  },
  {
    question: "How much does video editing cost?",
    answer: "A professionally edited 60 to 90-second marketing video typically starts in the $300 to $800 range. Corporate video editing with motion graphics, color grading, and multi-camera assembly runs $800 to $2,500 or more. Ongoing retainer-based video editing services are priced by volume and frequency. Itemized quotes within 48 hours of a discovery call.",
  },
  {
    question: "How long does professional video editing take?",
    answer: "Most standard video editing projects complete in three to seven business days from footage delivery and brief sign-off. Complex multi-camera productions and projects requiring extensive motion graphics take longer. Every project receives a specific delivery date at kickoff, not a range.",
  },
  {
    question: "Can you edit videos for YouTube?",
    answer: "Yes. YouTube video editing services are among our most requested formats. We handle long-form content, YouTube Shorts editing, chapter marker setup, thumbnail frame selection, and export to YouTube's technical specifications, as well as short-form cuts for social media distribution.",
  },
  {
    question: "Do you provide subtitles and captions?",
    answer: "Yes. Accurate, frame-timed subtitle creation and caption services are included in standard packages. We produce properly formatted captions rather than auto-generated transcripts, available in multiple languages for multilingual distribution.",
  },
  {
    question: "Can you add motion graphics to videos?",
    answer: "Yes. Motion graphics integration is a standard component of our professional video editing services. Branded lower thirds, title sequences, call-to-action overlays, and animated graphic elements produced in After Effects and integrated into the edit.",
  },
  {
    question: "What file formats do you deliver?",
    answer: "Standard delivery includes MP4 in multiple resolutions, MOV for broadcast and post production handoffs, and platform-specific exports for YouTube, Instagram, TikTok, LinkedIn, and Facebook. All formats confirmed at project kickoff.",
  },
  {
    question: "Do you edit short-form videos for social media?",
    answer: "Yes. Short form video editing is one of our most active service areas: TikTok video editing, Instagram reel editing, YouTube Shorts editing, and LinkedIn video. Platform-native formats, aspect ratios, and caption treatment built in from the start.",
  },
  {
    question: "Can you improve audio quality?",
    answer: "Yes. Audio enhancement is included in our video post production services: dialogue cleanup, noise reduction, level normalization, and final mixing to broadcast and platform loudness standards without losing the natural quality of the original recording.",
  },
  {
    question: "How many revisions are included?",
    answer: "Two full revision rounds standard in every video editing project. Additional rounds available and priced upfront. All revision terms documented before production begins.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We sign NDAs for clients requiring confidentiality before sharing footage, brand assets, or proprietary content. Standard for corporate video editing clients, enterprise brands, and projects involving pre-release footage or internal communications.",
  },
  {
    question: "Can you handle ongoing video editing projects?",
    answer: "Yes. Our online video editing services are available on a retainer basis for brands and creators with ongoing needs. Retainer agreements cover weekly or monthly editing volumes with agreed turnaround times, dedicated editors, and priority scheduling. ",
  },
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
      <StatsSection
        heading="A Trusted Animation Company For Video Editing Services"
        statsData={statsData}
        variant="gradient"
      />
      <ServicesSection
        title="Video Editing Services We Offer"
        description="Our video editing studio covers every post production format a brand, creator, or marketing team needs. Delivered by in-house editors with clear timelines and structured revision rounds."
        sliderItems={sliderItems}
      />
      <HowWeWorkSection
        heading="What's Included in Our Video Editing Services?"
        description="Our video post production services cover every technical element that turns raw footage into finished, platform-ready content."
        accordionData={howWeWorkAccordionData}
      />
      <PortfolioShowcase />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <TeamStandoutSection
        subtitle="WHAT MAKES"
        title={<>Benefits of Professional <span>Video Editing</span></>}
        description="What professional video editing services produce for a brand's content performance that template or amateur editing cannot replicate."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1064482488?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title="Our Video Editing Process"
        description="Every video editing project follows a structured process from footage receipt to final delivery."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        subtitle="Quality. Speed. Reliability"
        title="Why Choose Our Video Editing Company?"
        description="What specifically distinguishes Pixel Studios as a professional video editing agency."
        cards={cooperationModelsCards}
      />
      <TestimonialsSlider />
      <IndustrySection
        heading="Video Editing Solutions for Every Industry"
        description="Our professional video editing services apply specific post production approaches to each industry."
        industries={industries}
        variant="gradient"
      />
      <TechnologySection />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}