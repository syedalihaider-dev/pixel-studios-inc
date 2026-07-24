"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Consumer Electronics",
    image: "/industry/01.png",
    text: "3D product animation for consumer electronics brands launching new devices into competitive retail markets where differentiation matters most.",
    link: "/industry/retail"
  },
  {
    id: 2,
    title: "Healthcare and Medical Devices",
    image: "/industry/02.png",
    text: "Product animation for medical devices built to the accuracy standards clinical and regulatory audiences require for both marketing and training use.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Automotive",
    image: "/industry/03.png",
    text: "Product animation for automotive brands showcasing vehicles, components, and systems with cinematic quality across digital and showroom contexts.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "Manufacturing and Industrial",
    image: "/industry/04.png",
    text: "Product animation for manufacturers explaining equipment function and assembly to technical buyers who need precision over polish.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Retail and eCommerce",
    image: "/industry/05.png",
    text: "Product animation for eCommerce and Shopify stores designed to convert browsing into purchasing through clearer feature communication.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "Beauty and Cosmetics",
    image: "/industry/06.png",
    text: "Photorealistic product rendering for beauty brands, highlighting texture, packaging, and application detail that photography often struggles to capture.",
    link: "/industry/real-estate"
  },
  {
    id: 7,
    title: "Furniture and Home Products",
    image: "/industry/07.png",
    text: "3D product walkthrough animation for furniture brands showing scale and material quality accurately within real room contexts.",
    link: "/industry/packaging"
  },
  {
    id: 8,
    title: "Technology and SaaS",
    image: "/industry/08.png",
    text: "Product animation for SaaS products visualizing hardware components, devices, or physical product lines that complement a digital offering.",
    link: "/industry/packaging"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Specialized 3D Product Animation Solutions by Industry"
      description="Different product categories require different visual priorities, and our team brings specific experience to each of the following sectors."
      industries={industries}
      variant="gradient"
    />
  );
}
