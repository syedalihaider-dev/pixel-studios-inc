"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: '1 Product Launch and Commercialization',
    content: "Medical device marketing animation and pharmaceutical product animation support HCP detailing and market access conversations during product launches."
  },
  {
    id: 2,
    title: '2 Patient Education and Awareness',
    content: "Patient education animation improves comprehension of complex diagnoses and treatment options, directly affecting adherence and informed consent quality."
  },
  {
    id: 3,
    title: '3 Physician and Clinical Training',
    content: "Healthcare training animations provide repeatable, standardized procedure training that reduces the variability of live clinical instruction."
  },
  {
    id: 4,
    title: '4 Investor and Stakeholder Presentations',
    content: "Medical 3D animation and simulation help investors understand complex biological mechanisms and product differentiation without requiring a scientific background."
  },
  {
    id: 5,
    title: '5 Conference and Trade Show Marketing',
    content: "Medical animation videos create compelling, credible booth and presentation assets for medical conferences where competition for physician attention is intense."
  },
  {
    id: 6,
    title: '6 Regulatory and Scientific Communication',
    content: "Animation supports regulatory submissions and scientific communication by making complex mechanism data visually accessible to reviewers and advisory committee members."
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
              <h2 className={styles.heading}>How Organizations Use Medical Animation Services?</h2>
              <p className={styles.description}>
                Medical animation is not a single use case. Healthcare providers use it for patient education. Pharmaceutical companies use it for drug mechanism explainers. Medical device manufacturers use it for surgical training and product demonstrations. Research institutions use it for grant communication. Each application requires a different production approach and a different standard of scientific accuracy.
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
