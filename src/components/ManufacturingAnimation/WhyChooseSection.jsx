"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSection.module.css';

const features = [
  {
    title: "Processes",
    text: "Full production process animation showing how raw materials move through assembly to become a finished product, start to finish.",
    icon: "/industry/services-icon-01.png",
  },
  {
    title: "Safety",
    text: "Standardized safety training animation deployed consistently across facilities, shifts, and new employee onboarding programs.",
    icon: "/industry/services-icon-02.png",
  },
  {
    title: "Machinery",
    text: "Equipment and machinery animation used for technical sales, training, and internal engineering documentation shared across teams.",
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
            Common Manufacturing Animation Projects
          </h2>

          <p className={styles.subtitle}>
            Across plants and equipment manufacturers, three project types come
            up most often, each solving a different communication gap on the
            floor.
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