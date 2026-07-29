"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: "Product Launches",
    text: "Hero videos and teaser content that introduce a new product with maximum visual impact across homepage, email, and social, timed to build anticipation ahead of a drop date.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "Ads",
    text: "3d animation video ads engineered for scroll-stopping performance on paid social, display, and connected TV, with hooks built for the first two seconds of a feed.",
    icon: "/industry/services-icon-02.png",
  },
  {
    title: "Social Media",
    text: "Short-form, platform-native cuts optimized for Instagram, TikTok, and YouTube Shorts. Vertical, fast, and built to hold attention without sound.",
    icon: "/industry/services-icon-03.png",
  },
  {
    title: "Product Pages",
    text: "On-page video assets that reduce buyer hesitation and support the ecommerce testimonial video and demo content shoppers scan before checkout.",
    icon: "/industry/services-icon-04.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhyChooseSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Common Ecommerce Animation Projects
          </h2>

          <p className={styles.subtitle}>
            Where do brands typically deploy this work? Across four high-leverage moments in the customer journey, each with its own format, length, and pacing requirements.
          </p>
        </motion.div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="col-lg-6 col-md-12" variants={itemVariants}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={108}
                    height={108}
                    className={styles.icon}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardText}>{feature.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
