"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TestimonialsSlider.module.css';

const testimonialsData = [
  {
    id: 1,
    name: "Jules Kenneth",
    role: "Chief Visionary Officer, Technology Brand",
    content: "We launched a rebranded identity and needed logo animation that could carry the new brand across every video asset we produce. Pixel Studios developed three concept directions in the first week. The one we chose has been used across more than 40 pieces of video content since launch. Every stakeholder who has seen it, including our board and agency partners, has commented on the production quality unprompted.",
    image: "/testi-client-01.png"
  },
  {
    id: 2,
    name: "Sophie Daniel",
    role: "Chief Marketing Officer, SaaS Platform",
    content: "We needed a logo animation for a product launch across Instagram, LinkedIn, and YouTube simultaneously. Pixel Studios produced a master animation and three platform-specific versions without us managing separate briefs for each. The LinkedIn version alone drove a 40% increase in video completion rate compared to our previous non-animated content.",
    image: "/testi-client-02.png"
  },
  {
    id: 3,
    name: "Benjamin Tyler",
    role: "Co-Founder, Mobile App Company",
    content: "Our app had been live for two years without a professional logo animation for the onboarding sequence. Pixel Studios produced a minimal 3D logo reveal optimized for small screen sizes. It became the opening of our entire onboarding flow and we received direct user feedback mentioning the app's polished feel, specifically referencing the intro.",
    image: "/testi-client-03.png"
  }
];

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const getOffset = (index) => {
    const length = testimonialsData.length;
    let offset = index - activeIndex;
    if (offset < -Math.floor(length / 2)) offset += length;
    if (offset > Math.floor(length / 2)) offset -= length;
    return offset;
  };

  return (
    <section className={styles.testimonialsSlider}>
      <motion.div
        className="container-fluid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.mainTitle}>Client Success Stories</h2>
        <h3 className={styles.subHeading}>Client Feedback Written</h3>

        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.cardsContainer}>
            {testimonialsData.map((t, idx) => {
              const offset = getOffset(idx);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.div
                  key={t.id}
                  className={`${styles.card} ${isActive ? styles.activeCard : styles.inactiveCard}`}
                  animate={{
                    x: `${offset * 105}%`,
                    scale: isActive ? 1.05 : 0.95,
                    opacity: isVisible ? 1 : 0,
                    zIndex: isActive ? 10 : isVisible ? 5 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => {
                    if (!isActive && isVisible) {
                      setActiveIndex(idx);
                    }
                  }}
                >
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={t.image}
                      alt={t.name}
                      className={styles.avatar}
                      onError={(e) => e.target.src = '/default-avatar.png'}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h4 className={styles.name}>{t.name}</h4>
                  <p className={styles.role}>{t.role}</p>
                  <p className={`${styles.content} scroll_block`}>{t.content}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Pagination */}
          <div className={styles.pagination}>
            {testimonialsData.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;
