"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>BioTech Animation</span> Project
    </>
  );

  const text = "Talk to our team about your gene therapy platform, molecular mechanism, or product launch, and we will show you how a scientifically accurate 3D medical animation moves your next investor conversation, submission, or launch forward with far less friction than a slide deck ever could. Bring us your data and your deadline. We will bring the scientific rigor and the visual craft to match.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;
