"use client";
import React, { useState } from 'react';
import styles from './GameArtSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';

const accordionData = [
  {
    id: 1,
    title: "Action Games",
    content:
      "Fast combat cycles, responsive movement, and the visual communication of player power and enemy threat."
  },
  {
    id: 2,
    title: "RPG Games",
    content:
      "Character expression depth, ability animation variety, and the physical vocabulary make each character class feel distinct."
  },
  {
    id: 3,
    title: "MMORPG Games",
    content:
      "High-volume animation production for large character rosters with consistent quality standards across hundreds of individual animations."
  },
  {
    id: 4,
    title: "FPS Games",
    content:
      "First-person weapon and hand animation with the weight and feedback that first-person camera distances demand."
  },
  {
    id: 5,
    title: "Strategy Games",
    content:
      "Unit animation is readable at overhead camera distances with the visual clarity that makes tactical information legible."
  },
  {
    id: 6,
    title: "Mobile Games",
    content:
      "Performance-efficient animation within mobile GPU budgets. Sprite sheet animation and optimized skeletal animation for mobile runtimes."
  },
  {
    id: 7,
    title: "Casual Games",
    content:
      "Expressive, exaggerated animation with the visual energy that casual game audiences expect and the brevity their session lengths require."
  },
  {
    id: 8,
    title: "Adventure Games",
    content:
      "Character performance depth and environmental animation that sustain the immersion, narrative adventure games depend on."
  },
  {
    id: 9,
    title: "Racing Games",
    content:
      "Vehicle physics animation and driver character response that communicates speed and handling through secondary motion."
  },
  {
    id: 10,
    title: "Sports Games",
    content:
      "Human motion accuracy and the transition smoothness between athletic actions that sports games are judged against a real-world reference for."
  }
];

const GameArtSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center">

          <motion.div
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.mainHeading}>
              Game Genres We Support
            </h2>

            <p className={styles.mainParagraph}>
              Every genre has specific animation requirements. The speed of a fighting game combat cycle is not the speed of an RPG combat cycle. The movement language of a mobile casual game is not the movement language of a realistic FPS. We brief to the genre.
            </p>

            <div className={styles.buttonRow}>
              <CTAButton type="popup" text="Let's Talk" />
              <CTAButton type="popup" variant="outline" text="Call Now" className={styles.callNowBtn} />
            </div>

            <div className={styles.accordionContainer}>
              {accordionData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={styles.accordionItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <span>{item.title}</span>
                    <span className={styles.toggleIcon}>{openId === item.id ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={styles.accordionContentWrapper}
                      >
                        <p className={styles.accordionContent}>
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <motion.img
                src="/game-development/game-01.png"
                alt="Game Art 1"
                className={styles.imgTop}
                width="751"
                height="607"
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 8 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.img
                src="/game-development/game-02.png"
                alt="Game Art 2"
                className={styles.imgBottom}
                width="726"
                height="603"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GameArtSection;
