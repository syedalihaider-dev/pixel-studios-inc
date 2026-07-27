"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Ready to Scale Your <span>Animation</span> Without Sacrificing Your Brand?
    </>
  );

  const text = "AI animation is not a shortcut. It is a faster route to the same destination when it is run by people who know where they are going. Tell us the brief. We will tell you what AI can do for it and what it will cost.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
