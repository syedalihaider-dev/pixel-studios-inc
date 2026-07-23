"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Discuss Your <span>Video Editing</span> Requirements
    </>
  );

  const text = "Tell us your footage volume, platform targets, brand standards, and timeline. We will tell you what approach we would take and what a realistic turnaround and investment looks like.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
