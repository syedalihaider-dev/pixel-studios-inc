"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Experienced 3D Artists and Animators',
    content: 'Senior 3D animators and artists with cross-industry production experience across healthcare, industrial, consumer, gaming, and architectural sectors.'
  },
  {
    id: 2,
    title: '2 Specialized Industry Knowledge',
    content: 'Production expertise specific to industries where technical accuracy is non-negotiable: medical, engineering, legal, and industrial.'
  },
  {
    id: 3,
    title: '3 Custom Animation Solutions',
    content: 'Every brief starts from scratch. Your product, your audience, and your business objective determine the direction. No recycled templates.'
  },
  {
    id: 4,
    title: '4 Advanced Production Pipeline',
    content: 'Full in-house 3D animation production pipeline: modeling, texturing, rigging, animation, lighting, rendering, and compositing with no outsourcing at critical stages.'
  },
  {
    id: 5,
    title: '5 High-End Visual Quality',
    content: 'Photorealistic rendering and broadcast-standard compositing on every production. Visual quality is not a premium tier. It is the baseline.'
  },
  {
    id: 6,
    title: '6 Transparent Communication',
    content: 'Documented scope, milestone schedule, and proactive project updates on every production. No black-box periods where clients wait without information.'
  },
  {
    id: 7,
    title: '7 Reliable Turnaround Times',
    content: 'Timelines are commitments, not estimates. Project managers flag risks before they affect delivery.'
  },
  {
    id: 8,
    title: '8 Dedicated Project Management',
    content: 'One project manager from brief to delivery. One point of contact. One person is accountable for every stage.'
  }
];

const HowWeWorkSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.howWeWorkSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className={styles.leftContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className={styles.heading}>Why Pixels Studios Is a Top 3D Animation Company?</h2>
              <p className={styles.description}>
                Our 97% client retention rate is built on eight specific commitments that every project is held to.
              </p>
              <div className={styles.buttonsWrapper}>
                <CTAButton type="button" text="Let's Talk" />
                <CTAButton type="link" href="tel:+1-443-487-0213" text="Call Now" variant="outline" />
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <div className={styles.accordionList}>
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    className={styles.accordionItem}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className={styles.accordionTitle}>{item.title}</h3>
                      <span className={styles.accordionIcon}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className={styles.accordionContentWrapper}
                        >
                          <div className={styles.accordionContent}>
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
