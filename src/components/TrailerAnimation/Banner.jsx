"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Professional Trailer Animation Services Games and Films",
    description: "At Pixels Studios Inc., our professional trailer animation services are built around that argument-first approach. We are a dedicated trailer animation company producing movie trailer production, game trailer production, and brand trailer content for clients across the USA, and every trailer video production we deliver is structured to build anticipation, not just summarize what already exists. At Pixels Studios Inc., our motion graphics services start with a business objective and build backward from there. What does the viewer need to understand? What do they do next? Every keyframe, transition, and piece of animated typography we produce answers those two questions first. We deliver motion graphics design services for brands, product teams, and marketing campaigns across the USA, and our motion graphics animation services in the United States markets are built to convert attention into action from day one."
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
