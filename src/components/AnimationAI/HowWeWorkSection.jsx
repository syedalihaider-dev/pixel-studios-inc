"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: "1 Faster Turnaround",
    content:
      "AI animation production moves faster than traditional animation production. Not because the creative work disappears, but because the tool eliminates the parts of production that were always mechanical rather than creative. The speed gain is real, and it flows directly to the client."
  },
  {
    id: 2,
    title: "2 Cost-Efficiency",
    content:
      "Faster production means lower cost at equivalent quality. Not lower quality at lower cost. The same creative direction and quality control are applied to an AI-assisted pipeline that gets the job done in less billable time."
  },
  {
    id: 3,
    title: "3 Creative Control",
    content:
      "Every piece of AI animation content we produce is reviewed and directed by an experienced animator. The AI generates. The animator directs. Your brand stays on-brand because a person with brand standards is in the room."
  },
  {
    id: 4,
    title: "4 Scalable Output",
    content:
      "AI animation makes high-volume content production viable at quality levels that traditional production could not sustain at that volume. More content. More formats. More platform variations. Without proportionally more time and cost."
  },
  {
    id: 5,
    title: "5 Expert Insight",
    content:
      "We have worked with AI animation tools across enough production contexts to know what they are good at and where they require human correction. That knowledge is what separates our output from the brands running AI tools without experienced oversight."
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
              <h2 className={styles.heading}>
                Why Choose Pixel Studios for AI-Powered Animation?
              </h2>

              <p className={styles.description}>
                AI animation is only valuable when it produces better business outcomes, not just faster videos. We combine advanced AI tools with experienced creative direction to deliver high-quality animation that stays on-brand, scales efficiently, and meets professional production standards.
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
