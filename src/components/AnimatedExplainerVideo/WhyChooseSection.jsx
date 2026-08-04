"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Custom Script Development',
    content: "Every script is written from scratch around the audience brief, not adapted from a previous client's video.Our scriptwriters have produced scripts for products across 12 industries, and the specificity shows in the first draft."
  },
  {
    id: 2,
    title: '2 Experienced Animation Team',
    content: 'Our animated explainer video production team has produced business explainer videos across healthcare, SaaS, finance, education, and consumer products. Cross-industry experience that reduces the learning curve on every new brief.'
  },
  {
    id: 3,
    title: '3 Fast Turnaround Times',
    content: 'Most 60 to 90-second animated explainer videos are completed in three to four weeks from a brief sign-off. Rush production available. We protect quality within compressed timelines rather than sacrificing it.'
  },
  {
    id: 4,
    title: '4 Dedicated Project Management',
    content: 'One project manager from brief to delivery. Every milestone is dated at kickoff. Every piece of feedback is documented before it is acted on.'
  },
  {
    id: 5,
    title: '5 Multiple Revision Rounds',
    content: 'Two full revision rounds are standard. Additional rounds available and priced transparently. All revision terms are in writing before production begins.'
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
              <h2 className={styles.heading}>Why Choose Our Animated Explainer Video Company?</h2>
              <p className={styles.description}>
                There is no shortage of animated explainer video makers. Here is what specifically distinguishes Pixel Studios from the category.
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
