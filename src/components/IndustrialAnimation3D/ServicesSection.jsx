"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Industrial Process Animation",
    description: "Industrial process animation visualizing multi-stage manufacturing or chemical processes end-to-end, built from engineering data rather than visual approximation. Every stage transition is timed to match the actual cycle time of the process being shown.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Manufacturing Animation",
    description: "Manufacturing animation showing production line sequences, equipment interaction, and material flow across a facility for training and marketing use. We model the actual layout of production facilities rather than a generic factory backdrop.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Mechanical Animation",
    description: "Mechanical engineering animation services depicting gear systems, hydraulics, and moving assemblies with technically accurate motion derived directly from CAD models. Mechanical systems are animated to their real tolerances, not an approximated range of motion.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Assembly Animation",
    description: "Product assembly animation sequencing component installation steps are clearly for training, technical documentation, and customer-facing demonstration. Sequencing follows the actual assembly order specified by your engineering teams.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Industrial Equipment Animation",
    description: "Industrial equipment demonstration videos showing machinery function and operating principles without requiring physical access to the equipment. Useful for export markets where shipping a demo unit is impractical.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Safety Training Animation",
    description: "Industrial safety training animation walks employees through hazard scenarios and correct procedures in a controlled, repeatable visual format. Scenarios can depict situations too dangerous to stage for live training footage.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Plant and Facility Animation",
    description: "Plant operation animation showing full facility layout, workflow, and system integration for stakeholder presentations and operational planning. Built from facility blueprints for dimensional accuracy across the full site.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Engineering Simulation Animation",
    description: "Engineering simulation animation visualizes stress analysis, thermal behavior, or fluid dynamics results from engineering simulations in an accessible visual format. Translates simulation data into a narrative that non-engineers can follow.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Technical Explainer Animations",
    description: "Engineering explainer videos breaking down complex technical systems for non-technical stakeholders, investors, and customers who need the concept without the full engineering background.",
    videoSrc: "https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Professional 3D Industrial Animation Services for Every Business Need"
      description="Our industrial animation services cover the full range of technical communication needs across manufacturing, energy, and engineering sectors, all produced by a team that reads engineering drawings as fluently as it builds animation."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
