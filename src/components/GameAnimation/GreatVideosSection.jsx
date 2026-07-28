"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Game Animation</span> Project Today
    </>
  );

  const text = "Most game animation problems are brief problems. Tell us the engine, the rig, the platform, and the animation state machine structure. We will tell you what the production requires and what it costs.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
