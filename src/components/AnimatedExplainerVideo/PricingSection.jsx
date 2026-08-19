import React from 'react';
import TeamStandoutSection from '@/components/Common/TeamStandoutSection';

const features = [
  {
    id: 1,
    title: 'Factors That Influence Cost',
    description: "Script complexity, visual style, number of characters, scene count, voiceover requirements, and production timeline all affect cost. We provide itemized quotes based on your actual brief, not a generic package rate.",
    icon: '/icons/result-oriented.png'
  },
  {
    id: 2,
    title: 'Video Length',
    description: "A 30-second animated explainer video and a 90-second production are not the same investment. Longer videos require more script, more visual assets, more animation time, and more revision cycles. Most effective explainer videos run 60 to 90 seconds.",
    icon: '/icons/flexible.png'
  },
  {
    id: 3,
    title: 'Animation Style',
    description: "2D explainer animation with simple character design costs less than fully rigged character animation or photorealistic 3D explainer production. The right style is the one the audience and the distribution context require.",
    icon: '/icons/transparent.png'
  },
  {
    id: 4,
    title: 'Voiceover Requirements',
    description: "Professional voiceover from our talent roster is included in standard animated explainer video creation service packages. Custom casting, accents, and multilingual versions affect cost and are priced transparently.",
    icon: '/icons/experienced.png'
  },
  {
    id: 5,
    title: 'Production Complexity',
    description: "Number of unique scene environments, illustration density, motion graphic complexity, and custom character library requirements all feed into the final cost. We itemize every production element so the quote is traceable.",
    icon: '/icons/experienced.png'
  }
];

const PricingSection = () => {
  return (
    <TeamStandoutSection
      subtitle="TYPES OF"
      title={<><span>Animated Explainer Video</span> Pricing</>}
      description="The cost of animated explainer video production is driven by four core variables. Here is what each one means for your budget."
      features={features}
      videoSrc="https://player.vimeo.com/video/1064480723?dnt=1&autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0"
    />
  );
};

export default PricingSection;