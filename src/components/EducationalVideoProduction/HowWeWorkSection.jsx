"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Improve Knowledge Retention',
    content: 'Learners retain information presented through video at significantly higher rates than information delivered through text-only materials. The combination of audio narration and synchronized visual explanation creates a dual-channel encoding that text cannot produce.'
  },
  {
    id: 2,
    title: '2 Simplify Complex Topics',
    content: 'Animation and visual explanation translate abstract concepts into concrete visual representations. A concept that requires three paragraphs of text to describe imprecisely can be demonstrated in thirty seconds of animation precisely.'
  },
  {
    id: 3,
    title: '3 Increase Learner Engagement',
    content: 'Video engagement rates are higher than document completion rates across every learning context measured. Learners who engage completely. Learners who complete have the opportunity to learn.'
  },
  {
    id: 4,
    title: '4 Support Self-Paced Learning',
    content: 'Video allows learners to pause, rewind, and rewatch the section that did not land the first time. A live trainer cannot be paused. A document does not know which paragraph the reader skipped.'
  },
  {
    id: 5,
    title: '5 Deliver Consistent Training',
    content: 'A well-produced training video delivers the same quality of instruction to every learner in every location at any time. Live delivery varies with the trainer. Video does not.'
  },
  {
    id: 6,
    title: '6 Reduce Training Costs',
    content: 'A training video produced once can be used indefinitely across an unlimited number of learners. The per-learner cost of video-based training drops with every additional person who watches it.'
  },
  {
    id: 7,
    title: '7 Improve Learning Accessibility',
    content: 'Video content with captions and audio description is accessible to learners with hearing and visual impairments, and to learners engaging with content in their second language.'
  },
  {
    id: 8,
    title: '8 Scale Training Across Teams',
    content: 'A global organization cannot put every employee in the same training room. Video-based corporate training videos scale to any organization size without proportionally increasing delivery cost.'
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
              <h2 className={styles.heading}>
                Why Educational Videos Are More Effective Than Traditional Learning Materials?
              </h2>

              <p className={styles.description}>
                Educational videos improve retention, simplify complex topics, increase learner engagement, support self-paced learning, deliver consistent training, reduce costs, improve accessibility, and make learning easier to scale across organizations.
              </p>

              <div className={styles.buttonsWrapper}>
                <CTAButton type="button" text="Let's Talk" />
                <CTAButton
                  type="link"
                  href="tel:+1-443-487-0213"
                  text="Call Now"
                  variant="outline"
                />
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
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
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