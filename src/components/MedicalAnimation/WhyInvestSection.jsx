"use client";
import React, { useState } from 'react';
import styles from './WhyInvestSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CTAButton from '../Common/CTAButton';

const accordionData = [
  {
    id: 1,
    icon: '/discovery.png',
    title: 'Discovery and Scientific Research',
    content: 'We review current literature, clinical data, and scientific references before scripting begins, establishing the accuracy standard the animation will be held to.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Development and Medical Review',
    content: 'Scripts are developed in collaboration with your medical and scientific teams and reviewed for accuracy before any visual work begins.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visual Planning',
    content: 'Every anatomical structure, biological event, and clinical step is mapped visually and reviewed for scientific accuracy before 3D modeling begins.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: '3D Modeling and Asset Creation',
    content: 'Anatomical models, cellular structures, and device components are built to reference data and reviewed against approved medical illustrations and literature.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Motion is animated according to the actual biological behavior or clinical procedure being depicted, not a visually convenient approximation.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Medical Accuracy Validation',
    content: 'Your scientific or clinical team reviews the animation specifically for technical and medical accuracy before final rendering begins.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Rendering and Post-Production',
    content: 'Final rendering, sound design, and post-production are applied after medical review is closed to avoid quality rework on validated content.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files delivered in every format specified at kickoff, with source files available for future updates as clinical data evolves.',
  }
];

const WhyInvestSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">THE PROCESS</p>
              <h2 className={styles.mainTitle}>Our Proven Medical Animation Production Process</h2>
              <p className={styles.subText}>
                Most medical animation projects fail due to scientific inaccuracies or misaligned clinical expectations in pre-production. Our production process is structured around continuous medical reviews to resolve accuracy risks before animation begins, ensuring a reliable pathway from script to final clinical approval.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className={styles.accordionList}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.accordionItem} ${activeId === item.id ? styles.active : ''}`}
                >
                  <div
                    className={styles.accordionHeader}
                    onClick={() => setActiveId(item.id === activeId ? null : item.id)}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.iconCircle}>
                        <Image src={item.icon} alt={item.title} width={108} height={108} className={styles.accIcon} />
                      </div>
                      <h3 className={styles.accTitle}>{item.title}</h3>
                    </div>

                    <div className={styles.chevronWrapper}>
                      {activeId === item.id ? (
                        <ChevronUp size={24} className={styles.chevron} />
                      ) : (
                        <ChevronDown size={24} className={styles.chevron} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className={styles.accordionBodyWrapper}
                      >
                        <div className={styles.accordionBody}>
                          <p className={`${styles.accContent} scroll_block`}>{item.content}</p>
                          <div className={styles.btnWrapper}>
                            <CTAButton text="Learn More" href="#" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
