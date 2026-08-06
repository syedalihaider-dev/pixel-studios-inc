"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Manufacturing",
    image: "/industry/01.png",
    text: "Manufacturing equipment animation and production line visualization for facilities seeking to train staff or market capability to new clients and partners.",
    link: "#"
  },
  {
    id: 2,
    title: "Oil and Gas",
    image: "/industry/02.png",
    text: "Industrial system animation for pipeline operations, refinery processes, and extraction equipment built to strict technical accuracy and safety communication standards.",
    link: "#"
  },
  {
    id: 3,
    title: "Renewable Energy",
    image: "/industry/03.png",
    text: "Industrial animation for turbine systems, solar installations, and energy storage technology is explained clearly to investors and regulatory bodies alike.",
    link: "#"
  },
  {
    id: 4,
    title: "Construction and Infrastructure",
    image: "/industry/04.png",
    text: "Technical animation for heavy construction equipment, infrastructure projects, and large-scale mechanical systems used across public works and private development.",
    link: "#"
  },
  {
    id: 5,
    title: "Automotive",
    image: "/industry/05.png",
    text: "Industrial animation for automotive manufacturing lines, robotics integration, and mechanical systems within high-volume production facilities.",
    link: "#"
  },
  {
    id: 6,
    title: "Aerospace and Defense",
    image: "/industry/06.png",
    text: "Engineering animation services for aerospace mechanical systems and defense equipment built to exacting technical specifications and security requirements.",
    link: "#"
  },
  {
    id: 7,
    title: "Mining and Heavy Equipment",
    image: "/industry/06.png",
    text: "Industrial machinery animation services for mining equipment and heavy machinery operating in extreme operational environments and remote locations.",
    link: "#"
  },
  {
    id: 8,
    title: "Industrial Automation",
    image: "/industry/06.png",
    text: "Animation visualizing industrial automation systems, PLC systems, and SCADA systems integration across modern, increasingly automated production facilities.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Industry-Specific Industrial Animation Solutions"
      description="Industrial animation requirements vary significantly by sector, and our team applies industry-specific technical standards and regulatory awareness to each of the following categories."
      industries={industries}
      variant="gradient"
    />
  );
}
