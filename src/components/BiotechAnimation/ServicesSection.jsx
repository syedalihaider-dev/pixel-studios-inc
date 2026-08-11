"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Animation for Gene Therapy, Cell Biology and Molecular Processes",
    description: "This is the science that is hardest to visualize: vector delivery, CRISPR-based editing, receptor binding, and protein-level interactions. As a 3D medical animation company, we work directly from your research data, molecular models, and published literature, so the animation reads as evidence rather than illustration. Every structure reflects current understanding of the biology, not a simplified stand-in that trades accuracy for visual polish.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Biotech Explainer Videos for Investors and Partners",
    description: "Fundraising moves faster when the science is easy to follow. Our biotech explainer work is built for pitch decks, data rooms, and partnering meetings, condensing a complex therapeutic platform into a few focused minutes. We work with your leadership team to find the parts of the science that actually move a funding decision, then build the biotechnology animation video around those moments so investors leave with a mental model they can repeat to their own partners.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Life Science Animation for Product Launches",
    description: "When a platform or therapy goes to market, medical product animation gives sales, marketing, and medical affairs one consistent asset that works everywhere: conference booths, physician education, digital campaigns, and internal training. In a regulated industry, that consistency matters. Every team touching the material needs confidence it says exactly what the science supports.",
    videoSrc: "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animation Solutions for BioTech"
      description="What does a biotech animation service actually need to cover? In our experience, four things: the science itself, the investors funding it, the market receiving it, and the review process that keeps all three honest. Our biotech animation production services are structured around exactly those four jobs."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
