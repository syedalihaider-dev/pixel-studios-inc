"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Fintech Animation</span> Project
    </>
  );

  const text =
    "If your product is more sophisticated than your onboarding flow currently explains, that is fixable. Talk to our team about your platform, your compliance requirements, and your audience, and we will build the fintech animation that turns confusion into confidence and confidence into signups. Bring us your product and your compliance checklist, and we will handle the rest.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;