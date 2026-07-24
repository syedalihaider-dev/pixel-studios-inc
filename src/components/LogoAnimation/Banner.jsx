"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Logo Animation Services That Bring Your Brand to Life",
    description: "At Pixels Studios Inc., our logo animation services are built around that philosophy. We create custom logo animation that turns a static mark into a living piece of brand communication, from clean 2D logo animation for digital environments to cinematic 3D logo animation for broadcast-quality productions. We are the logo animation company brands across the USA come to when they want a brand intro that earns attention rather than borrows it."
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
