"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Professional 2D Animation Services in the USA",
    description: "Most brands invest in 2D animation and get a video their marketing team likes but sales never uses. That is because most 2D animation studios focus on visuals, not results. The brands that win use 2D animated videos built around a clear audience, problem, and decision. At Pixels Studios Inc., our professional 2D animation services start with your business goal. As a dedicated 2D animation studio, we create custom 2D animated videos for brands across the USA built to perform."
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
