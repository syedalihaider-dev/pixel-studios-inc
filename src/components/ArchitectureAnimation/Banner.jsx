"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Architecture Animation That Sells the Vision",
    description: "Why do so many strong architectural designs fail to win approval or investment? Because a 2D drawing asks clients, boards, and committees to imagine a building rather than see it. Our architecture animation service turns your plans into photorealistic renderings and walkthroughs that make the design decision easy. Every project is built directly from your architectural drawings and CAD files, so what a client sees on screen matches what your team actually designed, down to the materials and lighting."
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