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
    title: 'Case Review and Discovery Materials',
    content:
      'Complete review of police reports, medical records, expert reports, photographs, and surveillance footage before any production begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Evidence Collection and Analysis',
    content:
      'Evidence analysis in consultation with the attorney and retained expert witnesses to establish the factual foundation the animation will represent.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Script Development',
    content:
      'Narrative script developed against established facts. The animation depicts what the evidence establishes, not what the attorney prefers it to show.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content:
      'Every camera angle and visual sequence is reviewed and approved by the attorney before 3D production begins.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: '3D Modeling and Scene Creation',
    content:
      'Accurate 3D reconstruction of the incident location, vehicles, equipment, or anatomical structures based on measurements, photographs, and engineering data.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Animation Production',
    content:
      'Event sequence animated to the approved storyboard and reviewed against the factual record at each stage.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Attorney and Expert Review',
    content:
      'Full review with the attorney and the retained expert witnesses. The animation must satisfy the expert technical accuracy standards and the attorney strategic requirements.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Courtroom-Ready Delivery',
    content:
      'Final files in courtroom-ready presentation format with documentation of the evidence basis for each animation element.',
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
                From Evidence to Animation: <br />Our Legal Visualization Process
              </h2>

              <p className={styles.subText}>
                Every legal animation project follows a structured visualization process built around evidence accuracy, expert collaboration, and courtroom requirements. From initial case review to final delivery, each stage ensures the animation represents the facts clearly and supports effective legal presentation.
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
