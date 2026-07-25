"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Corporate Explainer Videos",
    description: "Corporate explainer videos that distill complex services, platforms, or business models into a clear 60 to 90-second argument that a new prospect can follow without prior context.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Animated Promotional Videos",
    description: "Animated promotional videos for product launches, campaigns, and brand awareness pushes, built with a conversion objective embedded in the creative structure rather than added at the end.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Training Videos",
    description: "Corporate training videos for onboarding, compliance, and skills development that improve retention and reduce per-learner delivery costs compared to live or static alternatives.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Company Overview Videos",
    description: "Company overview videos that introduce a brand, its values, and its capabilities to new audiences in a format that holds attention, where a static website page cannot.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Business Presentation Videos",
    description: "Animated business presentation videos for pitches, proposals, and client meetings that give sales teams a consistent, polished asset for every high-stakes conversation.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Internal Communication Videos",
    description: "Internal communication videos for company announcements, culture messaging, and organizational changes that reach distributed teams consistently and memorably.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Product Videos",
    description: "Animated product videos that demonstrate features, benefits, and use cases clearly for both marketing audiences and sales conversations requiring visual support.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Corporate Motion Graphics Videos",
    description: "Corporate motion graphics videos for data presentation, brand storytelling, and campaign content, built within a consistent visual brand system across all productions.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Investor Presentation Videos",
    description: "Investor presentation videos that explain business models, market opportunity, and traction to funding audiences who need the story clearly before they engage with the numbers.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Our Corporate Animation Video Production Services"
      description="Our corporate animation video production covers every format a business needs across the customer journey, from first-touch marketing through internal training and investor communication."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
