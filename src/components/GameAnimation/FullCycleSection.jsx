"use client";
import React, { useState, useRef } from 'react';
import styles from './FullCycleSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';


const tabsData = [
  {
    id: "2d-animation",
    title: "2D Game Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "2D GAME ANIMATION",
    contentParagraph:
      "Frame-by-frame and rigged 2D character and environment animation for mobile, PC, and browser platforms. Sprite sheets delivered with correct atlas packing, frame timing, and margin settings."
  },
  {
    id: "3d-animation",
    title: "3D Game Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "3D GAME ANIMATION",
    contentParagraph:
      "3D character animation engineered for the animation state machine with weight painting, joint limits, and transition design that produces fluid motion rather than glitchy state collisions."
  },
  {
    id: "character-animation",
    title: "Character Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "CHARACTER ANIMATION",
    contentParagraph:
      "The full character animation pipeline: from idle and locomotion through combat, interaction, and cinematic performance. Every animation is calibrated to the character's physical parameters and the game's visual style."
  },
  {
    id: "creature-animation",
    title: "Creature and Monster Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "CREATURE AND MONSTER ANIMATION",
    contentParagraph:
      "Creature and monster animation with anatomy-informed joint behavior and the animation personality that distinguishes a terrifying encounter from a mesh that happens to move."
  },
  {
    id: "npc-animation",
    title: "NPC Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "NPC ANIMATION",
    contentParagraph:
      "Supporting character animation that populates the game world with believable behavior without consuming the performance budget a hero character warrants."
  },
  {
    id: "combat-animation",
    title: "Combat Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "COMBAT ANIMATION",
    contentParagraph:
      "Combat animation with the anticipation, contact, and recovery phases that make player attacks feel impactful. Hitbox timing aligned to the animation. Every frame of a combat cycle is a gameplay information delivery mechanism."
  },
  {
    id: "motion-capture",
    title: "Motion Capture Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "MOTION CAPTURE ANIMATION",
    contentParagraph:
      "Motion capture data processed, cleaned, and retargeted to game-ready character rigs. Mocap that arrives in a game engine without the artifacts that unprocessed capture data consistently produces."
  },
  {
    id: "facial-animation",
    title: "Facial Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "FACIAL ANIMATION",
    contentParagraph:
      "Facial animation and blend shape systems for dialogue, emotional performance, and the micro-expressions that make characters feel present rather than rendered."
  },
  {
    id: "cinematic-animation",
    title: "Cinematic Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "CINEMATIC ANIMATION",
    contentParagraph:
      "Cinematic animation for game cinematics and trailers at a production quality that separates a memorable sequence from a functional one."
  },
  {
    id: "cutscene-animation",
    title: "Cutscene Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "CUTSCENE ANIMATION",
    contentParagraph:
      "In-game cutscene animation is integrated with the game's character assets and lighting to maintain visual continuity between gameplay and cinematics."
  },
  {
    id: "environmental-animation",
    title: "Environmental Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "ENVIRONMENTAL ANIMATION",
    contentParagraph:
      "Ambient environment animation: foliage, water, atmospheric effects, and interactive world elements that make a game world feel alive rather than static."
  },
  {
    id: "ui-fx-animation",
    title: "UI and FX Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "UI AND FX ANIMATION",
    contentParagraph:
      "UI motion design and visual effects animation that gives a game its visual rhythm and communicates system feedback to the player through motion."
  }
];

const FullCycleSection = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const tabsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 400;
      tabsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const activeTabData = tabsData.find(t => t.id === activeTab);

  return (
    <section className={styles.section}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="row text-center mb-5">
          <div className="col-12">
            <p className="subtitle">GAME ANIMATION SERVICES</p>

            <h2 className={styles.mainHeading}>
              Game Animation Services We Provide
            </h2>

            <p className={styles.topParagraph}>
              We create production-ready game animations across 2D, 3D, character, creature, cinematic, and interactive systems. Every animation is designed for gameplay performance, visual quality, and seamless integration into your target platform.
            </p>
          </div>
        </div>

        <div className={styles.tabsWrapper}>
          <button className={styles.navArrow} onClick={() => handleScroll('left')}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.tabsContainer} ref={tabsContainerRef}>
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className={styles.activeUnderline}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          <button className={styles.navArrow} onClick={() => handleScroll('right')}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.contentContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="row align-items-center"
            >
              <div className="col-lg-6 mb-4 mb-lg-0">
                <Image src={activeTabData.image}
                  alt={activeTabData.title}
                  className={styles.contentImage}
                  width={774}
                  height={471}
                />
              </div>
              <div className="col-lg-6">
                <h3 className={styles.contentHeading}>{activeTabData.contentTitle}</h3>
                <p className={styles.contentParagraph}>{activeTabData.contentParagraph}</p>
                <div className={styles.buttonRow}>
                  <CTAButton type="popup" text="Let's Talk" />
                  <CTAButton type="popup" variant="outline" text="Call Now" className={styles.callNowBtn} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default FullCycleSection;
