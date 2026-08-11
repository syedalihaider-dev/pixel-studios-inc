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
              <p className="subtitle">Entertainment Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Entertainment Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Standing Out in a Saturated Market
              </h3>

              <p className={styles.description}>
                Entertainment content competes in one of the most crowded
                attention markets that exists, where thousands of trailers,
                shorts, and music videos launch every week. Budgets and
                timelines are often tight relative to the creative ambition of
                a project; live-action production adds cost and scheduling
                constraints that animation does not always share, and creative
                direction in this category tends to be more subjective, which
                means more rounds of revision before something feels right.
                Getting a distinctive visual style that still fits a release
                schedule is a genuine production challenge for studios, labels,
                and independent creators alike, especially when a single
                missed deadline can mean losing an entire marketing window.
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
            The Benefit: A Style That Fits the Content and the Deadline
          </h3>

          <p className={styles.bottomText}>
            Entertainment animation gives creators a way to build a
            distinctive visual identity without the scheduling and cost
            constraints of a live-action shoot. A show intro, an animated
            trailer, or a fully animated music video can be produced, tested,
            and revised faster than comparable live-action content, and 3D
            animation styles in entertainment now range widely enough to fit
            almost any creative vision. Studios and artists using
            entertainment animation video production report faster turnaround
            on time-sensitive releases and more creative freedom to try a style
            that live-action simply could not achieve on the available budget,
            without sacrificing the visual polish an audience expects.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;