"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Logistics Animation That Shows What Your Operation Can Do",
    description: "Why do sophisticated logistics operations so often lose deals to companies with better slide decks? Because supply chains are nearly impossible to explain in words and photographs. The scale is too big, the handoffs are too many, and the systems that make your operation impressive are exactly the ones a prospect never gets to see. Our logistics animation service fixes that. Pixels Studios Inc. turns freight networks, warehouse operations, and fleet systems into video that a client, investor, or new hire can follow on the first watch, without a single site visit. Whether you are pitching a new 3PL contract, raising capital, or standardizing safety training across a dozen facilities, the job is the same: make an operation this complex feel simple to understand, and to make that clarity work as hard in a boardroom as it does on a warehouse floor."
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