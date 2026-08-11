"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "3D Character Modeling",
    description: "Custom 3D character modeling for games, animation, and brand mascots, built with clean topology ready for rigging and animation. Every character model is constructed with deformation in mind so that downstream animators are not fighting the geometry.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "3D Product Modeling",
    description: "Precision 3D product modeling from CAD files or reference images for marketing, eCommerce, and engineering visualization. We match dimensions and proportions exactly so the final render is indistinguishable from the physical product.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "3D Game Asset Modeling",
    description: "Game-ready 3D game asset modeling optimized for Unreal Engine assets and Unity assets with real-time performance in mind. Polycount and texture budgets are managed against your engine's actual performance targets, not a generic standard.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "3D Environment Modeling",
    description: "Full 3D environment modeling for games, architectural visualization, and virtual production built to scale and lighting accuracy. Environments are modeled with modularity in mind so assets can be reused and recombined efficiently.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "AR and VR Modeling",
    description: "AR/VR modeling services produce lightweight, real-time-ready virtual reality assets and augmented reality models for interactive platforms. Every asset is optimized for the frame rate and tracking stability that immersive applications demand.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Digital Twin Modeling",
    description: "Digital twin modeling that mirrors real-world equipment and facilities for simulation, monitoring, and predictive maintenance applications. The accuracy of source data is treated as non-negotiable since the model feeds operational decisions.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Metaverse Asset Modeling",
    description: "Metaverse 3D modeling for wearables, environments, and interactive objects built to platform-specific technical constraints. We work within the polygon, texture, and file size limits that each platform enforces.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Architectural 3D Modeling",
    description: "Architectural 3D modeling services for developers and architects producing accurate, presentation-ready building and interior models. Built directly from blueprints and architectural plans for dimensional accuracy.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Industrial and Manufacturing Modeling",
    description: "Industrial 3D modeling services converting CAD to 3D modeling output for training, marketing, and engineering review. We preserve engineering tolerances while optimizing the model for visualization use cases.",
    videoSrc: "https://player.vimeo.com/video/1201624850?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Comprehensive 3D Modeling Services Tailored to Your Needs"
      description="Our 3D modeling solutions cover every asset type a business needs across product, character, and environment work, all produced in-house by professional 3D artists who specialize in the specific category of asset your project requires."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
