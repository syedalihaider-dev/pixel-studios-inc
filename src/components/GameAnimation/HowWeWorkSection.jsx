"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import styles from './HowWeWorkSection.module.css';

const accordionData = [
  {
    id: 1,
    title: "In-Game Cutscenes",
    content:
      "Cutscene animation using the game's own character assets and engine at a production quality that justifies pulling the player out of gameplay for it."
  },
  {
    id: 2,
    title: "Storytelling Cinematics",
    content:
      "Narrative cinematic animation with the camera work, character performance, and editing rhythm that serves the story the game is trying to tell."
  },
  {
    id: 3,
    title: "Launch Trailer Animation",
    content:
      "Launch trailer animation that creates the emotional argument for buying the game rather than describing what it contains."
  },
  {
    id: 4,
    title: "Teaser Trailer Animation",
    content:
      "Teaser animation that builds anticipation without revealing content the marketing campaign needs to protect until launch."
  },
  {
    id: 5,
    title: "Promotional Game Videos",
    content:
      "Promotional video animation for social media, advertising campaigns, and press outreach."
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
              <h2 className={styles.heading}>
                Game Cinematic and Trailer Animation Services
              </h2>

              <p className={styles.description}>
                We create cinematic game animations and trailer content designed to build emotional connection, communicate your game's vision, and create memorable experiences across launches, marketing campaigns, and in-game storytelling moments.
              </p>

              <div className={styles.buttonsWrapper}>
                <CTAButton type="button" text="Let's Talk" />
                <CTAButton
                  type="link"
                  href="tel:+1-443-487-0213"
                  text="Call Now"
                  variant="outline"
                />
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
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className={styles.accordionTitle}>{item.title}</h3>
                      <span className={styles.accordionIcon}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                          }}
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