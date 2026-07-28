"use client";
import React from 'react';
import GlobalBanner from '../Common/Banner';

const slides = [
  {
    title: "Hybrid and Cel Animation Services for Unique and Expressive Visual Storytelling",
    description: "Cel animation and hybrid 2D/3D production are slower and more labor-intensive than puppet rigging, and that additional labor is exactly what produces the handcrafted visual texture that makes content look like it was made by artists rather than assembled from a template library. Pixels Studios Inc. produces hybrid and cel animation for brands and creators who understand that distinctiveness is a competitive advantage worth the additional production investment."
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
