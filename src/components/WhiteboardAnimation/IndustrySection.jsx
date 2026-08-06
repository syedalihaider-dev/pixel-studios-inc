"use client";
import React from "react";
import GlobalIndustrySection from "../Common/IndustrySection";

const industries = [
  {
    id: 1,
    title: "SaaS & Technology",
    image: "/industry/01.png",
    text: "Product walkthroughs, onboarding sequences, and feature education for software platforms where users need to understand your product quickly — before they decide it is too complicated and leave.",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare & Medical",
    image: "/industry/02.png",
    text: "Patient education, clinical training, and compliance content are produced to the accuracy and regulatory standards healthcare audiences require. We understand the difference between simplifying complex information and misrepresenting it. ",
    link: "#"
  },
  {
    id: 3,
    title: "Education & E-Learning",
    image: "/industry/03.png",
    text: "Curriculum content, course modules, and institutional explainers are built around genuine learning outcomes. From K-12 to university-level and professional certification, we produce whiteboard animations that learners actually finish.",
    link: "#"
  },
  {
    id: 4,
    title: "Finance & Fintech",
    image: "/industry/04.png",
    text: "Complex financial products, regulatory disclosures, and investment concepts are explained in a format that builds understanding without sacrificing accuracy. Clear enough for a general audience, precise enough for a compliance review.",
    link: "#"
  },
  {
    id: 5,
    title: "Real Estate",
    image: "/industry/05.png",
    text: "Property walkthroughs, investment explainers, mortgage process videos, and market education content for agencies, developers, and proptech platforms communicating with buyers who are making the largest purchase of their lives.",
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce",
    image: "/industry/06.png",
    text: "Product education, unboxing explainers, and post-purchase onboarding content that reduces returns, increases repeat purchases, and gives buyers the confidence to complete checkout on products that require some explanation.",
    link: "#"
  }
  ,
  {
    id: 7,
    title: "Startups & Enterprises",
    image: "/industry/06.png",
    text: "Whether you are explaining a new category to early adopters or rolling out a process change across a global organization, whiteboard animation scales from a single launch video to a full content program. ",
    link: "#"
  }
];

export default function IndustrySection() {
  return (
    <GlobalIndustrySection
      heading="Whiteboard Animation Solutions for Every Industry"
      description="The same whiteboard animation video that works for a healthcare compliance program will not work for a SaaS product demo. We have built genuine expertise across the categories below, which means we understand those differences from the first briefing call."
      industries={industries}
      variant="gradient"
    />
  );
}
