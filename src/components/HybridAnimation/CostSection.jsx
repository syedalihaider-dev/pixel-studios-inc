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
              <p className="subtitle">Hybrid & Cell Animation</p>
              <h2 className={styles.title}>Bring Every Frame to Life with Expert Hybrid and Cel Animation</h2>
              <p className={styles.description}>
                Cel animation, whether produced traditionally or digitally, and hybrid 2D/3D production both trade production efficiency for visual specificity. That trade is the entire value proposition. Content produced this way does not look like everything else currently running in a given category, and that visual distinctiveness compounds into brand recognition that templated production cannot generate.
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

        {/* <motion.div
          className={styles.bottomContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.divider}></div>
          <p className={styles.bottomText}>
            We also sign NDAs before briefing conversations begin, work remotely with studios on every continent, and treat a launch date as a hard constraint rather than a planning assumption. If the trailer is not ready when the store page goes live, the launch is not ready. We have never been the reason a launch was not ready.
          </p>
          <div className={styles.divider}></div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CostSection;
