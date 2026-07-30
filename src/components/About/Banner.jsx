"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "About Pixel Studios",
    description: "Pixel Studios is a creative video animation company dedicated to bringing ideas to life through powerful visual storytelling. We specialize in crafting high-quality animations that help brands communicate complex concepts with clarity, creativity, and impact."
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
