"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Technology Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your product, your audience, and your growth goals, and we will build the technology animation that turns a complex product into something people understand at a glance and want to try, from your homepage to your next investor deck.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;