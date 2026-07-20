"use client";
import React from "react";
import GlobalTestimonialSection from "../Common/TestimonialSection";

const testimonials = [
  {
    id: 1,
    name: "Amele",
    role: "SVP, Head of Marketing",
    image: "/client-men-01.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 2,
    name: "Sarah",
    role: "Director of Operations",
    image: "/client-women-01.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    name: "Michael",
    role: "CEO & Founder",
    image: "/client-men-02.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 4,
    name: "David",
    role: "Product Manager",
    image: "/client-men-01.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

export default function TestimonialSection() {
  return (
    <GlobalTestimonialSection
      heading="Let’s Hear What Our Clients Are Saying"
      subText="Our clients include some of the world’s most renowned brands, entrusting us with their animation needs to elevate their messages."
      testimonials={testimonials}
      variant="default"
    />
  );
}
