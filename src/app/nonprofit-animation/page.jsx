import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/NonProfitAnimation/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";
import WhyChooseSection from "@/components/NonProfitAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/NonProfitAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/NonProfitAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/NonProfitAnimation/GreatVideosSection";
import FaqSection from "@/components/NonProfitAnimation/FaqSection";

const sliderItems = [
  {
    id: 1,
    title: "Fundraising Videos",
    description:
      "Emotionally resonant fundraising videos built for galas, campaigns, and giving days, designed to move an audience from awareness to action within a single sitting.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Explainer Videos",
    description:
      "Clear explainer videos introducing a mission, program, or cause to new supporters who are not yet familiar with your work or how it makes an impact.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Awareness Videos",
    description:
      "Campaign-ready awareness content built to reach a broad audience and build support for a cause or issue across every channel.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Data-driven motion graphics that make impact statistics and program outcomes easier to understand, share, and remember.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

export const metadata = {
  title: "Non-Profit Animation Services | Pixel Studios",
  description: "Pixel Studios' non-profit animation services turn missions and campaigns into video that moves donors, volunteers, and communities to act.",
};

export default function NonProfitAnimationPage() {
  return (
    <main>
      <Banner
        title="Non-Profit Animation That Moves People to Act"
        description="A mission statement rarely moves a donor to give. A story does. Our non-profit animation services turn campaigns, missions, and impact stories into video built to reach donors, volunteers, and communities, scoped to fit the budget realities most non-profits actually work within. Every project is scoped around your actual funding, not a corporate production budget, so professional storytelling stays within reach regardless of your organization"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection 
        title="Animation Solutions for Non-Profits"
        description="What does a nonprofit animation company need to deliver on a limited budget? These four formats cover the full donor journey, from first awareness through a recurring gift, all scoped to fit realistic nonprofit budgets."
        sliderItems={sliderItems}
      />
      <WhyChooseSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
