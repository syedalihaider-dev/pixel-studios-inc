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
              <p className="subtitle">Biotech Animation</p>
              <h2 className={styles.title}>Why Animation Matters in the BioTech Industry?</h2>
              <h3 className={styles.innerTitle}>The Challenge: Science That Cannot Be Photographed</h3>
              <p className={styles.description}>
                What makes biotech uniquely hard to market? You are selling ideas before you sell products. A vector delivery mechanism or a signaling cascade cannot be filmed, demoed, or displayed at a trade show booth. Static diagrams flatten that complexity into text and arrows, so pitch meetings get stuck explaining fundamentals instead of building conviction, and scientific advisory boards burn review cycles clarifying mechanisms instead of evaluating outcomes. Under tight funding windows and regulatory deadlines, unclear communication does not just slow a program down. It can stall it at the exact moment it needs momentum, sometimes costing a company a round or a partnership the science genuinely deserved to win.
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
          <h3 className={styles.innerTitle}>The Benefit: Making the Invisible Visible</h3>
          <p className={styles.bottomText}>
            What changes when the science becomes something people can watch? 3D medical animation lets an investor follow exactly how a therapy engages its target, frame by frame, without a single slide of dense text in the way. That clarity shortens due diligence, strengthens FDA and IRB submissions by giving reviewers an unambiguous visual reference, and turns technical content into a genuine fundraising asset. Teams that invest in biotech animation production services report faster stakeholder buy-in, fewer clarifying meetings, and a shared visual reference that keeps science, regulatory, marketing, and sales teams aligned on one accurate story.
          </p>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
