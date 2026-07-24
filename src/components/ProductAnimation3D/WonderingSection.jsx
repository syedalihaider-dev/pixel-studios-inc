"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Product Complexity",
    intro: "A single static product costs less to animate than a multi-component assembly with moving parts and internal mechanisms.",
    points: [
      "Single product vs multi-part assembly",
      "Simple product vs complex mechanism",
      "No animation vs high-detail animation",
      "2D illustration vs photorealistic 3D",
    ]
  },
  {
    name: "Animation Duration",
    intro: "A 15-second product loop costs less than a 90-second narrative-driven product explainer with multiple scenes and camera setups.",
    points: [
      "15-second product turntable/loop",
      "30-second feature highlight",
      "60-second product overview",
      "90-second comprehensive explainer"
    ]
  },
  {
    name: "Modeling Requirements",
    intro: "Existing CAD data reduces 3D product modeling and animation costs compared to building accurate geometry from scratch.",
    points: [
      "CAD model provided vs model built from reference photos",
      "2D line drawings vs 3D mesh modeling",
      "High-polygon detail vs optimized game-ready geometry"
    ]
  },
  {
    name: "Visual Effects Requirements",
    intro: "Particle effects, fluid simulation, or environmental effects add to the overall production scope beyond standard product rendering.",
    points: [
      "Particle effects (smoke, fire, water, sparks)",
      "Fluid and liquid simulation",
      "Environmental interaction (wind, rain, dust)",
      "Abstract data visualization overlays"
    ]
  },
  {
    name: "Output Resolution",
    intro: "4K and broadcast-spec delivery requires more rendering time than standard web resolution output, affecting both cost and timeline.",
    points: [
      "1080p (Full HD) web delivery",
      "2K resolution for professional presentations",
      "4K for high-end product showcases",
      "Broadcast 4K (UHD-1 / Rec. 709)",
    ]
  },
  {
    name: "Delivery Timeline",
    intro: "Rush 3D product animation pricing reflects compressed production schedules and the resource reallocation required to meet them.",
    points: [
      "Standard 10-15 business days for simple products",
      "Complex 3D animations: 3-6 weeks",
      "Custom builds and simulations: 6-12 weeks",
      "No rush fees for early-stage planning and asset preparation"
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
            <p className="subtitle">Pricing Guide</p>
            <h2 className={styles.mainTitle}>3D Product Animation Pricing and Budget Considerations</h2>
            <p className={styles.description}>
              3D product animation cost is driven by complexity, duration, and visual requirements, and we provide itemized quotes rather than flat-rate packages so you understand exactly what drives the investment.
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

                  <h3 className={styles.contentTitle}>Key Pricing Factors</h3>

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
