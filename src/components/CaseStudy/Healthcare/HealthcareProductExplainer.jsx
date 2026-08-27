'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareProductExplainer.module.css';

export default function HealthcareProductExplainer({ content }) {

  return (
    <>
      <section className={styles.explainerSection}>
        <div className="container relative z-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className={styles.mainHeading}>{content.title}</h2>
                <p className={styles.para}>{content.description}</p>
                <div className={`d-flex gap-3 ${styles.buttonsWrapper}`}>
                  {content.ctas.map((cta) => <CTAButton key={cta.text} text={cta.text} href={cta.href} variant={cta.variant} />)}
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className={styles.videoThumbnailWrapper}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.thumbnailContainer}>
                  {/* YouTube thumbnail directly embedded */}
                  <Image
                    src={content.thumbnail}
                    alt={content.thumbnailAlt}
                    width={800}
                    height={450}
                    className={styles.thumbnailImage}
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
