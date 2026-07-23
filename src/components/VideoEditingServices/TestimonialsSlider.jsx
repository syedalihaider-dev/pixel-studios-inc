"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TestimonialsSlider.module.css';

const testimonialsData = [
  {
    id: 1,
    name: "Patricia Lively",
    role: "Chief Visionary Officer, B2B Technology Brand",
    content: "We had been editing our own video content in-house for two years. The footage was good but the edits were holding it back. We brought Pixels Studios in for a three-month retainer covering all YouTube and social media video editing. Our YouTube watch time increased by 62% in the first quarter and our social media completion rates went significantly above industry average. The footage did not change. The editing did.",
    image: "/testi-client-01.png"
  },
  {
    id: 2,
    name: "Russell Whitmore",
    role: "Chief Marketing Officer, E-Commerce Brand",
    content: "We briefed Pixels Studios on a 12-piece promotional video campaign with a four-week turnaround across multiple platforms. Every asset delivered on time, to platform specifications, at production quality our internal team could not have matched in that timeline. Our campaign click-through rate was 2.8x our previous best. Professional video editing services are not a production cost. They are a marketing investment with a measurable return.",
    image: "/testi-client-02.png"
  },
  {
    id: 3,
    name: "Juliana Patrick",
    role: "Independent Creator and Entrepreneur",
    content: "I was spending 12 hours a week editing my YouTube channel and podcast. I brought Pixels Studios in for both. Turnaround is two to three business days per episode, the quality is better than what I produced myself, and I now spend those 12 hours creating more content. The channel grew 40% in subscribers after I made the switch. I should have outsourced this a year earlier. ",
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
