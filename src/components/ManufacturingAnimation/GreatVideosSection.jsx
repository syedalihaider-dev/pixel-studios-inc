"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Manufacturing Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your process, your equipment, and your confidentiality requirements, and we will build the manufacturing animation that finally shows your production capability the way your internal team already sees it, ready for sales, training, and marketing alike, from first storyboard to final export.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;