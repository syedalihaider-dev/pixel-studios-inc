"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Top-Tier Gaming Trailer Services to Ignite Your Launch",
    description: "Pixels Studios produces game trailer services built around the emotional argument the trailer needs to make, and then backwards into the footage, animation, and editing choices that deliver it. We produce cinematic game trailers, gameplay trailers, launch trailers, mobile game trailers, Steam videos, and the announcement content that creates anticipation before the game exists. Every trailer begins with a creative brief that asks what the viewer should feel at the end, not what the viewer should have seen."
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
