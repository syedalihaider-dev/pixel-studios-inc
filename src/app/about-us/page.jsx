import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import MissionSection from "@/components/About/MissionSection";
;
import HowWeWorkSection from "@/components/Common/HowWeWorkSection";
import TrustedClientsSection from "@/components/About/TrustedClientsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/Common/FaqSection";


export 









const standoutFeatures = [
  {
    id: 1,
    title: 'Result-Oriented',
    description: "We focus on outcomes, not just output. Every animation is built to drive engagement, leads, and conversions.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Flexible',
    description: "We adapt to your needs, timelines, and goals. Quick iterations and smooth collaboration keep projects moving forward.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Transparent',
    description: "Clear communication at every stage of the process. No hidden steps, just honest updates and aligned expectations.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Experienced',
    description: "A team with proven expertise across multiple industries. We know what works and how to make your content stand out.",
    icon: '/icons/experienced.png'
  }
];

const metadata = {
  title: "About Us - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc About Us page. We are an award-winning digital agency.",
};


const howWeWorkAccordionData = [
  {
    id: 1,
    title: '1 Discovery',
    content: 'We understand your goals, audience, and message.'
  },
  {
    id: 2,
    title: '2 Strategy',
    content: 'We map out the concept and direction that will perform.'
  },
  {
    id: 3,
    title: '3 Script & Storyboard',
    content: 'We turn ideas into a clear narrative and visual flow.'
  },
  {
    id: 4,
    title: '4 Design',
    content: 'We create the visual style aligned with your brand.'
  },
  {
    id: 5,
    title: '5 Animation',
    content: 'We bring everything to life with smooth, engaging motion.'
  },
  {
    id: 6,
    title: '6 Delivery & Revisions',
    content: 'We refine, finalize, and deliver a polished end product.'
  }
];

const faqs = [
  {
    question: "Can you help with custom animations for my specific business?",
    answer: "Yes. We strictly create custom animations tailored to your business. We avoid pre-built templates entirely, ensuring every video is genuinely specific to your brand, audience, and unique goals.",
  },
  {
    question: "What makes your animation company different from the hundreds of others?",
    answer: "We act as a strategic creative partner, not just a production house. We prioritize real business results, ensuring your video actually drives growth and hits your specific goals.",
  },
  {
    question: "Do you offer complete end-to-end video animation services?",
    answer: "Yes. We handle the entire pipeline under one roof—from scriptwriting and storyboarding to animation, sound design, and final delivery—giving you a single, dedicated point of contact.",
  },
  {
    question: "Can you handle animation projects that involve high volume or multiple videos?",
    answer: "We easily scale our production capacity for high-volume campaigns. We utilize structured calendars, dedicated account management, and reusable style systems to efficiently deliver multi-video projects at scale.",
  },
  {
    question: "How long does it take to create a professional animated video?",
    answer: "A standard 60 to 90-second animated video typically takes three to five weeks from brief sign-off to delivery. Complex 3D or VFX projects will require additional time.",
  },
  {
    question: "How many revision rounds are included?",
    answer: "Our standard packages include two full revision rounds built into the production schedule. Additional rounds are available and transparently priced, ensuring clear expectations before production begins.",
  },
  {
    question: "How can animation specifically help grow my business?",
    answer: "Professional video animation services drive growth by increasing engagement with the audience and delivers a clear message to the prospects. Specially when the Video animation team takes a deep dive into understanding about the idea of the product/service and bring the stunning visuals that focused on converting your prospects.",
  },
  {
    question: "Can animated videos genuinely increase conversion rates?",
    answer: "Yes. Well-produced explainer videos significantly boost conversion rates by reducing cognitive friction, keeping visitors engaged, and answering core questions before prospects leave for a competitor.",
  },
  {
    question: "What makes animated video so effective as a marketing format?",
    answer: "Animation visualizes impossible-to-photograph concepts, combines audio and motion for faster brain processing, and gives you total, precise control over every single on-brand visual element.",
  },
  {
    question: "How does animation simplify complex products and services?",
    answer: "It clearly visualizes software workflows, internal device mechanics, or abstract concepts. Animation bridges the gap between your complex product and your audience’s immediate understanding.",
  },
  {
    question: "What is the process for starting a project with Pixel Studios?",
    answer: "Simply book a free 30-minute discovery call to discuss your goals. Within 48 hours, we will provide a detailed, no-obligation proposal outlining the scope, timeline, and investment.",
  },
  {
    question: "Which is more effective for product demos: 2D or 3D animation?",
    answer: "2D is perfect for software interfaces and abstract services, while 3D excels at showcasing physical products from multiple angles. We will help you choose based on your specific brief.",
  },
];

export default function AboutUs() {
  return (
    <main>
      <Banner
        title="About Pixel Studios"
        description="Pixel Studios is a creative video animation company dedicated to bringing ideas to life through powerful visual storytelling. We specialize in crafting high-quality animations that help brands communicate complex concepts with clarity, creativity, and impact."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <MissionSection />
            <TeamStandoutSection
        subtitle="What Makes"
        title={<>Pixel Studio Different?</>}
        description="Every project is tailored to your brand and your goals, with a sharp focus on results. If it doesn’t engage, convert, or make an impact, it doesn’t leave our studio."
        features={standoutFeatures}
        videoSrc="https://player.vimeo.com/video/1201856415?dnt=1&autoplay=1&loop=1&muted=1&background=1"
      />
      <HowWeWorkSection
        heading="How We Work"
        description="We keep the process simple, fast, and focused on results. From the first conversation to final delivery, every step is designed to ensure clarity, speed, and high-quality output without unnecessary delays or confusion."
        accordionData={howWeWorkAccordionData}
      />
      <TrustedClientsSection />
      <TestimonialSection />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
