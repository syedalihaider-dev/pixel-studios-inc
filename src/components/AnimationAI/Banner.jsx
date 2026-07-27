"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "AI Animation Services for Smart, Scalable Storytelling",
    description: "At Pixels Studios Inc., our AI animation services combine the production velocity that AI tools now make possible with the creative direction, quality control, and strategic thinking that AI cannot replace. The result is an animation that is faster than traditional production and better than unmanaged AI output. Both things at once."
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
