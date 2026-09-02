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
              <p className="subtitle">SaaS Explainer Videos</p>

              <h2 className={styles.title}>
                Why Animation Matters in the SaaS Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: A Product No One Can See
              </h3>

              <p className={styles.description}>
                What makes SaaS uniquely hard to market? The product is abstract.
                There is nothing to photograph, and the value lives inside a
                dashboard or integration that only makes sense once someone has
                used it. Homepage visitors decide in seconds whether your
                product deserves attention, long before a live demo, and a wall
                of feature bullets rarely closes that gap. Product teams ship
                constantly, so marketing and onboarding materials go stale fast.
                Support fields the same UI questions repeatedly because written
                docs do not stick, and sales cycles stretch when prospects
                cannot picture the product in their workflow until several calls
                in. For a category where trials and demos drive conversion, that
                early confusion costs signups and momentum a growing company
                cannot easily recover, especially when a better-funded
                competitor is explaining the same problem more clearly.
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
            The Benefit: Two Minutes That Do the Selling
          </h3>

          <p className={styles.bottomText}>
            What does a SaaS explainer video actually change? It compresses the
            entire understanding gap into a couple of focused minutes. Instead
            of asking a visitor to imagine the platform, a saas demo video
            shows the interface, workflow, and outcome in motion, which builds
            confidence faster than screenshots ever could. Companies investing
            in SaaS animation videos see stronger saas video ROI through higher
            trial signups, shorter sales cycles, and fewer onboarding tickets,
            because the same video that convinces a prospect can also walk a new
            user through their first login. Your sales team gets a consistent
            asset that explains the product identically every time, whichever
            rep is presenting.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;