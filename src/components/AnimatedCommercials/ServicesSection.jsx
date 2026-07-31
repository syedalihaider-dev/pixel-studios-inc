"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Product Commercial Animation",
    description:
      "Product commercial animation is built around the specific audience decision that the product needs to influence. Not a feature tour. A visual argument for why this product solves a problem the viewer already has.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Brand Story Commercials",
    description:
      "Brand commercials that communicate values and positioning to audiences who have never heard of the company. The story is not about the brand. It is about the viewer and what the brand means for them.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Explainer Commercial Videos",
    description:
      "Commercial animation that explains what a product does clearly enough that the viewer arrives at the landing page already understanding the value proposition. Less work for the landing page. More qualified traffic at the click.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Character Animation Commercials",
    description:
      "Character-driven commercials for brands whose audience responds to emotional narrative. The character is not a decoration. It is the device through which the commercial earns the viewer's attention long enough to deliver the message.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "2D Animated Commercials",
    description:
      "2D animated commercials across every visual style from clean motion graphics to fully illustrated character animation. Produced at the frame rate and resolution the distribution platform requires.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "3D Animated Commercials",
    description:
      "3D animated commercials for products with physical form, technical complexity, or the kind of visual quality requirement that 2D cannot match for the specific brief.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Motion Graphics Commercials",
    description:
      "Motion graphics commercial animation for data-driven messages, product feature communication, and brand campaigns where the argument is the visual rather than the story.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Social Media Commercials",
    description:
      "Social media commercial videos are built for the platform rather than adapted to it. Vertical formats, hooks in the first frame, and captions for the majority watching without sound. Produced to each platform's specific creative requirements.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Television Commercial Animation",
    description:
      "TV commercial animation to broadcast delivery specifications. Frame rate, loudness normalization, color space, and codec requirements were handled correctly the first time, not corrected after the network rejected the initial submission.",
    videoSrc: "https://player.vimeo.com/video/1201624848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Animated Commercial Services for Every Marketing Goal"
      description="Our animated commercial production covers every format and objective a brand runs advertising toward."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;