"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Increase Audience Engagement",
    intro: "Animated social media videos generate higher engagement rates than static posts across every major platform. Higher engagement feeds algorithmic distribution and multiplies organic reach without increasing ad spend.",
    points: [
      "Grabbing attention within the first 3 seconds with scroll-stopping animation.",
      "Explaining complex concepts with visual clarity that static text cannot match.",
      "Reinforcing brand identity through consistent visual language and motion patterns."
    ]
  },
  {
    name: "Improve Ad Performance",
    intro: "Animated social media ads consistently outperform static ad creative in click-through rate and cost per acquisition. Brands switching from static to animated ad creative routinely see CPAs drop without changing targeting or budget.",
    points: [
      "Cutting CPM by stopping scroll and lowering cost per thousand impressions.",
      "Increasing ad-to-landing-page conversion rates with better-qualified traffic.",
      "Reducing wasted ad spend from low-performing static assets."
    ]
  },
  {
    name: "Boost Brand Awareness",
    intro: "Consistent social media animation production builds visual brand recognition. When animation style, color system, and motion language are consistent across every post, the brand becomes recognizable before the viewer reads a word.",
    points: [
      "Establishing a consistent visual identity across all social platforms.",
      "Differentiating the brand from competitors who rely on generic stock visuals.",
      "Building long-term brand recall through memorable animation patterns and characters."
    ]
  },
  {
    name: "Communicate Messages Faster",
    intro: "A well-produced 15-second animated social media video communicates what a 300-word caption cannot: the offer, the brand, and the call to action simultaneously. Speed of communication is a competitive advantage in a feed where alternatives are one scroll away.",
    points: [
      "Delivering the full message in the first 3–5 seconds before the user scrolls.",
      "Using visuals to convey complex narratives that would require long captions and explanation.",
      "Ensuring brand and value proposition are recognized even with the sound off."
    ]
  },
  {
    name: "Increase Social Shares",
    intro: "Animated content generates more shares and saves than static content across every platform that tracks these signals as distribution drivers. Shares extend organic reach without additional spend.",
    points: [
      "Increasing the velocity of content distribution through user sharing and reshares.",
      "Reducing per-impression costs by leveraging organic amplification.",
      "Building an owned audience that amplifies brand messaging at scale."
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
            <p className="subtitle">Benefits of Social Media Animations</p>
            <h2 className={styles.mainTitle}>Why Do Brands Use Social Media Animation?</h2>
            <p className={styles.description}>
              The case for social media animation services is built on specific, measurable platform performance outcomes.
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
