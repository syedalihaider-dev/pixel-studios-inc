"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Product Demo Videos",
    description:
      "Screen-accurate demo videos walking through core product workflows, built for landing pages, sales decks, and app store listings alike.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Explainer Videos",
    description:
      "Concise technology explainer videos introducing a product's value proposition quickly, for audiences with limited attention or context on the category.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "UI Animation",
    description:
      "Animated recreations of your actual interface, easy to update as your product evolves, keeping marketing visuals current with every release cycle.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Supporting motion graphics for feature launches, technical concepts, and investor presentations that need to communicate quickly and clearly.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Technology"
      description="What does a technology animation agency need to cover across a product's full go-to-market motion? These four formats span homepage explainers through internal technical communication, all built to keep pace with your release schedule."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;