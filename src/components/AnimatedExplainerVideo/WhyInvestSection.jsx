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
    title: 'Discovery & Strategy',
    content: 'We establish the audience, the objective, the competitive context, and the distribution channel before the script begins. Strategy is the first deliverable, not the last consideration.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Writing',
    content: "The script is the argument the animated explainer video makes, written in the sequence the audience needs to receive it. We write for the viewer's comprehension, not the client's preferred feature order.",
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: "Every scene is mapped before animation begins. Visual hierarchy, scene transitions, and animation timing all approved here. Changes to the storyboard cost 30 minutes. Changes after animation cost two days.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Illustration and Design',
    content: 'Character design, background style, color palette, and typographic treatment are developed and approved before production starts. You see the visual direction before a single frame is animated.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'Full 2D explainer animation or motion graphics explainer video production begins with the storyboard and approved assets as the foundation. In-house production with the same team that handled discovery.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Voiceover & Sound Design',
    content: 'Professional voiceover matched to brand tone, music selected for emotional register, and sound design that adds depth without competing with the visual narrative.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final files in every format and resolution specified at kickoff, plus source files in most project scopes. Post-delivery support for platform adaptation and short-form version cuts.',
  },
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
              <h2 className={styles.mainTitle}>Our Animated Explainer Video <br /> Production Process</h2>
              <p className={styles.subText}>
                Our animated explainer video creation service follows a structured, milestone-driven process where nothing moves forward without approval at each stage.
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
