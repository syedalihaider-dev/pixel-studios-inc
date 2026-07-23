"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TestimonialsSlider.module.css';

const testimonialsData = [
  {
    id: 1,
    name: "Melissa Duncan",
    role: "Whiteboard Animation for Product Launches",
    content: "We were three weeks away from launching a product that required us to explain a multi-step compliance workflow to an audience of mid-level operations managers — people with no patience for animated brand storytelling and every reason to close a video after 30 seconds. The Pixels Studios team wrote a script that began with the exact problem our users were already experiencing and visually built the solution in under two minutes. Watch time on the launch video hit 78%. Our previous product video had averaged 34%.",
    image: "/testi-client-01.png"
  },
  {
    id: 2,
    name: "Clara Wiliam",
    role: "Whiteboard Animation for Employee Training",
    content: "Our new-hire onboarding process had a completion issue. The existing training materials were comprehensive and almost entirely unused. We brought Pixels Studios in to rebuild three core modules as whiteboard animation videos. Completion rates went from under 40% to 91% in the first cohort. More importantly, new hires stopped asking the questions the training was supposed to answer.",
    image: "/testi-client-02.png"
  },
  {
    id: 3,
    name: "Brian Bowman",
    role: "Whiteboard Animation for Customer Education",
    content: "Our customer success team was spending 60% of their call time explaining the same three features to every new account. We commissioned two whiteboard explainer videos from Pixels Studios and embedded them in the onboarding flow. In ninety days, the average number of support contacts per new account dropped by more than half. The videos paid for themselves in the first month.",
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
        <h2 className={styles.mainTitle}>Whiteboard Animation for Product Launches</h2>
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
