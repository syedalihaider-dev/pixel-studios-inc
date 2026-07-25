"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "High-Impact 3D Modeling Services for Businesses",
    description: "Why do so many 3D projects stall at the modeling stage before the animation even starts? Most 3D modeling companies treat the model as a technical checkbox instead of the foundation on which the entire project depends. A flawed model means every downstream stage, texturing, rigging, and rendering, inherits the flaw, and fixing geometry problems after a project is already in production costs far more than getting the topology right the first time. Pixels Studios Inc. provides professional 3D modeling services built to be production-ready from the first export: accurate topology, clean UVs, and a level of detail calibrated to exactly how the asset will be used."
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
