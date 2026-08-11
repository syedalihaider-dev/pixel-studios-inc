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
              <p className="subtitle">Insurance Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Insurance Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Products Written for Compliance, Not Comprehension
              </h3>

              <p className={styles.description}>
                What actually stops insurance customers from understanding their own
                coverage? Policy documents are long, legally precise, and written
                for compliance first, so many customers only understand their
                coverage when they need to file a claim. Agents spend valuable
                time explaining policy terms before discussing products, while
                support teams answer the same questions because written documents
                are difficult to follow. Regulations and policy updates also
                change regularly, making communication even more challenging. The
                result is lower trust, higher support costs, and missed sales
                opportunities caused by poor communication rather than poor
                products.
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
                src="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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

          <h3 className={styles.innerTitle}>
            The Benefit: Coverage a Customer Can Follow in Two Minutes
          </h3>

          <p className={styles.bottomText}>
            What changes when policy language becomes something customers can
            watch? Insurance animation videos explain coverage, claims, and
            benefits in a clear visual format that improves understanding before
            customers contact an agent. They help reduce repetitive support
            calls, strengthen digital sales, and build trust through transparent
            communication. The same videos also help agents and brokers explain
            policies faster, creating smoother conversations and improving
            efficiency across the entire customer journey.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;