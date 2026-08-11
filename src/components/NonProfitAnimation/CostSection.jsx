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
              <p className="subtitle">Non-Profit Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Non-Profit Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Big Missions, Small Budgets
              </h3>

              <p className={styles.description}>
                Non-profits often try to communicate complex social or
                environmental issues on a marketing budget that is a fraction of
                what a comparable corporate campaign would spend, which makes
                professional-quality video feel out of reach for many
                organizations. Donor attention is limited and split across
                dozens of causes competing for the same giving dollars,
                sensitive subject matter needs to be handled with genuine care
                rather than exploited for shock value, and small teams
                frequently lack in-house production skills to create anything
                beyond a basic phone video. International or field-based work
                can also make live-action filming logistically difficult or
                unsafe, leaving gaps in an organization's ability to show its
                work visually, even when that work is exactly what would move a
                hesitant donor to give.
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
            The Benefit: Professional Storytelling Without a Corporate Budget
          </h3>

          <p className={styles.bottomText}>
            Nonprofit animation gives organizations a way to tell a compelling,
            professional story without the cost of a full live-action
            production crew and location shoot. Animated nonprofit videos can
            illustrate sensitive situations respectfully, without exposing real
            individuals, and can be produced regardless of where the actual
            work happens in the world. Nonprofits using animation for
            fundraising and awareness campaigns report stronger donor
            engagement, clearer communication of complex issues, and content
            that performs consistently across channels, from a gala
            presentation to a social media appeal, extending far beyond what a
            single-use live-action video could achieve with the same budget.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;