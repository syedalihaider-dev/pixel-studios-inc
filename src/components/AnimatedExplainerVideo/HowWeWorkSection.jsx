"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Simplify Complex Concepts',
    content: 'Animated explainer videos control the information sequence, the pacing, and the visual emphasis simultaneously. No other format does all three at once. That combination is why complex products become understandable in 90 seconds when they remain opaque after 10 minutes of reading.'
  },
  {
    id: 2,
    title: '2 Increase Audience Engagement',
    content: 'Viewers complete well-produced business explainer videos at significantly higher rates than they read product pages or sit through demo calls. Higher completion rates mean more prospects who fully understand your product before the first sales conversation.'
  },
  {
    id: 3,
    title: '3 Improve Conversion Rates',
    content: 'Landing pages with animated explainer videos convert at measurably higher rates than those without. The mechanism is simple: video reduces the cognitive friction between a visitor and a purchase decision by answering objections before they form.'
  },
  {
    id: 4,
    title: '4 Strengthen Brand Awareness',
    content: 'A strong custom explainer video becomes a brand asset used across landing pages, email campaigns, social media, and sales presentations. Each deployment compounds recognition without additional production cost.'
  },
  {
    id: 5,
    title: '5 Boost Social Media Performance',
    content: 'Promotional explainer videos shared on social generate higher engagement, more saves, and stronger organic reach than static content. Short-form cuts of explainer content are among the highest-performing organic assets in social media marketing.'
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
              <h2 className={styles.heading}>Why Do Businesses Invest in Animated Explainer Videos?</h2>
              <p className={styles.description}>
                The data behind animated explainer video investment is not soft or aspirational. Here is why the best animated explainer video companies keep growing.
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
