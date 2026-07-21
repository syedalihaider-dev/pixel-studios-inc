"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Premium 3D Animation Services in the USA",
    description: "At Pixels Studios Inc., our professional 3D animation services remove that uncertainty.  We translate products, concepts, and processes into photorealistic, high-definition 3D video animation services that show audiences exactly what they need to see to act. As a full-service 3D animation studio working with brands across the USA, every production starts with your business objective. Whether you need 3D product animation for a launch, cinematic visuals for an investor pitch, or medical animation for a clinical audience, our 3D animators build every frame with purpose."
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
