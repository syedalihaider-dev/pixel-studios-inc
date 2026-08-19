import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/GameTrailer/CostSection";
import StatsSection from "@/components/GameTrailer/StatsSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyInvestSection from "@/components/GameTrailer/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/GameTrailer/GreatVideosSection";
import TeamStandoutSection from "@/components/GameTrailer/TeamStandoutSection";
import TestimonialsSlider from "@/components/GameTrailer/TestimonialsSlider";
import WhyPartnerSection from "@/components/GameTrailer/WhyPartnerSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/GameTrailer/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Game Cinematic Trailers",
    description:
      "Cinematic game trailers that establish a game's world, stakes, and emotional territory for an audience encountering it for the first time. Animation, visual effects, and score synchronized to create the feeling of a world worth entering. Used for announcements, awards season reveals, and the headline marketing moments that define a game's first impression in market.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Gameplay Trailers",
    description:
      "Gameplay trailers that make the act of playing the game look as good as the best session a skilled player has ever had with it. Capture selection, editing rhythm, and the editorial choices that make 90 seconds of gameplay footage feel like the argument for spending 90 hours in the game.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Launch and Announcement Trailers",
    description:
      "Launch trailers for the window when everything is spent on reaching the widest possible audience. Announcement trailers for the moment before that, when the only job is to create a reason to keep watching for what comes next.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Story Trailers",
    description:
      "Narrative trailers for games whose story is a primary commercial argument. The kind of trailer that makes an audience care about characters they have never controlled, in a world they have never visited.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Mobile Game Trailers",
    description:
      "Mobile game trailers built for the context mobile advertising actually runs in: app store pages, paid social campaigns, and the first six seconds a user decides whether to download or scroll. User acquisition-focused creative with measurable conversion objectives rather than entertainment value as the primary design criterion.",
    videoSrc: "https://player.vimeo.com/video/1200540925?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


export const metadata = {
  title: "Top-Tier Gaming Trailer Services to Ignite Your Launch | Pixel Studios",
  description: "Need a game trailer that actually sells the game? Pixel Studios builds cinematic reveal trailers, gameplay trailers, launch trailers, and mobile UA videos. Get a quote.",
};

export default function GameTrailerPage() {
  return (
    <main>
      <Banner
        title="Top-Tier Gaming Trailer Services to Ignite Your Launch"
        description="Pixel Studios produces game trailer services built around the emotional argument the trailer needs to make, and then backwards into the footage, animation, and editing choices that deliver it. We produce cinematic game trailers, gameplay trailers, launch trailers, mobile game trailers, Steam videos, and the announcement content that creates anticipation before the game exists. Every trailer begins with a creative brief that asks what the viewer should feel at the end, not what the viewer should have seen."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection 
        title="Full-Spectrum Game Trailer Services"
        description="Every trailer type serves a specific moment in a game's lifecycle."
        sliderItems={sliderItems}
      />
      <PortfolioShowcase />
      <GreatVideosSection />
      <CostSection />
      <TestimonialsSlider />
      <TeamStandoutSection />
      <WhyInvestSection />
      <WhyPartnerSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
