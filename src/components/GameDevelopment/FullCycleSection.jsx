"use client";
import React, { useState, useRef } from 'react';
import styles from './FullCycleSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from '../Common/CTAButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tabsData = [
  {
    id: "concept",
    title: "Game Concept & Design Development",
    image: "/game-development/banner-bg.png",
    contentTitle: "GAME CONCEPT & DESIGN DEVELOPMENT",
    contentParagraph: "Great games begin with design decisions made before a single line of code is written. Our game design and development services start with the experience the player will have, not the features the client wants to build.",
  },
  {
    id: "prototyping",
    title: "Prototyping & Wireframing",
    image: "/game-development/banner-bg.png",
    contentTitle: "PROTOTYPING & WIREFRAMING",
    contentParagraph: "We create interactive prototypes to test core mechanics and user flows early on. This minimizes risk and ensures the foundation of your game is solid before full production begins.",
  },
  {
    id: "crossplatform",
    title: "Cross-Platform Game Development",
    image: "/game-development/banner-bg.png",
    contentTitle: "CROSS-PLATFORM GAME DEVELOPMENT",
    contentParagraph: "Reach players everywhere. We build seamless, high-performance games for PC, console, and mobile platforms, ensuring a consistent and engaging experience across all devices.",
  },
  {
    id: "art",
    title: "2D & 3D Art & Animation",
    image: "/game-development/banner-bg.png",
    contentTitle: "2D & 3D ART & ANIMATION",
    contentParagraph: "Our artists breathe life into your world. From breathtaking 2D environments to meticulously rigged 3D characters, we deliver visuals that captivate and immerse your audience.",
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
            <h4 className={styles.subHeading}>FULL CYCLE GAME</h4>
            <h2 className={styles.mainHeading}>DEVELOPMENT STUDIO</h2>
            <p className={styles.topParagraph}>
              Full-cycle game development means we own the entire pipeline, from the first concept sketch to the day the build goes live on the platform.
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
                 <img 
                   src={activeTabData.image} 
                   alt={activeTabData.title} 
                   className={styles.contentImage} 
                   width="774" 
                   height="471" 
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
