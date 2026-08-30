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
import WonderingSection from "./WonderingSection";
import WhyInvestSection from "./WhyInvestSection";
import CooperationModelsSection from "./CooperationModelsSection";

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
    portfolio,
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
      <PortfolioShowcase {...portfolio} />
      <WonderingSection 
        subtitle={industries?.eyebrow}
        title={industries?.heading}
        description={industries?.description}
        data={industries?.industries || industries?.data}
      />
      <LocationAccordionSection {...services} />
      <WhyInvestSection 
        subtitle={workflow?.eyebrow}
        title={workflow?.heading}
        description={workflow?.description}
        accordionData={workflow?.items || workflow?.accordionData}
      />
      <CooperationModelsSection 
        subtitle={benefits?.eyebrow}
        title={benefits?.heading}
        description={benefits?.description}
        cards={benefits?.cards}
      />
      <GreatVideosSection {...greatVideos} />
      <TestimonialSection {...testimonials} />
      <FaqSection {...faq} />
    </main>
  );
}
