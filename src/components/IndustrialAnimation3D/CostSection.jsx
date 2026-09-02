"use client";
import React from 'react';
import styles from './CostSection.module.css';
import { motion } from 'framer-motion';

const CostSection = () => {
  return (
    <section className={styles.costSection}>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="subtitle">3D Industrial Animation</p>
              <h2 className={styles.title}>Turn Complex Industrial Processes into Clear Visual Experiences</h2>
              <p className={styles.description}>
                Industrial systems are difficult to explain because they involve mechanical systems, fluid dynamics, and sequenced operations that are nearly impossible to capture on camera, either because the equipment is too large, the process is too fast, or the relevant parts are sealed inside a housing that hides exactly what an audience needs to see.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              className={styles.videoWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <iframe loading="lazy"
                data-deferred-src="https://player.vimeo.com/video/1201624747?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
            </motion.div>
          </div>
        </div>

        <motion.div
          className={styles.bottomContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.divider}></div>
          <p className={styles.bottomText}>
            Our 3D industrial animation makes the invisible visible: cutaway views of internal mechanisms, slowed-down sequences of high-speed processes, and clear visualization of plant-wide workflows that no factory floor tour can replicate for an investor, a buyer, or a new employee in their first week.
          </p>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
