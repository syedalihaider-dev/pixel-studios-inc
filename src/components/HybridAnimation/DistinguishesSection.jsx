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
    title: "Humanoid Character Animation",
    description:
      "Human locomotion, combat, and interaction animation with the weight and physical accuracy that a player controller translates into satisfying movement feedback."
  },
  {
    id: "02",
    num: "02",
    title: "Stylized Character Animation",
    description:
      "Exaggerated, expressive animation calibrated to the stylized art direction. The exaggeration is deliberate and consistent, not a shortcut to reduce technical demand."
  },
  {
    id: "03",
    num: "03",
    title: "Realistic Character Animation",
    description:
      "Motion capture-based or keyframe realistic animation with the subtle secondary motion and micro-expression that distinguish photorealistic character performance from technically accurate character movement."
  },
  {
    id: "04",
    num: "04",
    title: "Creature Animation",
    description:
      "Non-human character animation grounded in the anatomy the creature's biology suggests and the personality the design establishes."
  },
  {
    id: "05",
    num: "05",
    title: "Facial Expressions and Lip Sync",
    description:
      "Blend shape-driven facial animation and phoneme-accurate lip sync for characters whose emotional performance is a storytelling requirement."
  },
  {
    id: "06",
    num: "06",
    title: "Motion Capture Cleanup",
    description:
      "Mocap data cleanup, retargeting to production rigs, and the keyframe supplementation that fills the gaps capture sessions produce."
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
            <p className="subtitle">WHAT MAKES Pixel STUDIOS A LEADING GAME</p>
            <h2 className={styles.mainHeading}>Character Animation Services for Games</h2>
            <p className={styles.topParagraph}>
              We animate characters across the spectrum of game genres. Not every game needs photorealistic animation. Not every game benefits from motion capture. The right style serves the gameplay, the IP, and the target platform.
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
