'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CTAButton from '@/components/Common/CTAButton';
import styles from './HealthcareCluttered.module.css';

export default function HealthcareCluttered({ content }) {

  return (
    <>
      <section className={styles.clutteredSection}>
        <div className="container relative z-10">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div
                className={styles.videoThumbnailWrapper}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={styles.thumbnailContainer}>
                  <Image 
                    src={content.thumbnail}
                    alt={content.thumbnailAlt}
                    width={778}
                    height={511}
                    className={styles.thumbnailImage}
                  />
                </div>
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
                <ul className={styles.list}>
                  {content.items.map((item) => <li key={item}><strong>{item}</strong></li>)}
                </ul>
                <div className={`d-flex gap-3 ${styles.buttonsWrapper}`}>
                  {content.ctas.map((cta) => <CTAButton key={cta.text} text={cta.text} href={cta.href} variant={cta.variant} className={cta.variant === 'outline' ? styles.primaryCallButton : undefined} />)}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
