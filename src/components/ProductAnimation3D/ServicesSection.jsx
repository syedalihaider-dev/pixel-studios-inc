"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Product Explainer Animations",
    description: "3D product explainer videos that simplify how a product works for audiences encountering it for the first time, sequencing the explanation in the order a new buyer actually needs it.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Product Demonstration Videos",
    description: "Detailed product demonstration videos showing function, scale, and use case with photorealistic accuracy, giving buyers the confidence that comes from seeing a product in genuine use.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Product Launch Animations",
    description: "High-impact product launch animation built to create a moment around a release rather than a quiet announcement that gets lost in a crowded feed.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "eCommerce Product Animations",
    description: "eCommerce product animation optimized for product pages, Amazon listings, and Shopify stores to reduce return rates by setting accurate expectations before purchase.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Industrial Product Animations",
    description: "Industrial product animation for machinery and equipment that cannot be easily filmed or photographed due to scale, location, or operational constraints.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Medical Product Animations",
    description: "Medical product animation built to clinical accuracy standards for device marketing and provider education, where precision is non-negotiable.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Consumer Electronics Animations",
    description: "Technology product animation for consumer electronics launches across web, social, and retail environments, where first impressions are decided in seconds.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Product Assembly Animations",
    description: "Product assembly animation showing internal components and construction sequences clearly and accurately for technical buyers and training contexts.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Product Feature Highlight Videos",
    description: "Product feature animation isolating and explaining specific differentiators that drive the purchase decision, without burying them in a full product overview.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="End-to-End 3D Product Animation Services for Modern Brands"
      description="Our product animation services cover every format a brand needs across the customer journey, from first awareness through post-purchase education, all produced in-house by a team that specializes specifically in product communication."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
