"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Commercial Animation",
    description: "Full animated commercials built for TV, streaming, and pre-roll placements, combining strong visual storytelling with a message engineered to land inside a strict time limit. Every spot is built to work as a standalone piece and as the anchor for a full campaign of cutdowns.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Fast-paced motion graphics for feature highlights, promotional offers, and data-driven ads that need to communicate quickly and clearly, especially in placements where a viewer may only watch for a few seconds before scrolling on.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Social Media Animation",
    description: "Platform-native cuts optimized for Instagram, TikTok, and YouTube, paced for how people actually scroll and watch, with or without sound, and built to feel native to each platform rather than repurposed from a TV spot.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Logo Animation",
    description: "Animated logo intros and outros that give every ad a consistent, branded finish across every campaign and platform, reinforcing brand recognition even in a six-second bumper ad.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Advertising"
      description="What should an advertising animation studio be able to deliver beyond a single hero spot? These four formats cover the full campaign, from broadcast to the smallest social cutdown, all built from one creative concept."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;