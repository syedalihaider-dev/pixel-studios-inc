"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Personal Injury & Medical Malpractice",
    intro:
      "Personal injury law firms and medical malpractice attorneys rely on clear, medically accurate visuals to explain how injuries occur and how treatment impacts the body. Demonstratives often include injury mechanism animations, surgical walkthroughs, and timelines that connect negligence to outcome in a way juries can easily understand.",
    points: [
      "Visualizing injury mechanisms, surgical procedures, and medical conditions with accurate demonstrations.",
      "Creating timelines that connect negligence, injury events, treatment, and outcomes clearly.",
      "Helping juries understand complex medical evidence through easy-to-follow visual storytelling."
    ]
  },
  {
    name: "Product Liability",
    intro:
      "Product liability lawyers need precise, technical storytelling to show how and why a product failed. We create detailed animations that break down design flaws, manufacturing defects, and failure sequences, helping establish causation and liability in complex cases.",
    points: [
      "Breaking down product defects and failure mechanisms through detailed visual reconstruction.",
      "Demonstrating how design flaws or manufacturing issues contributed to an incident.",
      "Presenting complex engineering evidence in a format juries can easily evaluate."
    ]
  },
  {
    name: "Insurance Defense",
    intro:
      "Insurance defense firms require balanced, evidence driven visuals that support expert testimony and challenge opposing claims. Demonstratives focus on accident reconstruction, alternative scenarios, and damage analysis to provide clarity and reinforce defence strategies.",
    points: [
      "Creating accident reconstructions based on available evidence and expert analysis.",
      "Visualizing alternative scenarios and evaluating different case interpretations.",
      "Supporting defense strategies with clear and factual courtroom presentations."
    ]
  },
  {
    name: "Criminal Defense",
    intro:
      "Criminal defense attorneys use visual reconstructions to present timelines, scene layouts, and alternative interpretations of events. These demonstratives simplify complex evidence, support witness accounts, and help create reasonable doubt through clear, factual presentation.",
    points: [
      "Reconstructing crime scenes, timelines, and sequences of events visually.",
      "Supporting witness testimony with accurate scene layouts and evidence presentation.",
      "Helping juries understand alternative interpretations through factual visualization."
    ]
  },
  {
    name: "Civil & Corporate Litigation",
    intro:
      "Civil litigation firms and corporate legal teams need polished, persuasive visuals for high stakes disputes. From contract breakdowns to large scale incident reconstructions, we develop graphics and animations that communicate complex information with clarity and credibility in courtrooms and arbitration settings.",
    points: [
      "Visualizing complex disputes, contracts, and business-related evidence clearly.",
      "Creating professional courtroom graphics for trials and arbitration proceedings.",
      "Communicating large-scale incidents through accurate and persuasive animations."
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
            <p className="subtitle">INDUSTRIES WE SERVE</p>

            <h2 className={styles.mainTitle}>
              Industries and Legal Practice Areas We Serve
            </h2>

            <p className={styles.description}>
              Personal injury law firms, medical malpractice attorneys, product liability
              lawyers, insurance defense firms, criminal defense attorneys, civil litigation
              firms, and corporate legal teams rely on our legal visualization services.
              Each practice area has specific demonstrative requirements that we understand
              and approach individually.
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
