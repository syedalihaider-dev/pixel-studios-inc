"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Government Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your program, your audience, and your procurement requirements, and we will scope the government animation that communicates clearly, meets your accessibility standards, and moves through your approval process smoothly from start to finish.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;