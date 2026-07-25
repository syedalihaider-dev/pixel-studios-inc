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
    title: 'Discovery and Requirements Gathering',
    content: 'We identify the buyer objection or question that the animation needs to resolve before any modeling begins, since that answer shapes every creative decision downstream.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Concept and Reference Collection',
    content: 'Reference materials, CAD files, and visual direction are gathered and confirmed before modeling begins, preventing costly direction changes mid-production.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: '3D Modeling',
    content: "Base geometry is built to the approved reference, balancing detail level against the project's technical constraints and final use case.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Texturing and Material Creation',
    content: 'PBR texturing and UV mapping are applied to give the model accurate surface detail and real-world material behavior under any lighting condition.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Optimization and Quality Assurance',
    content: 'Retopology and polycount optimization ensure the asset performs correctly in its target engine or rendering pipeline without visual compromise.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Rendering and Visualization',
    content: 'Final renders or real-time previews are produced for client review against the original brief and approved reference materials.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Revisions and Refinements',
    content: 'Structured revision rounds with every note documented and confirmed before changes are made, avoiding guesswork on ambiguous feedback.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Asset Delivery',
    content: 'Final 3D modeling deliverables are exported in every format specified at kickoff, including source files where scoped into the project.',
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
              <h2 className={styles.mainTitle}>Our Proven 3D Modeling Process</h2>
              <p className={styles.subText}>
                We approach every product animation as a marketing asset first and an animation project second. The workflow is designed to deliver clarity, alignment, and predictable milestones before any rendering begins.
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
