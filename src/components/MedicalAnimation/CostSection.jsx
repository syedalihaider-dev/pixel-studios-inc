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
              <p className="subtitle">Medical 3D Animation & Simulation</p>
              <h2 className={styles.title}>Transform Complex Medical Concepts into Clear Visual Stories</h2>
              <p className={styles.description}>
                Medicine involves processes that happen at scales no camera can capture, inside structures no photograph can show, and at speeds no human eye can follow in real time. Medical 3D animation and simulation bridges that gap. A mechanism of action animation can show a drug molecule binding to a receptor at the cellular level. A surgical procedure animation can walk a patient through each step of an operation before they experience it. A medical device animation can demonstrate how an implant integrates with surrounding tissue in a way that no physical sample or brochure can replicate. These are not visual enhancements to a medical argument. They are the clearest and most credible way to make it.
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
                src="https://player.vimeo.com/video/1200541039?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSection;
