"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Animated Explainer Video Services",
    description: "At Pixels Studios Inc., our animated explainer video services are built from the audience's decision-making process outward. We are a dedicated animated explainer video company producing custom explainer videos for businesses across the USA that not only communicate what a product does but also make the viewer feel the problem it solves before they see the solution."
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
