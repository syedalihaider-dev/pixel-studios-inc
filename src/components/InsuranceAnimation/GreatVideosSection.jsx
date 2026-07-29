"use client";
import React from 'react';
import GlobalGreatVideosSection from '../Common/GreatVideosSection';

const GreatVideosSection = () => {
  const title = (
    <>
      Let's Discuss Your <span>Insurance Animation</span> Project
    </>
  );

  const text =
    "If your policies are solid but your explanations are not landing, that is exactly what we fix. Talk to our team about your coverage, your compliance requirements, and your audience, and we will build the insurance animation that turns confused prospects into confident, informed policyholders who trust your brand from the first interaction. Bring us one policy or a full product line, and we will show you how much clearer your coverage story can be. The first conversation costs nothing, and it usually surfaces the exact confusion points your support logs have been flagging for months.";

  return <GlobalGreatVideosSection title={title} text={text} />;
};

export default GreatVideosSection;