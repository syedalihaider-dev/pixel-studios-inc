"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Start Your <span>Educational Video Production</span> Project Today
    </>
  );

  const text = "Most training programs that are not working have the same problem: the video was built around what the organization needed to say rather than what the learner needed to understand. Tell us the learning objective and the audience. We will build the rest.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
