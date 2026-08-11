"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

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

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Non-Profits"
      description="What does a nonprofit animation company need to deliver on a limited budget? These four formats cover the full donor journey, from first awareness through a recurring gift, all scoped to fit realistic nonprofit budgets."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;