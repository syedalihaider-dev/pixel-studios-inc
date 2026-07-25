"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Corporate Video Animation Services for Businesses",
    description: "At Pixels Studios Inc., our corporate video animation services are built around that second question first. We produce video animation for business that is designed to move a specific audience toward a specific action, whether that is a lead submission, a training module completion, an investment decision, or a purchase. Every animated corporate video we deliver starts from the business objective, not from the storyboard."
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
