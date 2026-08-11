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
              <p className="subtitle">Logistics Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Logistics Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: An Operation Too Big to Show
              </h3>

              <p className={styles.description}>
                What actually goes wrong when logistics companies try to explain themselves? Sales teams describe capabilities in words a prospect has to imagine, safety teams struggle to standardize training across facilities that do not look alike, and investors are asked to trust a business model they cannot see in motion. No photo captures a multi-modal network in one frame. The result is longer sales cycles, inconsistent onboarding, and pitch decks that undersell genuinely strong operations. Facilities and equipment change constantly too, so static marketing materials go stale the moment a new automation system arrives or a warehouse relocates. Against larger, better-funded competitors, that presentation gap can decide contracts your service could easily have won.
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
            The Benefit: Show the Network, Win the Room
          </h3>

          <p className={styles.bottomText}>
            What happens when you can finally show the whole operation? Logistics 3d animation walks a prospective client through your entire network in minutes. A supply chain management animation makes every handoff visible, a warehouse automation animation standardizes safety training across every site, and logistics animation for investors makes a complex model instantly legible. Companies using animated logistics services consistently shorten sales cycles, cut the back-and-forth caused by prospects not grasping the operation, and gain a marketing asset that updates far faster and cheaper than reshooting facility footage every time something changes.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;