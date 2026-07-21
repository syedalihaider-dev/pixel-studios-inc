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
    icon: '/discovery.png',
    title: 'Discovery and Project Planning',
    content: 'Business objective, audience, visual direction, and production scope are established before any creative work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept Development',
    content: 'Visual direction, mood boards, and style frames are developed and approved before production resources are committed.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Scriptwriting and Storyboarding',
    content: 'Script and storyboard were developed together, so the narrative and visual sequence are designed as a single piece.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Asset Creation and Modeling',
    content: 'All 3D models, environments, and props are built in-house to the detail level the scene and distribution context require.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Characters, products, and cameras animated to the approved storyboard. Rigging, facial animation, and motion design were governed by the brief throughout.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Rendering and Visual Enhancement',
    content: 'Lighting, shading, texturing, compositing, and VFX bring the scene to its final visual quality.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Review and Refinement',
    content: 'Full draft submitted for structured client review. Every note is documented and confirmed before changes are made.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format specified at kickoff. Source files are included in most scopes. Post-delivery support available for platform adaptation.',
  },
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
              <h2 className={styles.mainTitle}>Our 3D Animation <br />Production Process</h2>
              <p className={styles.subText}>
                Every production follows a structured, milestone-driven process from brief to final file.
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
                        <Image src={item.icon} alt={item.title} width={108} height={108} className={styles.accIcon} />
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
                          <p className={`${styles.accContent} scroll_block`}>{item.content}</p>
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
