"use client";
import React, { useState } from 'react';
import styles from './WhyInvestSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CTAButton from '../Common/CTAButton';

const accordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Creative Discovery",
    content:
      "The creative direction is established before production begins through visual references, brand context, narrative requirements, and technique selection. This stage defines the animation style, artistic approach, production goals, and the technical method that best supports the intended creative vision.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Story and Concept Development",
    content:
      "Narrative structure, messaging approach, and creative concepts are developed according to the specific requirements of the project. Every storytelling decision is planned to ensure the animation communicates the intended emotion, message, and audience experience effectively.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Character and Environment Design",
    content:
      "Characters, backgrounds, and environments are designed specifically for the selected hybrid or cel animation technique. Visual style, proportions, colors, details, and artistic elements are carefully developed to create a consistent world that supports the overall animation direction.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Storyboarding and Animatics",
    content:
      "The complete animation sequence is mapped through detailed storyboards and animatics before frame production begins. Camera movement, scene composition, timing, character actions, and transitions are reviewed to ensure the final animation follows a clear and approved creative structure.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation Production",
    content:
      "Frame-by-frame and hybrid animation production is executed according to the approved storyboard, visual direction, and technical requirements. Every movement, drawing, transition, and animated element is carefully produced to achieve the intended artistic quality and storytelling impact.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Compositing and Visual Effects",
    content:
      "Multiple animation layers are combined through professional compositing workflows, with visual effects integrated to complete the final production. Hybrid projects receive careful layer management, effects treatment, and color consistency to ensure every element feels like part of one unified visual experience.",
  },
  {
    id: 7,
    icon: "/animation.png",
    title: "Sound Design and Music",
    content:
      "Audio elements are produced and integrated according to the animation's pacing, mood, and storytelling requirements. Sound effects, background music, and audio timing are carefully matched with visual movement to strengthen emotional impact and create a complete viewing experience.",
  },
  {
    id: 8,
    icon: "/animation.png",
    title: "Final Rendering and Delivery",
    content:
      "The completed animation is rendered and delivered in the formats required for the intended distribution platform. Final files are prepared according to technical specifications, ensuring compatibility for marketing campaigns, streaming platforms, digital content, or any other production requirements.",
  }
];

const WhyInvestSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">OUR PROCESS</p>

              <h2 className={styles.mainTitle}>
                Our Hybrid and Cel Animation <br />Production Process
              </h2>

              <p className={styles.subText}>
                Every hybrid and cel animation project follows a structured production workflow designed to transform creative concepts into polished animated experiences. From creative discovery and concept development to character design, storyboarding, frame-by-frame production, compositing, sound design, and final delivery, each stage ensures the animation maintains a consistent visual identity, technical quality, and emotional impact throughout the complete production process.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className={styles.accordionList}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''}`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() => setActiveId(item.id === activeId ? null : item.id)}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.iconCircle}>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={108}
                          height={108}
                          className={styles.accIcon}
                        />
                      </div>
                      <h3 className={styles.accTitle}>{item.title}</h3>
                    </div>

                    <div className={styles.chevronWrapper}>
                      {activeId === item.id ? (
                        <ChevronUp size={24} className={styles.chevron} />
                      ) : (
                        <ChevronDown size={24} className={styles.chevron} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={styles.accordionBodyWrapper}
                      >
                        <div className={styles.accordionBody}>
                          <p className={`${styles.accContent} scroll_block`}>
                            {item.content}
                          </p>

                          <div className={styles.btnWrapper}>
                            <CTAButton text="Learn More" href="#" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;