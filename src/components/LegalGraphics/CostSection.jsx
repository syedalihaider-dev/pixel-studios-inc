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
              <p className="subtitle">COLLABORATIVE APPROACH</p>
              <h2 className={styles.title}>Simplify Complex Legal Cases with Professional Legal Graphics Animation</h2>
              <p className={styles.description}>
                When attorneys use legal graphics and trial animations, they are solving one specific communication problem: how do you make technical, medical, or forensic information comprehensible to twelve people with no background in the subject? The animation does not advocate. It presents the evidence in a visual format that a juror can follow. The legal argument remains with the attorney.
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
              <iframe
                src="https://player.vimeo.com/video/1065203124?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
            What is legal graphics animation, and why does it matter in a case where the evidence should speak for itself? Because evidence almost never speaks for itself. A police report describes what happened in prose. A medical record documents an injury in clinical terminology. Legal graphics animation closes that gap. It translates evidence into a visual format that a judge, a jury, or an arbitrator can evaluate clearly, without requiring knowledge they do not have.
          </p>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
