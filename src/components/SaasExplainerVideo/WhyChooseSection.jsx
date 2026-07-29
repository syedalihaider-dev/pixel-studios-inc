"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: "Onboarding",
    text: "Guided walkthrough videos that shorten time-to-value for new users and cut repetitive support questions in the first weeks after signup, so users reach their first win faster.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "Feature Launches",
    text: "Short, focused videos announcing new functionality to users and prospects, timed to your release schedule and built to drive adoption rather than just awareness.",
    icon: "/industry/services-icon-02.png",
  },
  {
    title: "Sales",
    text: "Demo and pitch-ready assets giving your sales team one consistent way to explain the product in every call and every deck, regardless of rep experience level.",
    icon: "/industry/services-icon-03.png",
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
            Common SaaS Animation Projects
          </h2>

          <p className={styles.subtitle}>
            Where does SaaS explainer production create the most measurable impact? Three recurring project types, each mapped to a metric your team already tracks.
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
            <motion.div
              key={index}
              className="col-lg-6 col-md-12"
              variants={itemVariants}
            >
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