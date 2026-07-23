"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Instagram Animations',
    content: "Feed posts, reels, and stories in every Instagram format. Captions, aspect ratios, and hook timing calibrated for the platform's visual environment and engagement signals."
  },
  {
    id: 2,
    title: '2 Facebook Animations',
    content: "Organic and paid Facebook video animation optimized for the watch-time and engagement metrics that drive Facebook's distribution algorithm."
  },
  {
    id: 3,
    title: '3 TikTok Animations',
    content: 'TikTok animation video production built from the first frame for a platform where the hook determines everything. Native vertical format with on-screen text for silent-viewing audiences.'
  },
  {
    id: 4,
    title: '4 LinkedIn Video Animations',
    content: "LinkedIn animated video services for B2B brands. Professional register, measured pacing, and visual tone matched to the platform's audience expectations."
  },
  {
    id: 5,
    title: '5 YouTube Animations',
    content: 'Full-length YouTube animated content and YouTube Shorts animation for brands building channel presence, product education, and search-optimized video content.'
  },
  {
    id: 6,
    title: '6 X (Twitter) Video Content',
    content: "Short-form animated content for X with the compression and visual clarity the platform's feed requires.Motion graphics and kinetic typography for the format."
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
              <h2 className={styles.heading}>Social Media Animation Solutions for Every Platform</h2>
              <p className={styles.description}>
                Every platform has its own algorithm, audience behavior, and technical requirements. We build natively for all of them.
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
