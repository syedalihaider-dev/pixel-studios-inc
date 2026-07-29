"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Enterprise Animation Built for Scale",
    description: "Large organizations do not need one video. They need a system that produces consistent, on-brand video across dozens of teams, markets, and stakeholders without losing quality along the way. Our enterprise animation services are built for exactly that kind of scale, from internal communications to global training rollouts. Every engagement is built around your actual approval structure and brand governance, not a one-off creative project, so the same standard holds whether a video comes from HR, marketing, or the executive team."
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