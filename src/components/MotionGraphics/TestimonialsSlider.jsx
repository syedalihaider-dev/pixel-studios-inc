"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TestimonialsSlider.module.css';

const testimonialsData = [
  {
    id: 1,
    name: "Jeffery Carter",
    role: "Chief Marketing Officer, SaaS Platform",
    content: "We needed a product launch motion graphics package across six formats in four weeks. Pixel Studios delivered every format on time and on brand. Our launch campaign generated 3x our average engagement rate in the first 72 hours. The creative quality was better than what our internal team could have managed under that timeline, and the strategy behind it was the reason it performed.",
    image: "/testi-client-01.png"
  },
  {
    id: 2,
    name: "Quin Lu",
    role: "Chief Visionary Officer, Consumer Brand",
    content: "Our team tested motion graphics against our existing static formats for a full quarter across paid social. Motion graphics outperformed static on click-through rate by 2.4x, and cost per acquisition dropped by 31%. We have not run a static-only campaign since that test, and our media buyer now asks for motion graphics by default.",
    image: "/testi-client-02.png"
  },
  {
    id: 3,
    name: "Helen Dench",
    role: "Co-Founder, Enterprise Software Company",
    content: "The motion graphics explainer video on our demo page reduced average lead qualification time by 40%. Prospects arriving from the video already understood the product well enough to skip the introductory portion of the sales call entirely. That is real-time returned to our sales team every single week, and it compounds across every rep on the team.",
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
