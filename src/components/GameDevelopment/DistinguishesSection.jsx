"use client";
import React, { useState } from 'react';
import styles from './DistinguishesSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import Image from 'next/image';


const stepsData = [
  {
    id: "01",
    num: "01",
    title: "Committed Long-Term Partnership",
    description: "Game development does not end at launch. Live games need ongoing content, balance updates, platform certification maintenance, and feature expansion."
  },
  {
    id: "02",
    num: "02",
    title: "Customized Full-Cycle Game Development",
    description: "Game development does not end at launch. Live games need ongoing content, balance updates, platform certification maintenance, and feature expansion."
  },
  {
    id: "03",
    num: "03",
    title: "Adherence to the Best Security Practices",
    description: "Game development does not end at launch. Live games need ongoing content, balance updates, platform certification maintenance, and feature expansion."
  },
  {
    id: "04",
    num: "04",
    title: "Trusted Partner With a Proven Track Record",
    description: "Game development does not end at launch. Live games need ongoing content, balance updates, platform certification maintenance, and feature expansion."
  }
];

const DistinguishesSection = () => {
  const [hoveredStep, setHoveredStep] = useState(stepsData[1].id);

  return (
    <section className={styles.section}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-12">
            <h4 className={styles.subHeading}>WHAT MAKES PIXELS STUDIOS A LEADING GAME</h4>
            <h2 className={styles.mainHeading}>DEVELOPMENT STUDIO?</h2>
            <p className={styles.topParagraph}>
              There are hundreds of game development companies competing for the same projects. Most of them have a showreel. Fewer of them have a methodology. Here is what specifically distinguishes how we work.
            </p>
          </div>
        </div>

        <div className={styles.stepsContainerWrapper}>
          <div className={styles.stepsList}>
            {stepsData.map((step, index) => {
              const isActive = hoveredStep === step.id;
              return (
                <motion.div
                  key={step.id}
                  className={`${styles.stepCard} ${isActive ? styles.activeCard : ''}`}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.stepNumWrapper}>
                    <span className={`${styles.stepNum} ${isActive ? styles.activeStepNum : ''}`}>
                      {step.num}
                    </span>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className={styles.buttonRow}
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 30 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CTAButton type="popup" text="Let's Talk" />
                          <CTAButton type="popup" variant="outline" text="Call Now" className={styles.callNowBtn} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className={styles.stepArrow}>
                    <Image src="/game-development/linear-arrow.png" width={30} height={30} alt="Arrow" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className={styles.progressBarContainer}>
            {stepsData.map((step) => {
              const isActive = hoveredStep === step.id;
              return (
                <div key={step.id} className={styles.progressTrackSegment}>
                  {isActive && (
                    <motion.div
                      layoutId="activeDistinguishProgressBar"
                      className={styles.progressActiveFill}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DistinguishesSection;
