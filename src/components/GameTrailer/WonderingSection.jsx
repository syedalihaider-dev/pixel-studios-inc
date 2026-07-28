"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Commercial Length",
    intro:
      "A 15-second digital ad and a 60-second broadcast commercial are not the same production. Script, storyboard, animation, and voiceover all scale with runtime.",
    points: [
      "15-second ads require less scripting and production than 60-second broadcast commercials.",
      "Longer commercials increase storyboard, animation, editing, and review time.",
      "Production investment scales directly with the final runtime of the commercial."
    ]
  },
  {
    name: "Animation Style",
    intro:
      "Motion graphics commercial animation costs less than fully illustrated character animation. 3D commercial animation with photorealistic rendering costs more than both.",
    points: [
      "Motion graphics provide the most cost-effective commercial animation solution.",
      "Character animation requires custom illustration, rigging, and performance animation.",
      "Photorealistic 3D animation involves advanced modeling, lighting, rendering, and compositing."
    ]
  },
  {
    name: "Creative Development Requirements",
    intro:
      "Projects requiring multiple concept directions and discovery-led strategy development cost more than projects where the creative brief arrives fully formed.",
    points: [
      "Brand discovery workshops increase strategic planning time.",
      "Developing multiple creative concepts requires additional writing and visual exploration.",
      "A finalized creative brief reduces production time and overall project cost."
    ]
  },
  {
    name: "Character Design Complexity",
    intro:
      "Custom character design and build for a character-driven commercial adds to the production scope beyond standard asset creation.",
    points: [
      "Original character concepts require illustration and visual development.",
      "Custom rigging and animation increase production effort.",
      "Detailed characters require additional animation and quality assurance time."
    ]
  },
  {
    name: "Voiceover and Audio Production",
    intro:
      "Professional voiceover talent, music licensing, and custom sound design are standard in our packages and priced transparently at the quote stage.",
    points: [
      "Professional voice actors improve commercial quality and audience trust.",
      "Licensed music enhances the emotional impact of the commercial.",
      "Custom sound design and final audio mixing ensure broadcast-ready quality."
    ]
  },
  {
    name: "Number of Deliverables",
    intro:
      "A campaign package producing the same commercial across six platform formats costs more than a single-format production. Multi-format campaigns are priced with package efficiencies applied.",
    points: [
      "Each platform requires different aspect ratios and export specifications.",
      "Campaigns often include versions for TV, YouTube, Instagram, TikTok, LinkedIn, and websites.",
      "Bundled multi-platform production offers better value than creating each version separately."
    ]
  },
  {
    name: "Production Timeline",
    intro:
      "Standard production timelines are priced at the standard rate. Rush timelines for campaign launch deadlines are available and priced honestly.",
    points: [
      "Standard production schedules provide the best value.",
      "Rush projects require priority scheduling and additional production resources.",
      "Expedited delivery is available for fixed product launches and campaign deadlines."
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
            <p className="subtitle">PRICING</p>

            <h2 className={styles.mainTitle}>
              Animated Commercial Pricing and Cost Factors
            </h2>

            <p className={styles.description}>
              Animated commercial services cost is determined by the production scope, not by a flat-rate package. Here are the variables that drive the investment.
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
