"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Video Trimming and Sequencing',
    content: "Strategic assembly of footage into a narrative sequence that serves the brief and the audience's attention profile.Cutting decisions are made based on story logic, not on what was easiest to shoot."
  },
  {
    id: 2,
    title: '2 Motion Graphics Integration',
    content: 'On-brand motion graphics, animated titles, lower thirds, and call-to-action overlays produced in After Effects and integrated into the edit at the appropriate stage.'
  },
  {
    id: 3,
    title: '3 Color Correction and Color Grading',
    content: 'Technical color correction to establish accuracy, followed by color grading to establish emotional tone. Footage matched across cameras, exposure corrected, and grade applied to fit the brand and the distribution environment.'
  },
  {
    id: 4,
    title: '4 Audio Enhancement',
    content: 'Dialogue cleanup, noise reduction, level normalization, and acoustic treatment for location recordings and voiceover tracks to meet broadcast and platform loudness standards.'
  },
  {
    id: 5,
    title: '5 Sound Design and Mixing',
    content: 'Sound design, music selection, and full audio mixing for branded video content. Final audio produced to the loudness and dynamic range specifications of every platform in the delivery package.'
  },
  {
    id: 6,
    title: '6 Visual Effects',
    content: 'VFX compositing, screen replacements, environmental effects, and graphic overlays applied with the production discipline of broadcast-standard video post production services.'
  },
  {
    id: 7,
    title: '7 Subtitle and Caption Creation',
    content: 'Accurate, frame-timed subtitle creation and caption services for accessibility compliance, social media silent-viewing optimization, and multilingual distribution. Not auto-generated and unchecked.'
  },
  {
    id: 8,
    title: '8 Multi-Platform Export Optimization',
    content: "Final delivery in every format, resolution, aspect ratio, and codec specified at kickoff. YouTube, Instagram, TikTok, LinkedIn, broadcast, and web formats produced to each platform's specifications."
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
              <h2 className={styles.heading}>What's Included in Our Video Editing Services?</h2>
              <p className={styles.description}>
                Our video post production services cover every technical element that turns raw footage into finished, platform-ready content.
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
