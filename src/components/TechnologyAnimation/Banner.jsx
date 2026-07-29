"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Technology Animation That Sells the Product",
    description: "Tech products often work in ways users never see, and that invisibility is exactly what makes them hard to market. Our technology animation services translate software, AI systems, and hardware into video that a customer, investor, or new user can actually understand and act on. Every project is built from your actual product and roadmap, so the animation stays accurate even as your platform continues to evolve and ship new features."
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