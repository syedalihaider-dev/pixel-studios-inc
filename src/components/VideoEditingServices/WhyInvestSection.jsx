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
    content: 'Before a single frame is storyboarded, we run a genuine discovery session. We learn about your audience — not as a demographic profile, but as a group of specific people with specific knowledge gaps, specific objections, and a specific decision or behavior you need them to take after watching the video. That understanding drives every creative decision that follows.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Script Writing',
    content: 'The script is the foundation of any whiteboard animation video that actually works. We write scripts that are structured for clarity, paced for the format, and built around a clear narrative arc that leaves your viewer knowing exactly what to do next. Scripts go through collaborative review before anything is drawn — because changing the script costs hours, and changing the animation costs days.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Storyboarding',
    content: "The storyboard is where the script becomes a visual plan. Every scene is sketched and sequenced to confirm that the visual logic supports the verbal logic, that transitions are intuitive, and that the pacing will hold the viewer's attention across the full runtime.You review and approve the storyboard before production begins.",
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Illustration Development',
    content: 'Our illustrators create every visual element custom for your project. Characters, icons, environments, diagrams, and data visualizations are drawn to match your brand and to serve the specific explanatory purpose of each scene. We do not pull from stock libraries — the illustrations are built for this script, this audience, and this message.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Animation Production',
    content: 'With illustrations complete and approved, the animation team brings the sequence to life. Timing, draw-on pacing, element reveals, and motion are calibrated against the voiceover track to ensure the visual and audio experience is synchronized and intentional. This phase runs in parallel with voiceover recording, where project timelines allow.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Voiceover & Sound Design',
    content: 'Professional voiceover direction is included in every Pixels Studios whiteboard animation project. We work with a vetted roster of voice talent and select based on your audience profile, your brand tone, and the energy the script calls for. Sound design — including background music and audio mixing — is completed in-house and delivered with the final video.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Review & Revisions',
    content: 'The first full draft is delivered for your structured revision round. Your project manager documents every note, confirms interpretation before changes are made, and returns a revised version that addresses every point. We do not guess at what feedback means. We ask, confirm, and act.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Final Delivery',
    content: 'Final delivery includes your whiteboard animation video in every format and resolution required for every platform where it will live. Source files are included in most project scopes. Your project is not complete until you are ready to deploy it.',
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
              <h2 className={styles.mainTitle}>Our Whiteboard Animation <br />Production Process</h2>
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
