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
    title: 'Discovery and Campaign Strategy',
    content:
      'Audience identification, conversion objective, media plan, and competitive context are established before a frame is conceived. The strategy brief precedes the creative brief.',
  },
  {
    id: 2,
    icon: '/storyboarding.png',
    title: 'Creative Concept Development',
    content:
      'Multiple creative directions were developed against the strategy brief and presented for selection. The concept that earns the approval is the one that best serves the objective, not the one that is most visually impressive in isolation.',
  },
  {
    id: 3,
    icon: '/animation.png',
    title: 'Scriptwriting and Messaging',
    content:
      'Commercial scripts written by people who understand the difference between a brand message and a conversion argument. Short copy. Specific hooks. Calls to action are placed where the audience is most prepared to act on them.',
  },
  {
    id: 4,
    icon: '/animation.png',
    title: 'Storyboarding',
    content:
      'Every visual beat is mapped and approved before animation begins. Changes to the storyboard are inexpensive. Changes after the animation has begun are not.',
  },
  {
    id: 5,
    icon: '/animation.png',
    title: 'Visual Design and Asset Creation',
    content:
      'Style frames, character design, and branded asset creation are approved before production. The visual direction is locked before production resources are committed.',
  },
  {
    id: 6,
    icon: '/animation.png',
    title: 'Animation Production',
    content:
      'Commercial animation production in-house, by the team that developed the concept. No handoffs to animators who were not in the strategy session.',
  },
  {
    id: 7,
    icon: '/animation.png',
    title: 'Voiceover and Sound Design',
    content:
      'Professional voiceover, music, and sound design mixed for broadcast-spec audio delivery and for the digital environments where most commercial content is consumed without full speaker volume.',
  },
  {
    id: 8,
    icon: '/animation.png',
    title: 'Review and Optimization',
    content:
      'Structured revision round with documented feedback and confirmed interpretations before any changes are made. Then, a pre-delivery review against the original conversion objective.',
  },
  {
    id: 9,
    icon: '/animation.png',
    title: 'Final Delivery',
    content:
      'Final files in every format the media plan requires. Platform-specific exports to technical specification. Source files were scoped into the project.',
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

              <h2 className={styles.mainTitle}>
                Our Animated Commercial <br />Production Process
              </h2>

              <p className={styles.subText}>
                Every animated commercial follows a structured production process, from campaign strategy and creative development to animation, optimization, and final delivery. Each stage is designed to maximize audience engagement and achieve the campaign's marketing objectives.
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
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={108}
                          height={108}
                          className={styles.accIcon}
                        />
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
                          <p className={`${styles.accContent} scroll_block`}>
                            {item.content}
                          </p>

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