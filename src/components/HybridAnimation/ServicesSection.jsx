"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Traditional Cel Animation",
    description:
      "Hand-drawn cel-style animation with the specific visual character that traditional frame-by-frame production produces: subtle line variation, organic timing, and the texture that no rigged puppet approximates convincingly.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Digital Cel Animation",
    description:
      "The visual aesthetic of traditional cel animation produced with digital tools for production efficiency without sacrificing the frame-by-frame craftsmanship that gives cel animation its specific character.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Hybrid 2D and 3D Animation",
    description:
      "Combined 2D and 3D production where each technique is applied where it serves the visual concept: 3D for dimensional environments or objects, 2D for character work with the expressive hand-crafted quality 3D rigging cannot fully replicate.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Frame-by-Frame Animation",
    description:
      "Full frame-by-frame production for content where every frame is a hand-produced drawing rather than an interpolated tween. The most labor-intensive animation technique and the one that produces the most distinctive, organic motion quality.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Character Animation",
    description:
      "Character performance built through cel or hybrid technique for productions where the character's expressive range and visual specificity are central to the content's identity.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Effects Animation",
    description:
      "Hand-animated effects work: fire, water, magic, impact, and the visual effects vocabulary that cel-style production renders with a texture and energy that procedural effects systems do not replicate.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Animated Short Films",
    description:
      "Full short film production in cel or hybrid technique for creators, brands, and studios producing standalone narrative content with festival, streaming, or brand storytelling objectives.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Custom Hybrid Animation Projects",
    description:
      "Bespoke technique combinations built for a specific creative vision that does not fit a standard production category. Brief us on the visual concept and we will determine the right technical approach.",
    videoSrc: "https://player.vimeo.com/video/1064481971?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Our Hybrid and Cel Animation Services"
      description="We create traditional cel, digital cel, and hybrid animation experiences that combine handcrafted visual quality with modern production techniques. From frame-by-frame character animation to animated short films and custom hybrid projects, every approach is selected based on the creative vision, storytelling requirements, and unique visual identity of the project."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;