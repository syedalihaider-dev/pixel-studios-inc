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
    title: 'Discovery and Technical Consultation',
    content: 'We consult directly with your engineering teams to understand the system, the audience, and the technical accuracy required before any visual work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Asset Collection and Engineering Review',
    content: 'CAD models, Revit files, and engineering drawings are collected and reviewed for completeness before entering production, flagging any gaps in the source data early.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visualization Planning',
    content: 'Every sequence and camera angle is mapped against the engineering data before 3D modeling begins, with technical review built into this stage rather than left for later.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: '3D Modeling and Asset Development',
    content: 'Industrial machinery and mechanical systems are modeled directly from CAD data to preserve dimensional and functional accuracy throughout the pipeline.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Motion is animated according to actual mechanical behavior, not approximated movement, particularly for systems involving PLC-controlled sequencing or timed cycles.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Technical Validation and Quality Assurance',
    content: 'Engineering teams review the animation for technical accuracy before final rendering, catching errors while they remain inexpensive to fix rather than after delivery.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Rendering and Post-Production',
    content: 'Final rendering, lighting, and compositing bring the validated animation to its finished visual quality for client and stakeholder delivery.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Files are delivered in every format specified at kickoff, with source files available for future Product Lifecycle Management integration and reuse.',
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
              <h2 className={styles.mainTitle}>Our Proven Industrial Animation Production Process</h2>
              <p className={styles.subText}>
                We follow a rigorous, technically validated pipeline to ensure your industrial processes are animated with absolute dimensional and behavioral accuracy.
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
