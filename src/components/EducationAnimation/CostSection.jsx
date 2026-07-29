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
              <p className="subtitle">Education Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Education Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Attention and Retention Are Both Working Against You
              </h3>

              <p className={styles.description}>
                What makes educational content so hard to deliver effectively?
                Attention spans are short, and abstract or highly technical
                concepts are difficult to explain through text or static slides
                alone. Educators and training teams need content that supports
                different learning styles, while LMS platforms and YouTube demand
                more engaging formats than written material can provide. Content
                also needs to remain accessible across languages and abilities,
                yet many organizations continue relying on outdated resources
                because producing new material takes too much time and budget.
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
            The Benefit: Concepts That Stick Because They Were Seen, Not Just Read
          </h3>

          <p className={styles.bottomText}>
            What changes when a lesson becomes something learners watch rather
            than read? Animation improves comprehension and retention,
            particularly for spatial, sequential, and process-based concepts
            that are difficult to explain with text alone. Whiteboard animation
            for schools and educational animation videos consistently improve
            engagement, completion, and knowledge recall. Schools, universities,
            and training teams gain content that performs equally well in the
            classroom, inside an LMS, or on YouTube, extending the value of a
            single production across multiple courses and audiences.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;