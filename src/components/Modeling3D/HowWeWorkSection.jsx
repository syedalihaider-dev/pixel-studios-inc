"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Product Visualization',
    content: "3D visualization and product visualization let buyers and stakeholders evaluate a product before it physically exists, accelerating decisions across sales, marketing, and investment conversations."
  },
  {
    id: 2,
    title: '2 Game Development',
    content: 'Game assets built to spec accelerate development timelines and reduce the asset bottleneck most studios face mid-production, freeing internal teams to focus on gameplay rather than asset backlog.'
  },
  {
    id: 3,
    title: '3 AR and VR Experiences',
    content: "Real-time 3D assets power immersive AR and VR experiences for retail, training, and entertainment applications where tracking performance and visual fidelity both matter."
  },
  {
    id: 4,
    title: '4 Marketing and Advertising',
    content: 'Photorealistic 3D models replace expensive photography setups for marketing and advertising content production, allowing unlimited angles and lighting setups from a single asset.'
  },
  {
    id: 5,
    title: '5 Architectural Visualization',
    content: 'Architectural visualization gives investors and buyers a concrete view of unbuilt spaces and developments, often becoming the deciding factor in pre-construction sales.'
  },
  {
    id: 6,
    title: '6 Engineering and Manufacturing',
    content: 'Digital prototyping through 3D modeling reduces costly physical iteration cycles in engineering and manufacturing workflows, catching design issues before tooling costs are committed. '
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
              <h2 className={styles.heading}>Powerful Ways Businesses Use 3D Modeling Services</h2>
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
