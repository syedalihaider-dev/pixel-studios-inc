"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Explainer Videos",
    intro: "Designed to close the gap between what your audience currently understands and what they need to understand to act. Ideal for new products, unfamiliar concepts, and any message where confusion is costing you conversions.",
    points: [
      "Simplifying complex SaaS workflows and API ecosystems into easy-to-digest visual stories.",
      "Explaining novel technology platforms to non-technical stakeholders and potential buyers.",
      "Reducing customer bounce rates by answering core value propositions within the first 30 seconds.",
      "Converting abstract business models into clear step-by-step visual journeys."
    ]
  },
  {
    name: "Educational Videos",
    intro: "Structured around genuine learning outcomes rather than content volume. We build educational whiteboard videos that sequence information the way the brain encodes it, each one building on the last.",
    points: [
      "Transforming dense academic and technical curriculum into engaging progressive modules.",
      "Improving student and learner retention rates through synchronized visual drawing and audio.",
      "Developing SCORM-compliant e-learning assets for university and K-12 educational platforms."
    ]
  },
  {
    name: "Training Videos",
    intro: "Compliance training, process documentation, systems onboarding, and skills development content built for completion and retention. We produce training whiteboard videos that employees actually watch and remember after the session ends.",
    points: [
      "Standardizing employee onboarding workflows across multi-location enterprise organizations.",
      "Increasing workplace safety compliance rates with step-by-step procedural animations.",
      "Replacing static presentation decks with high-retention interactive training videos."
    ]
  },
  {
    name: "Product Demonstrations",
    intro: "Feature walkthroughs, use-case illustrations, and capability showcases that show your product in action rather than describe it in abstract terms. Built for buyers who need to see it to believe it before they will purchase.",
    points: [
      "Highlighting core software features, integrations, and user dashboard capabilities.",
      "Visualizing hardware mechanics and internal component operations with precision.",
      "Equipping sales teams with powerful visual demos that overcome technical buyer objections."
    ]
  },
  {
    name: "Sales & Marketing Videos",
    intro: "Funnel-aware whiteboard animation built to move the viewer from awareness to intent. Hook structure, persuasive narrative, and a clear call to action — edited for the platform and the specific stage of the buyer journey.",
    points: [
      "Boosting paid ad click-through rates across LinkedIn, YouTube, and Meta ad campaigns.",
      "Increasing landing page conversion rates by capturing immediate visitor interest.",
      "Structuring high-impact video pitches for sales proposals and investor presentations."
    ]
  },
  {
    name: "Internal Communication Videos",
    intro: "Policy announcements, organizational updates, change management communications, and leadership messaging are produced to the same standard as your external content. Because your employees deserve communication that respects their attention, too.",
    points: [
      "Communicating major corporate change initiatives and strategic shifts with clarity.",
      "Delivering executive updates and company-wide policy updates that drive alignment.",
      "Fostering company culture and values through engaging visual storytelling."
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
            <h4 className="subtitle">Wondering how well</h4>
            <h2 className={styles.mainTitle}>Types of Whiteboard Animation Videos</h2>
            <p className={styles.description}>
              Whiteboard animation is not a single format — it is a production approach that adapts to the communication objective. These are the most common video types we produce and the specific purpose each one serves.
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
