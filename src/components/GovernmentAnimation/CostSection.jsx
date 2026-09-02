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
              <p className="subtitle">Government Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Government Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Communicating Policy to a Broad, Varied Public
              </h3>

              <p className={styles.description}>
                Government agencies communicate to an unusually broad audience,
                spanning different languages, literacy levels, and levels of
                familiarity with the subject matter, all while working within
                procurement processes and approval structures that add real time
                to any project. Public information often needs to meet specific
                accessibility standards, sensitive or pre-decisional content
                requires careful handling before release, and internal training
                materials frequently need updating as policies and regulations
                change. Written notices and static materials struggle to reach
                citizens who do not seek out government information proactively,
                which limits the actual impact of even well-written
                communication, no matter how accurate the underlying policy is.
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
            The Benefit: Clear Communication That Reaches More People
          </h3>

          <p className={styles.bottomText}>
            Government animation services turn dense policy and procedure into
            video that a broader public actually watches and understands,
            extending the reach of public awareness campaigns beyond people who
            would seek out a written notice. Explainer videos for government
            programs can walk citizens through eligibility, procedures, or
            safety information in a format that works across literacy levels,
            and animation makes training content easier to standardize across
            large, distributed workforces. Agencies using government animation
            vendor partnerships report stronger public engagement, more
            consistent staff training outcomes, and content that supports
            transparency and accessibility goals at the same time, without
            adding significant burden to already stretched communications
            teams.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;