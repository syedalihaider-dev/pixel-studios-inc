"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Explainer Videos",
    description: "Financial explainer videos that introduce a product, service, or concept clearly and accurately, built for client-facing use across digital and in-person channels, from a website to a branch office screen.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Data visualization and motion graphics that make performance data, market trends, and portfolio information easier to understand at a glance, without oversimplifying the numbers behind them.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Videos",
    description: "Institutional video content for leadership communications, investor relations, and brand storytelling within financial services, built to reflect the stability and professionalism the sector demands.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Demos",
    description: "Walkthroughs of banking apps, trading platforms, and financial tools that reduce onboarding confusion and support customer adoption from the very first login.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Finance"
      description="What does a finance animation production partner need to cover across a full client relationship? These four formats span client-facing explainers through internal reporting content, all built to stay accurate to your actual products."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;