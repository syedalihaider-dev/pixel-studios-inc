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
              <p className="subtitle">Ecommerce Video Production</p>
              <h2 className={styles.title}>The Challenge: Selling in a Feed Full of Lookalikes</h2>
              <h3 className={styles.innerTitle}>The Challenge: Science That Cannot Be Photographed</h3>
              <p className={styles.description}>
                What are ecommerce brands really competing against? A screen where every product looks like a thumbnail next to a dozen near-identical alternatives, judged in seconds. Static photography cannot show how a product performs, and live-action shoots are expensive, slow to schedule, and locked in the moment they are filmed. The second your packaging or promotion changes, the footage no longer matches what is for sale. Meanwhile, return rates climb when photos set the wrong expectations, ad fatigue sets in when creative cannot keep pace with the platforms, and every new SKU means another costly shoot. For fast-moving brands, that production bottleneck quietly caps how fast marketing can move.
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
          <h3 className={styles.innerTitle}>The Benefit: One Asset, Every Platform, No Reshoots</h3>
          <p className={styles.bottomText}>
            What does 3D animation for ecommerce fix that photography cannot? A single 3D product animation can be re-cut into a Shopify hero video, an Amazon listing video, and a dozen social ad variants without a reshoot, and it can show internal mechanisms and materials no camera could capture. Brands using animated ecommerce product video report stronger ecommerce video conversion rate performance, lower return rates from clearer expectations, and creative that scales across every platform their customers shop on. New colorways and packaging updates reach your marketing in days instead of waiting weeks for a reshoot.
          </p>
          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
