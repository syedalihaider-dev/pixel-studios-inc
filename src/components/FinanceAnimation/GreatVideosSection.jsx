"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Finance Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your products, your compliance requirements, and your audience, and we will build the finance animation that turns dense financial concepts into content your clients actually understand and trust, from a single explainer to a full library of client-facing video.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;