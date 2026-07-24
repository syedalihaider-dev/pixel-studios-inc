"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Conversion-Focused 3D Product Animation Services",
    description: "Pixels Studios Inc. builds 3D product animation services around the specific objection or question your audience needs resolved before they buy. We are a dedicated 3D product animation company producing product launch animation, eCommerce product animation, and industrial product animation for brands across the USA, and every animation is built to move a buyer closer to a decision, not just look good in a portfolio reel. Whether you need to hire product animators for a single hero asset or outsource product animation services across a full catalog, the strategy comes before the render."
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
