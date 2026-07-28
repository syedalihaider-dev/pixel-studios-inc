"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Brand Mascot Animation",
    intro:
      "Mascot character animation with the personality consistency and expressive range to serve the brand across multiple campaigns and platforms.",
    points: [
      "Consistent character personality across marketing campaigns.",
      "Expressive animation that reinforces brand identity.",
      "Adaptable mascot performances for websites, ads, social media, and promotional content."
    ]
  },
  {
    name: "Explainer Video Characters",
    intro:
      "Character animation for explainer videos where the character's role is to guide the viewer through a complex message without overshadowing it.",
    points: [
      "Characters simplify complex topics through visual storytelling.",
      "Designed to support the message rather than distract from it.",
      "Ideal for product explainers, onboarding videos, and educational content."
    ]
  },
  {
    name: "Social Media Character Content",
    intro:
      "Short-form character animation for social media with the hook, energy, and format calibrated to each platform's audience behavior.",
    points: [
      "Platform-optimized animations for Instagram, TikTok, YouTube Shorts, and Facebook.",
      "Attention-grabbing character performances designed for short-form viewing.",
      "Built to increase engagement, shares, and audience interaction."
    ]
  },
  {
    name: "Advertising Campaign Characters",
    intro:
      "Campaign character animation that builds an audience relationship with the character across a series of connected advertising pieces.",
    points: [
      "Characters developed for long-term advertising campaigns.",
      "Consistent visual identity across multiple campaign assets.",
      "Story-driven performances that strengthen audience recognition and brand recall."
    ]
  }
];

export default function WonderingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = industriesData[activeIndex];

  return (
    <section className={styles.wonderingSection}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="row"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-12 text-center">
            <p className="subtitle">MARKETING & BRANDING</p>

            <h2 className={styles.mainTitle}>
              Character Animation for Marketing and Branding
            </h2>

            <p className={styles.description}>
              Character animation gives brands a recognizable personality that audiences remember across campaigns, videos, and social platforms. From mascots to advertising campaigns, every character is designed to strengthen engagement while supporting the brand message.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-lg-4 col-md-12">
            <div className={styles.industryList}>
              {industriesData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.industryItem} ${index === activeIndex ? styles.active : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{item.name}</span>
                  <div className={styles.arrowIcon}>
                    <Image src="/icons/arrow.png" alt="Arrow" width={38} height={30} />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <CTAButton text="Let's Talk" type="link" href="/contact-us" />
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className={styles.rightContent}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p className={styles.contentIntro}>{activeData.intro}</p>

                  <h3 className={styles.contentTitle}>Example of our work</h3>

                  <div className={styles.bulletList}>
                    {activeData.points.map((point, idx) => (
                      <div key={idx} className={styles.bulletItem}>
                        <div className={styles.tickIcon}>
                          <Image src="/icons/tick.png" alt="Tick" width={29} height={29} />
                        </div>
                        <p className={styles.bulletText}>{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
