"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Entertainment Animation Built to Perform",
    description: "A trailer has seconds to earn a click, and a music video has to hold up next to everything else competing for the same audience. Our entertainment animation service builds trailers, shorts, and animated music videos designed for exactly that kind of pressure, where craft and speed both matter. Every project is built around your creative vision and your release timeline together, so a distinctive visual style never comes at the cost of hitting the date your marketing plan depends on."
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