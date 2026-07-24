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
    title: 'Brand Discovery',
    content: 'We review your brand identity, existing visual assets, the context where the animation will be used, and the audience who will see it. Logo animation that fits the brand cannot be designed without understanding it.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Animation Concept Development',
    content: 'Two to three distinct animation directions developed based on the brief. Each represents a different interpretation of the brand motion language. You choose the direction that fits.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Motion Planning',
    content: "Keyframes, motion paths, timing, and sound design approach mapped and approved before production. Changes here cost nothing. Changes after animation begins cost time.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Full logo animation production in-house using After Effects, Cinema 4D, Blender, or Adobe Illustrator depending on the style and format requirements of the brief.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Sound Design Integration',
    content: 'Custom sound design or music integration matched to the motion and the brand tone. Sound is what makes a logo reveal feel intentional rather than assembled.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Review and Revisions',
    content: 'Two full revision rounds standard. Every note is documented and confirmed before changes are made.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format specified at kickoff: MP4 in multiple resolutions, transparent-background MOV for compositing, GIF for web use, and source files in most project scopes.',
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
              <p className="subtitle">Process</p>
              <h2 className={styles.mainTitle}>Our Logo Animation Process</h2>
              <p className={styles.subText}>
                Our professional logo animation services follow a structured production process from brand discovery to final delivery.
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
