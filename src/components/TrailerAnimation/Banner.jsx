"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Professional Trailer Animation Services Games and Films",
    description: "At Pixels Studios Inc., our professional trailer animation services are built around that argument-first approach. We are a dedicated trailer animation company producing movie trailer production, game trailer production, and brand trailer content for clients across the USA, and every trailer video production we deliver is structured to build anticipation, not just summarize what already exists."
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
