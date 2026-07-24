"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Showcase Features with Clarity',
    content: "3D product motion graphics isolate features that are difficult to see or explain in static photography, giving each feature its own moment of focus."
  },
  {
    id: 2,
    title: '2 Increase Buyer Confidence',
    content: 'Photorealistic product animation reduces the uncertainty that causes shoppers to abandon a purchase decision at the final stage of consideration.'
  },
  {
    id: 3,
    title: '3 Drive Higher Conversion Rates',
    content: "Product pages with 3D product commercials convert at higher rates than pages relying on static images alone, particularly for considered purchases."
  },
  {
    id: 4,
    title: '4 Simplify Complex Products',
    content: 'Mechanical product animation makes complex assemblies understandable to non-technical buyers in seconds rather than paragraphs of specification text.'
  },
  {
    id: 5,
    title: '5 Reduce Traditional Production Costs',
    content: '3D product content creation eliminates the recurring cost of physical photoshoots for every new angle, color variant, or seasonal update.'
  },
  {
    id: 6,
    title: '6 Accelerate Product Launches',
    content: 'Animation production can begin from CAD data before physical samples exist, shortening the launch timeline by weeks in many categories.'
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
              <h2 className={styles.heading}>Business Benefits of 3D Product Animation</h2>
              <p className={styles.description}>
                3D product animation helps brands communicate clearly, showcase complex products dynamically, and stand out in crowded digital spaces. When precision meets storytelling, 3D animation becomes one of your most versatile marketing assets.
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
