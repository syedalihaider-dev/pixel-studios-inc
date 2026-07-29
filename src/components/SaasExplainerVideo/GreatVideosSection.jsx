"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>SaaS Animation</span> Project
    </>
  );

  const text =
    "If your product is stronger than your homepage makes it look, that is a fixable problem. Talk to our team about your platform, your audience, and your growth goals, and we will build the SaaS explainer video that turns visitors into signups and signups into activated users, without adding a single call to your sales team's calendar. The first conversation is free, and it usually saves weeks of internal debate about what the video should say.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;