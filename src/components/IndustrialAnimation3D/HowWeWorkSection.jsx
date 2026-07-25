"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Equipment Demonstrations',
    content: "Industrial equipment demonstration videos let prospects evaluate machinery capability without scheduling a site visit or disrupting production downtime to host a tour."
  },
  {
    id: 2,
    title: '2 Manufacturing Process Visualization',
    content: "Factory process animation communicates production capability to buyers, auditors, and partners who cannot tour the facility in person or across international markets."
  },
  {
    id: 3,
    title: '3 Employee Safety Training',
    content: "Animated safety scenarios train employees on hazard recognition without exposing new hires to live operational risk during their first weeks on the floor."
  },
  {
    id: 4,
    title: '4 Investor and Stakeholder Presentations',
    content: "Technical process visualization gives investors a clear understanding of operations that financial statements and written reports alone cannot communicate effectively."
  },
  {
    id: 5,
    title: '5 Product and Machinery Marketing',
    content: "Industrial product demonstration animation gives marketing teams a visual asset that explains capability without the cost and logistics of an industrial photoshoot."
  },
  {
    id: 6,
    title: '6 Technical Sales Presentations',
    content: "Sales engineers use industrial animation to explain system integration and performance during technical evaluation conversations with prospective buyers and procurement teams."
  }
];

const HowWeWorkSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
              <h2 className={styles.heading}>How Businesses Use 3D Industrial Animation Services?</h2>
              <p className={styles.description}>
                3D industrial animation helps brands communicate complex engineering details, show operations that are invisible to the eye, and simplify safety, training, and sales presentations.
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
