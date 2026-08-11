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
              <p className="subtitle">Game Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Gaming Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Production Demands Outpace Internal Capacity
              </h3>

              <p className={styles.description}>
                Game development requires enormous volumes of character,
                environment, and cinematic animation, often on tight,
                milestone-driven schedules that leave little room for delay.
                Internal studios frequently lack the bandwidth to handle every
                asset in-house, especially during crunch periods before a major
                milestone or launch, and hiring a full internal animation team
                for a single project is rarely cost-effective. Marketing also
                needs trailers and promotional content that showcase the game at
                its best, often before the game itself is fully playable, which
                creates its own separate production challenge running in parallel
                with core development, and stretches lean teams even further.
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
            The Benefit: Flexible Capacity Without the Overhead
          </h3>

          <p className={styles.bottomText}>
            Game animation outsourcing gives studios flexible production
            capacity that scales with actual need, rather than carrying a fixed
            headcount through slow periods between projects. A 3D game
            animation studio can take on character or environment work during a
            crunch period, then scale back down once that milestone ships, and
            cinematic trailers can be produced in parallel with core development
            rather than competing for the same internal resources. Studios using
            game animation outsourcing services report faster milestone
            delivery, more predictable production costs, and marketing content
            that is ready well ahead of launch instead of scrambling in the
            final weeks.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;