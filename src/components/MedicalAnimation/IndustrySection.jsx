"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "Pharmaceuticals",
    image: "/industry/01.png",
    text: "Pharmaceutical animation for drug mechanism, clinical data visualization, and commercial marketing content for branded and specialty pharmaceutical products.",
    link: "#"
  },
  {
    id: 2,
    title: "Medical Devices",
    image: "/industry/02.png",
    text: "Medical device animation services for Class I, II, and III devices across implantable, diagnostic, and surgical instrument categories.",
    link: "#"
  },
  {
    id: 3,
    title: "Biotechnology",
    image: "/industry/03.png",
    text: "Biotechnology animation for cell therapy, gene editing, and biologic drug development content for investors, regulators, and scientific communication.",
    link: "#"
  },
  {
    id: 4,
    title: "Hospitals and Healthcare Providers",
    image: "/industry/04.png",
    text: "Patient education animation and clinical training content for health systems and hospital networks managing large, distributed care teams.",
    link: "#"
  },
  {
    id: 5,
    title: "Digital Health and HealthTech",
    image: "/industry/05.png",
    text: "Medical tech animation for digital health platforms and connected device ecosystems explaining product function to patients, providers, and payers.",
    link: "#"
  },
  {
    id: 6,
    title: "Research Organizations",
    image: "/industry/06.png",
    text: "Scientific visualization and research communication animation for academic and commercial research organizations presenting complex study data.",
    link: "#"
  },
  {
    id: 7,
    title: "Healthcare Education",
    image: "/industry/07.png",
    text: "Medical education animation for nursing programs, medical schools, and continuing education platforms, producing curriculum content at scale.",
    link: "#"
  },
  {
    id: 8,
    title: "Life Sciences Companies",
    image: "/industry/08.png",
    text: "Life sciences medical animation for discovery-stage companies communicating early pipeline data to investors and scientific advisory boards.",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Medical Animation Solutions for Every Healthcare Sector"
      description="Our medical animation production company has built specific expertise across each of the following healthcare sectors, applying clinical accuracy standards relevant to each audience."
      industries={industries}
      variant="gradient"
    />
  );
}
