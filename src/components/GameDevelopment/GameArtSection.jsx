"use client";
import React, { useState } from 'react';
import styles from './GameArtSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';

const accordionData = [
  {
    id: 1,
    title: "Concept Art and Visual Direction",
    content: "Young orphan Sheeta and her kidnapper, Col. Muska, are flying to a military prison when their plane is attacked by a gang of air pirates led by the matronly Dola. Escaping from a mid-air collision via a magic crystal around her neck, Sheeta meets fellow orphan Pazu and the pair join forces to discover the mystical floating city of Laputa.."
  },
  {
    id: 2,
    title: "Character Art and Animation",
    content: "We create unforgettable characters with distinct personalities. From initial sketches and detailed modeling to rigging and lifelike animations, our character art team ensures every hero, villain, and NPC breathes life into your game."
  },
  {
    id: 3,
    title: "Environment Art and World Building",
    content: "Immerse players in rich, believable worlds. Our environment artists design everything from sprawling landscapes to intricate interiors, focusing on lighting, texturing, and composition to establish the perfect mood."
  },
  {
    id: 4,
    title: "UI and UX Art",
    content: "Intuitive interfaces that enhance gameplay. We design clean, responsive UI elements and menus that provide vital information without breaking immersion, ensuring a seamless player experience."
  },
  {
    id: 5,
    title: "Technical Art and VFX",
    content: "Bridging the gap between art and programming. Our technical artists optimize assets for performance while creating stunning visual effects like explosions, magic spells, and environmental dynamics that elevate the game's polish."
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
              Game Art Development and Visual Production
            </h2>
            <p className={styles.mainParagraph}>
              Great games are remembered for how they feel. But they are discovered, purchased, and reviewed based on how they look. Game art is not a production checkbox that happens after the design is locked.
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
