"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WonderingSection.module.css';

import CTAButton from '@/components/Common/CTAButton';

const industriesData = [
  {
    name: "Character Design",
    intro:
      "Character design establishes the foundation of hybrid and cel animation by defining the visual identity, personality, proportions, and expressive range the animation style requires. Characters are created specifically for the drawing approach and performance possibilities that frame-by-frame and hybrid techniques provide.",
    points: [
      "Character designs are developed with animation movement and visual storytelling in mind.",
      "Every shape, proportion, expression, and detail supports the intended artistic direction.",
      "Pinterest references, visual moodboards, and style inspirations help establish a clear creative direction before production begins."
    ]
  },
  {
    name: "Visual Development",
    intro:
      "Visual development creates the complete artistic language of the project before animation production starts. Colors, environments, character styles, textures, and overall visual direction are established to ensure every animated frame maintains consistency and communicates the intended creative vision.",
    points: [
      "Style frames and visual references define the overall look and atmosphere of the animation.",
      "Pinterest boards and creative references help explore color palettes, environments, compositions, and artistic influences.",
      "A strong visual foundation ensures every scene feels connected and intentionally designed."
    ]
  },
  {
    name: "Frame-by-Frame Motion",
    intro:
      "Frame-by-frame animation is the core discipline behind authentic cel animation, where every movement is carefully crafted instead of relying on automated interpolation. Each individual frame receives artistic attention to create organic motion, expressive timing, and a handcrafted visual quality.",
    points: [
      "Every frame is designed intentionally to create natural and expressive movement.",
      "Hand-drawn animation allows greater control over personality, timing, and emotional performance.",
      "Frame-by-frame craftsmanship creates the unique visual character that defines cel animation."
    ]
  },
  {
    name: "Timing and Spacing",
    intro:
      "Timing and spacing determine how animation feels to the audience. These fundamental animation principles control weight, emotion, speed, rhythm, and overall believability, transforming individual drawings into convincing movement.",
    points: [
      "Proper timing creates natural rhythm and emotional impact.",
      "Spacing decisions control acceleration, weight, and physical realism.",
      "Carefully planned motion prevents animation from feeling mechanical or artificial."
    ]
  },
  {
    name: "Effects Animation",
    intro:
      "Effects animation adds another layer of visual storytelling through hand-crafted elements such as fire, water, magic, impacts, smoke, and environmental effects. These elements are designed to match the character animation style and create a unified visual experience.",
    points: [
      "Hand-drawn effects enhance the personality and energy of animated scenes.",
      "Effects are designed to match the project's artistic direction and animation style.",
      "Visual effects support storytelling by adding movement, atmosphere, and emotional impact."
    ]
  },
  {
    name: "Background and Environment Design",
    intro:
      "Background and environment design completes the visual world by creating spaces that complement the character animation. Environments are developed with the same artistic language, color direction, and visual detail as the animated characters to maintain a consistent experience.",
    points: [
      "Environment artwork is created to support the character's visual style.",
      "Background details, compositions, and colors enhance storytelling and atmosphere.",
      "Pinterest-inspired references and environment moodboards help define unique worlds and visual settings."
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
            <p className="subtitle">HYBRID & CEL ANIMATION</p>

            <h2 className={styles.mainTitle}>
              Key Elements of High-Quality Hybrid and Cel Animation
            </h2>

            <p className={styles.description}>
              High-quality hybrid and cel animation combines artistic direction, detailed character design, frame-by-frame craftsmanship, and carefully developed visual elements to create memorable animated experiences. From character development and visual exploration to hand-drawn motion, effects animation, and environment design, every element works together to build a consistent and distinctive animation style.
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
