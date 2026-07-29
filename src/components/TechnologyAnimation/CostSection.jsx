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
              <p className="subtitle">Technology Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Technology Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Explaining Something Nobody Can See
              </h3>

              <p className={styles.description}>
                Technology products, especially software and AI, rarely have a
                physical form that can be photographed or demoed in a
                traditional sense, which leaves marketing and sales teams
                describing value in the abstract. Product cycles move fast, so
                marketing materials need to be produced and updated quickly to
                keep pace with new releases; technical concepts like machine
                learning models or backend architecture are genuinely difficult
                to explain in plain language, and different audiences, from
                developers to executives to consumers, all need different levels
                of depth from the same underlying product story. Static
                screenshots and feature lists rarely convey what a product
                actually feels like to use, which leaves a real gap between
                engineering effort and market perception.
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
                src="https://player.vimeo.com/video/1064481379?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
            The Benefit: A Product People Actually Understand Before They Try It
          </h3>

          <p className={styles.bottomText}>
            A technology animation video makes abstract systems and interfaces
            visible in a way that builds understanding before a user ever opens
            the product. A strong technology explainer video can condense a
            complex value proposition into a couple of focused minutes, UI
            animation can showcase a product experience without a live screen
            recording, and the same core assets can be adapted for different
            audiences from a homepage visitor to an enterprise buyer.
            Technology companies using custom technology animation video content
            report stronger conversion on landing pages, clearer investor
            conversations, and marketing that keeps pace with a fast product
            roadmap instead of lagging months behind the actual release.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;