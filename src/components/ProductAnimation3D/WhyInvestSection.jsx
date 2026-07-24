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
    title: 'Product Discovery and Research',
    content: 'We identify the buyer objection or question that the animation needs to resolve before any modeling begins, since that answer shapes every creative decision downstream.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept Development',
    content: 'Visual direction and narrative structure are developed around the discovery findings and approved upfront before any production resources are committed.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visual Planning',
    content: "Every camera angle and reveal sequence is mapped before 3D product modeling and animation production begins, locking in the narrative before the build.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: '3D Modeling and Asset Creation',
    content: 'Precise 3D product modeling and animation assets are built from CAD data or reference imagery in-house, with no third-party asset libraries.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Materials, Lighting, and Texturing',
    content: 'PBR materials, lighting setups, and texturing establish the photorealistic quality of the final render and the emotional tone of the piece.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Camera movement and product motion are animated to the approved storyboard and narrative structure with deliberate pacing throughout.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Rendering and Post-Production',
    content: 'Final rendering, compositing, and color grading bring the animation to its finished visual quality, matched against the original brief.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery and Optimization',
    content: 'Files are delivered in every platform format specified at kickoff, optimized for each distribution channel without quality compromise.',
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
              <p className="subtitle">THE PROCESS</p>
              <h2 className={styles.mainTitle}>Our Strategic 3D Product Animation Workflow</h2>
              <p className={styles.subText}>
                We approach every product animation as a marketing asset first and an animation project second. The workflow is designed to deliver clarity, alignment, and predictable milestones before any rendering begins.
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
