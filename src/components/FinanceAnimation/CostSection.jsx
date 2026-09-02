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
              <p className="subtitle">Finance Animation</p>

              <h2 className={styles.title}>
                Why Animation Matters in the Finance Industry?
              </h2>

              <h3 className={styles.innerTitle}>
                The Challenge: Trust Requires Clarity, and Finance Rarely Delivers It
              </h3>

              <p className={styles.description}>
                Financial products and services are often explained through dense
                documentation and jargon that clients are unlikely to read
                closely, which leaves them making decisions without fully
                understanding what they are agreeing to. Advisors and
                relationship managers spend a meaningful part of every client
                conversation simply explaining basic mechanics before they can
                discuss strategy; compliance requirements mean marketing claims
                need to be worded precisely, and content often needs updating as
                products, rates, or regulations change. Static brochures and PDFs
                do not scale well across a growing client base or a large advisor
                network that needs to explain the same products consistently,
                which leaves plenty of room for inconsistent messaging between
                advisors.
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
            The Benefit: Confidence Built on Understanding
          </h3>

          <p className={styles.bottomText}>
            Finance animation videos translate dense financial concepts into
            something a client can follow in a few minutes, which builds the
            kind of confidence that written disclosures alone rarely achieve.
            A clear financial explainer video can walk a prospective client
            through an investment product or banking service before they ever
            meet with an advisor, reducing pressure on client-facing teams while
            improving informed decision-making. Financial institutions using
            animated finance video content report stronger client engagement,
            more consistent advisor conversations, and marketing that builds
            trust instead of simply meeting a compliance requirement, which over
            time strengthens the relationship between the institution and the
            client.
          </p>

          <div className={styles.divider}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;