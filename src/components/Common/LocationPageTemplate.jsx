"use client";

import Banner from "./Banner/Banner";
import StatsSection from "./StatsSection";
import PortfolioShowcase from "./PortfolioShowcase";
import LocationAccordionSection from "./LocationAccordionSection";
import GreatVideosSection from "./GreatVideosSection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";
import MissionSection from "../Home/MissionSection";
import FullCycleSection from "../GameAnimation/FullCycleSection";
import WonderingSection from "../LegalGraphics/WonderingSection";
import WhyInvestSection from "../Animation2D/WhyInvestSection";
import CooperationModelsSection from "../CorporateVideoAnimation/CooperationModelsSection";

/**
 * Shared shell for city/location pages.
 *
 * Keep every city-specific string, image and section data in the page's
 * `content` object. This preserves the existing section design while making
 * a new location page a small configuration file instead of a copied layout.
 */
export default function LocationPageTemplate({ content }) {
  const {
    banner,
    stats,
    mission,
    fullCycle,
    industries,
    services,
    workflow,
    benefits,
    greatVideos,
    testimonials,
    faq,
  } = content;

  return (
    <main>
      <Banner {...banner} />
      <StatsSection {...stats} />
      <MissionSection {...mission} />
      <FullCycleSection {...fullCycle} />
      <PortfolioShowcase />
      <WonderingSection {...industries} />
      <LocationAccordionSection {...services} />
      <WhyInvestSection {...workflow} />
      <CooperationModelsSection {...benefits} />
      <GreatVideosSection {...greatVideos} />
      <TestimonialSection {...testimonials} />
      <FaqSection {...faq} />
    </main>
  );
}
