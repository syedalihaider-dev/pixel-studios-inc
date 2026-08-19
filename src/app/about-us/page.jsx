import TeamStandoutSection from "@/components/Common/TeamStandoutSection";




import Banner from "@/components/Common/Banner/Banner";
import MissionSection from "@/components/About/MissionSection";
;
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import TrustedClientsSection from "@/components/About/TrustedClientsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/About/FaqSection";


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
      <HowWeWorkSection />
      <TrustedClientsSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
