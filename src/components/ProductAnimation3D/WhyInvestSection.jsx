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
    title: 'Discovery and Creative Brief',
    content: 'We establish the audience, the objective, the tone, and the single most compelling element of the content the trailer is built around. The brief identifies the hook before any creative work begins.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept Development',
    content: 'Visual direction, tone, and structural approach were developed and presented for approval. Multiple concept directions where the brief warrants exploring different emotional registers.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Script Writing and Messaging',
    content: "Trailer scripts and messaging sequences were built around the hook identified in discovery. Every line and visual beat earns its place in the structure.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: 'Every shot and transition was mapped before production. Pacing, reveal timing, and the structure of anticipation are all planned and approved at the storyboard stage.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Visual Design and Motion Graphics',
    content: 'Title treatments, motion graphics elements, and visual style were developed and approved. Typography, color, and graphic language are established before animation production begins.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Trailer Animation Production',
    content: 'Full trailer animation production in-house. Motion graphics, title sequences, and any animated elements were produced according to the approved storyboard and visual direction.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Sound Design and Music Integration',
    content: 'Sound design and music integration are where trailers earn their emotional impact. Score selection, sound effects, and mix timing are built around the reveal structure established in the storyboard.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Rendering and Quality Assurance',
    content: 'Final render passes and structured internal quality review. Pacing, sync, and visual quality were checked against the brief before client review.',
  },
  {
    id: 9,
    icon: '/animation.png',
    title: 'Final Revisions and Delivery',
    content: 'Structured revision round with documented feedback. Final delivery in every format and resolution specified at kickoff, including broadcast and platform-specific exports.',
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
              <h2 className={styles.mainTitle}>Our Trailer Production Process</h2>
              <p className={styles.subText}>
                Every trailer follows a structured production process from creative brief to final delivery.
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
