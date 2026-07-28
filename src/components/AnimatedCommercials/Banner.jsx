"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Animated Commercial Services That Capture Attention and Drive Results.",
    description: "Why do so many animated commercials look impressive and generate almost no measurable return on the media spend behind them? Most animated commercial production companies start the conversation with creative direction. Visual style. Animation quality. The things that make a commercial look good. And looking good is not a business outcome. The brands generating real results from animated advertising are the ones whose creative was built around a conversion objective before anyone selected a color palette. Pixels Studios Inc. is a commercial animation company that starts with what you need the viewer to do and works backward from there. The animation is the delivery mechanism. The strategy is what determines whether it works."
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
