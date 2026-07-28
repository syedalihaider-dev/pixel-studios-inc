"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Capture Attention Faster',
    content:
      'Motion captures human attention involuntarily. Animated commercial content earns the viewer\'s focus before they have consciously decided to give it.'
  },
  {
    id: 2,
    title: '2 Increase Audience Retention',
    content:
      'Viewers complete animated commercial videos at higher rates than live-action equivalents because animation sustains visual interest through the full runtime without requiring the viewer to do interpretive work.'
  },
  {
    id: 3,
    title: '3 Simplify Complex Messages',
    content:
      'Animation controls the sequence and pacing of information delivery in a way that live-action cannot. A complex product or service can be explained in 30 seconds with animation that would take three minutes of live-action to communicate imprecisely.'
  },
  {
    id: 4,
    title: '4 Improve Brand Recall',
    content:
      'Animated brand identity elements, character design, and consistent visual style create memory encoding that static advertising cannot produce at an equivalent frequency.'
  },
  {
    id: 5,
    title: '5 Boost Conversion Rates',
    content:
      'Commercial animation built around a specific conversion objective converts at higher rates than awareness-only creative because the viewer arrives at the conversion point already primed to act.'
  },
  {
    id: 6,
    title: '6 Scale Across Multiple Platforms',
    content:
      'A single animated commercial production can be adapted for television, social media, digital pre-roll, and website use simultaneously, which amortizes the production cost across a full campaign.'
  },
  {
    id: 7,
    title: '7 Maximize Advertising ROI',
    content:
      'The combination of higher engagement rates, better retention, and improved conversion means animated commercial services deliver better return on advertising spend than most alternative creative formats.'
  },
  {
    id: 8,
    title: '8 Create Consistent Brand Messaging',
    content:
      'Animation allows complete control over every visual and audio element, which means the brand message is delivered consistently across every placement, every viewing context, and every device.'
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
                Why Animated Commercials Outperform Traditional Advertising?
              </h2>

              <p className={styles.description}>
                Animated commercials capture attention faster, improve audience
                retention, simplify complex messages, strengthen brand recall,
                increase conversions, scale across multiple platforms, maximize
                advertising ROI, and deliver consistent brand messaging across
                every campaign.
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
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                          }}
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