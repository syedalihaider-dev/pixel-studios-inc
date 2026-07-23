"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Social Media Animation Services",
    description: "At Pixels Studios Inc., our social media animation services are built around one reality: your audience owes your content nothing. Every second of watch time has to be earned. We produce animation for social media that is engineered for the environment it actually lives in: the right format, the right hook, the right pacing, and a message clear enough to land even with the sound off. Our social media animation production covers every major platform for brands, e-commerce stores, SaaS companies, and agencies across the USA."
  }
];

const actions = [
  { type: 'link', text: 'Learn More', href: '#' },
  { type: 'popup', text: "Let's Talk", variant: 'outline' }
];

const Banner = () => {
  return (
    <GlobalBanner
      slides={slides}
      bgVideo="/videos/home.webm"
      showPlayButton={true}
      actions={actions}
    />
  );
};

export default Banner;
