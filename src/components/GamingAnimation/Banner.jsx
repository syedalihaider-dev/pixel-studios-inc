"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Game Animation Built to Ship On Time",
    description: "Development timelines rarely leave room for animation bottlenecks. Our game animation services provide character, environment, and cinematic work as a flexible extension of your studio, scaling up during crunch and down between production cycles without the overhead of a full internal team. Every engagement is built around your existing art bible and pipeline, so outsourced work integrates cleanly rather than looking like it came from a different game entirely."
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