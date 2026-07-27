"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Legal Graphics Animation Services for Courtroom Demonstratives",
    description: "How do legal animations help judges and juries understand evidence? By showing rather than describing. An accident reconstruction animation places the viewer at the intersection. A medical legal animation shows exactly how the injury occurred at the anatomical level the clinical record documents. A forensic animation demonstrates the event timeline with the precision witness testimony cannot reliably provide. Pixels Studios Inc. provides legal graphics animation services for litigation firms, personal injury attorneys, insurance defense teams, and corporate legal departments across the USA."
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
