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
    title: 'Discovery and Creative Strategy',
    content: 'We establish what the motion graphic needs to accomplish, who watches it, and what they do next before a single keyframe exists. Strategy is the first production decision, not an afterthought.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Development',
    content: 'The script is the argument the animation makes, written in the sequence the audience needs to receive it, not in the order the client prefers to present their product..',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding and Visual Planning',
    content: "Every scene is mapped before motion begins. Visual hierarchy, typography, animation style, and scene transitions are all approved before production starts.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Motion Design and Animation',
    content: 'Our motion designers build every animation to the approved storyboard. Every timing and easing decision is traceable to the brief, not applied by default because it looked fine in the preview.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Voiceover and Sound Design',
    content: 'Professional voiceover matched to brand tone, music selected for emotional register, and sound design that adds production depth without competing with the visual narrative.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Quality Assurance and Revisions',
    content: 'Every production goes through a structured internal review before the client sees it. Audio-visual sync, brand accuracy, and export specs are all checked against the brief.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery and Distribution Support',
    content: 'Final files in every format specified at kickoff, source files were scoped, and post-delivery support for platform adaptation and multi-channel distribution.',
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
              <p className="subtitle">HOW WE WORK</p>
              <h2 className={styles.mainTitle}>Our Motion Graphics <br />Production Process</h2>
              <p className={styles.subText}>
                Every whiteboard animation video we produce follows the same disciplined production process. There are no shortcuts, no freelance handoffs, and no phases where your project loses its strategic thread.
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
