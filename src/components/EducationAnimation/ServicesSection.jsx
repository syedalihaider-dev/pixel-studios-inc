"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Corporate Videos",
    description: "Polished corporate video content for leadership communications, company milestones, and external-facing brand storytelling, produced to a consistent standard across every business unit and region.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Training Videos",
    description: "Scalable training video content for onboarding, compliance, and skills development, built to be deployed across large, distributed teams without losing quality between locations.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description: "Enterprise explainer video animations that clarify complex products, processes, or organizational changes for internal or external audiences, built to reduce repeated questions and confusion.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Data-driven motion graphics for reporting, internal dashboards, and executive presentations that need to communicate quickly and clearly to a busy leadership audience.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Enterprise"
      description="What does an enterprise animation company actually need to deliver across a large organization? These four formats cover the range most enterprise teams need, from internal leadership updates to external brand storytelling, all built to the same governed brand standard."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;