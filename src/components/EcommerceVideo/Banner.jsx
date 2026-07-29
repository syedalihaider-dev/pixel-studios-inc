"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Ecommerce Video Production Built to Convert Browsers into Buyers",
    description: "Why do shoppers abandon product pages that have perfectly good photos? Because photos cannot answer the questions that actually decide a purchase. How does it open, how does it fit, what does it feel like to use? Video is the closest thing you can give an online shopper to holding the product, and our ecommerce video production services are built around exactly that job. Pixels Studios Inc. combines 3D product animation, demo-style video, and platform-ready ad content into one production pipeline, engineered around a single question: what does this shopper need to see in the first three seconds to keep watching and eventually buy? Whether that is a hero video on your homepage, a listing video on Amazon, or a fifteen-second ad in a crowded feed, every version is built from one consistent set of assets by the same team."
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
