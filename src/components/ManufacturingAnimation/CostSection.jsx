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
              <p className="subtitle">Manufacturing Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Manufacturing Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Processes That Are Hard to Film and Harder to Explain
              </h3>

              <p className={styles.description}>
                Manufacturing floors are loud, proprietary, and often too
                dangerous or confidential to film in full, which makes
                traditional video production difficult even when a company wants
                to showcase its capabilities. Internal mechanisms inside
                machinery are hidden from view, safety training needs to be
                standardized across shifts and facilities without losing
                consistency, and marketing teams need polished content to sell
                equipment or capabilities that a camera crew could never fully
                capture on a working floor. Proprietary processes also raise
                real confidentiality concerns, and static manuals struggle to
                communicate a multi-step process the way watching it unfold
                actually does, leaving new employees and prospective clients
                alike to piece together understanding from incomplete
                information.
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
            The Benefit: A Clear View of Processes No Camera Could Capture
          </h3>

          <p className={styles.bottomText}>
            Manufacturing animation solves the visibility problem directly,
            since it can be built from CAD data and process documentation rather
            than a physical shoot. Industrial animation shows internal
            mechanisms, assembly sequences, and process flows that no camera
            angle could ever capture, and it can be produced under full
            confidentiality before a machine is even built. Manufacturers using
            manufacturing animation report faster sales cycles for complex
            equipment, more consistent safety training outcomes across
            facilities, and marketing content that finally does justice to
            processes their internal teams already know are impressive, without
            waiting for a facility to be photo-ready.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;