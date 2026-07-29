"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: "Supply Chain",
    text: "Full network visualizations for sales, partner, and investor conversations, covering every mode involved in moving freight from point to point.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "Fleet",
    text: "Vehicle and transport animations showcasing routing, tracking, and delivery capability to enterprise clients evaluating your service against competitors.",
    icon: "/industry/services-icon-02.png",
  },
  {
    title: "Warehouse",
    text: "Facility and automation animations for operations marketing, client onboarding, and internal training across sites with varying levels of automation.",
    icon: "/industry/services-icon-03.png",
  },
  {
    title: "Safety",
    text: "Standardized safety training animations deployed consistently across every facility, regardless of local language, shift patterns, or crew turnover.",
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
            Common Logistics Animation Projects
          </h2>

          <p className={styles.subtitle}>
            Across 3PLs, carriers, and warehouse operators, four project types come up again and again, each serving a different audience inside and outside the company.
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