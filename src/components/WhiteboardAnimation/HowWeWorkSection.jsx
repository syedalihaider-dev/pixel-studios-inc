"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Simplify Complex Ideas',
    content: 'There is a ceiling to what written text can explain before a reader disengages. Whiteboard animation removes that ceiling by letting the visual do the work that words cannot. Abstract processes, multi-step systems, and conceptually unfamiliar ideas become navigable when they are drawn in sequence. If your audience keeps misunderstanding your product, your process, or your value proposition, whiteboard animation is almost always the most effective correction.'
  },
  {
    id: 2,
    title: '2 Improve Information Retention',
    content: 'Studies consistently show that people retain significantly more information from visual learning experiences than from text-only alternatives. The whiteboard format amplifies this because it adds a temporal dimension — information arrives progressively rather than all at once, which gives the brain time to encode each concept before the next one builds on it.'
  },
  {
    id: 3,
    title: '3 Increase Audience Engagement',
    content: 'Completion rates for whiteboard animation videos consistently outperform other animated formats across training, marketing, and explainer use cases. The format holds attention by design: the audience is not watching something pre-built — they are watching it being built, which creates a sustained pull that passive video formats do not produce.'
  },
  {
    id: 4,
    title: '4 Enhance Customer Education',
    content: 'The difference between a customer who churns and one who stays is often a matter of whether they understood what they bought. Customer education content built on whiteboard animation reduces support volume, improves activation rates, and creates a product experience that does not require a phone call to navigate.'
  },
  {
    id: 5,
    title: '5 Improve Marketing Results',
    content: 'Whiteboard animation video in marketing contexts outperforms static and live-action alternatives on the metrics that matter: click-through rate, time on page, lead form completion, and sales cycle velocity. The format performs because it is built around a visual hook that earns attention before the viewer decides whether to engage.'
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
              <h2 className={styles.heading}>Why Do Businesses Use Whiteboard Animation?</h2>
              <p className={styles.description}>
                Whiteboard animation consistently outperforms other video formats on the metrics that matter most — completion rate, information retention, and audience action.
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
