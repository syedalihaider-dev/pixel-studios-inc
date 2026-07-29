"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Public Awareness Videos",
    description: "Campaign-ready animation for public health, safety, and civic awareness initiatives, built to reach a broad and varied audience across every literacy level.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Training Videos",
    description: "Standardized training video content for agency staff, covering procedures, compliance, and internal policy, deployable consistently across departments and locations.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Videos",
    description: "Clear explainer videos for government programs, benefits, and processes that citizens need to understand and navigate without confusion or repeated calls to a help line.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Data-driven motion graphics for reports, public dashboards, and presentations that need to communicate clearly to a general audience unfamiliar with the underlying subject.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Government"
      description="What does a government animation vendor need to be able to deliver across an agency's communication needs? These four formats span public-facing awareness campaigns through internal staff training, all built with accessibility and accuracy in mind."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;