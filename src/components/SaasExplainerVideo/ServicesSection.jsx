"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Explainer Videos",
    description: "A focused SaaS explainer video built around your core value proposition: the problem, the solution, and the outcome. Sized to hold attention on a homepage without losing the audience halfway, and structured to lead naturally into a signup or demo request.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Product Demo Videos",
    description: "Deeper saas demo video content walking through actual workflows and features, built for sales enablement, gated landing pages, and prospects further along the buying journey who need more than a quick pitch before committing.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "UI Animation",
    description: "Animated recreations of your actual interface: clean, on-brand, and easy to update. Your product looks polished on screen even before a feature ships or a redesign is finalized, and stays consistent across every video you produce.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Supporting motion graphics for feature announcements, in-app messaging, social content, and investor decks, built to match your brand system and reused across channels without a fresh production each time.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for SaaS"
      description="What should saas explainer video services actually deliver beyond a single homepage video? These four formats cover the full funnel, from first visit to activated user, and they are built to share assets so your library grows without rework."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;