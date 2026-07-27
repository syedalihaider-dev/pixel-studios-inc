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
    title: 'Learning Goals and Discovery',
    content:
      'What does the learner need to be able to do after watching? That question is a brief one. Every production decision follows from a specific, measurable learning objective.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Curriculum and Content Review',
    content:
      'Subject matter expert consultation, existing content audit, and accuracy review before scripting begins. The script is built on a verified content foundation.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Scriptwriting and Instructional Design',
    content:
      'Scripts written by people who understand how people learn, not just how to write. Information sequenced for the learner’s cognitive pathway rather than the subject matter expert’s organizational preference.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content:
      'Visual sequence mapped to the learning objective. Every visual element is justified by a specific instructional purpose.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Visual Design and Asset Creation',
    content:
      'Visual style established to serve the learning audience. Educational visual design is a different discipline from commercial visual design.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Video Production and Animation',
    content:
      'Production by the same team that developed the instructional design. No handoffs between creative and production that cause the learning logic to get lost in the translation.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Voiceover and Audio Production',
    content:
      'Voiceover pacing and tone calibrated to the learning context. Educational narration moves at a different tempo from commercial narration, and the difference matters for comprehension.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Quality Assurance and Learning Review',
    content:
      'Subject matter expert accuracy review alongside visual quality review. Both are required. A visually polished training video with a factual error is worse than an imperfect video that is correct.',
  },
  {
    id: 9,
    icon: '/animation.png',
    title: 'Final Delivery and LMS Integration',
    content:
      'Deliverables in every format the LMS requires. SCORM packaging, metadata completion, and upload testing, where the client needs integration support.',
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
                Our Educational Video <br />Production Process
              </h2>

              <p className={styles.subText}>
                Every educational video follows a structured production process built around learning outcomes, instructional design, subject matter accuracy, and effective content delivery. From discovery through LMS integration, each stage is designed to help learners understand, retain, and apply information successfully.
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
                  className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''
                    }`}
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