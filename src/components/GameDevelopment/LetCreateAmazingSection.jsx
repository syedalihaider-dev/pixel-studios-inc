"use client";
import React from 'react';
import styles from './LetCreateAmazingSection.module.css';
import { motion } from 'framer-motion';
import CTAButton from '../Common/CTAButton';

const LetCreateAmazingSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bgTextWrapper}>
        <motion.div 
          className={styles.bgText}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          PIXEL<br/>STUDIOS
        </motion.div>
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <motion.div 
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.mainHeading}>
              Let’s Create<br />Something Amazing
            </h2>
            <p className={styles.mainParagraph}>
              Your brand has a story worth telling—and powerful animation is one of the most effective ways to tell it.
              <br /><br />
              Partner with Prolific Studio, a top animation studio known for creativity, speed, and results-driven animation services.
            </p>
            <div className={styles.buttonRow}>
              <CTAButton type="popup" text="Let's Talk" />
              <CTAButton type="popup" variant="outline" text="Call Now" className={styles.callNowBtn} />
            </div>
          </motion.div>

          <div className="col-lg-6 position-relative">
            <div className={styles.imageWrapper}>
              <motion.div 
                className={styles.imageBgShape}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.img 
                src="/game-development/let-create-something-amazing.png" 
                alt="Let's Create Something Amazing" 
                className={styles.mainImage}
                width="645"
                height="740"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
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

export default LetCreateAmazingSection;
