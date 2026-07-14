"use client";
import React from 'react';
import styles from './PressReleaseQuote.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PressReleaseQuote() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={`row align-items-center ${styles.quoteRow}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-lg-6 col-md-6 mb-4 mb-md-0" variants={imageVariants}>
            <div className={styles.imageWrapper}>
              <Image
                src="/press-release/julie-sweet-headshot.png"
                alt="Julie Sweet"
                width={778}
                height={518}
                className={styles.headshot}
              />
            </div>
          </motion.div>
          <motion.div className="col-lg-6 col-md-6" variants={textVariants}>
            <div className={styles.textContent}>
              <h2 className={styles.quoteText}>
                “Companies will have a greater technology landscape, but we need to completely change the narrative to inspire people to paint the future. It is human in the lead, not human in the loop.”
              </h2>
              <h3 className={styles.authorName}>Julie Sweet</h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
