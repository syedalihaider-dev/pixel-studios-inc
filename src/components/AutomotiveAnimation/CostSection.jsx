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
              <p className="subtitle">Automotive Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Automotive Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Confidentiality and Complexity Collide
              </h3>

              <p className={styles.description}>
                What makes automotive marketing and communication uniquely
                difficult? Vehicle designs are often confidential until launch,
                making live-action production impossible before a prototype
                exists. Critical systems like drivetrains, EV batteries, and
                safety components remain hidden inside the vehicle, while
                engineering, manufacturing, and marketing teams all need clear
                visuals for different audiences. Physical prototypes are costly,
                production schedules are tight, and protecting confidential
                designs adds another layer of complexity throughout development.
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
            The Benefit: Show It Before It Is Built, Explain It After
          </h3>

          <p className={styles.bottomText}>
            What does automotive animation solve that photography cannot? 3D
            automotive animation can be created directly from CAD and
            engineering files before a physical prototype exists while keeping
            projects fully confidential. Exploded-view animations reveal
            internal systems no camera can capture, and the same assets support
            product launches, engineering documentation, investor presentations,
            and technical training. The result is faster collaboration, stronger
            marketing, and production-ready content available the moment a
            vehicle is revealed.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;