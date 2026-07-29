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
              <p className="subtitle">Real Estate Animation</p>
              <h2 className={styles.title}>Why Animation Matters in the Real Estate Industry?</h2>
              <h3 className={styles.innerTitle}>The Challenge: Selling What Cannot Be Toured</h3>
              <p className={styles.description}>
                Why is off-plan selling so hard? Buyers are asked to commit to something they cannot walk through, and static renderings leave too much to the imagination for a purchase this large. Developers need materials that work in investor decks, sales galleries, and digital campaigns at the same time, but photography is impossible for an unbuilt property, and physical scale models are slow to produce, expensive to ship, and impossible to update. Design changes are routine during development, so sales teams end up working with materials that no longer match what is being built. International buyers add another layer of difficulty, because flying prospects to an active construction site is unrealistic, and the first impression has to happen entirely on a screen.
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
          <h3 className={styles.innerTitle}>The Benefit: A Walkthrough Before the Walls Exist</h3>
          <p className={styles.bottomText}>
            What changes when buyers can actually experience the property? Real estate 3d animation lets them walk a unit, tour a lobby, or fly over an entire community before construction finishes, and the underlying model updates quickly as designs evolve. Developers using real estate video animation see stronger pre-sales momentum, more persuasive investor presentation animation for capital raises, and marketing that performs consistently everywhere, from sales centers to social media to overseas roadshows where a site visit is simply not an option.
          </p>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
