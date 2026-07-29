"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Advertising Animation</span> Project
    </>
  );

  const text =
    "If your campaign concept is strong but your creative production cannot keep up with your media plan, talk to our team. We will scope the commercial, motion graphics, or social animation your campaign needs, built to work across every placement without slowing your launch. Bring us your media plan and your deadline, and we will build to match both, from the first storyboard to the final cutdown.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;