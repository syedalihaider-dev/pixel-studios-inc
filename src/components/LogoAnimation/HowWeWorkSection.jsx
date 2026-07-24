"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Increase Brand Recognition',
    content: 'A consistent animated logo intro across every video a brand produces creates a visual and auditory brand signal that compounds into recognition over time in a way that a static corner logo cannot produce.'
  },
  {
    id: 2,
    title: '2 Create Memorable First Impressions',
    content: 'The first three seconds of any video determine whether the viewer stays or leaves. A well-produced logo animation uses those seconds to establish credibility, signal production quality, and communicate brand personality before a word is spoken.'
  },
  {
    id: 3,
    title: '3 Enhance Video Marketing',
    content: 'Every piece of video marketing benefits from a professional logo animation opener. It raises perceived production value across the entire video, which directly affects how the audience evaluates the brand making the pitch.'
  },
  {
    id: 4,
    title: '4 Strengthen Brand Identity',
    content: 'Consistent logo animation across all video content creates a visual language that reinforces brand identity at every audience touchpoint across social, web, and broadcast channels simultaneously.'
  },
  {
    id: 5,
    title: '5 Improve Social Media Engagement',
    content: 'Branded animated social media posts with polished logo animation signal production quality that both the platform algorithm and the audience respond to with higher engagement and completion rates.'
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
              <h2 className={styles.heading}>Why Do Businesses Use Logo Animation?</h2>
              <p className={styles.description}>
                Logo animation is not visual decoration. It is a measurable brand communication tool with specific, demonstrable effects on audience perception.
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
