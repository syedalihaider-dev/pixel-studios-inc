"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Medical Animation Services for Healthcare Education and Product Marketing",
    description: "We are a dedicated medical animation studio producing 3D medical animation services for pharmaceutical companies, medical device manufacturers, healthcare systems, and life sciences organizations across the USA. Every medical animation video we deliver has been through a structured medical review process before it reaches a physician, a patient, or a regulatory body."
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
