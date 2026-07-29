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
              <p className="subtitle">Enterprise Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Enterprise Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Consistency at Scale Is Hard to Maintain
              </h3>

              <p className={styles.description}>
                Large organizations run video projects across multiple
                departments, regions, and brand sub-lines at once, and keeping
                all of that visually consistent is a real operational challenge.
                Stakeholder approval chains are longer, legal and compliance
                review adds time to every project, and content often needs to be
                localized for multiple markets and languages. Internal teams
                frequently lack the production bandwidth to keep up with demand
                from HR, marketing, product, and leadership simultaneously, and
                a patchwork of vendors used across departments tends to produce
                inconsistent quality and messaging that undercuts a unified
                brand. Over time, that inconsistency becomes visible to
                employees and customers alike, making the organization feel less
                coordinated than it actually is.
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
            The Benefit: One Consistent System Across Every Team
          </h3>

          <p className={styles.bottomText}>
            Enterprise animation services solve that by giving large
            organizations a single, reliable production partner who understands
            how to work within complex approval structures. A corporate
            animation studio that has built processes for multi-stakeholder
            review, brand governance, and multilingual delivery can produce
            content faster and more consistently than juggling multiple smaller
            vendors. Companies using enterprise animation studio partnerships
            report stronger brand consistency across departments, faster
            turnaround on recurring content needs, and a single point of
            accountability instead of managing several disconnected production
            relationships. That consolidation also tends to reduce total
            production cost once every department's spend is considered
            together.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;