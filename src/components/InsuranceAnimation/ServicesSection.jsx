"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Insurance Explainer Videos",
    description: "Clear, jargon-free explainer videos for insurance that show what a policy covers, what it does not, and how claims actually work, built to stop confusion before it turns into a support ticket or an abandoned quote.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Insurance Product Videos",
    description: "Product-specific videos across auto insurance animation, health insurance explainer video content, life insurance animation, and property lines, walking customers through coverage tiers so they choose with confidence instead of guessing by price.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Insurance Sales & Pitch Videos",
    description: "Sales enablement video for agents and brokers, giving them one consistent, professional asset that explains complex coverage the same way in every conversation, whatever the rep's experience level.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Customer Testimonial & Trust Videos",
    description: "Animated storytelling that reinforces reliability and support, built to complement real testimonials and strengthen brand trust across marketing channels and renewal campaigns.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Educational Insurance Videos",
    description: "Broader educational content covering how insurance works, common terms, and the claims process, used to build long-term brand authority and ease first-time buyer anxiety about an unfamiliar purchase.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for Insurance"
      description="What does a complete insurance animation video services offering look like? Five formats covering the entire customer relationship, from the first quote to the renewal notice, each built to reduce a specific point of confusion."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;