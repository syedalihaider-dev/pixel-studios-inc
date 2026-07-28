"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Professional Character Animation Services",
    description: "A character animation that is technically correct but emotionally empty is one of the most expensive production failures in animated content. It is expensive because it passes every quality checklist, ships on time, and then fails the only test that matters: the audience either connects with the character or they do not. The connection is not produced by correct timing and clean splines. It is produced by the weight, the intention, and the small imperfections of motion that make an animated character feel like it is making decisions rather than executing a motion path. At Pixels Studios Inc., our character animation services are built around that distinction. We produce animations that audiences believe."
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
