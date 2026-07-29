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
              <p className="subtitle">Fintech Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Fintech Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Trust Is Hard to Build Around Invisible Money
              </h3>

              <p className={styles.description}>
                What makes fintech uniquely difficult to market? Money movement
                is invisible, and the systems behind it are dense with
                terminology that means little to a first-time user. A payment
                API, a lending algorithm, or a blockchain settlement process
                cannot be photographed or demoed on a store shelf. Compliance
                requirements add another layer, since claims about security or
                returns need to be accurate down to the wording, and legal teams
                often slow down marketing timelines reviewing copy that still
                fails to explain the actual mechanism. Onboarding drop-off is
                high across the category, support teams field the same basic
                questions about how a product actually works, and investor decks
                packed with charts often fail to explain the mechanism that
                makes the business defensible in the first place, leaving even
                strong fundamentals underappreciated in a room full of competing
                pitches.
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
            The Benefit: Clarity That Converts and Complies
          </h3>

          <p className={styles.bottomText}>
            What changes when the mechanism becomes visible? Fintech motion
            graphics let a user see exactly how a payment routes, how a
            security layer protects their data, or how a lending decision gets
            made, which builds the trust financial products depend on before a
            customer will ever hand over their money. Companies using fintech
            explainer videos report smoother onboarding, fewer support tickets,
            and investor pitches that land faster because the mechanism behind
            the numbers is finally visible instead of implied. Compliance teams
            also benefit, since a well-reviewed animated explanation can be
            reused consistently across marketing, app onboarding, and investor
            materials without redrafting the same explanation in five different
            formats.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;