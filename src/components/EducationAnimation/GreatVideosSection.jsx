"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Enterprise Animation</span> Project
    </>
  );

  const text =
    "Talk to our team about your organization, your stakeholders, and your production needs, and we will build the enterprise animation partnership that keeps every department consistent, on brand, and moving at the pace your business actually requires, from the first internal update to your next global campaign.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;