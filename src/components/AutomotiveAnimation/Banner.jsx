"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Automotive Animation That Sells the Engineering",
    description: "Why is it so hard to show a car the way engineers actually see it? Because the systems that make a vehicle impressive, from suspension geometry to battery architecture, are hidden under the body panel. Our automotive animation services make that engineering visible, accurately and persuasively, for marketing, technical, and internal audiences alike. Every project starts from your CAD and engineering data, so the finished animation stays true to the actual vehicle, whether it is still confidential or already on the showroom floor."
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