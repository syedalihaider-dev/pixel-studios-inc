"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: "Software",
    text: "Product and feature animation for SaaS platforms, applications, and digital tools across every stage of the customer journey.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "AI",
    text: "Animation explaining machine learning models, AI-powered features, and data processes to both technical and non-technical audiences.",
    icon: "/industry/services-icon-02.png",
  },
  {
    title: "Product Launches",
    text: "Launch-focused animation generating buzz and clarity around a new product or major feature release your team is planning.",
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
            Common Technology Animation Projects
          </h2>

          <p className={styles.subtitle}>
            Across software, AI, and hardware companies, three project types
            come up most often, each tied to a specific point in the customer
            journey.
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
              className="col-lg-4 col-md-6"
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