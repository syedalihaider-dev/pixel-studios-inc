'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareDealing.module.css';

export default function HealthcareDealing({ content }) {
  return (
    <section className={styles.dealingSection}>
      <div className="container relative z-10">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={styles.imageContainer}
            >
              <Image
                src={content.image}
                alt={content.imageAlt}
                width={778}
                height={511}
                className={styles.dealingImage}
              />
            </motion.div>
          </div>

          <div className="col-lg-6 pl-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.mainHeading}>{content.title}</h2>
              <p className={styles.para}>{content.description}</p>
              <div className="mt-4">
                <CTAButton text={content.cta.text} href={content.cta.href} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
