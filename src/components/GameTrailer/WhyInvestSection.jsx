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
    title: "Creative Brief and Discovery",
    content:
      "We establish what the viewer needs to feel at the end of the trailer before we establish what they will see during it. The emotional objective drives every subsequent creative and technical decision.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Scripting and Storyboarding",
    content:
      "Script and storyboard are produced and approved before footage capture or animation begins. The trailer exists as a document before it exists as a video. Changes at this stage are inexpensive.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Gameplay Capture and Animation",
    content:
      "Footage capture sessions are directed to produce the specific moments the storyboard requires rather than capturing broadly and hoping the edit finds something usable. Animation sequences were produced to the visual quality of the brief.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Motion Graphics and VFX",
    content:
      "Title cards, logo animations, lower thirds, and visual effects are applied to serve the narrative rhythm of the trailer rather than demonstrate our visual effects capability.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Sound Design and Final Mix",
    content:
      "Score selection or original composition, sound design that gives every action its physical consequence, and a final mix that makes the trailer work in a cinema, on a phone speaker, and on a gaming headset simultaneously.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Platform Optimization",
    content:
      "Final exports in every format, at every specification, for every platform the trailer will be distributed through. Steam video specs. App store requirements. YouTube and social platform formats. All confirmed against current platform requirements before submission.",
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
              <p className="subtitle">HOW WE WORK</p>

              <h2 className={styles.mainTitle}>
                Our Trailer <br />Production Process
              </h2>

              <p className={styles.subText}>
                Every game trailer follows a structured production workflow, from creative discovery and story development to gameplay capture, motion graphics, sound design, and platform-specific delivery. Each stage is planned to maximize audience engagement while ensuring the trailer supports the game's marketing and commercial objectives.
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