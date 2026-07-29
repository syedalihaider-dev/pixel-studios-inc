"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: "Research Visualization",
    text: "Raw research data, assay results, and lab findings translated into clear visual sequences for internal teams, publications, conference posters, and investor updates.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "Drug Mechanisms",
    text: "Mechanism of action animations showing how a compound engages its biological target at the cellular and molecular level, built to withstand scrutiny from reviewers, KOLs, and specialists.",
    icon: "/industry/services-icon-02.png",
  },
  {
    title: "Investor Presentations",
    text: "Focused explainer assets supporting fundraising rounds, board updates, and partner due diligence, sized to fit inside a pitch deck without overwhelming a business audience.",
    icon: "/industry/services-icon-03.png",
  },
  {
    title: "Product Demos",
    text: "Accurate walkthroughs of how a device, platform, or therapy functions, built for sales teams, medical affairs, and physician education programs that need one approved source of visual truth.",
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
            Common BioTech Animation Projects
          </h2>

          <p className={styles.subtitle}>
            Most engagements with our medical animation studio fall into one of four project types, though many clients combine two or more into a single production once the core scientific assets exist.
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
