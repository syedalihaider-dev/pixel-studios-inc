'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareHighlight.module.css';

export default function HealthcareHighlight({ content }) {
  return (
    <section className={styles.highlightSection}>
      <div className="container relative z-10">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.mainHeading}>{content.title}</h2>
              <p className={styles.para}>{content.description}</p>
              <div className="mt-5">
                <CTAButton text={content.cta.text} href={content.cta.href} />
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-4 offset-lg-1">
            <motion.div
              className="row"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {content.meta.map((item) => (
                <div className="col-6 mb-5" key={item.label}>
                  <h4 className={styles.subTitle}>{item.label}</h4>
                  <p className={styles.subPara}>{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
