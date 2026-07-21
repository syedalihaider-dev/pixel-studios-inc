"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "3D Product Animation",
    description: "Showcase features and mechanisms with photorealistic clarity that photography cannot match. Used in product launches, e-commerce, trade shows, and enterprise sales, where animated product demo videos close the visualization gap.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Product Modeling",
    description: "Precision digital models built from CAD files or reference imagery. The foundation for every 3D commercial animation, product showcase video, and CGI product animation we produce.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Industrial Animation",
    description: "Complex machinery, manufacturing processes, and industrial safety training are explained through technically accurate animation. Reduces training costs and supports high-stakes sales presentations for industrial brands.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Character Animation",
    description: "Full 3D character animation services including character design, rigging, facial animation, and performance direction for brand storytelling, gaming animations, and educational content.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Medical Animation",
    description: "Pharmaceutical animation, surgical animation, medical device walkthroughs, and healthcare animation built to clinical accuracy. Used in patient education, clinical training, and pharmaceutical product marketing globally.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Legal Graphics Animation",
    description: "Demonstrative animations, accident reconstruction, and procedural explainers for litigation support. Accuracy is the entry requirement, and every legal animation we produce is reviewed for technical precision.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Game Animation",
    description: "In-game cutscenes, character animations, and assets for PC games, console games, and mobile games are produced to the visual fidelity that modern gaming audiences expect.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Game Trailer",
    description: "High-impact cinematic game trailers and promotional trailer production combining motion design, VFX, and cinematic animation for maximum first-impression impact.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "AI Animation Services",
    description: "AI-assisted 3D animation that reduces timelines without reducing quality. Used strategically to accelerate asset iteration and style exploration for high-volume or compressed-schedule productions.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Architectural Rendering",
    description: "Photorealistic architectural rendering, real estate visualization, and property walkthroughs for developers and architects presenting projects before completion.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 11,
    title: "Cartoon Animation",
    description: "Stylized 3D cartoon animation for brand storytelling, children's content, and educational series. Expressive, accessible, and distinct from the default digital-clean aesthetic.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 12,
    title: "Photorealistic Rendering",
    description: "Hyperrealistic rendering that makes digital assets indistinguishable from photography. Used in product marketing, architectural visualization, and any context where visual realism determines audience trust.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="From Idea to Delivery: Our Best 3D Animation Services"
      description="Our custom 3D animation services cover every format a brand, product team, or marketing department needs to communicate with precision."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
