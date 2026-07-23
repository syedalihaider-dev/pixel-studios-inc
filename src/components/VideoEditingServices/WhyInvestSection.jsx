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
    title: 'Project Discovery',
    content: 'Brief, audience, platform requirements, brand standards, and delivery timeline established before touching the footage. Every post production decision that follows is traceable to something confirmed here.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Footage Review and Organization',
    content: 'All footage logged, reviewed, and organized before the edit begins. Usable material identified, technical issues flagged, and the asset library built before the timeline opens.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Editing and Story Development',
    content: "Rough cut assembled around the brief: scene selection, sequence logic, pacing, and story structure. This is where the performance of the final video is built and where we invest most of our editorial attention.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Motion Graphics and Effects',
    content: 'Branded motion graphics, titles, lower thirds, and VFX integrated after the picture cut is locked. Graphics serve the story rather than being added decoratively after the fact.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Audio Enhancement',
    content: 'Full audio treatment: dialogue cleanup, noise reduction, music placement, sound design, and final mix to the loudness specifications of every delivery platform.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Client Feedback and Revisions',
    content: 'Draft submitted for your structured revision round. Every note documented and confirmed before changes are made. We ask, confirm, and fix the right thing rather than guessing at ambiguous feedback.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files exported in every format specified at kickoff. Platform technical specifications confirmed. Source project files available in most project scopes. ',
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
              <h2 className={styles.mainTitle}>Our Video Editing Process</h2>
              <p className={styles.subText}>
                Every video editing project follows a structured process from footage receipt to final delivery.
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
