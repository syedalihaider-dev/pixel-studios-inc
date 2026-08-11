"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Product Explainer Videos",
    description: "Custom explainer videos built around a single product with a specific audience and a specific conversion objective. We write the script around the decision the viewer needs to make, not around every feature the product has.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "SaaS Explainer Videos",
    description: "SaaS explainer videos that close the gap between product capability and prospect comprehension. Built to reduce trial drop-off, improve demo-to-close ratios, and give sales teams a link they use in every introductory email.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Corporate Explainer Videos",
    description: "Business explainer videos for investor communication, internal alignment, and corporate brand positioning. We produce animated video services that make complex organizational messages clear without requiring a 20-slide deck.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Educational Explainer Videos",
    description: "Animated explainer video production for educational institutions, e-learning platforms, and knowledge-heavy brands that need content audiences can learn from and return to rather than watch once and forget.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Healthcare Explainer Videos",
    description: "Patient education, device explanation, and healthcare brand communication are built to the accuracy and sensitivity standards the industry requires. Clinical comprehension, not just visual clarity.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Financial Services Explainer Videos",
    description: "Investment product explanation, regulatory communication, and financial literacy content. Custom explainer videos for finance audiences that do not accept ambiguity or appreciate being talked down to.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Startup Explainer Videos",
    description: "First-impression animated video services for early-stage brands that need to communicate clearly and credibly before their reputation does it for them. Built to perform in investor pitches, landing pages, and first sales conversations.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Marketing and Promotional Explainer Videos",
    description: "Promotional explainer videos and campaign content built with conversion objectives embedded from the first script draft. Animated video services designed to produce a response, not just an impression.",
    videoSrc: "https://player.vimeo.com/video/1064482488?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Our Animated Explainer Video Services"
      description="Our animated explainer video production covers every format and industry context. Here is the full range of business explainer videos we build."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
