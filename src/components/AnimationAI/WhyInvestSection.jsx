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
    icon: "/discovery.png",
    title: "Creative Discovery and Strategy",
    content:
      "Brand brief, audience, platform requirements, and campaign objective are established before any AI tool is opened. The strategic foundation is the same as any traditional production. The AI is a production tool that serves the strategy, not a replacement for having one.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Scriptwriting and Storyboarding",
    content:
      "Script and storyboard developed by humans. The argument the animation makes, and the sequence it makes, it in are not tasks AI tools do reliably. The creative direction is human. The execution is where AI accelerates.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "AI Asset and Visual Generation",
    content:
      "AI-assisted visual generation for assets, environments, and character references, where the tool can produce qualified options faster than traditional illustration. Expert creative review at every generation stage to ensure brand consistency and quality standards.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Animation and Motion Design",
    content:
      "Motion direction applied to AI-generated assets by animators who understand pacing, timing, and the difference between motion that serves the story and motion that distracts from it.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Visual Effects and Compositing",
    content:
      "VFX and compositing layer applied in post to add the production depth that makes AI animation feel finished rather than generated. This stage is where raw AI output becomes broadcast-quality content.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Sound Design and Final Delivery",
    content:
      "Professional voiceover, music, and sound design were applied to the completed animation. Final delivery in every format and platform specification the campaign requires.",
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
              <p className="subtitle">OUR PROCESS</p>

              <h2 className={styles.mainTitle}>
                Our AI Animation Production Process
              </h2>

              <p className={styles.subText}>
                Every AI animation project follows a structured production workflow that combines strategic planning, human creative direction, and AI-assisted execution. The technology accelerates production, but every stage is guided, reviewed, and refined by experienced professionals to ensure quality, consistency, and brand alignment from concept to final delivery.
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
