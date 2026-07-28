"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Improved Gameplay Experience",
    intro:
      "An animation that communicates physical feedback to the player makes the gameplay feel more responsive, more satisfying, and more real.",
    points: [
      "Animation improves player responsiveness and control feedback.",
      "Movement feels more satisfying through accurate timing and physical reactions.",
      "Well-crafted animation creates a more realistic gameplay experience."
    ]
  },
  {
    name: "Better Character Personality",
    intro:
      "Secondary motion, idle variation, and the micro-expressions that make characters feel present rather than controlled.",
    points: [
      "Secondary motion adds realism to every movement.",
      "Idle animations make characters feel alive even when inactive.",
      "Micro-expressions give characters believable personality and emotion."
    ]
  },
  {
    name: "Enhanced Immersion",
    intro:
      "Animation inconsistencies break immersion faster than almost any other visual quality issue. Consistent, polished animation sustains it.",
    points: [
      "Consistent animation maintains player immersion.",
      "Polished movement eliminates distracting visual inconsistencies.",
      "Smooth transitions create a believable game world."
    ]
  },
  {
    name: "Increased Player Engagement",
    intro:
      "Players engage more deeply with games whose characters they believe in. Animation quality is a primary variable in that belief.",
    points: [
      "Believable characters encourage stronger emotional connection.",
      "High-quality animation increases player engagement.",
      "Expressive performances keep players invested in the experience."
    ]
  },
  {
    name: "Stronger Visual Storytelling",
    intro:
      "Cinematic and facial animation carry narrative information that dialogue alone cannot deliver with equivalent emotional impact.",
    points: [
      "Facial animation communicates emotion beyond dialogue.",
      "Cinematic performances strengthen narrative delivery.",
      "Visual storytelling creates greater emotional impact."
    ]
  },
  {
    name: "Higher Production Value",
    intro:
      "Animation quality signals production investment to players evaluating a game before purchase. It is a commercial asset, not a production checkbox.",
    points: [
      "Professional animation increases perceived game quality.",
      "Polished visuals strengthen player confidence before purchase.",
      "Animation is a commercial advantage, not simply a production task."
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
            <p className="subtitle">GAME ANIMATION BENEFITS</p>

            <h2 className={styles.mainTitle}>
              Why Professional Game Animation Matters?
            </h2>

            <p className={styles.description}>
              Professional game animation improves gameplay responsiveness, strengthens character personality, enhances immersion, increases player engagement, supports visual storytelling, and raises the overall production value of a game. Every animation is designed to serve both the gameplay experience and the commercial success of the final product.
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
