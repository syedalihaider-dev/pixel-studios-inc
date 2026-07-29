"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Automotive Animation</span> Project
    </>
  );

  const text =
    "If your vehicle's engineering deserves better than a spec sheet, talk to our team. We will scope the automotive animation your launch, technical documentation, or marketing campaign needs, built from your data and handled under full confidentiality, from first concept to final delivery.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;