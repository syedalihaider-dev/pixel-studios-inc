"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Build Anticipation Before Launch',
    content: "A trailer's primary function is to create a gap between what the audience knows and what they want to know. Professional trailer animation services build that gap deliberately, using structure and pacing to make the audience want the resolution that only the full release can provide."
  },
  {
    id: 2,
    title: '2 Increase Audience Engagement',
    content: 'Trailers produced with cinematic pacing and sound design generate significantly higher engagement and share rates than simple highlight compilations. The structure is what makes a trailer worth sharing, not just the content within it.'
  },
  {
    id: 3,
    title: '3 Strengthen Brand Recognition',
    content: "Consistent title sequence animation and trailer production style across a brand's content builds recognition that compounds.A recognizable trailer style becomes a brand asset in its own right."
  },
  {
    id: 4,
    title: '4 Improve Marketing Performance',
    content: 'Promotional trailer videos consistently outperform standard promotional video formats in click-through rate and completion rate because the trailer structure is specifically engineered to hold attention to the end.'
  },
  {
    id: 5,
    title: '5 Drive More Views and Conversions',
    content: 'A well-produced trailer drives views to the full content and conversions on the underlying offer because it creates a specific reason to follow through rather than a general awareness of the option.'
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
              <h2 className={styles.heading}>Why Invest in Professional Trailer Animation Services?</h2>
              <p className={styles.description}>
                Motion graphics services help brands capture attention, communicate complex ideas quickly, and drive measurable business results. Done right, motion design is one of the highest-performing assets a brand can own.
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
