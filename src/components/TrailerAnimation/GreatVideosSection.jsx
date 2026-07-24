"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Trailer Animation</span> Project Today
    </>
  );

  const text = "Most trailers fail because they were built as summaries instead of arguments. Book a discovery call, and we will show you what a trailer built around a single, compelling hook can do for your film, your game, or your brand.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
