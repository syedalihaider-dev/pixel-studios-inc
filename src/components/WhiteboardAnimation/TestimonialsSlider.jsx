"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TestimonialsSlider.module.css';

const testimonialsData = [
  {
    id: 1,
    name: "Dr. William Smith",
    role: "President and Founder, Medical Technology Company",
    content: "We needed a 3D animation company that could handle medical device visualization to clinical accuracy standards on a tight timeline. Pixels Studios delivered a photorealistic surgical animation that our clinical team approved without structural corrections. Two of our investors cited the animation specifically in their decision to proceed.",
    image: "/testi-client-01.png"
  },
  {
    id: 2,
    name: "Kay Diaz",
    role: "CEO, Industrial Manufacturing Brand",
    content: "Our product is a precision component that photography has never captured well enough. The 3D product animation Pixels Studios produced showed every internal mechanism in motion with a clarity we had never achieved. Our sales team uses it in every customer presentation, and it is now our most-used commercial asset.",
    image: "/testi-client-02.png"
  },
  {
    id: 3,
    name: "SARAH JENKINS",
    role: "Director of Marketing, EdTech Inc",
    content: "The educational animations provided by Pixels Studios completely transformed how our students interact with our platform. Engagement has skyrocketed and the visual storytelling is top-notch.",
    image: "/testi-client-03.png"
  },
  // {
  //   id: 4,
  //   name: "SARAH JENKINS",
  //   role: "Director of Marketing, EdTech Inc",
  //   content: "The educational animations provided by Pixels Studios completely transformed how our students interact with our platform. Engagement has skyrocketed and the visual storytelling is top-notch.",
  //   image: "/testi-client-01.png"
  // },
  // {
  //   id: 5,
  //   name: "MARK ZIMMERMAN",
  //   role: "Founder, HealthApp",
  //   content: "An absolute pleasure to work with. They took our complex medical concepts and turned them into beautifully animated, easy-to-understand videos that our users love.",
  //   image: "/testi-client-02.png"
  // }
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
        <h2 className={styles.mainTitle}>Testimonials and Portfolio</h2>
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
