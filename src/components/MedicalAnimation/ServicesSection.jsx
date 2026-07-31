"use client";
import React from 'react';
import GlobalServicesSection from '../Common/ServicesSection';

const sliderItems = [
  {
    id: 1,
    title: "3D Medical Animations",
    description: "Photorealistic 3D medical animations for cellular processes, anatomical systems, and clinical procedures are built to scientific accuracy standards and reviewed against current medical literature.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Pharmaceutical Animation Services",
    description: "Pharmaceutical animation for drug mechanism of action, formulation delivery, and product marketing content used in HCP engagement, patient education, and regulatory submission support.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Medical Device Animations",
    description: "Medical device animation services demonstrating device implantation, operation, and patient benefit for regulatory, marketing, and clinical training audiences.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Surgical Procedure Animations",
    description: "Surgical procedure animations showing operative steps, instrument use, and anatomical landmarks for surgical training and patient consent communication.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 5,
    title: "Patient Education Videos",
    description: "Patient education animation explaining diagnoses, treatment options, and procedures in plain language, reducing anxiety and improving informed consent comprehension.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 6,
    title: "Mechanism of Action Animations",
    description: "Mechanism of Action animation depicting how a drug or therapeutic intervenes at the molecular or cellular level, for physician detailing, conference presentations, and regulatory documentation.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 7,
    title: "Mechanism of Disease Animations",
    description: "Mechanism of Disease animation illustrating the pathophysiology of a condition clearly for patient education, clinical training, and pharmaceutical marketing context.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 8,
    title: "Healthcare Training Animations",
    description: "Healthcare training animation for clinical staff onboarding, procedure training, and compliance education built to reduce variability in protocol execution.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 9,
    title: "Biotechnology Animations",
    description: "Biotechnology animation for gene therapy mechanisms, biologic drug development, and cell therapy processes for investor, regulatory, and scientific communication contexts.",
    videoSrc: "https://player.vimeo.com/video/1201854911?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];

const ServicesSection = () => {
  return (
    <GlobalServicesSection
      title="Medical Animation Services for Healthcare and Life Sciences"
      description="Our medical animation production company covers every format a healthcare or life sciences organization needs across marketing, education, and clinical communication."
      sliderItems={sliderItems}
    />
  );
};

export default ServicesSection;
