"use client";
import React from 'react';
import styles from './CostSection.module.css';
import { motion } from 'framer-motion';

const CostSection = ({ subtitle, title, description, videoSrc, bottomText }) => {
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
              {subtitle && <p className="subtitle">{subtitle}</p>}
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>
                {description}
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
                data-deferred-src={videoSrc}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
            </motion.div>
          </div>
        </div>

        {bottomText && (
          <motion.div
            className={styles.bottomContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.divider}></div>
            <p className={styles.bottomText}>
              {bottomText}
            </p>
            <div className={styles.divider}></div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CostSection;
