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
              <p className="subtitle">Advertising Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Advertising Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Attention Is the Scarcest Resource in Advertising
              </h3>

              <p className={styles.description}>
                What actually determines whether an ad works? Attention, and it
                disappears fast. Viewers scroll past most content in under two
                seconds, live-action production is expensive and slow to
                iterate, and a single campaign now needs a dozen cutdowns for
                TV, social, and display, each with different aspect ratios and
                length limits. Brand guidelines have to stay consistent across
                every version, testing multiple creative concepts with
                live-action footage is often cost-prohibitive, and by the time a
                traditional shoot wraps, the cultural moment it was built around
                may have already passed. Media budgets keep shifting toward
                platforms that demand new creative every few weeks, which puts
                constant pressure on production teams that were never built to
                move that fast.
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
            The Benefit: Faster Iteration, Sharper Hooks, Lower Cost per Cutdown
          </h3>

          <p className={styles.bottomText}>
            What does advertising animation change about that equation? An
            animated commercial can be produced, tested, and iterated far
            faster than a live-action shoot, and one core asset can be recut
            into dozens of platform-specific variants without reshooting
            anything. Motion graphics advertising also makes it easier to
            visualize abstract benefits, product features, or data points that
            a camera simply cannot capture. Brands using commercial animation
            video production report stronger completion rates on social, more
            consistent brand presentation across formats, and lower total
            production cost once every required cutdown is factored in against
            the price of a comparable live-action shoot.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;