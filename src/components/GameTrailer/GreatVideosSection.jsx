"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Talk About Your <span>Project</span>
    </>
  );

  const text = "Tell us the game, the moment in its commercial lifecycle, and what you need the viewer to do after watching. We will tell you the trailer type, the approach, and what it costs.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
