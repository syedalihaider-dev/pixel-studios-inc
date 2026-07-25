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
    title: 'Discovery and Strategy',
    content: 'We establish the audience, the business objective, and the distribution context before the script begins. This means understanding who will watch the video, what they need to think or do afterward, and what platform and format the final content will live on.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Development',
    content: "Scripts written around the audience's decision-making process, not the client's preferred feature order. Every line is structured to move the viewer from where they are to where the video needs them to be — in the shortest path that does not sacrifice clarity.",
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: 'Every scene is mapped and approved before animation begins. Changes to the storyboard cost nothing. Changes after the animation begins cost time. This phase exists precisely to surface and resolve every structural and visual decision before production makes them expensive to fix.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Design and Illustration',
    content: 'Visual style, character design, and brand color application are established and approved before any animation production starts. Every design element is reviewed against your brand standards and signed off by your team before a single frame enters the animation pipeline.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Full corporate animation video production in-house, on the same team that handled discovery and storyboarding. There are no handoffs to external animators, no loss of brief context mid-production, and no version of your project that gets managed by someone who was not in the room at kickoff.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Voiceover and Sound Design',
    content: 'Professional voiceover matched to brand tone, music selected for register, and sound design that completes the production. We work with a vetted roster of voice talent selected based on your audience profile, and every audio element is mixed in-house to broadcast specification before delivery.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Quality Assurance',
    content: 'Structured internal review of audio-visual sync, brand accuracy, and platform export specifications before client presentation. Every video passes through a documented QA checklist that covers timing accuracy, color accuracy, caption accuracy, and format compliance — so the version you review is already production-ready.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format specified at kickoff. Source files are included in most project scopes. Delivery is not considered complete until every format has been tested against the platform it will live on and confirmed against the technical specifications agreed at project start.',
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
              <h2 className={styles.mainTitle}>Our Corporate Video Animation Production Process</h2>
              <p className={styles.subText}>
                Most corporate animation projects fail in pre-production — not in the animation phase. The script is wrong, the brief is incomplete, or the visual direction is approved without being tested against the audience. Our production process is designed to resolve every one of those risks before production begins, not after.
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
