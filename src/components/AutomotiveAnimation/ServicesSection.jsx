"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "3D Product Animation",
    description: "Photorealistic vehicle animation showing exterior design, interior features, and finishes from every angle, built directly from CAD data for accuracy down to the panel gap.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Technical Animation",
    description: "Exploded-view and mechanical animations that reveal drivetrain, suspension, and safety systems for engineering documentation, technical marketing, and after-sales training.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Commercial Animation",
    description: "Launch-ready commercial animation built for TV, digital, and dealership use, combining cinematic visuals with confidential-safe production well before a physical unit exists.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "CGI",
    description: "High-end CGI production for hero campaigns, configurator visuals, and flagship launch content requiring the highest visual standard in the category.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Automotive"
      description="What does automotive animation actually need to cover, from concept to showroom? These four formats span confidential CAD-based visualization through launch-ready commercial content, built from the same source data throughout."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;