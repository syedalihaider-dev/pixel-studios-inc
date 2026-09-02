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
              <p className="subtitle">Architecture Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Architecture Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Designs That Are Hard to Picture on Paper
              </h3>

              <p className={styles.description}>
                What makes architectural presentations so difficult? Blueprints
                and elevation drawings are precise but nearly impossible for a
                non-architect to visualize in three dimensions. Clients approve
                budgets based on renderings they cannot fully picture, planning
                commissions review proposals without ever experiencing the scale
                of what is being built, and design changes late in a project
                mean updating static boards or physical models that are slow
                and costly to redo. For firms competing for high-value
                commissions, the ability to show a design clearly and
                persuasively can be the difference between winning a project and
                losing it to a competitor with better visuals, regardless of
                which firm actually produced the stronger design.
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
                data-deferred-src="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
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
            The Benefit: A Building Your Client Can Walk Through Before It Exists
          </h3>

          <p className={styles.bottomText}>
            What changes when a design becomes something people can experience?
            Architectural animation lets clients, investors, and planning
            boards walk through a space, see how light moves through it, and
            understand scale in a way no drawing can convey. Firms using 3D
            architectural animation services report faster client approvals,
            stronger presentations at planning and zoning meetings, and a
            persuasive edge in competitive pitches where the firm with the
            clearest visualization often wins the commission, even when
            competing designs are technically comparable on paper.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;