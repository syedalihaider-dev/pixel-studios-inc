"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./IndustrySection.module.css";
import CTAButton from "../Common/CTAButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';


const industries = [
  {
    id: 1,
    title: "Cybersecurity Videos",
    image: "/industry/01.png",
    text: "Our cybersecurity animation team specializes in translating threat landscapes, compliance requirements, and security protocols into video content that employees engage with willingly rather than click through to finish. Because an awareness video that no one watches is not an awareness program.",
    link: "/#"
  },
  {
    id: 2,
    title: "Education",
    image: "/industry/02.png",
    text: "From K-12 curriculum animation to university-level course material, our education production team understands how to sequence information, use visual metaphor to build understanding, and create content that learners return to rather than endure.",
    link: "/industry/professional-services"
  },
  {
    id: 3,
    title: "Video Marketing Services",
    image: "/industry/03.png",
    text: "Campaign videos, product launches, brand anthems, and social series built with a distribution strategy embedded in the production process. Our video marketing services team thinks about where the content lives and how audiences encounter it before the script is written, not after the final export.",
    link: "/industry/software-tech"
  },
  {
    id: 4,
    title: "Training Video Production",
    image: "/industry/04.png",
    text: "Corporate training, compliance modules, onboarding sequences, safety procedure walkthroughs, and skills development content. We produce training video content that reduces per-learner delivery costs, improves knowledge retention, and cuts the drop-off rates that plague most corporate learning programs.",
    link: "/industry/medical-biotech"
  },
  {
    id: 5,
    title: "Social Media Video Production",
    image: "/industry/05.png",
    text: "Short-form content built from the ground up for TikTok, Instagram Reels, LinkedIn, and YouTube Shorts. Proper aspect ratios, platform-appropriate hooks, pacing calibrated for mobile scroll behavior, and visual structures that work without audio for the 60% of viewers watching on mute.",
    link: "/industry/education"
  },
  {
    id: 6,
    title: "SaaS Video Production",
    image: "/industry/06.png",
    text: "Product walkthroughs, feature announcements, onboarding animations, demo videos, and customer success content. We work with SaaS companies at every stage of growth, from seed-stage startups building their first explainer to Series C companies refreshing a full content library for a rebrand or major product launch.",
    link: "/industry/real-estate"
  },
  {
    id: 7,
    title: "Finance",
    image: "/industry/06.png",
    text: "Investment product animation, regulatory explainer content, financial literacy series, and institutional communication videos. Our finance animation work is accurate, clearly structured, and built for audiences who read compliance disclaimers rather than scroll past them.",
    link: "/industry/real-estate"
  },
  {
    id: 8,
    title: "Healthcare",
    image: "/industry/06.png",
    text: "Healthcare video animation services built to the precision standards this industry demands. Patient education, medical device visualization, clinical trial explainers, pharmaceutical product animation, and provider education content. Our team understands the sensitivity, accuracy requirements, and regulatory awareness.",
    link: "/industry/real-estate"
  },
  {
    id: 9,
    title: "Post-Production Services",
    image: "/industry/06.png",
    text: "Full post-production covering sound design, color grading, dialogue editing, music licensing, audio mixing, and graphics overlays for existing footage of any type or origin. Available as a standalone service or as part of a full production engagement.",
    link: "/industry/real-estate"
  },
  {
    id: 10,
    title: "Testimonial Video Production",
    image: "/industry/06.png",
    text: "Client testimonial videos produced with the same quality standard as your primary branded content. Not smartphone selfies with a ring light. Properly shot, properly edited, authentically captured testimonials that build social proof without looking like a production afterthought.",
    link: "/industry/real-estate"
  },
  {
    id: 11,
    title: "Custom VTuber Model Services",
    image: "/industry/06.png",
    text: "Live2D and 3D VTuber model creation for independent content creators, brands developing virtual influencer identities, and gaming companies building interactive characters with genuine personality and movement quality.",
    link: "/industry/real-estate"
  },
  {
    id: 12,
    title: "Non-Profits",
    image: "/industry/06.png",
    text: "Impact storytelling, donor campaign videos, program explainers, and educational content for organizations doing meaningful work on constrained production budgets. We understand that non-profit video budgets are not small because the mission is small. We price and produce accordingly.",
    link: "/industry/real-estate"
  },
  {
    id: 13,
    title: "Software and Tech",
    image: "/industry/06.png",
    text: "Product demos, UI walkthrough animations, feature explainer videos, and technical product communication for software and technology companies who need their product to feel approachable to an audience that may not share their level of technical fluency.",
    link: "/industry/real-estate"
  },
  {
    id: 14,
    title: "YouTube Video Production",
    image: "/industry/06.png",
    text: "Channel content, multi-episode series, long-form educational and entertainment video produced to YouTube's technical specifications and optimized for the engagement patterns of YouTube's search and recommendation algorithm.",
    link: "/industry/real-estate"
  },
  {
    id: 15,
    title: "E-Learning Video Production",
    image: "/industry/06.png",
    text: "SCORM-compatible, LMS-ready animated content for corporate learning and development platforms, professional certification programs, and digital education providers who need reliable, measurably effective course material built to a high production standard.",
    link: "/industry/real-estate"
  },
  {
    id: 16,
    title: "Commercial Video Production",
    image: "/industry/06.png",
    text: "Television and streaming-grade commercial production from brief through final broadcast-ready delivery. Our commercial production team handles creative development, production management, and complete post-production for brands whose content lives in premium placement environments.",
    link: "/industry/real-estate"
  },
];

export default function IndustrySection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -345, behavior: "smooth" }); // 320px + 25px gap
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 345, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.industrySection}>
      <div className="container">
        <motion.div
          className={styles.topRow}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="row">
            <h2 className={styles.heading}>
              The Industries We Serve and the Standards Each One Demands
            </h2>
            <p className={styles.description}>
              A healthcare animated explainer, a SaaS onboarding video, and a legal demonstrative animation are not the same project with different subject matter. We have built genuine expertise across the industries listed here, which means we understand those differences from the first discovery call.
            </p>
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrowBtn} onClick={scrollLeft} aria-label="Previous slide">
              <ChevronLeft size={24} />
            </button>
            <button className={styles.arrowBtn} onClick={scrollRight} aria-label="Next slide">
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.sliderWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className={styles.sliderTrack} ref={sliderRef}>
          {industries.map((industry) => (
            <div key={industry.id} className={styles.slideCard}>
              <Image src={industry.image} alt={industry.title} className={styles.cardImg} width={500} height={500} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <div className={styles.cardContent}>
                  <p className={`${styles.cardText} scroll_block`}>{industry.text}</p>
                  <CTAButton
                    text="Read More"
                    variant="filled"
                    href={industry.link}
                    type="link"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
