"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Professional Video Editing Services for Brands, Creators, and Businesses",
    description: "At Pixels Studios Inc., our professional video editing services exist to close the gap between footage that was captured and content that performs. We are a dedicated video editing studio serving brands, content creators, marketing teams, and agencies across the USA with video post production services that treat the edit as a creative and strategic discipline, not a technical formality."
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
