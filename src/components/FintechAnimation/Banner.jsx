"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Fintech Animation That Builds Financial Trust",
    description: "Why do so many fintech products get built brilliantly and explained badly? Because financial concepts are abstract, regulated, and often invisible on screen. Our fintech animation service turns payments, data, and compliance into video that users, investors, and regulators actually understand, without losing the accuracy your industry demands."
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