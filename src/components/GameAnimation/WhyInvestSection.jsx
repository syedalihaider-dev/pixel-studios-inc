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
    title: "Project Discovery and Requirements",
    content:
      "Engine target, character rig specification, animation state machine structure, polycount budget, and delivery format are established before a keyframe is placed.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Character Rig Assessment",
    content:
      "The production rig was reviewed for animation suitability. Joint placement, weight painting quality, and blend shape range are all assessed before animation production begins.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Animation Planning",
    content:
      "Animation shot list, timing references, and state transition design are documented and approved before blocking begins.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Blocking and Keyframing",
    content:
      "Primary pose and timing established in blocking. The creative decision lives here. Everything downstream is refinement.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Refinement and Polish",
    content:
      "Spline refinement, secondary motion, and the animation polish that elevates a correctly-blocked animation to a finished one.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Engine Integration Testing",
    content:
      "Animation imported into the target engine and tested against the state machine, the transition logic, and the gameplay systems it serves. Problems caught here cost nothing.",
  },
  {
    id: 7,
    icon: "/animation.png",
    title: "Quality Assurance",
    content:
      "Internal QA review against the animation brief. Every animation is reviewed at the delivery specification before the client sees it.",
  },
  {
    id: 8,
    icon: "/animation.png",
    title: "Final Delivery",
    content:
      "Final files in the engine-native formats, according to the specifications established in discovery. Source files included.",
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
                Our Game Animation <br />Production Process
              </h2>

              <p className={styles.subText}>
                Every game animation project follows a structured production pipeline designed to deliver technically accurate, engine-ready animations with consistent quality. From project discovery and rig assessment to animation planning, blocking, refinement, engine integration testing, quality assurance, and final delivery, each stage ensures every animation performs smoothly, integrates seamlessly into your game engine, and meets both the creative vision and technical requirements established at the start of production.
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