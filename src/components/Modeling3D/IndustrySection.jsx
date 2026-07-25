"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Gaming",
    image: "/industry/01.png",
    text: "3D modeling for gaming covers characters, environments, and props optimized for real-time engines and the specific performance budget of each platform.",
    link: "/industry/retail"
  },
  {
    id: 2,
    title: "eCommerce and Retail",
    image: "/industry/02.png",
    text: "3D modeling for eCommerce produces interactive product views that reduce returns and improve buyer confidence across online marketplaces and brand websites alike.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Manufacturing",
    image: "/industry/03.png",
    text: "3D modeling for manufacturing supports CAD conversion, training visualization, and marketing content from a single accurate source asset.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "Architecture and Real Estate",
    image: "/industry/04.png",
    text: "3D modeling for real estate produces accurate property and interior models for pre-sale marketing and development pitch presentations.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Healthcare and Medical",
    image: "/industry/05.png",
    text: "3D modeling for healthcare supports device visualization and training content built to clinical accuracy standards that regulatory and provider audiences expect.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "Automotive",
    image: "/industry/06.png",
    text: "3D modeling for automotive covers vehicles, components, and configurators for both marketing campaigns and internal engineering review.",
    link: "/industry/real-estate"
  },
  {
    id: 7,
    title: "Consumer Electronics",
    image: "/industry/07.png",
    text: "3D modeling for consumer electronics produces precise, market-ready models for launch campaigns and retail platform listings.",
    link: "/industry/packaging"
  },
  {
    id: 8,
    title: "Fashion and Apparel",
    image: "/industry/08.png",
    text: "3D modeling for fashion brands enables digital sampling, virtual try-on, and catalog content production without a physical photoshoot for every SKU. ",
    link: "/industry/packaging"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Industry-Leading 3D Modeling Solutions"
      description="Our 3D modeling services for businesses are applied across the following sectors, each with its own technical standards and production priorities that our team has built specific expertise in."
      industries={industries}
      variant="gradient"
    />
  );
}
