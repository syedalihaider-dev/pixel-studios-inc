"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your Animated Commercial Project Today
    </>
  );

  const text = "Most animated commercials that underperform were built around the wrong question. Tell us the conversion objective, the audience, and the media plan. We will tell you what the commercial needs to do to succeed, and then we will build it.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
