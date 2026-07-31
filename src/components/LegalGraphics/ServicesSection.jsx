"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "Accident Reconstruction Animation",
    description:
      "Accident reconstruction built from police reports, witness statements, traffic data, surveillance footage, and engineering analysis. Accurate to the expert witness standard that courtroom admissibility requires.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Medical Legal Animation",
    description:
      "Medical legal animation visualizing injuries, surgical procedures, and biological mechanisms connecting a plaintiff's medical record to the damages claimed. Reviewed against clinical documentation and expert opinion.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Personal Injury Case Animation",
    description:
      "How the injury occurred, the nature and extent of the physical damage, and the mechanism of harm presented visually for juries evaluating causation and damages.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Product Liability Animation",
    description:
      "Product defect and failure mechanism animation showing how a product failed and how that failure caused the injury, in terms a non-engineer can evaluate.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Construction Accident Animation",
    description:
      "Site fall, equipment failure, and structural collapse case animation with precise 3D reconstruction of the incident environment.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Workplace Injury Animation",
    description:
      "Industrial accident and occupational injury animation for workers' compensation and employer liability litigation.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Criminal Case Visualization",
    description:
      "Crime scene reconstruction and event sequence animation for defense and prosecution teams in criminal litigation.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Forensic Animation",
    description:
      "Forensic animation for ballistics, bloodstain pattern, fire origin, and structural failure analysis visualized in three dimensions from physical evidence.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Trial Presentation Graphics",
    description:
      "Static and animated trial presentation graphics for courtroom display: timelines, diagrams, medical illustrations, and engineering schematics presented clearly at trial pace.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 10,
    title: "Interactive Legal Demonstratives",
    description:
      "Attorney-controlled interactive courtroom demonstratives for real-time zoom, pause, and evidence navigation during testimony.",
    videoSrc: "https://player.vimeo.com/video/1065182530?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Our Legal Graphics Animation Services"
      description="Our courtroom animation services cover every demonstrative evidence format litigation requires."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;