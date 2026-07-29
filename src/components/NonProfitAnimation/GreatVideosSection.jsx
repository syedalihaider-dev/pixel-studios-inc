"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Non-Profit Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your mission, your campaign, and your budget, and we will build the nonprofit animation that helps donors, volunteers, and communities understand why your work matters and how they can help, without stretching your budget past what is realistic for your organization.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;