"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Real Estate Animation</span> Project
    </>
  );

  const text =
    "If your development is more impressive than your current renderings show, let's fix that. Talk to our team about your architectural plans and sales timeline, and we will build the real estate animation that turns buyers and investors into believers before you have broken ground. Accurate to your actual design, ready for every stage of the campaign, and built to keep working long after the sales gallery closes.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;